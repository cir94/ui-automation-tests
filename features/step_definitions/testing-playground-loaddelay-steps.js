import { envs } from '../../url-module.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import LoadPage from '../../pages/cucumber-pages/loaddelay-page.js';

Given('the load delay link is clicked', async function() {
    await browser.url(`${envs.uiTestingUrl}`);
    const loadDelayLink = browser.$('=Load Delay');
    await loadDelayLink.waitForClickable();
    await expect(loadDelayLink).toBeClickable();
    await loadDelayLink.click();
});

When('the webpage finishes loading', async function() {
    await LoadPage.button.waitForExist();
});

Then('I should see a button and be able to click it', async function() {
    await LoadPage.button.waitForClickable();
    await expect(LoadPage.button).toBeClickable();
    await LoadPage.button.click();
});


