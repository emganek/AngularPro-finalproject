import { BehaviorSubject, distinctUntilChanged, map, Observable, pluck } from "rxjs"
import { State } from "./state.model";

const state: State = {
    user: undefined,
    meals: undefined!,
    workouts: undefined!
}

export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(
            pluck(name)
        )
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        })
    }
}