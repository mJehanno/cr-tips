import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cr-tips-filter-icon',
  templateUrl: './filter-icon.component.html',
  styleUrls: ['./filter-icon.component.less']
})
export class FilterIconComponent implements OnInit {

  @Input() value;
  @Input() iconSrc;
  isActive = false;

  constructor() { }

  ngOnInit() {

  }

}
