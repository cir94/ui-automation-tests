import { envs } from '../url-module.js';

// This particular test is unfinished. While it can't click the button twice, it still returns a failed test. Researching how to turn failed test to positive
describe('UI Testing Playground - Hidden Layers', function() {
    it('should click the green button only once', async function() {
        envs.uiTestingUrl.pathname = '/hiddenlayers';
        await browser.url(`${envs.uiTestingUrl}`);
        const greenButton = browser.$('#greenButton');
        await greenButton.waitForClickable();
        await greenButton.click();
        browser.pause(1000);
        await greenButton.click();
    })
})