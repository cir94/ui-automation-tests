import { config as baseConfig } from './wdio.conf.js';

export const config = {
  ...baseConfig,
  specs: ['../tests/**'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 35000,
  },
};
