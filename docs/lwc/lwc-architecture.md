# Lightning Web Components Architecture

## Overview

Sprint 6 introduces the Lightning Web Component (LWC) layer for the Field Service Asset Maintenance Portal (FSAM).

The objective is to provide a modern, reusable user interface built on top of the enterprise Apex architecture developed in previous sprints.

The frontend follows the same architectural principles as the backend:

- Component Reusability
- Separation of Concerns
- Configuration before Code
- Service Layer Pattern
- Single Responsibility Principle

---

# High-Level Architecture

```
Lightning App Page

        │

        ▼

Page-Level LWC

        │

        ▼

Reusable Child Components

        │

        ▼

Apex Controller

        │

        ▼

Service Layer

        │

        ▼

Selector Layer

        │

        ▼

Database
```

---

# Package Structure

```
force-app
└── main
    └── default
        ├── lwc
        │
        ├── dashboard
        ├── dashboardKpiCard
        ├── dashboardRecentRequests
        ├── dashboardQuickActions
        │
        ├── assetExplorer
        ├── assetSearch
        ├── assetList
        ├── assetDetails
        ├── assetMaintenanceHistory
        │
        ├── serviceRequestWorkspace
        ├── requestSummary
        ├── requestTimeline
        ├── partsUsage
        │
        ├── engineerDashboard
        ├── assignmentSummary
        ├── todaySchedule
        ├── openRequests
        │
        ├── inventoryWorkspace
        ├── inventoryTable
        ├── inventorySearch
        │
        └── shared
            ├── fsamStatusBadge
            ├── fsamSpinner
            ├── fsamToast
            ├── fsamSearchBar
            ├── fsamPagination
            ├── fsamEmptyState
            └── fsamErrorPanel
```

---

# Feature Modules

## Module 1

Dashboard

Components

- dashboard
- dashboardKpiCard
- dashboardRecentRequests
- dashboardQuickActions

---

## Module 2

Asset Explorer

Components

- assetExplorer
- assetSearch
- assetList
- assetDetails
- assetMaintenanceHistory

---

## Module 3

Service Request Workspace

Components

- serviceRequestWorkspace
- requestSummary
- requestTimeline
- partsUsage

---

## Module 4

Engineer Dashboard

Components

- engineerDashboard
- assignmentSummary
- todaySchedule
- openRequests
- recentActivity

---

## Module 5

Inventory Workspace

Components

- inventoryWorkspace
- inventoryTable
- inventorySearch

---

## Module 6

Shared Components

Components

- fsamStatusBadge
- fsamSpinner
- fsamToast
- fsamSearchBar
- fsamPagination
- fsamEmptyState
- fsamErrorPanel

---

# Planned Apex Controllers

Current Status

| Controller | Status |
|------------|--------|
| FSAM_ServiceRequestController | ✅ Implemented |
| FSAM_DashboardController | ✅ Implemented |
| FSAM_AssetExplorerController | ✅ Implemented |
| FSAM_EngineerDashboardController | ⏳ Planned |
| FSAM_InventoryController | ⏳ Planned |

Controllers will be introduced only when their corresponding feature module is implemented.

---

# Controller Responsibilities

## Dashboard Controller

- Dashboard KPIs
- Recent Service Requests
- Quick Action Data

---

## Asset Explorer Controller

- Asset Search
- Asset Details
- Asset History

---

## Service Request Controller

- Request Summary
- Timeline
- Parts Used

Status

Implemented

---

## Engineer Dashboard Controller

- Engineer Assignments
- Schedule
- Open Requests

---

## Inventory Controller

- Inventory Search
- Parts
- Low Stock

---

# Shared Component Library

The following components contain no business logic.

They are reusable presentation components.

- Status Badge
- Spinner
- Toast
- Search Bar
- Pagination
- Empty State
- Error Panel

---

# Development Order

Phase 1

Shared Components

1. fsamStatusBadge
2. fsamSpinner
3. fsamEmptyState
4. fsamSearchBar
5. fsamPagination
6. fsamToast
7. fsamErrorPanel

**Status:** ✅ Completed

---

Phase 2

Dashboard

**Status:** ✅ Completed

---

Phase 3

Asset Explorer

**Status:** ✅ Completed

---

Phase 4

Service Request Workspace

**Status:** ✅ Completed

---

Phase 5

Engineer Dashboard

---

Phase 6

Inventory Workspace

---

# Design Principles

- Small focused LWCs
- Reusable UI
- Thin Apex Controllers
- Business logic remains inside Service Layer
- SLDS-first styling
- Responsive layout
- Accessibility-first