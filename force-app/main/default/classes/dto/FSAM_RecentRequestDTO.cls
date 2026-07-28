public with sharing class FSAM_RecentRequestDTO {

    @AuraEnabled
    public Id id { get; set; }

    @AuraEnabled
    public String requestNumber { get; set; }

    @AuraEnabled
    public String customerName { get; set; }

    @AuraEnabled
    public String assetName { get; set; }

    @AuraEnabled
    public String priority { get; set; }

    @AuraEnabled
    public String status { get; set; }

    @AuraEnabled
    public Datetime createdDate { get; set; }

}