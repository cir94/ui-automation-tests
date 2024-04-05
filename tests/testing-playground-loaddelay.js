import { envs } from '../url-module.js';

describe('UI Testing Playground - Load Delay', function () {
  it('should click on load delay link on homepage and wait for page to load, then click button on page', async function () {
    await browser.url(`${envs.uiTestingUrl}`);
    const loadDelayLink = browser.$('=Load Delay');
    await expect(loadDelayLink).toBeClickable();
    await loadDelayLink.click();
    const button = await browser.$('.btn');
    await expect(button).toBeClickable();
    await button.click();
    await expect(button).toHaveText(expect.stringContaining('Button Appearing After Delay'))
  });
});
