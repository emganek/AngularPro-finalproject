import { Injectable } from '@angular/core';
import { onValue, push, ref, remove, set, update } from 'firebase/database';
import { filter, map, of } from 'rxjs';
import { fireDatabase } from 'src/app/app.module';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { Store } from 'src/app/store';

export interface Workout {
  name?: string,
  type?: string,
  strength?: any,
  endurance?: any,
  timestamp?: number,
  $key?: string,
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  constructor(private store: Store, private authService: AuthService) {
  }

  get uid() {
    return this.authService.user?.uid
  }

  getWorkouts() {
    const dbRef = ref(fireDatabase, `workouts/${this.uid}`);
    return onValue(dbRef, (snapshot) => {
      if (!snapshot.exists()) {
        this.store.set('workouts', []);
      } else {
        let tempArr: Workout[] = [];
        snapshot.forEach((ele: any) => {
          const item = { ...ele.val(), $key: ele.key }
          tempArr.push(item);
        });
        console.log("tempArr", tempArr)
        this.store.set('workouts', tempArr);
      }
    }, {
      onlyOnce: false
    });
  }

  addWorkout(workout: Workout) {
    const postListRef = ref(fireDatabase, `workouts/${this.uid}`);
    const newPostRef = push(postListRef);
    return set(newPostRef, workout);
  }

  updateWorkout(key: string, workout: Workout) {
    const postListRef = ref(fireDatabase, `workouts/${this.uid}/${key}`);
    return update(postListRef, workout);
  }

  removeWorkout(key: string) {
    const postListRef = ref(fireDatabase, `workouts/${this.uid}/${key}`);
    return remove(postListRef);
  }

  getWorkout(key: any) {
    if (!key) return of({} as Workout);
    return this.store.select<Workout[]>('workouts').pipe(
      filter(Boolean),
      map(workouts => workouts.find((workout: Workout) => workout.$key === key))
    )
  }
}
