import { LightningElement, wire } from 'lwc';

import getEngineerDashboard from '@salesforce/apex/FSAM_EngineerDashboardController.getEngineerDashboard';

export default class FsamEngineerDashboard extends LightningElement {

    dashboard;

    @wire(getEngineerDashboard)
    wiredDashboard({ error, data }) {
        if (data) {
            this.dashboard = data;
        } else if (error) {
            console.error(error);
        }
    }

    get assignmentSummary() {
        return this.dashboard?.assignmentSummary;
    }

    get todaySchedule() {
        return this.dashboard?.todaySchedule || [];
    }

    get openRequests() {
        return this.dashboard?.openRequests || [];
    }

    get recentActivities() {
        return this.dashboard?.recentActivities || [];
    }
}