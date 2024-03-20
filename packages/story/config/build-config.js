const buildEnv = {
  outdir: 'docs',
  serve: false,
}

const serveEnv = {
  outdir: 'dist',
  serve: true,
}

export const buildConfig = {
  entryPointsGlob: '../**/*.{mdx}',
  imageSizes: {
    s: 300,
    m: 700,
    l: 1000,
  },
  initialProps: {},
  removeBundle: true,
  stripFromOutputPath: '..',
  ...(process.env.MODE === 'build' ? buildEnv : {}),
  ...(process.env.MODE === 'serve' ? serveEnv : {}),
}
