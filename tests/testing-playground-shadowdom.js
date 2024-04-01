import { envs } from '../url-module.js';

// This spec file is being skipped due to a bug in WebdriverIO

// Link to Discussion - https://github.com/webdriverio/webdriverio/discussions/12587
// Link to Issue on WebdriverIO - https://github.com/webdriverio/webdriverio/issues/12589

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
    // await browser.execute(() => {
    //     console.log(window.navigator.clipboard);
    // })
    await expect(window.navigator.clipboard).toHaveClipboardText(
      expect.stringContaining(fieldText)
    );
  });
});
