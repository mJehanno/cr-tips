import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '@cr-tips/data';

@Component({
  selector: 'cr-tips-hero-classifier',
  templateUrl: './hero-classifier.component.html',
  styleUrls: ['./hero-classifier.component.less']
})
export class HeroClassifierComponent implements OnInit {


  @Input() tier = '';
  @Input() heroes: Hero[] = [];
  @Output() addingNewHero = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  addHero(value) {
    this.addingNewHero.emit(value);
  }

}
