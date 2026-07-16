# ADR-002: Customer Asset Ownership

## Status

Accepted

## Date

Sprint 2

## Context

Every installed asset belongs to a customer account.

Salesforce allows Lookup relationships to Account.

## Decision

FSAM Customer Asset will use a Lookup relationship to Account.

Master-Detail is intentionally avoided because assets should have an independent lifecycle.

## Reason

- Customer contracts can end.
- Assets may be reassigned.
- Asset history should remain available.
- Independent ownership provides greater flexibility.

## Consequences

- No cascade delete.
- Flexible ownership.
- Better reporting.