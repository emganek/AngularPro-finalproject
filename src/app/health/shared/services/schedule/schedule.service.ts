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
  $key?: string
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
    map(([ items, section ]: any[]) => {

      const id = section.data.$key;
      console.log("sectionnnnnnnn", section);
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
        console.log("updateeee", id);
        return this.updateSection(id, payload);
      } else {
        console.log("createeeeeeeeeeee", id);

        return this.createSection(payload);
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
      console.log("time", next);
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
    switchMap(({ startAt, endAt }: any) => this.getSchedule(startAt, endAt)),
    map((data: any) => {
      console.log("settttttt schedule", data);
      const mapped: ScheduleList = {};

      for (const prop in data) {
        if (!mapped[data[prop].section]) {
          mapped[data[prop].section] = data[prop];
        }
      }
      console.log("mapped", mapped)
      return mapped;

    }),
    tap((next: any) => this.store.set('schedule', next))
  );

  constructor(private store: Store, private authService: AuthService) { }

  updateDate(date: Date) {
    this.date$.next(date);
  }

  updateItems(items: string[]) {
    this.itemList$.next(items);
  }

  private async getSchedule(startAt: number, endAt: number) {
    console.log("getSchedulelllllllll")
    const dbRef = ref(fireDatabase, `schedule/${this.uid}`);
    const myquery = query(dbRef, orderByChild('timestamp'), sstartAt(startAt), eendAt(endAt));
    const myPromise = new Promise<any[]>((resolve: any, reject: any) => {
      onValue(myquery, (snapshot) => {
        if (snapshot.exists()) {
          console.log("getSchedule snapshotttttttttttttttt", snapshot.val());
          resolve(snapshot.val() === null ? [] : snapshot.val());
        } else {
          resolve([]);
        }
      }, {
        onlyOnce: false
      });
    });
    const result = await myPromise;
    return result;
  }

  selectSection(event: any) {
    this.section$.next(event);
  }

  private createSection(payload: ScheduleItem) {
    const postListRef = ref(fireDatabase,`schedule/${this.uid}`);
    const newPostRef = push(postListRef);
    return set(newPostRef, payload);
  }

  private updateSection(key: string, payload: ScheduleItem) {
    const postListRef = ref(fireDatabase, `schedule/${this.uid}/${key}`);
    return update(postListRef, payload);
  }
}
