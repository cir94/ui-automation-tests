import { envs } from '../url-module.js';

describe('UI Testing Playground - Overlapped Element', function() {
    it('should scroll to fully display name  text box, then write text', async function() {
        envs.uiTestingUrl.pathname = '/overlapped';
        await browser.url(`${envs.uiTestingUrl}`);
        await browser.emulateDevice('iPhone 12');
        const nameInput = browser.$('#name');
        await nameInput.scrollIntoView();
        await nameInput.setValue('Test');
        await browser.pause(3000);
    });
});