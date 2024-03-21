import { Page } from '../page.js';

class DynamicPage extends Page {
  get dynamicButton() {
    return $('//body/section/div/button');
  }
}

export default new DynamicPage();
