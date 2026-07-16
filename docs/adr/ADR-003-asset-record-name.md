# ADR-003: Asset Record Naming

## Status

Accepted

## Date

Sprint 2

## Context

Customer assets require a unique identifier.

Business names are not guaranteed to be unique.

## Decision

The Record Name will use Auto Number.

Format

AST-{00000}

The business name will be stored separately in Asset Name.

## Consequences

- Consistent record identifiers.
- Better integrations.
- Easier searching.