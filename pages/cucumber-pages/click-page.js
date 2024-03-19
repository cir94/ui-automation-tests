import { Page } from '../page.js';

class ClickPage extends Page {
  get button() {
    return $('#badButton');
  }
}

export default new ClickPage();
