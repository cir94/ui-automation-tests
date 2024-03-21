import HiddenLayersPage from '../../pages/cucumber-pages/hiddenlayers-page.js';
import { Given, When, Then } from '@wdio/cucumber-framework';

When('the green button is clicked', async function () {
  await HiddenLayersPage.greenButton.waitForDisplayed();
  await expect(HiddenLayersPage.greenButton).toBeClickable();
  await HiddenLayersPage.greenButton.click();
});

Then(
  'a blue button should cover it making the green one unclickable',
  async function () {
    await HiddenLayersPage.blueButton.waitForDisplayed();
    await expect(HiddenLayersPage.blueButton).toBeClickable();
    await HiddenLayersPage.blueButton.click();
    await HiddenLayersPage.greenButton.waitForClickable({ reverse: true });
  }
);
