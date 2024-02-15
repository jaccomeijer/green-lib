import { config } from './config.js'
import { metadata } from './metadata.js'

export const globals = {
  assetUrl: config.assetUrl,
  baseUrl: config.baseUrl,
  imageSizes: config.imageSizes,
  metadata,
}
