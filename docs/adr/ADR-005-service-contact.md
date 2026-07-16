# ADR-005: Service Contact Strategy

## Status

Accepted

## Context

Each asset requires a point of contact for maintenance.

## Decision

Store one Service Contact lookup on the asset.

Multiple contacts are intentionally not modeled.

## Reason

Current business requirements require only one maintenance contact.

Future requirements can introduce a junction object.

## Consequences

Simple data model.

Avoids unnecessary complexity.