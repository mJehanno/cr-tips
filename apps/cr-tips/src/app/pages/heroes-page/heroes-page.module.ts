import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesPageComponent } from './heroes-page/heroes-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HeroesDisplayerModule } from '../../modules/heroes-displayer/heroes-displayer.module';

const routes: Routes = [
  {path: '', component: HeroesPageComponent}
]

@NgModule({
  declarations: [HeroesPageComponent],
  imports: [
    CommonModule,
    HeroesDisplayerModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroesPageModule { }
