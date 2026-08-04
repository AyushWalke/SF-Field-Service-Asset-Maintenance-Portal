@IsTest
global class FSAM_ManufacturerErrorCalloutMock implements HttpCalloutMock {
    global HttpResponse respond(HttpRequest request) {

        HttpResponse response = new HttpResponse();

        response.setStatusCode(500);

        response.setBody(
            '{"message":"Internal Server Error"}'
        );

        return response;
    }
}