public with sharing class FSAM_ServiceRequestService {
    public static void closeRequests(Set<Id> requestIds){
        if(requestIds == null || requestIds.isEmpty()){
            throw new FSAM_BusinessException('Request Ids can not be empty');
        }

        List<FSAM_Service_Request__c> requests = FSAM_ServiceRequestSelector.getByIds(requestIds);

        if(requests == null || requests.isEmpty()){
            throw new FSAM_BusinessException('No matching service request found');
        }

        for(FSAM_Service_Request__c request: requests){
            request.FSAM_Status__c = FSAM_Constants.SR_STATUS_CLOSED;
        }

        update requests;

        FSAM_Logger.info('Closed ' + requests.size() + ' Service Request(s).');
    }

    public static void updateStatus(Set<Id> requestIds, String newStatus){
        if (requestIds == null || requestIds.isEmpty()) {
            throw new FSAM_BusinessException('Request Ids cannot be empty.');
        }

        if (String.isBlank(newStatus)) {
            throw new FSAM_BusinessException('Status cannot be blank.');
        }

        List<FSAM_Service_Request__c> requests =
            FSAM_ServiceRequestSelector.getByIds(requestIds);

        if (requests.isEmpty()) {
            throw new FSAM_BusinessException('No matching Service Requests found.');
        }

        for (FSAM_Service_Request__c request : requests) {
            request.FSAM_Status__c = newStatus;
        }

        update requests;

        FSAM_Logger.info('Updated status for ' + requests.size() + ' Service Request(s).');
    }

    public static List<FSAM_Service_Request__c> getOpenRequests(){
        return FSAM_ServiceRequestSelector.getOpenRequests();
    }
}