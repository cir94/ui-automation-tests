import { envs } from '../url-module.js';

describe('UI Testing Playground - Mouse Over', function () {
  it(`should be able to click on "click me" link`, async function () {
    envs.uiTestingUrl.pathname = '/mouseover';
    await browser.url(`${envs.uiTestingUrl}`);
    // The 'inactiveText' and 'activeText' variables below are to help the test keep focus on the link, as when you hover over them, the class changes names.
    const inactiveText = browser.$('.text-primary');
    const activeText = browser.$('.text-warning');
    // clickCount is the text which increases by 1 each time the link is clicked
    const clickCount = browser.$('#clickCount');
    await inactiveText.waitForClickable();
    await expect(inactiveText).toBeClickable();
    await inactiveText.moveTo();
    await activeText.doubleClick();
    await expect(clickCount).toHaveTextContaining('2');
  });
});
