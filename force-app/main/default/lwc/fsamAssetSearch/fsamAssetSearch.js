import { LightningElement } from 'lwc';

export default class FsamAssetSearch extends LightningElement {
    handleSearch(event){
        this.dispatchEvent(new CustomEvent('search', { detail: { searchTerm: event.detail.searchTerm }}));
    }
}