import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailModalComponent } from './hero-detail-modal/hero-detail-modal.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule, NzIconModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [HeroDetailModalComponent],
  imports: [
    CommonModule,
    NzDividerModule,
    NzTableModule,
    NzIconModule
  ],
  exports: [HeroDetailModalComponent]
})
export class HeroDetailModalModule { }
