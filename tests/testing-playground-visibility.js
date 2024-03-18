import { envs } from '../url-module.js';

describe('UI Testing Playground - Visibility', function() {
    it('should be able to click on hide button', async function() {
        envs.uiTestingUrl.pathname = '/visibility';
        await browser.$(`${envs.uiTestingUrl}`);
        const hideBtn = browser.$('#hideButton');
        const removedBtn = browser.$('#removedButton');
        await hideBtn.waitForClickable();
        await hiddeBtn.click();
        await expect(removedBtn).not.toBeDisplayed();
    })
})