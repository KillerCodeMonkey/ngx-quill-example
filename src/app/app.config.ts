import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router';
import { provideQuillConfig } from 'ngx-quill'

import { routes } from './app.routes';

import Counter from './counter'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(BrowserAnimationsModule), provideQuillConfig({
    customModules: [{
      implementation: Counter,
      path: 'modules/counter'
    }],
    customOptions: [{
      import: 'formats/font',
      whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
    }]
  })]
};
