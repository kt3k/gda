import { defineConfig } from 'vocs'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const de = [
  { text: 'Übersicht', link: '/de' },
  { text: 'Vorwort', link: '/de/vorwort' },
  { text: 'Kapitel 1. Natürliche Zahlen', link: '/de/kapitel-1' },
  { text: 'Kapitel 2. Brüche', link: '/de/kapitel-2' },
  { text: 'Kapitel 3. Schnitte', link: '/de/kapitel-3' },
  { text: 'Kapitel 4. Reelle Zahlen', link: '/de/kapitel-4' },
  { text: 'Kapitel 5. Komplexe Zahlen', link: '/de/kapitel-5' },
]

const en = [
  { text: 'Overview', link: '/en' },
  { text: 'Preface', link: '/en/vorwort' },
  { text: 'Chapter 1. Natural Numbers', link: '/en/kapitel-1' },
  { text: 'Chapter 2. Fractions', link: '/en/kapitel-2' },
  { text: 'Chapter 3. Cuts', link: '/en/kapitel-3' },
  { text: 'Chapter 4. Real Numbers', link: '/en/kapitel-4' },
  { text: 'Chapter 5. Complex Numbers', link: '/en/kapitel-5' },
]

const ja = [
  { text: '概要', link: '/ja' },
  { text: '序文', link: '/ja/vorwort' },
  { text: '第1章 自然数', link: '/ja/kapitel-1' },
  { text: '第2章 分数', link: '/ja/kapitel-2' },
  { text: '第3章 切断', link: '/ja/kapitel-3' },
  { text: '第4章 実数', link: '/ja/kapitel-4' },
  { text: '第5章 複素数', link: '/ja/kapitel-5' },
]

export default defineConfig({
  title: 'Grundlagen der Analysis',
  description:
    'Edmund Landau, Grundlagen der Analysis (1930) — deutscher Originaltext und japanische Übersetzung',
  // GitHub Pages (kt3k.github.io/gda) 用。ローカルでは未設定のまま。
  basePath: process.env.PAGES_BASE_PATH ?? undefined,
  topNav: [
    { text: 'Deutsch', link: '/de' },
    { text: 'English', link: '/en' },
    { text: '日本語訳', link: '/ja' },
  ],
  socials: [{ icon: 'github', link: 'https://github.com/kt3k/gda' }],
  sidebar: {
    '/de': de,
    '/en': en,
    '/ja': ja,
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: false }]],
  },
})
