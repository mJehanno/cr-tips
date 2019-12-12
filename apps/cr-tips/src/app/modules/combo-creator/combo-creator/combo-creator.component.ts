import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../core/database/heroes.service';
import { Hero } from '@cr-tips/data';
import { NzMessageService } from 'ng-zorro-antd';
import { Store, select } from '@ngrx/store';
import { SimulatorState } from '../../../pages/simulator/+state/simulator.reducer';
import { SimulatorQuery } from '../../../pages/simulator/+state/simulator.selector';
import { AddHeroAction, RemoveHeroAction } from '../../../pages/simulator/+state/simulator.action';
import { ActivatedRoute, Router } from '@angular/router';

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
  urlCombo = '';

  constructor(private heroesService: HeroesService, private message: NzMessageService, private store: Store<SimulatorState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.heroesService.getAll().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
      this.common = <Hero[]>heroes.filter(elem => elem.manaCost === 1);
      this.uncommon = <Hero[]>heroes.filter(elem => elem.manaCost === 2);
      this.rare = <Hero[]>heroes.filter(elem => elem.manaCost === 3);
      this.epic = <Hero[]>heroes.filter(elem => elem.manaCost === 4);
      this.legendary = <Hero[]>heroes.filter(elem => elem.manaCost === 5);

      this.route.queryParams.subscribe(params => {
        this.urlCombo = params.combo;
        const combo = params.combo.split(',');
        const urlHeroes = this.heroes.filter((hero) => {
          return combo.includes(hero.name);
        });
        urlHeroes.forEach((elem) => {
          this.store.dispatch(new AddHeroAction(elem))
        })
      });
    });
    this.store.pipe(select(SimulatorQuery.getSimulatorSelectedHeroes)).subscribe((list) => {
      this.selectedHeroes = list;
    })
    this.store.pipe(select(SimulatorQuery.getSimulatorCost)).subscribe((cost) => {
      this.totalCost = cost;
    })
  }

  selectHero(value:Hero) {
    if(this.selectedHeroes.size < 10 ) {
      this.store.dispatch(new AddHeroAction(value));
      if(!this.urlCombo.includes(value.name)){
        let query = this.urlCombo;
        console.log([...this.urlCombo.split(','), value.name]);
        if(this.urlCombo.length > 0){
          if(this.urlCombo.split(',').length <= 10){
            query =  [...this.urlCombo.split(','), value.name].join(',');
          }
        }else{
          query = value.name
        }

        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            combo: query
          },
          skipLocationChange: false,
          queryParamsHandling: 'merge'
        });
      }
    } else {
      this.message.error(`You can't pick more than 10 heroes`);
    }
  }

  unselectHero(value:Hero) {
    this.store.dispatch(new RemoveHeroAction(value));
    const query = this.urlCombo.split(',').filter(elem =>
      elem !== value.name).join(',');
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        combo: query
      },
      skipLocationChange: false,
      queryParamsHandling: 'merge'
    });
  }

}
