import { defineConfig } from 'vocs/config'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// vocs は組み込みの shiki をユーザーの rehype プラグインより先に実行するため、
// $$ ブロックのデフォルト HAST(<pre><code class="language-math">)が
// コードブロックとして食われてしまう。math ノードを <div class="math math-display">
// に変えて shiki を素通りさせ、後段の rehype-katex に処理させる。
function remarkMathDisplayDiv() {
  return (tree: any) => {
    const walk = (node: any) => {
      if (node.type === 'math') {
        node.data = {
          ...node.data,
          hName: 'div',
          hProperties: { className: ['math', 'math-display'] },
          hChildren: [{ type: 'text', value: node.value }],
        }
      }
      if (node.children) for (const child of node.children) walk(child)
    }
    walk(tree)
  }
}

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
  { text: 'Preface', link: '/en/preface' },
  { text: 'Chapter 1. Natural Numbers', link: '/en/chapter-1' },
  { text: 'Chapter 2. Fractions', link: '/en/chapter-2' },
  { text: 'Chapter 3. Cuts', link: '/en/chapter-3' },
  { text: 'Chapter 4. Real Numbers', link: '/en/chapter-4' },
  { text: 'Chapter 5. Complex Numbers', link: '/en/chapter-5' },
]

const ja = [
  { text: '概要', link: '/ja' },
  { text: '序文', link: '/ja/preface' },
  { text: '第1章 自然数', link: '/ja/chapter-1' },
  { text: '第2章 分数', link: '/ja/chapter-2' },
  { text: '第3章 切断', link: '/ja/chapter-3' },
  { text: '第4章 実数', link: '/ja/chapter-4' },
  { text: '第5章 複素数', link: '/ja/chapter-5' },
]

export default defineConfig({
  title: 'Grundlagen der Analysis',
  description:
    'Edmund Landau, Grundlagen der Analysis (1930) — deutscher Originaltext, English translation, 日本語訳',
  // GitHub Pages(kt3k.github.io/gda)向けの完全静的出力
  renderStrategy: 'full-static',
  // GitHub Pages (kt3k.github.io/gda) 用。ローカルでは未設定のまま。
  basePath: process.env.PAGES_BASE_PATH,
  baseUrl: 'https://kt3k.github.io/gda',
  // OG 画像(public/og.png、scripts/generate-og.py で生成)
  ogImageUrl: 'https://kt3k.github.io/gda/og.png',
  head: {
    style: [
      {
        // ヘッダーのロゴテキストを控えめに(デフォルトは text-2xl / font-bold)。
        // 外部 CSS(_root.css)だと読み込みタイミングで一瞬大きく表示されるため、
        // head に直接インラインして最初のペイントから適用させる。
        textContent:
          'div[data-v-logo-text]{font-size:1.125rem;line-height:1.75rem;font-weight:500}',
      },
    ],
  },
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
    remarkPlugins: [remarkMath, remarkMathDisplayDiv],
    rehypePlugins: [[rehypeKatex, { strict: false }]],
  },
})
