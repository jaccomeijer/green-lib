import { globals } from './src/data/globals.js'
import { build } from '@jaccomeijer/green-build'

const config = {
  entryPointsGlob: 'src/package/components/**/*.{mdx}',
  imageSizes: globals.imageSizes,
  initialProps: {},
  outdir: 'docs',
  removeBundle: false,
  serve: false,
  stripFromOutputPath: 'src/package/components',
}

if (process.argv[2] === 'serve') {
  config.serve = true
}

build(config)
