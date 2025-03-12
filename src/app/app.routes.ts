import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';
import { SideLayoutComponent } from './shared/layouts/side-layout/side-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

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
        component: HomeComponent, // This makes Home the default page
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  // Wildcard route for 404
  //   {
  //     path: '**',
  //     loadComponent: () =>
  //       import('./pages/not-found/not-found.component').then(
  //         (m) => m.NotFoundComponent
  //       ),
  //   },
];
