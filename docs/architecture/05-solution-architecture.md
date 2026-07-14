# Solution Architecture

``` text
LWC
 ↓
Apex Controller
 ↓
Service Layer
 ↓
Selector Layer
 ↓
Salesforce Database
```

## Design Principles

-   Thin controllers
-   Business logic in services
-   SOQL centralized in selectors
-   Record-triggered Flows for simple automation
-   Triggers only orchestrate logic
-   REST integration through Named Credentials
