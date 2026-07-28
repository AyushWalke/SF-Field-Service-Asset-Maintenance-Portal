# FSAM Error Panel

## Overview

`fsamErrorPanel` is a reusable Lightning Web Component that provides a standardized error presentation for the Field Service Asset Maintenance Portal.

It displays an error icon, title, message, and optional technical details while remaining completely independent of application logic.

---

# Purpose

Provide a consistent error experience across all feature modules.

The component:

- Displays an error icon.
- Shows an error title.
- Displays a user-friendly message.
- Optionally renders technical details.
- Contains no business logic.

---

# Public API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | String | `Something went wrong` | Primary error heading. |
| message | String | `An unexpected error occurred.` | User-facing error message. |
| details | String | Empty | Optional technical details displayed below the message. |
| iconName | String | `utility:error` | Lightning icon displayed above the title. |

---

# Component Structure

```
Parent Component

        │

        ▼

title
message
details
iconName

        │

        ▼

lightning-icon

Heading

Message

Technical Details (optional)
```

---

# Usage

Default:

```html
<c-fsam-error-panel></c-fsam-error-panel>
```

Custom message:

```html
<c-fsam-error-panel
    title="Unable to Load Assets"
    message="The assets could not be retrieved."
    details={errorMessage}>
</c-fsam-error-panel>
```

Conditional rendering:

```html
<template lwc:if={hasError}>
    <c-fsam-error-panel
        title="Service Request Error"
        message="Unable to retrieve service requests."
        details={errorMessage}>
    </c-fsam-error-panel>
</template>
```

---

# Design Principles

- Single Responsibility
- No Apex
- No Events
- No Business Logic
- SLDS First
- Accessible
- Reusable

---

# Dependencies

- `lightning-icon`

---

# Future Enhancements

Potential future improvements include:

- Configurable details heading
- Expand/collapse technical details
- Illustration support
- Optional action slot for retry buttons

These enhancements are intentionally deferred to keep the component lightweight and reusable.