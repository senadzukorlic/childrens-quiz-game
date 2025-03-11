import { Routes } from '@angular/router';

export const routes: Routes = [
  // First Layout with nested child routes
  {
    path: '',
    loadComponent: () =>
      import('./shared/layouts/default-layout/default-layout.component').then(
        (m) => m.DefaultLayoutComponent
      ),
  },

  // Second Layout with nested child routes
  {
    path: 'second-layout',
    loadComponent: () =>
      import('./shared/layouts/side-layout/side-layout.component').then(
        (m) => m.SideLayoutComponent
      ),
  },

  // Default redirect

  // Wildcard route for 404
  //   {
  //     path: '**',
  //     loadComponent: () =>
  //       import('./pages/not-found/not-found.component').then(
  //         (m) => m.NotFoundComponent
  //       ),
  //   },
];
