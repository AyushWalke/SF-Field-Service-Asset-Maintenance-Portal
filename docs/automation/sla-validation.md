# SLA Validation

## Overview

This Record-Triggered Flow validates and initializes SLA information for Service Requests.

The automation ensures that Service Requests always have valid SLA dates and prevents invalid lifecycle transitions.

---

## Flow Details

**Object**

FSAM_Service_Request__c

**Trigger**

Record Created or Updated

**Run Mode**

Before Save

---

## Automation Rules

### Rule 1 – Default SLA

If the SLA Due Date is blank:

- Set the SLA Due Date to the default value.

---

### Rule 2 – Past SLA

If the SLA Due Date is earlier than today's date:

- Display a custom error preventing the save.

---

### Rule 3 – Closed Requests

If the Service Request status is **Closed** but the Closed Date is empty:

- Display a custom error.

---

## Benefits

- Prevents invalid SLA configurations.
- Reduces manual data entry.
- Uses Before-Save Flow for high performance.
- Keeps SLA business rules centralized.