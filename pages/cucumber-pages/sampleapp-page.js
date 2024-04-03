import { Page } from '../page.js';

class AppPage extends Page {
    get usernameInput() {
        return $('[name="UserName"]');
    }

    get passwordInput() {
        return $('[name="Password"]');
    }

    get loginButton() {
        return $('#login');
    }

    get loginStatus() {
        return $('#loginstatus');
    }
}

export default new AppPage();