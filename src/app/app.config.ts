import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { provideQuillConfig } from 'ngx-quill'


import Counter from './counter'

export const appConfig: ApplicationConfig = {
  providers: [provideQuillConfig({
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
