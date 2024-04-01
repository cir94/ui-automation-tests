import { Given, When, Then } from '@wdio/cucumber-framework';
import TextInputPage from '../../pages/cucumber-pages/textinput-page.js';

When('I put text in the field and press the button', async function () {
  await TextInputPage.updateButton.waitForClickable();
  await expect(TextInputPage.updateButton).toBeClickable();
  await TextInputPage.textInput.setValue('Success');
  await TextInputPage.updateButton.click();
});

Then('the button should have the text I put in', async function () {
  await expect(TextInputPage.updateButton).toHaveText('Success');
});
