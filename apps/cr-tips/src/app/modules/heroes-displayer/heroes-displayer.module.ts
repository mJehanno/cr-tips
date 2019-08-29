import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDisplayerComponent } from './heroes-displayer/heroes-displayer.component';
import { NzCardModule, NzButtonModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [HeroesDisplayerComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule
  ],
  exports: [HeroesDisplayerComponent]
})
export class HeroesDisplayerModule { }
