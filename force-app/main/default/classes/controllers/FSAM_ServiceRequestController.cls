public with sharing class FSAM_ServiceRequestController {

    @AuraEnabled(cacheable=true)
    public static FSAM_ServiceRequestWorkspaceDTO getServiceRequest() {

        FSAM_ServiceRequestWorkspaceDTO workspace =
            new FSAM_ServiceRequestWorkspaceDTO();

        // Summary

        workspace.requestSummary = new FSAM_RequestSummaryDTO();

        workspace.requestSummary.requestNumber = 'SR-00001';
        workspace.requestSummary.subject = 'Industrial Pump Failure';
        workspace.requestSummary.customerName = 'ABC Manufacturing';
        workspace.requestSummary.assetName = 'Industrial Pump A';
        workspace.requestSummary.assignedEngineer = 'John Smith';
        workspace.requestSummary.priority = 'High';
        workspace.requestSummary.status = 'In Progress';
        workspace.requestSummary.openDate =
            Datetime.newInstance(2026, 7, 30, 9, 0, 0);
        workspace.requestSummary.slaDueDate =
            Datetime.newInstance(2026, 8, 2, 17, 0, 0);

        // Timeline

        workspace.timeline = new List<FSAM_RequestTimelineDTO>();

        workspace.timeline.add(
            createTimeline(
                'REQUEST',
                'Request Created',
                'Service request was created.',
                'New',
                Datetime.newInstance(2026, 7, 30, 9, 0, 0)
            )
        );

        workspace.timeline.add(
            createTimeline(
                'ASSIGNMENT',
                'Engineer Assigned',
                'John Smith assigned.',
                'Assigned',
                Datetime.newInstance(2026, 7, 30, 10, 30, 0)
            )
        );

        workspace.timeline.add(
            createTimeline(
                'VISIT',
                'Maintenance Started',
                'Engineer started inspection.',
                'In Progress',
                Datetime.newInstance(2026, 7, 31, 9, 15, 0)
            )
        );

        // Parts Usage

        workspace.partsUsage = new List<FSAM_PartUsageDTO>();

        workspace.partsUsage.add(
            createPart(
                'BRG-001',
                'Bearing',
                2,
                1200,
                2400
            )
        );

        workspace.partsUsage.add(
            createPart(
                'BLT-015',
                'Bolt Set',
                1,
                350,
                350
            )
        );

        workspace.generatedOn = System.now();
        workspace.version = '1.0';

        return workspace;

    }

    private static FSAM_RequestTimelineDTO createTimeline(
        String activityType,
        String title,
        String description,
        String status,
        Datetime activityDate
    ) {

        FSAM_RequestTimelineDTO timeline =
            new FSAM_RequestTimelineDTO();

        timeline.activityType = activityType;
        timeline.title = title;
        timeline.description = description;
        timeline.status = status;
        timeline.activityDate = activityDate;

        return timeline;

    }

    private static FSAM_PartUsageDTO createPart(
        String partCode,
        String partName,
        Integer quantity,
        Decimal unitCost,
        Decimal totalCost
    ) {

        FSAM_PartUsageDTO part =
            new FSAM_PartUsageDTO();

        part.partCode = partCode;
        part.partName = partName;
        part.quantity = quantity;
        part.unitCost = unitCost;
        part.totalCost = totalCost;

        return part;

    }

}