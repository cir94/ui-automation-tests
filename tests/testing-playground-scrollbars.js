import { envs } from '../url-module.js';

describe('UI Testing Playground - Scrollbars', function () {
  it('should scroll the button into view and click it', async function () {
    envs.uiTestingUrl.pathname = '/scrollbars';
    await browser.url(`${envs.uiTestingUrl}`);
    const hiddenButton = $('#hidingButton');
    await expect(hiddenButton).toBeClickable();
    await hiddenButton.scrollIntoView({ block: 'center', inline: 'center' });
    await hiddenButton.click();
    await expect(hiddenButton).toHaveText("Hiding Button");
  });
});
