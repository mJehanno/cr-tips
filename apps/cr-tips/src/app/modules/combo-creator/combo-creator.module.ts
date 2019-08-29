import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboCreatorComponent } from './combo-creator/combo-creator.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [ComboCreatorComponent],
  imports: [
    CommonModule,
    NzCardModule
  ],
  exports: [ComboCreatorComponent]
})
export class ComboCreatorModule { }
