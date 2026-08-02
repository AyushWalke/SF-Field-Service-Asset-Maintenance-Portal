# Engineer Dashboard Design

## Project

Field Service Asset Maintenance Portal (FSAM)

---

# Purpose

The Engineer Dashboard provides field engineers and service managers with an operational view of daily work.

It summarizes assignments, today's schedule, open service requests and recent activities.

---

# Target Users

Primary

- Field Engineer

Secondary

- Service Manager

---

# Business Goals

Provide a single screen to monitor:

- Assignment workload
- Today's visits
- Open requests
- Recent activity

---

# Component Hierarchy

```
fsamEngineerDashboard

│

├── fsamAssignmentSummary

├── fsamTodaySchedule

└── fsamOpenRequests
```

---

# Shared Components

- fsamStatusBadge
- fsamSpinner
- fsamEmptyState
- fsamErrorPanel
- dashboardKpiCard

---

# Planned Apex Controller

FSAM_EngineerDashboardController

Status

Planned

---

# Layout

```
----------------------------------------------------

Assignment Summary Cards

----------------------------------------------------

Today's Schedule      Open Requests

----------------------------------------------------

Recent Activity

----------------------------------------------------
```

---

# Component Responsibilities

## fsamEngineerDashboard

Responsibilities

- Load dashboard data
- Handle loading
- Handle errors
- Pass DTOs to child components

No business logic.

---

## fsamAssignmentSummary

Displays

- Today's Assignments
- In Progress
- Completed Today
- Overdue

---

## fsamTodaySchedule

Displays

- Visit Time
- Asset Location
- Service Request
- Status

---

## fsamOpenRequests

Displays

- Service Request
- Customer
- Status
- Priority

---

# Development Order

1. DTOs
2. Controller
3. Assignment Summary
4. Today Schedule
5. Open Requests
6. Engineer Dashboard
7. Lightning App Page