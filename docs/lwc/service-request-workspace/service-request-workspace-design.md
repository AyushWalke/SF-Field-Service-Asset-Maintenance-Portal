# Service Request Workspace Design

## Project

Field Service Asset Maintenance Portal (FSAM)

---

# Purpose

The Service Request Workspace provides a centralized view of a service request.

Users can review request details, view the service timeline and inspect the spare parts used during maintenance without navigating to multiple record pages.

---

# Target Users

- Service Coordinator
- Service Manager
- Field Engineer

---

# Component Hierarchy

```
fsamServiceRequestWorkspace

│

├── fsamRequestSummary

├── fsamRequestTimeline

└── fsamPartsUsage
```

---

# Shared Components

- fsamStatusBadge
- fsamSpinner
- fsamEmptyState
- fsamErrorPanel
- fsamToast

---

# Planned Apex Controller

FSAM_ServiceRequestController

Status

Implemented

---

# Layout

```
---------------------------------------

Request Summary

---------------------------------------

Timeline

---------------------------------------

Parts Used

---------------------------------------
```

---

# Component Responsibilities

## fsamServiceRequestWorkspace

- Load request
- Handle loading
- Handle errors
- Pass DTOs to child components

---

## fsamRequestSummary

Displays

- Subject
- Priority
- Status
- Asset
- Customer
- Engineer
- SLA Due Date

---

## fsamRequestTimeline

Displays

- Service timeline
- Visits
- Engineer assignments

---

## fsamPartsUsage

Displays

- Parts consumed
- Quantity
- Cost

---

# Development Order

1. DTO Review
2. Request Summary
3. Timeline
4. Parts Usage
5. Workspace
6. Lightning App Page
7. Service Layer Integration