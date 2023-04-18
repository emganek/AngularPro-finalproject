import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Meal } from 'src/app/health/shared/services/meals/meals.service';

@Component({
  selector: 'meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
})
export class MealFormComponent implements OnInit, OnChanges {
  toggled = false;
  exists = false;
  @Input() meal!: Meal;
  @Output() create = new EventEmitter<Meal>();
  @Output() update = new EventEmitter<Meal>();
  @Output() remove = new EventEmitter<Meal>();
  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array(['']),
  })

  get ingredients(){
    return this.form.get('ingredients') as FormArray;
  }

  get required(){
    return this.form.get('name')?.hasError('required') && this.form.get('name')?.touched;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.meal && this.meal.name){
      this.exists = true;

      const value = this.meal;
      this.form.patchValue(value);

      this.emptyIngredients();

      if (value.ingredients){
        for(const item of value.ingredients){
          this.ingredients.push(new FormControl(item));
        }
      }
    }
  }

  emptyIngredients(){
    while(this.ingredients.controls.length){
      this.ingredients.removeAt(0);
    }
  }

  createMeal(){
    if (this.form.valid){
      this.create.emit(this.form.value as Meal);
    }
  }

  addIngredient(){
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index:number){
    this.ingredients.removeAt(index);
  }

  updateMeal(){
    this.update.emit(this.form.value as Meal);
  }

  removeMeal(){
    this.remove.emit(this.form.value as Meal);
  }

  toggle() {
    this.toggled = !this.toggled;
  }

}
