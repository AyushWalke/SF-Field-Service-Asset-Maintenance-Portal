# FSAM Spinner

## Overview

`fsamSpinner` is a reusable wrapper around Salesforce's `lightning-spinner` base component.

It provides a consistent loading indicator across the Field Service Asset Maintenance Portal while exposing a simple and standardized API.

---

# Purpose

Display a loading indicator whenever a page, card, or component is waiting for data.

The component:

- Wraps the standard `lightning-spinner`
- Uses Salesforce Lightning Design System (SLDS)
- Provides sensible defaults
- Remains independent of business logic

---

# Public API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| size | String | `medium` | Spinner size (`small`, `medium`, `large`) |
| text | String | `Loading...` | Alternative text for accessibility |

---

# Component Structure

```
Parent Component

        │

        ▼

<c-fsam-spinner>

        │

        ▼

lightning-spinner
```

---

# Usage

Default spinner:

```html
<c-fsam-spinner></c-fsam-spinner>
```

Large spinner:

```html
<c-fsam-spinner
    size="large">
</c-fsam-spinner>
```

Custom loading message:

```html
<c-fsam-spinner
    size="medium"
    text="Loading service requests">
</c-fsam-spinner>
```

Conditional rendering:

```html
<template lwc:if={isLoading}>
    <c-fsam-spinner
        text="Loading assets">
    </c-fsam-spinner>
</template>
```

---

# Design Principles

- Single Responsibility
- No Apex
- No Events
- No Business Logic
- SLDS First
- Accessible by Default
- Lightweight and Reusable

---

# Dependencies

- `lightning-spinner`

---

# Future Enhancements

Potential enhancements include:

- Full-page overlay mode
- Configurable variant
- Optional loading message beneath the spinner
- Centered container helper

These enhancements are intentionally deferred to keep the component lightweight.