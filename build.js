import { metadata } from './src/data/metadata.js'

import { build } from '@jaccomeijer/green-build'

const config = {
  entryPointsGlob: 'src/components/**/*.{mdx}',
  imageSizes: {
    s: 300,
    m: 700,
    l: 1000,
  },
  metadata,
  outdir: 'dist',
  serve: true,
  stripFromOutputPath: 'src/components',
}

build(config)
