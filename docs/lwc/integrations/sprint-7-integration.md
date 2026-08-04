# Sprint 7 – REST Integration

## Objective

Implement a secure outbound REST integration using Salesforce best practices.

---

# Deliverables

## Platform Configuration

- External Credential
- Named Credential
- Permission Set Access

---

## Apex Components

### FSAM_ManufacturerResponseDTO

Represents the JSON response from the external manufacturer service.

---

### FSAM_IntegrationException

Custom exception used for integration-specific failures.

---

### FSAM_ManufacturerIntegrationService

Responsibilities:

- Execute HTTP GET callout
- Use Named Credential
- Validate HTTP response
- Deserialize JSON
- Throw custom integration exceptions

---

## Testing

Implemented:

- FSAM_ManufacturerCalloutMock
- FSAM_ManufacturerErrorCalloutMock
- FSAM_ManufacturerInvalidJsonCalloutMock
- FSAM_ManufacturerIntegrationServiceTest

Covered scenarios:

- Successful callout
- HTTP 500 response
- Invalid JSON response

---

# Architecture

```
LWC
 │
Controller
 │
Service Layer
 │
Integration Service
 │
Named Credential
 │
External REST API
```

---

# Best Practices Demonstrated

- Named Credential
- External Credential
- HTTP Callouts
- JSON Deserialization
- Custom Exceptions
- HttpCalloutMock
- Separation of Concerns
- Testable Integration Design