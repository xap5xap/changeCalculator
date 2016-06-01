import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ChangeCalculatorAppComponent, environment } from './app/';
import {HTTP_PROVIDERS} from '@angular/http';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';

if (environment.production) {
  enableProdMode();
}

bootstrap(ChangeCalculatorAppComponent, [APP_SHELL_RUNTIME_PROVIDERS, HTTP_PROVIDERS]);
