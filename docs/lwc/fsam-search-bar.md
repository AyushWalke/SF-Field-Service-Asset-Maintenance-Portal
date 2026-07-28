# FSAM Search Bar

## Overview

`fsamSearchBar` is a reusable Lightning Web Component that provides a standardized search input with built-in debouncing.

It captures user input and emits a semantic `search` event, allowing parent components to perform filtering or server-side searches without coupling the search bar to business logic.

---

# Purpose

Provide a reusable search component across the Field Service Asset Maintenance Portal.

The component:

- Displays a search input.
- Supports configurable placeholder text.
- Emits debounced search events.
- Contains no Apex or application-specific logic.

---

# Public API

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| placeholder | String | `Search...` | Placeholder text displayed in the input. |
| value | String | Empty | Current search value. |
| debounceDelay | Number | `300` | Delay (milliseconds) before firing the search event. |

---

# Events

## search

Dispatched after the debounce interval.

### Payload

```javascript
{
    detail: {
        value: "<search text>"
    }
}
```

---

# Component Structure

```
User Types

      │

      ▼

lightning-input

      │

      ▼

Debounce Timer

      │

      ▼

search Event

      │

      ▼

Parent Component
```

---

# Usage

Basic:

```html
<c-fsam-search-bar
    onsearch={handleSearch}>
</c-fsam-search-bar>
```

Custom placeholder:

```html
<c-fsam-search-bar
    placeholder="Search Assets..."
    onsearch={handleSearch}>
</c-fsam-search-bar>
```

Custom debounce:

```html
<c-fsam-search-bar
    debounce-delay="500"
    onsearch={handleSearch}>
</c-fsam-search-bar>
```

---

# Design Principles

- Single Responsibility
- No Apex
- No Business Logic
- Generic Event Contract
- Debounced Input
- SLDS First
- Accessible
- Reusable

---

# Dependencies

- `lightning-input`

---

# Future Enhancements

Potential future improvements include:

- Clear button
- Optional search icon placement
- Minimum character threshold
- Keyboard shortcut support
- Optional instant search mode

These enhancements are intentionally deferred to keep the component lightweight.