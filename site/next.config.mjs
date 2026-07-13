import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
})

export default withNextra({
  output: 'export',
  images: { unoptimized: true },
  // GitHub Pages (kt3k.github.io/gda) 用。ローカル dev では未設定のまま。
  basePath: process.env.PAGES_BASE_PATH ?? '',
})
