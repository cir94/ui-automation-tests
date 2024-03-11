// import 'dotenv/config';
import { envs } from '../url-module.js'

// Importing global env for testing page URL

describe('UI Testing Playground', function() {
    describe('click', function() {
        it('should only accept a physical click, not a DOM event emulated click', async function() {
            envs.uiTestingUrl.pathname = '/click';
            await browser.url(`${envs.uiTestingUrl}`);
            const badButton = browser.$('#badButton');
            await badButton.moveTo();
            await badButton.click();
        })
    })
})