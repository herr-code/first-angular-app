/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
// Import the routes file and the provideRouter function:
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

// Update the call to bootstrapApplication to include the routing configuration:
bootstrapApplication(AppComponent, {providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)]}).catch((err) =>
  console.error(err),
);
