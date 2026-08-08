@IsTest
private class FSAM_InventoryServiceTest {

    @IsTest
    static void testDecreaseInventory() {

        FSAM_Service_Part__c part =
            FSAM_TestDataFactory.createServicePart();

        Map<Id, Decimal> quantities =
            new Map<Id, Decimal>();

        quantities.put(
            part.Id,
            2
        );

        Test.startTest();

        FSAM_InventoryService.decreaseInventory(
            quantities
        );

        Test.stopTest();

        part = [
            SELECT FSAM_Available_Quantity__c
            FROM FSAM_Service_Part__c
            WHERE Id = :part.Id
        ];

        System.assertEquals(
            8,
            part.FSAM_Available_Quantity__c
        );
    }

    @IsTest
    static void testGetLowStockParts() {

        List<FSAM_Service_Part__c> parts =
            FSAM_InventoryService.getLowStockParts();

        System.assertNotEquals(
            null,
            parts
        );
    }
}