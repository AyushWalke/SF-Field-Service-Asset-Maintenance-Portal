# FSAM Empty State

## Overview

`fsamEmptyState` is a reusable Lightning Web Component that provides a consistent user experience whenever a page, table, or search result contains no data.

The component is presentation-only and contains no business logic.

---

# Purpose

Display a standardized empty state across the Field Service Asset Maintenance Portal.

The component:

- Displays an informative icon.
- Shows a title.
- Provides an explanatory message.
- Uses Salesforce Lightning Design System (SLDS).
- Remains independent of feature-specific behavior.

---

# Public API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | String | `No Data Available` | Primary heading displayed to the user. |
| message | String | `There are no records to display.` | Supporting message explaining the empty state. |
| iconName | String | `utility:info` | Lightning icon displayed above the title. |

---

# Component Structure

```
Parent Component

        │

        ▼

title
message
iconName

        │

        ▼

fsamEmptyState

        │

        ▼

lightning-icon

Heading

Description
```

---

# Usage

Default:

```html
<c-fsam-empty-state></c-fsam-empty-state>
```

Custom message:

```html
<c-fsam-empty-state
    title="No Assets Found"
    message="Try adjusting your search criteria."
    icon-name="utility:search">
</c-fsam-empty-state>
```

Search example:

```html
<template lwc:if={hasResults}>
    <!-- Results -->
</template>

<template lwc:else>
    <c-fsam-empty-state
        title="No Results"
        message="No matching assets were found."
        icon-name="utility:search">
    </c-fsam-empty-state>
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

- `lightning-icon`

---

# Future Enhancements

Potential enhancements include:

- Optional action slot
- Configurable icon size
- Layout variants
- Illustration support

These enhancements are intentionally deferred to keep the component simple and reusable.