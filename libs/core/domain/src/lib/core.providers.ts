import { EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import coreRoutes from './core.routes';

export default [provideRouter(coreRoutes)] as Array<
  Provider | EnvironmentProviders
>;
