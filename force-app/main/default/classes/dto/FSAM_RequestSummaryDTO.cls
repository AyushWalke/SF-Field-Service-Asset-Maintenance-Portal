public with sharing class FSAM_RequestSummaryDTO {

    @AuraEnabled
    public Id id { get; set; }

    @AuraEnabled
    public String requestNumber { get; set; }

    @AuraEnabled
    public String subject { get; set; }

    @AuraEnabled
    public String customerName { get; set; }

    @AuraEnabled
    public String assetName { get; set; }

    @AuraEnabled
    public String assignedEngineer { get; set; }

    @AuraEnabled
    public String priority { get; set; }

    @AuraEnabled
    public String status { get; set; }

    @AuraEnabled
    public Datetime openDate { get; set; }

    @AuraEnabled
    public Datetime slaDueDate { get; set; }

}