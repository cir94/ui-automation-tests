import { Given } from '@wdio/cucumber-framework';

Given('I open the url {string}', async (site) => {
  await browser.url(site);
});
