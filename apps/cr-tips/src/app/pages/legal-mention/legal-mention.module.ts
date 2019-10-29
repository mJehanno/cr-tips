import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalMentionComponent } from './legal-mention/legal-mention.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LegalMentionComponent
  }
];


@NgModule({
  declarations: [LegalMentionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LegalMentionModule { }
