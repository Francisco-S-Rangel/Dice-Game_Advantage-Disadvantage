import { createAction, props } from "@ngrx/store";
import { Dice } from "../interfaces/dice.interface";

export const RESET = "Reset";
export const ADDDICE = "AddDice";
export const SUMALLVALUES = "SumAllValues";
//export const ADDDICEADVANTAGE = "AddDiceAdvantage";

export const newDiceActions = {

    reset: createAction(RESET),
    addDice: createAction(ADDDICE, props<{ dices: Dice[] }>()),
    sumAllValues: createAction(SUMALLVALUES)

}

