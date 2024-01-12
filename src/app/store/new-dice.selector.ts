import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DicesState } from "../interfaces/dice.interface";

export const diceFeatureKey = 'newDicesReducer';

export const selectDicesFeature = createFeatureSelector<DicesState>(diceFeatureKey);

export const selectDicesTotal = createSelector(
    selectDicesFeature,
    (dicesState: DicesState) => dicesState.total
)