import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tetris',
    loadComponent: () =>
    import('./tetris/tetris.component').then((m) => m.TetrisComponent),
  },
  { path: '**', redirectTo: '/tetris'},
];
