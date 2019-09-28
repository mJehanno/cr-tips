import { Injectable } from '@angular/core';
import { TipsService } from '../../../core/database/tips.service';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { AddTipAction, TipsActionType, AddedTipAction, GotAllTipAction, GetAllTipAction, GetTipDetailAction, GotDetailTipAction } from './tips.action';
import { switchMap, map } from 'rxjs/operators';
import { Tip } from '@cr-tips/data';
import { UserService } from '../../../core/database/user.service';




@Injectable()
export class TipEffect{

  constructor(
    private actions$: Actions,
    private tipService: TipsService,
    private userService: UserService
  ) {}


  tips = [];

  @Effect() addTip$ = this.actions$.pipe(
    ofType<AddTipAction>(TipsActionType.AddTipAction),
    switchMap((action) => {
      return this.tipService.create(action.tip);
    }),
    map(() => new AddedTipAction())
  );

  @Effect() getAllTips$ = this.actions$.pipe(
    ofType<GetAllTipAction>(TipsActionType.GetAllTipAction),
      switchMap(() => {
        return this.tipService.getAll();
      }),
      map((tips) => {console.log(tips); return new GotAllTipAction(tips)} )
  );

  @Effect() getTip$ = this.actions$.pipe(
    ofType<GetTipDetailAction>(TipsActionType.GetTipDetailAction),
    switchMap((action) => this.tipService.getOneById(action.id)),
    map((tip: Tip) => {
      localStorage.setItem('selectedTip', JSON.stringify(tip));
      return this.userService.retrieveFromToken(tip.author);
    }),
    switchMap((user$) => user$),
    map((user) => {
      const tip = JSON.parse(localStorage.getItem('selectedTip'));
      tip.date = new Date(tip.date['seconds'] * 1000);
      localStorage.removeItem('selectedTip');
      return {idTips: tip.idTips, authorUser: user[0], date: tip.date, title: tip.title,
        description: tip.description, content: tip.content, commentaries: tip.commentaries, score: tip.score,
        game_mode: tip.game_mode, category: tip.category }
    }),
    map((tip) => new GotDetailTipAction(tip))
  );

}


