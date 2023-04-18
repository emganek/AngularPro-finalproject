import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'firebase/auth';
import { Workout, WorkoutsService } from 'src/app/health/shared/services/workouts/workouts.service';
import { Store } from 'src/app/store';


@Component({
  selector: 'workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {
  workouts$ = this.store.select<Workout[]>('workouts');
  subscription!: Unsubscribe;

  constructor(private workoutsService: WorkoutsService, private store: Store) { }

  ngOnInit(): void {
    this.subscription = this.workoutsService.getWorkouts();
  }

  async removeWorkout(event: Workout) {
    console.log("remove", event);
    try {
      await this.workoutsService.removeWorkout(event.$key!);
      console.log("delete successfully");
    } catch (error) {
      console.log("delete fail");
    };
  }

  ngOnDestroy(): void {
    this.workouts$;
    this.subscription();
  }
}
