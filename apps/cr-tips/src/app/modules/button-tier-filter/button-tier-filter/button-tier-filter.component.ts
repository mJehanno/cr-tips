import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'cr-tips-button-tier-filter',
  templateUrl: './button-tier-filter.component.html',
  styleUrls: ['./button-tier-filter.component.less'],

})
export class ButtonTierFilterComponent implements OnInit {

  @Input() tier = '';
  isActive = false;
  _ = _;

  constructor() { }

  ngOnInit() {
  }

}
