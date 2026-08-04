public with sharing class FSAM_ManufacturerResponseDTO {
    @AuraEnabled
    public String manufacturer{ get; set;}
    
    @AuraEnabled
    public String country{ get; set;}
    
    @AuraEnabled
    public String warrantyMonths{ get; set;}
    
    @AuraEnabled
    public String supportEmail{ get; set;}
    
}