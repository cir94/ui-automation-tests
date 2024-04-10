import { envs } from '../url-module.js';

// This spec file is being skipped due to an uncertified certificate at the website, not allowing Chrome to copy to the clipboard and thus rendering this test impossible to finish.

describe('UI Testing Playground - Shadow Dom', function () {
  it.skip('should click on a button to create a guid and copy it to clipboard', async function () {
    envs.uiTestingUrl.pathname = '/shadowdom';
    await browser.url(`${envs.uiTestingUrl}`);
    const guidField = $('guid-generator').shadow$('#editField');
    const generateButton = $('guid-generator').shadow$('#buttonGenerate');
    const copyButton = $('guid-generator').shadow$('#buttonCopy');
    await expect(guidField).toBeDisplayed();
    await expect(generateButton).toBeClickable();
    await expect(copyButton).toBeClickable();
    await generateButton.click();
    await copyButton.click();
    const fieldText = await guidField.getValue();
    console.log(await fieldText);
    await browser.execute(async () => {
      // console.log(await window.navigator.clipboard.readText());
    });
    await browser.pause(5000);
    await expect(
      await window.navigator.clipboard.readText()
    ).toHaveClipboardText(expect.stringContaining(fieldText));
  });
});
