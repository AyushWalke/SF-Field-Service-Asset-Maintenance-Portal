trigger FSAM_ServiceRequestTrigger on FSAM_Service_Request__c (before insert, before update, before delete, after insert, after update, after delete, after undelete) {
    new FSAM_ServiceRequestTriggerHandler().run();
}