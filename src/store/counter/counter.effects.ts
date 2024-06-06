import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {decrement, increment, reset} from "./counter.actions";
import {map} from "rxjs";

@Injectable()
export class CounterEffects{
  logIncrement$ = createEffect(() =>
    this.$actions.pipe(
        ofType(increment),
        map(() => {
            console.log('Increment action effect triggered')
            return {type: '[Counter Effect] Log Increment'}
        })
      )
  )

  logDecrement$ = createEffect(() =>
    this.$actions.pipe(
      ofType(decrement),
      map(() => {
        console.log('Decrement action effect triggered')
      }),
    ), {dispatch: false}
  )

  logReset$ = createEffect(() =>
    this.$actions.pipe(
      ofType(reset),
      map(() => {
        console.log('Reset action effect triggered')
      }),
    ), {dispatch: false}
  )

  constructor(private $actions: Actions) {
  }
}
