import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDisplayerComponent } from './heroes-displayer/heroes-displayer.component';
import { NzCardModule, NzButtonModule, NzTabsModule, NzIconModule, NzModalModule, NzSkeletonModule } from 'ng-zorro-antd';
import { FilterIconModule } from '../filter-icon/filter-icon.module';
import { ButtonTierFilterModule } from '../button-tier-filter/button-tier-filter.module';
import { HeroDetailModalModule } from '../hero-detail-modal/hero-detail-modal.module';
import { HeroDetailModalComponent } from '../hero-detail-modal/hero-detail-modal/hero-detail-modal.component';

@NgModule({
  declarations: [HeroesDisplayerComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzTabsModule,
    NzIconModule,
    NzModalModule,
    NzSkeletonModule,
    FilterIconModule,
    ButtonTierFilterModule,
    HeroDetailModalModule
  ],
  exports: [HeroesDisplayerComponent],
  entryComponents: [HeroDetailModalComponent]
})
export class HeroesDisplayerModule { }
