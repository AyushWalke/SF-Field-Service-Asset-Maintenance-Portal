# Dashboard Design Specification

## Project

Field Service Asset Maintenance Portal (FSAM)

---

# Document Information

| Item | Value |
|------|-------|
| Module | Dashboard |
| Sprint | Sprint 6 |
| Version | 1.0 |
| Status | Approved for Development |

---

# Purpose

The Dashboard is the landing page of the Field Service Asset Maintenance Portal.

It provides Service Coordinators with an overview of current operational activity, enabling them to quickly identify pending work, monitor service requests, and perform common actions.

The Dashboard is designed to answer three primary questions:

- What requires attention?
- What is currently happening?
- What should I do next?

---

# Target Users

Primary User

- Service Coordinator

Future Users

- Support Manager
- Field Service Manager

Version 1 focuses only on the Service Coordinator experience.

---

# Business Goals

The Dashboard should allow users to:

- View operational KPIs
- Monitor recently created Service Requests
- Navigate quickly to frequently used features
- Reduce navigation time between modules
- Provide an immediate overview of system health

---

# Dashboard Layout

```
---------------------------------------------------------

Field Service Asset Maintenance Portal

---------------------------------------------------------

KPI Cards

---------------------------------------------------------

Recent Service Requests

---------------------------------------------------------

Quick Actions

---------------------------------------------------------
```

---

# Component Hierarchy

```
fsamDashboard

│

├── fsamDashboardKpiCard

├── fsamDashboardRecentRequests

└── fsamDashboardQuickActions
```

The Dashboard itself contains minimal logic.

Each child component owns its own presentation.

Business logic remains inside Apex Services.

---

# Shared Components Used

## fsamStatusBadge

Used in:

- Recent Service Requests

Purpose:

Display standardized request status.

---

## fsamSpinner

Used while:

- Loading dashboard data

---

## fsamEmptyState

Displayed when:

- No recent service requests exist

---

## fsamErrorPanel

Displayed when:

- Dashboard data fails to load

---

## fsamToast

Used after future dashboard actions.

Example:

- Refresh completed
- Quick Action success

---

# Dashboard Sections

---

## Section 1

### KPI Cards

Purpose

Provide an operational summary.

Initial KPIs

- Open Requests
- In Progress Requests
- Completed Today
- Assets Under Maintenance

Displayed as four cards.

Each card contains:

- Icon
- Title
- Value

No charts in Version 1.

---

## Section 2

### Recent Service Requests

Purpose

Allow coordinators to quickly identify newly created work.

Columns

- Request Number
- Customer
- Asset
- Priority
- Status
- Created Date

Maximum rows

10

Each row:

Clickable.

Navigation added in a future iteration.

---

## Section 3

### Quick Actions

Purpose

Provide shortcuts for common activities.

Version 1

Buttons

- New Service Request
- View Assets
- View Inventory

Buttons only navigate.

Business functionality is implemented elsewhere.

---

# Component Responsibilities

## fsamDashboard

Responsibilities

- Load dashboard data
- Handle loading state
- Handle errors
- Pass data to child components

Does NOT

- Render KPI internals
- Render table rows
- Perform business logic

---

## fsamDashboardKpiCard

Responsibilities

- Display KPI value
- Display title
- Display icon

No Apex.

---

## fsamDashboardRecentRequests

Responsibilities

- Render recent requests table
- Display status badges
- Display empty state

No Apex.

---

## fsamDashboardQuickActions

Responsibilities

- Display action buttons
- Fire navigation events

No Apex.

---

# Planned Apex Controller

Status

Planned

Controller

FSAM_DashboardController

Purpose

Provide dashboard data to the UI.

Initial Methods

```
getDashboardSummary()

getRecentServiceRequests()
```

The controller will delegate to the Service Layer.

```
Dashboard

↓

Dashboard Controller

↓

Dashboard Service

↓

Selectors

↓

Database
```

---

# Loading Flow

```
Dashboard Opens

↓

Show fsamSpinner

↓

Call Apex

↓

Data Loaded

↓

Hide Spinner

↓

Render Dashboard
```

---

# Error Flow

```
Dashboard Opens

↓

Apex Exception

↓

Hide Spinner

↓

Show fsamErrorPanel
```

---

# Empty State Flow

```
Recent Requests

↓

No Records

↓

Show fsamEmptyState
```

---

# Event Flow

```
Quick Action Click

↓

Custom Event

↓

Dashboard

↓

Navigation Service
```

---

# Data Requirements

## KPI Cards

Requires

- Open Request Count
- In Progress Count
- Completed Today Count
- Assets Under Maintenance Count

---

## Recent Requests

Requires

- Request Number
- Customer Name
- Asset Name
- Priority
- Status
- Created Date

---

## Quick Actions

Static configuration.

No server data required.

---

# Performance Considerations

- Load all dashboard data in a single initialization sequence.
- Avoid unnecessary server requests.
- Reuse shared components whenever possible.
- Display loading indicators immediately.
- Handle empty and error states gracefully.

---

# Accessibility

- SLDS-first implementation
- Keyboard-accessible buttons
- Screen reader friendly labels
- High-contrast status badges
- Responsive layout

---

# Future Enhancements

Potential Version 2 enhancements include:

- Charts
- Upcoming Maintenance Visits
- Low Inventory Alerts
- SLA Breach Indicators
- Recent Engineer Activity
- Dashboard Filters
- Refresh Action
- Configurable KPI Cards

These enhancements are intentionally deferred to keep Version 1 focused and maintainable.

---

# Development Order

1. Build `fsamDashboardKpiCard`
2. Build `fsamDashboardRecentRequests`
3. Build `fsamDashboardQuickActions`
4. Build `fsamDashboard`
5. Implement `FSAM_DashboardController`
6. Connect UI to Apex
7. Test loading, empty, and error states

---

# Definition of Done

The Dashboard is considered complete when:

- KPI cards display live data.
- Recent Service Requests render correctly.
- Status badges use `fsamStatusBadge`.
- Loading uses `fsamSpinner`.
- Empty results use `fsamEmptyState`.
- Errors use `fsamErrorPanel`.
- Quick Actions are functional.
- All components use SLDS.
- The Dashboard contains no business logic.
- All Apex interactions occur through `FSAM_DashboardController`.