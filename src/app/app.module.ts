import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DisplayValueModule } from './modules/display-value/display-value.module';
import { ButtonsPanelModule } from './modules/buttons-panel/buttons-panel.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {  diceReducer } from './store/dice.reducer';
import { DiceEffects } from './store/dice.effects';
import { SharedModule } from './shared/shared.module';
import { NewDisplayValueModule } from './modules/new-display-value/new-display-value.module';
import { NewButtonsPanelModule } from './modules/new-buttons-panel/new-buttons-panel.module';
import { newDicesReducer } from './store/new-dice.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DisplayValueModule,
    ButtonsPanelModule,
    SharedModule,
    NewDisplayValueModule,
    NewButtonsPanelModule,
    StoreModule.forRoot({diceReducer: diceReducer, newDicesReducer: newDicesReducer}),
    EffectsModule.forRoot([DiceEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }