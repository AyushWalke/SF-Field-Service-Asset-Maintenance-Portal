import { LightningElement, wire } from 'lwc';

import getInventoryWorkspace from '@salesforce/apex/FSAM_InventoryController.getInventoryWorkspace';

export default class FsamInventoryWorkspace extends LightningElement {
    workspace;
    filteredItems = [];
    searchTerm = '';

    @wire(getInventoryWorkspace)
    wiredWorkspace({ error, data }) {
        if (data) {
            this.workspace = data;
            this.filteredItems = [...data.inventoryItems];
        } else if (error) {
            console.error(error);
        }
    }

    get summary() {
        return this.workspace?.summary || {};
    }

    handleSearch(event) {
        this.searchTerm = event.detail.searchTerm.toLowerCase();

        this.filteredItems = this.workspace.inventoryItems.filter(item =>
                item.partNumber.toLowerCase().includes(this.searchTerm) ||
                item.partName.toLowerCase().includes(this.searchTerm) ||
                item.category.toLowerCase().includes(this.searchTerm)
            );
    }
}