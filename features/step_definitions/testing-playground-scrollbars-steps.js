import { Given, When, Then } from '@wdio/cucumber-framework';
import ScrollPage from '../../pages/cucumber-pages/scrollbars-page.js';

When('I scroll the button into view', async function() {
    await ScrollPage.hiddenButton.scrollIntoView({ block: 'center', inline: 'center'});
    await expect(ScrollPage.hiddenButton).toBeClickable();
})

Then('it can be clicked', async function() {
    await ScrollPage.hiddenButton.click();
})