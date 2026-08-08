# Deployment Guide

## Overview

This document explains how to deploy and configure the Field Service Asset Maintenance Portal (FSAM) in a Salesforce Developer Edition or Scratch Org using Salesforce DX.

---

# Prerequisites

Before deploying the project, ensure the following tools are installed:

- Salesforce CLI
- Visual Studio Code
- Salesforce Extension Pack
- Git
- Node.js (recommended)

A Salesforce Developer Edition account or Dev Hub-enabled org is also required.

---

# Clone the Repository

```bash
git clone https://github.com/AyushWalke/SF-Field-Service-Asset-Maintenance-Portal.git

cd field-service-asset-maintenance
```

---

# Authorize Salesforce Org

Developer Org

```bash
sf org login web
```

Scratch Org

```bash
sf org create scratch \
--definition-file config/project-scratch-def.json \
--alias fsam \
--set-default
```

---

# Deploy Metadata

Deploy the complete project.

```bash
sf project deploy start
```

Or deploy using package.xml.

```bash
sf project deploy start \
--manifest manifest/package.xml
```

---

# Assign Permission Set

Assign the project permission set.

```bash
sf org assign permset \
--name FSAM_User
```

---

# Configure Named Credential

Create:

- External Credential
- Named Credential

Configure the authentication endpoint according to your environment.

---

# Deploy Flows

Activate all Record-Triggered Flows if they are not automatically activated.

Verify:

- Service Request Status Automation
- Inventory Update Flow
- Assignment Flow
- SLA Validation Flow

---

# Verify Lightning Pages

Ensure the following Lightning App Pages are available:

- FSAM Dashboard
- Asset Explorer
- Service Request Workspace
- Engineer Dashboard
- Inventory Workspace

---

# Run Apex Tests

Execute all tests.

```bash
sf apex run test \
--test-level RunLocalTests
```

Expected code coverage:

- Approximately **87%**

Some tests may require additional setup to satisfy custom validation rules.

---

# Verify Application

Open the Lightning App.

Validate:

- Dashboard
- Asset Explorer
- Service Request Workspace
- Engineer Dashboard
- Inventory Workspace

Verify:

- Navigation
- Dynamic Forms
- Reports
- Dashboards
- Shared LWC Components

---

# Integration Verification

Verify:

- Named Credential
- External Credential
- Manufacturer REST Integration

Run the integration test class.

---

# Troubleshooting

## Deployment Errors

Ensure:

- Dev Hub is enabled (Scratch Org)
- API version matches project configuration
- Salesforce CLI is updated

---

## Permission Issues

Verify:

- Permission Set assigned
- Object permissions
- Field permissions

---

## Test Failures

If tests fail:

- Check custom validation rules
- Verify required metadata is deployed
- Ensure test data satisfies required fields

---

# Project Successfully Deployed

The application is now ready for demonstration and further customization.