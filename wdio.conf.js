export const config = {
    runner: 'browser',
    specs: ['./src/**/*.test.js'],
    maxInstances: 10,
    injectGlobals: true,
    capabilities: [{
        // capabilities for local browser web tests
        browserName: 'chrome',
        brorserName: 'firefox' // or "firefox", "microsoftedge", "safari"
    }],
    logLevel: 'info',
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
    },
