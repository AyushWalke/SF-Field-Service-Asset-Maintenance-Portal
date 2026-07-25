# Inventory Update Automation

## Overview

This automation updates Service Part inventory whenever a Part Replacement record is created.

The automation combines Record-Triggered Flow with Invocable Apex to keep Flow declarative while centralizing inventory business logic inside the Service Layer.

---

## Flow Details

**Object**

FSAM_Part_Replacement__c

**Trigger**

Record Created

**Run Mode**

After Save

---

## Automation Process

1. A Part Replacement record is created.
2. The Record-Triggered Flow invokes the `FSAM_InventoryInvocable` Apex action.
3. The invocable class converts Flow inputs into a format expected by the Service Layer.
4. `FSAM_InventoryService` validates inventory and reduces available stock.
5. Business exceptions are raised if insufficient inventory exists.

---

## Apex Components

### Invocable Apex

- FSAM_InventoryInvocable

### Service Layer

- FSAM_InventoryService

### Selector Layer

- FSAM_ServicePartSelector

---

## Benefits

- Reuses existing business logic
- Prevents duplicate inventory calculations
- Keeps Flow simple and declarative
- Demonstrates Flow–Apex integration
- Maintains a clean layered architecture