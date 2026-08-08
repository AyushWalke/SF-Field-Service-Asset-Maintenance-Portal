@IsTest
private class FSAM_ServiceRequestServiceTest {

    @IsTest
    static void testCloseRequests() {

        Account account = FSAM_TestDataFactory.createAccount();

        FSAM_Customer_Asset__c asset =
            FSAM_TestDataFactory.createCustomerAsset(account.Id);

        FSAM_Service_Request__c request =
            FSAM_TestDataFactory.createServiceRequest(asset.Id);

        Test.startTest();

        FSAM_ServiceRequestService.closeRequests(
            new Set<Id>{ request.Id }
        );

        Test.stopTest();

        request = [
            SELECT FSAM_Status__c
            FROM FSAM_Service_Request__c
            WHERE Id = :request.Id
        ];

        System.assertEquals(
            FSAM_Constants.SR_STATUS_CLOSED,
            request.FSAM_Status__c
        );
    }

    @IsTest
    static void testUpdateStatus() {

        Account account = FSAM_TestDataFactory.createAccount();

        FSAM_Customer_Asset__c asset =
            FSAM_TestDataFactory.createCustomerAsset(account.Id);

        FSAM_Service_Request__c request =
            FSAM_TestDataFactory.createServiceRequest(asset.Id);

        Test.startTest();

        FSAM_ServiceRequestService.updateStatus(
            new Set<Id>{ request.Id },
            FSAM_Constants.SR_STATUS_IN_PROGRESS
        );

        Test.stopTest();

        request = [
            SELECT FSAM_Status__c
            FROM FSAM_Service_Request__c
            WHERE Id = :request.Id
        ];

        System.assertEquals(
            FSAM_Constants.SR_STATUS_IN_PROGRESS,
            request.FSAM_Status__c
        );
    }

    @IsTest
    static void testGetOpenRequests() {

        List<FSAM_Service_Request__c> requests =
            FSAM_ServiceRequestService.getOpenRequests();

        System.assertNotEquals(
            null,
            requests
        );
    }
}