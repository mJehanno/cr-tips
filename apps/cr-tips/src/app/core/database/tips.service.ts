import { Injectable } from '@angular/core';
import { Tip, DisplayedTip, User } from '@cr-tips/data';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, mergeMap, flatMap, concatAll, mergeAll, combineAll, concatMap, expand } from 'rxjs/operators';
import { UserService } from './user.service';
import { pipe, of, Observable, from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  public selectedTips: DisplayedTip;

  constructor( private af: AngularFirestore, private userService: UserService) { }

  /**
  * TODO : Refactor this to prevent memory leak (nested subscribe).
  */
  public getAll(): Observable<any[]> {
    const users = {} ;
    const loadedTips = {};
    const subject = new Subject<any[]>();
    this.af.collection('users').get().subscribe((user) => {
      user.forEach((doc) => {
        users[doc.data().idUser] = doc.data();
      });
      const $tips = this.af.collection('tips', ref => ref.orderBy('date', 'desc')).valueChanges({idField: 'idTips'});
      $tips.subscribe((docs) => {
        docs.forEach((doc) => {
          loadedTips[doc.idTips] = doc
          loadedTips[doc.idTips].authorUser = users[doc['author']]
          loadedTips[doc.idTips].date = new Date(doc['date']['seconds'] * 1000);
        });
        subject.next(docs);
      });
    });
    return subject.asObservable();
  }

  public getOneById(id: string){
    return this.af.collection<Tip>('tips').doc(id).valueChanges();
  }

  public create(tip: Tip) {
    tip.score = 0;
    return this.af.collection<Tip>('tips').add(tip);
  }

  public update() {}

  public delete() {}

}
