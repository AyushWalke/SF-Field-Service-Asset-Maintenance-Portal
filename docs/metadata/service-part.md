# FSAM Service Part

## Purpose

Stores reusable inventory parts used during maintenance activities.

---

## Relationships

### Parent

None

### Children

- FSAM Part Replacement

---

# Fields

| Label | API | Type | Required |
|--------|-----|------|----------|
| Part Code | Name | Text | Yes |
| Part Name | FSAM_Part_Name__c | Text | Yes |
| Manufacturer | FSAM_Manufacturer__c | Text | No |
| Unit Cost | FSAM_Unit_Cost__c | Currency | Yes |
| Available Quantity | FSAM_Available_Quantity__c | Number | Yes |
| Minimum Stock Level | FSAM_Minimum_Stock_Level__c | Number | Yes |
| Active | FSAM_Active__c | Checkbox | Yes |
| External Part ID | FSAM_External_Part_ID__c | External ID | No |
Reorder Required | FSAM_Reorder_Required__c | Formula (Checkbox) | System

---

# Validation Rules

- FSAM_VR_Unit_Cost
- FSAM_VR_Available_Quantity
- FSAM_VR_Minimum_Stock

---

# Future Enhancements

- Warehouse Management
- Multiple Locations
- Barcode Support
- QR Code Support
- Vendor Management