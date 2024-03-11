import 'dotenv/config';
// Importing global env for testing page URL

describe('UI Testing Playground', function() {
    describe('click', function() {
        it('should only accept a physical click, not a DOM event emulated click', async function() {
            await browser.url(`${process.env.TESTING_URL}/click`);
            const badButton = browser.$('#badButton');
            await badButton.moveTo();
            await badButton.click();
        })
    })
})