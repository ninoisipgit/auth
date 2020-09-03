import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PulicComponent } from './pulic/pulic.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},

  {path:'login', component: LoginComponent},
  {path:'public', component: PulicComponent},
  {path:'private', component: PrivateComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
