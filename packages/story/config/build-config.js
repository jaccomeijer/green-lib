const buildEnv = {
  serve: false,
}

const serveEnv = {
  serve: true,
}

export const buildConfig = {
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
  ...(process.env.MODE === 'build' ? buildEnv : {}),
  ...(process.env.MODE === 'serve' ? serveEnv : {}),
}
