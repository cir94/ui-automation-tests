import { envs } from '../url-module.js';

describe('UI Testing Playground - Mouse Over', function () {
  it(`should be able to click on "click me" link`, async function () {
    envs.uiTestingUrl.pathname = '/mouseover';
    await browser.url(`${envs.uiTestingUrl}`);
    const clickableLink = $('/html/body/section/div/div[1]/a');
    const clickCount = browser.$('#clickCount');
    await expect(clickableLink).toBeClickable();
    await clickableLink.doubleClick();
    await expect(clickCount).toHaveTextContaining('2');
  });
});
