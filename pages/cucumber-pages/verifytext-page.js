import { Page } from '../page.js';

class VerifyPage extends Page {
  get welcomeDiv() {
    return $('//span[contains(text(), " Welcome ")]');
  }
}

export default new VerifyPage();
