# Selector Layer

## Overview

The Selector Layer centralizes all SOQL queries used by the application.

Selectors improve maintainability by ensuring queries are written once and reused throughout the Service Layer, Controllers, and Trigger Framework.

---

## Design Principles

- Query-only classes
- No DML
- No business logic
- Bulk-safe methods
- Explicit field selection
- Reusable across the application

---

## FSAM_ServiceRequestSelector

### Methods

- getByIds()
- getByStatus()
- getOpenRequests()

### Purpose

Provides reusable queries for service request records.

---

## FSAM_CustomerAssetSelector

### Methods

- getByIds()
- getActiveAssets()

### Purpose

Retrieves customer assets used by maintenance and service request operations.

---

## FSAM_ServicePartSelector

### Methods

- getByIds()
- getLowStockParts()

### Purpose

Provides reusable inventory queries for service parts.

---

## Benefits

- Eliminates duplicated SOQL
- Simplifies Service Layer implementation
- Improves maintainability
- Encourages reusable data access
- Supports bulk-safe Apex development