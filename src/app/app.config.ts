import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';

import { environment } from '../environment';
import { tmdbApiKeyInterceptor } from '../core/interceptors/tmdbApiKey-interceptor';
import { routes } from './app.routes';

const APP_ENVIRONMENT_PROVIDERS = [
  provideRouter(routes, withHashLocation()),
  provideHttpClient(withFetch(), withInterceptors([tmdbApiKeyInterceptor])),
];
const NGRX_ENVIRONMENT_PROVIDERS = [provideStore({}), provideEffects([]), provideRouterStore()];

if (environment.configuration === 'dev') {
  NGRX_ENVIRONMENT_PROVIDERS.push(provideStoreDevtools({ maxAge: 25, logOnly: false }));
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    ...APP_ENVIRONMENT_PROVIDERS,
    ...NGRX_ENVIRONMENT_PROVIDERS,
  ],
};
