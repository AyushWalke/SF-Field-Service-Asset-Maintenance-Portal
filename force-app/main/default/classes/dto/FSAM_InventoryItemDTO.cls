public with sharing class FSAM_InventoryItemDTO {

    @AuraEnabled
    public Id id { get; set; }

    @AuraEnabled
    public String partNumber { get; set; }

    @AuraEnabled
    public String partName { get; set; }

    @AuraEnabled
    public String category { get; set; }

    @AuraEnabled
    public Integer availableQuantity { get; set; }

    @AuraEnabled
    public Integer minimumQuantity { get; set; }

    @AuraEnabled
    public Integer reorderQuantity { get; set; }

    @AuraEnabled
    public String stockStatus { get; set; }

    @AuraEnabled
    public Decimal unitPrice { get; set; }

}