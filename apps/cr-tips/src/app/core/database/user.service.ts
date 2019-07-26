import { Injectable } from '@angular/core';
import { User } from '@cr-tips/data';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthenticationState } from '../../modules/auth/+state/authentication.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private af: AngularFirestore) {
    this.usersCollection = this.af.collection<User>('users');
   }

  public create(user: User) {
    user.ranks = [];
    const insertedUser: User = {...user};
    return this.usersCollection.add(insertedUser);
  }

  public retrieveFromToken(token: string): Observable<any> {
    return this.af.collection('users', ref => ref.where('idUser', '==', token).limit(1)).valueChanges()
  }


}
