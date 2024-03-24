import iconSpriteUrl from 'feather-icons/dist/feather-sprite.svg'
import { buildConfig } from './build-config.js'
import { metadata } from './metadata.js'

const buildEnv = {
  assetUrl: '/assets/',
  baseUrl: '/green-lib',
  iconSpriteUrl: `/assets/${iconSpriteUrl}`,
}

const serveEnv = {
  assetUrl: '/assets/',
  baseUrl: '',
  iconSpriteUrl: `/assets/${iconSpriteUrl}`,
}

export const globals = {
  imageSizes: buildConfig.imageSizes,
  metadata,
  ...(process.env.MODE === 'build' ? buildEnv : {}),
  ...(process.env.MODE === 'serve' ? serveEnv : {}),
}
