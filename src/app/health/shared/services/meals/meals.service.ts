import { Injectable } from '@angular/core';
import { Database, onValue, push, ref, remove, set } from 'firebase/database';
import { filter, map, of } from 'rxjs';
import { fireDatabase } from 'src/app/app.module';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { Store } from 'src/app/store';

export interface Meal {
  name?: string,
  ingredients?: string[],
  timestamp?: number,
  $key?: string,
}

@Injectable()
export class MealsService {

  constructor(private store: Store, private authService: AuthService) {
  }

  get uid() {
    return this.authService.user?.uid
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

  addMeal(meal: Meal) {
    const postListRef = ref(fireDatabase, `meals/${this.uid}`);
    const newPostRef = push(postListRef);
    return set(newPostRef, meal);
  }

  removeMeal(key: string) {
    const postListRef = ref(fireDatabase, `meals/${this.uid}/${key}`);
    return remove(postListRef);
  }

  getMeal(key: any) {
    if (!key) return of({} as Meal);
    return this.store.select<Meal[]>('meals').pipe(
      filter(Boolean),
      map(meals => meals.find((meal: Meal) => meal.$key === key))
    )
  }
}
