export const config = {
  specs: ['../features/*.feature'],
  maxInstances: 10,
  maxInstancesPerCapability: 10,
  injectGlobals: true,
  capabilities: [
    // {
    //   browserName: 'chrome',
    //   'goog:chromeOptions': {
    //     args: ['-headless', 'disable-gpu'],
    //   },
    // },
    // Firefox commented out as to not cause conflicts with one other test using Devtools.
    {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless'],
        },
    },
  ],
  logLevel: 'error',
  baseUrl: 'http://localhost:8080',
  bail: 0,
  waitforTimeout: 5000,
  services: ['devtools'],
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    timeout: 20000,
    require: ['./features/step_definitions/*steps.js'],
  },
};
