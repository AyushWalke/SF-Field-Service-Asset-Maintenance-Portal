# Engineer Assignment Automation

## Overview

This Record-Triggered Flow automatically updates the related Service Request when an Engineer Assignment is created.

The flow ensures that Service Requests move from **New** to **Assigned** once an engineer has been assigned.

---

## Flow Details

**Object**

FSAM_Engineer_Assignment__c

**Trigger**

Record Created

**Run Mode**

After Save

---

## Automation Logic

1. Trigger when an Engineer Assignment is created.
2. Retrieve the related Service Request.
3. Check whether the current status is **New**.
4. Update the Service Request status to **Assigned**.

---

## Why After Save?

The flow updates a related record (`FSAM_Service_Request__c`), which requires an After-Save Record-Triggered Flow.

---

## Benefits

- Eliminates manual status updates
- Maintains a consistent Service Request lifecycle
- Uses declarative automation in accordance with the project's "Configuration before Code" principle
- Keeps automation modular and maintainable