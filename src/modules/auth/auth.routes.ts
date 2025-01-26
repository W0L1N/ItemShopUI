import {Routes} from '@angular/router';
import {guestGuard} from './guards/guest.guard';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {LoginPageComponent} from './login-page/login-page.component';

export const authRoutes: Routes = [
  {
    path: "register",
    // canActivate:[guestGuard],
    component: RegistrationPageComponent
  },
  {
    path: "login",
    // canActivate:[guestGuard],
    component: LoginPageComponent
  }
];
