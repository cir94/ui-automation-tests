import { Page } from '../page.js';

class ScrollPage extends Page {
  get hiddenButton() {
    return $('#hidingButton');
  }
}

export default new ScrollPage();
