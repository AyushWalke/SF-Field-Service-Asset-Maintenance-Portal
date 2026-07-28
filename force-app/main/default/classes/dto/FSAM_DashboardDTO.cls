public with sharing class FSAM_DashboardDTO {

    @AuraEnabled
    public FSAM_DashboardSummaryDTO summary { get; set; }

    @AuraEnabled
    public List<FSAM_RecentRequestDTO> recentRequests { get; set; }

    @AuraEnabled
    public Datetime generatedOn { get; set; }

    @AuraEnabled
    public String version { get; set; }

}