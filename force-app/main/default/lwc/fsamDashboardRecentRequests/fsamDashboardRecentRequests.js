import { LightningElement, api } from 'lwc';

const COLUMNS = [
    {
        label: 'Request Number',
        fieldName: 'requestNumber',
        type: 'text'
    },
    {
        label: 'Asset',
        fieldName: 'assetName',
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
    },
    {
        label: 'Customer',
        fieldName: 'customerName',
        type: 'text'
    },
    {
        label: 'Created Date',
        fieldName: 'createdDate',
        type: 'date',
        typeAttributes: {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }
    }
];

export default class FsamDashboardRecentRequests extends LightningElement {
    @api requests = [];

    columns = COLUMNS;

    get hasRequest(){
        return this.requests?.length > 0;
    }
}