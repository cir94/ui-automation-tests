import { envs } from '../../url-module.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import Page from '../../pages/page.js';

Given('I open the webpage', async function() {
    envs.uiTestingUrl.pathname = '/clientdelay';
    await browser.url(`${envs.uiTestingUrl}`);
});

When('the button is clicked', async function() {
    await Page.button.waitForClickable();
    await expect(Page.button).toBeClickable();
    await Page.button.click();
});

Then('I should see an element appear after a delay', async function() {
    await Page.bgSuccess.waitForDisplayed({ timeout: 20000 });
    await expect(Page.bgSuccess).toBeDisplayed();
});