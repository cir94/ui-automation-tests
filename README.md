# UI Automation Tests

This repo is comprised of tests that are written to test many of the functions provided by the website UI Testing Playground via automation.

There are two sets of tests in this repo, one set being written primarily in Mocha syntax, while the other set is written for Cucumber using Gherkin Syntax. The automation tools used to carry out these tests comprise mainly of WebdriverIO, with wdio/mocha-framework and wdio/cucumber-framework being used as libraries to drive the tests.

Assertations are made primarily with WDIO `expect` statements, with Chai's `assert` also being used as another library to help leverage certain assertations in some tests within this repo that WDIO cannot fulfill.

ESLint and Prettier are used as well, with ESLint ensuring that any errors in the code are brought to attention, while Prettier formats the code so it sticks to a uniform standard.

Both Husky and Lint-staged are used to drive the aformentioned packages, with Husky being used to create a pre-commit git hook that runs lint-staged during a commit, which will in turn run Prettier against only said commited files. This helps to eliminate the need to check all files in the project, especially those that weren't commited with changes.

Allure-Reporter is being used to help give an overall view on the status of all tests after they're being ran.

Lastly, to ensure tests will run clean regardless of system, there is a dockerfile and compose.yaml included in the repo. If you wish to use docker, there will be instructions to run it through there further in the readme.

# To setup this project for use

- run `npm install`
- This project requires an `.env` file to be created in the root folder for tests to run
  - Once created, in that `.env` file, add this line: `TESTING_URL="https://uitestingplayground.com"`

# To run tests

## Using chrome on system with CLI

There are two `npm` commands used to run tests for this project via CLI, one for Mocha and one for Cucumber.

- To run Mocha tests, run `npm run test` in your terminal
- To run Cucumber tests, run `npm run test:cucumber` in your terminal

These tests will be running via the latest version of Chrome headless. Some console logs may occur while testing, which come from the site being tested and not the spec files itself.

## Using Docker

As said previously, this project utilizes Docker to ensure that the tests will run clean no matter what system you're pulling the project on.

To run the tests in a Docker container, run the following command in your Terminal:

- `docker compose up --build`

This will create two docker images, one for runnning the tests in Mocha syntax, and another for running tests with Gherkin syntax. Each will be spun up into its own container to ensure tests are run separate from each other.

# Packages

All packages being used in this project are as follows:

- webdriverio
- @wdio/cli
- @wdio/devtools-service
- @wdio/local-runner
- @wdio/spec-reporter
- @wdio/mocha-framework
- @wdio/cucumber-framework
- @wdio/allure-reporter
- allure-commandline
- chai
- eslint
- eslint-plugin-wdio
- husky
- lint-staged
- prettier
