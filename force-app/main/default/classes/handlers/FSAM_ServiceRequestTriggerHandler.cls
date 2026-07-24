public with sharing class FSAM_ServiceRequestTriggerHandler extends FSAM_TriggerHandler {
    public override void beforeUpdate() {
        Set<Id> requestIds = new Set<Id>();

        for(FSAM_Service_Request__c request: (List<FSAM_Service_Request__c>) Trigger.new){
            requestIds.add(request.Id);
        }

        FSAM_Logger.info(
            'Processing Service Request beforeUpdate. Records: ' + requestIds.size()
        );

        // Business logic will be added in Sprint 5.
    }
}