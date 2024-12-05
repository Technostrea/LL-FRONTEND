import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "@app/routes/not-found/not-found.component";
import {HomeComponent} from "@app/routes/home/home.component";
import {ApartmentListComponent} from "@app/routes/home/apartment-list/apartment-list.component";
import {ApartmentDetailComponent} from "@app/routes/home/apartment-detail/apartment-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'location', redirectTo: ''},
  {
    path: '', component: HomeComponent, title: 'Location',
    children: [
      {
        path: '',
        component: ApartmentListComponent,
        title: 'Liste des appartements'
      },
      {
        path: ':id',
        component: ApartmentDetailComponent,
        title: 'Detail de l\'appartement'
      },
    ]
  },
  {path: 'not-found', title: 'Page non trouvée', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
