import { Given, When, Then } from '@wdio/cucumber-framework';
import LoadPage from '../../pages/cucumber-pages/loaddelay-page.js';

Given('the load delay link is clicked on {string}', async function (site) {
  await browser.url(site);
  const loadDelayLink = browser.$('=Load Delay');
  await loadDelayLink.waitForClickable();
  await expect(loadDelayLink).toBeClickable();
  await loadDelayLink.click();
});

When('the webpage finishes loading', async function () {
  await LoadPage.button.waitForExist();
});

Then('I should see a button and be able to click it', async function () {
  await LoadPage.button.waitForClickable();
  await expect(LoadPage.button).toBeClickable();
  await LoadPage.button.click();
});
