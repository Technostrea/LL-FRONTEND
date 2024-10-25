import {ApplicationConfig} from '@angular/core';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
  withViewTransitions,
} from '@angular/router';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {authInterceptor} from "@app/core/interceptors/auth/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideAnimations(),
    provideHttpClient(withFetch(),
      withInterceptors([
          authInterceptor
        ]
      )
    ),
    provideAnimationsAsync(),
  ],
};
