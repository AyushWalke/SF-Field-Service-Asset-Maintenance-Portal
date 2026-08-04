@IsTest
private class FSAM_ManufacturerIntegrationServiceTest {
    @IsTest
    static void testGetManufacturerInformationSuccess() {

        Test.setMock(
            HttpCalloutMock.class,
            new FSAM_ManufacturerCalloutMock()
        );

        Test.startTest();

        FSAM_ManufacturerResponseDTO response = FSAM_ManufacturerIntegrationService.getManufacturerInformation();

        Test.stopTest();

        System.assertNotEquals(
            null,
            response
        );

        System.assertEquals(
            'Bosch',
            response.manufacturer
        );

        System.assertEquals(
            'Germany',
            response.country
        );

        System.assertEquals(
            24,
            response.warrantyMonths
        );

        System.assertEquals(
            'support@bosch.example',
            response.supportEmail
        );
    }

    @IsTest
    static void testHttpErrorResponse() {
        Test.setMock(
            HttpCalloutMock.class,
            new FSAM_ManufacturerErrorCalloutMock()
        );

        Test.startTest();

        try {
            FSAM_ManufacturerIntegrationService.getManufacturerInformation();
            System.assert(false);
        } catch (FSAM_IntegrationException ex) {
            System.assert(
                ex.getMessage().contains('HTTP')
            );
        }

        Test.stopTest();
    }

    @IsTest
    static void testInvalidJsonResponse() {
        Test.setMock(
            HttpCalloutMock.class,
            new FSAM_ManufacturerInvalidJsonCalloutMock()
        );

        Test.startTest();

        try {
            FSAM_ManufacturerIntegrationService.getManufacturerInformation();
            System.assert(false);
        } catch (FSAM_IntegrationException ex) {
            System.assert(
                ex.getMessage().contains('parse')
            );
        }

        Test.stopTest();
    }
}