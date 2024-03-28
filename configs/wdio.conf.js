export const config = {
  specs: ['../tests/**'],
  maxInstances: 10,
  maxInstancesPerCapability: 10,
  injectGlobals: true,
  capabilities: [
    // {
    //   browserName: 'chrome',
    //   browserVersion: 'stable',
    //   'goog:chromeOptions': {
    //     args: ['-headless', 'disable-gpu'],
    //   },
    // },
    // Firefox commented out as to not cause conflicts with one other test using Devtools.
    {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
            args: ['-headless'],
        },
    },
  ],
  logLevel: 'error',
  baseUrl: 'http://localhost:8080',
  bail: 0,
  waitforTimeout: 1000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['devtools'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
