import { Given, When, Then } from '@wdio/cucumber-framework';
import AppPage from '../../pages/cucumber-pages/sampleapp-page.js';

When('I enter my credentials into the input fields', async function () {
  await expect(AppPage.usernameInput).toBeDisplayed();
  await expect(AppPage.passwordInput).toBeDisplayed();
  await expect(AppPage.loginButton).toHaveText('Log In');
  await AppPage.usernameInput.addValue('testuser');
  await AppPage.passwordInput.addValue('pwd');
  await expect(AppPage.usernameInput).toHaveValue('testuser');
  await expect(AppPage.passwordInput).toHaveValue('pwd');
});

Then('I should click login and be welcomed', async function () {
  await AppPage.loginButton.click();
  await expect(AppPage.loginStatus).toHaveText('Welcome, testuser!');
});
