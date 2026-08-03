public with sharing class FSAM_InventoryWorkspaceDTO {

    @AuraEnabled
    public FSAM_InventorySummaryDTO summary { get; set; }

    @AuraEnabled
    public List<FSAM_InventoryItemDTO> inventoryItems { get; set; }

    @AuraEnabled
    public FSAM_InventorySearchDTO searchCriteria { get; set; }

    @AuraEnabled
    public Datetime generatedOn { get; set; }

    @AuraEnabled
    public String version { get; set; }

}