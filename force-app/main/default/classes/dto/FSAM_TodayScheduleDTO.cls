public with sharing class FSAM_TodayScheduleDTO {

    @AuraEnabled
    public Id id { get; set; }

    @AuraEnabled
    public Time scheduledTime { get; set; }

    @AuraEnabled
    public String location { get; set; }

    @AuraEnabled
    public String serviceRequestNumber { get; set; }

    @AuraEnabled
    public String status { get; set; }

}