import { config } from './src/data/config.js'
import { build } from '@jaccomeijer/green-build'

if (process.argv[2] === 'serve') {
  config.serve = true
}

build(config)
