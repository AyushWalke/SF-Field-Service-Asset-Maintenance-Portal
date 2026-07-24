public with sharing class FSAM_MaintenanceVisitService {

    public static void completeVisit(Id visitId){
        if (visitId == null) {
            throw new FSAM_BusinessException('Visit Id cannot be null.');
        }

        FSAM_Maintenance_Visit__c visit = FSAM_MaintenanceVisitSelector.getById(visitId);

        if (visit == null) {
            throw new FSAM_BusinessException('Maintenance Visit not found.');
        }

        visit.FSAM_Visit_Status__c = FSAM_Constants.VISIT_STATUS_COMPLETED;

        update visit;

        FSAM_Logger.info('Maintenance Visit completed.');
    }

    public static void scheduleVisit(FSAM_Maintenance_Visit__c visit){
        if (visit == null) {
            throw new FSAM_BusinessException('Visit cannot be null.');
        }

        visit.FSAM_Visit_Status__c = FSAM_Constants.VISIT_STATUS_SCHEDULED;

        insert visit;

        FSAM_Logger.info('Maintenance Visit scheduled.');
    }

}