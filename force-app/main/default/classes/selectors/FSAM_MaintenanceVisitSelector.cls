public with sharing class FSAM_MaintenanceVisitSelector {
    public static List<FSAM_Maintenance_Visit__c> getByIds(Set<Id> requestIds){
        if(requestIds == null || requestIds.isEmpty()){
            return new List<FSAM_Maintenance_Visit__c>();
        }

        return [
            select Id, FSAM_Visit_Status__c
            from FSAM_Maintenance_Visit__c 
            where Id in :requestIds
        ];
    }
}