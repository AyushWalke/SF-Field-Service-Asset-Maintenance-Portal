public with sharing class FSAM_RequestTimelineDTO {

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

    @AuraEnabled
    public String status { get; set; }

}