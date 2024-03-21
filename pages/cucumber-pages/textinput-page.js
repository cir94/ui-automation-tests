import { Page } from '../page.js';

class TextInputPage extends Page {
    get textInput() {
        return $('#newButtonName');
    }

    get updateButton() {
        return $('#updatingButton');
    }
}

export default new TextInputPage();