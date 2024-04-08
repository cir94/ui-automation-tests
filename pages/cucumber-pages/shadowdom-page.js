import { Page } from '../page.js';

// The test this page would assist with is not being used as its unable to be finished due to an insecure site with an uncertified certificate.

class ShadowDomPage extends Page {
  get guidField() {
    return $('guid-generator').shadow$('#editField');
  }

  get generateButton() {
    return $('guid-generator').shadow$('#buttonGenerate');
  }

  get copyButton() {
    return $('guid-generator').shadow$('#buttonCopy');
  }
}

export default new ShadowDomPage();
