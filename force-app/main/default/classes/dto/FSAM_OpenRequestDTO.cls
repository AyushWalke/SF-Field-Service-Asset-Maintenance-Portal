public with sharing class FSAM_OpenRequestDTO {

    @AuraEnabled
    public Id id { get; set; }

    @AuraEnabled
    public String requestNumber { get; set; }

    @AuraEnabled
    public String customerName { get; set; }

    @AuraEnabled
    public String status { get; set; }

    @AuraEnabled
    public String priority { get; set; }

}