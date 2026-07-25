# Service Request Status Automation

## Overview

This Record-Triggered Flow automates the lifecycle of Service Requests.

The flow ensures that new requests receive a default status and completed requests transition to Closed when a Closed Date is recorded.

---

## Flow Type

Record-Triggered Flow

---

## Object

FSAM_Service_Request__c

---

## Trigger

Created or Updated

---

## Run Mode

Before Save

---

## Automation Rules

### Rule 1

If Status is blank

Set Status = New

---

### Rule 2

If Status = Completed
AND Closed Date is populated

Set Status = Closed

---

## Benefits

- Consistent lifecycle management
- Reduced manual updates
- Faster execution using Before-Save Flow
- Easy to extend with additional business rules