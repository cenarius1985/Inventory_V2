import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import {redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';


const routes: Routes = [
  
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'main', component: MainComponent, ...canActivate(()=> redirectUnauthorizedTo(['/register'])) },
  { path:'**', redirectTo:'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
