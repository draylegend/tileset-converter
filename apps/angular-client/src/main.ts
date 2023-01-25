import { bootstrapApplication } from '@angular/platform-browser';
import coreProviders from '@tileset-converter/core/domain';
import AppComponent from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: coreProviders,
}).catch(e => console.error(e));
