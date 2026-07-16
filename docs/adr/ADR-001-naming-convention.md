# ADR-001: Naming Convention

## Status

Accepted

## Date

Sprint 1

## Context

The project contains multiple custom objects, fields, validation rules, flows, and metadata.

A consistent naming convention is required to improve maintainability and readability.

## Decision

- Every custom object API name will start with `FSAM_`.
- Every custom object label will start with `FSAM`.
- Every custom field API name will start with `FSAM_`.
- Custom field labels will remain business-friendly (no FSAM prefix).
- Apex classes will NOT use the FSAM prefix.
- LWC components will use camelCase naming.
- Validation Rules will use the prefix `FSAM_VR_`.
- Flows will use the prefix `FSAM_FL_`.

## Consequences

- Easy identification of project metadata.
- Consistent codebase.
- Better maintainability.