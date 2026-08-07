@IsTest
private class FSAM_ServiceRequestControllerTest {

    @IsTest
    static void testGetServiceRequest() {

        Test.startTest();

        FSAM_ServiceRequestWorkspaceDTO workspace =
            FSAM_ServiceRequestController.getServiceRequest();

        Test.stopTest();

        System.assertNotEquals(
            null,
            workspace
        );

        System.assertNotEquals(
            null,
            workspace.requestSummary
        );

        System.assertNotEquals(
            null,
            workspace.timeline
        );

        System.assertNotEquals(
            null,
            workspace.partsUsage
        );

        System.assertNotEquals(
            null,
            workspace.generatedOn
        );

        System.assertEquals(
            '1.0',
            workspace.version
        );
    }
}