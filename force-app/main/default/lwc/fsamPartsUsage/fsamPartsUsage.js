import { LightningElement, api } from 'lwc';

const COLUMNS = [
    {
        label: 'Part Code',
        fieldName: 'partCode',
        type: 'text'
    },
    {
        label: 'Part Name',
        fieldName: 'partName',
        type: 'text'
    },
    {
        label: 'Quantity',
        fieldName: 'quantity',
        type: 'number'
    },
    {
        label: 'Unit Cost',
        fieldName: 'unitCost',
        type: 'currency'
    },
    {
        label: 'Total Cost',
        fieldName: 'totalCost',
        type: 'currency'
    }
];

export default class FsamPartsUsage extends LightningElement {

    @api parts = [];

    columns = COLUMNS;

    get hasParts() {
        return this.parts?.length > 0;
    }

}