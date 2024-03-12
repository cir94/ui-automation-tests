import { envs } from '../url-module.js';
import Page from '../pages/page.js';
// Page is used to refer to commonly used class names, allowing the code to not be dry between different tests

describe('UI Testing Playground - Ajax Page', function() {
    it('Should wait for loading to finish after pressing button and for green background success message to appear', async function() {
        envs.uiTestingUrl.pathname = '/ajax';
        await browser.url(`${envs.uiTestingUrl}`);
        // Using Page to access commonly used class names
        await Page.button.waitForClickable();
        await Page.button.click();
        await Page.bgSuccess.waitForExist({ timeout: 20000 });
    });
});