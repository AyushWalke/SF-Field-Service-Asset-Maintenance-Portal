import { LightningElement, api } from 'lwc';

export default class FsamSpinner extends LightningElement {
    @api size = 'medium';
    @api text = 'Loading...';
}