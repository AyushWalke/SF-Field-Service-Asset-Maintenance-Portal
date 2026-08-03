public with sharing class FSAM_InventoryController {

    @AuraEnabled(cacheable=true)
    public static FSAM_InventoryWorkspaceDTO getInventoryWorkspace() {

        FSAM_InventoryWorkspaceDTO workspace =
            new FSAM_InventoryWorkspaceDTO();

        // Summary

        workspace.summary = new FSAM_InventorySummaryDTO();

        workspace.summary.totalParts = 56;
        workspace.summary.lowStockParts = 4;
        workspace.summary.outOfStockParts = 1;
        workspace.summary.totalInventoryValue = 48750;

        // Search Criteria

        workspace.searchCriteria = new FSAM_InventorySearchDTO();

        workspace.searchCriteria.searchTerm = '';
        workspace.searchCriteria.category = 'All';
        workspace.searchCriteria.stockStatus = 'All';

        // Inventory Items

        workspace.inventoryItems =
            new List<FSAM_InventoryItemDTO>();

        workspace.inventoryItems.add(
            createInventoryItem(
                'SP-00001',
                'Motor',
                'Electrical',
                15,
                5,
                10,
                'In Stock',
                450
            )
        );

        workspace.inventoryItems.add(
            createInventoryItem(
                'SP-00002',
                'Pump Seal',
                'Mechanical',
                2,
                5,
                10,
                'Low Stock',
                120
            )
        );

        workspace.inventoryItems.add(
            createInventoryItem(
                'SP-00003',
                'Bearing',
                'Mechanical',
                10,
                3,
                6,
                'In Stock',
                35
            )
        );

        workspace.inventoryItems.add(
            createInventoryItem(
                'SP-00004',
                'Valve',
                'Mechanical',
                0,
                2,
                4,
                'Out of Stock',
                80
            )
        );

        workspace.inventoryItems.add(
            createInventoryItem(
                'SP-00005',
                'Coupling',
                'Mechanical',
                7,
                4,
                8,
                'In Stock',
                60
            )
        );

        workspace.inventoryItems.add(
            createInventoryItem(
                'SP-00006',
                'O-Ring Kit',
                'Mechanical',
                8,
                5,
                10,
                'In Stock',
                15
            )
        );

        workspace.generatedOn = System.now();
        workspace.version = '1.0';

        return workspace;

    }

    private static FSAM_InventoryItemDTO createInventoryItem(
        String partNumber,
        String partName,
        String category,
        Integer availableQuantity,
        Integer minimumQuantity,
        Integer reorderQuantity,
        String stockStatus,
        Decimal unitPrice
    ) {

        FSAM_InventoryItemDTO item =
            new FSAM_InventoryItemDTO();

        item.partNumber = partNumber;
        item.partName = partName;
        item.category = category;
        item.availableQuantity = availableQuantity;
        item.minimumQuantity = minimumQuantity;
        item.reorderQuantity = reorderQuantity;
        item.stockStatus = stockStatus;
        item.unitPrice = unitPrice;

        return item;

    }

}