import { Given } from '@wdio/cucumber-framework';

// The purpose for this specific step file is to remove the repeated given step in each test that would open the website required for testing, instead opting for a dynamic test that works with Cucumber Expressions to cover this specific step

Given('I open the url {string}', async (site) => {
  await browser.url(site);
});
