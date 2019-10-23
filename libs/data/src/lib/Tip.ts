import { Hero } from './Hero';
import { Commentary } from './Commentary';

export interface Tip {
  idTips?: string;
  author: string;
  date: Date;
  title: string;
  content: string;
  commentaries?: Commentary[];
  score: number;
  game_mode?: string[];
  category?: string[];
}
