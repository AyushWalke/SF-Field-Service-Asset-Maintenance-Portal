# FSAM Salesforce Interview Review

**Uploaded ZIP reviewed directly:**
SF-Field-Service-Asset-Maintenance-Portal-main(20260829-144033).zip

This is a senior-level codebase review for interview preparation. It
distinguishes confirmed implementation from documentation/inference and
flags discrepancies instead of hiding them.

## Review facts

-   Project files: **516**
-   Apex classes: **62**
-   Apex triggers: **2**
-   LWC components: **28**
-   LWC Jest test files: **28**
-   Custom objects: **6**
-   Custom fields: **62**
-   Flows: **6**
-   Flexipages: **11**
-   Reports: **5**; report types: **9**
-   Dashboards: **1**
-   Validation rules: **22**

# 1. Executive Project Summary

FSAM (Field Service Asset Maintenance Portal) is an enterprise-style
Salesforce portfolio application for managing customer assets, service
requests, maintenance visits, engineer assignments, spare parts and
maintenance history. The architecture intentionally separates UI,
controller, service, selector and data concerns, and combines Apex with
Record-Triggered Flow.

The most important truth for the interview is that Version 1 is **not
fully live-data driven**. The five main read controllers return
static/mock DTO data. The service/selector layer and the integration
path are real Apex implementations, while the workspace UI establishes
the DTO/UI contract with demo data.

# 2. Complete Project Structure

``` text
project/
├── force-app/main/default/
│   ├── classes/{controllers,services,selectors,dto,handlers,framework,integrations,utils,constants,exceptions,testdata,tests}
│   ├── lwc/  (28 components)
│   ├── objects/  (6 custom objects, fields, validation rules, list views)
│   ├── flows/  (6)
│   ├── flexipages/  (11)
│   ├── layouts/  (6)
│   ├── reports/  (5 reports + folder)
│   ├── reportTypes/  (9)
│   ├── dashboards/  (1 dashboard + folder)
│   ├── permissionsets/  (1)
│   ├── permissionsetgroups/  (2)
│   ├── profiles/  (2)
│   ├── namedCredentials/  (1)
│   ├── externalCredentials/  (1)
│   ├── customindex/  (4)
│   └── triggers/  (2)
├── config/project-scratch-def.json
├── docs/  (architecture, ADRs, Apex, LWC, automation, deployment, testing, demo)
├── scripts/
├── package.json
├── eslint.config.js
├── jest.config.js
└── sfdx-project.json
```

`sfdx-project.json` uses `force-app` as the default package directory,
project name `field-service-asset-maintenance`, no namespace, Salesforce
login URL and source API version **66.0**.

**package.xml: Not present in the uploaded project.** The deployment
guide mentions a `manifest/package.xml` command, but the ZIP contains no
package.xml.

# 3. Complete Component Inventory

### Custom objects

  -------------------------------------------------------------------------------
  Object                          Purpose                 Sharing model
  ------------------------------- ----------------------- -----------------------
  `FSAM_Customer_Asset__c`        Customer-owned asset,   ReadWrite
                                  warranty,               
                                  serial/location         

  `FSAM_Service_Request__c`       Service/maintenance     ControlledByParent
                                  request                 

  `FSAM_Maintenance_Visit__c`     Scheduled/actual        ControlledByParent
                                  maintenance work        

  `FSAM_Engineer_Assignment__c`   Engineer assignment to  ControlledByParent
                                  request                 

  `FSAM_Service_Part__c`          Spare-part              ReadWrite
                                  master/inventory        

  `FSAM_Part_Replacement__c`      Part consumed for       ControlledByParent
                                  request                 
  -------------------------------------------------------------------------------

### Apex classes

  --------------------------------------------------------------------------------
  Folder                              Classes
  ----------------------------------- --------------------------------------------
  `controllers`                       `FSAM_AssetExplorerController`,
                                      `FSAM_DashboardController`,
                                      `FSAM_EngineerDashboardController`,
                                      `FSAM_InventoryController`,
                                      `FSAM_ServiceRequestController`

  `services`                          `FSAM_InventoryService`,
                                      `FSAM_MaintenanceVisitService`,
                                      `FSAM_ServiceRequestService`

  `selectors`                         `FSAM_CustomerAssetSelector`,
                                      `FSAM_MaintenanceVisitSelector`,
                                      `FSAM_ServicePartSelector`,
                                      `FSAM_ServiceRequestSelector`

  `handlers`                          `FSAM_MaintenanceVisitTriggerHandler`,
                                      `FSAM_ServiceRequestTriggerHandler`

  `framework`                         `FSAM_TriggerHandler`

  `integrations`                      `FSAM_IntegrationException`,
                                      `FSAM_ManufacturerCalloutMock`,
                                      `FSAM_ManufacturerErrorCalloutMock`,
                                      `FSAM_ManufacturerIntegrationService`,
                                      `FSAM_ManufacturerIntegrationServiceTest`,
                                      `FSAM_ManufacturerInvalidJsonCalloutMock`,
                                      `FSAM_ManufacturerResponseDTO`

  `dto`                               `FSAM_AssetDTO`, `FSAM_AssetExplorerDTO`,
                                      `FSAM_AssetMaintenanceHistoryDTO`,
                                      `FSAM_AssetSummaryDTO`,
                                      `FSAM_AssignmentSummaryDTO`,
                                      `FSAM_DashboardDTO`,
                                      `FSAM_DashboardSummaryDTO`,
                                      `FSAM_EngineerDashboardDTO`,
                                      `FSAM_InventoryItemDTO`,
                                      `FSAM_InventorySearchDTO`,
                                      `FSAM_InventorySummaryDTO`,
                                      `FSAM_InventoryWorkspaceDTO`,
                                      `FSAM_OpenRequestDTO`, `FSAM_PartUsageDTO`,
                                      `FSAM_RecentActivityDTO`,
                                      `FSAM_RecentRequestDTO`,
                                      `FSAM_RequestSummaryDTO`,
                                      `FSAM_RequestTimelineDTO`,
                                      `FSAM_ServiceRequestWorkspaceDTO`,
                                      `FSAM_TodayScheduleDTO`

  `utils`                             `FSAM_Logger`, `FSAM_SecurityUtil`

  `constants`                         `FSAM_Constants`

  `exceptions`                        `FSAM_BusinessException`

  `testdata`                          `FSAM_TestDataFactory`

  `tests`                             `FSAM_AssetExplorerControllerTest`,
                                      `FSAM_CustomerAssetSelectorTest`,
                                      `FSAM_DashboardControllerTest`,
                                      `FSAM_EngineerDashboardControllerTest`,
                                      `FSAM_InventoryControllerTest`,
                                      `FSAM_InventoryServiceTest`,
                                      `FSAM_MaintenanceVisitSelectorTest`,
                                      `FSAM_MaintenanceVisitServiceTest`,
                                      `FSAM_MaintenanceVisitTriggerTest`,
                                      `FSAM_ServicePartSelectorTest`,
                                      `FSAM_ServiceRequestControllerTest`,
                                      `FSAM_ServiceRequestSelectorTest`,
                                      `FSAM_ServiceRequestServiceTest`,
                                      `FSAM_ServiceRequestTriggerTest`
  --------------------------------------------------------------------------------

### LWC components

  ---------------------------------------------------------------------------------------------------------------
  Component                       Role                    Apex
  ------------------------------- ----------------------- -------------------------------------------------------
  `fsamAssetDetails`              Asset Explorer child    None

  `fsamAssetExplorer`             Asset Explorer page     FSAM_AssetExplorerController.getAssets

  `fsamAssetList`                 Asset Explorer child    None

  `fsamAssetMaintenanceHistory`   Asset Explorer child    None

  `fsamAssetSearch`               Asset Explorer child    None

  `fsamAssignmentSummary`         Engineer child          None

  `fsamDashboard`                 Dashboard page          FSAM_DashboardController.getDashboard

  `fsamDashboardKpiCard`          Dashboard child         None

  `fsamDashboardQuickActions`     Dashboard child         None

  `fsamDashboardRecentRequests`   Dashboard child         None

  `fsamEmptyState`                Shared UI component     None

  `fsamEngineerDashboard`         Engineer page           FSAM_EngineerDashboardController.getEngineerDashboard

  `fsamErrorPanel`                Shared UI component     None

  `fsamInventorySearch`           Inventory child         None

  `fsamInventoryTable`            Inventory child         None

  `fsamInventoryWorkspace`        Inventory page          FSAM_InventoryController.getInventoryWorkspace

  `fsamOpenRequests`              Engineer child          None

  `fsamPagination`                Shared UI component     None

  `fsamPartsUsage`                Service Request child   None

  `fsamRecentActivity`            Engineer child          None

  `fsamRequestSummary`            Service Request child   None

  `fsamRequestTimeline`           Service Request child   None

  `fsamSearchBar`                 Shared UI component     None

  `fsamServiceRequestWorkspace`   Service Request page    FSAM_ServiceRequestController.getServiceRequest

  `fsamSpinner`                   Shared UI component     None

  `fsamStatusBadge`               Shared UI component     None

  `fsamToast`                     Shared UI component     None

  `fsamTodaySchedule`             Engineer child          None
  ---------------------------------------------------------------------------------------------------------------

### Metadata not present

Aura, Visualforce, record types, roles, sharing rules, Apex sharing
classes, Process Builder, Workflow Rules, Approval Processes, Custom
Metadata Types, Custom Settings, Remote Site Settings, Platform Events,
Custom Labels, Custom Permissions, Email Templates, Queues, Public
Groups, Static Resources and Experience Cloud metadata are **Not present
in the uploaded project.**

# 4. Business Problem & Requirements

### Confirmed

-   Asset and warranty tracking.
-   Service-request lifecycle management.
-   Engineer assignment and maintenance scheduling.
-   Part replacement and inventory decrement.
-   Low-stock alerting.
-   Operational dashboards/reports.
-   Manufacturer REST integration.

### Reasonable inference

The workspaces imply service/operations, engineering, inventory and
management personas. The repository does not prove a complete production
persona/role model.

### Unknown

Exact customer organization, production SLA policy beyond the three-day
default, real upstream systems, production authentication and actual
business KPI definitions.

# 5. Salesforce Architecture

``` mermaid
flowchart TD
U[User] --> APP[FSAM Portal]
APP --> UI[Page-level LWC]
UI --> C[Controller]
C --> DTO[DTO Contract]
C --> S[Service Layer]
S --> SEL[Selector Layer]
SEL --> DB[(FSAM Objects)]
TR[Triggers] --> TH[Trigger Handler]
FLOW[Record-triggered Flows] --> INV[Inventory Invocable]
INV --> IS[Inventory Service]
IS --> SEL2[Service Part Selector]
INT[Manufacturer Integration] --> NC[Named Credential]
NC --> EXT[REST Endpoint]
```

### Data layer

Six custom objects, formulas, roll-ups, validation rules, external
IDs/unique fields and Master-Detail/Lookup relationships.

### Business logic

Services perform DML and business validation; selectors perform SOQL;
controllers expose UI DTOs; handlers route trigger contexts.

### Automation

Six active record-triggered Flows plus two triggers.

### UI

Five page-level workspace components plus reusable child/shared
components.

### Integration

Manufacturer REST GET through Named Credential and External Credential.

### Security

Main Apex classes use `with sharing`. `FSAM_SecurityUtil` provides
CRUD/FLS describe checks and `Security.stripInaccessible`; Service
Request service explicitly demonstrates update CRUD +
strip-inaccessible.

# 6. Data Model

``` mermaid
erDiagram
ACCOUNT ||--o{ FSAM_Customer_Asset__c : owns
FSAM_Customer_Asset__c ||--o{ FSAM_Service_Request__c : has
FSAM_Service_Request__c ||--o{ FSAM_Maintenance_Visit__c : has
FSAM_Service_Request__c ||--o{ FSAM_Engineer_Assignment__c : has
FSAM_Service_Request__c ||--o{ FSAM_Part_Replacement__c : has
FSAM_Service_Part__c ||--o{ FSAM_Part_Replacement__c : referenced
USER ||--o{ FSAM_Engineer_Assignment__c : engineer
USER ||--o{ FSAM_Maintenance_Visit__c : engineer
CONTRACT ||--o{ FSAM_Customer_Asset__c : configured_lookup
```

### Important relationships

-   Account → Customer Asset: Lookup.
-   Customer Asset → Service Request: Master-Detail.
-   Service Request → Maintenance Visit: Master-Detail.
-   Service Request → Engineer Assignment: Master-Detail.
-   Service Request → Part Replacement: Master-Detail.
-   Part Replacement → Service Part: Lookup.
-   Engineer fields → User.

### Critical discrepancy

`FSAM_Service_Contact__c` is labeled Service Contact and documented as a
Contact lookup, but the actual metadata references **Contract**. The
completion-email flow also uses that field as an email recipient. Fix
this before calling the project production-ready.

### Formula/roll-up fields

-   Warranty Active = TODAY() between warranty start/end.
-   Reorder Required = Available Quantity \<= Minimum Stock Level.
-   Total Cost = Quantity × Unit Cost.
-   Total Maintenance Visits and Total Parts Cost are roll-ups on
    Service Request.

# 7. End-to-End Business Flows

### Engineer assignment

Assignment created → get Service Request → if status New, set Assigned →
update parent → email engineer.

### Maintenance started

Maintenance Visit created → get Service Request → if Assigned, set In
Progress.

### Maintenance completed

Visit status changes to Completed → get all visits for the same request
→ loop → if any visit is not Completed, stop completion; otherwise set
request Completed → email service contact.

### Inventory

Part Replacement created → Inventory Flow → Invocable Apex → Inventory
Service → Service Part Selector → validate quantity → update inventory →
low-stock notification if reorder required.

### SLA

Before-save Service Request Flow → missing SLA gets Open Date + 3 days →
past SLA produces field-level error → Closed without Closed Date
produces field-level error.

### Current UI read path

The intended architecture is LWC → Controller → Service → Selector → DB,
but the current workspace controllers return mock DTOs. The actual
Version 1 read path is LWC → Controller → static DTO → LWC.

# 8. Apex Deep Dive

### Controllers

-   `FSAM_DashboardController.getDashboard()` --- cacheable read API;
    returns static KPI DTO.
-   `FSAM_AssetExplorerController.getAssets()` --- cacheable read API;
    returns three static assets and three maintenance-history records.
-   `FSAM_ServiceRequestController.getServiceRequest()` --- returns
    static request summary, timeline and parts usage.
-   `FSAM_EngineerDashboardController.getEngineerDashboard()` ---
    returns static assignments, schedule, open requests and activities.
-   `FSAM_InventoryController.getInventoryWorkspace()` --- returns
    static inventory summary/search/items.

All five currently do **zero SOQL and zero DML**.

### Services

`FSAM_ServiceRequestService`: closeRequests, updateStatus,
getOpenRequests. Uses selector, CRUD check, stripInaccessible and bulk
DML.

`FSAM_InventoryService`: decreaseInventory and getLowStockParts. Bulk
query/update, insufficient-stock exception. Production improvement: lock
rows, validate positive quantity, enforce security and aggregate
duplicate inputs.

`FSAM_MaintenanceVisitService`: completeVisit and scheduleVisit.
Important edge case: selector can throw QueryException before the
service's null check.

### Selectors

Four selectors centralize SOQL: Customer Asset, Service Request, Service
Part and Maintenance Visit. No DML. Most ID methods guard null/empty
IDs.

### Trigger framework

`FSAM_TriggerHandler` exposes virtual before/after methods and `run()`
dispatches based on Trigger context. Both object triggers contain only
handler delegation.

### Integration

`FSAM_ManufacturerIntegrationService` performs GET, 10-second timeout,
HTTP 200 check, JSON deserialization and custom exception handling.

# 9. Trigger Deep Dive

  --------------------------------------------------------------------------------
  Trigger                          Contexts                Current logic
  -------------------------------- ----------------------- -----------------------
  `FSAM_ServiceRequestTrigger`     before/after            Handler currently logs
                                   insert/update/delete,   IDs in beforeUpdate; no
                                   after undelete          domain logic yet

  `FSAM_MaintenanceVisitTrigger`   before/after            Handler currently logs
                                   insert/update/delete,   in beforeInsert
                                   after undelete          
  --------------------------------------------------------------------------------

They are structurally bulk-safe. No static recursion guard is present.
Current handlers do not perform DML, so recursion is not currently
meaningful.

# 10. LWC Deep Dive

### Main workspaces

-   `fsamAssetExplorer`: wire Apex, owns selected/filtered state,
    handles child `search` and `assetselect` events.
-   `fsamDashboard`: imperative Apex in connectedCallback with
    async/await and try/catch/finally.
-   `fsamEngineerDashboard`: wired dashboard DTO and child getters.
-   `fsamInventoryWorkspace`: wired DTO, client-side filtering.
-   `fsamServiceRequestWorkspace`: wired DTO and child getters.

### Reusable components

Status badge, spinner, toast, search bar, pagination, empty state, error
panel, timeline/table/KPI child components.

### Critical LWC defect

SearchBar dispatches `{detail: {value: ...}}`, while
AssetSearch/InventorySearch and the parent workspaces expect
`detail.searchTerm`. This should be standardized and covered by Jest
tests.

### Other limitations

-   Dashboard quick-action handlers are placeholders.
-   Several error paths only console.error instead of using reusable
    error/toast components.
-   28 Jest test files exist, but their bodies are TODO placeholders.

# 11. Flow & Automation Deep Dive

  ------------------------------------------------------------------------------------------
  Flow                                       Trigger                 Purpose
  ------------------------------------------ ----------------------- -----------------------
  `FSAM_Engineer_Assignment_Automation`      Engineer Assignment     New request → Assigned;
                                             create, after-save      email engineer

  `FSAM_Inventory_Update_Automation`         Part Replacement        Invoke inventory Apex;
                                             create, after-save      low-stock email

  `FSAM_Maintenance_Visit_Started`           Visit create,           Assigned request → In
                                             after-save              Progress

  `FSAM_Maintenance_Visit_Completed`         Visit update,           Complete request only
                                             after-save              after all visits
                                                                     complete; email

  `FSAM_SLA_Validation`                      Request create/update,  Default SLA and custom
                                             before-save             errors

  `FSAM_Service_Request_Status_Automation`   Request create/update,  Default New;
                                             before-save             Completed + Closed Date
                                                                     → Closed
  ------------------------------------------------------------------------------------------

The visit-completion loop is the main Flow scale concern. Multiple
automations also touch Service Request status, so production should
define a single owner for each transition.

# 12. Integration Deep Dive

Named Credential: `FSAM_Manufacturer_API`; configured endpoint is
`https://mocki.io`. External Credential:
`FSAM_Manufacturer_External_Credential`; configured as
`NoAuthentication` with a named principal. The Apex callout endpoint is
`callout:FSAM_Manufacturer_API/v1/4c7f4d9e-f0ef-4f8d-9ef0-4dbb9a69b2d4`.

The integration handles connection errors, non-200 HTTP responses and
invalid JSON with `FSAM_IntegrationException`. Tests use three
`HttpCalloutMock` implementations: success, HTTP 500 and invalid JSON.

# 13. Security Analysis

-   `with sharing` is widespread.
-   `FSAM_User` grants CRUD on all six custom objects but no View
    All/Modify All.
-   Selected formula/derived fields are read-only in the permission set.
-   Service Request update path checks CRUD and uses
    `stripInaccessible`.

**Gap:** `with sharing` does not enforce CRUD/FLS. Selectors and other
services do not consistently perform those checks. No user-mode SOQL/DML
is demonstrated. The documentation claims user-mode where appropriate,
but the code does not show it.

# 14. Governor Limits & Performance

Positive: no SOQL/DML inside loops in Apex; bulk Set/Map inputs;
selector reuse; one-DML service patterns.

Risks: unbounded selector results, client-side filtering, Flow
child-visit loop, inventory concurrency, duplicate Part IDs being
overwritten by Map.put, and static read APIs that will need a scalable
live-data implementation.

# 15. Design Patterns & Code Quality

Actually demonstrated: Controller layer, Service Layer, Selector Layer,
Trigger Handler, DTO pattern, Test Data Factory, custom exceptions and
utilities.

Not demonstrated: Repository, Domain Layer, Dependency Injection,
Strategy/Factory as formal patterns, Batch/Queueable.

Strengths: naming, modularity, documentation, ADRs, reusable UI, clear
separation. Weaknesses: mock production-facing reads, event contract
defect, incomplete UI error handling, placeholder navigation/tests,
duplicate validation rules and documentation/implementation mismatches.

# 16. Testing Strategy

Apex coverage is documented as **87%**. Controller, service, selector,
trigger and integration tests exist. `Test.startTest/stopTest` is used
in most execution tests. `@TestSetup` is not used.

Integration testing is the strongest area: success, HTTP 500 and
malformed JSON are explicitly tested.

Missing/weak areas: negative business cases, bulk tests, security tests,
concurrency tests, recursion/automation interaction tests and meaningful
LWC tests. The LWC Jest files are generated TODO scaffolds.

# 17. Deployment & GitHub

Confirmed: Salesforce DX source format, scratch-org definition,
Salesforce CLI deployment documentation, npm quality tooling, Git
configuration and GitHub documentation.

Not present: package.xml, GitHub Actions workflow and `.git` history.
Therefore branch strategy and actual commit history cannot be verified
from this ZIP.

Safe wording: "I used Salesforce DX, Salesforce CLI and Git/GitHub. I
configured local quality checks with ESLint, Prettier, Husky and Jest.
CI/CD was a future enhancement rather than an implemented Version 1
pipeline."

# 18. My Role

### Clearly demonstrated

End-to-end Salesforce development across data model, metadata, Apex
architecture, Flow, LWC, integration, security, testing and
documentation.

### Reasonable but not provable

Formal production deployment ownership, stakeholder training,
code-review leadership, and CI/CD ownership.

### Interview answer

> "My role was end-to-end Salesforce development for the FSAM
> application. I worked across the data model, platform configuration,
> layered Apex, Flow automation, LWC UI, REST integration, security and
> testing. Version 1 intentionally uses mock DTO data for the main
> workspace reads, while the service/selector and integration patterns
> establish the foundation for live data in Version 2."

# 19. Technical Challenges & Solutions

  -----------------------------------------------------------------------
  Challenge               Solution                Interview point
  ----------------------- ----------------------- -----------------------
  Keep triggers clean     Handler framework       One trigger/object and
                                                  separation of concerns

  Avoid duplicated SOQL   Selector layer          Centralized data access

  Reuse inventory rules   Invocable → Service     Declarative
  from Flow                                       orchestration +
                                                  reusable Apex

  Protect updates         CRUD +                  Sharing is not CRUD/FLS
                          stripInaccessible       

  Synchronize request     Record-triggered flows  Configuration before
  lifecycle                                       code

  Validate SLA            Before-save Flow        Efficient same-record
                                                  validation

  Handle API failures     Custom                  Explicit failure
                          IntegrationException    categories

  Test callouts           HttpCalloutMock         Deterministic tests

  Build reusable UI       Small child LWCs        Parent owns state;
                                                  children present

  Inventory threshold     Formula + Flow          Centralized stock rule
  -----------------------------------------------------------------------

# 20. Weaknesses & Improvements

  -----------------------------------------------------------------------------
  Current implementation  Problem                 Recommended improvement
  ----------------------- ----------------------- -----------------------------
  Static controller DTOs  Not live data           Wire controllers to
                                                  services/selectors

  Search event mismatch   Runtime/UI defect       Standardize event detail API

  Service Contact →       Metadata/ADR mismatch   Correct relationship and
  Contract                                        email recipient model

  Single-row visit        QueryException on       Return list/handle absence
  selector                missing row             explicitly

  Inventory no locking    Race condition          `FOR UPDATE` + defined retry
                                                  behavior

  Invocable Map.put       Duplicate part IDs      Aggregate quantities
                          overwrite               

  Inconsistent security   CRUD/FLS gaps           User-mode or comprehensive
                                                  enforcement

  LWC tests TODO          No meaningful UI        Add
                          confidence              wire/event/error/pagination
                                                  tests

  console.error only      Poor user experience    Standardize ErrorPanel/Toast

  Duplicate validation    Metadata debt           Remove obsolete duplicates
  rules                                           

  No CI/CD                Manual deployment risk  Add GitHub Actions pipeline
  -----------------------------------------------------------------------------

# 21. 30-Second Interview Explanation

> "FSAM is a Salesforce field-service asset maintenance application for
> customer assets, service requests, maintenance visits, engineer
> assignments and spare-parts inventory. I designed it with layered
> Apex---controllers, services, selectors and DTOs---plus reusable LWCs,
> record-triggered Flows and a REST integration through Named
> Credentials. Version 1 is a portfolio release, so the main workspace
> read controllers intentionally return mock DTO data; the next step is
> wiring them to live Salesforce records and hardening security, testing
> and scalability."

# 22. 1-Minute Interview Explanation

> "The data model starts with Account and Customer Asset, then Service
> Request, with Maintenance Visits, Engineer Assignments and Part
> Replacements underneath it; Part Replacement also references the
> Service Part inventory master. Engineer assignment moves a new request
> to Assigned, maintenance moves it to In Progress, and completion
> checks whether all visits are complete before closing the request
> lifecycle. Inventory updates use Flow → Invocable Apex → Service →
> Selector. SLA logic is handled in a before-save Flow. The UI has five
> workspaces built from reusable LWCs. The manufacturer integration is a
> REST GET through Named/External Credentials with mocked tests.
> Security uses with sharing and CRUD/FLS utilities, although I would
> extend that consistently before production."

# 23. 2-Minute Interview Explanation

> "I built FSAM as an enterprise-style Salesforce application around
> field-service maintenance. I separated UI-facing controllers from
> reusable service logic and SOQL selectors, and used DTOs so the LWC
> contract is independent of the database schema. I used Flow for
> straightforward lifecycle/SLA/notification orchestration and Invocable
> Apex when Flow needed reusable inventory business logic. The trigger
> framework keeps triggers thin. For integration, the manufacturer
> service uses a Named Credential, HTTP GET, JSON deserialization and
> custom integration exceptions, with mocks for success, HTTP 500 and
> invalid JSON. The biggest Version 1 caveat is that the workspace read
> controllers are mock-data implementations rather than live SOQL-backed
> APIs. I would make live selectors/services, server-side pagination,
> consistent security enforcement, stronger LWC tests and
> concurrency-safe inventory the first Version 2 priorities."

# 24. 5-Minute Interview Explanation

> "FSAM manages customer assets and the operational lifecycle around
> maintenance. The six-object model uses Lookup where a record needs an
> independent lifecycle and Master-Detail where a record is tightly
> owned by a parent. The Service Request is the central transaction:
> assignments, visits and part replacements hang off it. Service Parts
> remain reusable inventory master data. The Apex architecture has thin
> controllers, services for business operations, selectors for SOQL,
> DTOs for transport, a trigger framework, utilities and custom
> exceptions. Flows own declarative orchestration: assignment, visit
> progress, completion, SLA and status automation. Inventory is
> deliberately split between Flow and Apex because inventory decrement
> is reusable business logic. The manufacturer integration uses
> Named/External Credentials and HttpCalloutMock. The main areas I would
> be transparent about are the mock workspace reads, incomplete LWC
> tests, security consistency, search-event mismatch, Service Contact
> metadata mismatch, inventory concurrency and lack of CI/CD."

# 25. 100+ Project-Specific Interview Questions

**133 questions**

1.  **\[Project overview\] What business problem does FSAM solve?**
2.  **\[Project overview\] Who are the users/personas?**
3.  **\[Project overview\] What are the six custom objects?**
4.  **\[Project overview\] Walk me through the business lifecycle.**
5.  **\[Project overview\] What was your role?**
6.  **\[Project overview\] What are the main Version 1 limitations?**
7.  **\[Architecture\] Why Controller → Service → Selector?**
8.  **\[Architecture\] Why use DTOs?**
9.  **\[Architecture\] Why one trigger per object?**
10. **\[Architecture\] Why use Flow for simple automation?**
11. **\[Architecture\] Where should Apex start instead?**
12. **\[Data model\] Why is Account → Customer Asset a Lookup?**
13. **\[Data model\] Why is Customer Asset → Service Request
    Master-Detail?**
14. **\[Data model\] Why is Service Request → Maintenance Visit
    Master-Detail?**
15. **\[Data model\] Why is Part Replacement → Service Part a Lookup?**
16. **\[Data model\] What are the external IDs?**
17. **\[Data model\] What formula calculates warranty active?**
18. **\[Data model\] What formula calculates reorder required?**
19. **\[Data model\] What formula calculates total cost?**
20. **\[Data model\] What is wrong with Service Contact?**
21. **\[Apex\] Explain FSAM_ServiceRequestService.closeRequests().**
22. **\[Apex\] Why does closeRequests accept Set`<Id>`{=html}?**
23. **\[Apex\] Why use Security.stripInaccessible?**
24. **\[Apex\] What does FSAM_InventoryService.decreaseInventory do?**
25. **\[Apex\] What happens when inventory is insufficient?**
26. **\[Apex\] What does FSAM_MaintenanceVisitService.completeVisit
    do?**
27. **\[Apex\] What exception classes exist?**
28. **\[Apex\] Why centralize constants?**
29. **\[Apex\] Why centralize logging?**
30. **\[Triggers\] What triggers exist?**
31. **\[Triggers\] Which trigger contexts are supported?**
32. **\[Triggers\] Is the trigger bulkified?**
33. **\[Triggers\] Is recursion protection implemented?**
34. **\[Triggers\] Could Flow replace the current trigger behavior?**
35. **\[Triggers\] What belongs in a handler versus service?**
36. **\[LWC\] Which LWCs call Apex?**
37. **\[LWC\] Which use @wire?**
38. **\[LWC\] Which uses imperative Apex?**
39. **\[LWC\] Why is Dashboard imperative?**
40. **\[LWC\] How does Asset Explorer communicate with children?**
41. **\[LWC\] What does @api do?**
42. **\[LWC\] Why is @track not used?**
43. **\[LWC\] How does pagination work?**
44. **\[LWC\] What is wrong with the SearchBar event contract?**
45. **\[LWC\] How would you add navigation to quick actions?**
46. **\[LWC\] How should Apex errors be surfaced?**
47. **\[SOQL\] Where is SOQL centralized?**
48. **\[SOQL\] Are SOQL queries inside loops present?**
49. **\[SOQL\] Are DML statements inside loops present?**
50. **\[SOQL\] What is wrong with unbounded selectors?**
51. **\[SOQL\] How would you implement server-side pagination?**
52. **\[SOQL\] OFFSET versus keyset pagination?**
53. **\[SOQL\] How would you make asset search selective?**
54. **[Automation](#automation) What six flows exist?**
55. **[Automation](#automation) Why is SLA validation before-save?**
56. **[Automation](#automation) Why is engineer assignment after-save?**
57. **[Automation](#automation) How does Maintenance Visit Completed
    determine all visits are done?**
58. **[Automation](#automation) How does Inventory Update call Apex?**
59. **[Automation](#automation) Why use Invocable Apex?**
60. **[Automation](#automation) What does Service Request Status
    Automation do?**
61. **[Automation](#automation) What happens if SLA Due Date is blank?**
62. **[Automation](#automation) What happens if a request is closed
    without Closed Date?**
63. **[Automation](#automation) Could the flows recurse?**
64. **[Security](#security) CRUD versus FLS?**
65. **[Security](#security) What does with sharing enforce?**
66. **[Security](#security) What does with sharing not enforce?**
67. **[Security](#security) Where is CRUD checking implemented?**
68. **[Security](#security) Where is stripInaccessible used?**
69. **[Security](#security) Does every selector enforce FLS?**
70. **[Security](#security) What are the actual sharing models?**
71. **[Security](#security) Are sharing rules present?**
72. **[Security](#security) Are View All/Modify All granted?**
73. **[Security](#security) What would you improve?**
74. **\[Limits\] Where are the governor-limit risks?**
75. **\[Limits\] How would 200 Part Replacements be handled?**
76. **\[Limits\] What happens with 50,000 service requests?**
77. **\[Limits\] What is the CPU risk in visit completion Flow?**
78. **\[Limits\] How would you handle concurrent inventory updates?**
79. **\[Async\] Does the project use Queueable?**
80. **\[Async\] Does it use Future?**
81. **\[Async\] Does it use Batch?**
82. **\[Async\] When would you introduce Queueable?**
83. **\[Async\] When would Batch be better?**
84. **\[Async\] Can a trigger make a callout directly?**
85. **[Integration](#integration) How does the manufacturer integration
    work?**
86. **[Integration](#integration) Why Named Credential?**
87. **[Integration](#integration) What does the External Credential
    do?**
88. **[Integration](#integration) What authentication is actually
    configured?**
89. **[Integration](#integration) What HTTP method and timeout are
    used?**
90. **[Integration](#integration) How is JSON parsed?**
91. **[Integration](#integration) How are HTTP errors handled?**
92. **[Integration](#integration) How are invalid JSON errors handled?**
93. **[Integration](#integration) How are callouts tested?**
94. **[Integration](#integration) How would you retry failures?**
95. **\[Testing\] What Apex tests exist?**
96. **\[Testing\] What does Test.startTest do?**
97. **\[Testing\] Why Test.stopTest?**
98. **\[Testing\] Is @TestSetup used?**
99. **\[Testing\] What does TestDataFactory create?**
100. **\[Testing\] Are negative tests sufficient?**
101. **\[Testing\] Are bulk tests sufficient?**
102. **\[Testing\] Are LWC tests meaningful?**
103. **\[Deployment\] What is in sfdx-project.json?**
104. **\[Deployment\] Is package.xml present?**
105. **\[Deployment\] Is GitHub Actions present?**
106. **\[Deployment\] How would you deploy the project?**
107. **\[Deployment\] How would you validate a deployment?**
108. **\[Git\] Can branch history be proven from this ZIP?**
109. **\[Git\] What local quality tooling is included?**
110. **\[Performance\] Why is the current dashboard fast?**
111. **\[Performance\] Why is that not enough for production?**
112. **\[Performance\] How would you optimize Asset Explorer?**
113. **\[Performance\] How would you optimize Inventory Workspace?**
114. **\[Performance\] How would you measure performance?**
115. **\[Scenarios\] Two users consume the last part. What happens?**
116. **\[Scenarios\] The manufacturer API returns 500. What happens?**
117. **\[Scenarios\] A user lacks Service Request update permission.
     What happens?**
118. **\[Scenarios\] A user lacks FLS. What happens?**
119. **\[Scenarios\] A visit completes while another visit remains open.
     What happens?**
120. **\[Scenarios\] The same part appears twice in one invocable call.
     What happens?**
121. **\[Debugging\] Asset search is broken. Where do you look first?**
122. **\[Debugging\] Maintenance completion throws QueryException. What
     is suspicious?**
123. **\[Design\] Why not put everything in Flow?**
124. **\[Design\] Why not put everything in Apex?**
125. **\[Design\] How would you support multiple manufacturers?**
126. **\[Senior\] What is the biggest architectural weakness?**
127. **\[Senior\] What is the biggest security weakness?**
128. **\[Senior\] What is the biggest scalability weakness?**
129. **\[Senior\] What would you change before production?**
130. **\[Senior\] How would you introduce CI/CD?**
131. **\[Senior\] How would you support one million service requests?**
132. **\[Senior\] How would you prevent automation conflicts?**
133. **\[Senior\] What technical debt should be fixed first?**

# 26. Detailed Answers

### 1. What business problem does FSAM solve?

**Short interview answer:** It manages customer-owned assets, service
requests, maintenance visits, engineer assignments, spare parts and
maintenance history. **Detailed technical answer:** It manages
customer-owned assets, service requests, maintenance visits, engineer
assignments, spare parts and maintenance history. **Project-specific
answer:** It manages customer-owned assets, service requests,
maintenance visits, engineer assignments, spare parts and maintenance
history. **Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 2. Who are the users/personas?

**Short interview answer:** Service/operations users, engineers,
inventory users and managers are reasonable personas from the
implemented workspaces; a complete role hierarchy is not implemented.
**Detailed technical answer:** Service/operations users, engineers,
inventory users and managers are reasonable personas from the
implemented workspaces; a complete role hierarchy is not implemented.
**Project-specific answer:** Service/operations users, engineers,
inventory users and managers are reasonable personas from the
implemented workspaces; a complete role hierarchy is not implemented.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 3. What are the six custom objects?

**Short interview answer:** Customer Asset, Service Request, Maintenance
Visit, Engineer Assignment, Service Part and Part Replacement.
**Detailed technical answer:** Customer Asset, Service Request,
Maintenance Visit, Engineer Assignment, Service Part and Part
Replacement. **Project-specific answer:** Customer Asset, Service
Request, Maintenance Visit, Engineer Assignment, Service Part and Part
Replacement. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 4. Walk me through the business lifecycle.

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 5. What was your role?

**Short interview answer:** The repository demonstrates end-to-end
Salesforce development across metadata, Apex, Flow, LWC, security,
integration, testing and documentation. **Detailed technical answer:**
The repository demonstrates end-to-end Salesforce development across
metadata, Apex, Flow, LWC, security, integration, testing and
documentation. **Project-specific answer:** The repository demonstrates
end-to-end Salesforce development across metadata, Apex, Flow, LWC,
security, integration, testing and documentation. **Likely follow-up:**
What would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 6. What are the main Version 1 limitations?

**Short interview answer:** The main read controllers use mock/static
DTO data; LWC tests are placeholders; CI/CD is absent; some
navigation/error paths are incomplete. **Detailed technical answer:**
The main read controllers use mock/static DTO data; LWC tests are
placeholders; CI/CD is absent; some navigation/error paths are
incomplete. **Project-specific answer:** The main read controllers use
mock/static DTO data; LWC tests are placeholders; CI/CD is absent; some
navigation/error paths are incomplete. **Likely follow-up:** What would
you change before production? **Follow-up answer:** Wire live data,
enforce security consistently, add bulk/negative/concurrency tests, and
improve scalability/observability as appropriate.

### 7. Why Controller → Service → Selector?

**Short interview answer:** Controllers expose the UI contract, Services
contain reusable business logic/DML, and Selectors centralize SOQL.
**Detailed technical answer:** Controllers expose the UI contract,
Services contain reusable business logic/DML, and Selectors centralize
SOQL. **Project-specific answer:** Controllers expose the UI contract,
Services contain reusable business logic/DML, and Selectors centralize
SOQL. **Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 8. Why use DTOs?

**Short interview answer:** DTOs create a stable UI/integration payload
independent of the underlying SObject schema. **Detailed technical
answer:** DTOs create a stable UI/integration payload independent of the
underlying SObject schema. **Project-specific answer:** DTOs create a
stable UI/integration payload independent of the underlying SObject
schema. **Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 9. Why one trigger per object?

**Short interview answer:** One trigger per object keeps execution
centralized and delegates context handling to the framework. **Detailed
technical answer:** One trigger per object keeps execution centralized
and delegates context handling to the framework. **Project-specific
answer:** One trigger per object keeps execution centralized and
delegates context handling to the framework. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 10. Why use Flow for simple automation?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 11. Where should Apex start instead?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 12. Why is Account → Customer Asset a Lookup?

**Short interview answer:** The ADR says assets need an independent
lifecycle, so a Lookup avoids the parent-controlled lifecycle of
Master-Detail. **Detailed technical answer:** The ADR says assets need
an independent lifecycle, so a Lookup avoids the parent-controlled
lifecycle of Master-Detail. **Project-specific answer:** The ADR says
assets need an independent lifecycle, so a Lookup avoids the
parent-controlled lifecycle of Master-Detail. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 13. Why is Customer Asset → Service Request Master-Detail?

**Short interview answer:** The request is a child operational record of
the asset and the metadata uses ControlledByParent sharing. **Detailed
technical answer:** The request is a child operational record of the
asset and the metadata uses ControlledByParent sharing.
**Project-specific answer:** The request is a child operational record
of the asset and the metadata uses ControlledByParent sharing. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 14. Why is Service Request → Maintenance Visit Master-Detail?

**Short interview answer:** Visits are part of the request lifecycle and
are modeled as child records. **Detailed technical answer:** Visits are
part of the request lifecycle and are modeled as child records.
**Project-specific answer:** Visits are part of the request lifecycle
and are modeled as child records. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 15. Why is Part Replacement → Service Part a Lookup?

**Short interview answer:** Service Part is reusable master data; the
replacement should reference it without owning its lifecycle. **Detailed
technical answer:** Service Part is reusable master data; the
replacement should reference it without owning its lifecycle.
**Project-specific answer:** Service Part is reusable master data; the
replacement should reference it without owning its lifecycle. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 16. What are the external IDs?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 17. What formula calculates warranty active?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 18. What formula calculates reorder required?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 19. What formula calculates total cost?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 20. What is wrong with Service Contact?

**Short interview answer:** The field is labeled Service Contact and the
ADR describes a Contact, but the actual metadata references Contract.
That inconsistency should be fixed. **Detailed technical answer:** The
field is labeled Service Contact and the ADR describes a Contact, but
the actual metadata references Contract. That inconsistency should be
fixed. **Project-specific answer:** The field is labeled Service Contact
and the ADR describes a Contact, but the actual metadata references
Contract. That inconsistency should be fixed. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 21. Explain FSAM_ServiceRequestService.closeRequests().

**Short interview answer:** It validates IDs, queries through the
selector, checks update CRUD, sets Closed, strips inaccessible fields
and performs one bulk update. **Detailed technical answer:** It
validates IDs, queries through the selector, checks update CRUD, sets
Closed, strips inaccessible fields and performs one bulk update.
**Project-specific answer:** It validates IDs, queries through the
selector, checks update CRUD, sets Closed, strips inaccessible fields
and performs one bulk update. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 22. Why does closeRequests accept Set`<Id>`{=html}?

**Short interview answer:** It validates IDs, queries through the
selector, checks update CRUD, sets Closed, strips inaccessible fields
and performs one bulk update. **Detailed technical answer:** It
validates IDs, queries through the selector, checks update CRUD, sets
Closed, strips inaccessible fields and performs one bulk update.
**Project-specific answer:** It validates IDs, queries through the
selector, checks update CRUD, sets Closed, strips inaccessible fields
and performs one bulk update. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 23. Why use Security.stripInaccessible?

**Short interview answer:** It removes fields the running user cannot
access for the specified DML operation, helping enforce FLS. **Detailed
technical answer:** It removes fields the running user cannot access for
the specified DML operation, helping enforce FLS. **Project-specific
answer:** It removes fields the running user cannot access for the
specified DML operation, helping enforce FLS. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 24. What does FSAM_InventoryService.decreaseInventory do?

**Short interview answer:** It queries parts once, validates requested
quantity, decrements in memory and performs one update. **Detailed
technical answer:** It queries parts once, validates requested quantity,
decrements in memory and performs one update. **Project-specific
answer:** It queries parts once, validates requested quantity,
decrements in memory and performs one update. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 25. What happens when inventory is insufficient?

**Short interview answer:** The inventory service throws
FSAM_BusinessException instead of allowing the quantity to go below
available stock. **Detailed technical answer:** The inventory service
throws FSAM_BusinessException instead of allowing the quantity to go
below available stock. **Project-specific answer:** The inventory
service throws FSAM_BusinessException instead of allowing the quantity
to go below available stock. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 26. What does FSAM_MaintenanceVisitService.completeVisit do?

**Short interview answer:** It retrieves a visit, sets status to
Completed and updates it; the selector has a missing-record
QueryException edge case. **Detailed technical answer:** It retrieves a
visit, sets status to Completed and updates it; the selector has a
missing-record QueryException edge case. **Project-specific answer:** It
retrieves a visit, sets status to Completed and updates it; the selector
has a missing-record QueryException edge case. **Likely follow-up:**
What would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 27. What exception classes exist?

**Short interview answer:** The project has FSAM_BusinessException for
business failures and FSAM_IntegrationException for integration
failures. **Detailed technical answer:** The project has
FSAM_BusinessException for business failures and
FSAM_IntegrationException for integration failures. **Project-specific
answer:** The project has FSAM_BusinessException for business failures
and FSAM_IntegrationException for integration failures. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 28. Why centralize constants?

**Short interview answer:** They prevent repeated literal
status/priority values and reduce spelling inconsistencies. **Detailed
technical answer:** They prevent repeated literal status/priority values
and reduce spelling inconsistencies. **Project-specific answer:** They
prevent repeated literal status/priority values and reduce spelling
inconsistencies. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 29. Why centralize logging?

**Short interview answer:** FSAM_Logger centralizes INFO/WARN/ERROR
debug logging and gives a single extension point for future
observability. **Detailed technical answer:** FSAM_Logger centralizes
INFO/WARN/ERROR debug logging and gives a single extension point for
future observability. **Project-specific answer:** FSAM_Logger
centralizes INFO/WARN/ERROR debug logging and gives a single extension
point for future observability. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 30. What triggers exist?

**Short interview answer:** FSAM_ServiceRequestTrigger and
FSAM_MaintenanceVisitTrigger. **Detailed technical answer:**
FSAM_ServiceRequestTrigger and FSAM_MaintenanceVisitTrigger.
**Project-specific answer:** FSAM_ServiceRequestTrigger and
FSAM_MaintenanceVisitTrigger. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 31. Which trigger contexts are supported?

**Short interview answer:** Both declare before/after
insert/update/delete and after undelete. **Detailed technical answer:**
Both declare before/after insert/update/delete and after undelete.
**Project-specific answer:** Both declare before/after
insert/update/delete and after undelete. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 32. Is the trigger bulkified?

**Short interview answer:** Structurally yes: no SOQL/DML is inside
trigger loops, and the Service Request handler uses a Set of IDs.
**Detailed technical answer:** Structurally yes: no SOQL/DML is inside
trigger loops, and the Service Request handler uses a Set of IDs.
**Project-specific answer:** Structurally yes: no SOQL/DML is inside
trigger loops, and the Service Request handler uses a Set of IDs.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 33. Is recursion protection implemented?

**Short interview answer:** No static recursion guard is implemented.
Current handlers do not perform DML, so they do not currently create
significant recursion. **Detailed technical answer:** No static
recursion guard is implemented. Current handlers do not perform DML, so
they do not currently create significant recursion. **Project-specific
answer:** No static recursion guard is implemented. Current handlers do
not perform DML, so they do not currently create significant recursion.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 34. Could Flow replace the current trigger behavior?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 35. What belongs in a handler versus service?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 36. Which LWCs call Apex?

**Short interview answer:** The page-level Apex consumers are
fsamAssetExplorer, fsamDashboard, fsamEngineerDashboard,
fsamInventoryWorkspace and fsamServiceRequestWorkspace. **Detailed
technical answer:** The page-level Apex consumers are fsamAssetExplorer,
fsamDashboard, fsamEngineerDashboard, fsamInventoryWorkspace and
fsamServiceRequestWorkspace. **Project-specific answer:** The page-level
Apex consumers are fsamAssetExplorer, fsamDashboard,
fsamEngineerDashboard, fsamInventoryWorkspace and
fsamServiceRequestWorkspace. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 37. Which use @wire?

**Short interview answer:** Asset Explorer, Engineer Dashboard,
Inventory Workspace and Service Request Workspace use wire. **Detailed
technical answer:** Asset Explorer, Engineer Dashboard, Inventory
Workspace and Service Request Workspace use wire. **Project-specific
answer:** Asset Explorer, Engineer Dashboard, Inventory Workspace and
Service Request Workspace use wire. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 38. Which uses imperative Apex?

**Short interview answer:** fsamDashboard uses connectedCallback with
async/await and try/catch/finally. **Detailed technical answer:**
fsamDashboard uses connectedCallback with async/await and
try/catch/finally. **Project-specific answer:** fsamDashboard uses
connectedCallback with async/await and try/catch/finally. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 39. Why is Dashboard imperative?

**Short interview answer:** fsamDashboard uses connectedCallback with
async/await and try/catch/finally. **Detailed technical answer:**
fsamDashboard uses connectedCallback with async/await and
try/catch/finally. **Project-specific answer:** fsamDashboard uses
connectedCallback with async/await and try/catch/finally. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 40. How does Asset Explorer communicate with children?

**Short interview answer:** The parent owns state; children receive @api
properties and emit CustomEvents such as search and assetselect.
**Detailed technical answer:** The parent owns state; children receive
@api properties and emit CustomEvents such as search and assetselect.
**Project-specific answer:** The parent owns state; children receive
@api properties and emit CustomEvents such as search and assetselect.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 41. What does @api do?

**Short interview answer:** It exposes public component
properties/methods used by parents to pass data or invoke reusable
behavior. **Detailed technical answer:** It exposes public component
properties/methods used by parents to pass data or invoke reusable
behavior. **Project-specific answer:** It exposes public component
properties/methods used by parents to pass data or invoke reusable
behavior. **Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 42. Why is @track not used?

**Short interview answer:** Modern LWC reactivity generally does not
require @track for normal class fields. **Detailed technical answer:**
Modern LWC reactivity generally does not require @track for normal class
fields. **Project-specific answer:** Modern LWC reactivity generally
does not require @track for normal class fields. **Likely follow-up:**
What would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 43. How does pagination work?

**Short interview answer:** fsamPagination maintains current/total page
state and emits pagechange. **Detailed technical answer:**
fsamPagination maintains current/total page state and emits pagechange.
**Project-specific answer:** fsamPagination maintains current/total page
state and emits pagechange. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 44. What is wrong with the SearchBar event contract?

**Short interview answer:** SearchBar emits detail.value, while
AssetSearch/InventorySearch and the parent workspaces expect
detail.searchTerm. The event contract is inconsistent. **Detailed
technical answer:** SearchBar emits detail.value, while
AssetSearch/InventorySearch and the parent workspaces expect
detail.searchTerm. The event contract is inconsistent.
**Project-specific answer:** SearchBar emits detail.value, while
AssetSearch/InventorySearch and the parent workspaces expect
detail.searchTerm. The event contract is inconsistent. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 45. How would you add navigation to quick actions?

**Short interview answer:** Use NavigationMixin and navigate to the
target tab/object/record/custom page. **Detailed technical answer:** Use
NavigationMixin and navigate to the target tab/object/record/custom
page. **Project-specific answer:** Use NavigationMixin and navigate to
the target tab/object/record/custom page. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 46. How should Apex errors be surfaced?

**Short interview answer:** Normalize Apex errors and surface safe
user-facing messages with the reusable ErrorPanel/Toast instead of
relying only on console.error. **Detailed technical answer:** Normalize
Apex errors and surface safe user-facing messages with the reusable
ErrorPanel/Toast instead of relying only on console.error.
**Project-specific answer:** Normalize Apex errors and surface safe
user-facing messages with the reusable ErrorPanel/Toast instead of
relying only on console.error. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 47. Where is SOQL centralized?

**Short interview answer:** SOQL is centralized in four selector
classes. **Detailed technical answer:** SOQL is centralized in four
selector classes. **Project-specific answer:** SOQL is centralized in
four selector classes. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 48. Are SOQL queries inside loops present?

**Short interview answer:** No such pattern was found in the inspected
production Apex. **Detailed technical answer:** No such pattern was
found in the inspected production Apex. **Project-specific answer:** No
such pattern was found in the inspected production Apex. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 49. Are DML statements inside loops present?

**Short interview answer:** No such pattern was found in the inspected
production Apex. **Detailed technical answer:** No such pattern was
found in the inspected production Apex. **Project-specific answer:** No
such pattern was found in the inspected production Apex. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 50. What is wrong with unbounded selectors?

**Short interview answer:** Selectors such as getOpenRequests can return
large result sets; production design should add selective filters and
pagination. **Detailed technical answer:** Selectors such as
getOpenRequests can return large result sets; production design should
add selective filters and pagination. **Project-specific answer:**
Selectors such as getOpenRequests can return large result sets;
production design should add selective filters and pagination. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 51. How would you implement server-side pagination?

**Short interview answer:** fsamPagination maintains current/total page
state and emits pagechange. **Detailed technical answer:**
fsamPagination maintains current/total page state and emits pagechange.
**Project-specific answer:** fsamPagination maintains current/total page
state and emits pagechange. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 52. OFFSET versus keyset pagination?

**Short interview answer:** fsamPagination maintains current/total page
state and emits pagechange. **Detailed technical answer:**
fsamPagination maintains current/total page state and emits pagechange.
**Project-specific answer:** fsamPagination maintains current/total page
state and emits pagechange. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 53. How would you make asset search selective?

**Short interview answer:** Use indexed/selective filters and inspect
the query plan rather than scanning broad datasets. **Detailed technical
answer:** Use indexed/selective filters and inspect the query plan
rather than scanning broad datasets. **Project-specific answer:** Use
indexed/selective filters and inspect the query plan rather than
scanning broad datasets. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 54. What six flows exist?

**Short interview answer:** Engineer Assignment Automation, Inventory
Update Automation, Maintenance Visit Completed, Maintenance Visit
Started, SLA Validation and Service Request Status Automation.
**Detailed technical answer:** Engineer Assignment Automation, Inventory
Update Automation, Maintenance Visit Completed, Maintenance Visit
Started, SLA Validation and Service Request Status Automation.
**Project-specific answer:** Engineer Assignment Automation, Inventory
Update Automation, Maintenance Visit Completed, Maintenance Visit
Started, SLA Validation and Service Request Status Automation. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 55. Why is SLA validation before-save?

**Short interview answer:** SLA validation changes/validates the same
record, so before-save avoids an extra DML operation. **Detailed
technical answer:** SLA validation changes/validates the same record, so
before-save avoids an extra DML operation. **Project-specific answer:**
SLA validation changes/validates the same record, so before-save avoids
an extra DML operation. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 56. Why is engineer assignment after-save?

**Short interview answer:** Assignment updates a related Service Request
and sends an email, so after-save is appropriate. **Detailed technical
answer:** Assignment updates a related Service Request and sends an
email, so after-save is appropriate. **Project-specific answer:**
Assignment updates a related Service Request and sends an email, so
after-save is appropriate. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 57. How does Maintenance Visit Completed determine all visits are done?

**Short interview answer:** The completion Flow gets all visits for the
request, loops through them, flags any not Completed, and completes the
request only when none remain open. **Detailed technical answer:** The
completion Flow gets all visits for the request, loops through them,
flags any not Completed, and completes the request only when none remain
open. **Project-specific answer:** The completion Flow gets all visits
for the request, loops through them, flags any not Completed, and
completes the request only when none remain open. **Likely follow-up:**
What would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 58. How does Inventory Update call Apex?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 59. Why use Invocable Apex?

**Short interview answer:** The Flow passes part ID and quantity to
FSAM_InventoryInvocable, which delegates to FSAM_InventoryService.
**Detailed technical answer:** The Flow passes part ID and quantity to
FSAM_InventoryInvocable, which delegates to FSAM_InventoryService.
**Project-specific answer:** The Flow passes part ID and quantity to
FSAM_InventoryInvocable, which delegates to FSAM_InventoryService.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 60. What does Service Request Status Automation do?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 61. What happens if SLA Due Date is blank?

**Short interview answer:** The SLA before-save Flow sets it to Open
Date plus three days. **Detailed technical answer:** The SLA before-save
Flow sets it to Open Date plus three days. **Project-specific answer:**
The SLA before-save Flow sets it to Open Date plus three days. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 62. What happens if a request is closed without Closed Date?

**Short interview answer:** A field-level Flow custom error and a
validation rule require Closed Date for a closed request. **Detailed
technical answer:** A field-level Flow custom error and a validation
rule require Closed Date for a closed request. **Project-specific
answer:** A field-level Flow custom error and a validation rule require
Closed Date for a closed request. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 63. Could the flows recurse?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 64. CRUD versus FLS?

**Short interview answer:** CRUD is object-level access; FLS is
field-level access. **Detailed technical answer:** CRUD is object-level
access; FLS is field-level access. **Project-specific answer:** CRUD is
object-level access; FLS is field-level access. **Likely follow-up:**
What would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 65. What does with sharing enforce?

**Short interview answer:** with sharing enforces record-level sharing,
not CRUD/FLS. **Detailed technical answer:** with sharing enforces
record-level sharing, not CRUD/FLS. **Project-specific answer:** with
sharing enforces record-level sharing, not CRUD/FLS. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 66. What does with sharing not enforce?

**Short interview answer:** It does not automatically enforce object
CRUD or field-level security. **Detailed technical answer:** It does not
automatically enforce object CRUD or field-level security.
**Project-specific answer:** It does not automatically enforce object
CRUD or field-level security. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 67. Where is CRUD checking implemented?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 68. Where is stripInaccessible used?

**Short interview answer:** It removes fields the running user cannot
access for the specified DML operation, helping enforce FLS. **Detailed
technical answer:** It removes fields the running user cannot access for
the specified DML operation, helping enforce FLS. **Project-specific
answer:** It removes fields the running user cannot access for the
specified DML operation, helping enforce FLS. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 69. Does every selector enforce FLS?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 70. What are the actual sharing models?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 71. Are sharing rules present?

**Short interview answer:** No sharing-rule metadata is present; the
docs explicitly say sharing rules were intentionally omitted. **Detailed
technical answer:** No sharing-rule metadata is present; the docs
explicitly say sharing rules were intentionally omitted.
**Project-specific answer:** No sharing-rule metadata is present; the
docs explicitly say sharing rules were intentionally omitted. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 72. Are View All/Modify All granted?

**Short interview answer:** The FSAM_User permission set sets View All
Records and Modify All Records to false. **Detailed technical answer:**
The FSAM_User permission set sets View All Records and Modify All
Records to false. **Project-specific answer:** The FSAM_User permission
set sets View All Records and Modify All Records to false. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 73. What would you improve?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 74. Where are the governor-limit risks?

**Short interview answer:** Main risks are unbounded result sets, Flow
loops, client-side loading and future live-data implementations.
**Detailed technical answer:** Main risks are unbounded result sets,
Flow loops, client-side loading and future live-data implementations.
**Project-specific answer:** Main risks are unbounded result sets, Flow
loops, client-side loading and future live-data implementations.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 75. How would 200 Part Replacements be handled?

**Short interview answer:** Bulk process collections, aggregate inputs,
query once and DML once; add explicit bulk tests. **Detailed technical
answer:** Bulk process collections, aggregate inputs, query once and DML
once; add explicit bulk tests. **Project-specific answer:** Bulk process
collections, aggregate inputs, query once and DML once; add explicit
bulk tests. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 76. What happens with 50,000 service requests?

**Short interview answer:** The current design would need server-side
pagination, selective queries, archiving/retention and async processing
where appropriate. **Detailed technical answer:** The current design
would need server-side pagination, selective queries,
archiving/retention and async processing where appropriate.
**Project-specific answer:** The current design would need server-side
pagination, selective queries, archiving/retention and async processing
where appropriate. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 77. What is the CPU risk in visit completion Flow?

**Short interview answer:** The visit-completion Flow loops all child
visits, so CPU/Flow-element consumption grows with visit count.
**Detailed technical answer:** The visit-completion Flow loops all child
visits, so CPU/Flow-element consumption grows with visit count.
**Project-specific answer:** The visit-completion Flow loops all child
visits, so CPU/Flow-element consumption grows with visit count. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 78. How would you handle concurrent inventory updates?

**Short interview answer:** The current inventory code lacks row
locking; concurrent transactions could oversubscribe stock. A production
design should use FOR UPDATE and defined retry behavior. **Detailed
technical answer:** The current inventory code lacks row locking;
concurrent transactions could oversubscribe stock. A production design
should use FOR UPDATE and defined retry behavior. **Project-specific
answer:** The current inventory code lacks row locking; concurrent
transactions could oversubscribe stock. A production design should use
FOR UPDATE and defined retry behavior. **Likely follow-up:** What would
you change before production? **Follow-up answer:** Wire live data,
enforce security consistently, add bulk/negative/concurrency tests, and
improve scalability/observability as appropriate.

### 79. Does the project use Queueable?

**Short interview answer:** No. Do not claim Queueable is implemented.
**Detailed technical answer:** No. Do not claim Queueable is
implemented. **Project-specific answer:** No. Do not claim Queueable is
implemented. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 80. Does it use Future?

**Short interview answer:** No. **Detailed technical answer:** No.
**Project-specific answer:** No. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 81. Does it use Batch?

**Short interview answer:** No. **Detailed technical answer:** No.
**Project-specific answer:** No. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 82. When would you introduce Queueable?

**Short interview answer:** Not currently used; introduce it if the
callout/work needs an asynchronous transaction boundary. **Detailed
technical answer:** Not currently used; introduce it if the callout/work
needs an asynchronous transaction boundary. **Project-specific answer:**
Not currently used; introduce it if the callout/work needs an
asynchronous transaction boundary. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 83. When would Batch be better?

**Short interview answer:** Not currently used; Batch would be
appropriate for very large datasets processed in chunks. **Detailed
technical answer:** Not currently used; Batch would be appropriate for
very large datasets processed in chunks. **Project-specific answer:**
Not currently used; Batch would be appropriate for very large datasets
processed in chunks. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 84. Can a trigger make a callout directly?

**Short interview answer:** A synchronous trigger should not make a
normal HTTP callout directly; use an async callout-capable pattern.
**Detailed technical answer:** A synchronous trigger should not make a
normal HTTP callout directly; use an async callout-capable pattern.
**Project-specific answer:** A synchronous trigger should not make a
normal HTTP callout directly; use an async callout-capable pattern.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 85. How does the manufacturer integration work?

**Short interview answer:** Apex performs a GET via
callout:FSAM_Manufacturer_API, checks for HTTP 200 and deserializes JSON
into FSAM_ManufacturerResponseDTO. **Detailed technical answer:** Apex
performs a GET via callout:FSAM_Manufacturer_API, checks for HTTP 200
and deserializes JSON into FSAM_ManufacturerResponseDTO.
**Project-specific answer:** Apex performs a GET via
callout:FSAM_Manufacturer_API, checks for HTTP 200 and deserializes JSON
into FSAM_ManufacturerResponseDTO. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 86. Why Named Credential?

**Short interview answer:** It centralizes endpoint/auth configuration
and avoids embedding credentials in Apex. **Detailed technical answer:**
It centralizes endpoint/auth configuration and avoids embedding
credentials in Apex. **Project-specific answer:** It centralizes
endpoint/auth configuration and avoids embedding credentials in Apex.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 87. What does the External Credential do?

**Short interview answer:** It supplies the authentication/principal
model consumed by the Named Credential. **Detailed technical answer:**
It supplies the authentication/principal model consumed by the Named
Credential. **Project-specific answer:** It supplies the
authentication/principal model consumed by the Named Credential.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 88. What authentication is actually configured?

**Short interview answer:** The uploaded External Credential is
configured with a custom protocol and NoAuthentication, so it is a
mock-style setup rather than evidence of production auth. **Detailed
technical answer:** The uploaded External Credential is configured with
a custom protocol and NoAuthentication, so it is a mock-style setup
rather than evidence of production auth. **Project-specific answer:**
The uploaded External Credential is configured with a custom protocol
and NoAuthentication, so it is a mock-style setup rather than evidence
of production auth. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 89. What HTTP method and timeout are used?

**Short interview answer:** The integration uses HTTP GET with a
10-second timeout. **Detailed technical answer:** The integration uses
HTTP GET with a 10-second timeout. **Project-specific answer:** The
integration uses HTTP GET with a 10-second timeout. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 90. How is JSON parsed?

**Short interview answer:** JSON.deserialize maps the response body into
FSAM_ManufacturerResponseDTO. **Detailed technical answer:**
JSON.deserialize maps the response body into
FSAM_ManufacturerResponseDTO. **Project-specific answer:**
JSON.deserialize maps the response body into
FSAM_ManufacturerResponseDTO. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 91. How are HTTP errors handled?

**Short interview answer:** Any status other than 200 becomes
FSAM_IntegrationException. **Detailed technical answer:** Any status
other than 200 becomes FSAM_IntegrationException. **Project-specific
answer:** Any status other than 200 becomes FSAM_IntegrationException.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 92. How are invalid JSON errors handled?

**Short interview answer:** JSON.deserialize maps the response body into
FSAM_ManufacturerResponseDTO. **Detailed technical answer:**
JSON.deserialize maps the response body into
FSAM_ManufacturerResponseDTO. **Project-specific answer:**
JSON.deserialize maps the response body into
FSAM_ManufacturerResponseDTO. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 93. How are callouts tested?

**Short interview answer:** HttpCalloutMock covers success, HTTP 500 and
invalid JSON. **Detailed technical answer:** HttpCalloutMock covers
success, HTTP 500 and invalid JSON. **Project-specific answer:**
HttpCalloutMock covers success, HTTP 500 and invalid JSON. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 94. How would you retry failures?

**Short interview answer:** Use bounded async retries, idempotency,
persistent attempt/status tracking and operational alerting. **Detailed
technical answer:** Use bounded async retries, idempotency, persistent
attempt/status tracking and operational alerting. **Project-specific
answer:** Use bounded async retries, idempotency, persistent
attempt/status tracking and operational alerting. **Likely follow-up:**
What would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 95. What Apex tests exist?

**Short interview answer:** The suite includes controller, service,
selector, trigger and integration tests. **Detailed technical answer:**
The suite includes controller, service, selector, trigger and
integration tests. **Project-specific answer:** The suite includes
controller, service, selector, trigger and integration tests. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 96. What does Test.startTest do?

**Short interview answer:** It resets governor-limit counters for the
code under test and establishes the test execution boundary. **Detailed
technical answer:** It resets governor-limit counters for the code under
test and establishes the test execution boundary. **Project-specific
answer:** It resets governor-limit counters for the code under test and
establishes the test execution boundary. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 97. Why Test.stopTest?

**Short interview answer:** It ends the isolated test block and flushes
asynchronous work where applicable. **Detailed technical answer:** It
ends the isolated test block and flushes asynchronous work where
applicable. **Project-specific answer:** It ends the isolated test block
and flushes asynchronous work where applicable. **Likely follow-up:**
What would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 98. Is @TestSetup used?

**Short interview answer:** No. Test data is created in individual test
methods. **Detailed technical answer:** No. Test data is created in
individual test methods. **Project-specific answer:** No. Test data is
created in individual test methods. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 99. What does TestDataFactory create?

**Short interview answer:** It creates Account, Contact, Customer Asset,
Service Request, Service Part and Maintenance Visit test data.
**Detailed technical answer:** It creates Account, Contact, Customer
Asset, Service Request, Service Part and Maintenance Visit test data.
**Project-specific answer:** It creates Account, Contact, Customer
Asset, Service Request, Service Part and Maintenance Visit test data.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 100. Are negative tests sufficient?

**Short interview answer:** Coverage is incomplete; add insufficient
inventory, null/missing records, permission and validation failure
tests. **Detailed technical answer:** Coverage is incomplete; add
insufficient inventory, null/missing records, permission and validation
failure tests. **Project-specific answer:** Coverage is incomplete; add
insufficient inventory, null/missing records, permission and validation
failure tests. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 101. Are bulk tests sufficient?

**Short interview answer:** They are not comprehensive; add multi-record
tests for services, invocable inventory and triggers. **Detailed
technical answer:** They are not comprehensive; add multi-record tests
for services, invocable inventory and triggers. **Project-specific
answer:** They are not comprehensive; add multi-record tests for
services, invocable inventory and triggers. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 102. Are LWC tests meaningful?

**Short interview answer:** No. The 28 Jest files are CLI-generated TODO
placeholders. **Detailed technical answer:** No. The 28 Jest files are
CLI-generated TODO placeholders. **Project-specific answer:** No. The 28
Jest files are CLI-generated TODO placeholders. **Likely follow-up:**
What would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 103. What is in sfdx-project.json?

**Short interview answer:** It defines force-app as the default package
directory, project name field-service-asset-maintenance, no namespace,
Salesforce login URL and source API version 66.0. **Detailed technical
answer:** It defines force-app as the default package directory, project
name field-service-asset-maintenance, no namespace, Salesforce login URL
and source API version 66.0. **Project-specific answer:** It defines
force-app as the default package directory, project name
field-service-asset-maintenance, no namespace, Salesforce login URL and
source API version 66.0. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 104. Is package.xml present?

**Short interview answer:** No. It is not present anywhere in the
uploaded project. **Detailed technical answer:** No. It is not present
anywhere in the uploaded project. **Project-specific answer:** No. It is
not present anywhere in the uploaded project. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 105. Is GitHub Actions present?

**Short interview answer:** No committed .github/workflows configuration
is present. **Detailed technical answer:** No committed
.github/workflows configuration is present. **Project-specific answer:**
No committed .github/workflows configuration is present. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 106. How would you deploy the project?

**Short interview answer:** Use Salesforce CLI, deploy source with sf
project deploy start, assign FSAM_User, configure credentials,
activate/verify flows and run tests. **Detailed technical answer:** Use
Salesforce CLI, deploy source with sf project deploy start, assign
FSAM_User, configure credentials, activate/verify flows and run tests.
**Project-specific answer:** Use Salesforce CLI, deploy source with sf
project deploy start, assign FSAM_User, configure credentials,
activate/verify flows and run tests. **Likely follow-up:** What would
you change before production? **Follow-up answer:** Wire live data,
enforce security consistently, add bulk/negative/concurrency tests, and
improve scalability/observability as appropriate.

### 107. How would you validate a deployment?

**Short interview answer:** Use Salesforce CLI, deploy source with sf
project deploy start, assign FSAM_User, configure credentials,
activate/verify flows and run tests. **Detailed technical answer:** Use
Salesforce CLI, deploy source with sf project deploy start, assign
FSAM_User, configure credentials, activate/verify flows and run tests.
**Project-specific answer:** Use Salesforce CLI, deploy source with sf
project deploy start, assign FSAM_User, configure credentials,
activate/verify flows and run tests. **Likely follow-up:** What would
you change before production? **Follow-up answer:** Wire live data,
enforce security consistently, add bulk/negative/concurrency tests, and
improve scalability/observability as appropriate.

### 108. Can branch history be proven from this ZIP?

**Short interview answer:** No. The ZIP has Git configuration files but
no .git history. **Detailed technical answer:** No. The ZIP has Git
configuration files but no .git history. **Project-specific answer:**
No. The ZIP has Git configuration files but no .git history. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 109. What local quality tooling is included?

**Short interview answer:** ESLint, Prettier, Husky, lint-staged and
sfdx-lwc-jest are configured. **Detailed technical answer:** ESLint,
Prettier, Husky, lint-staged and sfdx-lwc-jest are configured.
**Project-specific answer:** ESLint, Prettier, Husky, lint-staged and
sfdx-lwc-jest are configured. **Likely follow-up:** What would you
change before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 110. Why is the current dashboard fast?

**Short interview answer:** It is fast because the controller performs
no SOQL/DML and returns a small static DTO. **Detailed technical
answer:** It is fast because the controller performs no SOQL/DML and
returns a small static DTO. **Project-specific answer:** It is fast
because the controller performs no SOQL/DML and returns a small static
DTO. **Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 111. Why is that not enough for production?

**Short interview answer:** That speed is not evidence of scalability
because the current read path is not connected to live data. **Detailed
technical answer:** That speed is not evidence of scalability because
the current read path is not connected to live data. **Project-specific
answer:** That speed is not evidence of scalability because the current
read path is not connected to live data. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 112. How would you optimize Asset Explorer?

**Short interview answer:** Move filtering/pagination to server-side
selectors, return only required fields/rows and use selective queries.
**Detailed technical answer:** Move filtering/pagination to server-side
selectors, return only required fields/rows and use selective queries.
**Project-specific answer:** Move filtering/pagination to server-side
selectors, return only required fields/rows and use selective queries.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 113. How would you optimize Inventory Workspace?

**Short interview answer:** Move filtering/pagination to server-side
selectors, return only required fields/rows and use selective queries.
**Detailed technical answer:** Move filtering/pagination to server-side
selectors, return only required fields/rows and use selective queries.
**Project-specific answer:** Move filtering/pagination to server-side
selectors, return only required fields/rows and use selective queries.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 114. How would you measure performance?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 115. Two users consume the last part. What happens?

**Short interview answer:** The current inventory code lacks row
locking; concurrent transactions could oversubscribe stock. A production
design should use FOR UPDATE and defined retry behavior. **Detailed
technical answer:** The current inventory code lacks row locking;
concurrent transactions could oversubscribe stock. A production design
should use FOR UPDATE and defined retry behavior. **Project-specific
answer:** The current inventory code lacks row locking; concurrent
transactions could oversubscribe stock. A production design should use
FOR UPDATE and defined retry behavior. **Likely follow-up:** What would
you change before production? **Follow-up answer:** Wire live data,
enforce security consistently, add bulk/negative/concurrency tests, and
improve scalability/observability as appropriate.

### 116. The manufacturer API returns 500. What happens?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 117. A user lacks Service Request update permission. What happens?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 118. A user lacks FLS. What happens?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 119. A visit completes while another visit remains open. What happens?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 120. The same part appears twice in one invocable call. What happens?

**Short interview answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Detailed technical answer:** Be explicit
about the exact component and distinguish current implementation from
future design; do not claim unsupported functionality.
**Project-specific answer:** Be explicit about the exact component and
distinguish current implementation from future design; do not claim
unsupported functionality. **Likely follow-up:** What would you change
before production? **Follow-up answer:** Wire live data, enforce
security consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 121. Asset search is broken. Where do you look first?

**Short interview answer:** Check the CustomEvent detail shape first:
SearchBar emits value while consumers expect searchTerm. **Detailed
technical answer:** Check the CustomEvent detail shape first: SearchBar
emits value while consumers expect searchTerm. **Project-specific
answer:** Check the CustomEvent detail shape first: SearchBar emits
value while consumers expect searchTerm. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 122. Maintenance completion throws QueryException. What is suspicious?

**Short interview answer:** The project has FSAM_BusinessException for
business failures and FSAM_IntegrationException for integration
failures. **Detailed technical answer:** The project has
FSAM_BusinessException for business failures and
FSAM_IntegrationException for integration failures. **Project-specific
answer:** The project has FSAM_BusinessException for business failures
and FSAM_IntegrationException for integration failures. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 123. Why not put everything in Flow?

**Short interview answer:** Keep simple declarative orchestration in
Flow; use Apex for reusable complex logic such as inventory validation.
**Detailed technical answer:** Keep simple declarative orchestration in
Flow; use Apex for reusable complex logic such as inventory validation.
**Project-specific answer:** Keep simple declarative orchestration in
Flow; use Apex for reusable complex logic such as inventory validation.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 124. Why not put everything in Apex?

**Short interview answer:** Apex is powerful but unnecessary for
straightforward same-record/defaulting and notification orchestration.
**Detailed technical answer:** Apex is powerful but unnecessary for
straightforward same-record/defaulting and notification orchestration.
**Project-specific answer:** Apex is powerful but unnecessary for
straightforward same-record/defaulting and notification orchestration.
**Likely follow-up:** What would you change before production?
**Follow-up answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 125. How would you support multiple manufacturers?

**Short interview answer:** Introduce an integration interface/strategy
with manufacturer-specific implementations and externalized
configuration. **Detailed technical answer:** Introduce an integration
interface/strategy with manufacturer-specific implementations and
externalized configuration. **Project-specific answer:** Introduce an
integration interface/strategy with manufacturer-specific
implementations and externalized configuration. **Likely follow-up:**
What would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 126. What is the biggest architectural weakness?

**Short interview answer:** The biggest mismatch is between the
documented layered live-data architecture and the current static
workspace read controllers. **Detailed technical answer:** The biggest
mismatch is between the documented layered live-data architecture and
the current static workspace read controllers. **Project-specific
answer:** The biggest mismatch is between the documented layered
live-data architecture and the current static workspace read
controllers. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 127. What is the biggest security weakness?

**Short interview answer:** CRUD/FLS enforcement is not consistently
applied across all selectors/services. **Detailed technical answer:**
CRUD/FLS enforcement is not consistently applied across all
selectors/services. **Project-specific answer:** CRUD/FLS enforcement is
not consistently applied across all selectors/services. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 128. What is the biggest scalability weakness?

**Short interview answer:** Unbounded queries/client-side filtering and
the maintenance-visit Flow loop are the main scale risks. **Detailed
technical answer:** Unbounded queries/client-side filtering and the
maintenance-visit Flow loop are the main scale risks. **Project-specific
answer:** Unbounded queries/client-side filtering and the
maintenance-visit Flow loop are the main scale risks. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 129. What would you change before production?

**Short interview answer:** That speed is not evidence of scalability
because the current read path is not connected to live data. **Detailed
technical answer:** That speed is not evidence of scalability because
the current read path is not connected to live data. **Project-specific
answer:** That speed is not evidence of scalability because the current
read path is not connected to live data. **Likely follow-up:** What
would you change before production? **Follow-up answer:** Wire live
data, enforce security consistently, add bulk/negative/concurrency
tests, and improve scalability/observability as appropriate.

### 130. How would you introduce CI/CD?

**Short interview answer:** Add a pipeline for metadata
validation/deploy, Apex tests, LWC Jest, linting and gated environment
promotion. **Detailed technical answer:** Add a pipeline for metadata
validation/deploy, Apex tests, LWC Jest, linting and gated environment
promotion. **Project-specific answer:** Add a pipeline for metadata
validation/deploy, Apex tests, LWC Jest, linting and gated environment
promotion. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 131. How would you support one million service requests?

**Short interview answer:** Use selective indexed access, keyset
pagination, archival strategy, async processing and avoid sending huge
datasets to LWCs. **Detailed technical answer:** Use selective indexed
access, keyset pagination, archival strategy, async processing and avoid
sending huge datasets to LWCs. **Project-specific answer:** Use
selective indexed access, keyset pagination, archival strategy, async
processing and avoid sending huge datasets to LWCs. **Likely
follow-up:** What would you change before production? **Follow-up
answer:** Wire live data, enforce security consistently, add
bulk/negative/concurrency tests, and improve scalability/observability
as appropriate.

### 132. How would you prevent automation conflicts?

**Short interview answer:** Assign a single owner to each business rule,
tighten entry criteria and document Flow/Trigger order of execution.
**Detailed technical answer:** Assign a single owner to each business
rule, tighten entry criteria and document Flow/Trigger order of
execution. **Project-specific answer:** Assign a single owner to each
business rule, tighten entry criteria and document Flow/Trigger order of
execution. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

### 133. What technical debt should be fixed first?

**Short interview answer:** Prioritize live data integration, security
consistency, search event contract, Service Contact metadata, meaningful
tests and concurrency. **Detailed technical answer:** Prioritize live
data integration, security consistency, search event contract, Service
Contact metadata, meaningful tests and concurrency. **Project-specific
answer:** Prioritize live data integration, security consistency, search
event contract, Service Contact metadata, meaningful tests and
concurrency. **Likely follow-up:** What would you change before
production? **Follow-up answer:** Wire live data, enforce security
consistently, add bulk/negative/concurrency tests, and improve
scalability/observability as appropriate.

# 27. Senior-Level Follow-Up Questions

### Why did you choose Apex instead of Flow?

**Strong answer:** Use Flow for straightforward declarative
orchestration; use Apex for reusable, complex or integration-heavy
business logic.

### Why did you choose Flow instead of Apex?

**Strong answer:** Use Flow for straightforward declarative
orchestration; use Apex for reusable, complex or integration-heavy
business logic.

### Why did you choose LWC instead of standard UI?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

### Why Queueable instead of Future?

**Strong answer:** Not currently used; introduce it if the callout/work
needs an asynchronous transaction boundary.

### How would this behave with 200 records?

**Strong answer:** Bulk process collections, aggregate inputs, query
once and DML once; add explicit bulk tests.

### What happens if 50,000 records are processed?

**Strong answer:** The current design would need server-side pagination,
selective queries, archiving/retention and async processing where
appropriate.

### How did you handle governor limits?

**Strong answer:** Main risks are unbounded result sets, Flow loops,
client-side loading and future live-data implementations.

### How did you handle recursion?

**Strong answer:** No static recursion guard is implemented. Current
handlers do not perform DML, so they do not currently create significant
recursion.

### How did you handle security?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

### What happens if integration fails?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

### How would you redesign the architecture?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

### What would you change if traffic increased?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

### How would you improve test coverage?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

### What happens during bulk loading?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

### What happens if two users update the same inventory record?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

### How would you prevent duplicate records?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

### What are the weaknesses of your implementation?

**Strong answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality.

# 28. Scenario-Based Questions

### Scenario: 200 Account records are updated at once.

**Correct answer:** There is no Account trigger in the project, so the
FSAM trigger logic does not execute just because Account changed.

### Scenario: 200 Part Replacement records are inserted.

**Correct answer:** Inventory processing must remain bulk-safe; the
current invocable should aggregate duplicate Part IDs before
querying/updating.

### Scenario: The external API is unavailable.

**Correct answer:** The integration service converts connection failure
into FSAM_IntegrationException; production should add
retry/persistence/alerting.

### Scenario: A user lacks FLS.

**Correct answer:** with sharing does not solve FLS; Service Request
updates strip inaccessible fields, but other paths need consistent
enforcement.

### Scenario: A trigger causes recursion.

**Correct answer:** Current handlers do not DML, so recursion is not
currently demonstrated. Future DML should use a scoped recursion
strategy and clear automation ownership.

### Scenario: Flow and Trigger both update the same record.

**Correct answer:** Order of execution can create competing updates;
assign a single owner for each status rule and tighten entry criteria.

### Scenario: The same inventory part appears twice in one invocable call.

**Correct answer:** The current Map.put overwrites the first quantity;
aggregate quantities instead.

### Scenario: A Service Request is Closed without Closed Date.

**Correct answer:** The SLA Flow custom error and validation rule block
the save.

# 29. Code Walkthrough Preparation

### `FSAM_ServiceRequestService.cls`

Explain closeRequests/updateStatus: Set IDs, selector, CRUD,
stripInaccessible, bulk DML.

### `FSAM_InventoryService.cls`

Explain query-once/update-once pattern, insufficient stock, concurrency
gap.

### `FSAM_InventoryInvocable.cls`

Explain Flow adapter and duplicate-key aggregation defect.

### `FSAM_ManufacturerIntegrationService.cls`

Explain Named Credential endpoint, timeout, HTTP validation, JSON and
exceptions.

### `FSAM_TriggerHandler.cls`

Explain virtual context methods and run() dispatch.

### `FSAM_AssetExplorerController.cls`

Explain DTO composition and explicitly state that the data is
static/mock.

### `fsamAssetExplorer.js`

Explain wire, state ownership, child events and filtering; identify the
event contract defect.

### `fsamSearchBar.js`

Explain debounce and cleanup; identify value/searchTerm mismatch.

### `FSAM_Maintenance_Visit_Completed.flow-meta.xml`

Explain all-visit completion check and Flow loop scale concern.

### `FSAM_User.permissionset-meta.xml`

Explain CRUD, selected FLS, no View All/Modify All and external
credential principal access.

# 30. Things I Must Memorize

### 🔴 Must Know

-   Six objects + relationships
-   Five page-level LWCs + controller mapping
-   Controller/Service/Selector/DTO architecture
-   Two triggers + handler framework
-   Six Flow names and responsibilities
-   Inventory Flow → Invocable → Service → Selector
-   Manufacturer integration + three mocks
-   with sharing vs CRUD/FLS
-   87% documented Apex coverage vs weak LWC tests
-   Search mismatch, Service Contact mismatch, selector exception,
    inventory concurrency

### 🟠 Should Know

-   Status/priority values
-   Formula and validation rules
-   Permission Set details
-   Report/dashboard purposes
-   Salesforce DX details
-   Lookup vs Master-Detail rationale
-   Before-save vs after-save Flow rationale

### 🟢 Good to Know

-   Individual DTO fields
-   Report type names
-   List view names
-   Exact page section names
-   ADR filenames

# 31. Final Interview Cheat Sheet

  -----------------------------------------------------------------------
  Item                                Answer
  ----------------------------------- -----------------------------------
  Project                             Field Service Asset Maintenance
                                      Portal (FSAM)

  Business problem                    Customer assets + service
                                      requests + maintenance +
                                      engineers + spare parts

  Objects                             6 custom objects

  Architecture                        LWC → Controller → Service →
                                      Selector; DTOs; trigger framework

  Triggers                            Service Request + Maintenance Visit

  Flows                               Assignment, Inventory, Visit
                                      Started, Visit Completed, SLA,
                                      Request Status

  UI                                  Dashboard, Asset Explorer, Service
                                      Request Workspace, Engineer
                                      Dashboard, Inventory Workspace

  Integration                         Manufacturer REST GET via Named
                                      Credential

  Async Apex                          Not implemented

  Security                            with sharing + permission set +
                                      CRUD/FLS utilities; incomplete
                                      consistency

  Testing                             Apex layered tests; 87% documented;
                                      LWC Jest placeholders

  Deployment                          DX + CLI + scratch definition; no
                                      package.xml/CI workflow

  Biggest weakness                    Static workspace read controllers

  Biggest security concern            CRUD/FLS not consistently enforced

  Biggest performance concern         Unbounded data + client-side
                                      filtering + Flow loop

  Biggest metadata defect             Service Contact references Contract

  Biggest UI defect                   Search event value vs searchTerm
                                      mismatch

  Version 2                           Live data, pagination, security
                                      hardening, tests, concurrency,
                                      CI/CD
  -----------------------------------------------------------------------

# 32. Complete Mock Interview

## Round 1 --- Project Introduction

### Question 1: What business problem does FSAM solve?

**Ideal answer:** It manages customer-owned assets, service requests,
maintenance visits, engineer assignments, spare parts and maintenance
history. **Key points expected:** exact component name, why the design
was chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 2: Who are the users/personas?

**Ideal answer:** Service/operations users, engineers, inventory users
and managers are reasonable personas from the implemented workspaces; a
complete role hierarchy is not implemented. **Key points expected:**
exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 3: What are the six custom objects?

**Ideal answer:** Customer Asset, Service Request, Maintenance Visit,
Engineer Assignment, Service Part and Part Replacement. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 4: Walk me through the business lifecycle.

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 5: What was your role?

**Ideal answer:** The repository demonstrates end-to-end Salesforce
development across metadata, Apex, Flow, LWC, security, integration,
testing and documentation. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 6: What are the main Version 1 limitations?

**Ideal answer:** The main read controllers use mock/static DTO data;
LWC tests are placeholders; CI/CD is absent; some navigation/error paths
are incomplete. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 7: Why Controller → Service → Selector?

**Ideal answer:** Controllers expose the UI contract, Services contain
reusable business logic/DML, and Selectors centralize SOQL. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 8: Why use DTOs?

**Ideal answer:** DTOs create a stable UI/integration payload
independent of the underlying SObject schema. **Key points expected:**
exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 9: Why one trigger per object?

**Ideal answer:** One trigger per object keeps execution centralized and
delegates context handling to the framework. **Key points expected:**
exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 10: Why use Flow for simple automation?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

## Round 2 --- Salesforce Fundamentals

### Question 1: Where should Apex start instead?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 2: Why is Account → Customer Asset a Lookup?

**Ideal answer:** The ADR says assets need an independent lifecycle, so
a Lookup avoids the parent-controlled lifecycle of Master-Detail. **Key
points expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 3: Why is Customer Asset → Service Request Master-Detail?

**Ideal answer:** The request is a child operational record of the asset
and the metadata uses ControlledByParent sharing. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 4: Why is Service Request → Maintenance Visit Master-Detail?

**Ideal answer:** Visits are part of the request lifecycle and are
modeled as child records. **Key points expected:** exact component name,
why the design was chosen, governor/security/testing implications, and
honest scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 5: Why is Part Replacement → Service Part a Lookup?

**Ideal answer:** Service Part is reusable master data; the replacement
should reference it without owning its lifecycle. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 6: What are the external IDs?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 7: What formula calculates warranty active?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 8: What formula calculates reorder required?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 9: What formula calculates total cost?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 10: What is wrong with Service Contact?

**Ideal answer:** The field is labeled Service Contact and the ADR
describes a Contact, but the actual metadata references Contract. That
inconsistency should be fixed. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

## Round 3 --- Project Architecture

### Question 1: Explain FSAM_ServiceRequestService.closeRequests().

**Ideal answer:** It validates IDs, queries through the selector, checks
update CRUD, sets Closed, strips inaccessible fields and performs one
bulk update. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 2: Why does closeRequests accept Set`<Id>`{=html}?

**Ideal answer:** It validates IDs, queries through the selector, checks
update CRUD, sets Closed, strips inaccessible fields and performs one
bulk update. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 3: Why use Security.stripInaccessible?

**Ideal answer:** It removes fields the running user cannot access for
the specified DML operation, helping enforce FLS. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 4: What does FSAM_InventoryService.decreaseInventory do?

**Ideal answer:** It queries parts once, validates requested quantity,
decrements in memory and performs one update. **Key points expected:**
exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 5: What happens when inventory is insufficient?

**Ideal answer:** The inventory service throws FSAM_BusinessException
instead of allowing the quantity to go below available stock. **Key
points expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 6: What does FSAM_MaintenanceVisitService.completeVisit do?

**Ideal answer:** It retrieves a visit, sets status to Completed and
updates it; the selector has a missing-record QueryException edge case.
**Key points expected:** exact component name, why the design was
chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 7: What exception classes exist?

**Ideal answer:** The project has FSAM_BusinessException for business
failures and FSAM_IntegrationException for integration failures. **Key
points expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 8: Why centralize constants?

**Ideal answer:** They prevent repeated literal status/priority values
and reduce spelling inconsistencies. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

### Question 9: Why centralize logging?

**Ideal answer:** FSAM_Logger centralizes INFO/WARN/ERROR debug logging
and gives a single extension point for future observability. **Key
points expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 10: What triggers exist?

**Ideal answer:** FSAM_ServiceRequestTrigger and
FSAM_MaintenanceVisitTrigger. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 11: Which trigger contexts are supported?

**Ideal answer:** Both declare before/after insert/update/delete and
after undelete. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 12: Is the trigger bulkified?

**Ideal answer:** Structurally yes: no SOQL/DML is inside trigger loops,
and the Service Request handler uses a Set of IDs. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 13: Is recursion protection implemented?

**Ideal answer:** No static recursion guard is implemented. Current
handlers do not perform DML, so they do not currently create significant
recursion. **Key points expected:** exact component name, why the design
was chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 14: Could Flow replace the current trigger behavior?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 15: What belongs in a handler versus service?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

## Round 4 --- Apex & Triggers

### Question 1: Which LWCs call Apex?

**Ideal answer:** The page-level Apex consumers are fsamAssetExplorer,
fsamDashboard, fsamEngineerDashboard, fsamInventoryWorkspace and
fsamServiceRequestWorkspace. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 2: Which use @wire?

**Ideal answer:** Asset Explorer, Engineer Dashboard, Inventory
Workspace and Service Request Workspace use wire. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 3: Which uses imperative Apex?

**Ideal answer:** fsamDashboard uses connectedCallback with async/await
and try/catch/finally. **Key points expected:** exact component name,
why the design was chosen, governor/security/testing implications, and
honest scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 4: Why is Dashboard imperative?

**Ideal answer:** fsamDashboard uses connectedCallback with async/await
and try/catch/finally. **Key points expected:** exact component name,
why the design was chosen, governor/security/testing implications, and
honest scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 5: How does Asset Explorer communicate with children?

**Ideal answer:** The parent owns state; children receive @api
properties and emit CustomEvents such as search and assetselect. **Key
points expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 6: What does @api do?

**Ideal answer:** It exposes public component properties/methods used by
parents to pass data or invoke reusable behavior. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 7: Why is @track not used?

**Ideal answer:** Modern LWC reactivity generally does not require
@track for normal class fields. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 8: How does pagination work?

**Ideal answer:** fsamPagination maintains current/total page state and
emits pagechange. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 9: What is wrong with the SearchBar event contract?

**Ideal answer:** SearchBar emits detail.value, while
AssetSearch/InventorySearch and the parent workspaces expect
detail.searchTerm. The event contract is inconsistent. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 10: How would you add navigation to quick actions?

**Ideal answer:** Use NavigationMixin and navigate to the target
tab/object/record/custom page. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 11: How should Apex errors be surfaced?

**Ideal answer:** Normalize Apex errors and surface safe user-facing
messages with the reusable ErrorPanel/Toast instead of relying only on
console.error. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 12: Where is SOQL centralized?

**Ideal answer:** SOQL is centralized in four selector classes. **Key
points expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 13: Are SOQL queries inside loops present?

**Ideal answer:** No such pattern was found in the inspected production
Apex. **Key points expected:** exact component name, why the design was
chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 14: Are DML statements inside loops present?

**Ideal answer:** No such pattern was found in the inspected production
Apex. **Key points expected:** exact component name, why the design was
chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 15: What is wrong with unbounded selectors?

**Ideal answer:** Selectors such as getOpenRequests can return large
result sets; production design should add selective filters and
pagination. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

## Round 5 --- LWC

### Question 1: How would you implement server-side pagination?

**Ideal answer:** fsamPagination maintains current/total page state and
emits pagechange. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 2: OFFSET versus keyset pagination?

**Ideal answer:** fsamPagination maintains current/total page state and
emits pagechange. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 3: How would you make asset search selective?

**Ideal answer:** Use indexed/selective filters and inspect the query
plan rather than scanning broad datasets. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

### Question 4: What six flows exist?

**Ideal answer:** Engineer Assignment Automation, Inventory Update
Automation, Maintenance Visit Completed, Maintenance Visit Started, SLA
Validation and Service Request Status Automation. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 5: Why is SLA validation before-save?

**Ideal answer:** SLA validation changes/validates the same record, so
before-save avoids an extra DML operation. **Key points expected:**
exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 6: Why is engineer assignment after-save?

**Ideal answer:** Assignment updates a related Service Request and sends
an email, so after-save is appropriate. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

### Question 7: How does Maintenance Visit Completed determine all visits are done?

**Ideal answer:** The completion Flow gets all visits for the request,
loops through them, flags any not Completed, and completes the request
only when none remain open. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 8: How does Inventory Update call Apex?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 9: Why use Invocable Apex?

**Ideal answer:** The Flow passes part ID and quantity to
FSAM_InventoryInvocable, which delegates to FSAM_InventoryService. **Key
points expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 10: What does Service Request Status Automation do?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 11: What happens if SLA Due Date is blank?

**Ideal answer:** The SLA before-save Flow sets it to Open Date plus
three days. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 12: What happens if a request is closed without Closed Date?

**Ideal answer:** A field-level Flow custom error and a validation rule
require Closed Date for a closed request. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

### Question 13: Could the flows recurse?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 14: CRUD versus FLS?

**Ideal answer:** CRUD is object-level access; FLS is field-level
access. **Key points expected:** exact component name, why the design
was chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 15: What does with sharing enforce?

**Ideal answer:** with sharing enforces record-level sharing, not
CRUD/FLS. **Key points expected:** exact component name, why the design
was chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

## Round 6 --- Automation

### Question 1: What does with sharing not enforce?

**Ideal answer:** It does not automatically enforce object CRUD or
field-level security. **Key points expected:** exact component name, why
the design was chosen, governor/security/testing implications, and
honest scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 2: Where is CRUD checking implemented?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 3: Where is stripInaccessible used?

**Ideal answer:** It removes fields the running user cannot access for
the specified DML operation, helping enforce FLS. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 4: Does every selector enforce FLS?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 5: What are the actual sharing models?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 6: Are sharing rules present?

**Ideal answer:** No sharing-rule metadata is present; the docs
explicitly say sharing rules were intentionally omitted. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 7: Are View All/Modify All granted?

**Ideal answer:** The FSAM_User permission set sets View All Records and
Modify All Records to false. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 8: What would you improve?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 9: Where are the governor-limit risks?

**Ideal answer:** Main risks are unbounded result sets, Flow loops,
client-side loading and future live-data implementations. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 10: How would 200 Part Replacements be handled?

**Ideal answer:** Bulk process collections, aggregate inputs, query once
and DML once; add explicit bulk tests. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

## Round 7 --- Security

### Question 1: What happens with 50,000 service requests?

**Ideal answer:** The current design would need server-side pagination,
selective queries, archiving/retention and async processing where
appropriate. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 2: What is the CPU risk in visit completion Flow?

**Ideal answer:** The visit-completion Flow loops all child visits, so
CPU/Flow-element consumption grows with visit count. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 3: How would you handle concurrent inventory updates?

**Ideal answer:** The current inventory code lacks row locking;
concurrent transactions could oversubscribe stock. A production design
should use FOR UPDATE and defined retry behavior. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 4: Does the project use Queueable?

**Ideal answer:** No. Do not claim Queueable is implemented. **Key
points expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 5: Does it use Future?

**Ideal answer:** No. **Key points expected:** exact component name, why
the design was chosen, governor/security/testing implications, and
honest scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 6: Does it use Batch?

**Ideal answer:** No. **Key points expected:** exact component name, why
the design was chosen, governor/security/testing implications, and
honest scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 7: When would you introduce Queueable?

**Ideal answer:** Not currently used; introduce it if the callout/work
needs an asynchronous transaction boundary. **Key points expected:**
exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 8: When would Batch be better?

**Ideal answer:** Not currently used; Batch would be appropriate for
very large datasets processed in chunks. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

### Question 9: Can a trigger make a callout directly?

**Ideal answer:** A synchronous trigger should not make a normal HTTP
callout directly; use an async callout-capable pattern. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 10: How does the manufacturer integration work?

**Ideal answer:** Apex performs a GET via callout:FSAM_Manufacturer_API,
checks for HTTP 200 and deserializes JSON into
FSAM_ManufacturerResponseDTO. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

## Round 8 --- Integrations

### Question 1: Why Named Credential?

**Ideal answer:** It centralizes endpoint/auth configuration and avoids
embedding credentials in Apex. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 2: What does the External Credential do?

**Ideal answer:** It supplies the authentication/principal model
consumed by the Named Credential. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

### Question 3: What authentication is actually configured?

**Ideal answer:** The uploaded External Credential is configured with a
custom protocol and NoAuthentication, so it is a mock-style setup rather
than evidence of production auth. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

### Question 4: What HTTP method and timeout are used?

**Ideal answer:** The integration uses HTTP GET with a 10-second
timeout. **Key points expected:** exact component name, why the design
was chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 5: How is JSON parsed?

**Ideal answer:** JSON.deserialize maps the response body into
FSAM_ManufacturerResponseDTO. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 6: How are HTTP errors handled?

**Ideal answer:** Any status other than 200 becomes
FSAM_IntegrationException. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 7: How are invalid JSON errors handled?

**Ideal answer:** JSON.deserialize maps the response body into
FSAM_ManufacturerResponseDTO. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 8: How are callouts tested?

**Ideal answer:** HttpCalloutMock covers success, HTTP 500 and invalid
JSON. **Key points expected:** exact component name, why the design was
chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 9: How would you retry failures?

**Ideal answer:** Use bounded async retries, idempotency, persistent
attempt/status tracking and operational alerting. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 10: What Apex tests exist?

**Ideal answer:** The suite includes controller, service, selector,
trigger and integration tests. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

## Round 9 --- Testing & Deployment

### Question 1: What does Test.startTest do?

**Ideal answer:** It resets governor-limit counters for the code under
test and establishes the test execution boundary. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 2: Why Test.stopTest?

**Ideal answer:** It ends the isolated test block and flushes
asynchronous work where applicable. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

### Question 3: Is @TestSetup used?

**Ideal answer:** No. Test data is created in individual test methods.
**Key points expected:** exact component name, why the design was
chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 4: What does TestDataFactory create?

**Ideal answer:** It creates Account, Contact, Customer Asset, Service
Request, Service Part and Maintenance Visit test data. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 5: Are negative tests sufficient?

**Ideal answer:** Coverage is incomplete; add insufficient inventory,
null/missing records, permission and validation failure tests. **Key
points expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 6: Are bulk tests sufficient?

**Ideal answer:** They are not comprehensive; add multi-record tests for
services, invocable inventory and triggers. **Key points expected:**
exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 7: Are LWC tests meaningful?

**Ideal answer:** No. The 28 Jest files are CLI-generated TODO
placeholders. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 8: What is in sfdx-project.json?

**Ideal answer:** It defines force-app as the default package directory,
project name field-service-asset-maintenance, no namespace, Salesforce
login URL and source API version 66.0. **Key points expected:** exact
component name, why the design was chosen, governor/security/testing
implications, and honest scope. **Common mistake:** claiming unsupported
features such as Queueable, CI/CD, live-data controllers or full LWC
test coverage. **Follow-up:** What would you change before production?

### Question 9: Is package.xml present?

**Ideal answer:** No. It is not present anywhere in the uploaded
project. **Key points expected:** exact component name, why the design
was chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 10: Is GitHub Actions present?

**Ideal answer:** No committed .github/workflows configuration is
present. **Key points expected:** exact component name, why the design
was chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

## Round 10 --- Senior-Level Scenarios

### Question 1: How would you deploy the project?

**Ideal answer:** Use Salesforce CLI, deploy source with sf project
deploy start, assign FSAM_User, configure credentials, activate/verify
flows and run tests. **Key points expected:** exact component name, why
the design was chosen, governor/security/testing implications, and
honest scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 2: How would you validate a deployment?

**Ideal answer:** Use Salesforce CLI, deploy source with sf project
deploy start, assign FSAM_User, configure credentials, activate/verify
flows and run tests. **Key points expected:** exact component name, why
the design was chosen, governor/security/testing implications, and
honest scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 3: Can branch history be proven from this ZIP?

**Ideal answer:** No. The ZIP has Git configuration files but no .git
history. **Key points expected:** exact component name, why the design
was chosen, governor/security/testing implications, and honest scope.
**Common mistake:** claiming unsupported features such as Queueable,
CI/CD, live-data controllers or full LWC test coverage. **Follow-up:**
What would you change before production?

### Question 4: What local quality tooling is included?

**Ideal answer:** ESLint, Prettier, Husky, lint-staged and sfdx-lwc-jest
are configured. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 5: Why is the current dashboard fast?

**Ideal answer:** It is fast because the controller performs no SOQL/DML
and returns a small static DTO. **Key points expected:** exact component
name, why the design was chosen, governor/security/testing implications,
and honest scope. **Common mistake:** claiming unsupported features such
as Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 6: Why is that not enough for production?

**Ideal answer:** That speed is not evidence of scalability because the
current read path is not connected to live data. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 7: How would you optimize Asset Explorer?

**Ideal answer:** Move filtering/pagination to server-side selectors,
return only required fields/rows and use selective queries. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 8: How would you optimize Inventory Workspace?

**Ideal answer:** Move filtering/pagination to server-side selectors,
return only required fields/rows and use selective queries. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 9: How would you measure performance?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 10: Two users consume the last part. What happens?

**Ideal answer:** The current inventory code lacks row locking;
concurrent transactions could oversubscribe stock. A production design
should use FOR UPDATE and defined retry behavior. **Key points
expected:** exact component name, why the design was chosen,
governor/security/testing implications, and honest scope. **Common
mistake:** claiming unsupported features such as Queueable, CI/CD,
live-data controllers or full LWC test coverage. **Follow-up:** What
would you change before production?

### Question 11: The manufacturer API returns 500. What happens?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 12: A user lacks Service Request update permission. What happens?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 13: A user lacks FLS. What happens?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 14: A visit completes while another visit remains open. What happens?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

### Question 15: The same part appears twice in one invocable call. What happens?

**Ideal answer:** Be explicit about the exact component and distinguish
current implementation from future design; do not claim unsupported
functionality. **Key points expected:** exact component name, why the
design was chosen, governor/security/testing implications, and honest
scope. **Common mistake:** claiming unsupported features such as
Queueable, CI/CD, live-data controllers or full LWC test coverage.
**Follow-up:** What would you change before production?

# If I Were the Interviewer

## What I would ask first

-   Explain the architecture.
-   Explain the six-object data model.
-   Explain the inventory Flow/Apex boundary.
-   Explain Maintenance Visit Completed.
-   Explain Asset Explorer parent-child communication.
-   Find the SearchBar event mismatch.
-   Explain with sharing vs CRUD/FLS.
-   Explain the manufacturer integration.
-   Why are workspace reads mocked?
-   What would you change for production?

## What is technically impressive

-   Clear layered Apex structure.
-   DTO-driven UI contract.
-   Flow/Apex integration through Invocable Apex.
-   Trigger framework.
-   Named/External Credential integration and callout mocks.
-   Security utility and custom exceptions.
-   Extensive documentation and ADRs.

## What could expose weak knowledge

-   Calling mock DTOs live database integration.
-   Saying with sharing enforces FLS/CRUD.
-   Claiming Queueable/Batch/Platform Events.
-   Missing the Contract/Contact mismatch.
-   Missing the SearchBar event mismatch.
-   Claiming LWC tests are complete.
-   Missing the QueryException edge case.
-   Missing inventory concurrency/duplicate-key issues.
-   Claiming GitHub Actions without evidence.

## 20 questions to prepare extremely well

1.  Give the 2-minute project explanation.
2.  Explain the six-object model.
3.  Why Lookup vs Master-Detail?
4.  Explain Controller → Service → Selector.
5.  Why DTOs?
6.  Explain Inventory Flow → Invocable → Service.
7.  How is inventory bulkified?
8.  How would you handle concurrent inventory?
9.  Explain trigger framework.
10. Why Flow for SLA/status?
11. Explain visit-completion Flow.
12. Explain LWC parent-child events.
13. What is wrong with search events?
14. Explain with sharing vs CRUD/FLS.
15. How does stripInaccessible help?
16. Explain REST integration.
17. Why Named/External Credential?
18. What tests are missing?
19. What are the biggest weaknesses?
20. What is Version 2?

## Salesforce concepts to revise

-   Governor limits and bulkification
-   SOQL selectivity and keyset pagination
-   Trigger contexts/order of execution
-   Before-save vs after-save Flow
-   Flow/Apex limits
-   with/without/inherited sharing
-   CRUD vs FLS vs sharing
-   stripInaccessible and user mode
-   LWC wire vs imperative Apex
-   @api and CustomEvent
-   Queueable vs Future vs Batch
-   Callouts and async callouts
-   Named/External Credentials
-   HttpCalloutMock
-   Apex testing and TestSetup
-   Master-Detail vs Lookup
-   External IDs and uniqueness
-   Salesforce DX deployment
-   Git/CI/CD

## Bottom line

Present this as a strong enterprise-architecture portfolio project with
an honest Version 1 scope. The strongest interview answer is not to hide
the gaps; it is to explain why the architecture is sound, identify the
exact current limitations, and demonstrate how you would take it to
production.

# Appendix --- Exact missing metadata statement

The following are explicitly **Not present in the uploaded project**:
package.xml, Aura, Visualforce, record types, roles, sharing rules, Apex
sharing classes, Process Builder, Workflow Rules, Approval Processes,
Custom Metadata Types, Custom Settings, Remote Site Settings, Platform
Events, Custom Labels, Custom Permissions, Email Templates, Queues,
Public Groups, Static Resources, Experience Cloud metadata, and GitHub
Actions workflows.
