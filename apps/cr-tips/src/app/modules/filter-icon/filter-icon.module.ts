import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterIconComponent } from './filter-icon/filter-icon.component';
import { NzIconModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [FilterIconComponent],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports: [FilterIconComponent]
})
export class FilterIconModule { }
