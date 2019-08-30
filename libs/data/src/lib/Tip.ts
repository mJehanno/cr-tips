import { Hero } from './Hero';
import { Commentary } from './Commentary';

export interface Tip {
  idTips?: string;
  author: string;
  date: Date;
  title: string;
  description?: string;
  content: string;
  commentaries?: Commentary[];
  score: number;
}
