import { Injectable } from '@angular/core';
import { Dice, DicesState } from '../interfaces/dice.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromDices from '../store/new-dice.selector';
import { newDiceActions } from '../store/new-dice.actions';
import { diceActions } from '../store/dice.actions';

@Injectable({
  providedIn: 'root'
})
export class NewDicesService {

  constructor(private store: Store<{ newDicesReducer: DicesState}>) { }

  selectDicesFeature(): Observable<DicesState>{
    return this.store.select(fromDices.selectDicesFeature);
  }

  addDice(dices: Dice[]): void {
    this.store.dispatch(newDiceActions.addDice({dices}));
  }

  sumAllValues(): void {
    this.store.dispatch(newDiceActions.sumAllValues())
  }

  reset(): void{
    this.store.dispatch(newDiceActions.reset());
  }
}
