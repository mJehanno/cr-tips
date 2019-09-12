import { Injectable } from '@angular/core';
import { Class } from '@cr-tips/data';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classesCollection : AngularFirestoreCollection<Class>;
  constructor(private af: AngularFirestore) {
    this.classesCollection = this.af.collection<Class>('classes');
  }

  getAllClasses() {
    return this.classesCollection.valueChanges();
  }
}
