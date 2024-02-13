import glob from 'tiny-glob'
import { build } from 'esbuild'

const entryPoints = await glob('src/components/**/*.{jsx}')

await build({
  bundle: true,
  entryPoints,
  format: 'esm',
  jsx: 'automatic',
  jsxImportSource: 'preact',
  loader: {

    // Importing these files in js returns a filename with hash
    '.css': 'file',
    '.js': 'file',
    '.svg': 'file',
    '.ttf': 'file',
  },
  minify: true,
  outdir: 'dist',
  packages: 'external',
  platform: 'node',
})
