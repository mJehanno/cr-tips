import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private af: AngularFirestore) { }

  public getAll(){
    console.log('ok')
    return this.af.collection('heroes').get().pipe(
      map(snap => snap.docs.map(doc => doc.data()))
    );
  }

  public getById() {}

}
