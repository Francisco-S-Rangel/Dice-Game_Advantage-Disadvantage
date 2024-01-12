import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDisplayComponent } from './new-display/new-display.component';


@NgModule({
  declarations: [
    NewDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewDisplayComponent
  ]
})
export class NewDisplayValueModule { }
