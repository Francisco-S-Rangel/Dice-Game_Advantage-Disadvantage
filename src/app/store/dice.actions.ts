import { createAction, props } from "@ngrx/store";

export const RESET = 'Reset';
export const ADDVALUE = 'AddValue';
export const ADDMULTIPLEVALUES = 'AddMultipleValues';
export const MULTIPLEVALUESADVANTAGE = 'MultipleValuesAdvantage';
export const MULTIPLEVALUESDISADVANTAGE = 'MultipleValuesDisadvantage';
export const SUMALLVALUES = 'SumAllValues';

export const diceActions = {

    //Obj Dice 
    reset: createAction(RESET),
    addValue: createAction(ADDVALUE, props<{value: number}>()),
    addMultiplesValues: createAction(ADDMULTIPLEVALUES, props<{value: number}>()),
    addMultiplesValuesAdvantage: createAction(MULTIPLEVALUESADVANTAGE),
    addMultiplesValuesDisadvantage: createAction(MULTIPLEVALUESDISADVANTAGE),
    sumAllTheValues: createAction(SUMALLVALUES)

}