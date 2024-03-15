import { envs } from '../url-module.js';

describe('UI Testing Playground - Hidden Layers', function () {
  it('should click the green button once, then blue button which appears over green, and not return to green', async function () {
    envs.uiTestingUrl.pathname = '/hiddenlayers';
    await browser.url(`${envs.uiTestingUrl}`);
    const greenButton = browser.$('#greenButton');
    const blueButton = browser.$('#blueButton');
    await greenButton.waitForClickable();
    await greenButton.click();
    expect(blueButton).toBeClickable();
    await blueButton.click();
    await greenButton.waitForClickable({ reverse: true });
  });
});
