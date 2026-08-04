# Sprint 7 – Integration Design

## Project

Field Service Asset Maintenance Portal (FSAM)

---

# Purpose

Sprint 7 demonstrates enterprise Salesforce integration patterns using REST APIs.

The integration layer is intentionally lightweight and portfolio-focused while following enterprise design principles.

Business logic remains inside the Service Layer.

HTTP communication is isolated in a dedicated Integration Layer.

---

# Business Scenario

When viewing or processing a Service Part, the system retrieves additional manufacturer information from an external system.

The information includes:

- Manufacturer Name
- Country
- Warranty Period
- Support Email

This data supplements Salesforce records and is not stored permanently.

---

# Objectives

Demonstrate:

- Named Credential
- Apex HTTP Callout
- JSON Deserialization
- DTO Mapping
- Exception Handling
- HttpCalloutMock
- Integration Testing

---

# Architecture

```
Lightning Web Component

        │

        ▼

Apex Controller

        │

        ▼

Service Layer

        │

        ▼

Integration Service

        │

        ▼

Named Credential

        │

        ▼

External REST API
```

---

# Integration Components

## Named Credential

Purpose

Secure endpoint configuration.

Responsibilities

- Base URL
- Authentication
- Endpoint abstraction

---

## Integration Service

Class

FSAM_ManufacturerIntegrationService

Responsibilities

- Execute HTTP callout
- Handle responses
- Deserialize JSON
- Return DTO
- Throw custom exceptions

No UI logic.

No business logic.

---

## Response DTO

Class

FSAM_ManufacturerResponseDTO

Purpose

Represent the JSON response from the external API.

---

## Integration Exception

Class

FSAM_IntegrationException

Purpose

Represent integration failures.

Examples

- Timeout
- HTTP Error
- Invalid JSON
- Unexpected Response

---

# Request Flow

```
LWC

↓

Controller

↓

Service Layer

↓

Manufacturer Integration Service

↓

Named Credential

↓

External REST API
```

---

# Response Flow

```
External API

↓

JSON

↓

ManufacturerResponseDTO

↓

Service Layer

↓

Controller

↓

LWC
```

---

# Error Handling Strategy

Integration failures should never expose raw HTTP errors.

The Integration Service converts technical failures into a custom exception.

Examples

- HTTP 404
- HTTP 500
- Timeout
- Malformed JSON

---

# Testing Strategy

The integration will never call the real API during unit tests.

Testing will use:

- HttpCalloutMock
- Success response
- Failure response
- Invalid JSON response

---

# Folder Structure

```
classes

├── controllers
├── dto
├── selectors
├── services

└── integrations
      ├── FSAM_ManufacturerIntegrationService
      ├── FSAM_ManufacturerResponseDTO
      ├── FSAM_IntegrationException
      ├── FSAM_ManufacturerCalloutMock
      └── FSAM_ManufacturerIntegrationServiceTest
```

---

# Development Order

1. Named Credential
2. Integration DTO
3. Custom Exception
4. Integration Service
5. HttpCalloutMock
6. Test Class
7. Documentation