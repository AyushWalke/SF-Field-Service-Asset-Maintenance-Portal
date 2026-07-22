public with sharing class FSAM_ServicePartSelector {
    // return service parts by Id
    public static List<FSAM_Service_Part__c> getByIds(Set<Id> partIds){
        if(partIds == null || partIds.isEmpty()){
            return new List<FSAM_Service_Part__c>();
        }

        return [
            select Id, Name, FSAM_Available_Quantity__c, FSAM_Minimum_Stock_Level__c, FSAM_Reorder_Required__c, FSAM_Unit_Cost__c
            from FSAM_Service_Part__c
            where Id in :partIds
        ];
    }

    // return low stock parts
    public static List<FSAM_Service_Part__c> getLowStockParts(){
        return [
            select Id, Name, FSAM_Available_Quantity__c, FSAM_Minimum_Stock_Level__c, FSAM_Reorder_Required__c, FSAM_Unit_Cost__c
            from FSAM_Service_Part__c
            where FSAM_Reorder_Required__c = true
        ];
    }
}