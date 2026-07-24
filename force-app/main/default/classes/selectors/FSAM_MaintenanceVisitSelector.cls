public with sharing class FSAM_MaintenanceVisitSelector {
    public static FSAM_Maintenance_Visit__c getById(Id requestId){
        if (requestId == null) {
            return null;
        }

        return [
            select Id, FSAM_Visit_Status__c
            from FSAM_Maintenance_Visit__c 
            where Id = :requestId
        ];
    }
}