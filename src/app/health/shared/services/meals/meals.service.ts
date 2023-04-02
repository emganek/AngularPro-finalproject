import { Injectable } from '@angular/core';
import { Database, onValue, ref } from 'firebase/database';
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
      if (snapshot.exists()){
        this.store.set('meals', []);
      }else{
        let tempArr:Meal[] =[];
        snapshot.forEach((ele:any)=>{
          tempArr.push(ele);
        });
        this.store.set('meals', tempArr);
      }
    }, {
      onlyOnce: false
    });
  }
}
