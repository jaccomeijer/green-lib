import { build } from 'esbuild'

await build({
  bundle: true,
  entryPoints: ['./index.js'],
  format: 'esm',
  jsx: 'automatic',
  loader: {
    '.ce.js': 'file',
    '.css': 'empty',
    '.ico': 'empty',
    '.ttf': 'empty',
    '.jpg': 'empty',
    '.png': 'empty',
    '.svg': 'empty',
  },
  minify: true,
  outdir: 'dist',
  packages: 'external',
})
