import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {counterReducer} from "../store/counter/counter.reducer";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideEffects} from "@ngrx/effects";
import {CounterEffects} from "../store/counter/counter.effects";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({count: counterReducer}), provideEffects([CounterEffects]) , provideStoreDevtools({
    maxAge: 25, // Retains last 25 states
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    connectInZone: true // If set to true, the connection is established within the Angular zone
  })]
};
