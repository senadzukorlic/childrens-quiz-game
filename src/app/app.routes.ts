import { Routes } from '@angular/router';

export const routes: Routes = [
  // First Layout with nested child routes
  {
    path: 'first-layout',
    loadComponent: () =>
      import('./shared/layouts/default-layout/default-layout.component').then(
        (m) => m.DefaultLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/landing-page/landing-page.component').then(
            (m) => m.LandingPageComponent
          ),
      },
    ],
  },

  // Second Layout with nested child routes
  {
    path: 'second-layout',
    loadComponent: () =>
      import('./shared/layouts/side-layout/side-layout.component').then(
        (m) => m.SideLayoutComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        loadComponent: () =>
          import('./pages/landing-page/landing-page.component').then(
            (m) => m.LandingPageComponent
          ),
      },
      {
        path: 'prof',
        loadComponent: () =>
          import('./pages/landing-page/landing-page.component').then(
            (m) => m.LandingPageComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/landing-page/landing-page.component').then(
            (m) => m.LandingPageComponent
          ),
      },
    ],
  },

  // Default redirect
  {
    path: '',
    redirectTo: 'first-layout',
    pathMatch: 'full',
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
