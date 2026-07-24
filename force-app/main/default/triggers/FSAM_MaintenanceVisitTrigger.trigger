trigger FSAM_MaintenanceVisitTrigger on FSAM_Maintenance_Visit__c (before insert, before update, before delete, after insert, after update, after delete, after undelete) {
    new FSAM_MaintenanceVisitTriggerHandler().run();
}