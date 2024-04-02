import { Page } from '../page.js';

class ProgressPage extends Page {
    get progressBar() {
        return $('#progressBar');
    }

    get startButton() {
        return $('#startButton');
    }

    get stopButton() {
        return $('#stopButton');
    }
}

export default new ProgressPage();