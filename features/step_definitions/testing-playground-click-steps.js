import { envs } from '../../url-module.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import clickPage from '../../pages/cucumber-pages/click-page.js';

Given('the webpage is accessed', async function() {
    envs.uiTestingUrl.pathname = '/click';
    await browser.url(`${envs.uiTestingUrl}`);
});

When('the button appears', async function() {
    await clickPage.button.waitForDisplayed();
});

Then('I should be able to click it', async function() {
    await expect(clickPage.button).toBeClickable();
    await clickPage.button.moveTo();
    await clickPage.button.click();
});
