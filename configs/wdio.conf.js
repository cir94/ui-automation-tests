export const config = {
    specs: ['../tests/**'],
    maxInstances: 10,
    maxInstancesPerCapability: 10,
    injectGlobals: true,
    capabilities: [
        // Browsers will run without being opened
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['-headless', 'disable-gpu'],
            },
        },
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
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    services: ['devtools'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }}
