import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Race, Combo } from '@cr-tips/data';
import { select, Store } from '@ngrx/store';
import { SimulatorState } from '../../../pages/simulator/+state/simulator.reducer';
import { SimulatorQuery } from '../../../pages/simulator/+state/simulator.selector';

@Component({
  selector: 'cr-tips-combo-picture',
  templateUrl: './combo-picture.component.html',
  styleUrls: ['./combo-picture.component.less'],
})
export class ComboPictureComponent implements OnInit{

  constructor(private store: Store<SimulatorState>) { }

  @Input() category: Race = {icon:'', name: ''};
  combo: Combo = {
        elf: 0,
        human: 0,
        beast: 0,
        jelly: 0,
        undead: 0,
        oceanborn: 0,
        demon: 0,
        goblin: 0,
        furry: 0,
        cyborg: 0,
        void: 0,
        dragon: 0,
        sorcerer: 0,
        assassin: 0,
        warlock: 0,
        rider: 0,
        hunter: 0,
        engineer: 0,
        punisher: 0,
        warrior: 0,
        druid: 0,
        demonPunisher: 0
  }
  _ = _;
  limit = {
    elf: [{value: 3, effect: 'Grants ally elves a 25% chance to dodge attacks'},
      {value: 6, effect: 'Grants ally elves a 44% chance to dodge attacks'}],
    human: [{value: 2, effect: 'Restore 3 mana every second for all allies'},
      {value: 4, effect: 'Restore 5 mana every second for all allies. Ally Humans have a 25% chance to reset the ability cooldown and restore 100 mana after casting an ability'},
      {value: 6, effect: 'Restore 7 mana every second for all allies. Ally Humans have a 50% chance to reset the ability cooldown and restore 100 mana after casting an ability'}],
    demon: [{value: 1, effect: 'When you deploy only 1 demon, its attack damage is increased by 40%. Its attack also causes its target to take 10% more damage for 5 seconds'}],
    undead: [{value: 2, effect: 'Reduces the armor of all ennemies by 20'},
      {value: 4, effect: 'Reduces the armor of all ennemies by 50'}],
    goblin: [{value: 2, effect: 'Increases attack speed by 15 for all allies and an additional 15 for ally goblin'},
      {value: 4, effect: 'Increases attack speed by 35 for all allies and an additional 35 for ally goblin'}],
    oceanborn: [{value: 2, effect: 'Increases magic resistance of all allies by 20'},
      {value: 4, effect: 'A random ally gains Ability Immunity for 60 seconds'}],
    jelly: [{value: 1, effect: 'When you have 2 identical heroes, you can drag Gurru of the same level on either of them to combine them into a higher level hero'}],
    void: [{value: 2, effect: 'Decreases a random ennemie\'s max health by 50%'}],
    dragon: [{value: 2, effect: 'Restore 30 mana instantly at the beginning of the battle for ally dragons'},
      {value: 3, effect: 'Restore 100 mana instantly at the beginning of the battle for ally dragons'}],
    beast: [{value: 2, effect: 'Increases attack damage for all allies by 10% (can be inherited by pets summoned)'},
      {value: 4, effect: 'Allies have 40% chance to summon a Pet at the beginning of the battle'},
      {value: 6, effect: 'Allies have 60% chance to summon a Pet at the beginning of the battle'}],
    furry: [{value : 2, effect: 'Ally furries receive a shield that absorbs 800 damage'},
      {value: 4, effect: 'Ally furries receive a shield that absorbs 2000 damage'}],
    cyborg: [{value: 3, effect: 'Increases a random ally\'s armor by 75 and health regeneration by 30'},
      {value: 6, effect: 'Increases armor of ally cyborgs by 75 and HP regen by 30'}],
    rider: [{value: 2, effect: '30% chance to get 150 armor and 60% magic resistance for ally riders'},
      {value: 4, effect: '45% chance to get 160 armor and 60% magic resistance for ally riders'},
      {value: 6, effect: '60% chance to get 185 armor and 60% magic resistance for ally riders'}],
    sorcerer: [{value: 3, effect: 'Increases ability power by 40 for ally sorcerer'},{value: 6, effect: 'Increases ability power by 100 for ally sorcerer'}],
    assassin: [{value: 3, effect: 'Ally assassins become invisible at the beginning of the battle. Their first normal attack deals 250% damage, and subsequent attacks have a 15% chance to make them invisible again'},
      {value: 6, effect: 'Ally assassins become invisible at the beginning of the battle. Their first normal attack deals 300% damage, and subsequent attacks have a 25% chance to make them invisible again'}],
    engineer: [{value: 2, effect: 'Increases health regen of ally engineers by 60'},
      {value: 4, effect: 'Increases HP regen of ally engineers by 150'}],
    warlock: [{value: 2, effect: 'Increases life steal of all allies by 15%. Excess health from life steal becomes a shield'},
      {value: 4, effect: 'Increases life steal of all allies by 25%. Excess health from life steal becomes a shield'}],
    hunter: [{value: 3, effect: 'Ally hunter\'s attacks have a 20% chance to increase attack speed by 100%'},
      {value: 6, effect: 'Ally hunter\'s attacks have a 60% chance to increase attack speed by 100%'}],
    punisher: [ {value: 1, effect: 'The ally punisher will be treated as an ennemy Demon'},
      {value: 2, effect: 'Ally Demons are now treated as punisher but their bonus remains'},
      {value: 4, effect: 'Ally Punishers normal attacks deal 35% physical damage to ennemies within 1 square of the target'}],
    druid: [{value: 2,  effect: '2 identical 1-star druids can be combined to a 2-star one instead of 3. Restore 10 mana for all allies within 1 grid upon death'},
      {value: 4,  effect: '2 identical 2-star druids can be combined to a 3-star one instead of 3. Restore 20 mana for all allies within 1 grid upon death'}],
    warrior: [{value: 3, effect: 'Increases armor for all ally warriors by 50'},{value :6, effect: 'Increases armor for all ally warriors by 100'}]
  }
  displayedCombo = {};
  isPictureActive = false;


  ngOnInit() {
    this.store.pipe(select(SimulatorQuery.getSimulatorCombo)).subscribe((combo) => {
      this.displayedCombo = {...combo};

      if(this.limit[_.lowerCase(this.category.name)][0].value <= this.displayedCombo[_.lowerCase(this.category.name)]){
        this.isPictureActive = true
        if(_.lowerCase(this.category.name) === 'demon') {
          if(this.displayedCombo['demon'] === 1 || combo.punisher >= 2){
            this.isPictureActive = true;
          }else{
            this.isPictureActive = false;
          }
        }
      }
      if(combo.punisher >= 2) {
        this.displayedCombo['punisher'] = 2 +  combo.demonPunisher;
      }
    });
  }

  isEffectActive(effects: any){
    let isActive = false;
    if((effects.value <= this.displayedCombo[_.lowerCase(this.category.name)])){
      isActive = true;
      if((_.lowerCase(this.category.name) === 'demon')){
        if((this.displayedCombo['demon'] === 1 || this.displayedCombo['punisher'] >= 2)){
          isActive = true;
        }else{
        isActive = false;
        }
      }
      return isActive;
    }
  }

}
