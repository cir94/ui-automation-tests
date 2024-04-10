import { envs } from '../url-module.js';
import Page from '../pages/page.js';

describe('UI Testing Playground - Client Delay', function () {
  it('should wait for javascript processing on client side to finish and for element to appear', async function () {
    envs.uiTestingUrl.pathname = '/clientdelay';
    await browser.url(`${envs.uiTestingUrl}`);
    await expect(Page.button).toBeClickable();
    await Page.button.click();
    await Page.bgSuccess.waitForExist({ timeout: 20000 });
    await expect(Page.bgSuccess).toBeDisplayed();
  });
});
