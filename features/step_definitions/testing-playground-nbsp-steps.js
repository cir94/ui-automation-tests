import NbspPage from '../../pages/cucumber-pages/nbsp-page.js';
import { Given, When, Then } from '@wdio/cucumber-framework';

When('the button is found via XPath', async function() {
    await expect(NbspPage.xpathButton).toBeClickable();
    await expect(NbspPage.xpathButton).toHaveText('My Button');
}) 

Then('it should be able to be clicked', async function() {
    await NbspPage.xpathButton.click();
})