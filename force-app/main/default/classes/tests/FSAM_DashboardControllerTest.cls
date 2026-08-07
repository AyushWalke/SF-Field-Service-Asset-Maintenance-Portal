@IsTest
private class FSAM_DashboardControllerTest {

    @IsTest
    static void testGetDashboard() {

        Test.startTest();

        FSAM_DashboardDTO dashboard =
            FSAM_DashboardController.getDashboard();

        Test.stopTest();

        System.assertNotEquals(
            null,
            dashboard
        );

        System.assertNotEquals(
            null,
            dashboard.summary
        );

        System.assertNotEquals(
            null,
            dashboard.recentRequests
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