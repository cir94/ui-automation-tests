import { Given, When, Then } from '@wdio/cucumber-framework';
import VisibilityPage from '../../pages/visibility-page.js';

When('the hide button is pressed', async function() {
    await VisibilityPage.hideBtn.waitForClickable();
    await expect(VisibilityPage.hideBtn).toBeClickable();
    await VisibilityPage.hideBtn.click();
});

Then('all other buttons on the page should be hidden and unable to be clicked', async function() {
    await expect(VisibilityPage.removeBtn).not.toBeClickable();
    await expect(VisibilityPage.zeroBtn).not.toBeClickable();
    await expect(VisibilityPage.overlapBtn).not.toBeClickable();
    await expect(VisibilityPage.transparentBtn).not.toBeClickable();
    await expect(VisibilityPage.invisibleBtn).not.toBeClickable();
    await expect(VisibilityPage.noDisplayBtn).not.toBeClickable();
    await expect(VisibilityPage.offscreenBtn).not.toBeClickable();
});