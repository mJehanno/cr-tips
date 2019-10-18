import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboPictureComponent } from './combo-picture/combo-picture.component';
import { NzBadgeModule, NzToolTipModule, NzDividerModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ComboPictureComponent],
  imports: [
    CommonModule,
    NzBadgeModule,
    NzToolTipModule,
    NzDividerModule
  ],
  exports: [ComboPictureComponent]
})
export class ComboPictureModule { }
