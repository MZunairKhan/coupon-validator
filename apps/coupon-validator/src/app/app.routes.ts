import { Route } from '@angular/router';

export const appRoutes: Route[] = [

    { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { 
        title: 'Home',
        path: 'home',
        loadComponent: () => import('./components/home/home.component')
            .then(c => c.HomeComponent)
    },
    { 
        title: 'Generate',
        path: 'generate',
        loadComponent: () => import('./components/generate-coupon/generate-coupon.component')
            .then(c => c.GenerateCouponComponent)
    },
    { 
        title: 'View',
        path: 'view',
        loadComponent: () => import('./components/view-coupons/view-coupons.component')
            .then(c => c.ViewCouponsComponent)
    },
    { 
        title: 'Not Found',
        path: '404',
        loadComponent: () => import('./components/not-found/not-found.component')
            .then(c => c.NotFoundComponent)
    },
    {
      path: '**',
      redirectTo: '404',
      pathMatch: 'full'
    }

];
