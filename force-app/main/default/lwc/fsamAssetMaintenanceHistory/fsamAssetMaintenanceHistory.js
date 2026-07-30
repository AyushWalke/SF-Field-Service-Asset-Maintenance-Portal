import { LightningElement, api } from 'lwc';

const COLUMNS = [
    {
        label: 'Visit Number',
        fieldName: 'visitNumber',
        type: 'text'
    },
    {
        label: 'Visit Date',
        fieldName: 'visitDate',
        type: 'date'
    },
    {
        label: 'Visit Type',
        fieldName: 'visitType',
        type: 'text'
    },
    {
        label: 'Engineer',
        fieldName: 'engineerName',
        type: 'text'
    },
    {
        label: 'Status',
        fieldName: 'status',
        type: 'text'
    }
]

export default class FsamAssetMaintenanceHistory extends LightningElement {
    @api maintenanceHistory = [];
    columns = COLUMNS;

    get hasHistory(){
        return this.maintenanceHistory?.length > 0;
    }
}