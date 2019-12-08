import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RaceService } from '../../../core/database/race.service';
import { ClassService } from '../../../core/database/class.service';
import { Race, Class, Hero } from '@cr-tips/data';
import { SimulatorState } from '../../../pages/simulator/+state/simulator.reducer';
import { Store, select } from '@ngrx/store';
import { SimulatorQuery } from '../../../pages/simulator/+state/simulator.selector';

@Component({
  selector: 'cr-tips-combo-notifier',
  templateUrl: './combo-notifier.component.html',
  styleUrls: ['./combo-notifier.component.less']
})
export class ComboNotifierComponent implements OnInit {


  races: Race[] = [];
  classes: Class[] = [];
  activatedCombo = {};

  constructor(private raceService: RaceService, private classService: ClassService, private store: Store<SimulatorState>) {

  }

  ngOnInit() {
    this.raceService.getAllRaces().subscribe((data) => {
      this.races = data;
      this.activatedCombo = {...this.activatedCombo, 'races': [...data]};
    });
    this.classService.getAllClasses().subscribe((data)=>{
      this.classes = data;
      this.activatedCombo = {...this.activatedCombo,'classes': [...data]};
    });
    this.store.pipe(select(SimulatorQuery.getSimulatorCombo)).subscribe((combo) => {
      this.activatedCombo = combo;
    });
  }


}
