import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Dice } from "../models/dice";


export const diceFeatureKey = 'diceReducer';

export const selectDiceFeature = createFeatureSelector<Dice>(diceFeatureKey);

export const selectDiceValues = createSelector(
    selectDiceFeature,
    (diceState: Dice) => diceState.values
);

export const selectDiceDiscarded = createSelector(
    selectDiceFeature,
    (diceState: Dice) => diceState.discarded
);

export const selectDiceTotal = createSelector(
    selectDiceFeature,
    (diceState: Dice) => diceState.total
)