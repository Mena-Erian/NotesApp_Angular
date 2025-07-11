import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const pLATEFORM_ID = inject(PLATFORM_ID);

  if (isPlatformBrowser(pLATEFORM_ID)) {
    if (localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          token: `3b8ny__${localStorage.getItem('token')}`,
        },
      });
    }
  }

  return next(req);
};
