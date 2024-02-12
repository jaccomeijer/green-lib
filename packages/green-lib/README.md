# green-lib

## Project structure

The project methodology is simple and defines three concepts:

- Utilities
- Structures
- Components

### Utilities

- CSS classes
- Prefixed with `-u`
- Set one thing, mostly a css custom property
- Examples: u-font-size-xl, u-gap-xs, u-primary-color-300

### Structures

- CSS classes
- Prefixed with `s`
- Provide a piece of layout structure
- Can be changed by setting a custom property (eg using a utility)
- Examples: s-grid, s-wrapper

### Components

- Provide HTML + styling for a specific conceptual context
- Do not have a prefix
- CSS rules start with component class `.component-class`
- Internal elements, like a button, are also handled as a component
- Examples: card, action, picture, navigation-header, etc.

## Type and space scales

Design token scales generated with <https://utopia.fyi>.

## Design tokens

- https://www.w3.org/community/design-tokens/
- https://tr.designtokens.org/format/
