import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    SharedModule
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonsPanelModule { }
