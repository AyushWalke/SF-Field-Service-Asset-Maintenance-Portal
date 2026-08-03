public with sharing class FSAM_InventorySummaryDTO {

    @AuraEnabled
    public Integer totalParts { get; set; }

    @AuraEnabled
    public Integer lowStockParts { get; set; }

    @AuraEnabled
    public Integer outOfStockParts { get; set; }

    @AuraEnabled
    public Decimal totalInventoryValue { get; set; }

}