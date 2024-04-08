import DynamicTablePage from '../../pages/cucumber-pages/dynamictable-page.js';
import { Given, When, Then } from '@wdio/cucumber-framework';

When('the table is loaded and the correct value is defined', async function () {
  await expect(DynamicTablePage.tableElement).toBeDisplayed();
});

Then(
  'the value should be the same as the static variable on the page',
  async function () {
    const tablePercent = await DynamicTablePage.tableElement.getText();
    await expect(DynamicTablePage.stringCpuPercent).toHaveText(
      expect.stringContaining(tablePercent)
    );
  }
);
