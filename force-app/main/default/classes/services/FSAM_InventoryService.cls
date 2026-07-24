public with sharing class FSAM_InventoryService {
    public static void decreaseInventory(Map<Id, Decimal> quantities){
        if(quantities == null || quantities.isEmpty()){
            throw new FSAM_BusinessException('Inventory quantities cannot be empty.');
        }

        List<FSAM_Service_Part__c> parts = FSAM_ServicePartSelector.getByIds(quantities.keySet());

        if(parts.isEmpty()){
            throw new FSAM_BusinessException('No Service Parts found.');
        }

        for(FSAM_Service_Part__c part: parts){
            Decimal requestedQuantity = quantities.get(part.Id);

            if(requestedQuantity > part.FSAM_Available_Quantity__c){
                throw new FSAM_BusinessException(
                    'Insufficient inventory for part: ' + part.Name
                );
            }

            part.FSAM_Available_Quantity__c -= requestedQuantity;
        }

        update parts;

        FSAM_Logger.info('Inventory updated successfully.');
    }

    public static List<FSAM_Service_Part__c> getLowStockParts(){
        return FSAM_ServicePartSelector.getLowStockParts();
    }
}