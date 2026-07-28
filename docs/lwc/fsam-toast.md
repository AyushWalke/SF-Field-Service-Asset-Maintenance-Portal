# FSAM Toast

## Overview

`fsamToast` is a reusable utility Lightning Web Component that provides a standardized interface for displaying Salesforce toast notifications.

The component wraps the native `ShowToastEvent` API, ensuring consistent validation and usage throughout the Field Service Asset Maintenance Portal.

---

# Purpose

Provide a reusable notification service for all feature modules.

The component:

- Wraps Salesforce's `ShowToastEvent`
- Validates supported variants and modes
- Provides a consistent API
- Contains no business logic

---

# Public API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | String | Empty | Toast title. |
| message | String | Empty | Toast body message. |
| variant | String | `info` | Toast variant (`success`, `error`, `warning`, `info`). |
| mode | String | `dismissible` | Toast mode (`dismissible`, `sticky`, `pester`). |

---

# Public Methods

## show()

Displays the toast using Salesforce's native `ShowToastEvent`.

---

# Component Structure

```
Parent Component

        │

        ▼

<c-fsam-toast>

        │

        ▼

Validate Inputs

        │

        ▼

ShowToastEvent

        │

        ▼

Salesforce Toast
```

---

# Usage

Template:

```html
<c-fsam-toast></c-fsam-toast>
```

JavaScript:

```javascript
const toast = this.template.querySelector('c-fsam-toast');

toast.label = 'Success';
toast.message = 'Service Request created successfully.';
toast.variant = 'success';

toast.show();
```

---

# Design Principles

- Single Responsibility
- No Apex
- No Business Logic
- Wrapper Around Native API
- Defensive Validation
- Lightweight
- Reusable

---

# Dependencies

- `lightning/platformShowToastEvent`

---

# Future Enhancements

Potential future improvements include:

- Support for `messageData`
- Centralized logging
- Configurable defaults
- Toast queue management

These enhancements are intentionally deferred to keep the component lightweight.