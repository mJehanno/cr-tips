import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailModalComponent } from './hero-detail-modal/hero-detail-modal.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [HeroDetailModalComponent],
  imports: [
    CommonModule,
    NzDividerModule
  ],
  exports: [HeroDetailModalComponent]
})
export class HeroDetailModalModule { }
