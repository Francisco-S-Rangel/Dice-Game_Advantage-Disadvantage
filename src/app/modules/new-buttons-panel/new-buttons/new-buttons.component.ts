import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Dice, DiceResult, DicesState } from '../../../interfaces/dice.interface';
import { NewDicesService } from '../../../services/new-dices.service';
import { defaultDices } from '../../../models/defaultDices';

enum RollType {
  normal = "0",
  advantage = "1",
  disadvantage = "2"
};

@Component({
  selector: 'app-new-buttons',
  templateUrl: './new-buttons.component.html',
  styleUrl: './new-buttons.component.scss'
})
export class NewButtonsComponent implements OnInit {
  dices$!: Observable<DicesState>;
  buttons = defaultDices.map((dice) => dice.faces);
  times = defaultDices.map((dice) => {
    return {
      dice: dice,
      amount: 0
    }
  });
  buttonPlay: boolean = false;
  rollType: RollType = RollType.normal;

  constructor(private newDicesService: NewDicesService) {
  }

  ngOnInit(): void {
    this.buttonPlay = false;
    this.dices$ = this.newDicesService.selectDicesFeature();
  }

  play() {
    let amount: number = this.times.reduce((acc, value) => acc + value.amount, 0);

    if (amount == 0) {
      alert("Choose an option with a value greater than 0!");
    } else if (amount > 10) {
      alert("The sum of available options cannot be greater than 10!")
    } else {
      this.newDicesService.reset();
      this.roll();
    }
  }

  roll() {
    const newDiceValues: Dice[] = [];

    this.times.forEach((item) => {
      if (item.amount > 0) {
        for (let i = 0; i < item.amount; i++) {
          newDiceValues.push({
            ...item.dice
          });
        }
      }
    });

    this.newDicesService.addDice(this._enrichWithRoll(newDiceValues, this.rollType));
    this.newDicesService.sumAllValues();
  }

  private _enrichWithRoll(dices: Dice[], rollType: RollType): Dice[] {
    return dices.map((dice) => this._roll(dice, rollType))
  }

  private _roll(dice: Dice, rollType: RollType): Dice {
    const newDice = { ...dice };

    switch (rollType) {
      case RollType.normal: {
        newDice.diceResult = {
          rolledValue: [this.getRandomNumber(dice.faces)],
        };
        break;
      }
      case RollType.advantage: {
        newDice.diceResult = this.getRolledDiscarded(dice, rollType);
        break;
      }
      case RollType.disadvantage: {
        newDice.diceResult = this.getRolledDiscarded(dice, rollType);
        break;
      }
    }
    return newDice;
  }

  reset() {
    this.times = [];
    this.times = defaultDices.map((x) => {
      return {
        dice: x,
        amount: 0
      }
    });

    this.newDicesService.reset();
  }

  _handlerAmountChange(event: number, position: number) {
    this.times[position].amount = (event < 0)
      ? 0
      : (event > 10)
        ? 10
        : event;

    this.updateButtonPlay();
  }

  updateButtonPlay() {
    let amount: number = this.times.reduce((acc, value) => acc + value.amount, 0);

    if (amount > 0 && amount <= 10) {
      this.buttonPlay = true;
    } else {
      this.buttonPlay = false;
    }
  }

  getRandomNumber(multiplier: number) {
    return Math.floor(Math.random() * multiplier) + 1;
  }

  getRolledDiscarded(dice: Dice, rollType: RollType) {
    let valueOne: number = 0;
    let valueTwo: number = 0;

    let diceResult = {
      rolledValue: [] as number[],
      discardedValue: [] as number[]
    }

    valueOne = this.getRandomNumber(dice.faces);
    valueTwo = this.getRandomNumber(dice.faces);

    if (rollType === RollType.advantage) {
      diceResult.rolledValue.push(Math.max(valueOne, valueTwo));
      diceResult.discardedValue.push(Math.min(valueOne, valueTwo));

    } else if (rollType === RollType.disadvantage) {
      diceResult.rolledValue.push(Math.min(valueOne, valueTwo));
      diceResult.discardedValue.push(Math.max(valueOne, valueTwo));
    }

    return diceResult;
  }

}
