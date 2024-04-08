import { Given, When, Then } from '@wdio/cucumber-framework';
import VerifyPage from '../../pages/cucumber-pages/verifytext-page.js';

When('the welcome username div loads', async function() {
    await expect(VerifyPage.welcomeDiv).toBeDisplayed()
})

Then('I should be able to assert that the specific text is being displayed', async function() {
    await expect(VerifyPage.welcomeDiv).toHaveText('Welcome UserName!')
})