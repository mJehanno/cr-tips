import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../core/database/heroes.service';
import { Hero } from '@cr-tips/data';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'cr-tips-combo-creator',
  templateUrl: './combo-creator.component.html',
  styleUrls: ['./combo-creator.component.less']
})
export class ComboCreatorComponent implements OnInit {

  heroes: Hero[] = [];
  common: Hero[] = [];
  uncommon: Hero[] = [];
  rare: Hero[] = [];
  epic: Hero[] = [];
  legendary: Hero[] = [];
  selectedHeroes = new Set();
  totalCost = 0;


  constructor(private heroesService: HeroesService, private message: NzMessageService) { }

  ngOnInit() {
    this.heroesService.getAll().subscribe((heroes) => {
      this.common = <Hero[]>heroes.filter(elem => elem.manaCost === 1);
      this.uncommon = <Hero[]>heroes.filter(elem => elem.manaCost === 2);
      this.rare = <Hero[]>heroes.filter(elem => elem.manaCost === 3);
      this.epic = <Hero[]>heroes.filter(elem => elem.manaCost === 4);
      this.legendary = <Hero[]>heroes.filter(elem => elem.manaCost === 5);
    })
  }

  selectHero(value) {
    if(this.selectedHeroes.size < 10) {
      this.selectedHeroes.add(value);
      this.totalCost += value.manaCost;
    } else {
      this.message.error(`You can't pick more than 10 heroes`);
    }
  }

  unselectHero(value) {
    this.selectedHeroes.delete(value);
    this.totalCost -= value.manaCost;
  }

}
