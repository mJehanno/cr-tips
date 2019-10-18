import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboCreatorComponent } from './combo-creator/combo-creator.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HeroClassifierModule } from '../hero-classifier/hero-classifier.module';
import { ComboNotifierModule } from '../combo-notifier/combo-notifier.module';

@NgModule({
  declarations: [ComboCreatorComponent],
  imports: [
    CommonModule,
    NzCardModule,
    HeroClassifierModule,
    ComboNotifierModule
  ],
  exports: [ComboCreatorComponent]
})
export class ComboCreatorModule { }
