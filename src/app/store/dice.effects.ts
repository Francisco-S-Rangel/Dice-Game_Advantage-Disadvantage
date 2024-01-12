import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { diceActions } from "./dice.actions";
import { catchError, delay, map, of, mergeMap, tap, EMPTY, takeUntil, from } from "rxjs";
import { Store } from "@ngrx/store";

@Injectable()
export class DiceEffects {

}