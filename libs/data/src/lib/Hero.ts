import { Skill } from './Skill';
import { Stat } from './Stat';

export interface Hero {
  idHeroes: string;
  name: string;
  manaCost: number;
  race: string[];
  classes : string[];
  tier: string; // []
  ability: Skill;
  image?: string;
  avatar?: string;
  stats: Stat[];
  isActive: boolean;
}
