# FSAM Engineer Assignment

## Purpose

Represents the assignment of a service engineer to a Service Request.

A Service Request may be reassigned multiple times throughout its lifecycle. This object preserves the complete assignment history instead of overwriting a single Assigned Engineer field, enabling historical reporting and workload analysis.

---

# Object Configuration

| Property | Value |
|----------|-------|
| Label | FSAM Engineer Assignment |
| API Name | FSAM_Engineer_Assignment__c |
| Record Name | Assignment Number |
| Record Name Type | Auto Number |
| Display Format | EA-{00000} |
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
| FSAM Service Request | Master-Detail | Associates the engineer assignment with a service request. |

## Lookup

| Object | Relationship | Purpose |
|---------|--------------|---------|
| User | Lookup | Identifies the assigned service engineer. |

---

# Fields

| Label | API Name | Type | Required | Purpose |
|--------|----------|------|----------|---------|
| Assignment Number | Name | Auto Number | Yes | Unique assignment identifier. |
| Service Request | FSAM_Service_Request__c | Master-Detail | Yes | Related Service Request. |
| Engineer | FSAM_Engineer__c | Lookup(User) | No* | Assigned service engineer. |
| Assignment Status | FSAM_Assignment_Status__c | Picklist | Yes | Current assignment status. |
| Assigned Date | FSAM_Assigned_Date__c | Date/Time | Yes | Date and time the assignment was created. |
| Accepted Date | FSAM_Accepted_Date__c | Date/Time | No | Date and time the assignment was accepted. |
| Completed Date | FSAM_Completed_Date__c | Date/Time | No | Date and time the assignment was completed. |
| Assignment Notes | FSAM_Assignment_Notes__c | Long Text Area (2000) | No | Additional assignment information. |

> *The Engineer lookup cannot be marked as required because Salesforce does not support required custom lookups to the User object in metadata. The business rule is enforced using a Validation Rule.

---

# Validation Rules

## FSAM_VR_Engineer_Assignment

**Purpose**

Ensures an engineer is assigned before the record can be saved.

**Formula**

```text
ISBLANK(FSAM_Engineer__c)
```

**Error Message**

```
Please assign an engineer before saving the assignment.
```

**Error Location**

Engineer

---

## FSAM_VR_Accepted_Date

**Purpose**

Accepted Date cannot be earlier than Assigned Date.

**Formula**

```text
AND(
    NOT(ISBLANK(FSAM_Accepted_Date__c)),
    FSAM_Accepted_Date__c < FSAM_Assigned_Date__c
)
```

**Error Message**

```
Accepted Date cannot be earlier than Assigned Date.
```

**Error Location**

Accepted Date

---

## FSAM_VR_Completed_Date

**Purpose**

Completed Date cannot be earlier than Accepted Date.

**Formula**

```text
AND(
    NOT(ISBLANK(FSAM_Accepted_Date__c)),
    NOT(ISBLANK(FSAM_Completed_Date__c)),
    FSAM_Completed_Date__c < FSAM_Accepted_Date__c
)
```

**Error Message**

```
Completed Date cannot be earlier than Accepted Date.
```

**Error Location**

Completed Date

---

## FSAM_VR_Status_Completed

**Purpose**

Completed assignments must include a Completed Date.

**Formula**

```text
AND(
    ISPICKVAL(FSAM_Assignment_Status__c, "Completed"),
    ISBLANK(FSAM_Completed_Date__c)
)
```

**Error Message**

```
Completed Date is required when the assignment is marked Completed.
```

**Error Location**

Top of Page

---

# Business Rules

1. Every Engineer Assignment must belong to a Service Request.
2. Every Engineer Assignment must reference an assigned engineer.
3. Accepted Date cannot occur before Assigned Date.
4. Completed Date cannot occur before Accepted Date.
5. Completed assignments must include a Completed Date.
6. A Service Request may have multiple Engineer Assignments.

---

# Security Considerations

- Managers may assign engineers.
- Engineers should have read access to their assignments.
- Assignment history should remain immutable for audit purposes.
- Access will be managed through Permission Sets.

---

# Reporting Use Cases

- Engineer workload
- Assignment history
- Assignment completion rate
- Reassignment frequency
- Average acceptance time
- Average completion time
- Open assignments by engineer

---

# Future Enhancements

- Automatic assignment through Flow
- Skill-based engineer assignment
- Territory-based assignment
- Capacity-aware scheduling
- Escalation rules
- Assignment notifications
- Mobile technician integration