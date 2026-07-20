# Dashboard

## Overview

The **FSAM - Service Operations Dashboard** provides a high-level operational view of service activities, engineer workload, inventory status, and warranty coverage.

The dashboard is intended for service managers to monitor day-to-day operations using real-time Salesforce data.

---

## Dashboard Folder

**FSAM Dashboards**

---

## Dashboard

### FSAM - Service Operations Dashboard

---

## Components

### 1. Service Requests by Status

**Source Report**

FSAM - Service Requests by Status

**Visualization**

Vertical Bar Chart

**Business Value**

Provides an overview of the current distribution of service requests across each lifecycle stage, helping managers monitor operational workload.

---

### 2. Warranty Coverage

**Source Report**

FSAM - Customer Assets by Warranty Status

**Visualization**

Pie Chart

**Business Value**

Displays the proportion of customer assets currently covered by warranty versus assets with expired warranty coverage.

---

### 3. Engineer Workload

**Source Report**

FSAM - Maintenance Visits by Engineer

**Visualization**

Horizontal Bar Chart

**Business Value**

Shows the number of maintenance visits assigned to each engineer, helping balance workloads and monitor resource utilization.

---

### 4. Replacement Costs

**Source Report**

FSAM - Part Replacements by Service Request

**Visualization**

Vertical Bar Chart

**Business Value**

Tracks the total replacement cost associated with each service request, providing visibility into maintenance expenses.

---

### 5. Service Parts Inventory

**Source Report**

FSAM - Service Parts Inventory

**Visualization**

Table

**Displayed Columns**

- Part Name
- Available Quantity
- Reorder Required

**Business Value**

Provides inventory visibility and highlights parts approaching minimum stock levels.

---

## Design Considerations

- Dashboard components are powered entirely by Salesforce Reports.
- Charts provide management-friendly visualizations.
- Inventory is displayed using a table for detailed operational review.
- Dashboard follows Salesforce Lightning dashboard best practices.