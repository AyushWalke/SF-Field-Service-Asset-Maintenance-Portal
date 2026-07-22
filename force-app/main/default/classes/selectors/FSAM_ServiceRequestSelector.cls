public with sharing class FSAM_ServiceRequestSelector {
    // return service request by Id
    public static List<FSAM_Service_Request__c> getByIds(Set<Id> requestIds){
        if(requestIds == null || requestIds.isEmpty()){
            return new List<FSAM_Service_Request__c>();
        }

        return [
            select Id, Name, FSAM_Subject__c, FSAM_Status__c, FSAM_Priority__c, FSAM_Open_Date__c, FSAM_SLA_Due_Date__c, FSAM_Customer_Asset__c 
            from FSAM_Service_Request__c 
            where Id in :requestIds
        ];
    }

    // return service request by status
    public static List<FSAM_Service_Request__c> getByStatus(string status){
        if(status == null){
            return new List<FSAM_Service_Request__c>();
        }

        return [
            select Id, Name, FSAM_Subject__c, FSAM_Status__c, FSAM_Priority__c, FSAM_Open_Date__c, FSAM_SLA_Due_Date__c, FSAM_Customer_Asset__c 
            from FSAM_Service_Request__c 
            where FSAM_Status__c = :status
        ];
    }

    // return service request by open status
    public static List<FSAM_Service_Request__c> getOpenRequests(){
        return [
            select Id, Name, FSAM_Subject__c, FSAM_Status__c, FSAM_Priority__c, FSAM_Open_Date__c, FSAM_SLA_Due_Date__c, FSAM_Customer_Asset__c 
            from FSAM_Service_Request__c 
            WHERE FSAM_Status__c NOT IN (
                :FSAM_Constants.SR_STATUS_CLOSED,
                :FSAM_Constants.SR_STATUS_CANCELLED
            )
        ];
    }
}