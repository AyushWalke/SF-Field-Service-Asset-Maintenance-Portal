# Sprint 8 – Testing & Quality

## Objective

Validate the application through automated Apex tests and manual functional verification.

---

## Automated Tests

### Controller Tests

- FSAM_DashboardControllerTest
- FSAM_AssetExplorerControllerTest
- FSAM_ServiceRequestControllerTest
- FSAM_EngineerDashboardControllerTest
- FSAM_InventoryControllerTest

### Service Tests

- FSAM_ServiceRequestServiceTest
- FSAM_MaintenanceVisitServiceTest
- FSAM_InventoryServiceTest

### Selector Tests

- FSAM_CustomerAssetSelectorTest
- FSAM_ServiceRequestSelectorTest
- FSAM_ServicePartSelectorTest
- FSAM_MaintenanceVisitSelectorTest

### Trigger Tests

- FSAM_ServiceRequestTriggerTest
- FSAM_MaintenanceVisitTriggerTest

### Integration Tests

- FSAM_ManufacturerIntegrationServiceTest

---

## Manual Validation

- Dashboard verified
- Asset Explorer verified
- Service Request Workspace verified
- Engineer Dashboard verified
- Inventory Workspace verified
- Shared LWC components verified

---

## Outcome

- Layered architecture validated.
- Business logic tested.
- Integration tested using HttpCalloutMock.
- Project ready for deployment documentation.