@IsTest
global class FSAM_ManufacturerInvalidJsonCalloutMock implements HttpCalloutMock {
    global HttpResponse respond(HttpRequest request) {

        HttpResponse response = new HttpResponse();

        response.setStatusCode(200);

        response.setBody(
            'Invalid JSON'
        );

        return response;
    }
}