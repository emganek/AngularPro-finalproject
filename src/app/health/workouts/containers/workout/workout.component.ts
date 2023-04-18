import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Unsubscribe } from 'firebase/auth';
import { map, Observable, switchMap } from 'rxjs';
import { Workout, WorkoutsService } from 'src/app/health/shared/services/workouts/workouts.service';


@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy {
  workout$!: Observable<Workout | undefined>;
  subscription!: Unsubscribe;
  constructor(
    private workoutsService: WorkoutsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.subscription = this.workoutsService.getWorkouts();
    this.workout$ = this.route.params.pipe(
      switchMap((param) => {
        return this.workoutsService.getWorkout(param['id']);
      }
      ));
  }

  async addWorkout(event: Workout) {
    const hiep = await this.workoutsService.addWorkout(event);
    console.log("workout added feedback", hiep);
    this.backToWorkouts();
  }

  async updateWorkout(event: Workout) {
    const key = this.route.snapshot.params['id'];
    await this.workoutsService.updateWorkout(key, event)
    this.backToWorkouts();
  }

  async removeWorkout(event: Workout) {
    const key = this.route.snapshot.params['id'];
    await this.workoutsService.removeWorkout(key)
    this.backToWorkouts();
  }

  backToWorkouts() {
    this.router.navigate(['workouts']);
  }

  ngOnDestroy(): void {
    this.subscription();
  }

}
