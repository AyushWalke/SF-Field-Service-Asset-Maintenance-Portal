public with sharing class FSAM_ManufacturerIntegrationService {

    private static final String ENDPOINT = 'callout:FSAM_Manufacturer_API/v1/4c7f4d9e-f0ef-4f8d-9ef0-4dbb9a69b2d4';

    public static FSAM_ManufacturerResponseDTO getManufacturerInformation() {

        HttpRequest request = new HttpRequest();

        request.setEndpoint(ENDPOINT);
        request.setMethod('GET');
        request.setTimeout(10000);

        Http http = new Http();

        HttpResponse response;

        try {
            response = http.send(request);
        } catch (Exception ex) {
            throw new FSAM_IntegrationException(
                'Unable to connect to manufacturer service.'
            );
        }

        if (response.getStatusCode() != 200) {
            throw new FSAM_IntegrationException(
                'Manufacturer service returned HTTP ' +
                response.getStatusCode()
            );
        }

        try {
            return (FSAM_ManufacturerResponseDTO)
                JSON.deserialize(
                    response.getBody(),
                    FSAM_ManufacturerResponseDTO.class
                );
        } catch (Exception ex) {
            throw new FSAM_IntegrationException(
                'Unable to parse manufacturer response.'
            );
        }
    }
}