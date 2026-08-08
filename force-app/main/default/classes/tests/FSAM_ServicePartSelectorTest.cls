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
}