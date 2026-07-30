public with sharing class FSAM_AssetMaintenanceHistoryDTO {
    @AuraEnabled
    public Id id { get; set; }
    
    @AuraEnabled
    public String visitNumber { get; set; }
    
    @AuraEnabled
    public Date visitDate { get; set; }
    
    @AuraEnabled
    public String visitType { get; set; }
    
    @AuraEnabled
    public String engineerName { get; set; }
    
    @AuraEnabled
    public String status { get; set; }
}