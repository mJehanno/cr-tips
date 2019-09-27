import { Component, OnInit } from '@angular/core';
import { AuthenticationState } from '../../../modules/auth/+state/authentication.reducer';
import { Store, select } from '@ngrx/store';
import { authenticationQuery } from '../../../modules/auth/+state/authentication.selectors';
import { User, Tip, DisplayedTip } from '@cr-tips/data';
import { TipState } from '../+state/tips.reducer';
import { tipQuery } from '../+state/tips.selector';
import { TipsFacade } from '../+state/tips.facade';
import { UserService } from '../../../core/database/user.service';
import { map, flatMap, switchMap, mergeAll, mergeMap } from 'rxjs/operators';
import { forkJoin, Observable, merge, concat } from 'rxjs';
import { TipsService } from '../../../core/database/tips.service';
import * as _ from 'lodash';

@Component({
  selector: 'cr-tips-tips-page',
  templateUrl: './tips-page.component.html',
  styleUrls: ['./tips-page.component.css']
})
export class TipsPageComponent implements OnInit {
  _ = _;
  currentUser: User = null;
  tips: any[] = [];

  constructor(private store: Store<AuthenticationState>, private tipStore: Store<TipState>,
    private tipFace: TipsFacade, private userService: UserService, private tipService: TipsService) { }

  ngOnInit() {
    this.tipFace.getAllTips();
    this.store.pipe(select(authenticationQuery.getUser)).subscribe((data) => {
      this.currentUser = data;
    });

    this.tipStore.pipe(select(tipQuery.getDisplayedTips)).subscribe((data) => {
      console.log(data);
      this.tips = data;
    });

  }


  selectTip(tip: DisplayedTip) {
    this.tipService.selectedTips = tip;
  }
}
