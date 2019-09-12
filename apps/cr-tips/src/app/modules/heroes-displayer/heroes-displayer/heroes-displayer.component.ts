import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero, Race, Class } from '@cr-tips/data';
import { HeroesService } from '../../../core/database/heroes.service';
import { RaceService } from '../../../core/database/race.service';
import { ClassService } from '../../../core/database/class.service';

@Component({
  selector: 'cr-tips-heroes-displayer',
  templateUrl: './heroes-displayer.component.html',
  styleUrls: ['./heroes-displayer.component.less']
})
export class HeroesDisplayerComponent implements OnInit, OnDestroy {

  races: Race[] = [];
  classes: Class[] = [];
  heroes: Hero[] = [];
  tiers = ['common', 'uncommon', 'rare', 'epic', 'legendary'];

  currentFilter = new Set();

  commonClicked = false;
  uncommonClicked = false;
  rareClicked = false;
  epicClicked = false;
  legendaryClicked = false;

  modalVisible = false;

  constructor(private heroesService: HeroesService, private raceService: RaceService, private classService: ClassService ) { }

  ngOnInit() {

    this.heroesService.getAll().subscribe((data) => {
      /*data.forEach(element => {
        element.image = '/assets/Selection_119.png'
      });*/
      this.heroes = <Hero[]>data.sort((a,b) => {
        if(a.name > b.name) {
          return 1;
        } else if ( b.name > a.name ) {
          return -1;
        }
        return 0;
      });
      localStorage.setItem('heroes', JSON.stringify(this.heroes))
    });

    this.raceService.getAllRaces().subscribe((data) => {
      this.races = data;
    })

    this.classService.getAllClasses().subscribe((data) => {
      this.classes = data;
    })

  }

  filterData(feat:string){

    this.toggleFilter(feat);


    if (this.currentFilter.has(feat)) {
      this.currentFilter.delete(feat);
    } else {
      this.currentFilter.add(feat);
    }

    this.heroes = JSON.parse(localStorage.getItem('heroes'));

    this.currentFilter.forEach(element => {
      this.heroes = this.heroes.filter((hero) => {
        let result;
        const heroClass = hero.classes.find((elem) =>elem === element );
        const heroRace = hero.race.find((elem) =>elem === element);
        if(heroClass === undefined && heroRace === undefined) {
          return hero.tier === element
        } else if (heroRace === undefined) {
          result = heroClass
        } else {
          result = heroRace
        }
        return result;
      });
    });

  }

  ngOnDestroy(){
    localStorage.removeItem('heroes');
  }


  toggleFilter(feat: string) {
    switch(feat) {
      case 'uncommon':
        this.uncommonClicked = !this.uncommonClicked;
        break;
      case 'common':
        this.commonClicked = !this.commonClicked;
        break;
      case 'rare':
        this.rareClicked = !this.rareClicked;
        break;
      case 'epic':
        this.epicClicked = !this.epicClicked;
        break;
      case 'legendary':
        this.legendaryClicked = !this.legendaryClicked;
        break;
    }
  }


}
