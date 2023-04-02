import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/shared/guards/auth.guard';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'meals',
    canActivate: [AuthGuard],
    loadChildren: () => import('./meals/containers/meals.module').then(m => m.MealsModule)
  },
  {
    path: 'schedules',
    canActivate: [AuthGuard],
    loadChildren: () => import('./schedules/containers/schedules.module').then(m => m.SchedulesModule)
  },
  {
    path: 'workouts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./workouts/containers/workouts.module').then(m => m.WorkoutsModule)
  },
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot(),
  ],
})
export class HealthModule { }
