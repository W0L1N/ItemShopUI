import {CanActivateFn} from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  return true
  // if (inject(AuthService).isAuthenticated()) {
  //   inject(Router).navigate(['/']);
  //   return false;
  // } else {
  //   return true;
  // }
};
