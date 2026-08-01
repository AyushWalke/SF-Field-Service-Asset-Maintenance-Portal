public with sharing class FSAM_ServiceRequestWorkspaceDTO {

    @AuraEnabled
    public FSAM_RequestSummaryDTO requestSummary { get; set; }

    @AuraEnabled
    public List<FSAM_RequestTimelineDTO> timeline { get; set; }

    @AuraEnabled
    public List<FSAM_PartUsageDTO> partsUsage { get; set; }

    @AuraEnabled
    public Datetime generatedOn { get; set; }

    @AuraEnabled
    public String version { get; set; }

}