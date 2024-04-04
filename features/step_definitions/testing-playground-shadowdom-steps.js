import { Given, When, Then } from '@wdio/cucumber-framework';
import ShadowDomPage from '../../pages/cucumber-pages/shadowdom-page.js';

// The Features file associated with this test is commented out due to an uncertified insecure certificate from the website this test points to, rendering it unable to complete.

When('the generate button is clicked and it creates a string', async function() {
    await expect(ShadowDomPage.guidField).toBeDisplayed();
    await expect(ShadowDomPage.generateButton).toBeClickable();
    await expect(ShadowDomPage.copyButton).toBeClickable();
    await ShadowDomPage.generateButton.click();

})

Then('the copy button can be pressed to copy it to the clipboard', async function() {
    await ShadowDomPage.copyButton.click();
    const fieldText = await guidField.getValue();
    await expect(await window.navigator.clipboard.readText()).toHaveClipboardText(
        expect.stringContaining(fieldText)
      );
})