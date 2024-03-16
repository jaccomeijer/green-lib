import packageJson from '../../../package.json'

const version = packageJson.version

export const metadata = {
  branding: {
    copyright: 'Copyright © 2024 Jacco Meijer',
    description: 'A reference implementation of the Green UI Library.',
    heading: 'Green Reference',
    icon: 'home',
    url: '/',
  },
  vendor: {
    heading: 'Made with Green UI Library',
    icon: 'globe',
    url: 'https://github.com/jaccomeijer/green-lib',
    version,
  },
  content: {
    generator: 'esbuild',
    language: 'en',
  },
}
