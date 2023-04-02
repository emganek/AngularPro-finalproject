import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Meal } from 'src/app/health/shared/services/meals/meals.service';

@Component({
  selector: 'meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
})
export class MealFormComponent implements OnInit {
  @Output() create = new EventEmitter<any>();
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

  createMeal(){
    if (this.form.valid){
      this.create.emit(this.form.value);
    }
  }

  addIngredient(){
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index:number){
    this.ingredients.removeAt(index);
  }

}
