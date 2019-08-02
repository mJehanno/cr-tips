export interface Hero {
  idHeroes: string;
  name: string;
  manaCost: number;
  race: string[];
  classes : string[];
  tier: string; // []
  ability: string;
  image?: string;
  avat?: string;
}
