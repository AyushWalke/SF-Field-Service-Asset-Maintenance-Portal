# Reports

## Overview

The FSAM Portal includes operational reports that provide visibility into service operations, engineer workload, inventory, warranty coverage, and spare part consumption.

---

## Report Folder

**FSAM Reports**

All project reports are stored in a dedicated report folder.

---

## Reports

### 1. FSAM - Service Requests by Status

**Report Type**
- Service Requests

**Format**
- Summary

**Grouping**
- Status

**Chart**
- Vertical Bar Chart

**Business Purpose**
Provides an overview of service request distribution across different lifecycle stages, enabling managers to monitor operational workload.

---

### 2. FSAM - Maintenance Visits by Engineer

**Report Type**
- Maintenance Visits

**Format**
- Summary

**Grouping**
- Engineer

**Chart**
- Horizontal Bar Chart

**Business Purpose**
Displays engineer workload by counting maintenance visits assigned to each engineer.

---

### 3. FSAM - Service Parts Inventory

**Report Type**
- Service Parts

**Format**
- Tabular

**Columns**

- Part Code
- Part Name
- Manufacturer
- Available Quantity
- Minimum Stock Level
- Unit Cost
- Reorder Required

**Business Purpose**
Provides inventory visibility and identifies parts approaching minimum stock levels.

---

### 4. FSAM - Part Replacements by Service Request

**Report Type**
- Part Replacements

**Format**
- Summary

**Grouping**
- Service Request

**Summary**

- Record Count
- Total Replacement Cost

**Chart**
- Vertical Bar Chart

**Business Purpose**
Tracks spare parts consumed during service activities and measures replacement costs.

---

### 5. FSAM - Customer Assets by Warranty Status

**Report Type**
- Customer Assets

**Format**
- Summary

**Grouping**
- Warranty Active

**Chart**
- Pie Chart

**Business Purpose**
Shows the number of customer assets currently under warranty versus assets with expired warranty coverage.

---

## Design Considerations

- Summary reports are used for operational analysis.
- Tabular reports are used for inventory monitoring.
- Charts provide management-friendly visualizations.
- Report naming follows a consistent "FSAM -" convention.