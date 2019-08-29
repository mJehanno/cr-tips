import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'tips', loadChildren: () => import('./pages/tips-page/tips-page.module').then(m => m.TipsPageModule)},
  { path: 'heroes', loadChildren: () => import('./pages/heroes-page/heroes-page.module').then(m => m.HeroesPageModule)},
  { path: 'simulator', loadChildren: () => import('./pages/simulator/simulator.module').then(m => m.SimulatorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
