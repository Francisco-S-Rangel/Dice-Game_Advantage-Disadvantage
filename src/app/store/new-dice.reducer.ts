import { createReducer, on } from "@ngrx/store";
import { Dice, DicesState } from "../interfaces/dice.interface";
import { defaultDices } from "../models/defaultDices";
import { newDiceActions } from "./new-dice.actions";

export const initialDicesState: DicesState = {
    diceValues: [],
    total: 0,
}

export const newDicesReducer = createReducer(
    initialDicesState,
    on(newDiceActions.reset, () => initialDicesState),
    on(newDiceActions.addDice, (state, { dices }) => {
        const updatedDiceValues = [...state.diceValues, ...dices];
        return {
          ...state,
          diceValues: updatedDiceValues,
        };
      }),
    on(newDiceActions.sumAllValues, (state) => {
        const total = state.diceValues.reduce((acc, d) => {
            const result = d.diceResult?.rolledValue.reduce((sum, value) => sum + value, 0) || 0;
            return acc + result;
          }, 0);
      
          return {
            ...state,
            total,
          };
    })
)