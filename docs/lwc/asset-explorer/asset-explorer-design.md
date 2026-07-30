# Asset Explorer Design Specification

## Project

Field Service Asset Maintenance Portal (FSAM)

---

# Document Information

| Item | Value |
|------|-------|
| Module | Asset Explorer |
| Sprint | Sprint 6 |
| Version | 1.0 |
| Status | Approved for Development |

---

# Purpose

The Asset Explorer enables Service Coordinators to search, browse and inspect customer-owned assets.

Users can quickly locate an asset and review its details and maintenance history without navigating between multiple pages.

---

# Target Users

Primary User

- Service Coordinator

Future Users

- Support Manager
- Field Engineer

---

# Business Goals

The Asset Explorer should allow users to:

- Search assets
- Browse asset list
- View asset details
- Review maintenance history

---

# Component Hierarchy

```
fsamAssetExplorer

│

├── fsamAssetSearch

├── fsamAssetList

├── fsamAssetDetails

└── fsamAssetMaintenanceHistory
```

---

# Shared Components Used

- fsamSearchBar
- fsamPagination
- fsamStatusBadge
- fsamSpinner
- fsamEmptyState
- fsamErrorPanel
- fsamToast (future)

---

# Layout

```
--------------------------------------------------

Search Bar

--------------------------------------------------

Asset List

--------------------------------------------------

Asset Details

--------------------------------------------------

Maintenance History

--------------------------------------------------
```

---

# Component Responsibilities

## fsamAssetExplorer

Responsibilities

- Load assets
- Handle loading state
- Handle errors
- Manage selected asset
- Pass data to child components

No business logic.

---

## fsamAssetSearch

Responsibilities

- Display search input
- Fire search event

No Apex.

---

## fsamAssetList

Responsibilities

- Display asset list
- Handle asset selection
- Display pagination

No Apex.

---

## fsamAssetDetails

Responsibilities

- Display asset information

No Apex.

---

## fsamAssetMaintenanceHistory

Responsibilities

- Display maintenance history

No Apex.

---

# Planned Apex Controller

Controller

FSAM_AssetExplorerController

Method

getAssets()

Returns

FSAM_AssetExplorerDTO

---

# Loading Flow

Asset Explorer Opens

↓

Show Spinner

↓

Call Apex

↓

Render Components

---

# Error Flow

Asset Explorer Opens

↓

Apex Error

↓

Show Error Panel

---

# Empty State

No Assets

↓

Show Empty State

---

# Development Order

1. DTOs
2. Controller
3. fsamAssetSearch
4. fsamAssetList
5. fsamAssetDetails
6. fsamAssetMaintenanceHistory
7. fsamAssetExplorer
8. Lightning App Page
9. Service Layer Integration