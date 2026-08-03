import { LightningElement } from 'lwc';

export default class FsamInventorySearch extends LightningElement {

    handleSearch(event) {
        this.dispatchEvent(
            new CustomEvent('search', {
                detail: event.detail
            })
        );
    }
}