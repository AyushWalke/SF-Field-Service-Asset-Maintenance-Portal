public with sharing class FSAM_RecentActivityDTO {

    @AuraEnabled
    public Id id { get; set; }

    @AuraEnabled
    public String activityType { get; set; }

    @AuraEnabled
    public String title { get; set; }

    @AuraEnabled
    public String description { get; set; }

    @AuraEnabled
    public Datetime activityDate { get; set; }

}