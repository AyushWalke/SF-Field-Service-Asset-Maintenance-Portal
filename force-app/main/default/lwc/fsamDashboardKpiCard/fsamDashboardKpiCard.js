import { LightningElement, api } from 'lwc';

export default class FsamDashboardKpiCard extends LightningElement {
    @api title;
    @api value;
    @api iconName;
}