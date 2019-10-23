import { User, Commentary } from '..';

export interface DisplayedTip {
    idTips?: string;
    authorUser: User;
    date: Date;
    title: string;
    content: string;
    commentaries?: Commentary[];
    score: number;
    game_mode?: string;
    category?: string;
}
