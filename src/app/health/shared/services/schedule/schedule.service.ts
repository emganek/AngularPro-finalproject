import { Injectable } from '@angular/core';
import { onValue, query, ref, startAt as sstartAt, orderByChild, endAt as eendAt, push, set, update } from 'firebase/database';
import { BehaviorSubject, map, Observable, Subject, switchMap, tap, withLatestFrom } from 'rxjs';
import { fireDatabase } from 'src/app/app.module';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { Store } from 'src/app/store';
import { Meal } from '../meals/meals.service';
import { Workout } from '../workouts/workouts.service';

export interface ScheduleItem {
  meals: Meal[],
  workouts: Workout[],
  section: string,
  timestamp: number,
  key?: string
}

export interface ScheduleList {
  morning?: ScheduleItem,
  lunch?: ScheduleItem,
  evening?: ScheduleItem,
  snacks?: ScheduleItem,
  [key: string]: any
}

@Injectable()
export class ScheduleService {
  private date$ = new BehaviorSubject(new Date());
  private section$ = new Subject();
  private itemList$ = new Subject();
  items$ = this.itemList$.pipe(
    withLatestFrom(this.section$),
    map(async ([items, section]: any[]) => {

      const id = section.data.key;
      const defaults: ScheduleItem = {
        workouts: null!,
        meals: null!,
        section: section.section,
        timestamp: new Date(section.day).getTime()
      };

      const payload = {
        ...(id ? section.data : defaults),
        ...items
      };

      if (id) {
        return this.updateSection(id, payload);
      } else {

        const result = this.createSection(payload);
        return result;
      }

    })
  )

  get uid() {
    return this.authService.user?.uid
  }

  selected$ = this.section$.pipe(
    tap((next: any) => this.store.set('selected', next))
  );

  list$ = this.section$.pipe(
    map((value: any) => this.store.value[value.type]),
    tap((next: any) => this.store.set('list', next))
  );

  schedule$: any = this.date$.pipe(
    tap((next: any) => {
      this.store.set('date', next);
    }),
    map((day: any) => {

      const startAt = (
        new Date(day.getFullYear(), day.getMonth(), day.getDate())
      ).getTime();

      const endAt = (
        new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1)
      ).getTime() - 1;

      return { startAt, endAt };
    }),
    switchMap(({ startAt, endAt }: any) => this.getSchedule(startAt, endAt))
  );

  constructor(private store: Store, private authService: AuthService) { }

  updateDate(date: Date) {
    this.date$.next(date);
  }

  updateItems(items: string[]) {
    this.itemList$.next(items);
  }

  private async getSchedule(startAt: number, endAt: number) {
    const dbRef = ref(fireDatabase, `schedule/${this.uid}`);
    const myquery = query(dbRef, orderByChild('timestamp'), sstartAt(startAt), eendAt(endAt));
    onValue(myquery, (snapshot) => {
      let result: any = {}
      if (snapshot.exists()) {
        result = snapshot.val() === null ? [] : snapshot.val();
      }
      const mapped: ScheduleList = {};

      for (const prop in result) {
        if (!mapped[result[prop].section]) {
          mapped[result[prop].section] = { ...result[prop], key: prop };
        }
      }
      this.store.set('schedule', mapped)
    }, {
      onlyOnce: false
    });
  }

  selectSection(event: any) {
    this.section$.next(event);
  }

  private async createSection(payload: ScheduleItem) {
    const postListRef = ref(fireDatabase, `schedule/${this.uid}`);
    const newPostRef = push(postListRef);
    const result = await set(newPostRef, payload);
    return result
  }

  private updateSection(key: string, payload: ScheduleItem) {
    const postListRef = ref(fireDatabase, `schedule/${this.uid}/${key}`);
    return update(postListRef, payload);
  }
}
