import { LightningElement, api } from 'lwc';

export default class FsamRecentActivity extends LightningElement {

    @api activities = [];

    get hasActivities() {
        return this.activities?.length > 0;
    }

    get activityItems() {
        return this.activities.map(activity => ({
            ...activity,
            iconName: this.getIcon(activity.activityType)
        }));
    }

    getIcon(activityType) {
        switch (activityType) {
            case 'REQUEST_UPDATED':
                return 'utility:refresh';

            case 'VISIT_STARTED':
                return 'utility:work_order';

            case 'ENGINEER_ASSIGNED':
                return 'utility:user';

            case 'PART_REPLACED':
                return 'utility:asset_object';

            case 'REQUEST_COMPLETED':
                return 'utility:success';

            default:
                return 'utility:activity';
        }
    }
}