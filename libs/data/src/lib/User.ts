import { Rank } from './Rank';

export interface User {
  email: string;
  idUser?: string;
  nickname?: string;
  ign?: string;
  password?: string;
  ranks?: Rank[];
  tipVoted?: string[];
  compoVoted?: string[];
}
