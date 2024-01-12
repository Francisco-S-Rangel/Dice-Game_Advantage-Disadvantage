import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewButtonsComponent } from './new-buttons/new-buttons.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    NewButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    NewButtonsComponent
  ]
})
export class NewButtonsPanelModule { }
