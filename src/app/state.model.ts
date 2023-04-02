import { User } from "./auth/shared/services/auth.service";
import { Meal } from "./health/shared/services/meals/meals.service";

export interface State{
    user: User | undefined,
    meals: Meal[],
    [key:string]: any;
}