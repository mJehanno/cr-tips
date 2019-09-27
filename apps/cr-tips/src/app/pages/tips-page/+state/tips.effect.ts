import { Injectable, ɵConsole } from '@angular/core';
import { TipsService } from '../../../core/database/tips.service';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { AddTipAction, TipsActionType, AddedTipAction, GotAllTipAction, GetAllTipAction, DisplayingTipAction, GetTipDetailAction, GotDetailTipAction } from './tips.action';
import { switchMap, map, flatMap, concatMap, expand, mergeMap, mergeAll, concatAll, switchAll, tap, combineAll } from 'rxjs/operators';
import { Tip, DisplayedTip } from '@cr-tips/data';
import {firestore} from 'firebase'
import { UserService } from '../../../core/database/user.service';
import { forkJoin, pipe, from } from 'rxjs';
import { Logged } from '../../../modules/auth/+state/authentication.actions';
import { Title } from '@angular/platform-browser';


@Injectable()
export class TipEffect{

  constructor(
    private actions$: Actions,
    private tipService: TipsService,
    private userService: UserService
  ) {}


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
      map((tips) => {
        //console.log(tips)
        localStorage.setItem('tips', JSON.stringify(tips));
        return from(tips)
      }),
      mergeMap((tip$) => {
        return tip$
      }),
      map((tip) =>  this.userService.retrieveFromToken(tip.author)),
      map(user$ => user$),
      mergeMap(user =>  user),
      map(user => {
        const tips = JSON.parse(localStorage.getItem('tips'));
        tips.map(tip => {
          tip.date = new Date(tip.date['seconds'] * 1000);
          return tip
        })

        const disTips = tips.map((tip) => {
          console.log(user);
          if(tip.author === user[0].idUser) {
            return {idTips: tip.idTips, authorUser: user[0], date: tip.date, title: tip.title,
              description: tip.description, content: tip.content, commentaries: tip.commentaries, score: tip.score,
              game_mode: tip.game_mode, category: tip.category }
          }
        })
        return disTips;
      }),
      map((tips) => new GotAllTipAction(tips))
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


