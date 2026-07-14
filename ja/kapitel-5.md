# 第5章 複素数

## § 1. 定義

**定義 57:** 複素数とは、(定まった順序での)実数の対 $\Xi_1, \Xi_2$ のことである。この複素数を $[\Xi_1, \Xi_2]$ で表す。その際、$[\Xi_1, \Xi_2]$ と $[\mathrm{H}_1, \mathrm{H}_2]$ が同じ数(等しい;記号 $=$)とみなされるのは、

```math
\Xi_1 = \mathrm{H}_1, \quad \Xi_2 = \mathrm{H}_2
```

であるとき、またそのときに限る。そうでないときは等しくない(相異なる;記号 $\neq$)とみなす。

小文字のドイツ文字は一貫して複素数を表す。

したがって、任意の $\mathfrak{x}$ と任意の $\mathfrak{y}$ に対して、

```math
\mathfrak{x} = \mathfrak{y}, \quad \mathfrak{x} \neq \mathfrak{y}
```

のうちのちょうど一方の場合が成り立つ。複素数においては同一性と相等性の概念が混じり合うので、次の三つの定理は自明である。

**定理 206:** $\mathfrak{x} = \mathfrak{x}$.

**定理 207:**

```math
\mathfrak{x} = \mathfrak{y}
```

から

```math
\mathfrak{y} = \mathfrak{x}.
```

が従う。

**定理 208:**

から

```math
\mathfrak{x} = \mathfrak{z}.
```

が従う。

**定義 58:** $\mathfrak{n} = [0, 0]$.

**定義 59:** $\mathfrak{e} = [1, 0]$.

したがって文字 $\mathfrak{n}$ と $\mathfrak{e}$ は特定の複素数のために留保されたままである。

## § 2. 加法

**定義 60:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
```

であるとき、

```math
\mathfrak{x} + \mathfrak{y} = [\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2].
```

とする。($+$ は「プラス」と読む。)$\mathfrak{x} + \mathfrak{y}$ を $\mathfrak{x}$ と $\mathfrak{y}$ の和、または $\mathfrak{x}$ に $\mathfrak{y}$ を加える加法によって得られる(複素)数という。

**定理 209**(加法の交換法則):

```math
\mathfrak{x} + \mathfrak{y} = \mathfrak{y} + \mathfrak{x}.
```

**証明:** $[\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2] = [\mathrm{H}_1 + \Xi_1, \mathrm{H}_2 + \Xi_2]$.

**定理 210:** $\mathfrak{x} + \mathfrak{n} = \mathfrak{x}$.

**証明:** $[\Xi_1, \Xi_2] + [0, 0] = [\Xi_1 + 0, \Xi_2 + 0] = [\Xi_1, \Xi_2]$.

**定理 211**(加法の結合法則):

```math
(\mathfrak{x} + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + (\mathfrak{y} + \mathfrak{z}).
```

**証明:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2], \quad \mathfrak{z} = [\mathrm{Z}_1, \mathrm{Z}_2],
```

であるとき、定理 186 により

```math
\begin{aligned}
(\mathfrak{x} + \mathfrak{y}) + \mathfrak{z} &= [\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2] + [\mathrm{Z}_1, \mathrm{Z}_2] = [(\Xi_1 + \mathrm{H}_1) + \mathrm{Z}_1, (\Xi_2 + \mathrm{H}_2) + \mathrm{Z}_2] \\
&= [\Xi_1 + (\mathrm{H}_1 + \mathrm{Z}_1), \Xi_2 + (\mathrm{H}_2 + \mathrm{Z}_2)] = [\Xi_1, \Xi_2] + [\mathrm{H}_1 + \mathrm{Z}_1, \mathrm{H}_2 + \mathrm{Z}_2] = \mathfrak{x} + (\mathfrak{y} + \mathfrak{z}).
\end{aligned}
```

である。

**定理 212:** $\mathfrak{x}, \mathfrak{y}$ が与えられたとき、

```math
\mathfrak{y} + \mathfrak{u} = \mathfrak{x}
```

はちょうど一つの解 $\mathfrak{u}$ をもつ。すなわち、

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
```

のとき

```math
\mathfrak{u} = [\Xi_1 - \mathrm{H}_1, \Xi_2 - \mathrm{H}_2].
```

である。

**証明:** 任意の

```math
\mathfrak{u} = [\Upsilon_1, \Upsilon_2]
```

に対して

であり、要求されるのはちょうど

```math
\mathrm{H}_1 + \Upsilon_1 = \Xi_1, \quad \mathrm{H}_2 + \Upsilon_2 = \Xi_2
```

であるから、定理 187 がすべてを証明する。

**定義 61:** 定理 212 の $\mathfrak{u}$ を $\mathfrak{x} - \mathfrak{y}$ と書く($-$ は「マイナス」と読む)。$\mathfrak{x} - \mathfrak{y}$ は $\mathfrak{x}$ 引く $\mathfrak{y}$ の差、または $\mathfrak{x}$ から $\mathfrak{y}$ を引く減法によって得られる数ともいう。

**定理 213:**

```math
\mathfrak{x} - \mathfrak{y} = \mathfrak{n}
```

であるのは、

```math
\mathfrak{x} = \mathfrak{y}.
```

のとき、またそのときに限る。

**証明:**

```math
\Xi_1 - \mathrm{H}_1 = \Xi_2 - \mathrm{H}_2 = 0
```

であるのは、

```math
\Xi_1 = \mathrm{H}_1, \quad \Xi_2 = \mathrm{H}_2.
```

のとき、またそのときに限る。

**定義 62:** $-\mathfrak{x} = \mathfrak{n} - \mathfrak{x}$.

(左の $-$ は「マイナス」と読む。)

**定理 214:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2]
```

に対して

```math
-\mathfrak{x} = [-\Xi_1, -\Xi_2].
```

である。

**証明:** $-[\Xi_1, \Xi_2] = [0, 0] - [\Xi_1, \Xi_2] = [0 - \Xi_1, 0 - \Xi_2]$.

**定理 215:** $-(-\mathfrak{x}) = \mathfrak{x}$.

**証明:** 定理 177 により

**定理 216:** $\mathfrak{x} + (-\mathfrak{x}) = \mathfrak{n}$.

**証明:** 定理 179 により

```math
\Xi_1 + (-\Xi_1) = 0, \quad \Xi_2 + (-\Xi_2) = 0.
```

である。

**定理 217:** $-(\mathfrak{x} + \mathfrak{y}) = -\mathfrak{x} + (-\mathfrak{y})$.

**証明:** 定理 180 により、

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
```

とおくと、

```math
= [-\Xi_1, -\Xi_2] + [-\mathrm{H}_1, -\mathrm{H}_2] = -\mathfrak{x} + (-\mathfrak{y}).
```

である。

**定理 218:** $\mathfrak{x} - \mathfrak{y} = \mathfrak{x} + (-\mathfrak{y})$.

**証明:** $[\Xi_1 - \mathrm{H}_1, \Xi_2 - \mathrm{H}_2] = [\Xi_1, \Xi_2] + [-\mathrm{H}_1, -\mathrm{H}_2]$.

**定理 219:** $-(\mathfrak{x} - \mathfrak{y}) = \mathfrak{y} - \mathfrak{x}$.

**証明:**

```math
-(\mathfrak{x} - \mathfrak{y}) = -(\mathfrak{x} + (-\mathfrak{y})) = -\mathfrak{x} + (-(-\mathfrak{y})) = -\mathfrak{x} + \mathfrak{y} = \mathfrak{y} + (-\mathfrak{x}) = \mathfrak{y} - \mathfrak{x}.
```

## § 3. 乗法

**定義 63:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
```

であるとき、

```math
\mathfrak{x} \cdot \mathfrak{y} = [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1].
```

とする。($\cdot$ は「掛ける」と読む。ただし、この点はたいてい書かない。)$\mathfrak{x} \cdot \mathfrak{y}$ を $\mathfrak{x}$ と $\mathfrak{y}$ の積、または $\mathfrak{x}$ に $\mathfrak{y}$ を掛ける乗法によって得られる数という。

**定理 220**(乗法の交換法則):

```math
\mathfrak{x}\mathfrak{y} = \mathfrak{y}\mathfrak{x}.
```

**証明:**

```math
\begin{aligned}
[\Xi_1, \Xi_2][\mathrm{H}_1, \mathrm{H}_2] &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1] \\
&= [\mathrm{H}_1\Xi_1 - \mathrm{H}_2\Xi_2, \mathrm{H}_1\Xi_2 + \mathrm{H}_2\Xi_1] = [\mathrm{H}_1, \mathrm{H}_2][\Xi_1, \Xi_2].
\end{aligned}
```

**定理 221:**

```math
\mathfrak{x}\mathfrak{y} = \mathfrak{n}
```

であるのは、二つの数 $\mathfrak{x}, \mathfrak{y}$ の少なくとも一方が $\mathfrak{n}$ に等しいとき、またそのときに限る。

**証明:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2].
```

とする。

1)

```math
\mathfrak{x} = \mathfrak{n}
```

から

```math
\Xi_1 = \Xi_2 = 0,
```

```math
\mathfrak{x}\mathfrak{y} = [0 \cdot \mathrm{H}_1 - 0 \cdot \mathrm{H}_2, 0 \cdot \mathrm{H}_2 + 0 \cdot \mathrm{H}_1] = [0, 0] = \mathfrak{n}.
```

が従う。

2)

```math
\mathfrak{y} = \mathfrak{n}
```

から、定理 220 と 1) により

```math
\mathfrak{x}\mathfrak{y} = \mathfrak{y}\mathfrak{x} = \mathfrak{n}\mathfrak{x} = \mathfrak{n}.
```

が従う。

3)

```math
\mathfrak{x}\mathfrak{y} = \mathfrak{n}
```

から

```math
\mathfrak{x} = \mathfrak{n} \text{ または } \mathfrak{y} = \mathfrak{n}
```

であることを導かなければならない。そこで

```math
\mathfrak{y} \neq \mathfrak{n},
```

すなわち

```math
\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2 > 0,
```

と仮定してよく、

```math
\mathfrak{x} = \mathfrak{n},
```

すなわち

```math
\Xi_1 = \Xi_2 = 0
```

を証明すればよい。

仮定により

```math
\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2 = 0 = \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1,
```

であるから、

```math
\begin{aligned}
0 &= (\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{H}_1 + (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{H}_2 \\
&= ((\Xi_1\mathrm{H}_1)\mathrm{H}_1 - (\Xi_2\mathrm{H}_2)\mathrm{H}_1) + ((\Xi_1\mathrm{H}_2)\mathrm{H}_2 + (\Xi_2\mathrm{H}_1)\mathrm{H}_2) \\
&= (\Xi_1(\mathrm{H}_1\mathrm{H}_1) - \Xi_2(\mathrm{H}_2\mathrm{H}_1)) + (\Xi_1(\mathrm{H}_2\mathrm{H}_2) + \Xi_2(\mathrm{H}_1\mathrm{H}_2)) \\
&= ((\Xi_1(\mathrm{H}_1\mathrm{H}_1) - \Xi_2(\mathrm{H}_2\mathrm{H}_1)) + \Xi_2(\mathrm{H}_1\mathrm{H}_2)) + \Xi_1(\mathrm{H}_2\mathrm{H}_2) \\
&= \Xi_1(\mathrm{H}_1\mathrm{H}_1) + \Xi_1(\mathrm{H}_2\mathrm{H}_2) = \Xi_1(\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2),
\end{aligned}
```

したがって

```math
\Xi_1 = 0,
```

```math
\Xi_2\mathrm{H}_2 = 0 = \Xi_2\mathrm{H}_1.
```

である。$\mathrm{H}_1$ と $\mathrm{H}_2$ は両方とも $0$ ではないから、したがって

```math
\Xi_2 = 0.
```

である。

**定理 222:** $\mathfrak{x}\mathfrak{e} = \mathfrak{x}$.

**証明:** $[\Xi_1, \Xi_2][1, 0] = [\Xi_1 \cdot 1 - \Xi_2 \cdot 0, \Xi_1 \cdot 0 + \Xi_2 \cdot 1] = [\Xi_1, \Xi_2]$.

**定理 223:** $\mathfrak{x}(-\mathfrak{e}) = -\mathfrak{x}$.

**証明:**

```math
[\Xi_1, \Xi_2][-1, 0] = [\Xi_1(-1) - \Xi_2 \cdot 0, \Xi_1 \cdot 0 + \Xi_2(-1)] = [-\Xi_1, -\Xi_2].
```

**定理 224:** $(-\mathfrak{x})\mathfrak{y} = \mathfrak{x}(-\mathfrak{y}) = -(\mathfrak{x}\mathfrak{y})$.

**証明:** 1)

```math
\begin{aligned}
[-\Xi_1, -\Xi_2][\mathrm{H}_1, \mathrm{H}_2] &= [(-\Xi_1)\mathrm{H}_1 - (-\Xi_2)\mathrm{H}_2, (-\Xi_1)\mathrm{H}_2 + (-\Xi_2)\mathrm{H}_1] \\
&= [-(\Xi_1\mathrm{H}_1) + \Xi_2\mathrm{H}_2, -(\Xi_1\mathrm{H}_2) - \Xi_2\mathrm{H}_1] \\
&= [-(\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2), -(\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)] \\
&= -([\Xi_1, \Xi_2][\mathrm{H}_1, \mathrm{H}_2]),
\end{aligned}
```

```math
(-\mathfrak{x})\mathfrak{y} = -(\mathfrak{x}\mathfrak{y}).
```

2) 1) により

```math
\mathfrak{x}(-\mathfrak{y}) = (-\mathfrak{y})\mathfrak{x} = -(\mathfrak{y}\mathfrak{x}) = -(\mathfrak{x}\mathfrak{y}).
```

である。

**定理 225:** $(-\mathfrak{x})(-\mathfrak{y}) = \mathfrak{x}\mathfrak{y}$.

**証明:** 定理 224 により

```math
(-\mathfrak{x})(-\mathfrak{y}) = \mathfrak{x}(-(-\mathfrak{y})) = \mathfrak{x}\mathfrak{y}.
```

である。

**定理 226**(乗法の結合法則):

```math
(\mathfrak{x}\mathfrak{y})\mathfrak{z} = \mathfrak{x}(\mathfrak{y}\mathfrak{z}).
```

**証明:** この証明では、見やすさのため例外的に略記として

```math
(\Xi + \mathrm{H}) + \mathrm{Z} = \Xi + \mathrm{H} + \mathrm{Z},
```

```math
(\Xi\mathrm{H})\mathrm{Z} = \Xi\mathrm{H}\mathrm{Z}
```

とおく。したがって

```math
\Xi + (\mathrm{H} + \mathrm{Z}) = \Xi + \mathrm{H} + \mathrm{Z},
```

```math
\Xi(\mathrm{H}\mathrm{Z}) = \Xi\mathrm{H}\mathrm{Z}
```

でもある。

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2], \quad \mathfrak{z} = [\mathrm{Z}_1, \mathrm{Z}_2]
```

とおく。このとき

```math
\begin{aligned}
(\mathfrak{x}\mathfrak{y})\mathfrak{z} &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1][\mathrm{Z}_1, \mathrm{Z}_2] \\
&= [(\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{Z}_1 - (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{Z}_2, (\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{Z}_2 + (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{Z}_1] \\
&= [(\Xi_1\mathrm{H}_1\mathrm{Z}_1 - \Xi_2\mathrm{H}_2\mathrm{Z}_1) - (\Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2), (\Xi_1\mathrm{H}_1\mathrm{Z}_2 - \Xi_2\mathrm{H}_2\mathrm{Z}_2) + (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1)] \\
&= [(\Xi_1\mathrm{H}_1\mathrm{Z}_1 + (-(\Xi_2\mathrm{H}_2\mathrm{Z}_1))) + (-(\Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2)), (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1) + (\Xi_1\mathrm{H}_1\mathrm{Z}_2 + (-(\Xi_2\mathrm{H}_2\mathrm{Z}_2)))] \\
&= [\Xi_1\mathrm{H}_1\mathrm{Z}_1 - (\Xi_2\mathrm{H}_2\mathrm{Z}_1 + \Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2), (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1 + \Xi_1\mathrm{H}_1\mathrm{Z}_2) - \Xi_2\mathrm{H}_2\mathrm{Z}_2].
\end{aligned}
```

である。

```math
\mathfrak{x}(\mathfrak{y}\mathfrak{z}) = (\mathfrak{y}\mathfrak{z})\mathfrak{x}
```

であるから、文字の入れ替え($\Xi$ の代わりに $\mathrm{H}$、$\mathrm{H}$ の代わりに $\mathrm{Z}$、$\mathrm{Z}$ の代わりに $\Xi$)によって

```math
\mathfrak{x}(\mathfrak{y}\mathfrak{z}) = [\mathrm{H}_1\mathrm{Z}_1\Xi_1 - (\mathrm{H}_2\mathrm{Z}_2\Xi_1 + \mathrm{H}_1\mathrm{Z}_2\Xi_2 + \mathrm{H}_2\mathrm{Z}_1\Xi_2), (\mathrm{H}_1\mathrm{Z}_2\Xi_1 + \mathrm{H}_2\mathrm{Z}_1\Xi_1 + \mathrm{H}_1\mathrm{Z}_1\Xi_2) - \mathrm{H}_2\mathrm{Z}_2\Xi_2].
```

が得られる。

```math
\Xi\mathrm{H}\mathrm{Z} = \Xi(\mathrm{H}\mathrm{Z}) = (\mathrm{H}\mathrm{Z})\Xi = \mathrm{H}\mathrm{Z}\Xi,
```

```math
\Xi + \mathrm{H} + \mathrm{Z} = \Xi + (\mathrm{H} + \mathrm{Z}) = (\mathrm{H} + \mathrm{Z}) + \Xi = \mathrm{H} + \mathrm{Z} + \Xi
```

であるから、計算し終えた両式を見比べて

```math
(\mathfrak{x}\mathfrak{y})\mathfrak{z} = \mathfrak{x}(\mathfrak{y}\mathfrak{z}).
```

がわかる。

**定理 227**(分配法則):

```math
\mathfrak{x}(\mathfrak{y} + \mathfrak{z}) = \mathfrak{x}\mathfrak{y} + \mathfrak{x}\mathfrak{z}.
```

**証明:**

```math
\begin{aligned}
[\Xi_1, \Xi_2]([\mathrm{H}_1, \mathrm{H}_2] + [\mathrm{Z}_1, \mathrm{Z}_2]) &= [\Xi_1, \Xi_2][\mathrm{H}_1 + \mathrm{Z}_1, \mathrm{H}_2 + \mathrm{Z}_2] \\
&= [\Xi_1(\mathrm{H}_1 + \mathrm{Z}_1) - \Xi_2(\mathrm{H}_2 + \mathrm{Z}_2), \Xi_1(\mathrm{H}_2 + \mathrm{Z}_2) + \Xi_2(\mathrm{H}_1 + \mathrm{Z}_1)] \\
&= [(\Xi_1\mathrm{H}_1 + \Xi_1\mathrm{Z}_1) + (-(\Xi_2\mathrm{H}_2) + (-(\Xi_2\mathrm{Z}_2))), (\Xi_1\mathrm{H}_2 + \Xi_1\mathrm{Z}_2) + (\Xi_2\mathrm{H}_1 + \Xi_2\mathrm{Z}_1)] \\
&= [(\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2) + (\Xi_1\mathrm{Z}_1 - \Xi_2\mathrm{Z}_2), (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1) + (\Xi_1\mathrm{Z}_2 + \Xi_2\mathrm{Z}_1)] \\
&= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1] + [\Xi_1\mathrm{Z}_1 - \Xi_2\mathrm{Z}_2, \Xi_1\mathrm{Z}_2 + \Xi_2\mathrm{Z}_1] \\
&= [\Xi_1, \Xi_2][\mathrm{H}_1, \mathrm{H}_2] + [\Xi_1, \Xi_2][\mathrm{Z}_1, \mathrm{Z}_2].
\end{aligned}
```

**定理 228:** $\mathfrak{x}(\mathfrak{y} - \mathfrak{z}) = \mathfrak{x}\mathfrak{y} - \mathfrak{x}\mathfrak{z}$.

**証明:**

```math
\mathfrak{x}(\mathfrak{y} - \mathfrak{z}) = \mathfrak{x}(\mathfrak{y} + (-\mathfrak{z})) = \mathfrak{x}\mathfrak{y} + \mathfrak{x}(-\mathfrak{z}) = \mathfrak{x}\mathfrak{y} + (-(\mathfrak{x}\mathfrak{z})) = \mathfrak{x}\mathfrak{y} - \mathfrak{x}\mathfrak{z}.
```

**定理 229:** 方程式

```math
\mathfrak{y}\mathfrak{u} = \mathfrak{x},
```

(ここで $\mathfrak{x}, \mathfrak{y}$ は与えられており、

```math
\mathfrak{y} \neq \mathfrak{n}
```

である)は、ちょうど一つの解 $\mathfrak{u}$ をもつ。

**証明:** 1) 解は高々一つである。なぜなら、

```math
\mathfrak{y}\mathfrak{u}_1 = \mathfrak{x} = \mathfrak{y}\mathfrak{u}_2
```

から

```math
\mathfrak{n} = \mathfrak{y}\mathfrak{u}_1 - \mathfrak{y}\mathfrak{u}_2 = \mathfrak{y}(\mathfrak{u}_1 - \mathfrak{u}_2),
```

が従い、したがって定理 221 により

```math
\mathfrak{n} = \mathfrak{u}_1 - \mathfrak{u}_2,
```

```math
\mathfrak{u}_1 = \mathfrak{u}_2.
```

となるからである。

2)

```math
\mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
```

とすると、

```math
\mathrm{H} = \mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2 > 0,
```

であり、

```math
\mathfrak{u} = \left[\frac{\mathrm{H}_1}{\mathrm{H}}, -\frac{\mathrm{H}_2}{\mathrm{H}}\right]\mathfrak{x}
```

は、

```math
\mathfrak{y}\mathfrak{u} = \left([\mathrm{H}_1, \mathrm{H}_2]\left[\frac{\mathrm{H}_1}{\mathrm{H}}, -\frac{\mathrm{H}_2}{\mathrm{H}}\right]\right)\mathfrak{x} = \left[\frac{\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2}{\mathrm{H}}, \frac{-(\mathrm{H}_1\mathrm{H}_2) + \mathrm{H}_2\mathrm{H}_1}{\mathrm{H}}\right]\mathfrak{x} = [1, 0]\mathfrak{x} = \mathfrak{e}\mathfrak{x} = \mathfrak{x}.
```

であるから一つの解である。

**定義 64:** 定理 229 の $\mathfrak{u}$ を $\frac{\mathfrak{x}}{\mathfrak{y}}$ と書く($\mathfrak{x}$ 割る $\mathfrak{y}$ と読む)。$\frac{\mathfrak{x}}{\mathfrak{y}}$ は $\mathfrak{x}$ を $\mathfrak{y}$ で割った商、または $\mathfrak{x}$ を $\mathfrak{y}$ で割る除法によって得られる数ともいう。

## § 4. 減法

**定理 230:**

```math
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
```

**証明:**

```math
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{y} + (\mathfrak{x} - \mathfrak{y}) = \mathfrak{x}.
```

**定理 231:**

```math
(\mathfrak{x} + \mathfrak{y}) - \mathfrak{y} = \mathfrak{x}.
```

**証明:**

```math
\mathfrak{y} + \mathfrak{x} = \mathfrak{x} + \mathfrak{y}.
```

**定理 232:**

```math
\mathfrak{x} - (\mathfrak{x} - \mathfrak{y}) = \mathfrak{y}.
```

**証明:**

```math
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
```

**定理 233:** $(\mathfrak{x} - \mathfrak{y}) - \mathfrak{z} = \mathfrak{x} - (\mathfrak{y} + \mathfrak{z})$.

**証明:**

```math
\begin{aligned}
(\mathfrak{y} + \mathfrak{z}) + ((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) &= ((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) + (\mathfrak{z} + \mathfrak{y}) \\
&= (((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) + \mathfrak{z}) + \mathfrak{y} = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
\end{aligned}
```

**定理 234:** $(\mathfrak{x} + \mathfrak{y}) - \mathfrak{z} = \mathfrak{x} + (\mathfrak{y} - \mathfrak{z})$.

**証明:**

```math
(\mathfrak{x} + (\mathfrak{y} - \mathfrak{z})) + \mathfrak{z} = \mathfrak{x} + ((\mathfrak{y} - \mathfrak{z}) + \mathfrak{z}) = \mathfrak{x} + \mathfrak{y}.
```

**定理 235:** $(\mathfrak{x} - \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} - (\mathfrak{y} - \mathfrak{z})$.

**証明:**

```math
((\mathfrak{x} - \mathfrak{y}) + \mathfrak{z}) + (\mathfrak{y} - \mathfrak{z}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} + (\mathfrak{y} - \mathfrak{z})) = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
```

**定理 236:** $(\mathfrak{x} + \mathfrak{z}) - (\mathfrak{y} + \mathfrak{z}) = \mathfrak{x} - \mathfrak{y}$.

**証明:**

```math
(\mathfrak{x} - \mathfrak{y}) + (\mathfrak{y} + \mathfrak{z}) = ((\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + \mathfrak{z}.
```

**定理 237:** $(\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} - \mathfrak{u}) = (\mathfrak{x} + \mathfrak{z}) - (\mathfrak{y} + \mathfrak{u})$.

**証明:**

```math
\begin{aligned}
((\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} - \mathfrak{u})) + (\mathfrak{y} + \mathfrak{u}) &= (\mathfrak{x} - \mathfrak{y}) + ((\mathfrak{z} - \mathfrak{u}) + (\mathfrak{u} + \mathfrak{y})) \\
&= (\mathfrak{x} - \mathfrak{y}) + (((\mathfrak{z} - \mathfrak{u}) + \mathfrak{u}) + \mathfrak{y}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} + \mathfrak{y}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{y} + \mathfrak{z}) \\
&= ((\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + \mathfrak{z}.
\end{aligned}
```

**定理 238:** $(\mathfrak{x} - \mathfrak{y}) - (\mathfrak{z} - \mathfrak{u}) = (\mathfrak{x} + \mathfrak{u}) - (\mathfrak{y} + \mathfrak{z})$.

**証明:** 定理 237 と定理 236 により

```math
\begin{aligned}
((\mathfrak{x} + \mathfrak{u}) - (\mathfrak{y} + \mathfrak{z})) + (\mathfrak{z} - \mathfrak{u}) &= ((\mathfrak{x} + \mathfrak{u}) + \mathfrak{z}) - ((\mathfrak{y} + \mathfrak{z}) + \mathfrak{u}) \\
&= (\mathfrak{x} + (\mathfrak{u} + \mathfrak{z})) - (\mathfrak{y} + (\mathfrak{z} + \mathfrak{u})) = \mathfrak{x} - \mathfrak{y}.
\end{aligned}
```

**定理 239:**

```math
\mathfrak{x} - \mathfrak{y} = \mathfrak{z} - \mathfrak{u}
```

であるのは、

```math
\mathfrak{x} + \mathfrak{u} = \mathfrak{y} + \mathfrak{z}.
```

のとき、またそのときに限る。

**証明:** 定理 213 と定理 238。

## § 5. 除法

**定理 240:**

```math
\mathfrak{y} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
```

**証明:**

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{y}\,\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{x}.
```

**定理 241:**

```math
\mathfrak{y} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}\mathfrak{y}}{\mathfrak{y}} = \mathfrak{x}.
```

**証明:**

```math
\mathfrak{y}\mathfrak{x} = \mathfrak{x}\mathfrak{y}.
```

**定理 242:**

```math
\mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}}{\frac{\mathfrak{x}}{\mathfrak{y}}} = \mathfrak{y}.
```

**証明:**

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
```

**定理 243:**

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
```

ならば

```math
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}\mathfrak{z}}.
```

**証明:**

```math
(\mathfrak{y}\mathfrak{z})\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}} = \frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}}(\mathfrak{z}\mathfrak{y}) = \left(\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}}\,\mathfrak{z}\right)\mathfrak{y} = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
```

**定理 244:**

```math
\mathfrak{z} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}\mathfrak{y}}{\mathfrak{z}} = \mathfrak{x}\,\frac{\mathfrak{y}}{\mathfrak{z}}.
```

**証明:**

```math
\left(\mathfrak{x}\,\frac{\mathfrak{y}}{\mathfrak{z}}\right)\mathfrak{z} = \mathfrak{x}\left(\frac{\mathfrak{y}}{\mathfrak{z}}\,\mathfrak{z}\right) = \mathfrak{x}\mathfrak{y}.
```

**定理 245:**

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{z} = \frac{\mathfrak{x}}{\frac{\mathfrak{y}}{\mathfrak{z}}}.
```

**証明:**

```math
\left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{z}\right)\frac{\mathfrak{y}}{\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}}\left(\mathfrak{z}\,\frac{\mathfrak{y}}{\mathfrak{z}}\right) = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
```

**定理 246:**

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}\mathfrak{z}}{\mathfrak{y}\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}}.
```

**証明:**

```math
\frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{y}\mathfrak{z}) = \left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}\right)\mathfrak{z} = \mathfrak{x}\mathfrak{z}.
```

**定理 247:**

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}}{\mathfrak{y}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

**証明:**

```math
\begin{aligned}
\left(\frac{\mathfrak{x}}{\mathfrak{y}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}}\right)(\mathfrak{y}\mathfrak{u}) &= \frac{\mathfrak{x}}{\mathfrak{y}}\left(\frac{\mathfrak{z}}{\mathfrak{u}}(\mathfrak{u}\mathfrak{y})\right) = \frac{\mathfrak{x}}{\mathfrak{y}}\left(\left(\frac{\mathfrak{z}}{\mathfrak{u}}\,\mathfrak{u}\right)\mathfrak{y}\right) \\
&= \frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{z}\mathfrak{y}) = \frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{y}\mathfrak{z}) = \left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}\right)\mathfrak{z} = \mathfrak{x}\mathfrak{z}.
\end{aligned}
```

**定理 248:**

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

ならば

```math
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\frac{\mathfrak{z}}{\mathfrak{u}}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}}.
```

**証明:** 定理 247 と定理 246 により

```math
\frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{(\mathfrak{x}\mathfrak{u})\mathfrak{z}}{(\mathfrak{y}\mathfrak{z})\mathfrak{u}} = \frac{\mathfrak{x}(\mathfrak{u}\mathfrak{z})}{\mathfrak{y}(\mathfrak{z}\mathfrak{u})} = \frac{\mathfrak{x}}{\mathfrak{y}}.
```

**定理 249:**

```math
\mathfrak{x} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{n}}{\mathfrak{x}} = \mathfrak{n}.
```

**証明:**

```math
\mathfrak{x}\mathfrak{n} = \mathfrak{n}.
```

**定理 250:**

```math
\mathfrak{x} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}}{\mathfrak{x}} = \mathfrak{e}.
```

**証明:**

```math
\mathfrak{x}\mathfrak{e} = \mathfrak{x}.
```

**定理 251:**

```math
\mathfrak{y} \neq \mathfrak{n},
```

ならば、

```math
\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{e}
```

であるのは、

```math
\mathfrak{x} = \mathfrak{y}.
```

のとき、またそのときに限る。

**証明:** 1)

```math
\mathfrak{x} = \mathfrak{y},
```

ならば、定理 250 により

```math
\frac{\mathfrak{x}}{\mathfrak{y}} = \frac{\mathfrak{y}}{\mathfrak{y}} = \mathfrak{e}.
```

2)

```math
\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{e},
```

ならば、定理 222 により

```math
\mathfrak{x} = \mathfrak{y}\mathfrak{e} = \mathfrak{y}.
```

**定理 252:**

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

ならば、

```math
\frac{\mathfrak{x}}{\mathfrak{y}} = \frac{\mathfrak{z}}{\mathfrak{u}}
```

であるのは、

```math
\mathfrak{x}\mathfrak{u} = \mathfrak{y}\mathfrak{z}.
```

のとき、またそのときに限る。

**証明:**

```math
\mathfrak{z} = \mathfrak{n}
```

の場合には主張は明らかである。

そうでない場合には、定理 248 により

```math
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\frac{\mathfrak{z}}{\mathfrak{u}}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}},
```

であるから、定理 251 が主張を与える。

**定理 253:**

```math
\mathfrak{y} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{y}} = \frac{\mathfrak{x} + \mathfrak{z}}{\mathfrak{y}}.
```

**証明:**

```math
\mathfrak{y}\left(\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{y}}\right) = \mathfrak{y} \cdot \frac{\mathfrak{x}}{\mathfrak{y}} + \mathfrak{y} \cdot \frac{\mathfrak{z}}{\mathfrak{y}} = \mathfrak{x} + \mathfrak{z}.
```

**定理 254:**

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} + \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

**証明:** 定理 246 と定理 253 により

```math
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{u}} + \frac{\mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} + \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

**定理 255:**

```math
\mathfrak{y} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{y}} = \frac{\mathfrak{x} - \mathfrak{z}}{\mathfrak{y}}.
```

**証明:**

```math
\mathfrak{y}\left(\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{y}}\right) = \mathfrak{y} \cdot \frac{\mathfrak{x}}{\mathfrak{y}} - \mathfrak{y} \cdot \frac{\mathfrak{z}}{\mathfrak{y}} = \mathfrak{x} - \mathfrak{z}.
```

**定理 256:**

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

ならば

```math
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} - \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

**証明:** 定理 246 と定理 255 により

```math
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{u}} - \frac{\mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} - \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

## § 6. 共役数

**定義 65:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2]
```

に対して

```math
\overline{\mathfrak{x}} = [\Xi_1, -\Xi_2]
```

を共役複素数という。

**定理 257:** $\overline{\overline{\mathfrak{x}}} = \mathfrak{x}$.

**証明:** $[\Xi_1, -(-\Xi_2)] = [\Xi_1, \Xi_2]$.

**定理 258:**

```math
\overline{\mathfrak{x}} = \mathfrak{n}
```

となるのは、

```math
\mathfrak{x} = \mathfrak{n}.
```

のとき、またそのときに限る。

**証明:**

```math
\Xi_1 = 0, \quad -\Xi_2 = 0
```

は

```math
\Xi_1 = 0, \quad \Xi_2 = 0.
```

と同じことである。

**定理 259:**

```math
\overline{\mathfrak{x}} = \mathfrak{x}
```

となるのは、$\mathfrak{x}$ が

```math
\mathfrak{x} = [\Xi, 0]
```

の形を持つとき、またそのときに限る。

**証明:**

```math
\Xi_1 = \Xi_1, \quad -\Xi_2 = \Xi_2
```

となるのは、

```math
\Xi_2 = 0.
```

のとき、またそのときに限る。

**定理 260:** $\overline{\mathfrak{x} + \mathfrak{y}} = \overline{\mathfrak{x}} + \overline{\mathfrak{y}}$.

**証明:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
```

に対して

```math
\begin{aligned}
\overline{\mathfrak{x} + \mathfrak{y}} &= [\Xi_1 + \mathrm{H}_1, -(\Xi_2 + \mathrm{H}_2)] = [\Xi_1 + \mathrm{H}_1, -\Xi_2 + (-\mathrm{H}_2)] \\
&= [\Xi_1, -\Xi_2] + [\mathrm{H}_1, -\mathrm{H}_2] = \overline{\mathfrak{x}} + \overline{\mathfrak{y}}.
\end{aligned}
```

である。

**定理 261:** $\overline{\mathfrak{x}\mathfrak{y}} = \overline{\mathfrak{x}}\,\overline{\mathfrak{y}}$.

**証明:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
```

に対して

```math
\begin{aligned}
\overline{\mathfrak{x}\mathfrak{y}} &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, -(\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)] \\
&= [\Xi_1\mathrm{H}_1 - (-\Xi_2)(-\mathrm{H}_2), \Xi_1(-\mathrm{H}_2) + (-\Xi_2)\mathrm{H}_1] \\
&= [\Xi_1, -\Xi_2][\mathrm{H}_1, -\mathrm{H}_2] = \overline{\mathfrak{x}}\,\overline{\mathfrak{y}}.
\end{aligned}
```

である。

**定理 262:** $\overline{\mathfrak{x} - \mathfrak{y}} = \overline{\mathfrak{x}} - \overline{\mathfrak{y}}$.

**証明:**

```math
\mathfrak{x} = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}
```

により、定理 260 から

```math
\overline{\mathfrak{x}} = \overline{\mathfrak{x} - \mathfrak{y}} + \overline{\mathfrak{y}},
```

```math
\overline{\mathfrak{x} - \mathfrak{y}} = \overline{\mathfrak{x}} - \overline{\mathfrak{y}}.
```

である。

**定理 263:**

```math
\mathfrak{y} \neq \mathfrak{n}
```

に対して

```math
\overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)} = \frac{\overline{\mathfrak{x}}}{\overline{\mathfrak{y}}}.
```

である。

**証明:**

```math
\mathfrak{x} = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}
```

により、定理 261 から

```math
\overline{\mathfrak{x}} = \overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)}\,\overline{\mathfrak{y}};
```

であり、定理 258 から

```math
\overline{\mathfrak{y}} \neq \mathfrak{n},
```

であるから、

```math
\overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)} = \frac{\overline{\mathfrak{x}}}{\overline{\mathfrak{y}}}.
```

## § 7. 絶対値

**定義 66:** $\sqrt{\zeta}$ は、定理 161 により一意に存在する

```math
\xi\xi = \zeta.
```

の(正の)解 $\xi$ を表すものとする。

**定義 67:** $\sqrt{0} = 0$.

**定義 68:**

```math
|[\Xi_1, \Xi_2]| = \sqrt{\Xi_1\Xi_1 + \Xi_2\Xi_2}.
```

($|\ |$ は「絶対値」と読む。)

**定理 264:**

```math
|\mathfrak{x}| \begin{cases} > 0 & \text{für } \mathfrak{x} \neq \mathfrak{n}, \\ = 0 & \text{für } \mathfrak{x} = \mathfrak{n}. \end{cases}
```

**証明:** 定義 68、66 および 67。

**定理 265:**

```math
|[\Xi_1, \Xi_2]| \geqq |\Xi_1|,
```

```math
|[\Xi_1, \Xi_2]| \geqq |\Xi_2|.
```

**証明:**

```math
|[\Xi_1, \Xi_2]|\,|[\Xi_1, \Xi_2]| = \Xi_1\Xi_1 + \Xi_2\Xi_2 \begin{cases} \geqq \Xi_1\Xi_1 = |\Xi_1||\Xi_1|, \\ \geqq \Xi_2\Xi_2 = |\Xi_2||\Xi_2|. \end{cases}
```

```math
\Xi\Xi \geqq \mathrm{H}\mathrm{H}, \quad \Xi \geqq 0, \quad \mathrm{H} \geqq 0
```

から

```math
\Xi \geqq \mathrm{H},
```

が従う。なぜなら、さもなければ

```math
0 \leqq \Xi < \mathrm{H},
```

```math
\Xi\Xi < \mathrm{H}\mathrm{H}
```

となるからである。これで定理 265 は証明された。

**定理 266:**

```math
[\Xi, 0][\Xi, 0] = [\mathrm{H}, 0][\mathrm{H}, 0], \quad \Xi \geqq 0, \quad \mathrm{H} \geqq 0
```

から

```math
\Xi = \mathrm{H}.
```

が従う。

**証明:**

```math
[\mathrm{Z}, 0][\mathrm{Z}, 0] = [\mathrm{Z}\mathrm{Z} - 0 \cdot 0, \mathrm{Z} \cdot 0 + 0 \cdot \mathrm{Z}] = [\mathrm{Z}\mathrm{Z}, 0]
```

により、仮定から

```math
[\Xi\Xi, 0] = [\mathrm{H}\mathrm{H}, 0],
```

```math
\Xi\Xi = \mathrm{H}\mathrm{H}.
```

である。

```math
\Xi > 0,
```

ならば

```math
\mathrm{H}\mathrm{H} = \Xi\Xi > 0,
```

が従い、よって定理 161 から

```math
\mathrm{H} > 0,
```

```math
\Xi = \mathrm{H}.
```

である。

```math
\Xi = 0,
```

ならば

```math
\mathrm{H}\mathrm{H} = \Xi\Xi = 0,
```

```math
\mathrm{H} = 0 = \Xi.
```

が従う。

**定理 267:** $[|\mathfrak{x}|, 0][|\mathfrak{x}|, 0] = \mathfrak{x}\overline{\mathfrak{x}}$.

**証明:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2]
```

とおけば、

```math
\begin{aligned}
[|\mathfrak{x}|, 0][|\mathfrak{x}|, 0] &= [|\mathfrak{x}||\mathfrak{x}|, 0] = [\Xi_1\Xi_1 + \Xi_2\Xi_2, 0] \\
&= [\Xi_1\Xi_1 - \Xi_2(-\Xi_2), \Xi_1(-\Xi_2) + \Xi_2\Xi_1] = [\Xi_1, \Xi_2][\Xi_1, -\Xi_2] = \mathfrak{x}\overline{\mathfrak{x}}.
\end{aligned}
```

である。

**定理 268:** $|\mathfrak{x}\mathfrak{y}| = |\mathfrak{x}||\mathfrak{y}|$.

**証明:** 定理 267 および定理 261 から

```math
\begin{aligned}
[|\mathfrak{x}\mathfrak{y}|, 0][|\mathfrak{x}\mathfrak{y}|, 0] &= (\mathfrak{x}\mathfrak{y})\overline{\mathfrak{x}\mathfrak{y}} = (\mathfrak{x}\mathfrak{y})(\overline{\mathfrak{x}}\,\overline{\mathfrak{y}}) = (\mathfrak{x}\overline{\mathfrak{x}})(\mathfrak{y}\overline{\mathfrak{y}}) \\
&= ([|\mathfrak{x}|, 0][|\mathfrak{x}|, 0])([|\mathfrak{y}|, 0][|\mathfrak{y}|, 0]) \\
&= ([|\mathfrak{x}|, 0][|\mathfrak{y}|, 0])([|\mathfrak{x}|, 0][|\mathfrak{y}|, 0]) \\
&= [|\mathfrak{x}||\mathfrak{y}| - 0 \cdot 0, |\mathfrak{x}| \cdot 0 + 0 \cdot |\mathfrak{y}|][|\mathfrak{x}||\mathfrak{y}| - 0 \cdot 0, |\mathfrak{x}| \cdot 0 + 0 \cdot |\mathfrak{y}|] \\
&= [|\mathfrak{x}||\mathfrak{y}|, 0][|\mathfrak{x}||\mathfrak{y}|, 0],
\end{aligned}
```

であり、よって定理 266 から

```math
|\mathfrak{x}\mathfrak{y}| = |\mathfrak{x}||\mathfrak{y}|.
```

**定理 269:**

```math
\mathfrak{y} \neq \mathfrak{n},
```

ならば

```math
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| = \frac{|\mathfrak{x}|}{|\mathfrak{y}|}.
```

である。

**証明:**

```math
|\mathfrak{y}| > 0,
```

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x},
```

であるから、定理 268 により

```math
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| |\mathfrak{y}| = |\mathfrak{x}|,
```

```math
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| = \frac{|\mathfrak{x}|}{|\mathfrak{y}|}.
```

**定理 270:**

```math
\mathfrak{x} + \mathfrak{y} = \mathfrak{e}
```

から

```math
|\mathfrak{x}| + |\mathfrak{y}| \geqq 1.
```

が従う。

**証明:**

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
```

とすれば、定理 265 から

```math
|\mathfrak{x}| \geqq |\Xi_1| \geqq \Xi_1,
```

```math
|\mathfrak{y}| \geqq |\mathrm{H}_1| \geqq \mathrm{H}_1,
```

であり、よって

```math
|\mathfrak{x}| + |\mathfrak{y}| \geqq \Xi_1 + \mathrm{H}_1 = 1.
```

**定理 271:** $|\mathfrak{x} + \mathfrak{y}| \leqq |\mathfrak{x}| + |\mathfrak{y}|$.

**証明:** 1)

```math
\mathfrak{x} + \mathfrak{y} = \mathfrak{n},
```

ならば、主張の左辺は $0$ であり、したがって右辺 $\leqq$ が成り立つ。

2)

```math
\mathfrak{x} + \mathfrak{y} \neq \mathfrak{n},
```

ならば、

```math
\frac{\mathfrak{x}}{\mathfrak{x} + \mathfrak{y}} + \frac{\mathfrak{y}}{\mathfrak{x} + \mathfrak{y}} = \frac{\mathfrak{x} + \mathfrak{y}}{\mathfrak{x} + \mathfrak{y}} = \mathfrak{e},
```

により、定理 270 から

```math
\left|\frac{\mathfrak{x}}{\mathfrak{x} + \mathfrak{y}}\right| + \left|\frac{\mathfrak{y}}{\mathfrak{x} + \mathfrak{y}}\right| \geqq 1,
```

であり、よって定理 269 から

```math
\frac{|\mathfrak{x}|}{|\mathfrak{x} + \mathfrak{y}|} + \frac{|\mathfrak{y}|}{|\mathfrak{x} + \mathfrak{y}|} \geqq 1,
```

```math
|\mathfrak{x}| + |\mathfrak{y}| = |\mathfrak{x} + \mathfrak{y}|\left(\frac{|\mathfrak{x}|}{|\mathfrak{x} + \mathfrak{y}|} + \frac{|\mathfrak{y}|}{|\mathfrak{x} + \mathfrak{y}|}\right) \geqq |\mathfrak{x} + \mathfrak{y}|.
```

である。

**定理 272:** $|-\mathfrak{x}| = |\mathfrak{x}|$.

**証明:** $(-\Xi_1)(-\Xi_1) + (-\Xi_2)(-\Xi_2) = \Xi_1\Xi_1 + \Xi_2\Xi_2$.

**定理 273:** $|\mathfrak{x} - \mathfrak{y}| \geqq ||\mathfrak{x}| - |\mathfrak{y}||$.

**証明:**

```math
\mathfrak{x} = \mathfrak{y} + (\mathfrak{x} - \mathfrak{y}),
```

であるから、定理 271 により

```math
|\mathfrak{x}| \leqq |\mathfrak{y}| + |\mathfrak{x} - \mathfrak{y}|,
```

```math
|\mathfrak{x} - \mathfrak{y}| \geqq |\mathfrak{x}| - |\mathfrak{y}|.
```

である。ここで $\mathfrak{x}$ と $\mathfrak{y}$ を入れ替えれば、

```math
|\mathfrak{y} - \mathfrak{x}| \geqq |\mathfrak{y}| - |\mathfrak{x}|,
```

が従い、よって定理 272 から

```math
|\mathfrak{x} - \mathfrak{y}| = |-(\mathfrak{y} - \mathfrak{x})| = |\mathfrak{y} - \mathfrak{x}| \geqq |\mathfrak{y}| - |\mathfrak{x}| = -(|\mathfrak{x}| - |\mathfrak{y}|).
```

である。ところで、$|\mathrm{H}|$ は $\mathrm{H}$ か $-\mathrm{H}$ のいずれかであるから、

```math
\Xi \geqq \mathrm{H}, \quad \Xi \geqq -\mathrm{H}
```

から

```math
\Xi \geqq |\mathrm{H}|.
```

が従う。したがって

```math
|\mathfrak{x} - \mathfrak{y}| \geqq ||\mathfrak{x}| - |\mathfrak{y}||.
```

である。

## § 8. 和と積

**定理 274:**

```math
x < y,
```

ならば、$m \leqq x$ を $n \leqq y$ に一対一に対応させることはできない。

この § において、対応させるとは常に一対一に対応させることを意味する。

**証明:** $\mathfrak{M}$ を、すべての $y > x$ に対して主張が真であるような $x$ の集合とする。

I)

```math
1 < y,
```

ならば、$m = 1$ を $n \leqq y$ に対応させることはできない。なぜなら、$m = 1$ に $n = 1$ が対応するならば、$n = y$ に対する $m$ が残らないし、$m = 1$ がある $n > 1$ に対応させられているならば、$n = 1$ に対する $m$ が残らないからである。

したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属し、

```math
x + 1 < y.
```

であるとする。$m \leqq x + 1$ の $n \leqq y$ への対応が存在するとき、二つの場合を区別する。

α) $m = x + 1$ に $n = y$ が対応する場合。このとき $m \leqq x$ は $n \leqq y - 1$ に対応させられていることになるが、これは

```math
x < y - 1.
```

のためにあり得ない。

β) $m = x + 1$ にある $n = n_0 < y$ が対応する場合。このとき、$n = y$ に対応する数を $m = m_0$ とすると、$m_0 < x + 1$ である。いま、$m \leqq x + 1$ の $n \leqq y$ への、次のように変更した対応を考える。

```math
\begin{cases}
\text{Ist } m \neq m_0,\ m \neq x + 1, \text{ so gelte das Alte.} \\
m = m_0 \text{ entspreche } n = n_0. \\
m = x + 1 \text{ entspreche } n = y.
\end{cases}
```

このとき、先ほど α) で不可能であることが示された種類の対応が得られる。

したがって $x + 1$ は $\mathfrak{M}$ に属し、主張は証明された。

以下の定理 275 から 278 まで、および 280 から 286 までの証明は、付随する定義とともに、和についても積についても文字どおり同一のものとなるので、長い繰り返しを避けるため、これを一度だけ行い、中立的な記号 $\dotplus$ を選ぶ。これは一貫して $+$ を意味するか、または一貫して $\cdot$ を意味するものとする。さしあたり中立的な記号 $\mathop{\Large\dotplus}$ は、後に対応して二つの記号($+$ のときは $\Sigma$、$\cdot$ のときは $\Pi$)に分けられる。

この展開全体を通じて、定義されているとは、複素数として定義されていることを意味する。

**定理 275:** $x$ を固定し、$\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているとする。このとき、$n \leqq x$ に対して定義された

```math
\mathfrak{g}_x(n)
```

(より詳しく書けば

```math
\mathfrak{g}_{x,\mathfrak{f}}(n),
```

略記すれば

```math
\mathfrak{g}(n))
```

で、次の性質をもつものがちょうど一つ存在する:

```math
\begin{aligned}
\mathfrak{g}_x(1) &= \mathfrak{f}(1), \\
\mathfrak{g}_x(n + 1) &= \mathfrak{g}_x(n) \dotplus \mathfrak{f}(n + 1) \quad \text{für } n < x.
\end{aligned}
```

**証明:** 1) まず、このような $\mathfrak{g}_x(n)$ が高々一つしか存在しないことを示す。

$\mathfrak{g}(n)$ と $\mathfrak{h}(n)$ が要求された性質をもつとする。$\mathfrak{M}$ を、

```math
\mathfrak{g}(n) = \mathfrak{h}(n)
```

を満たす $n \leqq x$ と、$n > x$ とからなる集合とする。

I) $\mathfrak{g}(1) = \mathfrak{f}(1) = \mathfrak{h}(1)$;

したがって 1 は $\mathfrak{M}$ に属する。

II) $n$ が $\mathfrak{M}$ に属するとする。このとき、

```math
n < x, \quad \mathfrak{g}(n) = \mathfrak{h}(n),
```

であって、したがって

```math
\mathfrak{g}(n + 1) = \mathfrak{g}(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{h}(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{h}(n + 1),
```

となり、$n + 1$ が $\mathfrak{M}$ に属するか、あるいは

```math
n \geqq x,
```

であって、したがって

```math
n + 1 > x
```

となり、$n + 1$ がやはり $\mathfrak{M}$ に属するかのいずれかである。

ゆえに $\mathfrak{M}$ はすべての正の整数の集合である。したがって、任意の $n \leqq x$ に対して

```math
\mathfrak{g}(n) = \mathfrak{h}(n),
```

である。これが証明すべきことであった。

2) 次に、$\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているとき、各 $x$ に対して適合する $\mathfrak{g}_x(n)$ が存在することを示す。

$\mathfrak{M}$ を、これが真であるような $x$ の集合、すなわち、$\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているとき、1) によりちょうど一つの適合する $\mathfrak{g}_x(n)$ が存在するような $x$ の集合とする。

I) $x = 1$ に対しては、$\mathfrak{f}(1)$ が定義されているとき、

```math
\mathfrak{g}_x(1) = \mathfrak{f}(1)
```

が求めるものとなる($n < 1$ が不可能であるため、第二の要求は課されないからである)。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、それは $n \leqq x$ に対して定義されているから、ここにちょうど一つの付随する $\mathfrak{g}_x(n)$ が存在する。いま、

```math
\mathfrak{g}_{x+1}(n) = \begin{cases}
\mathfrak{g}_x(n) & \text{für } n \leqq x, \\
\mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1) & \text{für } n = x + 1
\end{cases}
```

が $x + 1$ において求めるものとなる。なぜなら、第一に

```math
\mathfrak{g}_{x+1}(1) = \mathfrak{g}_x(1) = \mathfrak{f}(1).
```

である。第二に、

```math
n < x
```

に対しては($n + 1 \leqq x$ のため)

```math
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_x(n + 1) = \mathfrak{g}_x(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1),
```

が成り立ち、一方

```math
n = x
```

に対しては

```math
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1)
```

である。したがって

```math
n < x + 1
```

からは、いずれにせよ

```math
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1).
```

が従う。

ゆえに $x + 1$ は $\mathfrak{M}$ に属し、$\mathfrak{M}$ はすべての正の整数を含む。

**定理 276:** $\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、付随する $\mathfrak{g}_x(n)$ と $\mathfrak{g}_{x+1}(n)$ に対して

```math
\mathfrak{g}_{x+1}(x + 1) = \mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1).
```

が成り立つ。

**証明:** これは前の証明の 2)、II) における構成のなかに現れた。

**定義 69:** $\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているならば、

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{g}_x(x) \quad (= \mathfrak{g}_{x,\mathfrak{f}}(x)).
```

とする。

$\dotplus$ が $+$ の意味をもつときは

```math
\sum_{n=1}^{x} \mathfrak{f}(n);
```

と書き、$\dotplus$ が $\cdot$ の意味をもつときは

```math
\prod_{n=1}^{x} \mathfrak{f}(n).
```

と書く。

($\Sigma$ は「和」と読み、$\Pi$ は「積」と読む。)

これらの記号においては、$n$ の代わりに、正の整数を表す他の任意の文字を用いてもよい。

**定理 277:** $\mathfrak{f}(1)$ が定義されているならば、

```math
\mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) = \mathfrak{f}(1).
```

である。

**証明:** $\mathfrak{g}_1(1) = \mathfrak{f}(1)$。

**定理 278:** $\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1).
```

である。

**証明:** 定理 276。

**定理 279:**

```math
\sum_{n=1}^{x} \mathfrak{x} = \mathfrak{x}[x, 0].
```

**証明:** $\mathfrak{x}$ を固定し、$\mathfrak{M}$ をこれが成り立つ $x$ の集合とする。

I) 定理 277 により

```math
\sum_{n=1}^{1} \mathfrak{x} = \mathfrak{x} = \mathfrak{x}\mathfrak{e} = \mathfrak{x}[1, 0].
```

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するならば、定理 278 から

```math
\sum_{n=1}^{x+1} \mathfrak{x} = \sum_{n=1}^{x} \mathfrak{x} + \mathfrak{x} = \mathfrak{x}[x, 0] + \mathfrak{x}[1, 0] = \mathfrak{x}([x, 0] + [1, 0]) = \mathfrak{x}[x + 1, 0].
```

が従う。

したがって $x + 1$ は $\mathfrak{M}$ に属する。

ゆえに主張はすべての $x$ に対して成り立つ。

**定理 280:** $\mathfrak{f}(1)$ と $\mathfrak{f}(1 + 1)$ が定義されているならば、

```math
\mathop{\Large\dotplus}\limits_{n=1}^{1+1} \mathfrak{f}(n) = \mathfrak{f}(1) \dotplus \mathfrak{f}(1 + 1).
```

である。

**証明:** 定理 278 と定理 277 により

```math
\mathop{\Large\dotplus}\limits_{n=1}^{1+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) \dotplus \mathfrak{f}(1 + 1) = \mathfrak{f}(1) \dotplus \mathfrak{f}(1 + 1).
```

である。

**定理 281:** $\mathfrak{f}(n)$ が $n \leqq x + y$ に対して定義されているならば、

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+y} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n).
```

である。

**証明:** $x$ を固定し、$\mathfrak{M}$ をこれが成り立つ $y$ の集合とする。

I) $\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、定理 278 と定理 277 により

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(x + n).
```

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $y$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ が $n \leqq x + (y + 1)$ に対して定義されているならば、定理 278($x$ の代わりに $x + y$ に適用して)により

```math
\begin{aligned}
\mathop{\Large\dotplus}\limits_{n=1}^{x+(y+1)} \mathfrak{f}(n) &= \mathop{\Large\dotplus}\limits_{n=1}^{(x+y)+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x+y} \mathfrak{f}(n) \dotplus \mathfrak{f}((x + y) + 1) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n)\right) \dotplus \mathfrak{f}(x + (y + 1)) \\
&= \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \left(\mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n) \dotplus \mathfrak{f}(x + (y + 1))\right),
\end{aligned}
```

であり、したがって定理 278($x$ の代わりに $y$、$\mathfrak{f}(n)$ の代わりに $\mathfrak{f}(x + n)$ に適用して)により

```math
= \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y+1} \mathfrak{f}(x + n).
```

である。

したがって $y + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

**定理 282:** $\mathfrak{f}(n)$ と $\mathfrak{g}(n)$ が $n \leqq x$ に対して定義されているならば、

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n).
```

である。

**証明:** $\mathfrak{M}$ をこれが成り立つ $x$ の集合とする。

I) $\mathfrak{f}(1)$ と $\mathfrak{g}(1)$ が定義されているならば、

```math
\mathop{\Large\dotplus}\limits_{n=1}^{1} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) = \mathfrak{f}(1) \dotplus \mathfrak{g}(1) = \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{g}(n).
```

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ と $\mathfrak{g}(n)$ が $n \leqq x + 1$ に対して定義されているならば、

```math
\begin{aligned}
(\mathfrak{x} \dotplus \mathfrak{y}) \dotplus (\mathfrak{z} \dotplus \mathfrak{u}) &= ((\mathfrak{x} \dotplus \mathfrak{y}) \dotplus \mathfrak{z}) \dotplus \mathfrak{u} = (\mathfrak{z} \dotplus (\mathfrak{x} \dotplus \mathfrak{y})) \dotplus \mathfrak{u} \\
&= ((\mathfrak{z} \dotplus \mathfrak{x}) \dotplus \mathfrak{y}) \dotplus \mathfrak{u} = (\mathfrak{z} \dotplus \mathfrak{x}) \dotplus (\mathfrak{y} \dotplus \mathfrak{u}) = (\mathfrak{x} \dotplus \mathfrak{z}) \dotplus (\mathfrak{y} \dotplus \mathfrak{u}),
\end{aligned}
```

を考慮して、

```math
\begin{aligned}
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) &= \mathop{\Large\dotplus}\limits_{n=1}^{x} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) \dotplus (\mathfrak{f}(x + 1) \dotplus \mathfrak{g}(x + 1)) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n)\right) \dotplus (\mathfrak{f}(x + 1) \dotplus \mathfrak{g}(x + 1)) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1)\right) \dotplus \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x + 1)\right) \\
&= \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n).
\end{aligned}
```

である。

したがって $x + 1$ は $\mathfrak{M}$ に属し、主張は常に成り立つ。

**定理 283:** $s(n)$ は $n \leqq x$ を $m \leqq x$ に対応させるものとする。$\mathfrak{f}(n)$ は $n \leqq x$ に対して定義されているとする。このとき

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(s(n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n).
```

である。

**証明:** 略記のため

```math
\mathfrak{f}(s(n)) = \mathfrak{g}(n)
```

とおく。

$\mathfrak{M}$ を、主張

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n)
```

が(すべての許される $s$ と $\mathfrak{f}$ に対して)真であるような $x$ の集合とする。

I)

```math
x = 1
```

に対しては

```math
s(1) = 1,
```

であるから、$\mathfrak{f}(1)$ が定義されているとき、

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathfrak{g}(1) = \mathfrak{f}(1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n).
```

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$s(n)$ は $n \leqq x + 1$ を $m \leqq x + 1$ に対応させ、$\mathfrak{f}(n)$ は $n \leqq x + 1$ に対して定義されているとする。

1)

```math
s(x + 1) = x + 1,
```

の場合、$s(n)$ は $n \leqq x$ を $m \leqq x$ に対応させる。このとき

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n),
```

```math
\mathfrak{g}(x + 1) = \mathfrak{f}(x + 1),
```

であるから、

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n).
```

である。

2)

```math
s(x + 1) < x + 1, \quad s(1) = 1,
```

の場合、$s(n)$ は $1 + 1 \leqq n \leqq x + 1$ なる $n$ を $1 + 1 \leqq m \leqq x + 1$ なる $m$ に対応させる。したがって $s(1 + n) - 1$ は $n \leqq x$ を $m \leqq x$ に対応させる。ゆえに

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(1 + n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(s(1 + n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + (s(1 + n) - 1)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + n),
```

であり、したがって定理 281 により

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n) = \mathfrak{g}(1) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(1 + n) = \mathfrak{f}(1) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + n) = \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n).
```

である。

3)

```math
s(x + 1) < x + 1, \quad s(1) > 1,
```

の場合、

```math
s(1) = a
```

とおき、$b$ を

```math
1 \leqq b \leqq x + 1, \quad s(b) = 1
```

から定める。このとき

```math
a > 1, \quad b > 1.
```

である。

α)

```math
a < x + 1.
```

とする。このとき、

```math
s_1(n) = \begin{cases}
1 & \text{für } n = 1, \\
a & \text{für } n = b, \\
s(n) & \text{für } 1 < n \leqq x + 1,\ n \neq b
\end{cases}
```

も

```math
s_2(n) = \begin{cases}
a & \text{für } n = 1, \\
1 & \text{für } n = a, \\
n & \text{für } 1 < n \leqq x + 1,\ n \neq a
\end{cases}
```

も、いずれも $n \leqq x + 1$ を $m \leqq x + 1$ に対応させる。

さて、

```math
s(n) = s_2(s_1(n)) \quad \text{für } n \leqq x + 1.
```

である。なぜなら、$s_2(s_1(n))$ によって

```math
\begin{aligned}
&1 \text{ via } 1 \text{ in } a = s(1), \\
&b \text{ via } a \text{ in } 1 = s(b), \\
&\text{jedes andere } n \leqq x + 1 \text{ via } s(n) \text{ in } s(n).
\end{aligned}
```

と移るからである。

$s_1(n)$ は 1 を、$s_2(n)$ は $x + 1$ を不変にとどめる。したがって 2) と 1) により

```math
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(s(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_2(s_1(n))) = \sum_{n=1}^{x+1} \mathfrak{f}(s_1(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
```

である。

β)

```math
a = x + 1, \quad b < x + 1.
```

とする。このとき

```math
s_3(n) = \begin{cases}
b & \text{für } n = 1, \\
1 & \text{für } n = b, \\
n & \text{für } 1 < n \leqq x + 1,\ n \neq b
\end{cases}
```

は $n \leqq x + 1$ を $m \leqq x + 1$ に対応させる。さらに

```math
s(n) = s_1(s_3(n)) \quad \text{für } n \leqq x + 1.
```

である。なぜなら、$s_1(s_3(n))$ によって

```math
\begin{aligned}
&1 \text{ via } b \text{ in } a = s(1), \\
&b \text{ via } 1 \text{ in } 1 = s(b), \\
&\text{jedes andere } n \leqq x + 1 \text{ via } n \text{ in } s(n).
\end{aligned}
```

と移るからである。

$s_3(n)$ は $x + 1$ を不変にとどめる。したがって 1) と 2) により

```math
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(s(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_1(s_3(n))) = \sum_{n=1}^{x+1} \mathfrak{f}(s_3(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
```

である。

γ)

```math
a = b = x + 1.
```

とする。$x = 1$ ならば

```math
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(n)
```

は自明である。

$x > 1$ ならば、

```math
s_4(n) = \begin{cases}
1 & \text{für } n = 1, \\
x + 1 & \text{für } n = x + 1, \\
s(n) & \text{für } 1 < n < x + 1
\end{cases}
```

は $n \leqq x + 1$ を $m \leqq x + 1$ に対応させる。それゆえ 1) により

```math
\begin{aligned}
\sum_{n=1}^{x+1} \mathfrak{g}(n) &= \sum_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x+1) = \left(\mathfrak{g}(1) \dotplus \sum_{n=1}^{x-1} \mathfrak{g}(n+1)\right) \dotplus \mathfrak{g}(x+1) \\
&= \mathfrak{g}(1) \dotplus \left(\sum_{n=1}^{x-1} \mathfrak{g}(n+1) \dotplus \mathfrak{g}(x+1)\right) \\
&= \left(\mathfrak{g}(x+1) \dotplus \sum_{n=1}^{x-1} \mathfrak{g}(n+1)\right) \dotplus \mathfrak{g}(1) \\
&= \left(\mathfrak{f}(s(x+1)) \dotplus \sum_{n=1}^{x-1} \mathfrak{f}(s(n+1))\right) \dotplus \mathfrak{f}(s(1)) \\
&= \left(\mathfrak{f}(1) \dotplus \sum_{n=1}^{x-1} \mathfrak{f}(s_4(n+1))\right) \dotplus \mathfrak{f}(x+1) \\
&= \left(\mathfrak{f}(s_4(1)) \dotplus \sum_{n=1}^{x-1} \mathfrak{f}(s_4(n+1))\right) \dotplus \mathfrak{f}(s_4(x+1)) \\
&= \sum_{n=1}^{x} \mathfrak{f}(s_4(n)) \dotplus \mathfrak{f}(s_4(x+1)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_4(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
\end{aligned}
```

である。

したがって $x + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

定義 70 および定理 284 から定理 286 までにおいては、例外として、ラテン文字は(必ずしも正とは限らない)整数を表す。

**定義 70:**

```math
y \leqq x,
```

とし、$\mathfrak{f}(n)$ が

```math
y \leqq n \leqq x
```

に対して定義されているとする。このとき

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1).
```

とする。

$n$ の代わりに、整数を表す他の任意の文字を用いてもよい。

次のことに注意せよ:

```math
x + 1 > y; \quad y \leqq (n + y) - 1 \leqq x \quad \text{für } 1 \leqq n \leqq (x + 1) - y;
```

さらに、$y = 1$ に対して定義 70 が(そうあるべきように)定義 69 と一致していることにも注意せよ。

**定理 284:**

```math
y \leqq u < x;
```

とし、$\mathfrak{f}(n)$ は

```math
y \leqq n \leqq x
```

に対して定義されているとする。このとき

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=u+1}^{x} \mathfrak{f}(n).
```

である。

**証明:** 定義 70 と定理 281 により

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1) = \sum_{n=1}^{(u+1)-y} \mathfrak{f}((n + y) - 1) \dotplus \sum_{n=1}^{x-u} \mathfrak{f}(((((u + 1) - y) + n) + y) - 1);
```

である。なぜなら

```math
((u + 1) - y) + (x - u) = (x + (-u)) + ((u + 1) + (-y)) = (x + ((-u) + (u + 1))) + (-y) = (x + 1) - y.
```

だからである。

さて

```math
(((u + 1) - y) + n) + y = ((u + 1) - y) + (y + n) = (((u + 1) - y) + y) + n = n + (u + 1),
```

であるから、定義 70 により

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=1}^{(x+1)-(u+1)} \mathfrak{f}((n + (u + 1)) - 1) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=u+1}^{x} \mathfrak{f}(n).
```

である。

**定理 285:**

```math
y \leqq x,
```

とし、$\mathfrak{f}(n)$ が

```math
y \leqq n \leqq x
```

に対して定義されているとする。このとき

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y+v}^{x+v} \mathfrak{f}(n - v).
```

である。

**証明:** 定義 70 により、主張の左辺は

```math
= \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1),
```

であり、右辺は($y + v \leqq n \leqq x + v$ に対して $y \leqq n - v \leqq x$ であることに注意せよ)

```math
= \sum_{n=1}^{((x+v)+1)-(y+v)} \mathfrak{f}(((n + (y + v)) - 1) - v);
```

である。ここで

```math
((x + v) + 1) - (y + v) = (1 + (x + v)) + ((-v) + (-y)) = (1 + ((x + v) + (-v))) + (-y) = (1 + x) - y = (x + 1) - y
```

かつ

```math
\begin{aligned}
((n + (y + v)) - 1) - v &= (n + (y + v)) - (1 + v) = ((n + y) + v) + (-v + (-1)) \\
&= (((n + y) + v) + (-v)) + (-1) = ((n + y) + (v + (-v))) - 1 = (n + y) - 1.
\end{aligned}
```

である。

**定理 286:**

```math
y \leqq x,
```

とし、$\mathfrak{f}(n)$ が

```math
y \leqq n \leqq x
```

に対して定義されているとする。$s(n)$ は $y \leqq n \leqq x$ なる $n$ を $y \leqq m \leqq x$ なる $m$ に対応させるものとする。このとき

```math
\sum_{n=y}^{x} \mathfrak{f}(s(n)) = \sum_{n=y}^{x} \mathfrak{f}(n).
```

である。

**証明:**

```math
s_1(n) = s((n + y) - 1) - (y - 1)
```

は、正の $n \leqq (x + 1) - y$ を正の $m \leqq (x + 1) - y$ に対応させる。ゆえに定理 283 により

```math
\begin{aligned}
\sum_{n=y}^{x} \mathfrak{f}(s(n)) &= \sum_{n=1}^{(x+1)-y} \mathfrak{f}(s((n + y) - 1)) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}(s_1(n) + (y - 1)) \\
&= \sum_{n=1}^{(x+1)-y} \mathfrak{f}(n + (y - 1)) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1) = \sum_{n=y}^{x} \mathfrak{f}(n).
\end{aligned}
```

である。

なお、

```math
\sum_{n=y}^{x} \mathfrak{f}(n)
```

の代わりに、くだけた書き方

```math
\mathfrak{f}(y) + \mathfrak{f}(y + 1) + \cdots + \mathfrak{f}(x)
```

もよく用いられる(積についても同様である)。しかし、例えば

```math
\mathfrak{f}(1) + \mathfrak{f}(1 + 1) + \mathfrak{f}((1 + 1) + 1) + \mathfrak{f}(((1 + 1) + 1) + 1),
```

言い換えれば

```math
\mathfrak{a} + \mathfrak{b} + \mathfrak{c} + \mathfrak{d}
```

(これは定義により古い加法に帰着し、

```math
((\mathfrak{a} + \mathfrak{b}) + \mathfrak{c}) + \mathfrak{d}
```

を意味する)は完全に正当であり、また例えば

```math
\mathfrak{abcdfghiklmopqrstuvwxyz}.
```

もそうである。

また、例えば

```math
\mathfrak{a} - \mathfrak{b} + \mathfrak{c}
```

を

```math
\mathfrak{a} + (-\mathfrak{b}) + \mathfrak{c}
```

の意味で書いてもさしつかえない。なぜなら、いずれにせよ

```math
\mathfrak{f}(1) + \mathfrak{f}(1 + 1) + \mathfrak{f}((1 + 1) + 1)
```

において

```math
\mathfrak{f}(1) = \mathfrak{a}, \quad \mathfrak{f}(1 + 1) = -\mathfrak{b}, \quad \mathfrak{f}((1 + 1) + 1) = \mathfrak{c}
```

としたものが意味されているからである。

これ以後、小文字のラテン文字は再び正の整数を表す。

**定理 287:** $\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているならば、

```math
\left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| \leqq \Xi,
```

```math
\sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] = [\Xi, 0].
```

となる $\Xi$ が存在する。

**証明:** $\mathfrak{M}$ を、(任意の $\mathfrak{f}(n)$ に対して)このような $\Xi$ が存在する $x$ の集合とする。

I) $\mathfrak{f}(1)$ が定義されているならば、

```math
\left| \sum_{n=1}^{1} \mathfrak{f}(n) \right| = |\mathfrak{f}(1)|,
```

```math
\sum_{n=1}^{1} [|\mathfrak{f}(n)|, 0] = [|\mathfrak{f}(1)|, 0];
```

であるから、

```math
\Xi = |\mathfrak{f}(1)|
```

が $x = 1$ において求めるものとなる。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、

```math
\left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| \leqq \Xi_1,
```

```math
\sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] = [\Xi_1, 0].
```

となる $\Xi_1$ が存在する。

定理 278 と定理 271 により

```math
\left| \sum_{n=1}^{x+1} \mathfrak{f}(n) \right| = \left| \sum_{n=1}^{x} \mathfrak{f}(n) + \mathfrak{f}(x + 1) \right| \leqq \left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| + |\mathfrak{f}(x + 1)| \leqq \Xi_1 + |\mathfrak{f}(x + 1)|,
```

であるから、

```math
\Xi = \Xi_1 + |\mathfrak{f}(x + 1)|
```

とおけば、

```math
\left| \sum_{n=1}^{x+1} \mathfrak{f}(n) \right| \leqq \Xi.
```

である。

他方、定理 278 により

```math
\sum_{n=1}^{x+1} [|\mathfrak{f}(n)|, 0] = \sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] + [|\mathfrak{f}(x + 1)|, 0] = [\Xi_1, 0] + [|\mathfrak{f}(x + 1)|, 0] = [\Xi_1 + |\mathfrak{f}(x + 1)|, 0 + 0] = [\Xi, 0].
```

である。

したがって $\Xi$ は $x + 1$ において求めるものとなる。ゆえに $x + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

**定理 288:** $\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているならば、

```math
\left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right|, 0 \right] = \prod_{n=1}^{x} [|\mathfrak{f}(n)|, 0].
```

である。

**証明:** $\mathfrak{M}$ をこれが成り立つ $x$ の集合とする。

I) $\mathfrak{f}(1)$ が定義されているならば、

```math
\left[ \left| \prod_{n=1}^{1} \mathfrak{f}(n) \right|, 0 \right] = [|\mathfrak{f}(1)|, 0] = \prod_{n=1}^{1} [|\mathfrak{f}(n)|, 0].
```

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、定理 278 と定理 268 により

```math
\begin{aligned}
\prod_{n=1}^{x+1} [|\mathfrak{f}(n)|, 0] &= \prod_{n=1}^{x} [|\mathfrak{f}(n)|, 0] \cdot [|\mathfrak{f}(x + 1)|, 0] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right|, 0 \right] \cdot [|\mathfrak{f}(x + 1)|, 0] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot |\mathfrak{f}(x + 1)| - 0 \cdot 0,\ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot 0 + 0 \cdot |\mathfrak{f}(x + 1)| \right] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot |\mathfrak{f}(x + 1)|, 0 \right] = \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \cdot \mathfrak{f}(x + 1) \right|, 0 \right] \\
&= \left[ \left| \prod_{n=1}^{x+1} \mathfrak{f}(n) \right|, 0 \right],
\end{aligned}
```

である。したがって $x + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

**定理 289:** $\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているならば、

```math
\prod_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{n}
```

となるのは、

```math
\mathfrak{f}(n) = \mathfrak{n}
```

となる $n \leqq x$ が存在するとき、またそのときに限る。

**証明:** $\mathfrak{M}$ をこれが成り立つ $x$ の集合とする。

I)

```math
\prod_{n=1}^{1} \mathfrak{f}(n) = \mathfrak{n}
```

は

```math
\mathfrak{f}(1) = \mathfrak{n}
```

と同一である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。

```math
\prod_{n=1}^{x+1} \mathfrak{f}(n) = \mathfrak{n}
```

は

```math
\prod_{n=1}^{x} \mathfrak{f}(n) \cdot \mathfrak{f}(x + 1) = \mathfrak{n};
```

を意味する。定理 221 により、このためには

```math
\prod_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{n} \quad \text{または} \quad \mathfrak{f}(x + 1) = \mathfrak{n},
```

が必要かつ十分であり、したがって($x$ が $\mathfrak{M}$ に属するから)

```math
\mathfrak{f}(n) = \mathfrak{n} \quad \text{für ein } n \leqq x \text{ oder für } n = x + 1.
```

が必要かつ十分である。

ゆえに $x + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

## § 9. 冪

この § では、小さいラテン文字は整数を表すものとする。

**定義 71:**

```math
\mathfrak{x}^x = \begin{cases}
\displaystyle\prod_{n=1}^{x} \mathfrak{x} & \text{für } x > 0, \\
\mathfrak{e} & \text{für } \mathfrak{x} \neq \mathfrak{n},\ x = 0, \\
\dfrac{\mathfrak{e}}{\mathfrak{x}^{|x|}} & \text{für } \mathfrak{x} \neq \mathfrak{n},\ x < 0.
\end{cases}
```

(読み方:$\mathfrak{x}$ の $x$ 乗。)したがって $\mathfrak{x}^x$ が定義されないのは、

```math
\mathfrak{x} = \mathfrak{n}, \quad x \leqq 0
```

の場合だけである。

```math
\mathfrak{x} \neq \mathfrak{n}, \quad x < 0
```

に対しては、定義 71 の第一行と定理 289 により

```math
\mathfrak{x}^{|x|} \neq \mathfrak{n}
```

であり、したがってそのとき $\frac{\mathfrak{e}}{\mathfrak{x}^{|x|}}$ が意味をもつことに注意せよ。

**定理 290:**

```math
\mathfrak{x} \neq \mathfrak{n}
```

に対して

```math
\mathfrak{x}^x \neq \mathfrak{n}
```

である。

**証明:** $x > 0$ に対してはこれは定理 289 から従い、$x = 0$ に対しては定義から、$x < 0$ に対しては

```math
\mathfrak{x}^x \mathfrak{x}^{|x|} \neq \mathfrak{n}
```

から従う。

**定理 291:** $\mathfrak{x}^1 = \mathfrak{x}$.

**証明:**

```math
\mathfrak{x}^1 = \prod_{n=1}^{1} \mathfrak{x} = \mathfrak{x}.
```

**定理 292:**

```math
x > 0
```

または

```math
\mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}
```

とする。このとき

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x
```

である。

**前注:** いずれにせよ両辺は意味をもつ。なぜなら $x \leqq 0$ のときは

```math
\mathfrak{x}\mathfrak{y} \neq \mathfrak{n}
```

だからである。

**証明:** 1) $\mathfrak{x}$、$\mathfrak{y}$ を固定し、

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x
```

をみたす $x > 0$ の集合を $\mathfrak{M}$ とする。

I) 定理 291 により

```math
(\mathfrak{x}\mathfrak{y})^1 = \mathfrak{x}\mathfrak{y} = \mathfrak{x}^1 \mathfrak{y}^1
```

であるから、1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するならば、

```math
\begin{aligned}
(\mathfrak{x}\mathfrak{y})^{x+1} &= \prod_{n=1}^{x+1} (\mathfrak{x}\mathfrak{y}) = \prod_{n=1}^{x} (\mathfrak{x}\mathfrak{y}) \cdot (\mathfrak{x}\mathfrak{y}) = (\mathfrak{x}^x \mathfrak{y}^x)(\mathfrak{x}\mathfrak{y}) = (\mathfrak{x}^x \mathfrak{x})(\mathfrak{y}^x \mathfrak{y}) \\
&= \left(\prod_{n=1}^{x} \mathfrak{x} \cdot \mathfrak{x}\right)\left(\prod_{n=1}^{x} \mathfrak{y} \cdot \mathfrak{y}\right) = \prod_{n=1}^{x+1} \mathfrak{x} \cdot \prod_{n=1}^{x+1} \mathfrak{y} = \mathfrak{x}^{x+1} \mathfrak{y}^{x+1}
\end{aligned}
```

であり、したがって $x + 1$ は $\mathfrak{M}$ に属する。

したがって $x > 0$ に対してつねに

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x
```

である。

2)

```math
x = 0, \quad \mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}
```

とする。このとき

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{e} = \mathfrak{e}\mathfrak{e} = \mathfrak{x}^x \mathfrak{y}^x
```

である。

3)

```math
x < 0, \quad \mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}
```

とする。1) により

```math
(\mathfrak{x}\mathfrak{y})^{|x|} = \mathfrak{x}^{|x|} \mathfrak{y}^{|x|},
```

```math
\frac{\mathfrak{e}}{(\mathfrak{x}\mathfrak{y})^{|x|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|} \mathfrak{y}^{|x|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|}} \cdot \frac{\mathfrak{e}}{\mathfrak{y}^{|x|}},
```

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
```

**定理 293:** $\mathfrak{e}^x = \mathfrak{e}$.

**証明:** 定理 292 により

```math
\mathfrak{e}^x \mathfrak{e} = \mathfrak{e}^x = (\mathfrak{e}\mathfrak{e})^x = \mathfrak{e}^x \mathfrak{e}^x,
```

```math
\mathfrak{n} = \mathfrak{e}^x \mathfrak{e}^x - \mathfrak{e}^x \mathfrak{e} = \mathfrak{e}^x (\mathfrak{e}^x - \mathfrak{e}),
```

したがって(定理 290 と定理 221 により)

```math
\mathfrak{e}^x - \mathfrak{e} = \mathfrak{n},
```

```math
\mathfrak{e}^x = \mathfrak{e}.
```

**定理 294:**

```math
x > 0, \quad y > 0
```

または

```math
\mathfrak{x} \neq \mathfrak{n}
```

とする。このとき

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^{x+y}
```

である。

**証明:** 1)

```math
x > 0, \quad y > 0
```

とする。このとき定理 281 により

```math
\mathfrak{x}^x \mathfrak{x}^y = \prod_{n=1}^{x} \mathfrak{x} \cdot \prod_{n=1}^{y} \mathfrak{x} = \prod_{n=1}^{x+y} \mathfrak{x} = \mathfrak{x}^{x+y}.
```

2)

```math
\mathfrak{x} \neq \mathfrak{n}
```

とし、かつ

```math
x > 0, \quad y > 0
```

が同時には成り立たないとする。

α)

```math
x < 0, \quad y < 0
```

とする。このとき 1) により

```math
\mathfrak{x}^{|x|} \mathfrak{x}^{|y|} = \mathfrak{x}^{|x|+|y|} = \mathfrak{x}^{|x+y|},
```

```math
\mathfrak{x}^x \mathfrak{x}^y = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|}} \cdot \frac{\mathfrak{e}}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|} \mathfrak{x}^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x+y|}} = \mathfrak{x}^{x+y}.
```

β)

```math
x > 0, \quad y < 0
```

とする。このとき

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^x \frac{\mathfrak{e}}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}}.
```

A)

```math
x > |y|
```

に対しては、1) により

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{x}^{|y|} \mathfrak{x}^{x-|y|}}{\mathfrak{x}^{|y|}} = \mathfrak{x}^{x-|y|} = \mathfrak{x}^{x+y}.
```

B)

```math
x = |y|
```

に対しては、

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \mathfrak{e} = \mathfrak{x}^0 = \mathfrak{x}^{x+y}.
```

C)

```math
x < |y|
```

に対しては、1) により

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \mathfrak{x}^x \frac{\mathfrak{e}}{\mathfrak{x}^x \mathfrak{x}^{|y|-x}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|y|-x}} = \mathfrak{x}^{x-|y|} = \mathfrak{x}^{x+y}.
```

γ)

```math
x < 0, \quad y > 0
```

とする。このとき β) により

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^y \mathfrak{x}^x = \mathfrak{x}^{y+x} = \mathfrak{x}^{x+y}.
```

δ)

```math
x = 0
```

とする。このとき

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{e} \mathfrak{x}^y = \mathfrak{x}^y = \mathfrak{x}^{0+y} = \mathfrak{x}^{x+y}.
```

ε)

```math
x \neq 0, \quad y = 0
```

とする。このとき δ) により

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^y \mathfrak{x}^x = \mathfrak{x}^{y+x} = \mathfrak{x}^{x+y}.
```

**定理 295:**

```math
\mathfrak{x} \neq \mathfrak{n}
```

に対して

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^y} = \mathfrak{x}^{x-y}
```

である。

**証明:** 定理 294 により

```math
\mathfrak{x}^{x-y} \mathfrak{x}^y = \mathfrak{x}^{(x-y)+y} = \mathfrak{x}^x;
```

定理 290 により

```math
\mathfrak{x}^y \neq \mathfrak{n}
```

であるから、

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^y} = \mathfrak{x}^{x-y}.
```

**定理 296:**

```math
\mathfrak{x} \neq \mathfrak{n}
```

に対して

```math
\frac{\mathfrak{e}}{\mathfrak{x}^x} = \mathfrak{x}^{-x}
```

である。

**証明:** 定理 295 により

```math
\frac{\mathfrak{e}}{\mathfrak{x}^x} = \frac{\mathfrak{x}^0}{\mathfrak{x}^x} = \mathfrak{x}^{0-x} = \mathfrak{x}^{-x}.
```

**定理 297:**

```math
x > 0, \quad y > 0
```

または

```math
\mathfrak{x} \neq \mathfrak{n}
```

とする。このとき

```math
(\mathfrak{x}^x)^y = \mathfrak{x}^{xy}
```

である。

**証明:** 1)

```math
\mathfrak{x} = \mathfrak{n}, \quad x > 0, \quad y > 0
```

とする。このとき定理 289 により

```math
(\mathfrak{x}^x)^y = (\mathfrak{n}^x)^y = \mathfrak{n}^y = \mathfrak{n} = \mathfrak{n}^{xy} = \mathfrak{x}^{xy}.
```

2)

```math
\mathfrak{x} \neq \mathfrak{n}
```

とする。

a) $\mathfrak{x}$、$x$ を固定し、

```math
(\mathfrak{x}^x)^y = \mathfrak{x}^{xy}
```

をみたす $y > 0$ の集合を $\mathfrak{M}$ とする。

I) $(\mathfrak{x}^x)^1 = \mathfrak{x}^x = \mathfrak{x}^{x \cdot 1}$;

したがって 1 は $\mathfrak{M}$ に属する。

II) $y$ が $\mathfrak{M}$ に属するとする。このとき定理 294 により

```math
(\mathfrak{x}^x)^{y+1} = (\mathfrak{x}^x)^y (\mathfrak{x}^x)^1 = \mathfrak{x}^{xy} \mathfrak{x}^x = \mathfrak{x}^{xy+x} = \mathfrak{x}^{x(y+1)}
```

であり、したがって $y + 1$ は $\mathfrak{M}$ に属する。

したがって $y > 0$ に対して主張は正しい。

b)

```math
y = 0
```

とする。このとき

```math
(\mathfrak{x}^x)^y = \mathfrak{e} = \mathfrak{x}^{xy}.
```

c)

```math
y < 0
```

とする。このとき a) により

```math
(\mathfrak{x}^x)^{|y|} = \mathfrak{x}^{x|y|},
```

したがって定理 296 と a) により

```math
(\mathfrak{x}^x)^y = \frac{\mathfrak{e}}{(\mathfrak{x}^x)^{-y}} = \frac{\mathfrak{e}}{(\mathfrak{x}^x)^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{x|y|}} = \mathfrak{x}^{-(x|y|)} = \mathfrak{x}^{xy}.
```

## § 10. 実数の埋め込み

**定理 298:**

```math
\begin{aligned}
[\Xi + H, 0] &= [\Xi, 0] + [H, 0]; \\
[\Xi - H, 0] &= [\Xi, 0] - [H, 0]; \\
[\Xi H, 0] &= [\Xi, 0][H, 0]; \\
\left[\frac{\Xi}{H}, 0\right] &= \frac{[\Xi, 0]}{[H, 0]}, \quad \text{falls } H \neq 0; \\
[-\Xi, 0] &= -[\Xi, 0]; \\
|[\Xi, 0]| &= |\Xi|.
\end{aligned}
```

**証明:** 1)

```math
[\Xi, 0] + [H, 0] = [\Xi + H, 0 + 0] = [\Xi + H, 0].
```

2)

```math
[\Xi, 0] - [H, 0] = [\Xi - H, 0 - 0] = [\Xi - H, 0].
```

3)

```math
[\Xi, 0][H, 0] = [\Xi H - 0 \cdot 0, \Xi \cdot 0 + 0 \cdot H] = [\Xi H, 0].
```

4) 3) により、$H \neq 0$ ならば

```math
[H, 0]\left[\frac{\Xi}{H}, 0\right] = \left[H \cdot \frac{\Xi}{H}, 0\right] = [\Xi, 0],
```

```math
\frac{[\Xi, 0]}{[H, 0]} = \left[\frac{\Xi}{H}, 0\right].
```

5)

```math
-[\Xi, 0] = [-\Xi, -0] = [-\Xi, 0].
```

6)

```math
|\Xi| = \sqrt{|\Xi|\,|\Xi|} = \sqrt{\Xi\Xi} = \sqrt{\Xi\Xi + 0 \cdot 0} = |[\Xi, 0]|.
```

**定理 299:** $[x, 0]$ の形の複素数は、1 の代わりに $[1, 0]$ をとり、

```math
[x, 0]' = [x', 0]
```

と置くならば、自然数の五つの公理をみたす。

**証明:** $[x, 0]$ の集合を $[\mathfrak{Z}]$ とする。

1) $[1, 0]$ は $[\mathfrak{Z}]$ に属する。

2) $[x, 0]$ とともに $[x, 0]'$ も $[\mathfrak{Z}]$ に存在する。

3) つねに

```math
x' \neq 1
```

であるから、

```math
[x', 0] \neq [1, 0],
```

```math
[x, 0]' \neq [1, 0].
```

4)

```math
[x, 0]' = [y, 0]'
```

から

```math
[x', 0] = [y', 0],
```

```math
x' = y',
```

```math
x = y,
```

```math
[x, 0] = [y, 0]
```

が従う。

5) $[\mathfrak{Z}]$ の数からなる集合 $[\mathfrak{M}]$ が次の性質をもつとする:

I) $[1, 0]$ は $[\mathfrak{M}]$ に属する。

II) $[x, 0]$ が $[\mathfrak{M}]$ に属するならば、$[x, 0]'$ は $[\mathfrak{M}]$ に属する。

そこで、$[x, 0]$ が $[\mathfrak{M}]$ に属するような $x$ の集合を $\mathfrak{M}$ で表す。すると 1 は $\mathfrak{M}$ に属し、$\mathfrak{M}$ の各 $x$ とともに $x'$ も $\mathfrak{M}$ に属する。したがってすべての正の整数 $x$ は $\mathfrak{M}$ に属し、したがってすべての $[x, 0]$ は $[\mathfrak{M}]$ に属する。

二つの $[\Xi, 0]$ の和・差・積および(存在する場合には)商は、定理 298 により旧来の概念に対応し、記号 $-[\Xi, 0]$ と $|[\Xi, 0]|$ も同様であり、また

```math
[\Xi, 0] > [H, 0] \quad \text{für } \Xi > H,
```

```math
[\Xi, 0] < [H, 0] \quad \text{für } \Xi < H
```

と定義することができるから、複素数 $[\Xi, 0]$ は、我々が第4章で実数について証明したすべての性質をもち、特に数 $[x, 0]$ は、正の整数について証明されたすべての性質をもつ。

それゆえ我々は実数を捨て去り、それを対応する複素数 $[\Xi, 0]$ で置き換え、以後は複素数についてのみ語ればよい。(ただし実数は、複素数の概念の中に対として残っている。)

**定義 72:** (自由になった記号)$\Xi$ は複素数 $[\Xi, 0]$ を表し、実数という言葉もこれに移る。同様に以後、$[\Xi, 0]$ を、$\Xi$ が整数のとき整数、$\Xi$ が有理数のとき有理数、$\Xi$ が無理数のとき無理数、$\Xi$ が正のとき正の数、$\Xi$ が負のとき負の数と呼ぶ。

したがって例えば、$\mathfrak{n}$ の代わりに 0、$\mathfrak{e}$ の代わりに 1 と書く。

今や我々は複素数を、任意のアルファベットの小文字あるいは大文字で(混用してもよい)表すことができる。ただし次の特別な数については、小さいラテン文字を用いるのが慣例である。それは次の定義に基づく。

**定義 73:** $i = [0, 1]$.

**定理 300:** $i \cdot i = -1$.

**証明:**

```math
i \cdot i = [0, 1][0, 1] = [0 \cdot 0 - 1 \cdot 1, 0 \cdot 1 + 1 \cdot 0] = [-1, 0] = -1.
```

**定理 301:** 実数 $u_1$、$u_2$ に対して

```math
u_1 + u_2 i = [u_1, u_2]
```

である。したがって各複素数 $x$ に対して、

```math
x = u_1 + u_2 i
```

をみたす実数の対 $u_1$、$u_2$ がちょうど一つ存在する。

**証明:** 実数 $u_1$、$u_2$ に対して

```math
u_1 + u_2 i = [u_1, 0] + [u_2, 0][0, 1] = [u_1, 0] + [u_2 \cdot 0 - 0 \cdot 1, u_2 \cdot 1 + 0 \cdot 0] = [u_1, 0] + [0, u_2] = [u_1, u_2].
```

定理 301 によって記号 $[\ ]$ は不要になった。複素数とはまさに、$u_1$ と $u_2$ が実数であるような数 $u_1 + u_2 i$ のことである。等しい対 $u_1$、$u_2$ には等しい数が、異なる対には異なる数が対応し、二つの複素数 $u_1 + u_2 i$、$v_1 + v_2 i$($u_1$、$u_2$、$v_1$、$v_2$ は実数)の和・差・積は次の公式によって作る。

```math
\begin{aligned}
(u_1 + u_2 i) + (v_1 + v_2 i) &= (u_1 + v_1) + (u_2 + v_2) i, \\
(u_1 + u_2 i) - (v_1 + v_2 i) &= (u_1 - v_1) + (u_2 - v_2) i, \\
(u_1 + u_2 i)(v_1 + v_2 i) &= (u_1 v_1 - u_2 v_2) + (u_1 v_2 + u_2 v_1) i.
\end{aligned}
```

これらの公式を覚える必要すらなく、実数の諸法則が保たれることと定理 300 が成り立つことだけを覚えておけばよい。それに従えば、単に次のように計算すればよい。

```math
(u_1 + u_2 i) + (v_1 + v_2 i) = (u_1 + v_1) + (u_2 i + v_2 i) = (u_1 + v_1) + (u_2 + v_2) i,
```

```math
(u_1 + u_2 i) - (v_1 + v_2 i) = (u_1 - v_1) + (u_2 i - v_2 i) = (u_1 - v_1) + (u_2 - v_2) i,
```

```math
\begin{aligned}
(u_1 + u_2 i)(v_1 + v_2 i) &= (u_1 + u_2 i) v_1 + (u_1 + u_2 i) v_2 i \\
&= u_1 v_1 + u_2 i v_1 + u_1 v_2 i + u_2 i v_2 i \\
&= u_1 v_1 + u_2 v_1 i + u_1 v_2 i + u_2 v_2 i i \\
&= u_1 v_1 + u_2 v_1 i + u_1 v_2 i + u_2 v_2 (-1) \\
&= (u_1 v_1 - u_2 v_2) + (u_1 v_2 + u_2 v_1) i.
\end{aligned}
```

除法については、$v_1$ と $v_2$ がともに 0 ではないとき、計算によって、定理 301 の意味での標準的な表示として

```math
\begin{aligned}
\frac{u_1 + u_2 i}{v_1 + v_2 i} &= \frac{(u_1 + u_2 i)(v_1 - v_2 i)}{(v_1 + v_2 i)(v_1 - v_2 i)} = \frac{(u_1 v_1 + u_2 v_2) + (-(u_1 v_2) + u_2 v_1) i}{(v_1 v_1 + v_2 v_2) + (-(v_1 v_2) + v_2 v_1) i} \\
&= \frac{(u_1 v_1 + u_2 v_2) + (-(u_1 v_2) + u_2 v_1) i}{v_1 v_1 + v_2 v_2} = \frac{u_1 v_1 + u_2 v_2}{v_1 v_1 + v_2 v_2} + \frac{-(u_1 v_2) + u_2 v_1}{v_1 v_1 + v_2 v_2}\, i
\end{aligned}
```

が得られる。
