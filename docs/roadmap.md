# Field Service Asset Maintenance Portal

## Project Overview

**Goal**

Build an enterprise-style Salesforce application that manages customer-owned assets, service requests, maintenance visits, engineer assignments, spare parts, and maintenance history.

The project follows an Agile sprint model and demonstrates architecture, configuration, Apex, Lightning Web Components, integrations, testing, and deployment using Salesforce DX.

---

# Technology Stack

* Salesforce DX
* Scratch Org
* Git & GitHub
* VS Code
* Salesforce CLI
* Lightning Web Components
* Apex
* SOQL / SOSL
* Triggers
* Record-Triggered Flows
* REST API
* Named Credentials
* Custom Metadata
* Permission Sets
* Reports & Dashboards
* Dynamic Forms
* Dynamic Actions
* Apex Test Classes

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

Simple automation is implemented with Flows, while reusable business logic lives in Apex Services.

---

# Sprint Plan

---

## Sprint 0 — Environment Setup

### Goal

Prepare a professional Salesforce DX development environment.

### Deliverables

* Salesforce CLI
* Dev Hub
* Scratch Org
* Salesforce DX Project
* Git Repository
* GitHub Repository
* VS Code Configuration
* Initial Commit

### Status

✅ Completed

---

## Sprint 1 — Solution Architecture

### Goal

Design the application before building it.

### Deliverables

* Business Requirements
* Functional Requirements
* Non-Functional Requirements
* Actors
* User Stories
* Use Case Diagram
* High-Level Architecture
* Security Architecture
* Data Model
* Object Ownership Strategy
* Naming Conventions

---

## Sprint 2 — Data Model

### Goal

Build the Salesforce data model.

### Deliverables

* Custom Objects
* Fields
* Relationships
* Validation Rules
* Formula Fields
* Roll-Up Summary Fields
* External IDs
* Sample Data

Objects include:

* Customer Asset
* Service Request
* Maintenance Visit
* Service Part
* Part Replacement
* Engineer Assignment

---

## Sprint 3 — Platform Configuration

### Goal

Configure the Salesforce application.

### Deliverables

* Lightning App
* Tabs
* Record Pages
* Dynamic Forms
* Dynamic Actions
* Permission Sets
* Reports
* Dashboards

---

## Sprint 4 — Enterprise Apex

### Goal

Implement reusable business logic.

### Deliverables

* Selector Layer
* Service Layer
* Controller Layer
* DTO Classes
* Utility Classes
* Custom Exceptions
* CRUD/FLS Enforcement
* Sharing
* Test Data Factory

---

## Sprint 5 — Business Logic

### Goal

Automate business processes.

### Deliverables

* Trigger Framework
* Trigger Handlers
* Record-Triggered Flows
* Assignment Logic
* Status Management
* SLA Validation
* Notifications

---

## Sprint 6 — Lightning Web Components

### Goal

Develop the user interface.

### Deliverables

* Asset List
* Asset Details
* Service Request Form
* Engineer Dashboard
* Maintenance History
* Search
* Filtering
* Pagination
* Toast Messages
* Loading Spinner
* Responsive Design
* Navigation

---

## Sprint 7 — Integrations

### Goal

Integrate with an external maintenance system.

### Deliverables

* REST Callouts
* Named Credential
* Mock External API
* Error Handling
* Logging Strategy

---

## Sprint 8 — Testing

### Goal

Ensure production-ready quality.

### Deliverables

* Apex Unit Tests
* Trigger Tests
* Service Tests
* LWC Tests (optional)
* Callout Mock Tests
* Negative Test Cases
* 90%+ Code Coverage

---

## Sprint 9 — Deployment & Documentation

### Goal

Prepare the project for release.

### Deliverables

* Git Branching Strategy
* Deployment Validation
* Release Notes
* README
* Architecture Documentation
* Future Enhancements

---

# Definition of Done

A sprint is considered complete only when:

* Development is finished.
* Metadata is committed to Git.
* Apex tests pass.
* Code review is completed.
* Documentation is updated.
* Interview discussion points are understood.

---

# Mentoring Workflow

Each sprint follows the same process:

1. Learn the theory.
2. Understand the architectural decision.
3. Create the required metadata.
4. Implement the solution.
5. Review the implementation.
6. Discuss interview questions.
7. Merge the sprint into the main branch.

No sprint begins until the previous sprint has passed review.

---

# Expected Outcome

By the end of the project you will have:

* A realistic enterprise Salesforce application
* Strong Apex and LWC experience
* Experience with Salesforce DX and Git
* Integration experience using REST APIs
* Enterprise project documentation
* A portfolio project suitable for Salesforce Developer interviews
