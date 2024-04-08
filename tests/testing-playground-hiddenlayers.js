import { envs } from '../url-module.js';
import { expect as chaiExpect } from 'chai';

describe('UI Testing Playground - Hidden Layers', function () {
  it('should click the green button once, then blue button which appears over green, and not return to green', async function () {
    envs.uiTestingUrl.pathname = '/hiddenlayers';
    await browser.url(`${envs.uiTestingUrl}`);
    const greenButton = browser.$('#greenButton');
    const blueButton = browser.$('#blueButton');
    await greenButton.waitForClickable();
    await expect(greenButton).toBeClickable;
    await greenButton.click();
    await expect(blueButton).toBeClickable();
    await blueButton.click();
    chaiExpect(await greenButton.isClickable()).to.equal(false);
  });
});
