import { LightningElement } from 'lwc';
import getDashboard from '@salesforce/apex/FSAM_DashboardController.getDashboard';

export default class FsamDashboard extends LightningElement {
    isLoading = true;
    error;
    dashboard;

    connectedCallback(){
        this.loadDashboard();
    }

    async loadDashboard(){
        this.isLoading = true;

        try {
            this.dashboard = await getDashboard();
            this.error = undefined;
        } catch (error) {
            this.error = error;
            this.dashboard = undefined;
        } finally {
            this.isLoading = false;
        }
    }
}