# Test Data Factory

## Overview

The `FSAM_TestDataFactory` centralizes the creation of reusable test records for Apex unit tests.

Instead of creating records inside every test class, tests use factory methods that return fully initialized and inserted records.

This improves readability, reduces duplicate code, and simplifies maintenance.

---

## Design Principles

- One method per object
- Insert records before returning
- Populate only required fields
- Reusable across all test classes
- Easy to extend for new test scenarios

---

## Available Methods

### createAccount()

Creates and inserts a test Account.

Returns:

- Account

---

### createContact(Id accountId)

Creates and inserts a Contact related to an Account.

Returns:

- Contact

---

### createCustomerAsset(Id accountId, Id contactId)

Creates and inserts a Customer Asset.

Returns:

- FSAM_Customer_Asset__c

---

### createServiceRequest(Id assetId)

Creates and inserts a Service Request.

Returns:

- FSAM_Service_Request__c

---

### createServicePart()

Creates and inserts a Service Part.

Returns:

- FSAM_Service_Part__c

---

### createMaintenanceVisit(Id requestId)

Creates and inserts a Maintenance Visit.

Returns:

- FSAM_Maintenance_Visit__c

---

## Benefits

- Eliminates duplicate test setup
- Improves readability
- Standardizes test records
- Makes Apex tests easier to maintain
- Supports future automation and trigger testing

---

## Example

```apex
Account account = FSAM_TestDataFactory.createAccount();

FSAM_Customer_Asset__c asset =
    FSAM_TestDataFactory.createCustomerAsset(
        account.Id,
        null
    );

FSAM_Service_Request__c request =
    FSAM_TestDataFactory.createServiceRequest(asset.Id);
```