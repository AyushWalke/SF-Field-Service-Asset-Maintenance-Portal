# FSAM Customer Asset

## Purpose

Represents an installed customer asset owned by an Account.

---

## Relationships

| Parent | Relationship |
|---------|--------------|
| Account | Lookup |
| Contact | Lookup |

Children

- FSAM Service Request

---

## Fields

### Identification

| Label | API | Type | Required |
|--------|-----|------|----------|
| Asset Name | FSAM_Asset_Name__c | Text | Yes |
| Serial Number | FSAM_Serial_Number__c | Text | Yes |
| Model Number | FSAM_Model_Number__c | Text | No |
| Asset Type | FSAM_Asset_Type__c | Picklist | Yes |

### Customer

| Label | API | Type |
|--------|-----|------|
| Account | FSAM_Account__c | Lookup(Account) |
| Service Contact | FSAM_Service_Contact__c | Lookup(Contact) |

### Installation

| Label | API | Type |
|--------|-----|------|
| Installation Date | FSAM_Installation_Date__c | Date |
| Street | FSAM_Street__c | Text |
| City | FSAM_City__c | Text |
| State | FSAM_State__c | Text |
| Postal Code | FSAM_Postal_Code__c | Text |
| Country | FSAM_Country__c | Text |
| Location Notes | FSAM_Location_Notes__c | Long Text |

### Warranty

| Label | API | Type |
|--------|-----|------|
| Warranty Start Date | FSAM_Warranty_Start_Date__c | Date |
| Warranty End Date | FSAM_Warranty_End_Date__c | Date |
| Warranty Active | FSAM_Warranty_Active__c | Formula |

### Status

| Label | API | Type |
|--------|-----|------|
| Status | FSAM_Status__c | Picklist |

### Integration

| Label | API | Type |
|--------|-----|------|
| External Asset ID | FSAM_External_Asset_ID__c | Text (External ID) |

---

## Validation Rules

- Installation date cannot be in the future.
- Warranty End Date must be after Warranty Start Date.
- Retired assets cannot have an active warranty.

---

## Formula Fields

### Warranty Active

Returns TRUE when the current date falls within the warranty period.

---

## Future Enhancements

- GPS Coordinates
- Barcode / QR Code
- Asset Images
- Installation Documents