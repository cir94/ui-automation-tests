import { envs } from '../url-module.js';

describe('UI Testing Playground - Ajax Page', function() {
    it('Should wait for loading to finish after pressing button and for green background success message to appear', async function() {
        envs.uiTestingUrl.pathname = '/ajax';
        await browser.url(`${envs.uiTestingUrl}`);
        const button = browser.$('.btn-primary');
        const bgSuccess = browser.$('.bg-success');
        await button.waitForClickable();
        await button.click();
        await bgSuccess.waitForExist({ timeout: 20000 });
    });
});