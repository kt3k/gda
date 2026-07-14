// リポジトリ直下(de 原文)と ja/・en/ の canonical な md を docs/pages/ にコピーする。
// vocs は remark-math を使うため、Nextra 用の ```math フェンスを $$ に変換する。
// (全フェンスが数式であることは確認済み — 通常のコードブロックは存在しない)
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

// de は原文どおりのドイツ語スラッグ、en/ja は英語スラッグ(URL に一致)
const DE_FILES = ['vorwort.md', 'kapitel-1.md', 'kapitel-2.md', 'kapitel-3.md', 'kapitel-4.md', 'kapitel-5.md']
const EN_FILES = ['preface.md', 'chapter-1.md', 'chapter-2.md', 'chapter-3.md', 'chapter-4.md', 'chapter-5.md']
const LOCALES = [['..', 'docs/pages/de', DE_FILES], ['../ja', 'docs/pages/ja', EN_FILES], ['../en', 'docs/pages/en', EN_FILES]]

const convert = (src) =>
  src.replace(/^```math$/gm, '$$$$').replace(/^```$/gm, '$$$$')

let n = 0
for (const [srcDir, destDir, files] of LOCALES) {
  mkdirSync(destDir, { recursive: true })
  for (const f of files) {
    const md = readFileSync(join(srcDir, f), 'utf8')
    writeFileSync(join(destDir, f), convert(md))
    n++
  }
}
console.log('synced', n, 'files')
