import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dice } from '../../../models/dice';
import { TypeDiceService } from '../../../services/type-dice.service';
import { DiceService } from '../../../services/dice.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent implements OnInit {

  multiplier: number = 1;
  dice$!: Observable<Dice>;
  buttons: number[] = [4, 6, 8, 10, 12, 20];
  loader: boolean = false;
  selector: number = 0;
  // 0 = normal; 1 = advantage; 2 = disadvantage

  constructor(private diceService: DiceService,
    private typeDeviceService: TypeDiceService) { }

  ngOnInit() {
    this.dice$ = this.diceService.selectDiceFeature();
  }

  add(number: number) {
    this.loader = true;
    this.restart();
    this.typeDeviceService.setCurrentTypeDice(number);

    let times: number = this.multiplier;

    if (times === 1 && this.selector == 0) {
      let value: number = 1;
      value = Math.floor(Math.random() * number) + 1;

      this.diceService.addValue( value );
      this.loader = false;

    } else {
      this.selector == 0 ? this.addNormal(number, times) : this.addAdvantageDisadvantage(number, times);
    }

  }

  addNormal(number: number, times: number) {
    let count = 0;
    let value = 1;

    const addValueWithDelay = () => {

      value = Math.floor(Math.random() * number) + 1;
      this.diceService.addMultiplesValues( value );
      count++;

      if (count < times) {
        setTimeout(addValueWithDelay, 1000);
      } else {
        this.diceService.sumAllTheValues();
        this.loader = false;
      }

    };

    addValueWithDelay();
  }

  addAdvantageDisadvantage(number: number, times: number) {
    let count = 0;
    let value = 1;
    let doubleTimes = times * 2;

    const addValueWithDelay = () => {

      this.numberBiggerSmallest(count - 1);

      value = Math.floor(Math.random() * number) + 1;
      this.diceService.addMultiplesValues( value );
      count++;

      if (count < doubleTimes) {
        setTimeout(addValueWithDelay, 1000);
      } else {

        this.numberBiggerSmallest(count - 1);
        this.diceService.sumAllTheValues();
        this.loader = false;
      }

    };

    addValueWithDelay();
  }

  numberBiggerSmallest(count: number) {
    if (count % 2 === 1) {
      this.selector == 1 ? this.diceService.addMultiplesValuesAdvantage() :
        this.diceService.addMultiplesValuesDisadvantage();
    }
  }

  restart() {
    this.diceService.reset();
  }

  _handlerAmountChange(event: number) {
    this.multiplier = (event < 1)
      ? 1
      : (event > 10)
        ? 10
        : event;
  }

}
