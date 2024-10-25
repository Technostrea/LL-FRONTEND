import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "@app/routes/auth/login/login.component";
import {RegisterComponent} from "@app/routes/auth/register/register.component";
import {NotFoundComponent} from "@app/routes/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', redirectTo: ''},
  {path: 'not_found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
