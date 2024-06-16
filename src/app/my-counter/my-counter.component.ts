import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {Store} from "@ngrx/store"
import {decrement, increment, reset} from "../../store/counter/counter.actions";

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  $count: Observable<number> | undefined;

  constructor(public store: Store<{count: number}>) {
    this.$count = store.select('count')
  }

  handleIncrement(){
    this.store.dispatch(increment())
  }

  handleDecrement(){
    this.store.dispatch(decrement())
  }

  handleReset(){
    this.store.dispatch(reset())
  }
}
