public with sharing class FSAM_MaintenanceVisitTriggerHandler extends FSAM_TriggerHandler {
    public override void beforeInsert(){
        FSAM_Logger.info(
            'Maintenance Visit beforeInsert.'
        );
    }
}