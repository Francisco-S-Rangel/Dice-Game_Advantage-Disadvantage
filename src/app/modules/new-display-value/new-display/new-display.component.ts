import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Dice, DicesState } from '../../../interfaces/dice.interface';
import { NewDicesService } from '../../../services/new-dices.service';

@Component({
  selector: 'app-new-display',
  templateUrl: './new-display.component.html',
  styleUrl: './new-display.component.scss'
})
export class NewDisplayComponent implements OnInit {
  dices$!: Observable<DicesState>;

  constructor(private newDicesService: NewDicesService){
  }
  
  ngOnInit(): void {
    this.dices$ = this.newDicesService.selectDicesFeature();
  }
}
