import { Injectable, ɵConsole } from '@angular/core';
import { TipsService } from '../../../core/database/tips.service';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { AddTipAction, TipsActionType, AddedTipAction, GotAllTipAction, GetAllTipAction, DisplayingTipAction } from './tips.action';
import { switchMap, map, flatMap, concatMap, expand, mergeMap, mergeAll, concatAll, switchAll } from 'rxjs/operators';
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

  @Effect() getTip$ = this.actions$.pipe(
    ofType<GetAllTipAction>(TipsActionType.GetAllTipAction),
      switchMap(() => {
        return this.tipService.getAll();
      }),
      map((tips) => {
        return tips.map(tip => {
          tip.date = new Date(tip.date['seconds'] * 1000);
          return tip
        })
      })
  ).pipe(
    map(tip => {console.log(tip); return from(tip)}),
    map(tip$ => tip$.pipe(
      map(tip => this.userService.retrieveFromToken(tip.author)),
      mergeAll()
    ))
  )

}

  /*@Effect() getTip$ = this.actions$.pipe(
    ofType<GetAllTipAction>(TipsActionType.GetAllTipAction),
    switchMap(() => {
      return this.tipService.getAll();
    }),
    map((elem) => {
      const tips = elem.docs.map((elem) => {
        const data = elem.data()
        const fdate = data['date'] as firestore.Timestamp;
        const date = fdate.toDate();
        return {author: data['author'], content: data['content'], date, title: data['title'], description: data['description'], score: data['score']}
      })
      return new GotAllTipAction(tips);
    })
  );

    @Effect() modifyTip$ = this.actions$.pipe(
      ofType<GotAllTipAction>(TipsActionType.GotAllTipAction),
      switchMap(async (action) => {
        const tips = await action.tips.map(async (tip) => {
          this.userService.retrieveFromToken(tip.author).subscribe((user) => {
            console.log('meh')
            return  {
              authorUser: user,
              content: tip.content,
              title: tip.title,
              description: tip.description,
              date: tip.date,
              idTips: tip.idTips,
              score: tip.score
            }
          })
        })
        console.log('1')
        console.log(tips);
        return from(tips);
      }),
      map(async (elem) => {
        console.log('2');
        console.log(elem);
        return new DisplayingTipAction(elem);
      })
    );
*/






// return this.tipService.getAll()
//const data = element.data()
//const fdate = data['date'] as firestore.Timestamp;
//const date = fdate.toDate();
// return {authorUser: user[0], content: data['content'], date,
//title: data['title'], description: data['description'], score: data['score'] }
/**
 *
 * this.userService.retrieveFromToken(data['author']).pipe(map(user=> {
              console.log('ok');
              return {authorUser: user[0], content: data['content'], date, title: data['title'], description: data['description'], score: data['score'] }
            }))
 *
*/
