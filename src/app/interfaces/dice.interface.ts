export interface DicesState {
    diceValues: Dice[],
    total: number
  }
  
  export interface Dice {
    faces: number,
    criticalValues: number[],
    criticalFailureValues: number[],
    diceResult?: DiceResult
  }
  
  export interface DiceResult {
    rolledValue: number[],
    discardedValue?: number[]
  }
  