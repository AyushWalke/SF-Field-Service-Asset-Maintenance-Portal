# Apex Project Structure

## Overview

Sprint 4 introduces the Apex architecture for the Field Service Asset Maintenance Portal.

The project follows a layered architecture that separates responsibilities across controllers, services, selectors, utilities, and trigger handlers.

---

## Architecture

```
Lightning Web Components
            │
            ▼
     Apex Controllers
            │
            ▼
      Service Layer
            │
            ▼
     Selector Layer
            │
            ▼
        Salesforce Data
```

---

## Folder Structure

```
classes/
│
├── constants/
├── controllers/
├── exceptions/
├── framework/
├── handlers/
├── selectors/
├── services/
├── testdata/
└── utils/
```

---

## Responsibilities

### Controllers

Expose Apex methods to Lightning Web Components.

---

### Services

Contain reusable business logic.

Examples include:

- Service Request processing
- Inventory management
- Maintenance scheduling

---

### Selectors

Responsible only for SOQL queries.

Selectors do not contain business logic.

---

### Trigger Framework

Provides a reusable foundation for object triggers while maintaining the "One Trigger Per Object" principle.

---

### Utilities

Shared helper classes used across the application.

Examples:

- Logging
- Security (CRUD/FLS)

---

### Constants

Central location for reusable values such as statuses, priorities, and configuration constants.

---

### Exceptions

Custom business exceptions provide meaningful error handling and improve code readability.

---

### Test Data Factory

Centralized generation of reusable test data for Apex unit tests.

---

## Design Principles

- Separation of concerns
- Bulk-safe architecture
- Reusable business services
- Reusable selectors
- One trigger per object
- Configuration before code