@IsTest
private class FSAM_InventoryControllerTest {

    @IsTest
    static void testGetInventoryWorkspace() {

        Test.startTest();

        FSAM_InventoryWorkspaceDTO workspace = FSAM_InventoryController.getInventoryWorkspace();

        Test.stopTest();

        System.assertNotEquals(
            null,
            workspace
        );

        System.assertNotEquals(
            null,
            workspace.summary
        );

        System.assertNotEquals(
            null,
            workspace.searchCriteria
        );

        System.assertNotEquals(
            null,
            workspace.inventoryItems
        );

        System.assertNotEquals(
            null,
            workspace.generatedOn
        );

        System.assertEquals(
            '1.0',
            workspace.version
        );
    }
}