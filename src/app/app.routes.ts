import {Routes} from '@angular/router';
import {NotFoundComponent} from "@app/routes/not-found/not-found.component";

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'home', redirectTo: ''},
  {path: '', loadChildren: () => import('@app/routes/home/home.module').then(m => m.HomeModule)},
  {path: 'home', loadChildren: () => import('@app/routes/home/home.module').then(m => m.HomeModule)},
  {path: 'not-found', title: 'Page non trouvée', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];
