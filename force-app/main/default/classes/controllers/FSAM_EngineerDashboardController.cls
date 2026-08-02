public with sharing class FSAM_EngineerDashboardController {

    @AuraEnabled(cacheable=true)
    public static FSAM_EngineerDashboardDTO getEngineerDashboard() {

        FSAM_EngineerDashboardDTO dashboard =
            new FSAM_EngineerDashboardDTO();

        // Assignment Summary

        dashboard.assignmentSummary =
            new FSAM_AssignmentSummaryDTO();

        dashboard.assignmentSummary.todaysAssignments = 5;
        dashboard.assignmentSummary.inProgressAssignments = 2;
        dashboard.assignmentSummary.completedToday = 2;
        dashboard.assignmentSummary.overdueAssignments = 1;

        // Today's Schedule

        dashboard.todaySchedule =
            new List<FSAM_TodayScheduleDTO>();

        dashboard.todaySchedule.add(
            createSchedule(
                Time.newInstance(9, 0, 0, 0),
                'Plant 2 - Line 4',
                'SR-1008',
                'In Progress'
            )
        );

        dashboard.todaySchedule.add(
            createSchedule(
                Time.newInstance(11, 30, 0, 0),
                'Plant 1 - Line 2',
                'SR-1009',
                'Assigned'
            )
        );

        dashboard.todaySchedule.add(
            createSchedule(
                Time.newInstance(14, 0, 0, 0),
                'Plant 3 - Line 1',
                'SR-1010',
                'New'
            )
        );

        dashboard.todaySchedule.add(
            createSchedule(
                Time.newInstance(16, 0, 0, 0),
                'Plant 2 - Line 6',
                'SR-1011',
                'Assigned'
            )
        );

        // Open Requests

        dashboard.openRequests =
            new List<FSAM_OpenRequestDTO>();

        dashboard.openRequests.add(
            createOpenRequest(
                'SR-1008',
                'ABC Manufacturing',
                'In Progress',
                'High'
            )
        );

        dashboard.openRequests.add(
            createOpenRequest(
                'SR-1009',
                'Global Power Ltd.',
                'Assigned',
                'Medium'
            )
        );

        dashboard.openRequests.add(
            createOpenRequest(
                'SR-1010',
                'Vertex Solutions',
                'New',
                'High'
            )
        );

        // Recent Activities

        dashboard.recentActivities =
            new List<FSAM_RecentActivityDTO>();

        dashboard.recentActivities.add(
            createRecentActivity(
                'REQUEST_UPDATED',
                'SR-1008 status updated to In Progress',
                'Service request status was updated.',
                Datetime.newInstance(2026, 8, 2, 9, 5, 0)
            )
        );

        dashboard.recentActivities.add(
            createRecentActivity(
                'VISIT_STARTED',
                'Maintenance Visit MV-00023 started',
                'Engineer started the maintenance visit.',
                Datetime.newInstance(2026, 8, 2, 9, 0, 0)
            )
        );

        dashboard.generatedOn = System.now();
        dashboard.version = '1.0';

        return dashboard;

    }

    private static FSAM_TodayScheduleDTO createSchedule(
        Time scheduledTime,
        String location,
        String serviceRequestNumber,
        String status
    ) {

        FSAM_TodayScheduleDTO schedule =
            new FSAM_TodayScheduleDTO();

        schedule.scheduledTime = scheduledTime;
        schedule.location = location;
        schedule.serviceRequestNumber = serviceRequestNumber;
        schedule.status = status;

        return schedule;

    }

    private static FSAM_OpenRequestDTO createOpenRequest(
        String requestNumber,
        String customerName,
        String status,
        String priority
    ) {

        FSAM_OpenRequestDTO request =
            new FSAM_OpenRequestDTO();

        request.requestNumber = requestNumber;
        request.customerName = customerName;
        request.status = status;
        request.priority = priority;

        return request;

    }

    private static FSAM_RecentActivityDTO createRecentActivity(
        String activityType,
        String title,
        String description,
        Datetime activityDate
    ) {

        FSAM_RecentActivityDTO activity =
            new FSAM_RecentActivityDTO();

        activity.activityType = activityType;
        activity.title = title;
        activity.description = description;
        activity.activityDate = activityDate;

        return activity;

    }

}