# 第5章 複素数

## § 1. 定義

**定義 57:** 複素数とは、(定まった順序での)実数の対 $\Xi_1, \Xi_2$ のことである。この複素数を $[\Xi_1, \Xi_2]$ で表す。その際、$[\Xi_1, \Xi_2]$ と $[\mathrm{H}_1, \mathrm{H}_2]$ が同じ数(等しい;記号 $=$)とみなされるのは、

$$
\Xi_1 = \mathrm{H}_1, \quad \Xi_2 = \mathrm{H}_2
$$

であるとき、またそのときに限る。そうでないときは等しくない(相異なる;記号 $\neq$)とみなす。

小文字のドイツ文字は一貫して複素数を表す。

したがって、任意の $\mathfrak{x}$ と任意の $\mathfrak{y}$ に対して、

$$
\mathfrak{x} = \mathfrak{y}, \quad \mathfrak{x} \neq \mathfrak{y}
$$

のうちのちょうど一方の場合が成り立つ。複素数においては同一性と相等性の概念が混じり合うので、次の三つの定理は自明である。

**定理 206:** $\mathfrak{x} = \mathfrak{x}$.

**定理 207:**

$$
\mathfrak{x} = \mathfrak{y}
$$

から

$$
\mathfrak{y} = \mathfrak{x}.
$$

が従う。

**定理 208:**

$$
\mathfrak{x} = \mathfrak{y}, \quad \mathfrak{y} = \mathfrak{z}
$$

から

$$
\mathfrak{x} = \mathfrak{z}.
$$

が従う。

**定義 58:** $\mathfrak{n} = [0, 0]$.

**定義 59:** $\mathfrak{e} = [1, 0]$.

したがって文字 $\mathfrak{n}$ と $\mathfrak{e}$ は特定の複素数のために留保されたままである。

## § 2. 加法

**定義 60:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
$$

であるとき、

$$
\mathfrak{x} + \mathfrak{y} = [\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2].
$$

とする。($+$ は「プラス」と読む。)$\mathfrak{x} + \mathfrak{y}$ を $\mathfrak{x}$ と $\mathfrak{y}$ の和、または $\mathfrak{x}$ に $\mathfrak{y}$ を加える加法によって得られる(複素)数という。

**定理 209**(加法の交換法則):

$$
\mathfrak{x} + \mathfrak{y} = \mathfrak{y} + \mathfrak{x}.
$$

**証明:** $[\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2] = [\mathrm{H}_1 + \Xi_1, \mathrm{H}_2 + \Xi_2]$.

**定理 210:** $\mathfrak{x} + \mathfrak{n} = \mathfrak{x}$.

**証明:** $[\Xi_1, \Xi_2] + [0, 0] = [\Xi_1 + 0, \Xi_2 + 0] = [\Xi_1, \Xi_2]$.

**定理 211**(加法の結合法則):

$$
(\mathfrak{x} + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + (\mathfrak{y} + \mathfrak{z}).
$$

**証明:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2], \quad \mathfrak{z} = [\mathrm{Z}_1, \mathrm{Z}_2],
$$

であるとき、定理 186 により

$$
\begin{aligned}
(\mathfrak{x} + \mathfrak{y}) + \mathfrak{z} &= [\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2] + [\mathrm{Z}_1, \mathrm{Z}_2] = [(\Xi_1 + \mathrm{H}_1) + \mathrm{Z}_1, (\Xi_2 + \mathrm{H}_2) + \mathrm{Z}_2] \\
&= [\Xi_1 + (\mathrm{H}_1 + \mathrm{Z}_1), \Xi_2 + (\mathrm{H}_2 + \mathrm{Z}_2)] = [\Xi_1, \Xi_2] + [\mathrm{H}_1 + \mathrm{Z}_1, \mathrm{H}_2 + \mathrm{Z}_2] = \mathfrak{x} + (\mathfrak{y} + \mathfrak{z}).
\end{aligned}
$$

である。

**定理 212:** $\mathfrak{x}, \mathfrak{y}$ が与えられたとき、

$$
\mathfrak{y} + \mathfrak{u} = \mathfrak{x}
$$

はちょうど一つの解 $\mathfrak{u}$ をもつ。すなわち、

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
$$

とおけば、

$$
\mathfrak{u} = [\Xi_1 - \mathrm{H}_1, \Xi_2 - \mathrm{H}_2].
$$

である。

**証明:** 任意の

$$
\mathfrak{u} = [\Upsilon_1, \Upsilon_2]
$$

に対して

$$
\mathfrak{y} + \mathfrak{u} = [\mathrm{H}_1 + \Upsilon_1, \mathrm{H}_2 + \Upsilon_2],
$$

であり、要求されるのはちょうど

$$
\mathrm{H}_1 + \Upsilon_1 = \Xi_1, \quad \mathrm{H}_2 + \Upsilon_2 = \Xi_2
$$

であるから、定理 187 がすべてを証明する。

**定義 61:** 定理 212 の $\mathfrak{u}$ を $\mathfrak{x} - \mathfrak{y}$ と書く($-$ は「マイナス」と読む)。$\mathfrak{x} - \mathfrak{y}$ は $\mathfrak{x}$ 引く $\mathfrak{y}$ の差、または $\mathfrak{x}$ から $\mathfrak{y}$ を引く減法によって得られる数ともいう。

**定理 213:**

$$
\mathfrak{x} - \mathfrak{y} = \mathfrak{n}
$$

であるのは、

$$
\mathfrak{x} = \mathfrak{y}.
$$

のとき、またそのときに限る。

**証明:**

$$
\Xi_1 - \mathrm{H}_1 = \Xi_2 - \mathrm{H}_2 = 0
$$

であるのは、

$$
\Xi_1 = \mathrm{H}_1, \quad \Xi_2 = \mathrm{H}_2.
$$

のとき、またそのときに限る。

**定義 62:** $-\mathfrak{x} = \mathfrak{n} - \mathfrak{x}$.

(左の $-$ は「マイナス」と読む。)

**定理 214:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2]
$$

に対して

$$
-\mathfrak{x} = [-\Xi_1, -\Xi_2].
$$

である。

**証明:** $-[\Xi_1, \Xi_2] = [0, 0] - [\Xi_1, \Xi_2] = [0 - \Xi_1, 0 - \Xi_2]$.

**定理 215:** $-(-\mathfrak{x}) = \mathfrak{x}$.

**証明:** 定理 177 により

$$
-(-\Xi_1) = \Xi_1, \quad -(-\Xi_2) = \Xi_2.
$$

**定理 216:** $\mathfrak{x} + (-\mathfrak{x}) = \mathfrak{n}$.

**証明:** 定理 179 により

$$
\Xi_1 + (-\Xi_1) = 0, \quad \Xi_2 + (-\Xi_2) = 0.
$$

である。

**定理 217:** $-(\mathfrak{x} + \mathfrak{y}) = -\mathfrak{x} + (-\mathfrak{y})$.

**証明:** 定理 180 により、

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
$$

とおくと、

$$
\begin{aligned}
-(\mathfrak{x} + \mathfrak{y}) &= [-(\Xi_1 + \mathrm{H}_1), -(\Xi_2 + \mathrm{H}_2)] = [-\Xi_1 + (-\mathrm{H}_1), -\Xi_2 + (-\mathrm{H}_2)] \\
&= [-\Xi_1, -\Xi_2] + [-\mathrm{H}_1, -\mathrm{H}_2] = -\mathfrak{x} + (-\mathfrak{y}).
\end{aligned}
$$

である。

**定理 218:** $\mathfrak{x} - \mathfrak{y} = \mathfrak{x} + (-\mathfrak{y})$.

**証明:** $[\Xi_1 - \mathrm{H}_1, \Xi_2 - \mathrm{H}_2] = [\Xi_1, \Xi_2] + [-\mathrm{H}_1, -\mathrm{H}_2]$.

**定理 219:** $-(\mathfrak{x} - \mathfrak{y}) = \mathfrak{y} - \mathfrak{x}$.

**証明:**

$$
-(\mathfrak{x} - \mathfrak{y}) = -(\mathfrak{x} + (-\mathfrak{y})) = -\mathfrak{x} + (-(-\mathfrak{y})) = -\mathfrak{x} + \mathfrak{y} = \mathfrak{y} + (-\mathfrak{x}) = \mathfrak{y} - \mathfrak{x}.
$$

## § 3. 乗法

**定義 63:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
$$

であるとき、

$$
\mathfrak{x} \cdot \mathfrak{y} = [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1].
$$

とする。($\cdot$ は「掛ける」と読む。ただし、この点はたいてい書かない。)$\mathfrak{x} \cdot \mathfrak{y}$ を $\mathfrak{x}$ と $\mathfrak{y}$ の積、または $\mathfrak{x}$ に $\mathfrak{y}$ を掛ける乗法によって得られる数という。

**定理 220**(乗法の交換法則):

$$
\mathfrak{x}\mathfrak{y} = \mathfrak{y}\mathfrak{x}.
$$

**証明:**

$$
\begin{aligned}
[\Xi_1, \Xi_2][\mathrm{H}_1, \mathrm{H}_2] &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1] \\
&= [\mathrm{H}_1\Xi_1 - \mathrm{H}_2\Xi_2, \mathrm{H}_1\Xi_2 + \mathrm{H}_2\Xi_1] = [\mathrm{H}_1, \mathrm{H}_2][\Xi_1, \Xi_2].
\end{aligned}
$$

**定理 221:**

$$
\mathfrak{x}\mathfrak{y} = \mathfrak{n}
$$

であるのは、二つの数 $\mathfrak{x}, \mathfrak{y}$ の少なくとも一方が $\mathfrak{n}$ に等しいとき、またそのときに限る。

**証明:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2].
$$

とする。

1)

$$
\mathfrak{x} = \mathfrak{n}
$$

から

$$
\Xi_1 = \Xi_2 = 0,
$$

$$
\mathfrak{x}\mathfrak{y} = [0 \cdot \mathrm{H}_1 - 0 \cdot \mathrm{H}_2, 0 \cdot \mathrm{H}_2 + 0 \cdot \mathrm{H}_1] = [0, 0] = \mathfrak{n}.
$$

が従う。

2)

$$
\mathfrak{y} = \mathfrak{n}
$$

から、定理 220 と 1) により

$$
\mathfrak{x}\mathfrak{y} = \mathfrak{y}\mathfrak{x} = \mathfrak{n}\mathfrak{x} = \mathfrak{n}.
$$

が従う。

3)

$$
\mathfrak{x}\mathfrak{y} = \mathfrak{n}
$$

から

$$
\mathfrak{x} = \mathfrak{n} \text{ または } \mathfrak{y} = \mathfrak{n}
$$

であることを導かなければならない。そこで

$$
\mathfrak{y} \neq \mathfrak{n},
$$

すなわち

$$
\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2 > 0,
$$

と仮定してよく、

$$
\mathfrak{x} = \mathfrak{n},
$$

すなわち

$$
\Xi_1 = \Xi_2 = 0
$$

を証明すればよい。

仮定により

$$
\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2 = 0 = \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1,
$$

であるから、

$$
\begin{aligned}
0 &= (\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{H}_1 + (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{H}_2 \\
&= ((\Xi_1\mathrm{H}_1)\mathrm{H}_1 - (\Xi_2\mathrm{H}_2)\mathrm{H}_1) + ((\Xi_1\mathrm{H}_2)\mathrm{H}_2 + (\Xi_2\mathrm{H}_1)\mathrm{H}_2) \\
&= (\Xi_1(\mathrm{H}_1\mathrm{H}_1) - \Xi_2(\mathrm{H}_2\mathrm{H}_1)) + (\Xi_1(\mathrm{H}_2\mathrm{H}_2) + \Xi_2(\mathrm{H}_1\mathrm{H}_2)) \\
&= ((\Xi_1(\mathrm{H}_1\mathrm{H}_1) - \Xi_2(\mathrm{H}_2\mathrm{H}_1)) + \Xi_2(\mathrm{H}_1\mathrm{H}_2)) + \Xi_1(\mathrm{H}_2\mathrm{H}_2) \\
&= \Xi_1(\mathrm{H}_1\mathrm{H}_1) + \Xi_1(\mathrm{H}_2\mathrm{H}_2) = \Xi_1(\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2),
\end{aligned}
$$

したがって

$$
\Xi_1 = 0,
$$

$$
\Xi_2\mathrm{H}_2 = 0 = \Xi_2\mathrm{H}_1.
$$

である。$\mathrm{H}_1$ と $\mathrm{H}_2$ は両方とも $0$ ではないから、したがって

$$
\Xi_2 = 0.
$$

である。

**定理 222:** $\mathfrak{x}\mathfrak{e} = \mathfrak{x}$.

**証明:** $[\Xi_1, \Xi_2][1, 0] = [\Xi_1 \cdot 1 - \Xi_2 \cdot 0, \Xi_1 \cdot 0 + \Xi_2 \cdot 1] = [\Xi_1, \Xi_2]$.

**定理 223:** $\mathfrak{x}(-\mathfrak{e}) = -\mathfrak{x}$.

**証明:**

$$
[\Xi_1, \Xi_2][-1, 0] = [\Xi_1(-1) - \Xi_2 \cdot 0, \Xi_1 \cdot 0 + \Xi_2(-1)] = [-\Xi_1, -\Xi_2].
$$

**定理 224:** $(-\mathfrak{x})\mathfrak{y} = \mathfrak{x}(-\mathfrak{y}) = -(\mathfrak{x}\mathfrak{y})$.

**証明:** 1)

$$
\begin{aligned}
[-\Xi_1, -\Xi_2][\mathrm{H}_1, \mathrm{H}_2] &= [(-\Xi_1)\mathrm{H}_1 - (-\Xi_2)\mathrm{H}_2, (-\Xi_1)\mathrm{H}_2 + (-\Xi_2)\mathrm{H}_1] \\
&= [-(\Xi_1\mathrm{H}_1) + \Xi_2\mathrm{H}_2, -(\Xi_1\mathrm{H}_2) - \Xi_2\mathrm{H}_1] \\
&= [-(\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2), -(\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)] \\
&= -([\Xi_1, \Xi_2][\mathrm{H}_1, \mathrm{H}_2]),
\end{aligned}
$$

$$
(-\mathfrak{x})\mathfrak{y} = -(\mathfrak{x}\mathfrak{y}).
$$

2) 1) により

$$
\mathfrak{x}(-\mathfrak{y}) = (-\mathfrak{y})\mathfrak{x} = -(\mathfrak{y}\mathfrak{x}) = -(\mathfrak{x}\mathfrak{y}).
$$

である。

**定理 225:** $(-\mathfrak{x})(-\mathfrak{y}) = \mathfrak{x}\mathfrak{y}$.

**証明:** 定理 224 により

$$
(-\mathfrak{x})(-\mathfrak{y}) = \mathfrak{x}(-(-\mathfrak{y})) = \mathfrak{x}\mathfrak{y}.
$$

である。

**定理 226**(乗法の結合法則):

$$
(\mathfrak{x}\mathfrak{y})\mathfrak{z} = \mathfrak{x}(\mathfrak{y}\mathfrak{z}).
$$

**証明:** この証明では、見やすさのため例外的に略記として

$$
(\Xi + \mathrm{H}) + \mathrm{Z} = \Xi + \mathrm{H} + \mathrm{Z},
$$

$$
(\Xi\mathrm{H})\mathrm{Z} = \Xi\mathrm{H}\mathrm{Z}
$$

とおく。したがって

$$
\Xi + (\mathrm{H} + \mathrm{Z}) = \Xi + \mathrm{H} + \mathrm{Z},
$$

$$
\Xi(\mathrm{H}\mathrm{Z}) = \Xi\mathrm{H}\mathrm{Z}
$$

でもある。

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2], \quad \mathfrak{z} = [\mathrm{Z}_1, \mathrm{Z}_2]
$$

とおく。このとき

$$
\begin{aligned}
(\mathfrak{x}\mathfrak{y})\mathfrak{z} &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1][\mathrm{Z}_1, \mathrm{Z}_2] \\
&= [(\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{Z}_1 - (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{Z}_2, (\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{Z}_2 + (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{Z}_1] \\
&= [(\Xi_1\mathrm{H}_1\mathrm{Z}_1 - \Xi_2\mathrm{H}_2\mathrm{Z}_1) - (\Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2), (\Xi_1\mathrm{H}_1\mathrm{Z}_2 - \Xi_2\mathrm{H}_2\mathrm{Z}_2) + (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1)] \\
&= [(\Xi_1\mathrm{H}_1\mathrm{Z}_1 + (-(\Xi_2\mathrm{H}_2\mathrm{Z}_1))) + (-(\Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2)), (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1) + (\Xi_1\mathrm{H}_1\mathrm{Z}_2 + (-(\Xi_2\mathrm{H}_2\mathrm{Z}_2)))] \\
&= [\Xi_1\mathrm{H}_1\mathrm{Z}_1 - (\Xi_2\mathrm{H}_2\mathrm{Z}_1 + \Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2), (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1 + \Xi_1\mathrm{H}_1\mathrm{Z}_2) - \Xi_2\mathrm{H}_2\mathrm{Z}_2].
\end{aligned}
$$

である。

$$
\mathfrak{x}(\mathfrak{y}\mathfrak{z}) = (\mathfrak{y}\mathfrak{z})\mathfrak{x}
$$

であるから、文字の入れ替え($\Xi$ の代わりに $\mathrm{H}$、$\mathrm{H}$ の代わりに $\mathrm{Z}$、$\mathrm{Z}$ の代わりに $\Xi$)によって

$$
\mathfrak{x}(\mathfrak{y}\mathfrak{z}) = [\mathrm{H}_1\mathrm{Z}_1\Xi_1 - (\mathrm{H}_2\mathrm{Z}_2\Xi_1 + \mathrm{H}_1\mathrm{Z}_2\Xi_2 + \mathrm{H}_2\mathrm{Z}_1\Xi_2), (\mathrm{H}_1\mathrm{Z}_2\Xi_1 + \mathrm{H}_2\mathrm{Z}_1\Xi_1 + \mathrm{H}_1\mathrm{Z}_1\Xi_2) - \mathrm{H}_2\mathrm{Z}_2\Xi_2].
$$

が得られる。

$$
\Xi\mathrm{H}\mathrm{Z} = \Xi(\mathrm{H}\mathrm{Z}) = (\mathrm{H}\mathrm{Z})\Xi = \mathrm{H}\mathrm{Z}\Xi,
$$

$$
\Xi + \mathrm{H} + \mathrm{Z} = \Xi + (\mathrm{H} + \mathrm{Z}) = (\mathrm{H} + \mathrm{Z}) + \Xi = \mathrm{H} + \mathrm{Z} + \Xi
$$

であるから、計算し終えた両式を見比べて

$$
(\mathfrak{x}\mathfrak{y})\mathfrak{z} = \mathfrak{x}(\mathfrak{y}\mathfrak{z}).
$$

がわかる。

**定理 227**(分配法則):

$$
\mathfrak{x}(\mathfrak{y} + \mathfrak{z}) = \mathfrak{x}\mathfrak{y} + \mathfrak{x}\mathfrak{z}.
$$

**証明:**

$$
\begin{aligned}
[\Xi_1, \Xi_2]([\mathrm{H}_1, \mathrm{H}_2] + [\mathrm{Z}_1, \mathrm{Z}_2]) &= [\Xi_1, \Xi_2][\mathrm{H}_1 + \mathrm{Z}_1, \mathrm{H}_2 + \mathrm{Z}_2] \\
&= [\Xi_1(\mathrm{H}_1 + \mathrm{Z}_1) - \Xi_2(\mathrm{H}_2 + \mathrm{Z}_2), \Xi_1(\mathrm{H}_2 + \mathrm{Z}_2) + \Xi_2(\mathrm{H}_1 + \mathrm{Z}_1)] \\
&= [(\Xi_1\mathrm{H}_1 + \Xi_1\mathrm{Z}_1) + (-(\Xi_2\mathrm{H}_2) + (-(\Xi_2\mathrm{Z}_2))), (\Xi_1\mathrm{H}_2 + \Xi_1\mathrm{Z}_2) + (\Xi_2\mathrm{H}_1 + \Xi_2\mathrm{Z}_1)] \\
&= [(\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2) + (\Xi_1\mathrm{Z}_1 - \Xi_2\mathrm{Z}_2), (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1) + (\Xi_1\mathrm{Z}_2 + \Xi_2\mathrm{Z}_1)] \\
&= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1] + [\Xi_1\mathrm{Z}_1 - \Xi_2\mathrm{Z}_2, \Xi_1\mathrm{Z}_2 + \Xi_2\mathrm{Z}_1] \\
&= [\Xi_1, \Xi_2][\mathrm{H}_1, \mathrm{H}_2] + [\Xi_1, \Xi_2][\mathrm{Z}_1, \mathrm{Z}_2].
\end{aligned}
$$

**定理 228:** $\mathfrak{x}(\mathfrak{y} - \mathfrak{z}) = \mathfrak{x}\mathfrak{y} - \mathfrak{x}\mathfrak{z}$.

**証明:**

$$
\mathfrak{x}(\mathfrak{y} - \mathfrak{z}) = \mathfrak{x}(\mathfrak{y} + (-\mathfrak{z})) = \mathfrak{x}\mathfrak{y} + \mathfrak{x}(-\mathfrak{z}) = \mathfrak{x}\mathfrak{y} + (-(\mathfrak{x}\mathfrak{z})) = \mathfrak{x}\mathfrak{y} - \mathfrak{x}\mathfrak{z}.
$$

**定理 229:** 方程式

$$
\mathfrak{y}\mathfrak{u} = \mathfrak{x},
$$

(ここで $\mathfrak{x}, \mathfrak{y}$ は与えられており、

$$
\mathfrak{y} \neq \mathfrak{n}
$$

である)は、ちょうど一つの解 $\mathfrak{u}$ をもつ。

**証明:** 1) 解は高々一つである。なぜなら、

$$
\mathfrak{y}\mathfrak{u}_1 = \mathfrak{x} = \mathfrak{y}\mathfrak{u}_2
$$

から

$$
\mathfrak{n} = \mathfrak{y}\mathfrak{u}_1 - \mathfrak{y}\mathfrak{u}_2 = \mathfrak{y}(\mathfrak{u}_1 - \mathfrak{u}_2),
$$

が従い、したがって定理 221 により

$$
\mathfrak{n} = \mathfrak{u}_1 - \mathfrak{u}_2,
$$

$$
\mathfrak{u}_1 = \mathfrak{u}_2.
$$

となるからである。

2)

$$
\mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
$$

とすると、

$$
\mathrm{H} = \mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2 > 0,
$$

であり、

$$
\mathfrak{u} = \left[\frac{\mathrm{H}_1}{\mathrm{H}}, -\frac{\mathrm{H}_2}{\mathrm{H}}\right]\mathfrak{x}
$$

は、

$$
\mathfrak{y}\mathfrak{u} = \left([\mathrm{H}_1, \mathrm{H}_2]\left[\frac{\mathrm{H}_1}{\mathrm{H}}, -\frac{\mathrm{H}_2}{\mathrm{H}}\right]\right)\mathfrak{x} = \left[\frac{\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2}{\mathrm{H}}, \frac{-(\mathrm{H}_1\mathrm{H}_2) + \mathrm{H}_2\mathrm{H}_1}{\mathrm{H}}\right]\mathfrak{x} = [1, 0]\mathfrak{x} = \mathfrak{e}\mathfrak{x} = \mathfrak{x}.
$$

であるから一つの解である。

**定義 64:** 定理 229 の $\mathfrak{u}$ を $\frac{\mathfrak{x}}{\mathfrak{y}}$ と書く($\mathfrak{x}$ 割る $\mathfrak{y}$ と読む)。$\frac{\mathfrak{x}}{\mathfrak{y}}$ は $\mathfrak{x}$ を $\mathfrak{y}$ で割った商、または $\mathfrak{x}$ を $\mathfrak{y}$ で割る除法によって得られる数ともいう。

## § 4. 減法

**定理 230:**

$$
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
$$

**証明:**

$$
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{y} + (\mathfrak{x} - \mathfrak{y}) = \mathfrak{x}.
$$

**定理 231:**

$$
(\mathfrak{x} + \mathfrak{y}) - \mathfrak{y} = \mathfrak{x}.
$$

**証明:**

$$
\mathfrak{y} + \mathfrak{x} = \mathfrak{x} + \mathfrak{y}.
$$

**定理 232:**

$$
\mathfrak{x} - (\mathfrak{x} - \mathfrak{y}) = \mathfrak{y}.
$$

**証明:**

$$
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
$$

**定理 233:** $(\mathfrak{x} - \mathfrak{y}) - \mathfrak{z} = \mathfrak{x} - (\mathfrak{y} + \mathfrak{z})$.

**証明:**

$$
\begin{aligned}
(\mathfrak{y} + \mathfrak{z}) + ((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) &= ((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) + (\mathfrak{z} + \mathfrak{y}) \\
&= (((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) + \mathfrak{z}) + \mathfrak{y} = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
\end{aligned}
$$

**定理 234:** $(\mathfrak{x} + \mathfrak{y}) - \mathfrak{z} = \mathfrak{x} + (\mathfrak{y} - \mathfrak{z})$.

**証明:**

$$
(\mathfrak{x} + (\mathfrak{y} - \mathfrak{z})) + \mathfrak{z} = \mathfrak{x} + ((\mathfrak{y} - \mathfrak{z}) + \mathfrak{z}) = \mathfrak{x} + \mathfrak{y}.
$$

**定理 235:** $(\mathfrak{x} - \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} - (\mathfrak{y} - \mathfrak{z})$.

**証明:**

$$
((\mathfrak{x} - \mathfrak{y}) + \mathfrak{z}) + (\mathfrak{y} - \mathfrak{z}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} + (\mathfrak{y} - \mathfrak{z})) = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
$$

**定理 236:** $(\mathfrak{x} + \mathfrak{z}) - (\mathfrak{y} + \mathfrak{z}) = \mathfrak{x} - \mathfrak{y}$.

**証明:**

$$
(\mathfrak{x} - \mathfrak{y}) + (\mathfrak{y} + \mathfrak{z}) = ((\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + \mathfrak{z}.
$$

**定理 237:** $(\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} - \mathfrak{u}) = (\mathfrak{x} + \mathfrak{z}) - (\mathfrak{y} + \mathfrak{u})$.

**証明:**

$$
\begin{aligned}
((\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} - \mathfrak{u})) + (\mathfrak{y} + \mathfrak{u}) &= (\mathfrak{x} - \mathfrak{y}) + ((\mathfrak{z} - \mathfrak{u}) + (\mathfrak{u} + \mathfrak{y})) \\
&= (\mathfrak{x} - \mathfrak{y}) + (((\mathfrak{z} - \mathfrak{u}) + \mathfrak{u}) + \mathfrak{y}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} + \mathfrak{y}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{y} + \mathfrak{z}) \\
&= ((\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + \mathfrak{z}.
\end{aligned}
$$

**定理 238:** $(\mathfrak{x} - \mathfrak{y}) - (\mathfrak{z} - \mathfrak{u}) = (\mathfrak{x} + \mathfrak{u}) - (\mathfrak{y} + \mathfrak{z})$.

**証明:** 定理 237 と定理 236 により

$$
\begin{aligned}
((\mathfrak{x} + \mathfrak{u}) - (\mathfrak{y} + \mathfrak{z})) + (\mathfrak{z} - \mathfrak{u}) &= ((\mathfrak{x} + \mathfrak{u}) + \mathfrak{z}) - ((\mathfrak{y} + \mathfrak{z}) + \mathfrak{u}) \\
&= (\mathfrak{x} + (\mathfrak{u} + \mathfrak{z})) - (\mathfrak{y} + (\mathfrak{z} + \mathfrak{u})) = \mathfrak{x} - \mathfrak{y}.
\end{aligned}
$$

**定理 239:**

$$
\mathfrak{x} - \mathfrak{y} = \mathfrak{z} - \mathfrak{u}
$$

であるのは、

$$
\mathfrak{x} + \mathfrak{u} = \mathfrak{y} + \mathfrak{z}.
$$

のとき、またそのときに限る。

**証明:** 定理 213 と定理 238。

## § 5. 除法

**定理 240:**

$$
\mathfrak{y} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
$$

**証明:**

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{y}\,\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{x}.
$$

**定理 241:**

$$
\mathfrak{y} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}\mathfrak{y}}{\mathfrak{y}} = \mathfrak{x}.
$$

**証明:**

$$
\mathfrak{y}\mathfrak{x} = \mathfrak{x}\mathfrak{y}.
$$

**定理 242:**

$$
\mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}}{\frac{\mathfrak{x}}{\mathfrak{y}}} = \mathfrak{y}.
$$

**証明:**

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
$$

**定理 243:**

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
$$

ならば

$$
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}\mathfrak{z}}.
$$

**証明:**

$$
(\mathfrak{y}\mathfrak{z})\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}} = \frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}}(\mathfrak{z}\mathfrak{y}) = \left(\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}}\,\mathfrak{z}\right)\mathfrak{y} = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
$$

**定理 244:**

$$
\mathfrak{z} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}\mathfrak{y}}{\mathfrak{z}} = \mathfrak{x}\,\frac{\mathfrak{y}}{\mathfrak{z}}.
$$

**証明:**

$$
\left(\mathfrak{x}\,\frac{\mathfrak{y}}{\mathfrak{z}}\right)\mathfrak{z} = \mathfrak{x}\left(\frac{\mathfrak{y}}{\mathfrak{z}}\,\mathfrak{z}\right) = \mathfrak{x}\mathfrak{y}.
$$

**定理 245:**

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{z} = \frac{\mathfrak{x}}{\frac{\mathfrak{y}}{\mathfrak{z}}}.
$$

**証明:**

$$
\left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{z}\right)\frac{\mathfrak{y}}{\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}}\left(\mathfrak{z}\,\frac{\mathfrak{y}}{\mathfrak{z}}\right) = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
$$

**定理 246:**

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}\mathfrak{z}}{\mathfrak{y}\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}}.
$$

**証明:**

$$
\frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{y}\mathfrak{z}) = \left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}\right)\mathfrak{z} = \mathfrak{x}\mathfrak{z}.
$$

**定理 247:**

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}}{\mathfrak{y}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

**証明:**

$$
\begin{aligned}
\left(\frac{\mathfrak{x}}{\mathfrak{y}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}}\right)(\mathfrak{y}\mathfrak{u}) &= \frac{\mathfrak{x}}{\mathfrak{y}}\left(\frac{\mathfrak{z}}{\mathfrak{u}}(\mathfrak{u}\mathfrak{y})\right) = \frac{\mathfrak{x}}{\mathfrak{y}}\left(\left(\frac{\mathfrak{z}}{\mathfrak{u}}\,\mathfrak{u}\right)\mathfrak{y}\right) \\
&= \frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{z}\mathfrak{y}) = \frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{y}\mathfrak{z}) = \left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}\right)\mathfrak{z} = \mathfrak{x}\mathfrak{z}.
\end{aligned}
$$

**定理 248:**

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

ならば

$$
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\frac{\mathfrak{z}}{\mathfrak{u}}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}}.
$$

**証明:** 定理 247 と定理 246 により

$$
\frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{(\mathfrak{x}\mathfrak{u})\mathfrak{z}}{(\mathfrak{y}\mathfrak{z})\mathfrak{u}} = \frac{\mathfrak{x}(\mathfrak{u}\mathfrak{z})}{\mathfrak{y}(\mathfrak{z}\mathfrak{u})} = \frac{\mathfrak{x}}{\mathfrak{y}}.
$$

**定理 249:**

$$
\mathfrak{x} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{n}}{\mathfrak{x}} = \mathfrak{n}.
$$

**証明:**

$$
\mathfrak{x}\mathfrak{n} = \mathfrak{n}.
$$

**定理 250:**

$$
\mathfrak{x} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}}{\mathfrak{x}} = \mathfrak{e}.
$$

**証明:**

$$
\mathfrak{x}\mathfrak{e} = \mathfrak{x}.
$$

**定理 251:**

$$
\mathfrak{y} \neq \mathfrak{n},
$$

ならば、

$$
\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{e}
$$

であるのは、

$$
\mathfrak{x} = \mathfrak{y}.
$$

のとき、またそのときに限る。

**証明:** 1)

$$
\mathfrak{x} = \mathfrak{y},
$$

ならば、定理 250 により

$$
\frac{\mathfrak{x}}{\mathfrak{y}} = \frac{\mathfrak{y}}{\mathfrak{y}} = \mathfrak{e}.
$$

2)

$$
\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{e},
$$

ならば、定理 222 により

$$
\mathfrak{x} = \mathfrak{y}\mathfrak{e} = \mathfrak{y}.
$$

**定理 252:**

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

ならば、

$$
\frac{\mathfrak{x}}{\mathfrak{y}} = \frac{\mathfrak{z}}{\mathfrak{u}}
$$

であるのは、

$$
\mathfrak{x}\mathfrak{u} = \mathfrak{y}\mathfrak{z}.
$$

のとき、またそのときに限る。

**証明:**

$$
\mathfrak{z} = \mathfrak{n}
$$

の場合には主張は明らかである。

そうでない場合には、定理 248 により

$$
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\frac{\mathfrak{z}}{\mathfrak{u}}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}},
$$

であるから、定理 251 が主張を与える。

**定理 253:**

$$
\mathfrak{y} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{y}} = \frac{\mathfrak{x} + \mathfrak{z}}{\mathfrak{y}}.
$$

**証明:**

$$
\mathfrak{y}\left(\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{y}}\right) = \mathfrak{y} \cdot \frac{\mathfrak{x}}{\mathfrak{y}} + \mathfrak{y} \cdot \frac{\mathfrak{z}}{\mathfrak{y}} = \mathfrak{x} + \mathfrak{z}.
$$

**定理 254:**

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} + \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

**証明:** 定理 246 と定理 253 により

$$
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{u}} + \frac{\mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} + \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

**定理 255:**

$$
\mathfrak{y} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{y}} = \frac{\mathfrak{x} - \mathfrak{z}}{\mathfrak{y}}.
$$

**証明:**

$$
\mathfrak{y}\left(\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{y}}\right) = \mathfrak{y} \cdot \frac{\mathfrak{x}}{\mathfrak{y}} - \mathfrak{y} \cdot \frac{\mathfrak{z}}{\mathfrak{y}} = \mathfrak{x} - \mathfrak{z}.
$$

**定理 256:**

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

ならば

$$
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} - \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

**証明:** 定理 246 と定理 255 により

$$
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{u}} - \frac{\mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} - \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

## § 6. 共役数

**定義 65:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2]
$$

に対して

$$
\overline{\mathfrak{x}} = [\Xi_1, -\Xi_2]
$$

を共役複素数という。

**定理 257:** $\overline{\overline{\mathfrak{x}}} = \mathfrak{x}$.

**証明:** $[\Xi_1, -(-\Xi_2)] = [\Xi_1, \Xi_2]$.

**定理 258:**

$$
\overline{\mathfrak{x}} = \mathfrak{n}
$$

となるのは、

$$
\mathfrak{x} = \mathfrak{n}.
$$

のとき、またそのときに限る。

**証明:**

$$
\Xi_1 = 0, \quad -\Xi_2 = 0
$$

は

$$
\Xi_1 = 0, \quad \Xi_2 = 0.
$$

と同じことである。

**定理 259:**

$$
\overline{\mathfrak{x}} = \mathfrak{x}
$$

となるのは、$\mathfrak{x}$ が

$$
\mathfrak{x} = [\Xi, 0]
$$

の形を持つとき、またそのときに限る。

**証明:**

$$
\Xi_1 = \Xi_1, \quad -\Xi_2 = \Xi_2
$$

となるのは、

$$
\Xi_2 = 0.
$$

のとき、またそのときに限る。

**定理 260:** $\overline{\mathfrak{x} + \mathfrak{y}} = \overline{\mathfrak{x}} + \overline{\mathfrak{y}}$.

**証明:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
$$

に対して

$$
\begin{aligned}
\overline{\mathfrak{x} + \mathfrak{y}} &= [\Xi_1 + \mathrm{H}_1, -(\Xi_2 + \mathrm{H}_2)] = [\Xi_1 + \mathrm{H}_1, -\Xi_2 + (-\mathrm{H}_2)] \\
&= [\Xi_1, -\Xi_2] + [\mathrm{H}_1, -\mathrm{H}_2] = \overline{\mathfrak{x}} + \overline{\mathfrak{y}}.
\end{aligned}
$$

である。

**定理 261:** $\overline{\mathfrak{x}\mathfrak{y}} = \overline{\mathfrak{x}}\,\overline{\mathfrak{y}}$.

**証明:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
$$

に対して

$$
\begin{aligned}
\overline{\mathfrak{x}\mathfrak{y}} &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, -(\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)] \\
&= [\Xi_1\mathrm{H}_1 - (-\Xi_2)(-\mathrm{H}_2), \Xi_1(-\mathrm{H}_2) + (-\Xi_2)\mathrm{H}_1] \\
&= [\Xi_1, -\Xi_2][\mathrm{H}_1, -\mathrm{H}_2] = \overline{\mathfrak{x}}\,\overline{\mathfrak{y}}.
\end{aligned}
$$

である。

**定理 262:** $\overline{\mathfrak{x} - \mathfrak{y}} = \overline{\mathfrak{x}} - \overline{\mathfrak{y}}$.

**証明:**

$$
\mathfrak{x} = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}
$$

により、定理 260 から

$$
\overline{\mathfrak{x}} = \overline{\mathfrak{x} - \mathfrak{y}} + \overline{\mathfrak{y}},
$$

$$
\overline{\mathfrak{x} - \mathfrak{y}} = \overline{\mathfrak{x}} - \overline{\mathfrak{y}}.
$$

である。

**定理 263:**

$$
\mathfrak{y} \neq \mathfrak{n}
$$

に対して

$$
\overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)} = \frac{\overline{\mathfrak{x}}}{\overline{\mathfrak{y}}}.
$$

である。

**証明:**

$$
\mathfrak{x} = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}
$$

により、定理 261 から

$$
\overline{\mathfrak{x}} = \overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)}\,\overline{\mathfrak{y}};
$$

であり、定理 258 から

$$
\overline{\mathfrak{y}} \neq \mathfrak{n},
$$

であるから、

$$
\overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)} = \frac{\overline{\mathfrak{x}}}{\overline{\mathfrak{y}}}.
$$

## § 7. 絶対値

**定義 66:** $\sqrt{\zeta}$ は、定理 161 により一意に存在する

$$
\xi\xi = \zeta.
$$

の(正の)解 $\xi$ を表すものとする。

**定義 67:** $\sqrt{0} = 0$.

**定義 68:**

$$
|[\Xi_1, \Xi_2]| = \sqrt{\Xi_1\Xi_1 + \Xi_2\Xi_2}.
$$

($|\ |$ は「絶対値」と読む。)

**定理 264:**

$$
|\mathfrak{x}| \begin{cases} > 0 & (\mathfrak{x} \neq \mathfrak{n} \text{ のとき}), \\ = 0 & (\mathfrak{x} = \mathfrak{n} \text{ のとき}). \end{cases}
$$

**証明:** 定義 68、66 および 67。

**定理 265:**

$$
|[\Xi_1, \Xi_2]| \geqq |\Xi_1|,
$$

$$
|[\Xi_1, \Xi_2]| \geqq |\Xi_2|.
$$

**証明:**

$$
|[\Xi_1, \Xi_2]|\,|[\Xi_1, \Xi_2]| = \Xi_1\Xi_1 + \Xi_2\Xi_2 \begin{cases} \geqq \Xi_1\Xi_1 = |\Xi_1||\Xi_1|, \\ \geqq \Xi_2\Xi_2 = |\Xi_2||\Xi_2|. \end{cases}
$$

$$
\Xi\Xi \geqq \mathrm{H}\mathrm{H}, \quad \Xi \geqq 0, \quad \mathrm{H} \geqq 0
$$

から

$$
\Xi \geqq \mathrm{H},
$$

が従う。なぜなら、さもなければ

$$
0 \leqq \Xi < \mathrm{H},
$$

$$
\Xi\Xi < \mathrm{H}\mathrm{H}
$$

となるからである。これで定理 265 は証明された。

**定理 266:**

$$
[\Xi, 0][\Xi, 0] = [\mathrm{H}, 0][\mathrm{H}, 0], \quad \Xi \geqq 0, \quad \mathrm{H} \geqq 0
$$

から

$$
\Xi = \mathrm{H}.
$$

が従う。

**証明:**

$$
[\mathrm{Z}, 0][\mathrm{Z}, 0] = [\mathrm{Z}\mathrm{Z} - 0 \cdot 0, \mathrm{Z} \cdot 0 + 0 \cdot \mathrm{Z}] = [\mathrm{Z}\mathrm{Z}, 0]
$$

により、仮定から

$$
[\Xi\Xi, 0] = [\mathrm{H}\mathrm{H}, 0],
$$

$$
\Xi\Xi = \mathrm{H}\mathrm{H}.
$$

である。

$$
\Xi > 0,
$$

ならば

$$
\mathrm{H}\mathrm{H} = \Xi\Xi > 0,
$$

が従い、よって定理 161 から

$$
\mathrm{H} > 0,
$$

$$
\Xi = \mathrm{H}.
$$

である。

$$
\Xi = 0,
$$

ならば

$$
\mathrm{H}\mathrm{H} = \Xi\Xi = 0,
$$

$$
\mathrm{H} = 0 = \Xi.
$$

が従う。

**定理 267:** $[|\mathfrak{x}|, 0][|\mathfrak{x}|, 0] = \mathfrak{x}\overline{\mathfrak{x}}$.

**証明:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2]
$$

とおけば、

$$
\begin{aligned}
[|\mathfrak{x}|, 0][|\mathfrak{x}|, 0] &= [|\mathfrak{x}||\mathfrak{x}|, 0] = [\Xi_1\Xi_1 + \Xi_2\Xi_2, 0] \\
&= [\Xi_1\Xi_1 - \Xi_2(-\Xi_2), \Xi_1(-\Xi_2) + \Xi_2\Xi_1] = [\Xi_1, \Xi_2][\Xi_1, -\Xi_2] = \mathfrak{x}\overline{\mathfrak{x}}.
\end{aligned}
$$

である。

**定理 268:** $|\mathfrak{x}\mathfrak{y}| = |\mathfrak{x}||\mathfrak{y}|$.

**証明:** 定理 267 および定理 261 から

$$
\begin{aligned}
[|\mathfrak{x}\mathfrak{y}|, 0][|\mathfrak{x}\mathfrak{y}|, 0] &= (\mathfrak{x}\mathfrak{y})\overline{\mathfrak{x}\mathfrak{y}} = (\mathfrak{x}\mathfrak{y})(\overline{\mathfrak{x}}\,\overline{\mathfrak{y}}) = (\mathfrak{x}\overline{\mathfrak{x}})(\mathfrak{y}\overline{\mathfrak{y}}) \\
&= ([|\mathfrak{x}|, 0][|\mathfrak{x}|, 0])([|\mathfrak{y}|, 0][|\mathfrak{y}|, 0]) \\
&= ([|\mathfrak{x}|, 0][|\mathfrak{y}|, 0])([|\mathfrak{x}|, 0][|\mathfrak{y}|, 0]) \\
&= [|\mathfrak{x}||\mathfrak{y}| - 0 \cdot 0, |\mathfrak{x}| \cdot 0 + 0 \cdot |\mathfrak{y}|][|\mathfrak{x}||\mathfrak{y}| - 0 \cdot 0, |\mathfrak{x}| \cdot 0 + 0 \cdot |\mathfrak{y}|] \\
&= [|\mathfrak{x}||\mathfrak{y}|, 0][|\mathfrak{x}||\mathfrak{y}|, 0],
\end{aligned}
$$

であり、よって定理 266 から

$$
|\mathfrak{x}\mathfrak{y}| = |\mathfrak{x}||\mathfrak{y}|.
$$

**定理 269:**

$$
\mathfrak{y} \neq \mathfrak{n},
$$

ならば

$$
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| = \frac{|\mathfrak{x}|}{|\mathfrak{y}|}.
$$

である。

**証明:**

$$
|\mathfrak{y}| > 0,
$$

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x},
$$

であるから、定理 268 により

$$
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| |\mathfrak{y}| = |\mathfrak{x}|,
$$

$$
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| = \frac{|\mathfrak{x}|}{|\mathfrak{y}|}.
$$

**定理 270:**

$$
\mathfrak{x} + \mathfrak{y} = \mathfrak{e}
$$

から

$$
|\mathfrak{x}| + |\mathfrak{y}| \geqq 1.
$$

が従う。

**証明:**

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
$$

とすれば、定理 265 から

$$
|\mathfrak{x}| \geqq |\Xi_1| \geqq \Xi_1,
$$

$$
|\mathfrak{y}| \geqq |\mathrm{H}_1| \geqq \mathrm{H}_1,
$$

であり、よって

$$
|\mathfrak{x}| + |\mathfrak{y}| \geqq \Xi_1 + \mathrm{H}_1 = 1.
$$

**定理 271:** $|\mathfrak{x} + \mathfrak{y}| \leqq |\mathfrak{x}| + |\mathfrak{y}|$.

**証明:** 1)

$$
\mathfrak{x} + \mathfrak{y} = \mathfrak{n},
$$

ならば、主張の左辺は $0$ であり、したがって右辺 $\leqq$ が成り立つ。

2)

$$
\mathfrak{x} + \mathfrak{y} \neq \mathfrak{n},
$$

ならば、

$$
\frac{\mathfrak{x}}{\mathfrak{x} + \mathfrak{y}} + \frac{\mathfrak{y}}{\mathfrak{x} + \mathfrak{y}} = \frac{\mathfrak{x} + \mathfrak{y}}{\mathfrak{x} + \mathfrak{y}} = \mathfrak{e},
$$

により、定理 270 から

$$
\left|\frac{\mathfrak{x}}{\mathfrak{x} + \mathfrak{y}}\right| + \left|\frac{\mathfrak{y}}{\mathfrak{x} + \mathfrak{y}}\right| \geqq 1,
$$

であり、よって定理 269 から

$$
\frac{|\mathfrak{x}|}{|\mathfrak{x} + \mathfrak{y}|} + \frac{|\mathfrak{y}|}{|\mathfrak{x} + \mathfrak{y}|} \geqq 1,
$$

$$
|\mathfrak{x}| + |\mathfrak{y}| = |\mathfrak{x} + \mathfrak{y}|\left(\frac{|\mathfrak{x}|}{|\mathfrak{x} + \mathfrak{y}|} + \frac{|\mathfrak{y}|}{|\mathfrak{x} + \mathfrak{y}|}\right) \geqq |\mathfrak{x} + \mathfrak{y}|.
$$

である。

**定理 272:** $|-\mathfrak{x}| = |\mathfrak{x}|$.

**証明:** $(-\Xi_1)(-\Xi_1) + (-\Xi_2)(-\Xi_2) = \Xi_1\Xi_1 + \Xi_2\Xi_2$.

**定理 273:** $|\mathfrak{x} - \mathfrak{y}| \geqq ||\mathfrak{x}| - |\mathfrak{y}||$.

**証明:**

$$
\mathfrak{x} = \mathfrak{y} + (\mathfrak{x} - \mathfrak{y}),
$$

であるから、定理 271 により

$$
|\mathfrak{x}| \leqq |\mathfrak{y}| + |\mathfrak{x} - \mathfrak{y}|,
$$

$$
|\mathfrak{x} - \mathfrak{y}| \geqq |\mathfrak{x}| - |\mathfrak{y}|.
$$

である。ここで $\mathfrak{x}$ と $\mathfrak{y}$ を入れ替えれば、

$$
|\mathfrak{y} - \mathfrak{x}| \geqq |\mathfrak{y}| - |\mathfrak{x}|,
$$

が従い、よって定理 272 から

$$
|\mathfrak{x} - \mathfrak{y}| = |-(\mathfrak{y} - \mathfrak{x})| = |\mathfrak{y} - \mathfrak{x}| \geqq |\mathfrak{y}| - |\mathfrak{x}| = -(|\mathfrak{x}| - |\mathfrak{y}|).
$$

である。ところで、$|\mathrm{H}|$ は $\mathrm{H}$ か $-\mathrm{H}$ のいずれかであるから、

$$
\Xi \geqq \mathrm{H}, \quad \Xi \geqq -\mathrm{H}
$$

から

$$
\Xi \geqq |\mathrm{H}|.
$$

が従う。したがって

$$
|\mathfrak{x} - \mathfrak{y}| \geqq ||\mathfrak{x}| - |\mathfrak{y}||.
$$

である。

## § 8. 和と積

**定理 274:**

$$
x < y,
$$

ならば、$m \leqq x$ を $n \leqq y$ に一対一に対応させることはできない。

この § において、対応させるとは常に一対一に対応させることを意味する。

**証明:** $\mathfrak{M}$ を、すべての $y > x$ に対して主張が真であるような $x$ の集合とする。

I)

$$
1 < y,
$$

ならば、$m = 1$ を $n \leqq y$ に対応させることはできない。なぜなら、$m = 1$ に $n = 1$ が対応するならば、$n = y$ に対する $m$ が残らないし、$m = 1$ がある $n > 1$ に対応させられているならば、$n = 1$ に対する $m$ が残らないからである。

したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属し、

$$
x + 1 < y.
$$

であるとする。$m \leqq x + 1$ の $n \leqq y$ への対応が存在するとき、二つの場合を区別する。

α) $m = x + 1$ に $n = y$ が対応する場合。このとき $m \leqq x$ は $n \leqq y - 1$ に対応させられていることになるが、これは

$$
x < y - 1.
$$

のためにあり得ない。

β) $m = x + 1$ にある $n = n_0 < y$ が対応する場合。このとき、$n = y$ に対応する数を $m = m_0$ とすると、$m_0 < x + 1$ である。いま、$m \leqq x + 1$ の $n \leqq y$ への、次のように変更した対応を考える。

$$
\begin{cases}
m \neq m_0,\ m \neq x + 1 \text{ のときは従来どおりとする。} \\
m = m_0 \text{ には } n = n_0 \text{ を対応させる。} \\
m = x + 1 \text{ には } n = y \text{ を対応させる。}
\end{cases}
$$

このとき、先ほど α) で不可能であることが示された種類の対応が得られる。

したがって $x + 1$ は $\mathfrak{M}$ に属し、主張は証明された。

以下の定理 275 から 278 まで、および 280 から 286 までの証明は、付随する定義とともに、和についても積についても文字どおり同一のものとなるので、長い繰り返しを避けるため、これを一度だけ行い、中立的な記号 $\dotplus$ を選ぶ。これは一貫して $+$ を意味するか、または一貫して $\cdot$ を意味するものとする。さしあたり中立的な記号 $\mathop{\Large\dotplus}$ は、後に対応して二つの記号($+$ のときは $\Sigma$、$\cdot$ のときは $\Pi$)に分けられる。

この展開全体を通じて、定義されているとは、複素数として定義されていることを意味する。

**定理 275:** $x$ を固定し、$\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているとする。このとき、$n \leqq x$ に対して定義された

$$
\mathfrak{g}_x(n)
$$

(より詳しく書けば

$$
\mathfrak{g}_{x,\mathfrak{f}}(n),
$$

略記すれば

$$
\mathfrak{g}(n))
$$

で、次の性質をもつものがちょうど一つ存在する:

$$
\begin{aligned}
\mathfrak{g}_x(1) &= \mathfrak{f}(1), \\
\mathfrak{g}_x(n + 1) &= \mathfrak{g}_x(n) \dotplus \mathfrak{f}(n + 1) \quad (n < x \text{ のとき}).
\end{aligned}
$$

**証明:** 1) まず、このような $\mathfrak{g}_x(n)$ が高々一つしか存在しないことを示す。

$\mathfrak{g}(n)$ と $\mathfrak{h}(n)$ が要求された性質をもつとする。$\mathfrak{M}$ を、

$$
\mathfrak{g}(n) = \mathfrak{h}(n)
$$

を満たす $n \leqq x$ と、$n > x$ とからなる集合とする。

I) $\mathfrak{g}(1) = \mathfrak{f}(1) = \mathfrak{h}(1)$;

したがって 1 は $\mathfrak{M}$ に属する。

II) $n$ が $\mathfrak{M}$ に属するとする。このとき、

$$
n < x, \quad \mathfrak{g}(n) = \mathfrak{h}(n),
$$

であって、したがって

$$
\mathfrak{g}(n + 1) = \mathfrak{g}(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{h}(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{h}(n + 1),
$$

となり、$n + 1$ が $\mathfrak{M}$ に属するか、あるいは

$$
n \geqq x,
$$

であって、したがって

$$
n + 1 > x
$$

となり、$n + 1$ がやはり $\mathfrak{M}$ に属するかのいずれかである。

ゆえに $\mathfrak{M}$ はすべての正の整数の集合である。したがって、任意の $n \leqq x$ に対して

$$
\mathfrak{g}(n) = \mathfrak{h}(n),
$$

である。これが証明すべきことであった。

2) 次に、$\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているとき、各 $x$ に対して適合する $\mathfrak{g}_x(n)$ が存在することを示す。

$\mathfrak{M}$ を、これが真であるような $x$ の集合、すなわち、$\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているとき、1) によりちょうど一つの適合する $\mathfrak{g}_x(n)$ が存在するような $x$ の集合とする。

I) $x = 1$ に対しては、$\mathfrak{f}(1)$ が定義されているとき、

$$
\mathfrak{g}_x(1) = \mathfrak{f}(1)
$$

が求めるものとなる($n < 1$ が不可能であるため、第二の要求は課されないからである)。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、それは $n \leqq x$ に対して定義されているから、ここにちょうど一つの付随する $\mathfrak{g}_x(n)$ が存在する。いま、

$$
\mathfrak{g}_{x+1}(n) = \begin{cases}
\mathfrak{g}_x(n) & (n \leqq x \text{ のとき}), \\
\mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1) & (n = x + 1 \text{ のとき})
\end{cases}
$$

が $x + 1$ において求めるものとなる。なぜなら、第一に

$$
\mathfrak{g}_{x+1}(1) = \mathfrak{g}_x(1) = \mathfrak{f}(1).
$$

である。第二に、

$$
n < x
$$

に対しては($n + 1 \leqq x$ のため)

$$
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_x(n + 1) = \mathfrak{g}_x(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1),
$$

が成り立ち、一方

$$
n = x
$$

に対しては

$$
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1)
$$

である。したがって

$$
n < x + 1
$$

からは、いずれにせよ

$$
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1).
$$

が従う。

ゆえに $x + 1$ は $\mathfrak{M}$ に属し、$\mathfrak{M}$ はすべての正の整数を含む。

**定理 276:** $\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、付随する $\mathfrak{g}_x(n)$ と $\mathfrak{g}_{x+1}(n)$ に対して

$$
\mathfrak{g}_{x+1}(x + 1) = \mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1).
$$

が成り立つ。

**証明:** これは前の証明の 2)、II) における構成のなかに現れた。

**定義 69:** $\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているならば、

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{g}_x(x) \quad (= \mathfrak{g}_{x,\mathfrak{f}}(x)).
$$

とする。

$\dotplus$ が $+$ の意味をもつときは

$$
\sum_{n=1}^{x} \mathfrak{f}(n);
$$

と書き、$\dotplus$ が $\cdot$ の意味をもつときは

$$
\prod_{n=1}^{x} \mathfrak{f}(n).
$$

と書く。

($\Sigma$ は「和」と読み、$\Pi$ は「積」と読む。)

これらの記号においては、$n$ の代わりに、正の整数を表す他の任意の文字を用いてもよい。

**定理 277:** $\mathfrak{f}(1)$ が定義されているならば、

$$
\mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) = \mathfrak{f}(1).
$$

である。

**証明:** $\mathfrak{g}_1(1) = \mathfrak{f}(1)$。

**定理 278:** $\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1).
$$

である。

**証明:** 定理 276。

**定理 279:**

$$
\sum_{n=1}^{x} \mathfrak{x} = \mathfrak{x}[x, 0].
$$

**証明:** $\mathfrak{x}$ を固定し、$\mathfrak{M}$ をこれが成り立つ $x$ の集合とする。

I) 定理 277 により

$$
\sum_{n=1}^{1} \mathfrak{x} = \mathfrak{x} = \mathfrak{x}\mathfrak{e} = \mathfrak{x}[1, 0].
$$

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するならば、定理 278 から

$$
\sum_{n=1}^{x+1} \mathfrak{x} = \sum_{n=1}^{x} \mathfrak{x} + \mathfrak{x} = \mathfrak{x}[x, 0] + \mathfrak{x}[1, 0] = \mathfrak{x}([x, 0] + [1, 0]) = \mathfrak{x}[x + 1, 0].
$$

が従う。

したがって $x + 1$ は $\mathfrak{M}$ に属する。

ゆえに主張はすべての $x$ に対して成り立つ。

**定理 280:** $\mathfrak{f}(1)$ と $\mathfrak{f}(1 + 1)$ が定義されているならば、

$$
\mathop{\Large\dotplus}\limits_{n=1}^{1+1} \mathfrak{f}(n) = \mathfrak{f}(1) \dotplus \mathfrak{f}(1 + 1).
$$

である。

**証明:** 定理 278 と定理 277 により

$$
\mathop{\Large\dotplus}\limits_{n=1}^{1+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) \dotplus \mathfrak{f}(1 + 1) = \mathfrak{f}(1) \dotplus \mathfrak{f}(1 + 1).
$$

である。

**定理 281:** $\mathfrak{f}(n)$ が $n \leqq x + y$ に対して定義されているならば、

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+y} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n).
$$

である。

**証明:** $x$ を固定し、$\mathfrak{M}$ をこれが成り立つ $y$ の集合とする。

I) $\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、定理 278 と定理 277 により

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(x + n).
$$

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $y$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ が $n \leqq x + (y + 1)$ に対して定義されているならば、定理 278($x$ の代わりに $x + y$ に適用して)により

$$
\begin{aligned}
\mathop{\Large\dotplus}\limits_{n=1}^{x+(y+1)} \mathfrak{f}(n) &= \mathop{\Large\dotplus}\limits_{n=1}^{(x+y)+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x+y} \mathfrak{f}(n) \dotplus \mathfrak{f}((x + y) + 1) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n)\right) \dotplus \mathfrak{f}(x + (y + 1)) \\
&= \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \left(\mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n) \dotplus \mathfrak{f}(x + (y + 1))\right),
\end{aligned}
$$

であり、したがって定理 278($x$ の代わりに $y$、$\mathfrak{f}(n)$ の代わりに $\mathfrak{f}(x + n)$ に適用して)により

$$
= \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y+1} \mathfrak{f}(x + n).
$$

である。

したがって $y + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

**定理 282:** $\mathfrak{f}(n)$ と $\mathfrak{g}(n)$ が $n \leqq x$ に対して定義されているならば、

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n).
$$

である。

**証明:** $\mathfrak{M}$ をこれが成り立つ $x$ の集合とする。

I) $\mathfrak{f}(1)$ と $\mathfrak{g}(1)$ が定義されているならば、

$$
\mathop{\Large\dotplus}\limits_{n=1}^{1} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) = \mathfrak{f}(1) \dotplus \mathfrak{g}(1) = \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{g}(n).
$$

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ と $\mathfrak{g}(n)$ が $n \leqq x + 1$ に対して定義されているならば、

$$
\begin{aligned}
(\mathfrak{x} \dotplus \mathfrak{y}) \dotplus (\mathfrak{z} \dotplus \mathfrak{u}) &= ((\mathfrak{x} \dotplus \mathfrak{y}) \dotplus \mathfrak{z}) \dotplus \mathfrak{u} = (\mathfrak{z} \dotplus (\mathfrak{x} \dotplus \mathfrak{y})) \dotplus \mathfrak{u} \\
&= ((\mathfrak{z} \dotplus \mathfrak{x}) \dotplus \mathfrak{y}) \dotplus \mathfrak{u} = (\mathfrak{z} \dotplus \mathfrak{x}) \dotplus (\mathfrak{y} \dotplus \mathfrak{u}) = (\mathfrak{x} \dotplus \mathfrak{z}) \dotplus (\mathfrak{y} \dotplus \mathfrak{u}),
\end{aligned}
$$

を考慮して、

$$
\begin{aligned}
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) &= \mathop{\Large\dotplus}\limits_{n=1}^{x} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) \dotplus (\mathfrak{f}(x + 1) \dotplus \mathfrak{g}(x + 1)) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n)\right) \dotplus (\mathfrak{f}(x + 1) \dotplus \mathfrak{g}(x + 1)) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1)\right) \dotplus \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x + 1)\right) \\
&= \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n).
\end{aligned}
$$

である。

したがって $x + 1$ は $\mathfrak{M}$ に属し、主張は常に成り立つ。

**定理 283:** $s(n)$ は $n \leqq x$ を $m \leqq x$ に対応させるものとする。$\mathfrak{f}(n)$ は $n \leqq x$ に対して定義されているとする。このとき

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(s(n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n).
$$

である。

**証明:** 略記のため

$$
\mathfrak{f}(s(n)) = \mathfrak{g}(n)
$$

とおく。

$\mathfrak{M}$ を、主張

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n)
$$

が(すべての許される $s$ と $\mathfrak{f}$ に対して)真であるような $x$ の集合とする。

I)

$$
x = 1
$$

に対しては

$$
s(1) = 1,
$$

であるから、$\mathfrak{f}(1)$ が定義されているとき、

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathfrak{g}(1) = \mathfrak{f}(1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n).
$$

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$s(n)$ は $n \leqq x + 1$ を $m \leqq x + 1$ に対応させ、$\mathfrak{f}(n)$ は $n \leqq x + 1$ に対して定義されているとする。

1)

$$
s(x + 1) = x + 1,
$$

の場合、$s(n)$ は $n \leqq x$ を $m \leqq x$ に対応させる。このとき

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n),
$$

$$
\mathfrak{g}(x + 1) = \mathfrak{f}(x + 1),
$$

であるから、

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n).
$$

である。

2)

$$
s(x + 1) < x + 1, \quad s(1) = 1,
$$

の場合、$s(n)$ は $1 + 1 \leqq n \leqq x + 1$ なる $n$ を $1 + 1 \leqq m \leqq x + 1$ なる $m$ に対応させる。したがって $s(1 + n) - 1$ は $n \leqq x$ を $m \leqq x$ に対応させる。ゆえに

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(1 + n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(s(1 + n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + (s(1 + n) - 1)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + n),
$$

であり、したがって定理 281 により

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n) = \mathfrak{g}(1) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(1 + n) = \mathfrak{f}(1) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + n) = \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n).
$$

である。

3)

$$
s(x + 1) < x + 1, \quad s(1) > 1,
$$

の場合、

$$
s(1) = a
$$

とおき、$b$ を

$$
1 \leqq b \leqq x + 1, \quad s(b) = 1
$$

から定める。このとき

$$
a > 1, \quad b > 1.
$$

である。

α)

$$
a < x + 1.
$$

とする。このとき、

$$
s_1(n) = \begin{cases}
1 & (n = 1 \text{ のとき}), \\
a & (n = b \text{ のとき}), \\
s(n) & (1 < n \leqq x + 1,\ n \neq b \text{ のとき})
\end{cases}
$$

も

$$
s_2(n) = \begin{cases}
a & (n = 1 \text{ のとき}), \\
1 & (n = a \text{ のとき}), \\
n & (1 < n \leqq x + 1,\ n \neq a \text{ のとき})
\end{cases}
$$

も、いずれも $n \leqq x + 1$ を $m \leqq x + 1$ に対応させる。

さて、

$$
s(n) = s_2(s_1(n)) \quad (n \leqq x + 1 \text{ のとき}).
$$

である。なぜなら、$s_2(s_1(n))$ によって

$$
\begin{aligned}
&1 \text{ は } 1 \text{ を経て } a = s(1) \text{ に移り}, \\
&b \text{ は } a \text{ を経て } 1 = s(b) \text{ に移り}, \\
&\text{他のすべての } n \leqq x + 1 \text{ は } s(n) \text{ を経て } s(n) \text{ に移る}.
\end{aligned}
$$

と移るからである。

$s_1(n)$ は 1 を、$s_2(n)$ は $x + 1$ を不変にとどめる。したがって 2) と 1) により

$$
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(s(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_2(s_1(n))) = \sum_{n=1}^{x+1} \mathfrak{f}(s_1(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
$$

である。

β)

$$
a = x + 1, \quad b < x + 1.
$$

とする。このとき

$$
s_3(n) = \begin{cases}
b & (n = 1 \text{ のとき}), \\
1 & (n = b \text{ のとき}), \\
n & (1 < n \leqq x + 1,\ n \neq b \text{ のとき})
\end{cases}
$$

は $n \leqq x + 1$ を $m \leqq x + 1$ に対応させる。さらに

$$
s(n) = s_1(s_3(n)) \quad (n \leqq x + 1 \text{ のとき}).
$$

である。なぜなら、$s_1(s_3(n))$ によって

$$
\begin{aligned}
&1 \text{ は } b \text{ を経て } a = s(1) \text{ に移り}, \\
&b \text{ は } 1 \text{ を経て } 1 = s(b) \text{ に移り}, \\
&\text{他のすべての } n \leqq x + 1 \text{ は } n \text{ を経て } s(n) \text{ に移る}.
\end{aligned}
$$

と移るからである。

$s_3(n)$ は $x + 1$ を不変にとどめる。したがって 1) と 2) により

$$
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(s(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_1(s_3(n))) = \sum_{n=1}^{x+1} \mathfrak{f}(s_3(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
$$

である。

γ)

$$
a = b = x + 1.
$$

とする。$x = 1$ ならば

$$
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(n)
$$

は自明である。

$x > 1$ ならば、

$$
s_4(n) = \begin{cases}
1 & (n = 1 \text{ のとき}), \\
x + 1 & (n = x + 1 \text{ のとき}), \\
s(n) & (1 < n < x + 1 \text{ のとき})
\end{cases}
$$

は $n \leqq x + 1$ を $m \leqq x + 1$ に対応させる。それゆえ 1) により

$$
\begin{aligned}
\sum_{n=1}^{x+1} \mathfrak{g}(n) &= \sum_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x+1) = \left(\mathfrak{g}(1) \dotplus \sum_{n=1}^{x-1} \mathfrak{g}(n+1)\right) \dotplus \mathfrak{g}(x+1) \\
&= \mathfrak{g}(1) \dotplus \left(\sum_{n=1}^{x-1} \mathfrak{g}(n+1) \dotplus \mathfrak{g}(x+1)\right) \\
&= \left(\mathfrak{g}(x+1) \dotplus \sum_{n=1}^{x-1} \mathfrak{g}(n+1)\right) \dotplus \mathfrak{g}(1) \\
&= \left(\mathfrak{f}(s(x+1)) \dotplus \sum_{n=1}^{x-1} \mathfrak{f}(s(n+1))\right) \dotplus \mathfrak{f}(s(1)) \\
&= \left(\mathfrak{f}(1) \dotplus \sum_{n=1}^{x-1} \mathfrak{f}(s_4(n+1))\right) \dotplus \mathfrak{f}(x+1) \\
&= \left(\mathfrak{f}(s_4(1)) \dotplus \sum_{n=1}^{x-1} \mathfrak{f}(s_4(n+1))\right) \dotplus \mathfrak{f}(s_4(x+1)) \\
&= \sum_{n=1}^{x} \mathfrak{f}(s_4(n)) \dotplus \mathfrak{f}(s_4(x+1)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_4(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
\end{aligned}
$$

である。

したがって $x + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

定義 70 および定理 284 から定理 286 までにおいては、例外として、ラテン文字は(必ずしも正とは限らない)整数を表す。

**定義 70:**

$$
y \leqq x,
$$

とし、$\mathfrak{f}(n)$ が

$$
y \leqq n \leqq x
$$

に対して定義されているとする。このとき

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1).
$$

とする。

$n$ の代わりに、整数を表す他の任意の文字を用いてもよい。

次のことに注意せよ:

$$
x + 1 > y; \quad y \leqq (n + y) - 1 \leqq x \quad (1 \leqq n \leqq (x + 1) - y \text{ のとき});
$$

さらに、$y = 1$ に対して定義 70 が(そうあるべきように)定義 69 と一致していることにも注意せよ。

**定理 284:**

$$
y \leqq u < x;
$$

とし、$\mathfrak{f}(n)$ は

$$
y \leqq n \leqq x
$$

に対して定義されているとする。このとき

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=u+1}^{x} \mathfrak{f}(n).
$$

である。

**証明:** 定義 70 と定理 281 により

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1) = \sum_{n=1}^{(u+1)-y} \mathfrak{f}((n + y) - 1) \dotplus \sum_{n=1}^{x-u} \mathfrak{f}(((((u + 1) - y) + n) + y) - 1);
$$

である。なぜなら

$$
((u + 1) - y) + (x - u) = (x + (-u)) + ((u + 1) + (-y)) = (x + ((-u) + (u + 1))) + (-y) = (x + 1) - y.
$$

だからである。

さて

$$
(((u + 1) - y) + n) + y = ((u + 1) - y) + (y + n) = (((u + 1) - y) + y) + n = n + (u + 1),
$$

であるから、定義 70 により

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=1}^{(x+1)-(u+1)} \mathfrak{f}((n + (u + 1)) - 1) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=u+1}^{x} \mathfrak{f}(n).
$$

である。

**定理 285:**

$$
y \leqq x,
$$

とし、$\mathfrak{f}(n)$ が

$$
y \leqq n \leqq x
$$

に対して定義されているとする。このとき

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y+v}^{x+v} \mathfrak{f}(n - v).
$$

である。

**証明:** 定義 70 により、主張の左辺は

$$
= \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1),
$$

であり、右辺は($y + v \leqq n \leqq x + v$ に対して $y \leqq n - v \leqq x$ であることに注意せよ)

$$
= \sum_{n=1}^{((x+v)+1)-(y+v)} \mathfrak{f}(((n + (y + v)) - 1) - v);
$$

である。ここで

$$
((x + v) + 1) - (y + v) = (1 + (x + v)) + ((-v) + (-y)) = (1 + ((x + v) + (-v))) + (-y) = (1 + x) - y = (x + 1) - y
$$

かつ

$$
\begin{aligned}
((n + (y + v)) - 1) - v &= (n + (y + v)) - (1 + v) = ((n + y) + v) + (-v + (-1)) \\
&= (((n + y) + v) + (-v)) + (-1) = ((n + y) + (v + (-v))) - 1 = (n + y) - 1.
\end{aligned}
$$

である。

**定理 286:**

$$
y \leqq x,
$$

とし、$\mathfrak{f}(n)$ が

$$
y \leqq n \leqq x
$$

に対して定義されているとする。$s(n)$ は $y \leqq n \leqq x$ なる $n$ を $y \leqq m \leqq x$ なる $m$ に対応させるものとする。このとき

$$
\sum_{n=y}^{x} \mathfrak{f}(s(n)) = \sum_{n=y}^{x} \mathfrak{f}(n).
$$

である。

**証明:**

$$
s_1(n) = s((n + y) - 1) - (y - 1)
$$

は、正の $n \leqq (x + 1) - y$ を正の $m \leqq (x + 1) - y$ に対応させる。ゆえに定理 283 により

$$
\begin{aligned}
\sum_{n=y}^{x} \mathfrak{f}(s(n)) &= \sum_{n=1}^{(x+1)-y} \mathfrak{f}(s((n + y) - 1)) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}(s_1(n) + (y - 1)) \\
&= \sum_{n=1}^{(x+1)-y} \mathfrak{f}(n + (y - 1)) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1) = \sum_{n=y}^{x} \mathfrak{f}(n).
\end{aligned}
$$

である。

なお、

$$
\sum_{n=y}^{x} \mathfrak{f}(n)
$$

の代わりに、くだけた書き方

$$
\mathfrak{f}(y) + \mathfrak{f}(y + 1) + \cdots + \mathfrak{f}(x)
$$

もよく用いられる(積についても同様である)。しかし、例えば

$$
\mathfrak{f}(1) + \mathfrak{f}(1 + 1) + \mathfrak{f}((1 + 1) + 1) + \mathfrak{f}(((1 + 1) + 1) + 1),
$$

言い換えれば

$$
\mathfrak{a} + \mathfrak{b} + \mathfrak{c} + \mathfrak{d}
$$

(これは定義により古い加法に帰着し、

$$
((\mathfrak{a} + \mathfrak{b}) + \mathfrak{c}) + \mathfrak{d}
$$

を意味する)は完全に正当であり、また例えば

$$
\mathfrak{abcdfghiklmopqrstuvwxyz}.
$$

もそうである。

また、例えば

$$
\mathfrak{a} - \mathfrak{b} + \mathfrak{c}
$$

を

$$
\mathfrak{a} + (-\mathfrak{b}) + \mathfrak{c}
$$

の意味で書いてもさしつかえない。なぜなら、いずれにせよ

$$
\mathfrak{f}(1) + \mathfrak{f}(1 + 1) + \mathfrak{f}((1 + 1) + 1)
$$

において

$$
\mathfrak{f}(1) = \mathfrak{a}, \quad \mathfrak{f}(1 + 1) = -\mathfrak{b}, \quad \mathfrak{f}((1 + 1) + 1) = \mathfrak{c}
$$

としたものが意味されているからである。

これ以後、小文字のラテン文字は再び正の整数を表す。

**定理 287:** $\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているならば、

$$
\left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| \leqq \Xi,
$$

$$
\sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] = [\Xi, 0].
$$

となる $\Xi$ が存在する。

**証明:** $\mathfrak{M}$ を、(任意の $\mathfrak{f}(n)$ に対して)このような $\Xi$ が存在する $x$ の集合とする。

I) $\mathfrak{f}(1)$ が定義されているならば、

$$
\left| \sum_{n=1}^{1} \mathfrak{f}(n) \right| = |\mathfrak{f}(1)|,
$$

$$
\sum_{n=1}^{1} [|\mathfrak{f}(n)|, 0] = [|\mathfrak{f}(1)|, 0];
$$

であるから、

$$
\Xi = |\mathfrak{f}(1)|
$$

が $x = 1$ において求めるものとなる。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、

$$
\left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| \leqq \Xi_1,
$$

$$
\sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] = [\Xi_1, 0].
$$

となる $\Xi_1$ が存在する。

定理 278 と定理 271 により

$$
\left| \sum_{n=1}^{x+1} \mathfrak{f}(n) \right| = \left| \sum_{n=1}^{x} \mathfrak{f}(n) + \mathfrak{f}(x + 1) \right| \leqq \left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| + |\mathfrak{f}(x + 1)| \leqq \Xi_1 + |\mathfrak{f}(x + 1)|,
$$

であるから、

$$
\Xi = \Xi_1 + |\mathfrak{f}(x + 1)|
$$

とおけば、

$$
\left| \sum_{n=1}^{x+1} \mathfrak{f}(n) \right| \leqq \Xi.
$$

である。

他方、定理 278 により

$$
\sum_{n=1}^{x+1} [|\mathfrak{f}(n)|, 0] = \sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] + [|\mathfrak{f}(x + 1)|, 0] = [\Xi_1, 0] + [|\mathfrak{f}(x + 1)|, 0] = [\Xi_1 + |\mathfrak{f}(x + 1)|, 0 + 0] = [\Xi, 0].
$$

である。

したがって $\Xi$ は $x + 1$ において求めるものとなる。ゆえに $x + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

**定理 288:** $\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているならば、

$$
\left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right|, 0 \right] = \prod_{n=1}^{x} [|\mathfrak{f}(n)|, 0].
$$

である。

**証明:** $\mathfrak{M}$ をこれが成り立つ $x$ の集合とする。

I) $\mathfrak{f}(1)$ が定義されているならば、

$$
\left[ \left| \prod_{n=1}^{1} \mathfrak{f}(n) \right|, 0 \right] = [|\mathfrak{f}(1)|, 0] = \prod_{n=1}^{1} [|\mathfrak{f}(n)|, 0].
$$

である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。$\mathfrak{f}(n)$ が $n \leqq x + 1$ に対して定義されているならば、定理 278 と定理 268 により

$$
\begin{aligned}
\prod_{n=1}^{x+1} [|\mathfrak{f}(n)|, 0] &= \prod_{n=1}^{x} [|\mathfrak{f}(n)|, 0] \cdot [|\mathfrak{f}(x + 1)|, 0] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right|, 0 \right] \cdot [|\mathfrak{f}(x + 1)|, 0] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot |\mathfrak{f}(x + 1)| - 0 \cdot 0,\ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot 0 + 0 \cdot |\mathfrak{f}(x + 1)| \right] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot |\mathfrak{f}(x + 1)|, 0 \right] = \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \cdot \mathfrak{f}(x + 1) \right|, 0 \right] \\
&= \left[ \left| \prod_{n=1}^{x+1} \mathfrak{f}(n) \right|, 0 \right],
\end{aligned}
$$

である。したがって $x + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

**定理 289:** $\mathfrak{f}(n)$ が $n \leqq x$ に対して定義されているならば、

$$
\prod_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{n}
$$

となるのは、

$$
\mathfrak{f}(n) = \mathfrak{n}
$$

となる $n \leqq x$ が存在するとき、またそのときに限る。

**証明:** $\mathfrak{M}$ をこれが成り立つ $x$ の集合とする。

I)

$$
\prod_{n=1}^{1} \mathfrak{f}(n) = \mathfrak{n}
$$

は

$$
\mathfrak{f}(1) = \mathfrak{n}
$$

と同一である。したがって 1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するとする。

$$
\prod_{n=1}^{x+1} \mathfrak{f}(n) = \mathfrak{n}
$$

は

$$
\prod_{n=1}^{x} \mathfrak{f}(n) \cdot \mathfrak{f}(x + 1) = \mathfrak{n};
$$

を意味する。定理 221 により、このためには

$$
\prod_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{n} \quad \text{または} \quad \mathfrak{f}(x + 1) = \mathfrak{n},
$$

が必要かつ十分であり、したがって($x$ が $\mathfrak{M}$ に属するから)

$$
\mathfrak{f}(n) = \mathfrak{n} \quad (\text{ある } n \leqq x \text{ または } n = x + 1 \text{ のとき}).
$$

が必要かつ十分である。

ゆえに $x + 1$ は $\mathfrak{M}$ に属し、定理は証明された。

## § 9. 冪

この § では、小さいラテン文字は整数を表すものとする。

**定義 71:**

$$
\mathfrak{x}^x = \begin{cases}
\displaystyle\prod_{n=1}^{x} \mathfrak{x} & (x > 0 \text{ のとき}), \\
\mathfrak{e} & (\mathfrak{x} \neq \mathfrak{n},\ x = 0 \text{ のとき}), \\
\dfrac{\mathfrak{e}}{\mathfrak{x}^{|x|}} & (\mathfrak{x} \neq \mathfrak{n},\ x < 0 \text{ のとき}).
\end{cases}
$$

(読み方:$\mathfrak{x}$ の $x$ 乗。)したがって $\mathfrak{x}^x$ が定義されないのは、

$$
\mathfrak{x} = \mathfrak{n}, \quad x \leqq 0
$$

の場合だけである。

$$
\mathfrak{x} \neq \mathfrak{n}, \quad x < 0
$$

に対しては、定義 71 の第一行と定理 289 により

$$
\mathfrak{x}^{|x|} \neq \mathfrak{n}
$$

であり、したがってそのとき $\frac{\mathfrak{e}}{\mathfrak{x}^{|x|}}$ が意味をもつことに注意せよ。

**定理 290:**

$$
\mathfrak{x} \neq \mathfrak{n}
$$

に対して

$$
\mathfrak{x}^x \neq \mathfrak{n}
$$

である。

**証明:** $x > 0$ に対してはこれは定理 289 から従い、$x = 0$ に対しては定義から、$x < 0$ に対しては

$$
\mathfrak{x}^x \mathfrak{x}^{|x|} \neq \mathfrak{n}
$$

から従う。

**定理 291:** $\mathfrak{x}^1 = \mathfrak{x}$.

**証明:**

$$
\mathfrak{x}^1 = \prod_{n=1}^{1} \mathfrak{x} = \mathfrak{x}.
$$

**定理 292:**

$$
x > 0
$$

または

$$
\mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}
$$

とする。このとき

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x
$$

である。

**前注:** いずれにせよ両辺は意味をもつ。なぜなら $x \leqq 0$ のときは

$$
\mathfrak{x}\mathfrak{y} \neq \mathfrak{n}
$$

だからである。

**証明:** 1) $\mathfrak{x}$、$\mathfrak{y}$ を固定し、

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x
$$

をみたす $x > 0$ の集合を $\mathfrak{M}$ とする。

I) 定理 291 により

$$
(\mathfrak{x}\mathfrak{y})^1 = \mathfrak{x}\mathfrak{y} = \mathfrak{x}^1 \mathfrak{y}^1
$$

であるから、1 は $\mathfrak{M}$ に属する。

II) $x$ が $\mathfrak{M}$ に属するならば、

$$
\begin{aligned}
(\mathfrak{x}\mathfrak{y})^{x+1} &= \prod_{n=1}^{x+1} (\mathfrak{x}\mathfrak{y}) = \prod_{n=1}^{x} (\mathfrak{x}\mathfrak{y}) \cdot (\mathfrak{x}\mathfrak{y}) = (\mathfrak{x}^x \mathfrak{y}^x)(\mathfrak{x}\mathfrak{y}) = (\mathfrak{x}^x \mathfrak{x})(\mathfrak{y}^x \mathfrak{y}) \\
&= \left(\prod_{n=1}^{x} \mathfrak{x} \cdot \mathfrak{x}\right)\left(\prod_{n=1}^{x} \mathfrak{y} \cdot \mathfrak{y}\right) = \prod_{n=1}^{x+1} \mathfrak{x} \cdot \prod_{n=1}^{x+1} \mathfrak{y} = \mathfrak{x}^{x+1} \mathfrak{y}^{x+1}
\end{aligned}
$$

であり、したがって $x + 1$ は $\mathfrak{M}$ に属する。

したがって $x > 0$ に対してつねに

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x
$$

である。

2)

$$
x = 0, \quad \mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}
$$

とする。このとき

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{e} = \mathfrak{e}\mathfrak{e} = \mathfrak{x}^x \mathfrak{y}^x
$$

である。

3)

$$
x < 0, \quad \mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}
$$

とする。1) により

$$
(\mathfrak{x}\mathfrak{y})^{|x|} = \mathfrak{x}^{|x|} \mathfrak{y}^{|x|},
$$

$$
\frac{\mathfrak{e}}{(\mathfrak{x}\mathfrak{y})^{|x|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|} \mathfrak{y}^{|x|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|}} \cdot \frac{\mathfrak{e}}{\mathfrak{y}^{|x|}},
$$

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
$$

**定理 293:** $\mathfrak{e}^x = \mathfrak{e}$.

**証明:** 定理 292 により

$$
\mathfrak{e}^x \mathfrak{e} = \mathfrak{e}^x = (\mathfrak{e}\mathfrak{e})^x = \mathfrak{e}^x \mathfrak{e}^x,
$$

$$
\mathfrak{n} = \mathfrak{e}^x \mathfrak{e}^x - \mathfrak{e}^x \mathfrak{e} = \mathfrak{e}^x (\mathfrak{e}^x - \mathfrak{e}),
$$

したがって(定理 290 と定理 221 により)

$$
\mathfrak{e}^x - \mathfrak{e} = \mathfrak{n},
$$

$$
\mathfrak{e}^x = \mathfrak{e}.
$$

**定理 294:**

$$
x > 0, \quad y > 0
$$

または

$$
\mathfrak{x} \neq \mathfrak{n}
$$

とする。このとき

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^{x+y}
$$

である。

**証明:** 1)

$$
x > 0, \quad y > 0
$$

とする。このとき定理 281 により

$$
\mathfrak{x}^x \mathfrak{x}^y = \prod_{n=1}^{x} \mathfrak{x} \cdot \prod_{n=1}^{y} \mathfrak{x} = \prod_{n=1}^{x+y} \mathfrak{x} = \mathfrak{x}^{x+y}.
$$

2)

$$
\mathfrak{x} \neq \mathfrak{n}
$$

とし、かつ

$$
x > 0, \quad y > 0
$$

が同時には成り立たないとする。

α)

$$
x < 0, \quad y < 0
$$

とする。このとき 1) により

$$
\mathfrak{x}^{|x|} \mathfrak{x}^{|y|} = \mathfrak{x}^{|x|+|y|} = \mathfrak{x}^{|x+y|},
$$

$$
\mathfrak{x}^x \mathfrak{x}^y = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|}} \cdot \frac{\mathfrak{e}}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|} \mathfrak{x}^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x+y|}} = \mathfrak{x}^{x+y}.
$$

β)

$$
x > 0, \quad y < 0
$$

とする。このとき

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^x \frac{\mathfrak{e}}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}}.
$$

A)

$$
x > |y|
$$

に対しては、1) により

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{x}^{|y|} \mathfrak{x}^{x-|y|}}{\mathfrak{x}^{|y|}} = \mathfrak{x}^{x-|y|} = \mathfrak{x}^{x+y}.
$$

B)

$$
x = |y|
$$

に対しては、

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \mathfrak{e} = \mathfrak{x}^0 = \mathfrak{x}^{x+y}.
$$

C)

$$
x < |y|
$$

に対しては、1) により

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \mathfrak{x}^x \frac{\mathfrak{e}}{\mathfrak{x}^x \mathfrak{x}^{|y|-x}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|y|-x}} = \mathfrak{x}^{x-|y|} = \mathfrak{x}^{x+y}.
$$

γ)

$$
x < 0, \quad y > 0
$$

とする。このとき β) により

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^y \mathfrak{x}^x = \mathfrak{x}^{y+x} = \mathfrak{x}^{x+y}.
$$

δ)

$$
x = 0
$$

とする。このとき

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{e} \mathfrak{x}^y = \mathfrak{x}^y = \mathfrak{x}^{0+y} = \mathfrak{x}^{x+y}.
$$

ε)

$$
x \neq 0, \quad y = 0
$$

とする。このとき δ) により

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^y \mathfrak{x}^x = \mathfrak{x}^{y+x} = \mathfrak{x}^{x+y}.
$$

**定理 295:**

$$
\mathfrak{x} \neq \mathfrak{n}
$$

に対して

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^y} = \mathfrak{x}^{x-y}
$$

である。

**証明:** 定理 294 により

$$
\mathfrak{x}^{x-y} \mathfrak{x}^y = \mathfrak{x}^{(x-y)+y} = \mathfrak{x}^x;
$$

定理 290 により

$$
\mathfrak{x}^y \neq \mathfrak{n}
$$

であるから、

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^y} = \mathfrak{x}^{x-y}.
$$

**定理 296:**

$$
\mathfrak{x} \neq \mathfrak{n}
$$

に対して

$$
\frac{\mathfrak{e}}{\mathfrak{x}^x} = \mathfrak{x}^{-x}
$$

である。

**証明:** 定理 295 により

$$
\frac{\mathfrak{e}}{\mathfrak{x}^x} = \frac{\mathfrak{x}^0}{\mathfrak{x}^x} = \mathfrak{x}^{0-x} = \mathfrak{x}^{-x}.
$$

**定理 297:**

$$
x > 0, \quad y > 0
$$

または

$$
\mathfrak{x} \neq \mathfrak{n}
$$

とする。このとき

$$
(\mathfrak{x}^x)^y = \mathfrak{x}^{xy}
$$

である。

**証明:** 1)

$$
\mathfrak{x} = \mathfrak{n}, \quad x > 0, \quad y > 0
$$

とする。このとき定理 289 により

$$
(\mathfrak{x}^x)^y = (\mathfrak{n}^x)^y = \mathfrak{n}^y = \mathfrak{n} = \mathfrak{n}^{xy} = \mathfrak{x}^{xy}.
$$

2)

$$
\mathfrak{x} \neq \mathfrak{n}
$$

とする。

a) $\mathfrak{x}$、$x$ を固定し、

$$
(\mathfrak{x}^x)^y = \mathfrak{x}^{xy}
$$

をみたす $y > 0$ の集合を $\mathfrak{M}$ とする。

I) $(\mathfrak{x}^x)^1 = \mathfrak{x}^x = \mathfrak{x}^{x \cdot 1}$;

したがって 1 は $\mathfrak{M}$ に属する。

II) $y$ が $\mathfrak{M}$ に属するとする。このとき定理 294 により

$$
(\mathfrak{x}^x)^{y+1} = (\mathfrak{x}^x)^y (\mathfrak{x}^x)^1 = \mathfrak{x}^{xy} \mathfrak{x}^x = \mathfrak{x}^{xy+x} = \mathfrak{x}^{x(y+1)}
$$

であり、したがって $y + 1$ は $\mathfrak{M}$ に属する。

したがって $y > 0$ に対して主張は正しい。

b)

$$
y = 0
$$

とする。このとき

$$
(\mathfrak{x}^x)^y = \mathfrak{e} = \mathfrak{x}^{xy}.
$$

c)

$$
y < 0
$$

とする。このとき a) により

$$
(\mathfrak{x}^x)^{|y|} = \mathfrak{x}^{x|y|},
$$

したがって定理 296 と a) により

$$
(\mathfrak{x}^x)^y = \frac{\mathfrak{e}}{(\mathfrak{x}^x)^{-y}} = \frac{\mathfrak{e}}{(\mathfrak{x}^x)^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{x|y|}} = \mathfrak{x}^{-(x|y|)} = \mathfrak{x}^{xy}.
$$

## § 10. 実数の埋め込み

**定理 298:**

$$
\begin{aligned}
[\Xi + H, 0] &= [\Xi, 0] + [H, 0]; \\
[\Xi - H, 0] &= [\Xi, 0] - [H, 0]; \\
[\Xi H, 0] &= [\Xi, 0][H, 0]; \\
\left[\frac{\Xi}{H}, 0\right] &= \frac{[\Xi, 0]}{[H, 0]}, \quad (H \neq 0 \text{ のとき}); \\
[-\Xi, 0] &= -[\Xi, 0]; \\
|[\Xi, 0]| &= |\Xi|.
\end{aligned}
$$

**証明:** 1)

$$
[\Xi, 0] + [H, 0] = [\Xi + H, 0 + 0] = [\Xi + H, 0].
$$

2)

$$
[\Xi, 0] - [H, 0] = [\Xi - H, 0 - 0] = [\Xi - H, 0].
$$

3)

$$
[\Xi, 0][H, 0] = [\Xi H - 0 \cdot 0, \Xi \cdot 0 + 0 \cdot H] = [\Xi H, 0].
$$

4) 3) により、$H \neq 0$ ならば

$$
[H, 0]\left[\frac{\Xi}{H}, 0\right] = \left[H \cdot \frac{\Xi}{H}, 0\right] = [\Xi, 0],
$$

$$
\frac{[\Xi, 0]}{[H, 0]} = \left[\frac{\Xi}{H}, 0\right].
$$

5)

$$
-[\Xi, 0] = [-\Xi, -0] = [-\Xi, 0].
$$

6)

$$
|\Xi| = \sqrt{|\Xi|\,|\Xi|} = \sqrt{\Xi\Xi} = \sqrt{\Xi\Xi + 0 \cdot 0} = |[\Xi, 0]|.
$$

**定理 299:** $[x, 0]$ の形の複素数は、1 の代わりに $[1, 0]$ をとり、

$$
[x, 0]' = [x', 0]
$$

と置くならば、自然数の五つの公理をみたす。

**証明:** $[x, 0]$ の集合を $[\mathfrak{Z}]$ とする。

1) $[1, 0]$ は $[\mathfrak{Z}]$ に属する。

2) $[x, 0]$ とともに $[x, 0]'$ も $[\mathfrak{Z}]$ に存在する。

3) つねに

$$
x' \neq 1
$$

であるから、

$$
[x', 0] \neq [1, 0],
$$

$$
[x, 0]' \neq [1, 0].
$$

4)

$$
[x, 0]' = [y, 0]'
$$

から

$$
[x', 0] = [y', 0],
$$

$$
x' = y',
$$

$$
x = y,
$$

$$
[x, 0] = [y, 0]
$$

が従う。

5) $[\mathfrak{Z}]$ の数からなる集合 $[\mathfrak{M}]$ が次の性質をもつとする:

I) $[1, 0]$ は $[\mathfrak{M}]$ に属する。

II) $[x, 0]$ が $[\mathfrak{M}]$ に属するならば、$[x, 0]'$ は $[\mathfrak{M}]$ に属する。

そこで、$[x, 0]$ が $[\mathfrak{M}]$ に属するような $x$ の集合を $\mathfrak{M}$ で表す。すると 1 は $\mathfrak{M}$ に属し、$\mathfrak{M}$ の各 $x$ とともに $x'$ も $\mathfrak{M}$ に属する。したがってすべての正の整数 $x$ は $\mathfrak{M}$ に属し、したがってすべての $[x, 0]$ は $[\mathfrak{M}]$ に属する。

二つの $[\Xi, 0]$ の和・差・積および(存在する場合には)商は、定理 298 により旧来の概念に対応し、記号 $-[\Xi, 0]$ と $|[\Xi, 0]|$ も同様であり、また

$$
[\Xi, 0] > [H, 0] \quad (\Xi > H \text{ のとき}),
$$

$$
[\Xi, 0] < [H, 0] \quad (\Xi < H \text{ のとき})
$$

と定義することができるから、複素数 $[\Xi, 0]$ は、我々が第4章で実数について証明したすべての性質をもち、特に数 $[x, 0]$ は、正の整数について証明されたすべての性質をもつ。

それゆえ我々は実数を捨て去り、それを対応する複素数 $[\Xi, 0]$ で置き換え、以後は複素数についてのみ語ればよい。(ただし実数は、複素数の概念の中に対として残っている。)

**定義 72:** (自由になった記号)$\Xi$ は複素数 $[\Xi, 0]$ を表し、実数という言葉もこれに移る。同様に以後、$[\Xi, 0]$ を、$\Xi$ が整数のとき整数、$\Xi$ が有理数のとき有理数、$\Xi$ が無理数のとき無理数、$\Xi$ が正のとき正の数、$\Xi$ が負のとき負の数と呼ぶ。

したがって例えば、$\mathfrak{n}$ の代わりに 0、$\mathfrak{e}$ の代わりに 1 と書く。

今や我々は複素数を、任意のアルファベットの小文字あるいは大文字で(混用してもよい)表すことができる。ただし次の特別な数については、小さいラテン文字を用いるのが慣例である。それは次の定義に基づく。

**定義 73:** $i = [0, 1]$.

**定理 300:** $i \cdot i = -1$.

**証明:**

$$
i \cdot i = [0, 1][0, 1] = [0 \cdot 0 - 1 \cdot 1, 0 \cdot 1 + 1 \cdot 0] = [-1, 0] = -1.
$$

**定理 301:** 実数 $u_1$、$u_2$ に対して

$$
u_1 + u_2 i = [u_1, u_2]
$$

である。したがって各複素数 $x$ に対して、

$$
x = u_1 + u_2 i
$$

をみたす実数の対 $u_1$、$u_2$ がちょうど一つ存在する。

**証明:** 実数 $u_1$、$u_2$ に対して

$$
u_1 + u_2 i = [u_1, 0] + [u_2, 0][0, 1] = [u_1, 0] + [u_2 \cdot 0 - 0 \cdot 1, u_2 \cdot 1 + 0 \cdot 0] = [u_1, 0] + [0, u_2] = [u_1, u_2].
$$

定理 301 によって記号 $[\ ]$ は不要になった。複素数とはまさに、$u_1$ と $u_2$ が実数であるような数 $u_1 + u_2 i$ のことである。等しい対 $u_1$、$u_2$ には等しい数が、異なる対には異なる数が対応し、二つの複素数 $u_1 + u_2 i$、$v_1 + v_2 i$($u_1$、$u_2$、$v_1$、$v_2$ は実数)の和・差・積は次の公式によって作る。

$$
\begin{aligned}
(u_1 + u_2 i) + (v_1 + v_2 i) &= (u_1 + v_1) + (u_2 + v_2) i, \\
(u_1 + u_2 i) - (v_1 + v_2 i) &= (u_1 - v_1) + (u_2 - v_2) i, \\
(u_1 + u_2 i)(v_1 + v_2 i) &= (u_1 v_1 - u_2 v_2) + (u_1 v_2 + u_2 v_1) i.
\end{aligned}
$$

これらの公式を覚える必要すらなく、実数の諸法則が保たれることと定理 300 が成り立つことだけを覚えておけばよい。それに従えば、単に次のように計算すればよい。

$$
(u_1 + u_2 i) + (v_1 + v_2 i) = (u_1 + v_1) + (u_2 i + v_2 i) = (u_1 + v_1) + (u_2 + v_2) i,
$$

$$
(u_1 + u_2 i) - (v_1 + v_2 i) = (u_1 - v_1) + (u_2 i - v_2 i) = (u_1 - v_1) + (u_2 - v_2) i,
$$

$$
\begin{aligned}
(u_1 + u_2 i)(v_1 + v_2 i) &= (u_1 + u_2 i) v_1 + (u_1 + u_2 i) v_2 i \\
&= u_1 v_1 + u_2 i v_1 + u_1 v_2 i + u_2 i v_2 i \\
&= u_1 v_1 + u_2 v_1 i + u_1 v_2 i + u_2 v_2 i i \\
&= u_1 v_1 + u_2 v_1 i + u_1 v_2 i + u_2 v_2 (-1) \\
&= (u_1 v_1 - u_2 v_2) + (u_1 v_2 + u_2 v_1) i.
\end{aligned}
$$

除法については、$v_1$ と $v_2$ がともに 0 ではないとき、計算によって、定理 301 の意味での標準的な表示として

$$
\begin{aligned}
\frac{u_1 + u_2 i}{v_1 + v_2 i} &= \frac{(u_1 + u_2 i)(v_1 - v_2 i)}{(v_1 + v_2 i)(v_1 - v_2 i)} = \frac{(u_1 v_1 + u_2 v_2) + (-(u_1 v_2) + u_2 v_1) i}{(v_1 v_1 + v_2 v_2) + (-(v_1 v_2) + v_2 v_1) i} \\
&= \frac{(u_1 v_1 + u_2 v_2) + (-(u_1 v_2) + u_2 v_1) i}{v_1 v_1 + v_2 v_2} = \frac{u_1 v_1 + u_2 v_2}{v_1 v_1 + v_2 v_2} + \frac{-(u_1 v_2) + u_2 v_1}{v_1 v_1 + v_2 v_2}\, i
\end{aligned}
$$

が得られる。
