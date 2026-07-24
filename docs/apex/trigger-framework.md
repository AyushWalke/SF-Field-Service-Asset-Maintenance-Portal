# Trigger Framework

## Overview

The FSAM project uses a lightweight trigger framework that separates trigger execution from business logic.

Triggers contain no business logic and simply delegate execution to dedicated handler classes.

---

## Architecture

```
Trigger
   │
   ▼
Trigger Handler
   │
   ▼
Service Layer
   │
   ▼
Selector Layer
   │
   ▼
Database
```

---

## Components

### FSAM_TriggerHandler

Provides a reusable base class that routes execution to the correct trigger context:

- beforeInsert
- beforeUpdate
- beforeDelete
- afterInsert
- afterUpdate
- afterDelete
- afterUndelete

### Service Request Trigger

Delegates execution to `FSAM_ServiceRequestTriggerHandler`.

### Maintenance Visit Trigger

Delegates execution to `FSAM_MaintenanceVisitTriggerHandler`.

---

## Design Principles

- One trigger per object
- Logic-free triggers
- Business logic delegated to services
- Reusable handler framework
- Bulk-safe execution