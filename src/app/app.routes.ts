import {Routes} from '@angular/router';
import {NotFoundComponent} from "@app/routes/not-found/not-found.component";
import {authGuard} from "@app/core/guard/auth/auth.guard";
import {adminGuard} from "@app/core/guard/admin/admin.guard";

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'dashboard',
    loadChildren: () => import('@app/routes/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authGuard, adminGuard]
  },
  {path: 'auth', loadChildren: () => import('@app/routes/auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'profile', loadChildren: () => import('@app/routes/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [authGuard]
  },
  {path: 'home', redirectTo: ''},
  {path: '', loadChildren: () => import('@app/routes/home/home.module').then(m => m.HomeModule)},
  {path: 'not-found', title: 'Page non trouvée', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];
