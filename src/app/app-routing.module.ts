import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from './pages/pages.component';
import { NotfoundComponent } from './error/notfound.component';

import { AuthguardService as AuthGuard } from './_core/services/authguard.service';
import { LoginguardService as LoginGuard } from './_core/services/loginguard.service';

 
const routes:Routes = [  
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [LoginGuard],
    component: RegisterComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}