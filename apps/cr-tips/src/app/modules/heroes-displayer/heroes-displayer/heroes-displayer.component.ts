import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '@cr-tips/data';
import { HeroesService } from '../../../core/database/heroes.service';

@Component({
  selector: 'cr-tips-heroes-displayer',
  templateUrl: './heroes-displayer.component.html',
  styleUrls: ['./heroes-displayer.component.less']
})
export class HeroesDisplayerComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];
  currentFilter = new Set();
  humanClicked = false;
  undeadClicked = false;
  furryClicked = false;
  goblinClicked = false;
  elfClicked = false;
  demonClicked = false;
  oceanClicked = false;
  cyborgClicked = false;
  dragonClicked = false;
  jellyClicked = false;
  voidClicked = false;
  beastClicked = false;
  sorcererClicked = false;
  warriorClicked = false;
  hunterClicked = false;
  riderClicked = false;
  warlockClicked = false;
  druidClicked = false;
  assassinClicked = false;
  engineerClicked = false;
  punisherClicked = false;
  commonClicked = false;
  uncommonClicked = false;
  rareClicked = false;
  epicClicked = false;
  legendaryClicked = false;
  // humanClicked = false;

  constructor(private heroesService: HeroesService ) { }

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
      case 'Human':
        this.humanClicked = !this.humanClicked;
      break;
      case 'Undead':
        this.undeadClicked = !this.undeadClicked;
        break;
      case 'Furry':
        this.furryClicked = !this.furryClicked;
        break;
      case 'Goblin':
        this.goblinClicked = !this.goblinClicked;
        break;
      case 'Elf':
        this.elfClicked = !this.elfClicked;
        break;
      case 'Demon':
        this.demonClicked = !this.demonClicked;
        break;
      case 'Oceanborn':
        this.oceanClicked = !this.oceanClicked;
        break;
      case 'Cyborg':
        this.cyborgClicked = !this.cyborgClicked;
        break;
      case 'Dragon':
        this.dragonClicked = !this.dragonClicked;
        break;
      case 'Jelly':
        this.jellyClicked = !this.jellyClicked;
        break;
      case 'Void':
        this.voidClicked = !this.voidClicked;
        break;
      case 'Beast':
        this.beastClicked = !this.beastClicked;
        break;
      case 'Sorcerer':
        this.sorcererClicked = !this.sorcererClicked;
        break;
      case 'Warrior':
        this.warriorClicked = !this.warriorClicked;
        break;
      case 'Hunter':
        this.hunterClicked = !this.hunterClicked;
        break;
      case 'Rider':
        this.riderClicked = !this.riderClicked;
        break;
      case 'Warlock':
        this.warlockClicked = !this.warlockClicked;
        break;
      case 'Druid':
        this.druidClicked = !this.druidClicked;
        break;
      case 'Assassin':
        this.assassinClicked = !this.assassinClicked;
        break;
      case 'Engineer':
        this.engineerClicked = !this.engineerClicked;
        break;
      case 'Punisher':
        this.punisherClicked = this.punisherClicked;
        break;
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
