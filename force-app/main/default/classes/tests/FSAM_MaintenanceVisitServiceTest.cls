@IsTest
private class FSAM_MaintenanceVisitServiceTest {

    @IsTest
    static void testCompleteVisit() {

        Account account = FSAM_TestDataFactory.createAccount();

        FSAM_Customer_Asset__c asset =
            FSAM_TestDataFactory.createCustomerAsset(account.Id);

        FSAM_Service_Request__c request =
            FSAM_TestDataFactory.createServiceRequest(asset.Id);

        FSAM_Maintenance_Visit__c visit =
            FSAM_TestDataFactory.createMaintenanceVisit(request.Id);

        Test.startTest();

        FSAM_MaintenanceVisitService.completeVisit(
            visit.Id
        );

        Test.stopTest();

        visit = [
            SELECT FSAM_Visit_Status__c
            FROM FSAM_Maintenance_Visit__c
            WHERE Id = :visit.Id
        ];

        System.assertEquals(
            FSAM_Constants.VISIT_STATUS_COMPLETED,
            visit.FSAM_Visit_Status__c
        );
    }

    @IsTest
    static void testScheduleVisit() {

        Account account = FSAM_TestDataFactory.createAccount();

        FSAM_Customer_Asset__c asset =
            FSAM_TestDataFactory.createCustomerAsset(account.Id);

        FSAM_Service_Request__c request =
            FSAM_TestDataFactory.createServiceRequest(asset.Id);

        FSAM_Maintenance_Visit__c visit =
            new FSAM_Maintenance_Visit__c(
                FSAM_Service_Request__c = request.Id,
                FSAM_Visit_Type__c = 'On-Site',
                FSAM_Scheduled_Start__c = System.now()
            );

        Test.startTest();

        FSAM_MaintenanceVisitService.scheduleVisit(
            visit
        );

        Test.stopTest();

        visit = [
            SELECT FSAM_Visit_Status__c
            FROM FSAM_Maintenance_Visit__c
            WHERE Id = :visit.Id
        ];

        System.assertEquals(
            FSAM_Constants.VISIT_STATUS_SCHEDULED,
            visit.FSAM_Visit_Status__c
        );
    }
}