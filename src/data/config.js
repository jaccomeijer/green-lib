export const config = {
  assetUrlPrefix: '/assets',
  entryPointsGlob: 'src/package/components/**/*.{mdx}',
  imageSizes: {
    s: 300,
    m: 700,
    l: 1000,
  },
  initialProps: {},
  outdir: 'dist',
  removeBundle: false,
  serve: false,
  stripFromOutputPath: 'src/package/components',
}

if (process.argv[2] === 'serve') {
  config.serve = true
}
