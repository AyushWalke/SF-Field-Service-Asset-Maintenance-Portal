# FSAM Pagination

## Overview

`fsamPagination` is a reusable Lightning Web Component that provides standardized pagination controls for the Field Service Asset Maintenance Portal.

The component manages page navigation and notifies its parent when the active page changes. It contains no business logic and is independent of any specific feature module.

---

# Purpose

Provide consistent pagination controls across the application.

The component:

- Displays the current page.
- Displays the total number of pages.
- Enables Previous and Next navigation.
- Prevents invalid navigation.
- Emits a semantic `pagechange` event.

---

# Public API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| currentPage | Number | `1` | Currently selected page. |
| totalPages | Number | `1` | Total number of available pages. |

---

# Events

## pagechange

Dispatched whenever the current page changes.

### Payload

```javascript
{
    detail: {
        page: 3
    }
}
```

---

# Component Structure

```
Parent Component

        │

        ▼

currentPage
totalPages

        │

        ▼

Previous Button

Page Indicator

Next Button

        │

        ▼

pagechange Event

        │

        ▼

Parent Component
```

---

# Usage

Basic:

```html
<c-fsam-pagination
    current-page={currentPage}
    total-pages={totalPages}
    onpagechange={handlePageChange}>
</c-fsam-pagination>
```

Parent handler:

```javascript
handlePageChange(event) {
    this.currentPage = event.detail.page;
}
```

---

# Design Principles

- Single Responsibility
- No Apex
- No Business Logic
- Generic Event Contract
- SLDS First
- Accessible
- Reusable

---

# Dependencies

- `lightning-button`

---

# Future Enhancements

Potential future improvements include:

- First / Last page buttons
- Direct page number selection
- Page size selector
- Keyboard navigation support
- Compact pagination mode

These enhancements are intentionally deferred to keep the component lightweight and reusable.