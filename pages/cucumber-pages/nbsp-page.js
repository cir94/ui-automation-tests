import { Page } from '../page.js';

class NbspPage extends Page {
  get xpathButton() {
    return $('//button[text()="My\u00a0Button"]');
  }
}

export default new NbspPage();
