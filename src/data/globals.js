import { config } from './config.js'

export const globals = {
  assetUrlPrefix: config.assetUrlPrefix,
  imageSizes: config.imageSizes,
  metadata: {
    author: {
      name: 'Jacco Meijer',
      email: 'jacco@jaccomeijer.nl',
      url: 'https://jaccomeijer.nl',
    },
    branding: 'Modelberry UI Library',
    copyright: 'Copyright 2024 © Modelberry UI Library',
    description: 'A reference implementation of the Modelberry UI Library.',
    generator: 'esbuild',
    language: 'en',
    title: 'Modelberry UI Library',
    url: 'https://blue.modelberry.com',
    vendor: 'Made with Modelberry',
    version: '4.0.0',
  },
}
