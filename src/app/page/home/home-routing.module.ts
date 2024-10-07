import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "../home/dashboard/dashboard.component";
import {NotFoundComponent} from "../not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'dashboard', redirectTo: ''},
  {path: '', title: 'Tableau de bord', component: DashboardComponent},
  {path: 'not-found', title: 'Page non trouvée', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
