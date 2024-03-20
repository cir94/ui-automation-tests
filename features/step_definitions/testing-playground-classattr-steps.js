import { envs } from '../../url-module.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import Page from '../../pages/page.js';

Given('the webpage is opened', async function() {
    envs.uiTestingUrl.pathname = '/classattr';
    await browser.url(`${envs.uiTestingUrl}`);
});

When('the button is clicked using its class name and opens an alert', async function() {
    await Page.button.waitForClickable();
    await expect(Page.button).toBeClickable();
    await Page.button.click();
});

Then('the alert should be closed and the button is clicked again using its XPath', async function() {
    await browser.acceptAlert();
    const buttonXPath = browser.$('//button[contains(@class, "btn-primary")]');
    await expect(buttonXPath).toBeClickable();
    await buttonXPath.click();
})