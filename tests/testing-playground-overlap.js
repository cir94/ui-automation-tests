// This test will not work in Firefox due to there being an error in compatability with WDIO/Devtools-service and it. This will always return a failure for Firefox.
// Due to Chromedriver constantly having a 404 Download Failed error, this test will be commented out so others can clear without error.

// import { envs } from '../url-module.js';

// describe('UI Testing Playground - Overlapped Element', function() {
//     it('should scroll to fully display name  text box, then write text', async function() {
//         envs.uiTestingUrl.pathname = '/overlapped';
//         await browser.url(`${envs.uiTestingUrl}`);
//         await browser.emulateDevice('iPhone 12');
//         const nameInput = browser.$('#name');
//         await nameInput.scrollIntoView();
//         await nameInput.addValue('Test');
//         await expect(nameInput).toHaveText('Test');
//     });
// });