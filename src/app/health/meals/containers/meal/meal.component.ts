import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Unsubscribe } from 'firebase/auth';
import { map, Observable, switchMap } from 'rxjs';
import { Meal, MealsService } from 'src/app/health/shared/services/meals/meals.service';

@Component({
  selector: 'meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnDestroy {
  meal$!: Observable<Meal | undefined>;
  subscription!: Unsubscribe;
  constructor(
    private mealsService: MealsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.subscription = this.mealsService.getMeals();
    this.meal$ = this.route.params.pipe(
      switchMap((param) => {
        return this.mealsService.getMeal(param['id']);
      }
      ));
  }

  async addMeal(event: Meal) {
    const hiep = await this.mealsService.addMeal(event);
    console.log("meal added feedback", hiep);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }

  ngOnDestroy(): void {
    this.subscription();
  }
}
