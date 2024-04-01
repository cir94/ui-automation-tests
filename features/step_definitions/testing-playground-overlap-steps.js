import { Given, When, Then } from '@wdio/cucumber-framework';
import OverlapPage from '../../pages/cucumber-pages/overlap-page.js';

When('I scroll the overlapped Name text box into view', async function () {
  await OverlapPage.nameInput.waitForDisplayed();
  await expect(OverlapPage.nameInput).toBeDisplayed();
  await OverlapPage.nameInput.scrollIntoView();
});

Then('I should be able to write in the text box', async function () {
  await OverlapPage.nameInput.addValue('Test');
  await expect(OverlapPage.nameInput).toHaveValue('Test');
});
