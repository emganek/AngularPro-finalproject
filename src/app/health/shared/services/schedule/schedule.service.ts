import { Injectable } from '@angular/core';
import { onValue, query, ref, startAt as sstartAt, orderByChild, endAt as eendAt } from 'firebase/database';
import { BehaviorSubject, map, Observable, Subject, switchMap, tap } from 'rxjs';
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
  get uid() {
    return this.authService.user?.uid
  }

  selected$ = this.section$.pipe(
    tap((next: any) => this.store.set('selected', next))
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
      console.log("dataaaaaaaaaaaaaaaaaaaa", data);
      const mapped: ScheduleList = {};

      for (const prop of data) {
        if (!mapped[prop.section]) {
          mapped[prop.section] = prop;
        }
      }

      return mapped;

    }),
    tap((next: any) => this.store.set('schedule', next))
  );

  constructor(private store: Store, private authService: AuthService) { }

  updateDate(date: Date) {
    this.date$.next(date);
  }

  private async getSchedule(startAt: number, endAt: number) {
    const dbRef = ref(fireDatabase, `schedule/${this.uid}`);
    const myquery = query(dbRef, orderByChild('timestamp'), sstartAt(startAt), eendAt(endAt));
    const myPromise = new Promise<any[]>((resolve: any, reject: any) => {
      onValue(myquery, (snapshot) => {
        if (!snapshot.exists()) {
          console.log("ressultttt", snapshot.val());
          resolve(snapshot.val()=== null ? [] : snapshot.val());
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


  getMeals() {
    const dbRef = ref(fireDatabase, `meals/${this.uid}`);
    return onValue(dbRef, (snapshot) => {
      if (!snapshot.exists()) {
        this.store.set('meals', []);
      } else {
        let tempArr: Meal[] = [];
        snapshot.forEach((ele: any) => {
          const item = { ...ele.val(), $key: ele.key }
          tempArr.push(item);
        });
        console.log("tempArr", tempArr)
        this.store.set('meals', tempArr);
      }
    }, {
      onlyOnce: false
    });
  }

  selectSection(event: any) {
    this.section$.next(event);
  }

}
