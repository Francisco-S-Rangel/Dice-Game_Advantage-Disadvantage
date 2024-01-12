import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dice } from '../models/dice';
import { Observable } from 'rxjs';
import * as fromDice from '../store/dice.selector';
import { diceActions } from '../store/dice.actions';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  constructor(private store: Store<{ diceReducer: Dice}>) { }

  selectDiceFeature(): Observable<Dice>{
    return this.store.select(fromDice.selectDiceFeature);
  }

  addValue(value: number): void{
    this.store.dispatch(diceActions.addValue({ value }));
  }

  addMultiplesValues(value: number): void{
    this.store.dispatch(diceActions.addMultiplesValues({ value }));
  }

  addMultiplesValuesAdvantage(): void{
    this.store.dispatch(diceActions.addMultiplesValuesAdvantage());
  }

  addMultiplesValuesDisadvantage(): void{
    this.store.dispatch(diceActions.addMultiplesValuesDisadvantage());
  }

  sumAllTheValues(): void{
    this.store.dispatch(diceActions.sumAllTheValues());
  }

  reset(): void{
    this.store.dispatch(diceActions.reset());
  }
}
