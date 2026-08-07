@IsTest
private class FSAM_EngineerDashboardControllerTest {

    @IsTest
    static void testGetEngineerDashboard() {

        Test.startTest();

        FSAM_EngineerDashboardDTO dashboard = FSAM_EngineerDashboardController.getEngineerDashboard();

        Test.stopTest();

        System.assertNotEquals(
            null,
            dashboard
        );

        System.assertNotEquals(
            null,
            dashboard.assignmentSummary
        );

        System.assertNotEquals(
            null,
            dashboard.todaySchedule
        );

        System.assertNotEquals(
            null,
            dashboard.openRequests
        );

        System.assertNotEquals(
            null,
            dashboard.recentActivities
        );

        System.assertNotEquals(
            null,
            dashboard.generatedOn
        );

        System.assertEquals(
            '1.0',
            dashboard.version
        );
    }
}