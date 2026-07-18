# FSAM Part Replacement

## Purpose

Represents a spare-part consumption or replacement transaction performed while resolving a service request.

Each record identifies the service part used, quantity consumed, historical unit cost, total cost, and replacement date.

This object preserves transactional cost history even if the current unit cost of the Service Part changes in the future.

---

## Object Configuration

| Property          | Value                    |
| ----------------- | ------------------------ |
| Label             | FSAM Part Replacement    |
| API Name          | FSAM_Part_Replacement__c |
| Record Name       | Replacement Number       |
| Record Name Type  | Auto Number              |
| Display Format    | PR-{00000}               |
| Reports           | Enabled                  |
| Activities        | Disabled                 |
| Field History     | Enabled                  |
| Search            | Enabled                  |
| Deployment Status | Deployed                 |

---

## Relationships

### Parent

| Parent               | Relationship  | Purpose                                                                                             |
| -------------------- | ------------- | --------------------------------------------------------------------------------------------------- |
| FSAM Service Request | Master-Detail | Associates the replacement transaction with the service request during which the part was consumed. |

### Lookup

| Object            | Relationship | Purpose                                                         |
| ----------------- | ------------ | --------------------------------------------------------------- |
| FSAM Service Part | Lookup       | Identifies the inventory part used during the service activity. |

### Children

None currently.

---

## Fields

| Label              | API Name                 | Type                 | Required | Purpose                                              |
| ------------------ | ------------------------ | -------------------- | -------- | ---------------------------------------------------- |
| Replacement Number | Name                     | Auto Number          | Yes      | Unique identifier for the replacement transaction.   |
| Service Request    | FSAM_Service_Request__c  | Master-Detail        | Yes      | Identifies the related service request.              |
| Service Part       | FSAM_Service_Part__c     | Lookup               | Yes      | Identifies the spare part consumed or replaced.      |
| Quantity           | FSAM_Quantity__c         | Number(10,0)         | Yes      | Number of units consumed.                            |
| Unit Cost          | FSAM_Unit_Cost__c        | Currency(16,2)       | Yes      | Stores the unit cost at the time of replacement.     |
| Total Cost         | FSAM_Total_Cost__c       | Formula (Currency)   | System   | Calculates the total replacement cost.               |
| Replacement Date   | FSAM_Replacement_Date__c | Date/Time            | Yes      | Records when the replacement occurred.               |
| Notes              | FSAM_Notes__c            | Long Text Area(2000) | No       | Stores additional information about the replacement. |

---

## Formula Fields

### Total Cost

**API Name:** `FSAM_Total_Cost__c`

Calculates the total cost of the parts consumed in the replacement transaction.

### Formula

`FSAM_Quantity__c * FSAM_Unit_Cost__c`

### Reason

The calculation uses the Unit Cost stored directly on the Part Replacement record rather than referencing the current cost from FSAM Service Part.

This preserves historical transaction accuracy if the Service Part unit cost changes later.

---

## Validation Rules

### FSAM_VR_Quantity

**Purpose:** Prevents zero or negative quantities.

**Formula:**

`FSAM_Quantity__c <= 0`

**Error Message:**

Quantity must be greater than zero.

**Error Location:**

Quantity

---

### FSAM_VR_Unit_Cost

**Purpose:** Prevents negative replacement costs.

**Formula:**

`FSAM_Unit_Cost__c < 0`

**Error Message:**

Unit Cost cannot be negative.

**Error Location:**

Unit Cost

A zero Unit Cost is allowed because a replacement may be provided under warranty or at no charge.

---

## Business Rules

1. Every Part Replacement must belong to a Service Request.
2. Every Part Replacement must reference a valid Service Part.
3. Quantity must be greater than zero.
4. Unit Cost cannot be negative.
5. Unit Cost represents the cost at the time of the transaction and acts as a historical cost snapshot.
6. Total Cost is calculated automatically as Quantity × Unit Cost.
7. Replacement Date records when the part was actually consumed or replaced.

---

## Related Roll-Up Summary

### FSAM Service Request — Total Parts Cost

**API Name:** `FSAM_Total_Parts_Cost__c`

**Type:** Roll-Up Summary

**Summarized Object:** FSAM Part Replacement

**Operation:** SUM

**Field:** `FSAM_Total_Cost__c`

**Purpose:**

Calculates the total cost of all parts consumed while resolving a Service Request.

---

## Automation Considerations

The Unit Cost is currently stored directly on the Part Replacement transaction.

In a later automation sprint, the system may automatically populate Unit Cost from the selected FSAM Service Part when a Part Replacement is created.

Inventory quantity reduction should also be handled through controlled automation rather than allowing Part Replacement records to directly manipulate inventory without validation.

---

## Security Considerations

Service Engineers should be able to create Part Replacement records for Service Requests assigned to them.

Managers should have visibility into all replacement transactions.

Access to modify historical replacement costs should be restricted appropriately.

Object-level and field-level access will be configured through Permission Sets during the Platform Configuration sprint.

---

## Reporting Use Cases

The object supports reporting such as:

* Total parts cost by Service Request
* Most frequently replaced parts
* Parts consumption by Asset Type
* Parts cost by customer
* Parts cost by engineer
* Parts consumption over time
* High-cost service requests

---

## Future Enhancements

* Automatic Unit Cost population from Service Part
* Automatic inventory quantity deduction
* Inventory availability validation
* Warranty-based zero-cost replacement handling
* Part return tracking
* Multiple warehouse support
* Inventory reservation
* Integration with external ERP or inventory systems
