"use strict";
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDocument';
    }
    publish() {
        console.log(`Text send: ${this.item.text}`);
        this.item.setState(new PublishDocumentItemState());
    }
    delete() {
        console.log('Document has deleted');
    }
}
class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublishDocument';
    }
    publish() {
        console.log('Can not publish published document!');
    }
    delete() {
        console.log('Removed from publication');
        this.item.setState(new DraftDocumentItemState());
    }
}
// implementation
const item = new DocumentItem();
item.text = 'My post';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());
