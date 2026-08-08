# Demo Guide

## Project

**Field Service Asset Maintenance Portal (FSAM)**

---

# Purpose

This guide provides a structured walkthrough of the Field Service Asset Maintenance Portal (FSAM) application for demonstrations, portfolio reviews, and technical interviews.

The recommended demo duration is **15–20 minutes**.

---

# Demo Flow

The application should be demonstrated in the following order:

1. Project Overview
2. Application Architecture
3. Dashboard
4. Asset Explorer
5. Service Request Workspace
6. Engineer Dashboard
7. Inventory Workspace
8. Platform Configuration
9. Apex Architecture
10. Integration
11. Testing
12. Future Enhancements

---

# 1. Project Overview

### Objective

Demonstrate an enterprise-style Salesforce application that manages:

- Customer Assets
- Service Requests
- Maintenance Visits
- Engineer Assignments
- Spare Parts Inventory
- Maintenance History

### Technology Stack

- Salesforce DX
- Apex
- Lightning Web Components
- Record-Triggered Flows
- REST Integration
- Named Credentials
- Salesforce CLI
- Git & GitHub

---

# 2. Application Architecture

Explain the layered architecture used throughout the project.

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

### Key Design Principles

- Separation of Concerns
- Configuration before Code
- Flow before Apex
- Reusable Components
- Enterprise Apex Patterns
- Bulk-safe Development
- Security-first Design

---

# 3. Dashboard

Open the **FSAM Dashboard** Lightning App Page.

### Demonstrate

- KPI Cards
- Recent Service Requests
- Quick Actions
- Responsive layout

### Explain

- Page-level LWC
- Child component composition
- Dashboard DTO
- Dashboard Controller

---

# 4. Asset Explorer

Open the **Asset Explorer** page.

### Demonstrate

- Asset Search
- Asset List
- Asset Details
- Maintenance History

### Explain

- Two-column responsive layout
- Parent-child communication
- Reusable search component
- DTO-based data transfer

---

# 5. Service Request Workspace

Open the **Service Request Workspace**.

### Demonstrate

- Request Summary
- Maintenance Timeline
- Parts Usage

### Explain

- Workspace layout
- Timeline component
- Component composition
- Service Request Controller

---

# 6. Engineer Dashboard

Open the **Engineer Dashboard**.

### Demonstrate

- Assignment Summary
- Today's Schedule
- Open Requests
- Recent Activities

### Explain

- Dashboard-style layout
- Multiple reusable child LWCs
- Engineer Dashboard DTO

---

# 7. Inventory Workspace

Open the **Inventory Workspace**.

### Demonstrate

- Inventory Summary
- Inventory Search
- Inventory Table

### Explain

- Search functionality
- Table component
- Inventory Controller
- Inventory DTOs

---

# 8. Platform Configuration

Navigate through Salesforce Setup.

### Demonstrate

- Lightning App
- Navigation Tabs
- Dynamic Forms
- Dynamic Actions
- Permission Sets
- Reports
- Dashboards

Explain how configuration was preferred over custom code wherever possible.

---

# 9. Apex Architecture

Open the project in Visual Studio Code.

Explain the project structure.

```text
Controllers
    │
Services
    │
Selectors
    │
Database
```

### Demonstrate

- Controller Layer
- Service Layer
- Selector Layer
- Trigger Framework
- DTO Pattern
- Utility Classes
- Constants
- Custom Exceptions

Highlight that business logic resides in the Service Layer while Controllers remain thin.

---

# 10. Integration

Open the Integration classes.

### Demonstrate

- Named Credential
- External Credential
- Manufacturer Integration Service
- HttpCalloutMock

Explain:

- REST callout flow
- JSON deserialization
- Exception handling
- Mock testing

---

# 11. Testing

Open the Apex Test Classes.

### Demonstrate

- Controller Tests
- Service Tests
- Selector Tests
- Trigger Tests
- Integration Tests

### Mention

- Approximately **87% Apex Code Coverage**
- Shared Test Data Factory
- Layer-specific testing approach

Also explain that a small number of tests require additional setup because of custom validation rules.

---

# 12. Future Enhancements

Discuss how the project can evolve.

Planned improvements include:

- Replace mock DTO data with live Salesforce records
- Lightning Message Service
- Platform Events
- Custom Metadata-driven configuration
- CI/CD using GitHub Actions
- Enhanced analytics and reporting

---

# Key Technical Highlights

During the demonstration, emphasize:

- Enterprise Apex Architecture
- Salesforce DX project structure
- Reusable Lightning Web Components
- Layered design pattern
- Security-first implementation
- REST integration
- Automated testing
- Comprehensive documentation

---

# Interview Talking Points

Be prepared to discuss:

- Why a layered architecture was chosen
- Benefits of the Service and Selector patterns
- Why DTOs were introduced
- LWC component communication
- Record-Triggered Flows vs Apex
- CRUD/FLS enforcement
- Mock integrations
- Testing strategy
- Trade-offs between mock data and live data
- Future roadmap for Version 2

---

# Demo Checklist

Before starting a demonstration, verify:

- Lightning App is accessible
- All Lightning App Pages load correctly
- Named Credential is configured
- Permission Set is assigned
- Apex tests execute successfully
- Sample records are available (if demonstrating with live data)

---

# Demo Outcome

By the end of the demonstration, the audience should understand:

- The overall architecture
- The implemented business functionality
- The Salesforce platform capabilities used
- The development approach
- The testing strategy
- The scalability of the solution

This project demonstrates the skills expected of a Salesforce Developer working on enterprise applications using modern Salesforce development practices.