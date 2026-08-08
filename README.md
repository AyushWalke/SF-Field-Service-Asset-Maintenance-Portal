# Field Service Asset Maintenance Portal (FSAM)

An enterprise-style Salesforce application built using **Salesforce DX**, **Apex Enterprise Patterns**, **Lightning Web Components**, **Record-Triggered Flows**, and **REST Integrations**.

This project demonstrates how a real-world Salesforce application can be designed using a layered architecture while following Salesforce development best practices. It was built as a portfolio project to showcase enterprise-level Salesforce Developer skills.

---

## Project Overview

The **Field Service Asset Maintenance Portal (FSAM)** helps organizations manage customer-owned assets, service requests, maintenance visits, engineer assignments, spare parts, and maintenance history through a modern Lightning Experience.

The project follows an Agile sprint-based development approach and demonstrates the complete Salesforce development lifecycle—from architecture and data modeling to integrations, testing, deployment, and documentation.

---

## Key Features

### Asset Management

- Manage customer-owned assets
- Asset search and filtering
- Warranty tracking
- Maintenance history

### Service Request Management

- Service request workspace
- Request summary
- Maintenance timeline
- Parts usage tracking

### Engineer Dashboard

- Assignment summary
- Today's schedule
- Open service requests
- Recent activities

### Inventory Management

- Spare parts inventory
- Low stock identification
- Inventory search
- Stock overview

### Platform Features

- Lightning App
- Dynamic Forms
- Dynamic Actions
- Permission Sets
- Reports & Dashboards
- Record-Triggered Flows

### Enterprise Features

- Layered Apex Architecture
- REST Integration
- Named Credentials
- External Credentials
- HttpCalloutMock
- CRUD/FLS Security
- Centralized Logging
- Custom Exceptions
- Test Data Factory

---

# Architecture

The application follows a layered enterprise architecture.

```text
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

### Architecture Principles

- Separation of Concerns
- Service Layer Pattern
- Selector Layer Pattern
- One Trigger Per Object
- Bulk-safe Apex
- Configuration before Code
- Flow before Apex
- Reusable Lightning Web Components
- Security-first development

---

# Technology Stack

## Development

- Salesforce DX
- Scratch Org
- Visual Studio Code
- Salesforce CLI
- Git
- GitHub

## Salesforce Platform

- Apex
- SOQL
- SOSL
- Trigger Framework
- Lightning Web Components (LWC)
- Record-Triggered Flows
- Dynamic Forms
- Dynamic Actions
- Reports & Dashboards
- Named Credentials
- External Credentials
- REST API
- Permission Sets

---

# Project Structure

```text
force-app/
│
├── classes/
│   ├── controllers/
│   ├── services/
│   ├── selectors/
│   ├── dto/
│   ├── handlers/
│   ├── utils/
│   ├── constants/
│   ├── exceptions/
│   └── tests/
│
├── lwc/
│   ├── dashboard/
│   ├── assetExplorer/
│   ├── serviceRequestWorkspace/
│   ├── engineerDashboard/
│   ├── inventoryWorkspace/
│   └── shared/
│
├── flows/
├── objects/
├── permissionsets/
├── flexipages/
└── triggers/

docs/
│
├── architecture/
├── apex/
├── integrations/
├── testing/
├── metadata/
└── sprint-documentation/
```

---

# Implemented Modules

## Dashboard

- KPI Cards
- Recent Service Requests
- Quick Actions

---

## Asset Explorer

- Asset Search
- Asset List
- Asset Details
- Maintenance History

---

## Service Request Workspace

- Request Summary
- Maintenance Timeline
- Parts Usage

---

## Engineer Dashboard

- Assignment Summary
- Today's Schedule
- Open Requests
- Recent Activities

---

## Inventory Workspace

- Inventory Summary
- Inventory Search
- Inventory Table

---

# Enterprise Apex Components

## Controllers

- Dashboard Controller
- Asset Explorer Controller
- Service Request Controller
- Engineer Dashboard Controller
- Inventory Controller

## Services

- Service Request Service
- Maintenance Visit Service
- Inventory Service
- Manufacturer Integration Service

## Selectors

- Customer Asset Selector
- Service Request Selector
- Maintenance Visit Selector
- Service Part Selector

## Utilities

- Logger
- Security Utility
- Constants
- Business Exceptions
- Integration Exceptions
- Test Data Factory

---

# Integration

The project includes an outbound REST integration using:

- Named Credentials
- External Credentials
- HttpCallout
- JSON Serialization/Deserialization
- HttpCalloutMock
- Exception Handling

---

# Testing

The project includes automated Apex tests for:

- Controllers
- Services
- Selectors
- Triggers
- REST Integration

### Current Code Coverage

- **87% Apex Code Coverage**

> Some test scenarios require additional setup to satisfy custom validation rules introduced in the application. These validation rules are functioning as intended and do not affect the implemented business logic.

---

# Documentation

Detailed project documentation is available under the **docs/** directory.

Included documentation:

- Architecture
- ADRs
- Apex Architecture
- LWC Architecture
- Integration Documentation
- Metadata Documentation
- Testing Documentation
- Sprint Documentation

---

# Deployment

Deployment instructions are available in:

```text
docs/deployment/
```

---

# Future Enhancements

- Replace mock controller data with live Salesforce records
- Add pagination using SOQL OFFSET or keyset pagination
- Add Platform Events for notifications
- Add Lightning Message Service
- Implement Custom Metadata driven configuration
- Add CI/CD pipeline using GitHub Actions
- Extend inventory reporting

---

# Author

**Ayush Walke**

Portfolio Salesforce Developer Project

---

# License

This project was created for learning, portfolio, and interview demonstration purposes.