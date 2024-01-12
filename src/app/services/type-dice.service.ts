import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeDiceService {

  private currentTypeDice: number = 0;

  constructor() { }

  setCurrentTypeDice(value: number) {
    this.currentTypeDice = value;
  }

  getCurrentTypeDice(){
    return this.currentTypeDice;
  }
}
