import { config as baseConfig } from "./wdio.conf.js";

export const config = {
    ...baseConfig,
    specs: ['../tests/**'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 35000
    }
}

// config.specs = ['../tests/**']

// config.framework = ['mocha']

// config.mochaOpts = [
//     {
//         ui: 'bdd',
//         timeout: 60000
//     },
// ]

