# Field Service Asset Maintenance Portal

## Project Overview

### Goal

Build an enterprise-style Salesforce application that manages customer-owned assets, service requests, maintenance visits, engineer assignments, spare parts, and maintenance history.

The project follows an Agile sprint model and demonstrates enterprise architecture, Salesforce configuration, security, automation, Apex, Lightning Web Components, integrations, testing, deployment, and documentation using Salesforce DX.

The project is intentionally scoped as a **portfolio-quality Salesforce Developer project** that can be completed in approximately **26 hours** while still demonstrating enterprise design principles.

---

# Project Status

| Sprint | Duration | Status |
|---------|---------:|--------|
| Sprint 0 – Environment Setup | 1 Hour | ✅ Completed |
| Sprint 1 – Solution Architecture | 2 Hours | ✅ Completed |
| Sprint 2 – Data Model | 3 Hours | ✅ Completed |
| Sprint 3 – Platform Configuration & Security | 2 Hours | ✅ Completed |
| Sprint 4 – Enterprise Apex | 5 Hours | ✅ Completed |
| Sprint 5 – Business Logic (Flows & Triggers) | 3 Hours | ✅ Completed |
| Sprint 5.5 – UI/UX Architecture (Planning) | Included in Sprint 6 | ✅ Completed |
| Sprint 6 – Lightning Web Components | 5 Hours | ✅ Completed |
| Sprint 7 – Integrations | 2 Hours | ✅ Completed |
| Sprint 8 – Testing | 2 Hours | ✅ Completed |
| Sprint 9 – Deployment & Documentation | 1 Hour | ⏳ In Progress |

**Estimated Total Project Duration:** **26 Hours**

---

# Technology Stack

- Salesforce DX
- Scratch Org
- Git & GitHub
- VS Code
- Salesforce CLI
- Apex
- SOQL / SOSL
- Trigger Framework
- Record-Triggered Flows
- Lightning Web Components
- REST API
- Named Credentials
- Permission Sets
- Reports & Dashboards
- Dynamic Forms
- Dynamic Actions
- Custom Metadata
- Apex Test Classes

---

# Architecture

```
LWC
 │
Apex Controller
 │
Service Layer
 │
Selector Layer
 │
Database
```

---

# Development Principles

- Configuration before Code
- Flow before Apex whenever appropriate
- Apex only for reusable or complex business logic
- One Trigger Per Object
- Bulk-safe design
- Enterprise naming conventions
- Security-first development
- Documentation-first approach

---

# Sprint Plan

## Sprint 0 — Environment Setup (1 Hour)

### Goal

Prepare the Salesforce DX development environment.

### Deliverables

- Salesforce CLI
- Dev Hub
- Scratch Org
- Git Repository
- GitHub Repository
- VS Code
- Initial Commit

**Status:** ✅ Completed

---

## Sprint 1 — Solution Architecture (2 Hours)

### Deliverables

- Business Requirements
- Functional Requirements
- Non-functional Requirements
- Actors
- User Stories
- Architecture
- Security Architecture
- Data Model
- Naming Conventions
- ADR Documents

**Status:** ✅ Completed

---

## Sprint 2 — Data Model (3 Hours)

### Deliverables

Objects

- FSAM Customer Asset
- FSAM Service Request
- FSAM Service Part
- FSAM Part Replacement
- FSAM Maintenance Visit
- FSAM Engineer Assignment

Metadata

- Fields
- Relationships
- Validation Rules
- Formula Fields
- Roll-up Summary Fields
- External IDs

Documentation

- Metadata Documentation
- ADR Updates

**Status:** ✅ Completed

---

## Sprint 3 — Platform Configuration & Security (2 Hours)

### Deliverables

- Lightning App
- Tabs
- Navigation
- Record Pages
- Dynamic Forms
- Dynamic Actions
- Permission Sets
- OWD
- Sharing Rules
- Reports
- Dashboard
- List Views

**Status:** ✅ Completed

---

## Sprint 4 — Enterprise Apex (5 Hours)

### Deliverables

- Trigger Framework
- Selector Layer
- Service Layer
- Controller Layer
- Utility Classes
- Constants
- Custom Exceptions
- Test Data Factory
- CRUD/FLS
- Business Services

**Status:** ✅ Completed

---

## Sprint 5 — Business Logic (3 Hours)

### Deliverables

- Record-Triggered Flows
- Status Automation
- Inventory Updates
- Assignment Logic
- SLA Validation
- Notifications

**Status:** ✅ Completed

---

# Sprint 5.5 -- UI/UX Architecture

-   Application navigation
-   User journey
-   Screen wireframes
-   Component hierarchy
-   Apex controller mapping
-   Lightning Design System guidelines
-   Shared component standards
-   Loading, empty and error state design

**Status:** ✅ Completed

---

## Sprint 6 — Lightning Web Components (5 Hours)

### Deliverables

- Asset Explorer
- Service Request Dashboard
- Engineer Dashboard
- Maintenance Timeline
- Parts Usage
- Search
- Pagination
- Filtering
- Navigation
- Toasts
- Spinner

## Module 1 -- Dashboard

-   KPI Cards
-   Recent Service Requests
-   Quick Actions

## Module 2 -- Asset Explorer

-   Asset Search
-   Asset Details
-   Maintenance History

## Module 3 -- Service Request Workspace

-   Request Summary
-   Maintenance Timeline
-   Parts Usage

## Module 4 -- Engineer Workspace

-   Assignment Dashboard
-   Today's Visits
-   Open Requests

## Module 5 -- Inventory Workspace

-   Parts Search
-   Inventory Table
-   Filtering

## Module 6 -- Shared Components

-   Pagination
-   Navigation
-   Toast Notifications
-   Loading Spinner
-   Empty State
-   Error State

**Status:** ✅ Completed

---

## Sprint 7 — Integrations (2 Hours)

### Deliverables

- Named Credential
- REST Callout
- Mock API
- JSON Parsing
- Error Handling
- HttpCalloutMock

**Status:** ✅ Completed

---

## Sprint 8 — Testing (2 Hours)

### Deliverables

- Apex Tests
- Trigger Tests
- Service Tests
- Flow Tests
- Integration Tests
- 90%+ Code Coverage

**Status:** ✅ Completed

---

## Sprint 9 — Deployment & Documentation (1 Hour)

### Deliverables

- README
- Deployment Guide
- Release Notes
- Architecture Updates
- Demo Guide
- Portfolio Screenshots

---

# Definition of Done

A sprint is complete only when:

- Development is complete.
- Metadata is committed.
- Documentation is updated.
- Code review is approved.
- Tests pass.
- Interview discussion points are understood.

---

# Expected Outcome

By the end of this project you will have:

- Enterprise Salesforce architecture experience
- Salesforce DX workflow
- Enterprise Apex architecture
- Lightning Web Components
- Record-Triggered Flow development
- REST Integration
- Testing experience
- Professional documentation
- Portfolio-ready Salesforce project