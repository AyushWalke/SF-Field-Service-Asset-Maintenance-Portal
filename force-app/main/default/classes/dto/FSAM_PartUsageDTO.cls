public with sharing class FSAM_PartUsageDTO {

    @AuraEnabled
    public Id id { get; set; }

    @AuraEnabled
    public String partCode { get; set; }

    @AuraEnabled
    public String partName { get; set; }

    @AuraEnabled
    public Integer quantity { get; set; }

    @AuraEnabled
    public Decimal unitCost { get; set; }

    @AuraEnabled
    public Decimal totalCost { get; set; }

}