export const config = {
  maxInstances: 10,
  maxInstancesPerCapability: 10,
  injectGlobals: true,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          '-headless',
          'disable-gpu',
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--ignore-certificate-errors',
        ],
      },
    },
    // Firefox commented out as to not cause conflicts with one other test using Devtools.
    // {
    //   browserName: 'firefox',
    //   acceptInsecureCerts: true,
    //   'moz:firefoxOptions': {
    //     args: ['-headless'],
    //   },
    // },
  ],
  logLevel: 'error',
  baseUrl: 'http://localhost:8080',
  bail: 0,
  waitforTimeout: 1000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['devtools'],
  reporters: [
    [
      'allure',
      {
        outputDir: 'wdio-allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
    'spec',
  ],
};
