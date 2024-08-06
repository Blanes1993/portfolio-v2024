import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraContentComponent } from './extra-content.component';



@NgModule({
  declarations: [
    ExtraContentComponent
  ],
  exports: [ExtraContentComponent],
  imports: [
    CommonModule
  ]
})
export class ExtraContentModule { }
