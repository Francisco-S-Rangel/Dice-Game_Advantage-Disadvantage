import { createReducer, on } from "@ngrx/store";
import { diceActions } from "./dice.actions";
import { Dice } from "../models/dice";

//Dices State - Change Name
export const initialValueDice: Dice = {
    values: [],
    discarded: [],
    total: 0
}

export const diceReducer = createReducer(
    initialValueDice,
    on(diceActions.reset, (value) => initialValueDice),
    on(diceActions.addValue, (state, { value }) => {

        const newDiceValue: Dice = {
            values: [...state.values, value],
            discarded: [],
            total: state.total + value
        };

        return newDiceValue;
    }),
    on(diceActions.addMultiplesValues, (state, { value }) => {

        const newDiceValue: Dice = {
            values: [...state.values, value],
            discarded: [...state.discarded],
            total: 0
        };

        return newDiceValue;
    }),
    on(diceActions.addMultiplesValuesAdvantage, (state) => {
        const valuesCopy = [...state.values];
        const valuesDiscarded = [];

        console.log(...state.values);

        if (valuesCopy.length >= 2) {
            const lastValue = valuesCopy.pop();
            const secondLastValue = valuesCopy.pop();

            if (lastValue !== undefined && secondLastValue !== undefined) {
                valuesCopy.push(Math.max(lastValue, secondLastValue));
                valuesDiscarded.push(Math.min(lastValue, secondLastValue));
            }
        }

        if (valuesDiscarded.length >= 2) {
            const lastValue = valuesDiscarded.pop();
            const secondLastValue = valuesDiscarded.pop();

            if (lastValue !== undefined && secondLastValue !== undefined) {
                valuesDiscarded.push(Math.min(lastValue, secondLastValue));
            }
        }

        const newDiceValue: Dice = {
            values: valuesCopy,
            discarded: [...state.discarded, ...valuesDiscarded],
            total: 0
        };

        return newDiceValue;
    }),
    on(diceActions.addMultiplesValuesDisadvantage,  (state) => {
        const valuesCopy = [...state.values];
        const valuesDiscarded = [];

        console.log(...state.values);

        if (valuesCopy.length >= 2) {
            const lastValue = valuesCopy.pop();
            const secondLastValue = valuesCopy.pop();

            if (lastValue !== undefined && secondLastValue !== undefined) {
                valuesCopy.push(Math.min(lastValue, secondLastValue));
                valuesDiscarded.push(Math.max(lastValue, secondLastValue));
            }
        }

        if (valuesDiscarded.length >= 2) {
            const lastValue = valuesDiscarded.pop();
            const secondLastValue = valuesDiscarded.pop();

            if (lastValue !== undefined && secondLastValue !== undefined) {
                valuesDiscarded.push(Math.max(lastValue, secondLastValue));
            }
        }

        const newDiceValue: Dice = {
            values: valuesCopy,
            discarded: [...state.discarded, ...valuesDiscarded],
            total: 0
        };

        return newDiceValue;
    }),
    on(diceActions.sumAllTheValues, (state) => {
        const totalSum = state.values.reduce((acc, value) => acc + value, 0);

        const newDiceValue: Dice = {
            values: [...state.values],
            discarded: [...state.discarded],
            total: totalSum
        };

        return newDiceValue;
    })
)

