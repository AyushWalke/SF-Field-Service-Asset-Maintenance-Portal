public with sharing class FSAM_AssetDTO {
    @AuraEnabled
    public Id id { get; set; }
    
    @AuraEnabled
    public String assetName { get; set; }
    
    @AuraEnabled
    public String serialNumber { get; set; }
    
    @AuraEnabled
    public String assetType { get; set; }
    
    @AuraEnabled
    public String customerName { get; set; }
    
    @AuraEnabled
    public String status { get; set; }
    
    @AuraEnabled
    public Boolean warrantyActive { get; set; }
    
    @AuraEnabled
    public Date warrantyExpiry { get; set; }
    
    @AuraEnabled
    public Date installationDate { get; set; }

    @AuraEnabled
    public String location { get; set; }

    @AuraEnabled
    public List<FSAM_AssetMaintenanceHistoryDTO> maintenanceHistory { get; set; }
}