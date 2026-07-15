#!/usr/bin/env python3
"""OG 画像(site/public/og.png、1200x630)を生成する。

書影は main.pdf の標題紙(2ページ目)をレンダリングしてトリムしたもの。
フォントは KaTeX 付属の Computer Modern 系(site/node_modules/katex)を使う。

依存: pip install pymupdf pillow numpy(+ site/ で npm install 済みであること)
実行: python3 scripts/generate-og.py
"""

from pathlib import Path

import fitz  # pymupdf
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONT_DIR = ROOT / 'site/node_modules/katex/dist/fonts'
OUT = ROOT / 'site/public/og.png'

W, H = 1200, 630
COVER_H = 520
BG = (32, 42, 66)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size)


def render_cover() -> Image.Image:
    """標題紙をレンダリングし、ノイズに強い投影ベースで本文ブロックを対称トリムする。"""
    doc = fitz.open(ROOT / 'main.pdf')
    pix = doc[1].get_pixmap(dpi=150)
    raw = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    g = np.array(raw.convert('L'))
    mask = g < 160
    # スキャン上のシミで境界が広がらないよう、黒画素が 10px 以上の行・列のみ内容とみなす
    xs = np.where(mask.sum(axis=0) >= 10)[0]
    ys = np.where(mask.sum(axis=1) >= 10)[0]
    l, r, t, b = xs[0], xs[-1], ys[0], ys[-1]
    pad_w = int((r - l) * 0.16)
    pad_h = int((b - t) * 0.11)
    return raw.crop((max(0, l - pad_w), max(0, t - pad_h),
                     min(raw.width, r + pad_w), min(raw.height, b + pad_h)))


def paste_cover(bg: Image.Image, cover: Image.Image, cx: int, cy: int, border: int = 6) -> None:
    c = cover.copy()
    c.thumbnail((10 ** 4, COVER_H - 2 * border), Image.LANCZOS)
    card = Image.new('RGB', (c.width + 2 * border, c.height + 2 * border), 'white')
    card.paste(c, (border, border))
    shadow = Image.new('RGBA', (card.width + 80, card.height + 80), (0, 0, 0, 0))
    d = ImageDraw.Draw(shadow)
    d.rectangle((40, 40, 40 + card.width, 40 + card.height), fill=(0, 0, 0, 150))
    shadow = shadow.filter(ImageFilter.GaussianBlur(13))
    bg.paste(Image.new('RGB', shadow.size, (0, 0, 0)),
             (cx - shadow.width // 2, cy - shadow.height // 2 + 6), shadow)
    bg.paste(card, (cx - card.width // 2, cy - card.height // 2))


def main() -> None:
    img = Image.new('RGB', (W, H), BG)
    paste_cover(img, render_cover(), 320, H // 2)
    d = ImageDraw.Draw(img)
    tx = 590
    d.text((tx, 180), 'Grundlagen', font=font('KaTeX_Main-Bold.ttf', 62), fill=(238, 240, 248))
    d.text((tx, 255), 'der Analysis', font=font('KaTeX_Main-Bold.ttf', 62), fill=(238, 240, 248))
    d.line((tx, 345, tx + 430, 345), fill=(115, 126, 165), width=2)
    d.text((tx, 365), 'Edmund Landau, 1930', font=font('KaTeX_Main-Italic.ttf', 34), fill=(185, 190, 214))
    d.text((tx, 425), 'Deutsch / English / Japanese', font=font('KaTeX_Main-Regular.ttf', 28), fill=(150, 158, 190))
    img.save(OUT)
    print('wrote', OUT)


if __name__ == '__main__':
    main()
