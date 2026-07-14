# Grundlagen der Analysis

Edmund Landau, *Grundlagen der Analysis (Das Rechnen mit ganzen, rationalen, irrationalen, komplexen Zahlen)*, Akademische Verlagsgesellschaft M.B.H., Leipzig 1930.

OCR されたスキャン PDF([main.pdf](main.pdf))からテキストを抽出・修正し、markdown 化したものです。数式は LaTeX(` ```math ` / `$...$`)で記述しています。

ドキュメントサイト: **https://kt3k.github.io/gda/**(ドイツ語原文 `/de/`・英訳 `/en/`・日本語訳 `/ja/`、[vocs](https://vocs.dev) 製)

日本語訳は [ja/](ja/)、英訳は [en/](en/) ディレクトリにあります(いずれも LLM による機械翻訳)。

## Inhaltsverzeichnis

- [Vorwort](vorwort.md) — Vorwort für den Lernenden / Vorwort für den Kenner
- [Kapitel 1. Natürliche Zahlen](kapitel-1.md)
  - § 1. Axiome / § 2. Addition / § 3. Ordnung / § 4. Multiplikation
- [Kapitel 2. Brüche](kapitel-2.md)
  - § 1. Definition und Äquivalenz / § 2. Ordnung / § 3. Addition / § 4. Multiplikation / § 5. Rationale Zahlen und ganze Zahlen
- [Kapitel 3. Schnitte](kapitel-3.md)
  - § 1. Definition / § 2. Ordnung / § 3. Addition / § 4. Multiplikation / § 5. Rationale Schnitte und ganze Schnitte
- [Kapitel 4. Reelle Zahlen](kapitel-4.md)
  - § 1. Definition / § 2. Ordnung / § 3. Addition / § 4. Multiplikation / § 5. Dedekindscher Hauptsatz
- [Kapitel 5. Komplexe Zahlen](kapitel-5.md)
  - § 1. Definition / § 2. Addition / § 3. Multiplikation / § 4. Subtraktion / § 5. Division / § 6. Konjugierte Zahlen / § 7. Absoluter Betrag / § 8. Summen und Produkte / § 9. Potenzen / § 10. Einordnung der reellen Zahlen

## 編集方針

- **原本の書誌メタ情報は本文 markdown に収録しない。** スキャン原本の標題紙・奥付にあたる情報(書名・著者肩書・出版社・発行年・copyright 表記・印刷所など)は、本文ではないため vorwort.md / ja/vorwort.md の冒頭から除外している。書誌情報はこの README の冒頭に記載する。
- 本文そのものは改変しない。OCR 由来の欠落・不明箇所は捏造せず、注記のみ入れる。

## 既知の欠落

- 元のスキャン PDF には本の **VII ページ(Vorwort für den Kenner の冒頭)が物理的に欠落**しています。該当部分は Google Books の版のスクリーンショット([scans/seite-vii-google-books.png](scans/seite-vii-google-books.png))から文字起こしして補い、[vorwort.md](vorwort.md) 内に注記しています。
- OCR 由来の細かい欠落(ページ境界で失われた数式など)が数箇所あり、各ファイル内にそのまま(捏造せずに)残しています。
