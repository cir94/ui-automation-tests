import { Given, When, Then } from '@wdio/cucumber-framework';
import Page from '../../pages/page.js';

When('the AJAX button is clicked', async function () {
  await Page.button.waitForClickable();
  await expect(Page.button).toBeClickable();
  await Page.button.click();
});

Then('an element should appear confirming data loaded', async function () {
  await Page.bgSuccess.waitForExist({ timeout: 20000 });
  await expect(Page.bgSuccess).toBeDisplayed();
});
