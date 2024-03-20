import { envs } from '../../url-module.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import Page from '../../pages/page.js';

Given('the webpage is opened', async function() {
    envs.uiTestingUrl.pathname = '/ajax';
    await browser.url(`${envs.uiTestingUrl}`);
});

When('the AJAX button is clicked', async function() {
    await Page.button.waitForClickable();
    await expect(Page.button).toBeClickable();
    await Page.button.click();
});

Then('an element should appear confirming data loaded', async function() {
    await Page.bgSuccess.waitForExist({ timeout: 20000 });
    await expect(Page.bgSuccess).toBeDisplayed();
});