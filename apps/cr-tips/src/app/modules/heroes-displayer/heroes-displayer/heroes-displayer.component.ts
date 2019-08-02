import { Component, OnInit } from '@angular/core';
import { Hero } from '@cr-tips/data';
import { HeroesService } from '../../../core/database/heroes.service';

@Component({
  selector: 'cr-tips-heroes-displayer',
  templateUrl: './heroes-displayer.component.html',
  styleUrls: ['./heroes-displayer.component.css']
})
export class HeroesDisplayerComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService ) { }

  ngOnInit() {
    this.heroesService.getAll().subscribe((data) => {
      /*data.forEach(element => {
        element.image = '/assets/Selection_119.png'
      });*/
      this.heroes = <Hero[]>data;
    });

  }

}
