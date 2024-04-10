import { envs } from '../url-module.js';

describe('UI Testing Playground - Dynamic ID', function () {
  it('should locate button regardless of ID change in HTML', async function () {
    envs.uiTestingUrl.pathname = '/dynamicid';
    await browser.url(`${envs.uiTestingUrl}`);
    const dynamicButton = browser.$('//body/section/div/button');
    await expect(dynamicButton).toBeClickable();
    await dynamicButton.click();
    await expect(dynamicButton).toHaveText(
      expect.stringContaining('Button with Dynamic ID')
    );
  });
});
