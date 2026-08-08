@IsTest
private class FSAM_CustomerAssetSelectorTest {

    @IsTest
    static void testGetByIds() {

        Account account =
            FSAM_TestDataFactory.createAccount();

        FSAM_Customer_Asset__c asset =
            FSAM_TestDataFactory.createCustomerAsset(
                account.Id
            );

        List<FSAM_Customer_Asset__c> assets =
            FSAM_CustomerAssetSelector.getByIds(
                new Set<Id>{ asset.Id }
            );

        System.assertEquals(
            1,
            assets.size()
        );
    }

    @IsTest
    static void testGetActiveAssets() {

        Account account =
            FSAM_TestDataFactory.createAccount();

        FSAM_TestDataFactory.createCustomerAsset(
            account.Id
        );

        List<FSAM_Customer_Asset__c> assets =
            FSAM_CustomerAssetSelector.getActiveAssets();

        System.assert(!assets.isEmpty());
    }
}