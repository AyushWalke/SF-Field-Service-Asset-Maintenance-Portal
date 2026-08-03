import { LightningElement, api } from 'lwc';

const COLUMNS = [
    {
        label: 'Part Number',
        fieldName: 'partNumber',
        type: 'text'
    },
    {
        label: 'Part Name',
        fieldName: 'partName',
        type: 'text'
    },
    {
        label: 'Category',
        fieldName: 'category',
        type: 'text'
    },
    {
        label: 'Available',
        fieldName: 'availableQuantity',
        type: 'number'
    },
    {
        label: 'Minimum',
        fieldName: 'minimumQuantity',
        type: 'number'
    },
    {
        label: 'Reorder',
        fieldName: 'reorderQuantity',
        type: 'number'
    },
    {
        label: 'Status',
        fieldName: 'stockStatus',
        type: 'text'
    },
    {
        label: 'Unit Price',
        fieldName: 'unitPrice',
        type: 'currency',
        typeAttributes: {
            currencyCode: 'USD'
        }
    }
];

export default class FsamInventoryTable extends LightningElement {

    @api items = [];

    columns = COLUMNS;

    get hasItems() {
        return this.items?.length > 0;
    }

}