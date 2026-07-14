# Security Architecture

## Authentication

Salesforce Login.

## Authorization

Permission Sets.

## Sharing

-   Customer Asset: Private
-   Service Request: Private
-   Maintenance Visit: Controlled by Parent

## Security Standards

-   `with sharing`
-   CRUD/FLS enforcement
-   `Security.stripInaccessible()`
-   User mode queries/DML where appropriate
