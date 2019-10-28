import { enableProdMode, ReflectiveInjector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as firebase from 'firebase/app';



if (environment.production) {
  enableProdMode();
}
firebase.initializeApp(environment.firebase);
const database = firebase.database();
database.ref('/').once('value').then((settings) => {
  return platformBrowserDynamic([{provide: 'config', useValue: settings.val()}])
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
})













