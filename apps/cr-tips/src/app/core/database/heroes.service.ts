import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private af: AngularFirestore) { }

  public getAll(){
    return this.af.collection('heroes', ref => ref.where('isActive', '==', true)).get().pipe(
      map(snap => snap.docs.map(doc => doc.data()))
    );
  }

  public getById() {}

}
