import { buildConfig } from './build-config.js'
import { metadata } from './metadata.js'

export const globals = {
  assetUrl: '/assets/',
  baseUrl: '',
  imageSizes: buildConfig.imageSizes,
  metadata,
}
