import { envs } from '../url-module.js';
// Importing global env for testing page URL

describe('UI Testing Playground - Click', function () {
    it('should only accept a physical click, not a DOM event emulated click', async function () {
      // adding path name to url with .pathname, allowing url to be flexible and usable in all tests
      envs.uiTestingUrl.pathname = '/click';
      await browser.url(`${envs.uiTestingUrl}`);
      const badButton = browser.$('#badButton');
      await badButton.moveTo();
      await badButton.click();
    });
});
