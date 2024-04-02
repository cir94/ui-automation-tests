import ProgressPage from '../../pages/cucumber-pages/progressbar-page.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect as chai } from 'chai';

When('the start button is clicked and the progress bar reaches at least 75%', async function() {
    await expect(ProgressPage.startButton).toBeClickable();
    await expect(ProgressPage.stopButton).toBeClickable();
    await expect(ProgressPage.progressBar).toBeDisplayed();
    await ProgressPage.startButton.click();
    await ProgressPage.progressBar.waitUntil(
        async function () {
          return parseFloat(await this.getText()) >= 75;
        },
        {
          timeout: 30000,
          timeoutMsg: `progress was not 75%`,
        }
      );  
})

Then('the stop button is pressed to stop it', async function() {
    await ProgressPage.stopButton.click();
    chai(parseFloat(await ProgressPage.progressBar.getText())).to.be.greaterThanOrEqual(75);
})