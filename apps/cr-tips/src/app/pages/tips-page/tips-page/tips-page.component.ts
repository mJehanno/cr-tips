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
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'cr-tips-tips-page',
  templateUrl: './tips-page.component.html',
  styleUrls: ['./tips-page.component.css']
})
export class TipsPageComponent implements OnInit {
  _ = _;
  currentUser: User = null;
  tips: DisplayedTip[] = [];
  isLogged = false;

  constructor( private tipStore: Store<TipState>,
    private tipFace: TipsFacade, private tipService: TipsService, public afAuth: AngularFireAuth, private userService: UserService) { }

  ngOnInit() {
    this.tipFace.getAllTips();
    this.tipStore.pipe(select(tipQuery.getDisplayedTips)).subscribe((data) => {
      this.tips = data;
    });

  }


  selectTip(tip: DisplayedTip) {
    this.tipService.selectedTips = tip;
  }
}
