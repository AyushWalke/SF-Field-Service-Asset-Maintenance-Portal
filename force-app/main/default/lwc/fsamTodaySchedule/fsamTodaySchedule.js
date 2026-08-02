import { LightningElement, api } from 'lwc';

export default class FsamTodaySchedule extends LightningElement {
    @api schedule = [];

    get hasSchedule(){
        return this.schedule?.length > 0;
    }
}