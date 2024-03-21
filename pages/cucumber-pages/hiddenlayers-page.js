import { Page } from '../page.js';

class HiddenLayersPage extends Page {
  get greenButton() {
    return $('#greenButton');
  }

  get blueButton() {
    return $('#blueButton');
  }
}

export default new HiddenLayersPage();
