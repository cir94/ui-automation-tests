import { envs } from '../url-module.js';

describe('UI Testing Playground - Shadow Dom', function() {
    it('should click on a button to create a guid and copy it to clipboard', async function() {
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
        await expect(browser).toHaveClipboardText(expect.stringContaining(fieldText));
    });
});