# FSAM Status Badge

## Overview

`fsamStatusBadge` is a reusable Lightning Web Component that displays standardized status badges throughout the Field Service Asset Maintenance Portal.

It provides a consistent visual representation of record statuses while remaining completely independent of business logic.

---

# Purpose

Provide a reusable status badge component for all feature modules.

The component:

- Displays a status label.
- Applies the appropriate SLDS theme.
- Handles unknown values gracefully.
- Requires no Apex or data access.

---

# Public API

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| status | String | Yes | Status value displayed by the component. |

---

# Supported Statuses

| Status | SLDS Theme |
|----------|------------|
| New | Info |
| Assigned | Warning |
| In Progress | Alt Inverse |
| Completed | Success |
| On Hold | Offline |
| Cancelled | Error |
| Unknown | Lightest |

Unknown or unsupported values automatically display a neutral badge.

---

# Component Structure

```
status (@api)

        │

        ▼

STATUS_CONFIG

        │

        ▼

statusConfig Getter

        │

 ┌──────┴──────┐
 ▼             ▼

displayStatus  badgeClass

        │

        ▼

Template
```

---

# Usage

```html
<c-fsam-status-badge
    status="Completed">
</c-fsam-status-badge>
```

Example:

```html
<c-fsam-status-badge
    status={serviceRequest.Status__c}>
</c-fsam-status-badge>
```

---

# Design Principles

- Single Responsibility
- No Apex
- No Events
- No Business Logic
- SLDS First
- Accessible
- Reusable Across Modules

---

# Dependencies

None.

The component is completely self-contained.

---

# Future Enhancements

Potential future improvements include:

- Optional icons
- Badge size variants
- Custom color variants
- Tooltip customization

These enhancements are intentionally deferred to keep the component lightweight and reusable.