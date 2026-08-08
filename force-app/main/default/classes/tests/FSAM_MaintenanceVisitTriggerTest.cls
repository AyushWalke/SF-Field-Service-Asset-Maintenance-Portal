@IsTest
private class FSAM_MaintenanceVisitTriggerTest {

    @IsTest
    static void testBeforeInsertTrigger() {

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

        FSAM_Maintenance_Visit__c visit =
            new FSAM_Maintenance_Visit__c(

                FSAM_Service_Request__c = request.Id,

                FSAM_Visit_Type__c = 'On-Site',

                FSAM_Scheduled_Start__c = System.now()

            );

        Test.startTest();

        insert visit;

        Test.stopTest();

        System.assertNotEquals(
            null,
            visit.Id
        );
    }
}