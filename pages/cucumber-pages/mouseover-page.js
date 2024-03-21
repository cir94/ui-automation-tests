import { Page } from '../page.js';

class MouseOverPage extends Page {
    get inactiveText() {
        return $('.text-primary');
    }

    get activeText() {
        return $('.text-warning');
    }

    get clickCount() {
        return $('#clickCount');
    }
}

export default new MouseOverPage();