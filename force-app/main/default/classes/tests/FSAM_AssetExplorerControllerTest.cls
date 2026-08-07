@IsTest
private class FSAM_AssetExplorerControllerTest {

    @IsTest
    static void testGetAssets() {

        Test.startTest();

        FSAM_AssetExplorerDTO assetExplorer =
            FSAM_AssetExplorerController.getAssets();

        Test.stopTest();

        System.assertNotEquals(
            null,
            assetExplorer
        );

        System.assertNotEquals(
            null,
            assetExplorer.summary
        );

        System.assertNotEquals(
            null,
            assetExplorer.assets
        );

        System.assertNotEquals(
            null,
            assetExplorer.selectedAsset
        );

        System.assertNotEquals(
            null,
            assetExplorer.selectedAsset.maintenanceHistory
        );

        System.assertNotEquals(
            null,
            assetExplorer.generatedOn
        );

        System.assertEquals(
            '1.0',
            assetExplorer.version
        );
    }
}