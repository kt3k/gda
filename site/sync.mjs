// リポジトリ直下(de 原文)と ja/・en/ の canonical な md を docs/pages/ にコピーする。
// vocs は remark-math を使うため、Nextra 用の ```math フェンスを $$ に変換する。
// (全フェンスが数式であることは確認済み — 通常のコードブロックは存在しない)
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const FILES = ['vorwort.md', 'kapitel-1.md', 'kapitel-2.md', 'kapitel-3.md', 'kapitel-4.md', 'kapitel-5.md']
const LOCALES = [['..', 'docs/pages/de'], ['../ja', 'docs/pages/ja'], ['../en', 'docs/pages/en']]

const convert = (src) =>
  src.replace(/^```math$/gm, '$$$$').replace(/^```$/gm, '$$$$')

for (const [srcDir, destDir] of LOCALES) {
  mkdirSync(destDir, { recursive: true })
  for (const f of FILES) {
    const md = readFileSync(join(srcDir, f), 'utf8')
    writeFileSync(join(destDir, f), convert(md))
  }
}
console.log('synced', FILES.length * LOCALES.length, 'files')
