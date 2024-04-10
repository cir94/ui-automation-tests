import { envs } from '../url-module.js';
import { expect as chai } from 'chai';

describe('UI Testing Playground - Progress Bar', function () {
  it('should press the start button and wait until the progress bar reads at least 75% then press stop', async function () {
    envs.uiTestingUrl.pathname = '/progressbar';
    await browser.url(`${envs.uiTestingUrl}`);
    const progressBar = $('#progressBar');
    const startButton = $('#startButton');
    const stopButton = $('#stopButton');
    await expect(startButton).toBeClickable();
    await expect(stopButton).toBeClickable();
    await expect(progressBar).toBeDisplayed();
    await startButton.click();
    await progressBar.waitUntil(
      async function () {
        return parseFloat(await this.getText()) >= 75;
      },
      {
        timeout: 30000,
        timeoutMsg: `progress was not 75%`,
      }
    );
    await stopButton.click();
    // console.log(parseFloat(await progressBar.getText()))
    chai(parseFloat(await progressBar.getText())).to.be.greaterThanOrEqual(75);
  });
});
