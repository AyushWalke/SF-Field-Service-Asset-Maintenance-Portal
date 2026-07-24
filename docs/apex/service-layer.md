# Service Layer

## Overview

The Service Layer contains reusable business logic for the Field Service Asset Maintenance Portal.

Services coordinate selectors, validation, logging, and database updates while keeping controllers and triggers lightweight.

---

## Design Principles

- Business logic only
- No inline SOQL
- Reuse selectors
- Throw business exceptions
- Centralized logging
- Bulk-safe where applicable

---

## FSAM_ServiceRequestService

### Responsibilities

- Close service requests
- Update request status
- Retrieve open service requests

Uses:

- FSAM_ServiceRequestSelector
- FSAM_Logger
- FSAM_BusinessException

---

## FSAM_InventoryService

### Responsibilities

- Decrease inventory
- Validate available stock
- Retrieve low-stock parts

Uses:

- FSAM_ServicePartSelector
- FSAM_Logger
- FSAM_BusinessException

---

## FSAM_MaintenanceVisitService

### Responsibilities

- Schedule maintenance visits
- Complete maintenance visits

Uses:

- FSAM_MaintenanceVisitSelector
- FSAM_Logger
- FSAM_BusinessException

---

## Benefits

- Centralized business rules
- Improved code reuse
- Easier testing
- Separation of concerns