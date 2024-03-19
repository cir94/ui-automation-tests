import { envs } from '../url-module.js';
import VisibilityPage from '../pages/visibility-page.js';
// VisibilityPage is being used for readability sake. A lot of variables need to be defined, and defining them in a page file to then be imported keeps the code looking clean

describe('UI Testing Playground - Visibility', function() {
    it('should be able to click on hide button and hide all other buttons on the page', async function() {
        envs.uiTestingUrl.pathname = '/visibility';
        await browser.url(`${envs.uiTestingUrl}`);
        await VisibilityPage.hideBtn.waitForClickable();
        await VisibilityPage.hideBtn.click();
        // The code below will check for all buttons to be hidden
        await VisibilityPage.removeBtn.waitForClickable({ reverse: true });
        await VisibilityPage.zeroBtn.waitForClickable({ reverse: true });
        await VisibilityPage.overlapBtn.waitForClickable({ reverse: true });
        await VisibilityPage.transparentBtn.waitForClickable({ reverse: true });
        await VisibilityPage.invisibleBtn.waitForClickable({ reverse: true });
        await VisibilityPage.noDisplayBtn.waitForClickable({ reverse: true });
        await VisibilityPage.offscreenBtn.waitForClickable({ reverse: true });
    })
})