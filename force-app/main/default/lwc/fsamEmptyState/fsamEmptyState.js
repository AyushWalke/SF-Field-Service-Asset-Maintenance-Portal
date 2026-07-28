import { api, LightningElement } from 'lwc';

export default class FsamEmptyState extends LightningElement {
    @api title = 'No Data Available';
    @api message = 'There are no records to display.';
    @api iconName = 'utility:info';
}