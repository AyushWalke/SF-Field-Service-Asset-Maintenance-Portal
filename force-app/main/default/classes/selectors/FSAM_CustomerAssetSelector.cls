public with sharing class FSAM_CustomerAssetSelector {
    // return customer asset by Id
    public static List<FSAM_Customer_Asset__c> getByIds(Set<Id> assetIds){
        if(assetIds == null || assetIds.isEmpty()){
            return new List<FSAM_Customer_Asset__c>();
        }

        return [
            select Id, Name, FSAM_Status__c, FSAM_Warranty_Active__c, FSAM_Warranty_End_Date__c, FSAM_Account__c
            from FSAM_Customer_Asset__c
            where Id in :assetIds
        ];
    }

    // return avtive customer assets
    public static LIST<FSAM_Customer_Asset__c> getActiveAssets(){
        return [
            select Id, Name, FSAM_Status__c, FSAM_Warranty_Active__c, FSAM_Warranty_End_Date__c, FSAM_Account__c
            from FSAM_Customer_Asset__c
            where FSAM_Status__c = :FSAM_Constants.ASSET_STATUS_ACTIVE
        ];
    }
}