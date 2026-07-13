export default {
  logo: <b>Grundlagen der Analysis</b>,
  project: {
    link: 'https://github.com/kt3k/gda',
  },
  docsRepositoryBase: 'https://github.com/kt3k/gda/blob/main',
  editLink: { content: null },
  feedback: { content: null },
  footer: {
    content: 'Edmund Landau, Grundlagen der Analysis (Leipzig, 1930)',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Edmund Landau, Grundlagen der Analysis (1930)"
      />
    </>
  ),
  useNextSeoProps() {
    return { titleTemplate: '%s – Grundlagen der Analysis' }
  },
}
