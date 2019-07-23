import { Rank } from './Rank';

export interface User {
  email: string;
  idUser: number;
  login: string;
  password?: string;
  ranks: Rank[];
}
