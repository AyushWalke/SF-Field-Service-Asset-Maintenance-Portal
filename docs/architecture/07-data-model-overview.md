# Data Model Overview

## Standard Objects

-   Account
-   Contact
-   User

## Custom Objects

-   FSAM_Customer_Asset\_\_c
-   FSAM_Service_Request\_\_c
-   FSAM_Maintenance_Visit\_\_c
-   FSAM_Service_Part\_\_c
-   FSAM_Part_Replacement\_\_c
-   FSAM_Engineer_Assignment\_\_c

``` text
Account
 └── FSAM_Customer_Asset__c
      └── FSAM_Service_Request__c
           ├── FSAM_Maintenance_Visit__c
           └── FSAM_Part_Replacement__c

FSAM_Service_Part__c
 └── FSAM_Part_Replacement__c

User
 └── FSAM_Engineer_Assignment__c
```
