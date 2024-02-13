import path from 'path'
import { build } from 'esbuild'

await build({
  entryPoints: [path.resolve('./src/components/element/empty-component/empty-component.jsx')],
  bundle: true,
  format: 'esm',
  jsx: 'automatic',
  jsxImportSource: 'preact',
  loader: {
    '.ce.js': 'file',
    '.ce.css': 'file',
  },
  outdir: 'dist',
  platform: 'browser',
})
