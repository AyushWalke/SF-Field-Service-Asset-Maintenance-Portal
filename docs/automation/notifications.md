# Notifications

## Overview

The FSAM project sends email notifications for key business events using Record-Triggered Flows.

Notifications are sent only after the associated business process has completed successfully.

---

## Engineer Assignment Notification

### Trigger

Engineer Assignment Created

### Action

Send an email notifying the assigned engineer that a new Service Request has been assigned.

---

## Service Request Completion Notification

### Trigger

All Maintenance Visits Completed

### Action

Notify the Service Contact that the Service Request has been completed.

---

## Low Inventory Notification

### Trigger

Inventory updated after a Part Replacement.

### Condition

The Service Part requires replenishment.

### Action

Send an email notification indicating that inventory is below the configured threshold.

---

## Design Principles

- Notifications are owned by the business process that triggers them.
- Business logic remains in Apex where appropriate.
- Flows orchestrate notifications.
- Each flow maintains a single primary responsibility.