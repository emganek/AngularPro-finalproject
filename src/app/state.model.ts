import { User } from "./auth/shared/services/auth.service";
import { Meal } from "./health/shared/services/meals/meals.service";
import { ScheduleItem } from "./health/shared/services/schedule/schedule.service";
import { Workout } from "./health/shared/services/workouts/workouts.service";

export interface State{
    user: User | undefined,
    meals: Meal[],
    workouts: Workout[],
    date: Date,
    schedule: ScheduleItem[],
    selected:any,
    [key:string]: any;
}