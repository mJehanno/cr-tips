import { User, Commentary } from '..';

export interface DisplayedTip {
    idTips?: NumberConstructor;
    authorUser: User;
    date: Date;
    title: string;
    description?: string;
    content: string;
    commentaries?: Commentary[];
    score: number;

}
