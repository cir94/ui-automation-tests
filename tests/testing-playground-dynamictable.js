import { envs } from '../url-module.js';

describe('UI Testing Playground - Dynamic Table', function() {
    it('should find and compare two numbers, finding one with aria attributes', async function() {
        envs.uiTestingUrl.pathname = '/dynamictable';
        await browser.url(`${envs.uiTestingUrl}`);
        
        // The tableCpuElement variable below is using XPath to find the specific row in the dynamic table that has "Chrome" in it, and then pulls the CPU usage from it by looking for the sibling that contains a % in its string.

        // The stringCpuElement looks for the p element inside of the bg-warning class 
        
        const tableCpuElement = await browser.$('//span[contains(text(), "Chrome")]/following-sibling::span[contains(text(), "%")]');
        const stringCpuElement = await browser.$('p.bg-warning');
        
        // Another variable is created for the purpose of retrieving the text inside of them for assertion later

        const tableCpuPercent = await tableCpuElement.getText();

        // After, the stringCpuElement variable is asserted against the tableCpuPercent variable to ensure that the Chrome CPU usage in the table is the same as the one located outside of the table
        await expect(stringCpuElement).toHaveText(expect.stringContaining(tableCpuPercent));
    });
});