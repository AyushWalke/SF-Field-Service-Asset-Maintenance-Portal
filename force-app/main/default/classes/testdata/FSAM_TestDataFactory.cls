public with sharing class FSAM_TestDataFactory {
    public static Account createAccount() {
        Account account = new Account(
            Name = 'Test Account'
        );
        insert account;
        return account;
    }

    public static Contact createContact(Id accountId){
        Contact con = new Contact(
            LastName = 'Test Name',
            AccountId = accountId
        );
        insert con;
        return con;
    }

    public static FSAM_Customer_Asset__c createCustomerAsset(Id accountId){
        FSAM_Customer_Asset__c asset = new FSAM_Customer_Asset__c(
            FSAM_Asset_Name__c = 'Test Asset',
            FSAM_Serial_Number__c = 'SN-TEST-' + String.valueOf(Datetime.now().getTime()),
            FSAM_Asset_Type__c = 'Power Systems',
            FSAM_Account__c = accountId,
            FSAM_Installation_Date__c = Date.today(),
            FSAM_Warranty_Start_Date__c = Date.today(),
            FSAM_Warranty_End_Date__c = Date.today().addYears(1),
            FSAM_Status__c = FSAM_Constants.ASSET_STATUS_ACTIVE
        );
        insert asset;
        return asset;
    }

    public static FSAM_Service_Request__c createServiceRequest(Id assetId){
        FSAM_Service_Request__c request = new FSAM_Service_Request__c(
            FSAM_Customer_Asset__c = assetId,
            FSAM_Subject__c = 'Test Subject',
            FSAM_Status__c = FSAM_Constants.SR_STATUS_NEW,
            FSAM_Priority__c = FSAM_Constants.PRIORITY_HIGH,
            FSAM_Open_Date__c = System.now()
        );
        insert request;
        return request;
    }

    public static FSAM_Service_Part__c createServicePart(){
        FSAM_Service_Part__c part = new FSAM_Service_Part__c(
            Name = 'Test Part Code',
            FSAM_Part_Name__c = 'Test Part',
            FSAM_Available_Quantity__c = 10,
            FSAM_Minimum_Stock_Level__c = 5,
            FSAM_Unit_Cost__c = 100.00
        );
        insert part;
        return part;
    }

    public static FSAM_Maintenance_Visit__c createMaintenanceVisit(Id requestId){
        FSAM_Maintenance_Visit__c visit = new FSAM_Maintenance_Visit__c(
            FSAM_Service_Request__c = requestId,
            FSAM_Visit_Status__c = FSAM_Constants.VISIT_STATUS_SCHEDULED,
            FSAM_Visit_Type__c = 'On-Site',
            FSAM_Scheduled_Start__c = System.now()
        );
        insert visit;
        return visit;
    }
}