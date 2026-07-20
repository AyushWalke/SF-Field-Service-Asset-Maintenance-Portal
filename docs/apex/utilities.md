# Apex Utilities

## Overview

Sprint 4 introduces reusable Apex utility classes that provide centralized constants, logging, and security helpers.

These utilities reduce duplicated code and improve maintainability.

---

## FSAM_Constants

Central location for reusable application constants.

### Categories

- Service Request Status
- Priority
- Maintenance Visit Status
- Engineer Assignment Status

### Example

```apex
if (request.FSAM_Status__c == FSAM_Constants.SR_STATUS_COMPLETED) {
    // business logic
}
```

Using constants prevents hard-coded string values throughout the application.

---

## FSAM_Logger

Provides centralized logging methods.

### Methods

- info()
- warn()
- error()

### Purpose

Provides consistent logging throughout the Service Layer and Trigger Framework.

---

## FSAM_SecurityUtil

Provides reusable CRUD permission checks.

### Methods

- canRead()
- canCreate()
- canUpdate()
- canDelete()

### Purpose

Supports security-first Apex development and encourages reusable authorization checks.

---

## Design Principles

- Reusable utilities
- Eliminate duplicated code
- Centralize configuration values
- Promote secure Apex development