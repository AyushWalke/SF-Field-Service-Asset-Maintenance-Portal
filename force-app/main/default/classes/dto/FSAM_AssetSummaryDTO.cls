public with sharing class FSAM_AssetSummaryDTO {
    @AuraEnabled
    public Integer totalAssets{ get; set; }
    
    @AuraEnabled
    public Integer activeAssets{ get; set; }
    
    @AuraEnabled
    public Integer inActiveAssets{ get; set; }
    
    @AuraEnabled
    public Integer assetsUnderWarranty{ get; set; }
}