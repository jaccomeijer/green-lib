import { buildConfig } from './config/build-config.js'
import { build } from '@jaccomeijer/green-build'

if (process.argv[2] === 'serve') {
  buildConfig.serve = true
}

build(buildConfig)
