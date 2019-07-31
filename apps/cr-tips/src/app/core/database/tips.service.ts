import { Injectable } from '@angular/core';
import { Tip, DisplayedTip, User } from '@cr-tips/data';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, mergeMap, flatMap, concatAll, mergeAll, combineAll, concatMap, expand } from 'rxjs/operators';
import { UserService } from './user.service';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor( private af: AngularFirestore, private userService: UserService) { }

  public getAll() {
    return this.af.collection<Tip>('tips', ref => ref.orderBy('date', 'desc'))
    .snapshotChanges()
    .pipe(
      map(snaps => snaps.map(snap => {
        const tip: Tip = snap.payload.doc.data();
        return tip;
      }))
    )
  }




  public create(tip: Tip) {
    tip.score = 0;
    return this.af.collection<Tip>('tips').add(tip);
  }

  public update() {}

  public delete() {}

}
