import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'firebase/auth';
import { Meal, MealsService } from 'src/app/health/shared/services/meals/meals.service';
import { Store } from 'src/app/store';

@Component({
  selector: 'meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit, OnDestroy {
  meals$ = this.store.select<Meal[]>('meals');
  subscription!:Unsubscribe;

  constructor(private mealsService: MealsService, private store: Store) { }

  ngOnInit(): void {
    this.subscription = this.mealsService.getMeals();
  }

  ngOnDestroy(): void {
    this.meals$;
    this.subscription();
  }
}
