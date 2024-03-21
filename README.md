# green-lib

UI Library created as a Proof Of Concept with [green-build](https://github.com/jaccomeijer/green-build)

- [Blog post about this library](https://www.jaccomeijer.nl/blog/ui-library/)
- [This library on NPM](https://www.npmjs.com/package/@jaccomeijer/green-lib)
- [A static documentation build](https://www.jaccomeijer.nl/green-lib/)
- [Source of the library at Github](https://github.com/jaccomeijer/green-lib)

## Related repositories

- [11ty and Github pages](https://www.jaccomeijer.nl/blog/11ty-and-github-pages/), Blog post that started all this
- [render-jsx-plugin-poc](https://github.com/jaccomeijer/render-jsx-plugin-poc), Proof Of Concept using Esbuild as a static site generator 
- [green-build](https://github.com/jaccomeijer/green-build), More capable version of the [render-jsx-plugin-poc](https://github.com/jaccomeijer/render-jsx-plugin-poc)
- [green-lib](https://github.com/jaccomeijer/green-lib), UI Library created with [green-build](https://github.com/jaccomeijer/green-build)
- [green-reference](https://github.com/jaccomeijer/green-reference), A reference implementation of the [green-lib](https://github.com/jaccomeijer/green-lib) Library


## NPM scripts

Update design tokens:

```bash
npm -w @local/story run design-tokens
```

Start live reloading web server with stories:

```bash
npm -w @local/story run serve
```

Build a new static site to the root docs folder:

```bash
npm -w @local/story run build
```

Create a new Github release and push to NPM registry:

```bash
npx @jaccomeijer/jmmake release @jaccomeijer/green-lib
```

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

## Typical CSS layer order

```css
@layer reset, body, font, highlight, markdown, structures, components, utilities, custom;
```

## Type and space scales

Font and space scales in the design tokens are generated with https://utopia.fyi.

## Design tokens

- https://www.w3.org/community/design-tokens/
- https://tr.designtokens.org/format/
- https://github.com/Heydon/design-tokens-cli


## Tracking

- https://beamanalytics.io
