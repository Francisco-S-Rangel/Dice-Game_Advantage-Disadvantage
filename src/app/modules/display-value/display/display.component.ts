import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dice } from '../../../models/dice';
import { TypeDiceService } from '../../../services/type-dice.service';
import { DiceService } from '../../../services/dice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit {

  dice$!: Observable<Dice>;
  values: number[] = [];
  discardeds: number[] = [];
  total: number = 0;
  color: number = 0;

  constructor(private diceService: DiceService,private typeDeviceService: TypeDiceService) {}

  ngOnInit() {
    this.dice$ = this.diceService.selectDiceFeature();

    this.dice$.subscribe((dice: Dice) => {

      this.values = dice.values;
      this.discardeds = dice.discarded;
      this.total = dice.total;

      this.color = this.typeDeviceService.getCurrentTypeDice();
    })

  }

}
