import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal, MealsService } from 'src/app/health/shared/services/meals/meals.service';

@Component({
  selector: 'meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor(
    private mealsService: MealsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async addMeal(event: Meal) {
    const hiep = await this.mealsService.addMeal(event);
    console.log("meal added feedback", hiep);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }
}
