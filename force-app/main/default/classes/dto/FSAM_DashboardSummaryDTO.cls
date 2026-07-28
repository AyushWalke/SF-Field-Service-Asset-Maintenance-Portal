public with sharing class FSAM_DashboardSummaryDTO {

    @AuraEnabled
    public Integer openRequests { get; set; }

    @AuraEnabled
    public Integer inProgressRequests { get; set; }

    @AuraEnabled
    public Integer completedToday { get; set; }

    @AuraEnabled
    public Integer assetsUnderMaintenance { get; set; }

}