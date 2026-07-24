# Apex Security

## Overview

The FSAM project follows a security-first approach for Apex development.

Reusable utility methods centralize object-level and field-level security checks while using Salesforce's `Security.stripInaccessible()` API before performing DML operations.

---

## Object-Level Security

Supported methods:

- canRead()
- canCreate()
- canUpdate()
- canDelete()

These methods verify CRUD permissions using object describe information.

---

## Field-Level Security

Supported methods:

- canReadField()
- canCreateField()
- canUpdateField()

These methods validate access to individual fields.

---

## stripInaccessible()

Before insert or update operations, inaccessible fields are removed using:

- stripInaccessibleForCreate()
- stripInaccessibleForUpdate()

This helps ensure Apex respects field-level security.

---

## Usage

Service classes perform:

1. Input validation
2. CRUD validation
3. Business logic
4. Field sanitization
5. DML operation

---

## Design Principles

- Security-first development
- Centralized authorization checks
- Reusable helper methods
- Consistent CRUD/FLS enforcement