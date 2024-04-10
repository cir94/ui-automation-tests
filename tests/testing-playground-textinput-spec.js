import { envs } from '../url-module.js';

describe('UI Testing Playground - Text Input', function () {
  it('should be able to type text into field to change button name', async function () {
    envs.uiTestingUrl.pathname = '/textinput';
    await browser.url(`${envs.uiTestingUrl}`);
    const textInput = browser.$('#newButtonName');
    const updateButton = browser.$('#updatingButton');
    await expect(updateButton).toBeClickable();
    await textInput.setValue('Success');
    await updateButton.click();
    await expect(updateButton).toHaveText('Success');
  });
});
