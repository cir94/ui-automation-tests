import { envs } from '../url-module.js';
import Page from '../pages/page.js';

describe('UI Testing Playground - Client Delay', function() {
    it('should wait for javascript processing on client side to finish and for element to appear', async function() {
        envs.uiTestingUrl.pathname = '/clientdelay';
        await browser.url(`${envs.uiTestingUrl}`);
        Page.button.waitForClickable();
        Page.button.click()
        await Page.bgSuccess.waitForExist({ timeout: 20000 });
    })
})