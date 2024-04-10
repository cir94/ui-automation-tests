import { config as baseConfig } from './wdio.conf.js';

export const config = {
  ...baseConfig,
  specs: ['../features/*.feature'],
  framework: 'cucumber',
  cucumberOpts: {
    require: ['./features/step_definitions/*steps.js'],
    timeout: 30000,
  },
};
