window.FSAM_DATA = {
  "project": {
    "name": "Field Service Asset Maintenance Portal (FSAM)",
    "version": "1.0",
    "apiVersion": "66.0",
    "repo": "https://github.com/AyushWalke/SF-Field-Service-Asset-Maintenance-Portal",
    "coverage": "87% (documented)",
    "note": "Portfolio/demo site generated from the uploaded repository."
  },
  "counts": {
    "files": 516,
    "apexClasses": 62,
    "triggers": 2,
    "lwcs": 28,
    "objects": 6,
    "flows": 6,
    "flexipages": 11,
    "reports": 6,
    "dashboards": 2,
    "permissionSets": 1,
    "permissionSetGroups": 2,
    "profiles": 2
  },
  "classes": [
    {
      "name": "FSAM_InventoryInvocable",
      "path": "FSAM_InventoryInvocable.cls",
      "kind": "Apex Class",
      "methods": [
        "updateInventory"
      ]
    },
    {
      "name": "FSAM_Constants",
      "path": "constants/FSAM_Constants.cls",
      "kind": "Utility",
      "methods": []
    },
    {
      "name": "FSAM_AssetExplorerController",
      "path": "controllers/FSAM_AssetExplorerController.cls",
      "kind": "Controller",
      "methods": [
        "getAssets",
        "createAsset",
        "createMaintenanceHistory"
      ]
    },
    {
      "name": "FSAM_DashboardController",
      "path": "controllers/FSAM_DashboardController.cls",
      "kind": "Controller",
      "methods": [
        "getDashboard"
      ]
    },
    {
      "name": "FSAM_EngineerDashboardController",
      "path": "controllers/FSAM_EngineerDashboardController.cls",
      "kind": "Controller",
      "methods": [
        "getEngineerDashboard",
        "createSchedule",
        "createOpenRequest",
        "createRecentActivity"
      ]
    },
    {
      "name": "FSAM_InventoryController",
      "path": "controllers/FSAM_InventoryController.cls",
      "kind": "Controller",
      "methods": [
        "getInventoryWorkspace",
        "createInventoryItem"
      ]
    },
    {
      "name": "FSAM_ServiceRequestController",
      "path": "controllers/FSAM_ServiceRequestController.cls",
      "kind": "Controller",
      "methods": [
        "getServiceRequest",
        "createTimeline",
        "createPart"
      ]
    },
    {
      "name": "FSAM_AssetDTO",
      "path": "dto/FSAM_AssetDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_AssetExplorerDTO",
      "path": "dto/FSAM_AssetExplorerDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_AssetMaintenanceHistoryDTO",
      "path": "dto/FSAM_AssetMaintenanceHistoryDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_AssetSummaryDTO",
      "path": "dto/FSAM_AssetSummaryDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_AssignmentSummaryDTO",
      "path": "dto/FSAM_AssignmentSummaryDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_DashboardDTO",
      "path": "dto/FSAM_DashboardDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_DashboardSummaryDTO",
      "path": "dto/FSAM_DashboardSummaryDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_EngineerDashboardDTO",
      "path": "dto/FSAM_EngineerDashboardDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_InventoryItemDTO",
      "path": "dto/FSAM_InventoryItemDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_InventorySearchDTO",
      "path": "dto/FSAM_InventorySearchDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_InventorySummaryDTO",
      "path": "dto/FSAM_InventorySummaryDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_InventoryWorkspaceDTO",
      "path": "dto/FSAM_InventoryWorkspaceDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_OpenRequestDTO",
      "path": "dto/FSAM_OpenRequestDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_PartUsageDTO",
      "path": "dto/FSAM_PartUsageDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_RecentActivityDTO",
      "path": "dto/FSAM_RecentActivityDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_RecentRequestDTO",
      "path": "dto/FSAM_RecentRequestDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_RequestSummaryDTO",
      "path": "dto/FSAM_RequestSummaryDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_RequestTimelineDTO",
      "path": "dto/FSAM_RequestTimelineDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_ServiceRequestWorkspaceDTO",
      "path": "dto/FSAM_ServiceRequestWorkspaceDTO.cls",
      "kind": "Service / Integration",
      "methods": []
    },
    {
      "name": "FSAM_TodayScheduleDTO",
      "path": "dto/FSAM_TodayScheduleDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_BusinessException",
      "path": "exceptions/FSAM_BusinessException.cls",
      "kind": "Exception",
      "methods": []
    },
    {
      "name": "FSAM_TriggerHandler",
      "path": "framework/FSAM_TriggerHandler.cls",
      "kind": "Trigger Handler",
      "methods": [
        "beforeInsert",
        "beforeUpdate",
        "beforeDelete",
        "afterInsert",
        "afterUpdate",
        "afterDelete",
        "afterUndelete",
        "run"
      ]
    },
    {
      "name": "FSAM_MaintenanceVisitTriggerHandler",
      "path": "handlers/FSAM_MaintenanceVisitTriggerHandler.cls",
      "kind": "Trigger Handler",
      "methods": [
        "beforeInsert"
      ]
    },
    {
      "name": "FSAM_ServiceRequestTriggerHandler",
      "path": "handlers/FSAM_ServiceRequestTriggerHandler.cls",
      "kind": "Service / Integration",
      "methods": [
        "beforeUpdate"
      ]
    },
    {
      "name": "FSAM_IntegrationException",
      "path": "integrations/FSAM_IntegrationException.cls",
      "kind": "Exception",
      "methods": []
    },
    {
      "name": "FSAM_ManufacturerCalloutMock",
      "path": "integrations/FSAM_ManufacturerCalloutMock.cls",
      "kind": "Callout Mock",
      "methods": [
        "respond"
      ]
    },
    {
      "name": "FSAM_ManufacturerErrorCalloutMock",
      "path": "integrations/FSAM_ManufacturerErrorCalloutMock.cls",
      "kind": "Callout Mock",
      "methods": [
        "respond"
      ]
    },
    {
      "name": "FSAM_ManufacturerIntegrationService",
      "path": "integrations/FSAM_ManufacturerIntegrationService.cls",
      "kind": "Service / Integration",
      "methods": [
        "getManufacturerInformation"
      ]
    },
    {
      "name": "FSAM_ManufacturerIntegrationServiceTest",
      "path": "integrations/FSAM_ManufacturerIntegrationServiceTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_ManufacturerInvalidJsonCalloutMock",
      "path": "integrations/FSAM_ManufacturerInvalidJsonCalloutMock.cls",
      "kind": "Callout Mock",
      "methods": [
        "respond"
      ]
    },
    {
      "name": "FSAM_ManufacturerResponseDTO",
      "path": "integrations/FSAM_ManufacturerResponseDTO.cls",
      "kind": "DTO",
      "methods": []
    },
    {
      "name": "FSAM_CustomerAssetSelector",
      "path": "selectors/FSAM_CustomerAssetSelector.cls",
      "kind": "Selector",
      "methods": [
        "getByIds",
        "getActiveAssets"
      ]
    },
    {
      "name": "FSAM_MaintenanceVisitSelector",
      "path": "selectors/FSAM_MaintenanceVisitSelector.cls",
      "kind": "Selector",
      "methods": [
        "getById"
      ]
    },
    {
      "name": "FSAM_ServicePartSelector",
      "path": "selectors/FSAM_ServicePartSelector.cls",
      "kind": "Selector",
      "methods": [
        "getByIds",
        "getLowStockParts"
      ]
    },
    {
      "name": "FSAM_ServiceRequestSelector",
      "path": "selectors/FSAM_ServiceRequestSelector.cls",
      "kind": "Selector",
      "methods": [
        "getByIds",
        "getByStatus",
        "getOpenRequests"
      ]
    },
    {
      "name": "FSAM_InventoryService",
      "path": "services/FSAM_InventoryService.cls",
      "kind": "Service / Integration",
      "methods": [
        "decreaseInventory",
        "getLowStockParts"
      ]
    },
    {
      "name": "FSAM_MaintenanceVisitService",
      "path": "services/FSAM_MaintenanceVisitService.cls",
      "kind": "Service / Integration",
      "methods": [
        "completeVisit",
        "scheduleVisit"
      ]
    },
    {
      "name": "FSAM_ServiceRequestService",
      "path": "services/FSAM_ServiceRequestService.cls",
      "kind": "Service / Integration",
      "methods": [
        "closeRequests",
        "updateStatus",
        "getOpenRequests"
      ]
    },
    {
      "name": "FSAM_TestDataFactory",
      "path": "testdata/FSAM_TestDataFactory.cls",
      "kind": "Test Data Factory",
      "methods": [
        "createAccount",
        "createContact",
        "createCustomerAsset",
        "createServiceRequest",
        "createServicePart",
        "createMaintenanceVisit"
      ]
    },
    {
      "name": "FSAM_AssetExplorerControllerTest",
      "path": "tests/FSAM_AssetExplorerControllerTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_CustomerAssetSelectorTest",
      "path": "tests/FSAM_CustomerAssetSelectorTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_DashboardControllerTest",
      "path": "tests/FSAM_DashboardControllerTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_EngineerDashboardControllerTest",
      "path": "tests/FSAM_EngineerDashboardControllerTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_InventoryControllerTest",
      "path": "tests/FSAM_InventoryControllerTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_InventoryServiceTest",
      "path": "tests/FSAM_InventoryServiceTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_MaintenanceVisitSelectorTest",
      "path": "tests/FSAM_MaintenanceVisitSelectorTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_MaintenanceVisitServiceTest",
      "path": "tests/FSAM_MaintenanceVisitServiceTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_MaintenanceVisitTriggerTest",
      "path": "tests/FSAM_MaintenanceVisitTriggerTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_ServicePartSelectorTest",
      "path": "tests/FSAM_ServicePartSelectorTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_ServiceRequestControllerTest",
      "path": "tests/FSAM_ServiceRequestControllerTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_ServiceRequestSelectorTest",
      "path": "tests/FSAM_ServiceRequestSelectorTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_ServiceRequestServiceTest",
      "path": "tests/FSAM_ServiceRequestServiceTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_ServiceRequestTriggerTest",
      "path": "tests/FSAM_ServiceRequestTriggerTest.cls",
      "kind": "Test Class",
      "methods": []
    },
    {
      "name": "FSAM_Logger",
      "path": "utils/FSAM_Logger.cls",
      "kind": "Utility",
      "methods": [
        "info",
        "warn",
        "error"
      ]
    },
    {
      "name": "FSAM_SecurityUtil",
      "path": "utils/FSAM_SecurityUtil.cls",
      "kind": "Utility",
      "methods": [
        "canRead",
        "canCreate",
        "canUpdate",
        "canDelete",
        "canReadField",
        "canCreateField",
        "canUpdateField",
        "stripInaccessibleForCreate",
        "stripInaccessibleForUpdate"
      ]
    }
  ],
  "triggers": [
    {
      "name": "FSAM_MaintenanceVisitTrigger",
      "path": "force-app/main/default/triggers/FSAM_MaintenanceVisitTrigger.trigger",
      "definition": "trigger FSAM_MaintenanceVisitTrigger on FSAM_Maintenance_Visit__c (before insert, before update, before delete, after insert, after update, after delete, after undelete)"
    },
    {
      "name": "FSAM_ServiceRequestTrigger",
      "path": "force-app/main/default/triggers/FSAM_ServiceRequestTrigger.trigger",
      "definition": "trigger FSAM_ServiceRequestTrigger on FSAM_Service_Request__c (before insert, before update, before delete, after insert, after update, after delete, after undelete)"
    }
  ],
  "lwcs": [
    {
      "name": "fsamAssetDetails",
      "files": [
        "fsamAssetDetails.css",
        "fsamAssetDetails.html",
        "fsamAssetDetails.js",
        "fsamAssetDetails.js-meta.xml"
      ]
    },
    {
      "name": "fsamAssetExplorer",
      "files": [
        "fsamAssetExplorer.css",
        "fsamAssetExplorer.html",
        "fsamAssetExplorer.js",
        "fsamAssetExplorer.js-meta.xml"
      ]
    },
    {
      "name": "fsamAssetList",
      "files": [
        "fsamAssetList.css",
        "fsamAssetList.html",
        "fsamAssetList.js",
        "fsamAssetList.js-meta.xml"
      ]
    },
    {
      "name": "fsamAssetMaintenanceHistory",
      "files": [
        "fsamAssetMaintenanceHistory.css",
        "fsamAssetMaintenanceHistory.html",
        "fsamAssetMaintenanceHistory.js",
        "fsamAssetMaintenanceHistory.js-meta.xml"
      ]
    },
    {
      "name": "fsamAssetSearch",
      "files": [
        "fsamAssetSearch.css",
        "fsamAssetSearch.html",
        "fsamAssetSearch.js",
        "fsamAssetSearch.js-meta.xml"
      ]
    },
    {
      "name": "fsamAssignmentSummary",
      "files": [
        "fsamAssignmentSummary.css",
        "fsamAssignmentSummary.html",
        "fsamAssignmentSummary.js",
        "fsamAssignmentSummary.js-meta.xml"
      ]
    },
    {
      "name": "fsamDashboard",
      "files": [
        "fsamDashboard.css",
        "fsamDashboard.html",
        "fsamDashboard.js",
        "fsamDashboard.js-meta.xml"
      ]
    },
    {
      "name": "fsamDashboardKpiCard",
      "files": [
        "fsamDashboardKpiCard.css",
        "fsamDashboardKpiCard.html",
        "fsamDashboardKpiCard.js",
        "fsamDashboardKpiCard.js-meta.xml"
      ]
    },
    {
      "name": "fsamDashboardQuickActions",
      "files": [
        "fsamDashboardQuickActions.css",
        "fsamDashboardQuickActions.html",
        "fsamDashboardQuickActions.js",
        "fsamDashboardQuickActions.js-meta.xml"
      ]
    },
    {
      "name": "fsamDashboardRecentRequests",
      "files": [
        "fsamDashboardRecentRequests.css",
        "fsamDashboardRecentRequests.html",
        "fsamDashboardRecentRequests.js",
        "fsamDashboardRecentRequests.js-meta.xml"
      ]
    },
    {
      "name": "fsamEmptyState",
      "files": [
        "fsamEmptyState.css",
        "fsamEmptyState.html",
        "fsamEmptyState.js",
        "fsamEmptyState.js-meta.xml"
      ]
    },
    {
      "name": "fsamEngineerDashboard",
      "files": [
        "fsamEngineerDashboard.css",
        "fsamEngineerDashboard.html",
        "fsamEngineerDashboard.js",
        "fsamEngineerDashboard.js-meta.xml"
      ]
    },
    {
      "name": "fsamErrorPanel",
      "files": [
        "fsamErrorPanel.css",
        "fsamErrorPanel.html",
        "fsamErrorPanel.js",
        "fsamErrorPanel.js-meta.xml"
      ]
    },
    {
      "name": "fsamInventorySearch",
      "files": [
        "fsamInventorySearch.css",
        "fsamInventorySearch.html",
        "fsamInventorySearch.js",
        "fsamInventorySearch.js-meta.xml"
      ]
    },
    {
      "name": "fsamInventoryTable",
      "files": [
        "fsamInventoryTable.css",
        "fsamInventoryTable.html",
        "fsamInventoryTable.js",
        "fsamInventoryTable.js-meta.xml"
      ]
    },
    {
      "name": "fsamInventoryWorkspace",
      "files": [
        "fsamInventoryWorkspace.css",
        "fsamInventoryWorkspace.html",
        "fsamInventoryWorkspace.js",
        "fsamInventoryWorkspace.js-meta.xml"
      ]
    },
    {
      "name": "fsamOpenRequests",
      "files": [
        "fsamOpenRequests.css",
        "fsamOpenRequests.html",
        "fsamOpenRequests.js",
        "fsamOpenRequests.js-meta.xml"
      ]
    },
    {
      "name": "fsamPagination",
      "files": [
        "fsamPagination.css",
        "fsamPagination.html",
        "fsamPagination.js",
        "fsamPagination.js-meta.xml"
      ]
    },
    {
      "name": "fsamPartsUsage",
      "files": [
        "fsamPartsUsage.css",
        "fsamPartsUsage.html",
        "fsamPartsUsage.js",
        "fsamPartsUsage.js-meta.xml"
      ]
    },
    {
      "name": "fsamRecentActivity",
      "files": [
        "fsamRecentActivity.css",
        "fsamRecentActivity.html",
        "fsamRecentActivity.js",
        "fsamRecentActivity.js-meta.xml"
      ]
    },
    {
      "name": "fsamRequestSummary",
      "files": [
        "fsamRequestSummary.css",
        "fsamRequestSummary.html",
        "fsamRequestSummary.js",
        "fsamRequestSummary.js-meta.xml"
      ]
    },
    {
      "name": "fsamRequestTimeline",
      "files": [
        "fsamRequestTimeline.css",
        "fsamRequestTimeline.html",
        "fsamRequestTimeline.js",
        "fsamRequestTimeline.js-meta.xml"
      ]
    },
    {
      "name": "fsamSearchBar",
      "files": [
        "fsamSearchBar.css",
        "fsamSearchBar.html",
        "fsamSearchBar.js",
        "fsamSearchBar.js-meta.xml"
      ]
    },
    {
      "name": "fsamServiceRequestWorkspace",
      "files": [
        "fsamServiceRequestWorkspace.css",
        "fsamServiceRequestWorkspace.html",
        "fsamServiceRequestWorkspace.js",
        "fsamServiceRequestWorkspace.js-meta.xml"
      ]
    },
    {
      "name": "fsamSpinner",
      "files": [
        "fsamSpinner.css",
        "fsamSpinner.html",
        "fsamSpinner.js",
        "fsamSpinner.js-meta.xml"
      ]
    },
    {
      "name": "fsamStatusBadge",
      "files": [
        "fsamStatusBadge.css",
        "fsamStatusBadge.html",
        "fsamStatusBadge.js",
        "fsamStatusBadge.js-meta.xml"
      ]
    },
    {
      "name": "fsamToast",
      "files": [
        "fsamToast.css",
        "fsamToast.html",
        "fsamToast.js",
        "fsamToast.js-meta.xml"
      ]
    },
    {
      "name": "fsamTodaySchedule",
      "files": [
        "fsamTodaySchedule.css",
        "fsamTodaySchedule.html",
        "fsamTodaySchedule.js",
        "fsamTodaySchedule.js-meta.xml"
      ]
    }
  ],
  "objects": [
    {
      "name": "FSAM_Customer_Asset__c",
      "fields": [
        {
          "name": "FSAM_Account__c",
          "type": "Lookup",
          "referenceTo": "Account",
          "label": "Account"
        },
        {
          "name": "FSAM_Asset_Name__c",
          "type": "Text",
          "referenceTo": "",
          "label": "Asset Name"
        },
        {
          "name": "FSAM_Asset_Type__c",
          "type": "Picklist",
          "referenceTo": "",
          "label": "Asset Type"
        },
        {
          "name": "FSAM_City__c",
          "type": "Text",
          "referenceTo": "",
          "label": "City"
        },
        {
          "name": "FSAM_Country__c",
          "type": "Text",
          "referenceTo": "",
          "label": "Country"
        },
        {
          "name": "FSAM_External_Asset_ID__c",
          "type": "Text",
          "referenceTo": "",
          "label": "External Asset ID"
        },
        {
          "name": "FSAM_Installation_Date__c",
          "type": "Date",
          "referenceTo": "",
          "label": "Installation Date"
        },
        {
          "name": "FSAM_Location_Notes__c",
          "type": "LongTextArea",
          "referenceTo": "",
          "label": "Location Notes"
        },
        {
          "name": "FSAM_Model_Number__c",
          "type": "Text",
          "referenceTo": "",
          "label": "Model Number"
        },
        {
          "name": "FSAM_Postal_Code__c",
          "type": "Text",
          "referenceTo": "",
          "label": "Postal Code"
        },
        {
          "name": "FSAM_Serial_Number__c",
          "type": "Text",
          "referenceTo": "",
          "label": "Serial Number"
        },
        {
          "name": "FSAM_Service_Contact__c",
          "type": "Lookup",
          "referenceTo": "Contract",
          "label": "Service Contact"
        },
        {
          "name": "FSAM_State__c",
          "type": "Text",
          "referenceTo": "",
          "label": "State"
        },
        {
          "name": "FSAM_Status__c",
          "type": "Picklist",
          "referenceTo": "",
          "label": "Status"
        },
        {
          "name": "FSAM_Street__c",
          "type": "Text",
          "referenceTo": "",
          "label": "Street"
        },
        {
          "name": "FSAM_Warranty_Active__c",
          "type": "Checkbox",
          "referenceTo": "",
          "label": "Warranty Active"
        },
        {
          "name": "FSAM_Warranty_End_Date__c",
          "type": "Date",
          "referenceTo": "",
          "label": "Warranty End Date"
        },
        {
          "name": "FSAM_Warranty_Start_Date__c",
          "type": "Date",
          "referenceTo": "",
          "label": "Warranty Start Date"
        }
      ],
      "fieldCount": 18
    },
    {
      "name": "FSAM_Engineer_Assignment__c",
      "fields": [
        {
          "name": "FSAM_Accepted_Date__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Accepted Date"
        },
        {
          "name": "FSAM_Assigned_Date__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Assigned Date"
        },
        {
          "name": "FSAM_Assignment_Notes__c",
          "type": "LongTextArea",
          "referenceTo": "",
          "label": "Assignment Notes"
        },
        {
          "name": "FSAM_Assignment_Status__c",
          "type": "Picklist",
          "referenceTo": "",
          "label": "Assignment Status"
        },
        {
          "name": "FSAM_Completed_Date__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Completed Date"
        },
        {
          "name": "FSAM_Engineer__c",
          "type": "Lookup",
          "referenceTo": "User",
          "label": "Engineer"
        },
        {
          "name": "FSAM_Service_Request__c",
          "type": "MasterDetail",
          "referenceTo": "FSAM_Service_Request__c",
          "label": "Service Request"
        }
      ],
      "fieldCount": 7
    },
    {
      "name": "FSAM_Maintenance_Visit__c",
      "fields": [
        {
          "name": "FSAM_Actual_End__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Actual End"
        },
        {
          "name": "FSAM_Actual_Start__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Actual Start"
        },
        {
          "name": "FSAM_Engineer_Notes__c",
          "type": "LongTextArea",
          "referenceTo": "",
          "label": "Engineer Notes"
        },
        {
          "name": "FSAM_Engineer__c",
          "type": "Lookup",
          "referenceTo": "User",
          "label": "Engineer"
        },
        {
          "name": "FSAM_Scheduled_End__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Scheduled End"
        },
        {
          "name": "FSAM_Scheduled_Start__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Scheduled Start"
        },
        {
          "name": "FSAM_Service_Request__c",
          "type": "MasterDetail",
          "referenceTo": "FSAM_Service_Request__c",
          "label": "Service Request"
        },
        {
          "name": "FSAM_Visit_Status__c",
          "type": "Picklist",
          "referenceTo": "",
          "label": "Visit Status"
        },
        {
          "name": "FSAM_Visit_Type__c",
          "type": "Picklist",
          "referenceTo": "",
          "label": "Visit Type"
        },
        {
          "name": "FSAM_Work_Performed__c",
          "type": "LongTextArea",
          "referenceTo": "",
          "label": "Work Performed"
        }
      ],
      "fieldCount": 10
    },
    {
      "name": "FSAM_Part_Replacement__c",
      "fields": [
        {
          "name": "FSAM_Notes__c",
          "type": "LongTextArea",
          "referenceTo": "",
          "label": "Notes"
        },
        {
          "name": "FSAM_Quantity__c",
          "type": "Number",
          "referenceTo": "",
          "label": "Quantity"
        },
        {
          "name": "FSAM_Replacement_Date__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Replacement Date"
        },
        {
          "name": "FSAM_Service_Part__c",
          "type": "Lookup",
          "referenceTo": "FSAM_Service_Part__c",
          "label": "Service Part"
        },
        {
          "name": "FSAM_Service_Request__c",
          "type": "MasterDetail",
          "referenceTo": "FSAM_Service_Request__c",
          "label": "Service Request"
        },
        {
          "name": "FSAM_Total_Cost__c",
          "type": "Currency",
          "referenceTo": "",
          "label": "Total Cost"
        },
        {
          "name": "FSAM_Unit_Cost__c",
          "type": "Currency",
          "referenceTo": "",
          "label": "Unit Cost"
        }
      ],
      "fieldCount": 7
    },
    {
      "name": "FSAM_Service_Part__c",
      "fields": [
        {
          "name": "FSAM_Active__c",
          "type": "Checkbox",
          "referenceTo": "",
          "label": "Active"
        },
        {
          "name": "FSAM_Available_Quantity__c",
          "type": "Number",
          "referenceTo": "",
          "label": "Available Quantity"
        },
        {
          "name": "FSAM_External_Part_ID__c",
          "type": "Text",
          "referenceTo": "",
          "label": "External Part ID"
        },
        {
          "name": "FSAM_Manufacturer__c",
          "type": "Text",
          "referenceTo": "",
          "label": "Manufacturer"
        },
        {
          "name": "FSAM_Minimum_Stock_Level__c",
          "type": "Number",
          "referenceTo": "",
          "label": "Minimum Stock Level"
        },
        {
          "name": "FSAM_Part_Name__c",
          "type": "Text",
          "referenceTo": "",
          "label": "Part Name"
        },
        {
          "name": "FSAM_Reorder_Required__c",
          "type": "Checkbox",
          "referenceTo": "",
          "label": "Reorder Required"
        },
        {
          "name": "FSAM_Unit_Cost__c",
          "type": "Currency",
          "referenceTo": "",
          "label": "Unit Cost"
        }
      ],
      "fieldCount": 8
    },
    {
      "name": "FSAM_Service_Request__c",
      "fields": [
        {
          "name": "FSAM_Closed_Date__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Closed Date"
        },
        {
          "name": "FSAM_Customer_Asset__c",
          "type": "MasterDetail",
          "referenceTo": "FSAM_Customer_Asset__c",
          "label": "FSAM Customer Asset"
        },
        {
          "name": "FSAM_Description__c",
          "type": "LongTextArea",
          "referenceTo": "",
          "label": "Description"
        },
        {
          "name": "FSAM_External_Request_ID__c",
          "type": "Text",
          "referenceTo": "",
          "label": "External Request ID"
        },
        {
          "name": "FSAM_Open_Date__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "Open Date"
        },
        {
          "name": "FSAM_Priority__c",
          "type": "Picklist",
          "referenceTo": "",
          "label": "Priority"
        },
        {
          "name": "FSAM_Resolution__c",
          "type": "LongTextArea",
          "referenceTo": "",
          "label": "Resolution"
        },
        {
          "name": "FSAM_SLA_Due_Date__c",
          "type": "DateTime",
          "referenceTo": "",
          "label": "SLA Due Date"
        },
        {
          "name": "FSAM_Status__c",
          "type": "Picklist",
          "referenceTo": "",
          "label": "Status"
        },
        {
          "name": "FSAM_Subject__c",
          "type": "Text",
          "referenceTo": "",
          "label": "Subject"
        },
        {
          "name": "FSAM_Total_Maintenance_Visits__c",
          "type": "Summary",
          "referenceTo": "",
          "label": "Total Maintenance Visits"
        },
        {
          "name": "FSAM_Total_Parts_Cost__c",
          "type": "Summary",
          "referenceTo": "",
          "label": "Total Parts Cost"
        }
      ],
      "fieldCount": 12
    }
  ],
  "flows": [
    {
      "name": "FSAM_Engineer_Assignment_Automation",
      "label": "Send Update Service Request Email",
      "processType": "AutoLaunchedFlow",
      "triggerType": "RecordAfterSave"
    },
    {
      "name": "FSAM_Inventory_Update_Automation",
      "label": "Low Inventory",
      "processType": "AutoLaunchedFlow",
      "triggerType": "RecordAfterSave"
    },
    {
      "name": "FSAM_Maintenance_Visit_Completed",
      "label": "Send Update Service Request Email",
      "processType": "AutoLaunchedFlow",
      "triggerType": "RecordAfterSave"
    },
    {
      "name": "FSAM_Maintenance_Visit_Started",
      "label": "Set Status to In Progress",
      "processType": "AutoLaunchedFlow",
      "triggerType": "RecordAfterSave"
    },
    {
      "name": "FSAM_SLA_Validation",
      "label": "Set Default SLA Due Date",
      "processType": "AutoLaunchedFlow",
      "triggerType": "RecordBeforeSave"
    },
    {
      "name": "FSAM_Service_Request_Status_Automation",
      "label": "Set Status to Closed",
      "processType": "AutoLaunchedFlow",
      "triggerType": "RecordBeforeSave"
    }
  ],
  "relationships": [
    {
      "from": "FSAM_Customer_Asset__c",
      "field": "FSAM_Account__c",
      "type": "Lookup",
      "to": "Account"
    },
    {
      "from": "FSAM_Customer_Asset__c",
      "field": "FSAM_Service_Contact__c",
      "type": "Lookup",
      "to": "Contract"
    },
    {
      "from": "FSAM_Engineer_Assignment__c",
      "field": "FSAM_Engineer__c",
      "type": "Lookup",
      "to": "User"
    },
    {
      "from": "FSAM_Engineer_Assignment__c",
      "field": "FSAM_Service_Request__c",
      "type": "MasterDetail",
      "to": "FSAM_Service_Request__c"
    },
    {
      "from": "FSAM_Maintenance_Visit__c",
      "field": "FSAM_Engineer__c",
      "type": "Lookup",
      "to": "User"
    },
    {
      "from": "FSAM_Maintenance_Visit__c",
      "field": "FSAM_Service_Request__c",
      "type": "MasterDetail",
      "to": "FSAM_Service_Request__c"
    },
    {
      "from": "FSAM_Part_Replacement__c",
      "field": "FSAM_Service_Part__c",
      "type": "Lookup",
      "to": "FSAM_Service_Part__c"
    },
    {
      "from": "FSAM_Part_Replacement__c",
      "field": "FSAM_Service_Request__c",
      "type": "MasterDetail",
      "to": "FSAM_Service_Request__c"
    },
    {
      "from": "FSAM_Service_Request__c",
      "field": "FSAM_Customer_Asset__c",
      "type": "MasterDetail",
      "to": "FSAM_Customer_Asset__c"
    }
  ],
  "snippets": [
    {
      "path": "force-app/main/default/classes/controllers/FSAM_InventoryController.cls",
      "content": "public with sharing class FSAM_InventoryController {\n\n    @AuraEnabled(cacheable=true)\n    public static FSAM_InventoryWorkspaceDTO getInventoryWorkspace() {\n\n        FSAM_InventoryWorkspaceDTO workspace =\n            new FSAM_InventoryWorkspaceDTO();\n\n        // Summary\n\n        workspace.summary = new FSAM_InventorySummaryDTO();\n\n        workspace.summary.totalParts = 56;\n        workspace.summary.lowStockParts = 4;\n        workspace.summary.outOfStockParts = 1;\n        workspace.summary.totalInventoryValue = 48750;\n\n        // Search Criteria\n\n        workspace.searchCriteria = new FSAM_InventorySearchDTO();\n\n        workspace.searchCriteria.searchTerm = '';\n        workspace.searchCriteria.category = 'All';\n        workspace.searchCriteria.stockStatus = 'All';\n\n        // Inventory Items\n\n        workspace.inventoryItems =\n            new List<FSAM_InventoryItemDTO>();\n\n        workspace.inventoryItems.add(\n            createInventoryItem(\n                'SP-00001',\n                'Motor',\n                'Electrical',\n                15,\n                5,\n                10,\n                'In Stock',\n                450\n            )\n        );\n\n        workspace.inventoryItems.add(\n            createInventoryItem(\n                'SP-00002',\n                'Pump Seal',\n                'Mechanical',\n                2,\n                5,\n                10,\n                'Low Stock',\n                120\n            )\n        );\n\n        workspace.inventoryItems.add(\n            createInventoryItem(\n                'SP-00003',\n                'Bearing',\n                'Mechanical',\n                10,\n                3,\n                6,\n                'In Stock',\n                35\n            )\n        );\n\n        workspace.inventoryItems.add(\n            createInventoryItem(\n                'SP-00004',\n                'Valve',\n                'Mechanical',\n                0,\n                2,\n                4,\n                'Out of Stock',\n                80\n            )\n        );\n\n        workspace.inventoryItems.add(\n            createInventoryItem(\n                'SP-00005',\n                'Coupling',\n                'Mechanical',\n                7,\n                4,\n                8,\n                'In Stock',\n                60\n            )\n        );\n\n        workspace.inventoryItems.add(\n            createInventoryItem(\n                'SP-00006',\n                'O-Ring Kit',\n                'Mechanical',\n                8,\n                5,\n                10,\n                'In Stock',\n                15\n            )\n        );\n\n        workspace.generatedOn = System.now();\n        workspace.version = '1.0';\n\n        return workspace;\n\n    }\n\n    private static FSAM_InventoryItemDTO createInventoryItem(\n        String partNumber,\n        String partName,\n        String category,\n        Integer availableQuantity,\n        Integer minimumQuantity,\n        Integer reorderQuantity,\n        String stockStatus,\n        Decimal unitPrice\n    ) {\n\n        FSAM_InventoryItemDTO item =\n            new FSAM_InventoryItemDTO();\n\n        item.partNumber = partNumber;\n        item.partName = partName;\n        item.category = category;\n        item.availableQuantity = availableQuantity;\n        item.minimumQuantity = minimumQuantity;\n        item.reorderQuantity = reorderQuantity;\n        item.stockStatus = stockStatus;\n        item.unitPrice = unitPrice;\n\n        return item;\n\n    }\n\n}"
    },
    {
      "path": "force-app/main/default/classes/services/FSAM_InventoryService.cls",
      "content": "public with sharing class FSAM_InventoryService {\n    public static void decreaseInventory(Map<Id, Decimal> quantities){\n        if(quantities == null || quantities.isEmpty()){\n            throw new FSAM_BusinessException('Inventory quantities cannot be empty.');\n        }\n\n        List<FSAM_Service_Part__c> parts = FSAM_ServicePartSelector.getByIds(quantities.keySet());\n\n        if(parts.isEmpty()){\n            throw new FSAM_BusinessException('No Service Parts found.');\n        }\n\n        for(FSAM_Service_Part__c part: parts){\n            Decimal requestedQuantity = quantities.get(part.Id);\n\n            if(requestedQuantity > part.FSAM_Available_Quantity__c){\n                throw new FSAM_BusinessException(\n                    'Insufficient inventory for part: ' + part.Name\n                );\n            }\n\n            part.FSAM_Available_Quantity__c -= requestedQuantity;\n        }\n\n        update parts;\n\n        FSAM_Logger.info('Inventory updated successfully.');\n    }\n\n    public static List<FSAM_Service_Part__c> getLowStockParts(){\n        return FSAM_ServicePartSelector.getLowStockParts();\n    }\n}"
    },
    {
      "path": "force-app/main/default/classes/integrations/FSAM_ManufacturerIntegrationService.cls",
      "content": "public with sharing class FSAM_ManufacturerIntegrationService {\n\n    private static final String ENDPOINT = 'callout:FSAM_Manufacturer_API/v1/4c7f4d9e-f0ef-4f8d-9ef0-4dbb9a69b2d4';\n\n    public static FSAM_ManufacturerResponseDTO getManufacturerInformation() {\n\n        HttpRequest request = new HttpRequest();\n\n        request.setEndpoint(ENDPOINT);\n        request.setMethod('GET');\n        request.setTimeout(10000);\n\n        Http http = new Http();\n\n        HttpResponse response;\n\n        try {\n            response = http.send(request);\n        } catch (Exception ex) {\n            throw new FSAM_IntegrationException(\n                'Unable to connect to manufacturer service.' + ex.getMessage()\n            );\n        }\n\n        if (response.getStatusCode() != 200) {\n            throw new FSAM_IntegrationException(\n                'Manufacturer service returned HTTP ' +\n                response.getStatusCode()\n            );\n        }\n\n        try {\n            return (FSAM_ManufacturerResponseDTO)\n                JSON.deserialize(\n                    response.getBody(),\n                    FSAM_ManufacturerResponseDTO.class\n                );\n        } catch (Exception ex) {\n            throw new FSAM_IntegrationException(\n                'Unable to parse manufacturer response.' + ex.getMessage()\n            );\n        }\n    }\n}"
    },
    {
      "path": "force-app/main/default/classes/integrations/FSAM_ManufacturerCalloutMock.cls",
      "content": "@IsTest\nglobal class FSAM_ManufacturerCalloutMock implements HttpCalloutMock {\n    global HttpResponse respond(HttpRequest request) {\n\n        HttpResponse response = new HttpResponse();\n\n        response.setStatusCode(200);\n\n        response.setHeader(\n            'Content-Type',\n            'application/json'\n        );\n\n        response.setBody(\n            '{\"manufacturer\":\"Bosch\",' +\n            '\"country\":\"Germany\",' +\n            '\"warrantyMonths\":24,' +\n            '\"supportEmail\":\"support@bosch.example\"}'\n        );\n        return response;\n    }\n}"
    },
    {
      "path": "force-app/main/default/classes/handlers/FSAM_ServiceRequestTriggerHandler.cls",
      "content": "public with sharing class FSAM_ServiceRequestTriggerHandler extends FSAM_TriggerHandler {\n    public override void beforeUpdate() {\n        Set<Id> requestIds = new Set<Id>();\n\n        for(FSAM_Service_Request__c request: (List<FSAM_Service_Request__c>) Trigger.new){\n            requestIds.add(request.Id);\n        }\n\n        FSAM_Logger.info(\n            'Processing Service Request beforeUpdate. Records: ' + requestIds.size()\n        );\n\n        // Business logic will be added in Sprint 5.\n    }\n}"
    },
    {
      "path": "force-app/main/default/triggers/FSAM_ServiceRequestTrigger.trigger",
      "content": "trigger FSAM_ServiceRequestTrigger on FSAM_Service_Request__c (before insert, before update, before delete, after insert, after update, after delete, after undelete) {\n    new FSAM_ServiceRequestTriggerHandler().run();\n}"
    },
    {
      "path": "force-app/main/default/lwc/fsamInventoryWorkspace/fsamInventoryWorkspace.js",
      "content": "import { LightningElement, wire } from 'lwc';\n\nimport getInventoryWorkspace from '@salesforce/apex/FSAM_InventoryController.getInventoryWorkspace';\n\nexport default class FsamInventoryWorkspace extends LightningElement {\n    workspace;\n    filteredItems = [];\n    searchTerm = '';\n\n    @wire(getInventoryWorkspace)\n    wiredWorkspace({ error, data }) {\n        if (data) {\n            this.workspace = data;\n            this.filteredItems = [...data.inventoryItems];\n        } else if (error) {\n            console.error(error);\n        }\n    }\n\n    get summary() {\n        return this.workspace?.summary || {};\n    }\n\n    handleSearch(event) {\n        this.searchTerm = event.detail.searchTerm.toLowerCase();\n\n        this.filteredItems = this.workspace.inventoryItems.filter(item =>\n                item.partNumber.toLowerCase().includes(this.searchTerm) ||\n                item.partName.toLowerCase().includes(this.searchTerm) ||\n                item.category.toLowerCase().includes(this.searchTerm)\n            );\n    }\n}"
    },
    {
      "path": "force-app/main/default/lwc/fsamSearchBar/fsamSearchBar.js",
      "content": "import { LightningElement, api } from 'lwc';\n\nexport default class FsamSearchBar extends LightningElement {\n    @api placeholder = 'Search...';\n    @api value = '';\n    @api debounceDelay = 300;\n\n    debounceTimeout;\n\n    handleInput(event){\n        this.value = event.target.value;\n        window.clearTimeout(this.debounceTimeout);\n\n        this.debounceTimeout = window.setTimeout(() => {\n            this.dispatchEvent(\n                new CustomEvent('search', {\n                    detail: {\n                        value: this.value\n                    }\n                })\n            );\n        }, this.debounceDelay);\n    }\n\n    disconnectedCallback(){\n        window.clearTimeout(this.debounceTimeout);\n    }\n}"
    },
    {
      "path": "force-app/main/default/lwc/fsamDashboard/fsamDashboard.js",
      "content": "import { LightningElement } from 'lwc';\nimport getDashboard from '@salesforce/apex/FSAM_DashboardController.getDashboard';\n\nexport default class FsamDashboard extends LightningElement {\n    isLoading = true;\n    error;\n    dashboard;\n\n    connectedCallback(){\n        this.loadDashboard();\n    }\n\n    async loadDashboard(){\n        this.isLoading = true;\n\n        try {\n            this.dashboard = await getDashboard();\n            this.error = undefined;\n        } catch (error) {\n            this.error = error;\n            this.dashboard = undefined;\n        } finally {\n            this.isLoading = false;\n        }\n    }\n}"
    }
  ],
  "metadata": {
    "flexipages": [
      "force-app/main/default/flexipages/FSAM_Asset_Explorer.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Customer_Asset_Record_Page.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Dashboard.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Engineer_Assignment_Record_Page.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Engineer_Dashboard.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Inventory_Workspace.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Maintenance_Visit_Record_Page.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Part_Replacement_Record_Page.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Service_Part_Record_Page.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Service_Request_Record_Page.flexipage-meta.xml",
      "force-app/main/default/flexipages/FSAM_Service_Request_Workspace.flexipage-meta.xml"
    ],
    "reports": [
      "force-app/main/default/reports/FSAMReports.reportFolder-meta.xml",
      "force-app/main/default/reports/FSAMReports/FSAM_Customer_Assets_by_Warranty_Statu_0uV.report-meta.xml",
      "force-app/main/default/reports/FSAMReports/FSAM_Maintenance_Visits_by_Engineer_NhV.report-meta.xml",
      "force-app/main/default/reports/FSAMReports/FSAM_Part_Replacements_by_Service_Requ_s0B.report-meta.xml",
      "force-app/main/default/reports/FSAMReports/FSAM_Service_Parts_Inventory_t88.report-meta.xml",
      "force-app/main/default/reports/FSAMReports/FSAM_Service_Requests_by_Status_4ER.report-meta.xml"
    ],
    "reportTypes": [
      "force-app/main/default/reportTypes/FSAM_Customer_Assets.reportType-meta.xml",
      "force-app/main/default/reportTypes/FSAM_Customer_Assets_with_FSAM_Service_Requests_with_FSAM_Engineer_Assignments.reportType-meta.xml",
      "force-app/main/default/reportTypes/FSAM_Customer_Assets_with_FSAM_Service_Requests_with_FSAM_Maintenance_Visits.reportType-meta.xml",
      "force-app/main/default/reportTypes/FSAM_Customer_Assets_with_FSAM_Service_Requests_with_FSAM_Part_Replacements.reportType-meta.xml",
      "force-app/main/default/reportTypes/FSAM_Engineer_Assignments.reportType-meta.xml",
      "force-app/main/default/reportTypes/FSAM_Maintenance_Visits.reportType-meta.xml",
      "force-app/main/default/reportTypes/FSAM_Part_Replacements.reportType-meta.xml",
      "force-app/main/default/reportTypes/FSAM_Service_Parts.reportType-meta.xml",
      "force-app/main/default/reportTypes/FSAM_Service_Requests.reportType-meta.xml"
    ],
    "dashboards": [
      "force-app/main/default/dashboards/FSAMDashboards.dashboardFolder-meta.xml",
      "force-app/main/default/dashboards/FSAMDashboards/IdkpfRAEyQipWlvCZOLCmQeQtAYIqj.dashboard-meta.xml"
    ],
    "layouts": [
      "force-app/main/default/layouts/FSAM_Customer_Asset__c-Customer Asset Layout.layout-meta.xml",
      "force-app/main/default/layouts/FSAM_Engineer_Assignment__c-FSAM Engineer Assignment Layout.layout-meta.xml",
      "force-app/main/default/layouts/FSAM_Maintenance_Visit__c-FSAM Maintenance Visit Layout.layout-meta.xml",
      "force-app/main/default/layouts/FSAM_Part_Replacement__c-FSAM Part Replacement Layout.layout-meta.xml",
      "force-app/main/default/layouts/FSAM_Service_Part__c-FSAM Service Part Layout.layout-meta.xml",
      "force-app/main/default/layouts/FSAM_Service_Request__c-FSAM Service Request Layout.layout-meta.xml"
    ],
    "tabs": [
      "force-app/main/default/tabs/FSAM_Asset_Explorer.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Customer_Asset__c.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Dashboard.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Engineer_Assignment__c.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Engineer_Dashboard.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Inventory_Workspace.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Maintenance_Visit__c.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Part_Replacement__c.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Service_Part__c.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Service_Request_Workspace.tab-meta.xml",
      "force-app/main/default/tabs/FSAM_Service_Request__c.tab-meta.xml"
    ],
    "customIndexes": [
      "force-app/main/default/customindex/FSAM_Customer_Asset__c.FSAM_External_Asset_ID__c.indx-meta.xml",
      "force-app/main/default/customindex/FSAM_Customer_Asset__c.FSAM_Serial_Number__c.indx-meta.xml",
      "force-app/main/default/customindex/FSAM_Service_Part__c.FSAM_External_Part_ID__c.indx-meta.xml",
      "force-app/main/default/customindex/FSAM_Service_Request__c.FSAM_External_Request_ID__c.indx-meta.xml"
    ],
    "namedCredentials": [
      "force-app/main/default/namedCredentials/FSAM_Manufacturer_API.namedCredential-meta.xml"
    ],
    "externalCredentials": [
      "force-app/main/default/externalCredentials/FSAM_Manufacturer_External_Credential.externalCredential-meta.xml"
    ],
    "permissionSets": [
      "force-app/main/default/permissionsets/FSAM_User.permissionset-meta.xml"
    ],
    "permissionSetGroups": [
      "force-app/main/default/permissionsetgroups/force__SalesWorkspacePSG.permissionsetgroup-meta.xml",
      "force-app/main/default/permissionsetgroups/force__ScaleCenterUsers.permissionsetgroup-meta.xml"
    ],
    "profiles": [
      "force-app/main/default/profiles/Admin.profile-meta.xml",
      "force-app/main/default/profiles/Trial Customer Portal User.profile-meta.xml"
    ],
    "appMenus": [
      "force-app/main/default/appMenus/AppSwitcher.appMenu-meta.xml"
    ],
    "applications": [
      "force-app/main/default/applications/FSAM_Portal.app-meta.xml"
    ]
  },
  "facts": [
    "Salesforce DX source format is used; sfdx-project.json defines force-app as the default package directory and API version 66.0.",
    "Six custom objects model customer assets, service requests, maintenance visits, engineer assignments, service parts and part replacements.",
    "There are two triggers: Service Request and Maintenance Visit, both delegating to handler classes.",
    "There are six active Record-Triggered Flows in the repository.",
    "The inventory Flow can invoke FSAM_InventoryInvocable, which delegates inventory reduction to FSAM_InventoryService and FSAM_ServicePartSelector.",
    "Manufacturer integration uses a Named Credential endpoint and an External Credential, with HttpCalloutMock classes for tests.",
    "Several workspace controllers intentionally return mock/static DTO data in Version 1 rather than querying the custom objects.",
    "The repository contains no manifest/package.xml file at the expected manifest path.",
    "No GitHub Actions workflow is present in the uploaded repository.",
    "The Service Contact field is technically a Lookup to Contract despite its business label/name suggesting Contact."
  ],
  "risks": [
    {
      "title": "LWC search event contract mismatch",
      "detail": "fsamSearchBar dispatches detail.value, while fsamInventoryWorkspace reads event.detail.searchTerm. The consumer can receive undefined and fail during toLowerCase().",
      "severity": "High"
    },
    {
      "title": "Inventory concurrency / duplicate input risk",
      "detail": "InventoryService does not use FOR UPDATE locking, and InventoryInvocable stores quantities in a Map so duplicate servicePartId inputs overwrite earlier quantities.",
      "severity": "High"
    },
    {
      "title": "Selector null-check gap",
      "detail": "FSAM_MaintenanceVisitSelector.getById() uses a single-row SOQL assignment; a missing record raises QueryException before the service can handle null.",
      "severity": "Medium"
    },
    {
      "title": "CRUD/FLS consistency",
      "detail": "with sharing is present in many classes, but record sharing does not by itself enforce CRUD/FLS. Security utilities exist but are not uniformly demonstrated across all controllers/services.",
      "severity": "Medium"
    },
    {
      "title": "LWC Jest tests are scaffold-level",
      "detail": "The repository includes 28 Jest test files, but many are generated TODO-style scaffolds and do not provide meaningful behavioral coverage.",
      "severity": "Medium"
    },
    {
      "title": "Workspace controllers use static DTO data",
      "detail": "Dashboard/Asset/Service Request/Engineer/Inventory workspace controllers contain hard-coded sample values in Version 1.",
      "severity": "Medium"
    }
  ]
};
