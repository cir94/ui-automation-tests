import { envs } from '../url-module.js';

describe('UI Testing Playground - Non-Breaking Space', function() {
    it('should find the button through XPath with non-breaking space', async function() {
        envs.uiTestingUrl.pathname = '/nbsp'
        await browser.url(`${envs.uiTestingUrl}`);
        const xpathButton = $('//button[text()="My\u00a0\Button"]')
        await expect(xpathButton).toBeClickable()
        await xpathButton.click();
    })
})