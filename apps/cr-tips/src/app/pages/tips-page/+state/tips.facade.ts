import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Tip } from '@cr-tips/data';
import { TipState } from './tips.reducer';
import { AddTipAction, GetAllTipAction, GetTipDetailAction } from './tips.action';

@Injectable()
export class TipsFacade {

  constructor(private store: Store<TipState>) {}


  public addTips(tip: Tip) {
    this.store.dispatch(new AddTipAction(tip));
  }

  public getAllTips() {
    this.store.dispatch(new GetAllTipAction());
  }

  public getOneTip(id: string) {
    this.store.dispatch(new GetTipDetailAction(id));
  }


}
