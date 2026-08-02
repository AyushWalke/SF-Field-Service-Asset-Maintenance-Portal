import { LightningElement, wire } from 'lwc';
import getServiceRequest from '@salesforce/apex/FSAM_ServiceRequestController.getServiceRequest';

export default class FsamServiceRequestWorkspace extends LightningElement {
    workSpace;

    @wire(getServiceRequest)
    wiredWorkSpace({error, data}){
        if(data){
            this.workSpace = data;
        } else {
            console.error(error);
        }
    }

    get getRequestSummary(){
        return this.workSpace?.requestSummary;
    }

    get getTimeline(){
        return this.workSpace?.timeline || [];
    }

    get getPartsUsage(){
        return this.workSpace?.partsUsage || [];
    }
}