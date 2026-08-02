import { LightningElement, api } from 'lwc';

export default class FsamRequestTimeline extends LightningElement {

    @api timeline = [];

    get hasTimeline() {
        return this.timeline?.length > 0;
    }

    get timelineItems() {

        return this.timeline.map(item => ({

            ...item,

            iconName: this.getIcon(item.activityType)

        }));

    }

    getIcon(activityType) {

        switch (activityType) {

            case 'REQUEST':
                return 'utility:new';

            case 'ASSIGNMENT':
                return 'utility:user';

            case 'VISIT':
                return 'utility:work_order';

            case 'PART':
                return 'utility:asset_object';

            case 'COMPLETED':
                return 'utility:success';

            default:
                return 'utility:record';

        }

    }

}