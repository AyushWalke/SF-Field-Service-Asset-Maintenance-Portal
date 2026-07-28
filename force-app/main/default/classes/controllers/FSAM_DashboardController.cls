public with sharing class FSAM_DashboardController {
    @AuraEnabled(cacheable=true)
    public static FSAM_DashboardDTO getDashboard(){
        FSAM_DashboardDTO dashboard = new FSAM_DashboardDTO();
        dashboard.summary = new FSAM_DashboardSummaryDTO();
        dashboard.summary.openRequests = 12;
        dashboard.summary.inProgressRequests = 8;
        dashboard.summary.completedToday = 5;
        dashboard.summary.assetsUnderMaintenance = 24;

        dashboard.recentRequests = new List<FSAM_RecentRequestDTO>();

        dashboard.generatedOn = System.now();
        dashboard.version = '1.0';

        return dashboard;
    }
}