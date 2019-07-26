import { Injectable } from '@angular/core';
import { User } from '@cr-tips/data';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private af: AngularFirestore) { }

  public create(user: User) {
    user.ranks = [];
    const insertedUser: User = {...user};
    console.log(insertedUser);
    this.usersCollection = this.af.collection<User>('users');
    return this.usersCollection.add(insertedUser);
  }
}
