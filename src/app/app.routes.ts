import { Routes } from '@angular/router';
import {authRoutes} from '../modules/auth/auth.routes';
import {LoginPageComponent} from '../modules/auth/login-page/login-page.component';
import {ItemListComponent} from '../item-list/item-list.component';

export const routes: Routes = [
  ...authRoutes,
  {
    path: "",
    // canActivate:[guestGuard],
    component: ItemListComponent
  }
];
