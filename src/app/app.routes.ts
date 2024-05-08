import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'girl',
    loadComponent: () => import('./girl/girl.page').then( m => m.GirlPage)
  },
  {
    path: 'game',
    loadComponent: () => import('./game/game.page').then( m => m.GamePage)
  },
  {
    path: 'ghost',
    loadComponent: () => import('./ghost/ghost.page').then( m => m.GhostPage)
  },
  {
    path: 'galaxy',
    loadComponent: () => import('./galaxy/galaxy.page').then( m => m.GalaxyPage)
  },
];
