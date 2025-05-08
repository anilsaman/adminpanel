import { Routes } from '@angular/router';
import { LoginComponent } from './userManagement/login/login.component';
import { RegisterComponent } from './userManagement/register/register.component';

export const routes: Routes = [
    { path: '',  component: LoginComponent },
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent}
  ];
;
