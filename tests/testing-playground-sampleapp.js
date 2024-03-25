import { envs } from '../url-module.js';


describe('UI Testing Playground - Sample App', function() {
    it('should fill in and submit the form while accessing dynamic ids', async function() {
         envs.uiTestingUrl.pathname = '/sampleapp';
         await browser.url(`${envs.uiTestingUrl}`);
         const usernameInput = $('[name="UserName"]');
         const passwordInput = $('[name="Password"]');
         const loginButton = $('#login');
         const loginStatus = $('#loginstatus');
         await expect(usernameInput).toBeDisplayed();
         await expect(passwordInput).toBeDisplayed();
         await expect(loginButton).toHaveText('Log In');
         await usernameInput.addValue('testuser');
         await passwordInput.addValue('pwd');
         await expect(usernameInput).toHaveValue('testuser');
         await expect(passwordInput).toHaveValue('pwd');
         await loginButton.click();
         await expect(loginStatus).toHaveText('Welcome, testuser!');
    });
})