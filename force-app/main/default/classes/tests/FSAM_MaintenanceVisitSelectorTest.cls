@IsTest
private class FSAM_MaintenanceVisitSelectorTest {

    @IsTest
    static void testGetById() {

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
            FSAM_TestDataFactory.createMaintenanceVisit(
                request.Id
            );

        FSAM_Maintenance_Visit__c result =
            FSAM_MaintenanceVisitSelector.getById(
                visit.Id
            );

        System.assertNotEquals(
            null,
            result
        );
    }
}