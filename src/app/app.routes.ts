import { Routes } from '@angular/router';
export const routes: Routes = [
{
path: 'home',
loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
},
{
path: 'button',
loadComponent: () => import('./button/button.page').then((m) => m.ButtonPage),
},
{
path: 'inputs',
loadComponent: () => import('./input/input.page').then((m) => m.InputPage),
},
{
path: 'radio',
loadComponent: () => import('./radio/radio.page').then((m) => m.RadioPage),
},
{
path: 'progress',
loadComponent: () => import('./progress/progress.page').then((m) =>
m.ProgressPage),
},
{
path: '',
redirectTo: 'home',
pathMatch: 'full',
},
];