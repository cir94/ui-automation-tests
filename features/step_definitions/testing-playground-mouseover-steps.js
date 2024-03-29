import MouseOverPage from '../../pages/cucumber-pages/mouseover-page.js';
import { Given, When, Then } from '@wdio/cucumber-framework';

When('the element is hovered and its class name changes', async function () {
  await MouseOverPage.inactiveText.waitForClickable();
  await expect(MouseOverPage.inactiveText).toBeClickable();
  await MouseOverPage.inactiveText.moveTo();
});

Then('I should be able to click it again', async function () {
  await MouseOverPage.activeText.doubleClick();
  await expect(MouseOverPage.clickCount).toHaveTextContaining('2');
});
