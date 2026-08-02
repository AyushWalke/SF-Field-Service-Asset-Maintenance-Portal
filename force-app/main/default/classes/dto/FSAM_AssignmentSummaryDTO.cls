public with sharing class FSAM_AssignmentSummaryDTO {

    @AuraEnabled
    public Integer todaysAssignments { get; set; }

    @AuraEnabled
    public Integer inProgressAssignments { get; set; }

    @AuraEnabled
    public Integer completedToday { get; set; }

    @AuraEnabled
    public Integer overdueAssignments { get; set; }

}