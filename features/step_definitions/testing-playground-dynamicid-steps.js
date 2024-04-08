import DynamicPage from '../../pages/cucumber-pages/dynamicid-page.js';
import { Given, When, Then } from '@wdio/cucumber-framework';

When('the dynamically named button appears', async function () {
  await DynamicPage.dynamicButton.waitForDisplayed();
  await expect(DynamicPage.dynamicButton).toHaveTextContaining(
    'Button with Dynamic ID'
  );
});

Then('I should be able to click it without using its ID', async function () {
  await expect(DynamicPage.dynamicButton).toBeClickable();
  await DynamicPage.dynamicButton.click();
  await expect(DynamicPage.dynamicButton).toHaveText(
    expect.stringContaining('Button with Dynamic ID')
  );
});
