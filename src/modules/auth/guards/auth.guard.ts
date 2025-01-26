import {CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return false
  // if (inject(AuthService).isAuthenticated()) {
  //   return true;
  // } else {
  //   inject(Router).navigate(['/login']);
  //   return false;
  // }
};
