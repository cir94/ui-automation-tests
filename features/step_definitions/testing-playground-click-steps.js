import { Given, When, Then } from '@wdio/cucumber-framework';
import clickPage from '../../pages/cucumber-pages/click-page.js';

When('the button appears', async function () {
  await clickPage.button.waitForDisplayed();
});

Then('I should be able to click it', async function () {
  await expect(clickPage.button).toBeClickable();
  await clickPage.button.moveTo();
  await clickPage.button.click();
  await expect(clickPage.button).toHaveElementClass('btn-success');
});
