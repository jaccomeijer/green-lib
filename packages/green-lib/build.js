import { build } from 'esbuild'

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
  outdir: 'dist',
  packages: 'external',
})
