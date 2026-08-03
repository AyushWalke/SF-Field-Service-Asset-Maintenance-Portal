public with sharing class FSAM_InventorySearchDTO {

    @AuraEnabled
    public String searchTerm { get; set; }

    @AuraEnabled
    public String category { get; set; }

    @AuraEnabled
    public String stockStatus { get; set; }

}