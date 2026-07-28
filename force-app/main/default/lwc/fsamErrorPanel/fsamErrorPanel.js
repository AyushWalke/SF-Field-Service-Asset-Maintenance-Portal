import { LightningElement, api } from 'lwc';

export default class FsamErrorPanel extends LightningElement {
    @api title = 'Something went wrong';
    @api message = 'An unexpected error occurred.';
    @api details = '';
    @api iconName = 'utility:error';

    get hasDetails() {
        return Boolean(this.details && this.details.trim());
    }
}