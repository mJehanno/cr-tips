import { Hero } from './Hero';
import { Commentary } from './Commentary';

export interface Tip {
  idTips: NumberConstructor;
  heroes: Hero[];
  author: number;
  date: Date;
  commentaries?: Commentary[];
}
