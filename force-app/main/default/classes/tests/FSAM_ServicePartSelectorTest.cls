@IsTest
private class FSAM_ServicePartSelectorTest {

    @IsTest
    static void testGetByIds() {

        FSAM_Service_Part__c part =
            FSAM_TestDataFactory.createServicePart();

        List<FSAM_Service_Part__c> parts =
            FSAM_ServicePartSelector.getByIds(
                new Set<Id>{ part.Id }
            );

        System.assertEquals(1, parts.size());
    }

    @IsTest
    static void testGetLowStockParts() {

        FSAM_Service_Part__c part =
            new FSAM_Service_Part__c(
                Name = 'Low Stock Part',
                FSAM_Part_Name__c = 'Bearing',
                FSAM_Available_Quantity__c = 2,
                FSAM_Minimum_Stock_Level__c = 5,
                FSAM_Unit_Cost__c = 100
            );

        insert part;

        List<FSAM_Service_Part__c> parts =
            FSAM_ServicePartSelector.getLowStockParts();

        System.assertEquals(
            1,
            parts.size()
        );
    }
}