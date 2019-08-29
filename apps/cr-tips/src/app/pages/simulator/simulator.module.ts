import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulatorComponent } from './simulator/simulator.component';
import { Routes, RouterModule } from '@angular/router';
import { ComboCreatorModule } from '../../modules/combo-creator/combo-creator.module';

const routes : Routes = [{
  path: '',
  component: SimulatorComponent
}];

@NgModule({
  declarations: [SimulatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComboCreatorModule
  ]
})
export class SimulatorModule { }
