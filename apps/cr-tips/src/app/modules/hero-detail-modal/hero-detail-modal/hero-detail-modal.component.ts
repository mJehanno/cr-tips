import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cr-tips-hero-detail-modal',
  templateUrl: './hero-detail-modal.component.html',
  styleUrls: ['./hero-detail-modal.component.less']
})
export class HeroDetailModalComponent implements OnInit {

  @Input() hero;
  constructor() { }

  ngOnInit() {
  }

}
