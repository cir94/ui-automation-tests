# UI Automation Tests

This repo is comprised of tests that are written to test many of the functions provided by the website UI Testing Playground via automation.

There are two sets of tests in this repo, one set being written primarily in Mocha syntax, while the other set is written for Cucumber using Gherkin Syntax. The automation tools used to carry out these tests comprise mainly of WebdriverIO, with wdio/mocha-framework and wdio/cucumber-framework being used as libraries to drive the tests.

Assertations are made primarily with WDIO `expect` statements, with Chai's `assert` also being used as another library to help leverage certain assertations in some tests within this repo that WDIO cannot fulfill.

ESLint and Prettier are used as well, with ESLint ensuring that any errors in the code are brought to attention, while Prettier formats the code so it sticks to a uniform standard

Lastly, Allure-Reporter is being used to help give an overall view on the status of all tests after they're being ran.

## To setup this project for use

- run `npm install`
- This project requires an `.env` file to be created in the root folder for tests to run
  - Once created, in that `.env` file, add this line: `TESTING_URL="https://uitestingplayground.com"`

## To run tests

There are two `npm` commands used to run tests for this project, one for Mocha and one for Cucumber.

- To run Mocha tests, run `npm run test` in your terminal
- To run Cucumber tests, run `npm run test:cucumber` in your terminal

These tests will be running via the latest version of Chrome headless. Some console logs may occur while testing, which come from the site being tested and not the spec files itself.

## Packages

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
- prettier
