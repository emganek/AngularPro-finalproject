import { User } from "./auth/shared/services/auth.service";
import { Meal } from "./health/shared/services/meals/meals.service";
import { Workout } from "./health/shared/services/workouts/workouts.service";

export interface State{
    user: User | undefined,
    meals: Meal[],
    workouts: Workout[],
    [key:string]: any;
}