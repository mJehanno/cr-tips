import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDisplayerComponent } from './heroes-displayer/heroes-displayer.component';
import { NzCardModule, NzButtonModule, NzTabsModule, NzIconModule, NzModalModule } from 'ng-zorro-antd';
import { FilterIconModule } from '../filter-icon/filter-icon.module';
import { ButtonTierFilterModule } from '../button-tier-filter/button-tier-filter.module';

@NgModule({
  declarations: [HeroesDisplayerComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzTabsModule,
    NzIconModule,
    NzModalModule,
    FilterIconModule,
    ButtonTierFilterModule
  ],
  exports: [HeroesDisplayerComponent]
})
export class HeroesDisplayerModule { }
