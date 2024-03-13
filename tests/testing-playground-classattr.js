import Page from '../pages/page.js';
import { envs } from '../url-module.js';

describe('UI Testing Playground - Class Attribute', function() {
    it('should click on the specified button twice, once with selecting class and second with XPath, and give an alert each time', async function() {
        envs.uiTestingUrl.pathname = '/classattr';
        await browser.url(`${envs.uiTestingUrl}`);
        // This page has the commonly used 'btn-primary' class, so I will use the button found in the Page file to reference it
        const buttonXPath = browser.$('//button[contains(@class, "btn-primary")]');
        await Page.button.waitForClickable();
        await Page.button.click();
        await console.log('Button Clicked');
        browser.acceptAlert();
        await buttonXPath.click();
        await console.log('XPath Clicked');
        browser.acceptAlert();
    })
})