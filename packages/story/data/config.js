const buildConfig = {
  serve: false,
}

const serveConfig = {
  serve: true,
}

export const config = {
  assetUrl: '/assets/',
  baseUrl: '',
  outdir: 'dist',
  entryPointsGlob: '../green-lib/components/**/*.{mdx}',
  imageSizes: {
    s: 300,
    m: 700,
    l: 1000,
  },
  initialProps: {},
  removeBundle: false,
  stripFromOutputPath: '../green-lib/components',
  ...(process.env.MODE === 'build' ? buildConfig : {}),
  ...(process.env.MODE === 'serve' ? serveConfig : {}),
}
