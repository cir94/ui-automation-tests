import { Page } from '../page.js';

class DynamicTablePage extends Page {
    get tableElement() {
        return $('//span[contains(text(), "Chrome")]/following-sibling::span[contains(text(), "%")]')
    }

    get stringCpuPercent() {
        return $('p.bg-warning');
    }
}

export default new DynamicTablePage();