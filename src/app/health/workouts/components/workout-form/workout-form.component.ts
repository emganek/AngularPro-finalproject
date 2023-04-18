import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Workout } from 'src/app/health/shared/services/workouts/workouts.service';

@Component({
  selector: 'workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnInit {
  toggled = false;
  exists = false;
  @Input() workout!: Workout;
  @Output() create = new EventEmitter<Workout>();
  @Output() update = new EventEmitter<Workout>();
  @Output() remove = new EventEmitter<Workout>();
  form = this.fb.group({
    name: ['', Validators.required],
    type: 'strength',
    strength: this.fb.group({
      reps: 0,
      sets: 0,
      weight: 0
    }),
    endurance: this.fb.group({
      distance: 0,
      duration: 0
    })
  })

  // get ingredients(){
  //   return this.form.get('ingredients') as FormArray;
  // }

  get required() {
    return this.form.get('name')?.hasError('required') && this.form.get('name')?.touched;
  }

  constructor(private fb: FormBuilder) { }

  get placeholder() {
    return `e.g. ${this.form.get('type')?.value === 'strength' ? 'Benchpress' : 'Treadmill'}`;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.workout && this.workout.name) {
      this.exists = true;
      const value = this.workout;
      this.form.patchValue(value);
    }
  }

  createWorkout() {
    if (this.form.valid) {
      this.create.emit(this.form.value as Workout);
    }
  }

  updateWorkout() {
    this.update.emit(this.form.value as Workout);
  }

  removeWorkout() {
    this.remove.emit(this.form.value as Workout);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
