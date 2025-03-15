import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';
import { SideLayoutComponent } from './shared/layouts/side-layout/side-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ColletctTheWordsComponent } from './pages/games/colletct-the-words/colletct-the-words.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
  },
  {
    path: '',
    component: SideLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'games/colletct-the-words',
        component: ColletctTheWordsComponent,
      },
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },

  //   {
  //     path: '**',
  //     loadComponent: () =>
  //       import('./pages/not-found/not-found.component').then(
  //         (m) => m.NotFoundComponent
  //       ),
  //   },
];
