import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from '../../environment';

export const tmdbApiKeyInterceptor: HttpInterceptorFn = (request, next) => {
  if (!request.url.startsWith(environment.tmdbApiURL)) return next(request);

  const requestClone = request.clone({
    setHeaders: {
      accept: 'application/json',
      Authorization: `Bearer ${environment.tmdbApiKey}`,
    },
  });

  return next(requestClone);
};
