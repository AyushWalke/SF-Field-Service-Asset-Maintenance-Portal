@IsTest
global class FSAM_ManufacturerCalloutMock implements HttpCalloutMock {
    global HttpResponse respond(HttpRequest request) {

        HttpResponse response = new HttpResponse();

        response.setStatusCode(200);

        response.setHeader(
            'Content-Type',
            'application/json'
        );

        response.setBody(
            '{"manufacturer":"Bosch",' +
            '"country":"Germany",' +
            '"warrantyMonths":24,' +
            '"supportEmail":"support@bosch.example"}'
        );
        return response;
    }
}