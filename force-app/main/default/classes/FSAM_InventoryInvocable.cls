public with sharing class FSAM_InventoryInvocable {
    public class InventoryRequest{
        @InvocableVariable(required=true)
        public Id servicePartId;

        @InvocableVariable(required=true)
        public Decimal quantity;
    }

    @InvocableMethod(label='Update Service Part Inventory')
    public static void updateInventory(List<InventoryRequest> requests){
        Map<Id, Decimal> quantities = new Map<Id, Decimal>();

        for(InventoryRequest request: requests){
            quantities.put(request.servicePartId, request.quantity);
        }

        FSAM_InventoryService.decreaseInventory(quantities);
    }
}