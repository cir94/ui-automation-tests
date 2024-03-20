import { Page } from '../page.js';

class LoadPage extends Page {
  get button() {
    return $('.btn-primary');
  }
}

export default new LoadPage();
