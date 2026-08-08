@IsTest
private class FSAM_ServiceRequestTriggerTest {

    @IsTest
    static void testBeforeUpdateTrigger() {

        Account account =
            FSAM_TestDataFactory.createAccount();

        FSAM_Customer_Asset__c asset =
            FSAM_TestDataFactory.createCustomerAsset(
                account.Id
            );

        FSAM_Service_Request__c request =
            FSAM_TestDataFactory.createServiceRequest(
                asset.Id
            );

        Test.startTest();

        request.FSAM_Subject__c = 'Updated Subject';

        update request;

        Test.stopTest();

        request = [
            SELECT FSAM_Subject__c
            FROM FSAM_Service_Request__c
            WHERE Id = :request.Id
        ];

        System.assertEquals(
            'Updated Subject',
            request.FSAM_Subject__c
        );
    }
}