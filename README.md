# green-lib

MDX component library for green-build.

## Project structure

The project methodology is simple and defines three concepts:

- Utilities
- Structures
- Components

### Utilities

- CSS classes
- Prefixed with `u-`
- Set something, e.g. a font size or a custom property value
- Examples: u-font-size-xl, u-gap-xs, u-primary-color-300

### Structures

- CSS classes
- Prefixed with `s-`
- Consume utilities
- Provide structure
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
- https://github.com/Heydon/design-tokens-cli

```bash
npm -w @local/story run design-tokens
```

## Stories

```bash
npm -w @local/story run serve
```

## Release

```bash
npx @jaccomeijer/jmmake release @jaccomeijer/green-lib
```

## Tracking

- https://usefathom.com
