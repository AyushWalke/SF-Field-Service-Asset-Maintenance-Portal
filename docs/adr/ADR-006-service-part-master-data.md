# ADR-006: Service Part Master Data

## Status

Accepted

## Context

Service requests consume spare parts during maintenance.

## Decision

Maintain a dedicated Service Part master object instead of storing part information directly on Part Replacement records.

## Reason

- Eliminates duplicate data.
- Centralizes inventory information.
- Simplifies reporting.
- Supports future inventory integrations.

## Consequences

Part Replacement records reference FSAM Service Part using a Lookup relationship.