import { LightningElement, wire } from 'lwc';
import getServiceRequest from '@salesforce/apex/FSAM_ServiceRequestController.getServiceRequest';

export default class FsamServiceRequestWorkspace extends LightningElement {
    workspace;

    @wire(getServiceRequest)
    wiredWorkSpace({error, data}){
        if(data){
            this.workspace = data;
        } else {
            console.error(error);
        }
    }

    get requestSummary(){
        return this.workspace?.requestSummary;
    }

    get timeline(){
        return this.workspace?.timeline || [];
    }

    get partsUsage(){
        return this.workspace?.partsUsage || [];
    }
}