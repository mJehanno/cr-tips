import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTierFilterComponent } from './button-tier-filter/button-tier-filter.component';
import { NzButtonModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ButtonTierFilterComponent],
  imports: [
    CommonModule,
    NzButtonModule
  ],
  exports: [ButtonTierFilterComponent]
})
export class ButtonTierFilterModule { }
