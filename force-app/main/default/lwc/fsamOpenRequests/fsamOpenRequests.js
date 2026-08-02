import { LightningElement, api } from 'lwc';

const COLUMNS = [
    {
        label: 'Request',
        fieldName: 'requestNumber',
        type: 'text'
    },
    {
        label: 'Customer',
        fieldName: 'customerName',
        type: 'text'
    },
    {
        label: 'Priority',
        fieldName: 'priority',
        type: 'text'
    },
    {
        label: 'Status',
        fieldName: 'status',
        type: 'text'
    }
];

export default class FsamOpenRequests extends LightningElement {

    @api requests = [];

    columns = COLUMNS;

    get hasRequests() {
        return this.requests?.length > 0;
    }

}