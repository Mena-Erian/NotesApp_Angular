import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const pLATFORM_ID = inject(PLATFORM_ID);
  console.log(isPlatformBrowser(pLATFORM_ID));

  if (isPlatformBrowser(pLATFORM_ID)) {
    if (localStorage.getItem('token') !== null) {
      return true;
    }
  }
  // return false;

  return true;
};
