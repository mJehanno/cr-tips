import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugFormComponent } from './bug-form/bug-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NzInputModule, NzSelectModule, NzButtonModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BugFormComponent
  }
];

@NgModule({
  declarations: [BugFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    FormsModule
  ]
})
export class BugFormModule { }
