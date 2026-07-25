# Maintenance Visit Automation

## Overview

The Maintenance Visit automation consists of two Record-Triggered Flows that synchronize the lifecycle of Maintenance Visits with their related Service Requests.

The automations ensure that Service Requests accurately reflect the progress of maintenance work.

---

# Flow 1 – Maintenance Visit Started

## Object

FSAM_Maintenance_Visit__c

## Trigger

Record Created

## Run Mode

After Save

## Business Rule

When the first Maintenance Visit is created for a Service Request:

- Retrieve the related Service Request.
- If its status is **Assigned**, update it to **In Progress**.

---

# Flow 2 – Maintenance Visit Completed

## Object

FSAM_Maintenance_Visit__c

## Trigger

Record Updated

## Run Mode

After Save

## Business Rule

When a Maintenance Visit is marked **Completed**:

1. Retrieve all Maintenance Visits related to the same Service Request.
2. Check whether any visits are still open.
3. If all visits are completed, update the Service Request status to **Completed**.

---

# Benefits

- Keeps Service Request status synchronized with maintenance activity.
- Eliminates manual status updates.
- Demonstrates declarative orchestration across parent-child relationships.
- Uses modular Record-Triggered Flows that are easy to maintain and extend.