import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Race} from '@cr-tips/data'

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  racesCollection : AngularFirestoreCollection<Race>;
  constructor(private af: AngularFirestore) {
    this.racesCollection = this.af.collection<Race>('races');
  }

  getAllRaces() {
    return this.racesCollection.valueChanges();
  }

}
