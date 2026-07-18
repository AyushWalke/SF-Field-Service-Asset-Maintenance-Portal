# FSAM Service Request

## Purpose

Represents a customer service request raised for a specific installed asset.

Each request tracks the complete lifecycle from creation to closure.

---

## Relationships

### Parent

| Parent | Relationship |
|----------|--------------|
| FSAM Customer Asset | Master-Detail |

### Lookup

| Object | Relationship |
|---------|--------------|
| User | Assigned Engineer *(Pending)* |

### Children

- FSAM Maintenance Visit
- FSAM Part Replacement
- FSAM Engineer Assignment

---

# Fields

## Request Information

| Label | API | Type | Required |
|--------|-----|------|----------|
| Subject | FSAM_Subject__c | Text | Yes |
| Description | FSAM_Description__c | Long Text | No |
| Priority | FSAM_Priority__c | Picklist | Yes |
| Status | FSAM_Status__c | Picklist | Yes |

---

## Assignment

| Label | API | Type |
|--------|-----|------|
| Assigned Engineer | FSAM_Assigned_Engineer__c | Lookup(User) *(Pending)* |

---

## Dates

| Label | API | Type |
|--------|-----|------|
| Open Date | FSAM_Open_Date__c | Date/Time |
| Closed Date | FSAM_Closed_Date__c | Date/Time |
| SLA Due Date | FSAM_SLA_Due_Date__c | Date/Time |

---

## Resolution

| Label | API | Type |
|--------|-----|------|
| Resolution | FSAM_Resolution__c | Long Text Area |

---

## Integration

| Label | API | Type |
|--------|-----|------|
| External Request ID | FSAM_External_Request_ID__c | Text (External ID) |

---

# Validation Rules

- FSAM_VR_Closed_Date
- FSAM_VR_SLA_Due_Date
- FSAM_VR_Resolution

---

# Rollup Summary Fields

- Total Maintenance Visits - Implemented
- Total Parts Cost - Implemented

---

# Future Enhancements

- Auto Assignment
- SLA Timer
- Escalation Rules
- Platform Event Notifications
- Omni-Channel Routing