import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboCreatorComponent } from './combo-creator/combo-creator.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HeroClassifierModule } from '../hero-classifier/hero-classifier.module';
import { ComboNotifierModule } from '../combo-notifier/combo-notifier.module';
import { NzIconModule, NzButtonModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ComboCreatorComponent],
  imports: [
    CommonModule,
    NzCardModule,
    HeroClassifierModule,
    ComboNotifierModule,
    NzIconModule,
    NzButtonModule
  ],
  exports: [ComboCreatorComponent]
})
export class ComboCreatorModule { }
