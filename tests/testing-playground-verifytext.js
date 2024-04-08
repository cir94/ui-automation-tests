import { envs } from '../url-module.js';

describe('UI Testing Playground - Verify Text', function () {
  it('should find an element that starts with "Welcome" in its text', async function () {
    envs.uiTestingUrl.pathname = '/verifytext';
    await browser.url(`${envs.uiTestingUrl}`);
    const welcomeDiv = $('//span[contains(text(), " Welcome ")]');
    await expect(welcomeDiv).toBeDisplayed();
  });
});
