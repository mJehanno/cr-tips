import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroClassifierComponent } from './hero-classifier/hero-classifier.component';

@NgModule({
  declarations: [HeroClassifierComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroClassifierComponent]
})
export class HeroClassifierModule { }
