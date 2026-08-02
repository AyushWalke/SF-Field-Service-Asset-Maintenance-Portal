public with sharing class FSAM_EngineerDashboardDTO {

    @AuraEnabled
    public FSAM_AssignmentSummaryDTO assignmentSummary { get; set; }

    @AuraEnabled
    public List<FSAM_TodayScheduleDTO> todaySchedule { get; set; }

    @AuraEnabled
    public List<FSAM_OpenRequestDTO> openRequests { get; set; }

    @AuraEnabled
    public List<FSAM_RecentActivityDTO> recentActivities { get; set; }

    @AuraEnabled
    public Datetime generatedOn { get; set; }

    @AuraEnabled
    public String version { get; set; }

}