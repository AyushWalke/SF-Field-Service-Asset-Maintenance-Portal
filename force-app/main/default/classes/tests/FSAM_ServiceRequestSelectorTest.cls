@IsTest
private class FSAM_ServiceRequestSelectorTest {

    @IsTest
    static void testGetByIds() {

        Account account = FSAM_TestDataFactory.createAccount();

        FSAM_Customer_Asset__c asset =
            FSAM_TestDataFactory.createCustomerAsset(account.Id);

        FSAM_Service_Request__c request =
            FSAM_TestDataFactory.createServiceRequest(asset.Id);

        List<FSAM_Service_Request__c> requests =
            FSAM_ServiceRequestSelector.getByIds(
                new Set<Id>{ request.Id }
            );

        System.assertEquals(1, requests.size());
    }

    @IsTest
    static void testGetByStatus() {

        Account account = FSAM_TestDataFactory.createAccount();

        FSAM_Customer_Asset__c asset =
            FSAM_TestDataFactory.createCustomerAsset(account.Id);

        FSAM_TestDataFactory.createServiceRequest(asset.Id);

        List<FSAM_Service_Request__c> requests =
            FSAM_ServiceRequestSelector.getByStatus(
                FSAM_Constants.SR_STATUS_NEW
            );

        System.assert(!requests.isEmpty());
    }

    @IsTest
    static void testGetOpenRequests() {

        Account account = FSAM_TestDataFactory.createAccount();

        FSAM_Customer_Asset__c asset =
            FSAM_TestDataFactory.createCustomerAsset(account.Id);

        FSAM_TestDataFactory.createServiceRequest(asset.Id);

        List<FSAM_Service_Request__c> requests =
            FSAM_ServiceRequestSelector.getOpenRequests();

        System.assert(!requests.isEmpty());
    }
}