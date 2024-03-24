import { build } from 'esbuild'

// Build to react folder. Unfortunately, building to the dist folder is not
// possible because the dist folder is excluded from the NPM package (because it
// is listed in gitignore).
//
// The downside of this method is that the react folder gets pushed to the
// repository while there's no actual need.

await build({
  bundle: true,
  entryPoints: ['./index.js'],
  format: 'esm',
  jsx: 'automatic',
  loader: {
    '.ce.js': 'file',
    '.css': 'empty',
  },
  minify: true,
  outdir: 'react',
  packages: 'external',
})
