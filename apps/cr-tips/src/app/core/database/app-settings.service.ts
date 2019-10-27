import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private af: AngularFireDatabase) { }

  getSettings(){
    return this.af.object('/').valueChanges();
  }

}
