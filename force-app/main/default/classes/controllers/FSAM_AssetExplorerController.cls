public with sharing class FSAM_AssetExplorerController {

    @AuraEnabled(cacheable=true)
    public static FSAM_AssetExplorerDTO getAssets() {

        FSAM_AssetExplorerDTO assetExplorer = new FSAM_AssetExplorerDTO();

        // Summary
        assetExplorer.summary = new FSAM_AssetSummaryDTO();
        assetExplorer.summary.totalAssets = 24;
        assetExplorer.summary.activeAssets = 18;
        assetExplorer.summary.inactiveAssets = 6;
        assetExplorer.summary.assetsUnderWarranty = 15;

        // Asset List
        assetExplorer.assets = new List<FSAM_AssetDTO>();

        FSAM_AssetDTO asset1 = createAsset(
            'Industrial Pump A',
            'PMP-44392',
            'Pump',
            'ABC Manufacturing',
            'Active',
            true,
            Date.newInstance(2027, 1, 15),
            Date.newInstance(2025, 1, 15),
            'Plant 2 - Line 4'
        );

        FSAM_AssetDTO asset2 = createAsset(
            'HVAC Unit B',
            'HVAC-88221',
            'HVAC',
            'Global Power Ltd.',
            'Active',
            true,
            Date.newInstance(2026, 11, 20),
            Date.newInstance(2024, 11, 20),
            'Building A'
        );

        FSAM_AssetDTO asset3 = createAsset(
            'Generator Set C',
            'GEN-77123',
            'Generator',
            'Vertex Solutions',
            'Inactive',
            false,
            Date.newInstance(2025, 6, 30),
            Date.newInstance(2022, 6, 30),
            'Warehouse'
        );

        assetExplorer.assets.add(asset1);
        assetExplorer.assets.add(asset2);
        assetExplorer.assets.add(asset3);

        // Selected Asset
        assetExplorer.selectedAsset = asset1;

        // Maintenance History
        assetExplorer.selectedAsset.maintenanceHistory =
            new List<FSAM_AssetMaintenanceHistoryDTO>();

        assetExplorer.selectedAsset.maintenanceHistory.add(
            createMaintenanceHistory(
                'MV-00023',
                Date.newInstance(2025, 5, 5),
                'Preventive',
                'John Smith',
                'Completed'
            )
        );

        assetExplorer.selectedAsset.maintenanceHistory.add(
            createMaintenanceHistory(
                'MV-00018',
                Date.newInstance(2025, 4, 20),
                'Preventive',
                'Maria Garcia',
                'Completed'
            )
        );

        assetExplorer.selectedAsset.maintenanceHistory.add(
            createMaintenanceHistory(
                'MV-00012',
                Date.newInstance(2025, 4, 2),
                'Corrective',
                'James Wilson',
                'Completed'
            )
        );

        assetExplorer.generatedOn = System.now();
        assetExplorer.version = '1.0';

        return assetExplorer;
    }

    private static FSAM_AssetDTO createAsset(
        String assetName,
        String serialNumber,
        String assetType,
        String customerName,
        String status,
        Boolean warrantyActive,
        Date warrantyExpiry,
        Date installationDate,
        String location
    ) {

        FSAM_AssetDTO asset = new FSAM_AssetDTO();

        asset.assetName = assetName;
        asset.serialNumber = serialNumber;
        asset.assetType = assetType;
        asset.customerName = customerName;
        asset.status = status;
        asset.warrantyActive = warrantyActive;
        asset.warrantyExpiry = warrantyExpiry;
        asset.installationDate = installationDate;
        asset.location = location;
        asset.maintenanceHistory = new List<FSAM_AssetMaintenanceHistoryDTO>();

        return asset;
    }

    private static FSAM_AssetMaintenanceHistoryDTO createMaintenanceHistory(
        String visitNumber,
        Date visitDate,
        String visitType,
        String engineerName,
        String status
    ) {

        FSAM_AssetMaintenanceHistoryDTO history =
            new FSAM_AssetMaintenanceHistoryDTO();

        history.visitNumber = visitNumber;
        history.visitDate = visitDate;
        history.visitType = visitType;
        history.engineerName = engineerName;
        history.status = status;

        return history;
    }

}