import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MealsModule } from '../meals/containers/meals.module';
import { MealsService } from './services/meals/meals.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        MealsModule,
        MealsService
      ]
    }
  }
}
