# FSAM Maintenance Visit

## Purpose

Represents an individual maintenance activity performed by a service engineer for a Service Request.

A single Service Request may require multiple maintenance visits for diagnosis, repair, follow-up inspections, or final verification. This object provides a complete maintenance history for each request.

---

# Object Configuration

| Property | Value |
|----------|-------|
| Label | FSAM Maintenance Visit |
| API Name | FSAM_Maintenance_Visit__c |
| Record Name | Visit Number |
| Record Name Type | Auto Number |
| Display Format | VIS-{00000} |
| Reports | Enabled |
| Activities | Disabled |
| Field History | Enabled |
| Search | Enabled |
| Deployment Status | Deployed |

---

# Relationships

## Parent

| Parent | Relationship | Purpose |
|---------|--------------|---------|
| FSAM Service Request | Master-Detail | Associates the maintenance visit with the service request being serviced. |

## Lookup

| Object | Relationship | Purpose |
|---------|--------------|---------|
| User | Lookup | Identifies the engineer who performed the maintenance visit. |

## Children

None

---

# Fields

| Label | API Name | Type | Required | Purpose |
|--------|----------|------|----------|---------|
| Visit Number | Name | Auto Number | Yes | Unique identifier for the maintenance visit. |
| Service Request | FSAM_Service_Request__c | Master-Detail | Yes | Related service request. |
| Engineer | FSAM_Engineer__c | Lookup(User) | Yes | Engineer performing the visit. |
| Visit Type | FSAM_Visit_Type__c | Picklist | Yes | Indicates whether the visit was On-Site or Remote Support. |
| Visit Status | FSAM_Visit_Status__c | Picklist | Yes | Current lifecycle status of the visit. |
| Scheduled Start | FSAM_Scheduled_Start__c | Date/Time | Yes | Planned start date and time. |
| Scheduled End | FSAM_Scheduled_End__c | Date/Time | No | Planned completion date and time. |
| Actual Start | FSAM_Actual_Start__c | Date/Time | No | Actual work start date and time. |
| Actual End | FSAM_Actual_End__c | Date/Time | No | Actual work completion date and time. |
| Work Performed | FSAM_Work_Performed__c | Long Text Area (5000) | No | Summary of maintenance activities performed. |
| Engineer Notes | FSAM_Engineer_Notes__c | Long Text Area (2000) | No | Additional technical observations recorded by the engineer. |

---

# Validation Rules

## FSAM_VR_Scheduled_Dates

### Purpose

Scheduled End cannot be earlier than Scheduled Start.

### Formula

```text
AND(
    NOT(ISBLANK(FSAM_Scheduled_End__c)),
    FSAM_Scheduled_End__c < FSAM_Scheduled_Start__c
)
```

### Error Message

```
Scheduled End cannot be earlier than Scheduled Start.
```

### Error Location

Scheduled End

---

## FSAM_VR_Actual_Dates

### Purpose

Actual End cannot be earlier than Actual Start.

### Formula

```text
AND(
    NOT(ISBLANK(FSAM_Actual_Start__c)),
    NOT(ISBLANK(FSAM_Actual_End__c)),
    FSAM_Actual_End__c < FSAM_Actual_Start__c
)
```

### Error Message

```
Actual End cannot be earlier than Actual Start.
```

### Error Location

Actual End

---

## FSAM_VR_Completed_Visit

### Purpose

Completed visits must capture actual timing and work summary.

### Formula

```text
AND(
    ISPICKVAL(FSAM_Visit_Status__c, "Completed"),
    OR(
        ISBLANK(FSAM_Actual_Start__c),
        ISBLANK(FSAM_Actual_End__c),
        ISBLANK(FSAM_Work_Performed__c)
    )
)
```

### Error Message

```
Actual Start, Actual End, and Work Performed are required when completing a maintenance visit.
```

### Error Location

Top of Page

## FSAM_VR_Engineer_Required

### Purpose

Assigning Engineer is required

### Formula

```text
ISBLANK(FSAM_Engineer__c)
```

### Error Message

```
Please assign an engineer before saving the maintenance visit.
```

### Error Location

FSAM_Engineer__c

---

# Business Rules

1. Every Maintenance Visit must belong to a Service Request.
2. Every Maintenance Visit must have an assigned Engineer.
3. Scheduled End cannot occur before Scheduled Start.
4. Actual End cannot occur before Actual Start.
5. A visit cannot be marked as Completed unless Actual Start, Actual End, and Work Performed are provided.
6. Multiple Maintenance Visits may exist for a single Service Request.

---

# Related Roll-Up Summary

## FSAM Service Request — Total Maintenance Visits

| Property | Value |
|----------|-------|
| API Name | FSAM_Total_Maintenance_Visits__c |
| Type | Roll-Up Summary |
| Operation | COUNT |
| Summarized Object | FSAM Maintenance Visit |

### Purpose

Counts the total number of maintenance visits recorded against a Service Request.

---

# Automation Considerations

Future automation may include:

- Automatically updating Service Request status when the first Maintenance Visit starts.
- Automatically setting Visit Status to Completed when Actual End is entered.
- Sending notifications when a Maintenance Visit is scheduled.
- Preventing overlapping Maintenance Visits for the same engineer.
- Calculating visit duration using Actual Start and Actual End.

---

# Security Considerations

- Service Engineers should be able to create and update their own Maintenance Visits.
- Managers should have visibility into all Maintenance Visits.
- Historical Maintenance Visit records should not be deleted after Service Request closure.
- Access will be managed through Permission Sets in Sprint 3.

---

# Reporting Use Cases

The object supports reporting such as:

- Maintenance Visits by Engineer
- Visits by Asset Type
- Average Visits per Service Request
- Visit Completion Rate
- Remote vs On-Site Visits
- Average Repair Time
- Engineer Workload
- Repeat Visit Analysis

---

# Future Enhancements

- GPS Check-In / Check-Out
- Customer Digital Signature
- Before/After Photos
- Travel Distance Tracking
- Time Sheet Integration
- Offline Mobile Support
- Visit Checklist
- Customer Satisfaction Rating