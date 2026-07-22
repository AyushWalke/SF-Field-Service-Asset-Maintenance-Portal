public with sharing class FSAM_Constants {
    
    // Service Request Status
    
    public static final String SR_STATUS_NEW = 'New';
    public static final String SR_STATUS_ASSIGNED = 'Assigned';
    public static final String SR_STATUS_IN_PROGRESS = 'In Progress';
    public static final String SR_STATUS_ON_HOLD = 'On Hold';
    public static final String SR_STATUS_WAITING_FOR_PARTS = 'Waiting for Parts';
    public static final String SR_STATUS_COMPLETED = 'Completed';
    public static final String SR_STATUS_CLOSED = 'Closed';
    public static final String SR_STATUS_CANCELLED = 'Cancelled';

    // Priority

    public static final String PRIORITY_LOW = 'Low';
    public static final String PRIORITY_MEDIUM = 'Medium';
    public static final String PRIORITY_HIGH = 'High';
    public static final String PRIORITY_CRITICAL = 'Critical';

    // Visit Status

    public static final String VISIT_STATUS_SCHEDULED = 'Scheduled';
    public static final String VISIT_STATUS_IN_PROGRESS = 'In Progress';
    public static final String VISIT_STATUS_COMPLETED = 'Completed';
    public static final String VISIT_STATUS_CANCELLED = 'Cancelled';

    // Assignment Status

    public static final String ASSIGNMENT_STATUS_ASSIGNED = 'Assigned';
    public static final String ASSIGNMENT_STATUS_ACCEPTED = 'Accepted';
    public static final String ASSIGNMENT_STATUS_IN_PROGRESS = 'In Progress';
    public static final String ASSIGNMENT_STATUS_COMPLETED = 'Completed';
    public static final String ASSIGNMENT_STATUS_REASSIGNED = 'Reassigned';

    // Customer Asset Status

    public static final String ASSET_STATUS_ACTIVE = 'Active';
    public static final String ASSET_STATUS_UNDER_MAINTENANCE = 'Under Maintenance';
    public static final String ASSET_STATUS_INACTIVE = 'Inactive';
    public static final String ASSET_STATUS_RETIRED = 'Retired';
}