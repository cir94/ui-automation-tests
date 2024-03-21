import { Page } from '../page.js';

class OverlapPage extends Page {
    get nameInput() {
        return $('#name');
    }
}

export default new OverlapPage();
