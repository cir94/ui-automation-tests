export class Page {
    constructor() {
        this.title = 'UI Testing Playground'
    }

    get button() {
        return $('.btn-primary');
    }

    get bgSuccess() {
        return $('.bg-success');
    }
}

export default new Page();