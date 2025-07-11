import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const notAuthGuard: CanActivateFn = (route, state) => {
  const pLATFORM_ID = inject(PLATFORM_ID);
  // if (isPlatformBrowser(pLATFORM_ID)) {
  //   if (localStorage.getItem('token') !== null) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // } else {
  //   return false;
  // }

  return true;
};
