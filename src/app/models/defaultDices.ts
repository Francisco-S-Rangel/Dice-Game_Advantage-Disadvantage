import { Dice } from "../interfaces/dice.interface";

export const defaultDices: Dice[] = [
    {
        faces: 4,
        criticalValues: [4],
        criticalFailureValues: [1]
    },
    {
        faces: 6,
        criticalValues: [6],
        criticalFailureValues: [1]
    },
    {
        faces: 8,
        criticalValues: [8],
        criticalFailureValues: [1]
    },
    {
        faces: 10,
        criticalValues: [10],
        criticalFailureValues: [1]
    },
    {
        faces: 12,
        criticalValues: [12],
        criticalFailureValues: [1]
    },
    {
        faces: 20,
        criticalValues: [20],
        criticalFailureValues: [1]
    }
]