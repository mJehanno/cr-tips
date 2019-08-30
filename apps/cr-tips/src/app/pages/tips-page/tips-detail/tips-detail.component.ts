import { Component, OnInit } from '@angular/core';
import { TipsService } from '../../../core/database/tips.service';
import { DisplayedTip } from '@cr-tips/data';
import * as _ from 'lodash';
import { TipsFacade } from '../+state/tips.facade';
import { ActivatedRoute } from '@angular/router';
import { TipState } from '../+state/tips.reducer';
import { Store, select } from '@ngrx/store';
import { tipQuery } from '../+state/tips.selector';

@Component({
  selector: 'cr-tips-tips-detail',
  templateUrl: './tips-detail.component.html',
  styleUrls: ['./tips-detail.component.less']
})
export class TipsDetailComponent implements OnInit {
  _ = _;
  tip: DisplayedTip /*= {authorUser: { email: ''}, date: new Date(), title : '', content :'', score: 0 }*/;


  constructor(private tipFac: TipsFacade, private actRoute: ActivatedRoute, private tipStore: Store<TipState>) { }

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.tipFac.getOneTip(id);
    this.tipStore.pipe(select(tipQuery.getSelectedTips)).subscribe(tip => {
      this.tip = tip})
  }

}
