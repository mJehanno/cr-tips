import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboNotifierComponent } from './combo-notifier/combo-notifier.component';
import { NzBadgeModule } from 'ng-zorro-antd';
import { ComboPictureModule } from '../combo-picture/combo-picture.module';

@NgModule({
  declarations: [ComboNotifierComponent],
  imports: [
    CommonModule,
    ComboPictureModule
  ],
  exports: [ComboNotifierComponent]
})
export class ComboNotifierModule { }
