import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '@cr-tips/data';
import { HeroesService } from '../../../core/database/heroes.service';

@Component({
  selector: 'cr-tips-heroes-displayer',
  templateUrl: './heroes-displayer.component.html',
  styleUrls: ['./heroes-displayer.component.css']
})
export class HeroesDisplayerComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];

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
    this.heroes = JSON.parse(localStorage.getItem('heroes'));
    this.heroes = this.heroes.filter((hero) => {
      let result;
      const heroClass = hero.classes.find((elem) => {return elem === feat;} );
      const heroRace = hero.race.find((elem) =>{return elem === feat;}); 
      if(heroClass === undefined && heroRace === undefined) {
        return hero.tier === feat
      } else if (heroRace === undefined) {
        result = heroClass
      } else {
        result = heroRace
      }
      return result;
    });
  }

  ngOnDestroy(){
    localStorage.removeItem('heroes');
  }

}
