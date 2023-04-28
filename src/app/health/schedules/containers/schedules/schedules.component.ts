import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'firebase/database';
import { Observable, Subscription } from 'rxjs';
import { Meal, MealsService } from 'src/app/health/shared/services/meals/meals.service';
import { ScheduleItem, ScheduleService } from 'src/app/health/shared/services/schedule/schedule.service';
import { Workout, WorkoutsService } from 'src/app/health/shared/services/workouts/workouts.service';
import { Store } from 'src/app/store';

@Component({
  selector: 'schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit, OnDestroy {
  date$!: Observable<Date>;
  selected$!: Observable<any>;
  list$!: Observable<Meal[] | Workout[]>;
  schedule$!: Observable<ScheduleItem[]>;
  subscriptions!: Subscription[];
  subscriptionMeals!: Unsubscribe;
  subscriptionWorkouts!: Unsubscribe;
  open = false;

  constructor(private scheduleService: ScheduleService, private store: Store, private mealsService: MealsService,
    private workoutsService: WorkoutsService,) { }

  ngOnInit(): void {
    this.date$ = this.store.select('date');
    this.schedule$ = this.store.select('schedule');
    this.selected$ = this.store.select('selected');
    this.list$ = this.store.select('list');
    this.subscriptionMeals = this.mealsService.getMeals();
    this.subscriptionWorkouts = this.workoutsService.getWorkouts();
    this.subscriptions = [
      this.scheduleService.schedule$.subscribe(),
      this.scheduleService.selected$.subscribe(),
      this.scheduleService.list$.subscribe(),
      this.scheduleService.items$.subscribe(),
    ];
  }

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  changeSection(event: any) {
    console.log("changeSection on Schedule", event)
    this.open = true;
    this.scheduleService.selectSection(event);
  }

  assignItem(items: string[]) {
    console.log("assignItem on Schedule", items);
    this.scheduleService.updateItems(items);
    this.closeAssign();
  }

  closeAssign() {
    this.open = false;
  }

  ngOnDestroy() {
    this.subscriptionMeals();
    this.subscriptionWorkouts();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
