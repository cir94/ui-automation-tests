import { envs } from '../url-module.js';
import VisibilityPage from '../pages/visibility-page.js';
// VisibilityPage is being used for readability sake. A lot of variables need to be defined, and defining them in a page file to then be imported keeps the code looking clean

describe('UI Testing Playground - Visibility', function () {
  it('should be able to click on hide button and hide all other buttons on the page', async function () {
    envs.uiTestingUrl.pathname = '/visibility';
    await browser.url(`${envs.uiTestingUrl}`);
    await VisibilityPage.hideBtn.waitForClickable();
    await expect(VisibilityPage.hideBtn).toBeClickable();
    await VisibilityPage.hideBtn.click();
    // The code below will check for all buttons to be 'hidden', or in this case, assert they're not clickable
    await expect(VisibilityPage.removeBtn).not.toBeClickable();
    await expect(VisibilityPage.zeroBtn).not.toBeClickable();
    await expect(VisibilityPage.overlapBtn).not.toBeClickable();
    await expect(VisibilityPage.transparentBtn).not.toBeClickable();
    await expect(VisibilityPage.invisibleBtn).not.toBeClickable();
    await expect(VisibilityPage.noDisplayBtn).not.toBeClickable();
    await expect(VisibilityPage.offscreenBtn).not.toBeClickable();
  });
});
