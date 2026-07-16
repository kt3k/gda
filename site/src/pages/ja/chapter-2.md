# 第2章 分数

## § 1. 定義と同値

**定義 7:** 分数 $\frac{x_1}{x_2}$($x_1$ を $x_2$ の上に置いたものと読む)とは、自然数 $x_1$, $x_2$ の(この順序での)対のことをいう。

**定義 8:**

$$
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
$$

($\sim$ は「同値」と読む)とは、

$$
x_1 y_2 = y_1 x_2
$$

のときをいう。

**定理 37:**

$$
\frac{x_1}{x_2} \sim \frac{x_1}{x_2}.
$$

**証明:**

$$
x_1 x_2 = x_1 x_2.
$$

**定理 38:**

$$
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
$$

から

$$
\frac{y_1}{y_2} \sim \frac{x_1}{x_2}
$$

が従う。

**証明:**

$$
x_1 y_2 = y_1 x_2,
$$

ゆえに

$$
y_1 x_2 = x_1 y_2.
$$

**定理 39:**

$$
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} \sim \frac{z_1}{z_2}
$$

から

$$
\frac{x_1}{x_2} \sim \frac{z_1}{z_2}
$$

が従う。

**証明:**

$$
x_1 y_2 = y_1 x_2, \quad y_1 z_2 = z_1 y_2,
$$

ゆえに

$$
(x_1 y_2)(y_1 z_2) = (y_1 x_2)(z_1 y_2).
$$

常に

$$
(x y)(z u) = x(y(z u)) = x((y z) u) = x(u(y z)) = (x u)(y z) = (x u)(z y);
$$

であるから、

$$
(x_1 y_2)(y_1 z_2) = (x_1 z_2)(y_1 y_2)
$$

かつ

$$
(y_1 x_2)(z_1 y_2) = (y_1 y_2)(z_1 x_2) = (z_1 x_2)(y_1 y_2),
$$

したがって上のことにより

$$
(x_1 z_2)(y_1 y_2) = (z_1 x_2)(y_1 y_2),
$$

$$
x_1 z_2 = z_1 x_2.
$$

定理 37 から 39 により、すべての分数はいくつかの類に分かれ、

$$
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
$$

となるのは、$\frac{x_1}{x_2}$ と $\frac{y_1}{y_2}$ が同じ類に属するとき、またそのときに限る。

**定理 40:**

$$
\frac{x_1}{x_2} \sim \frac{x_1 x}{x_2 x}.
$$

**証明:**

$$
x_1(x_2 x) = x_1(x x_2) = (x_1 x) x_2.
$$

## § 2. 順序

**定義 9:**

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2}
$$

($>$ は「より大きい」と読む)とは、

$$
x_1 y_2 > y_1 x_2
$$

のときをいう。

**定義 10:**

$$
\frac{x_1}{x_2} < \frac{y_1}{y_2}
$$

($<$ は「より小さい」と読む)とは、

$$
x_1 y_2 < y_1 x_2
$$

のときをいう。

**定理 41:** $\frac{x_1}{x_2}$, $\frac{y_1}{y_2}$ が任意に与えられたとき、

$$
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} < \frac{y_1}{y_2}
$$

のうちちょうど一つの場合が成り立つ。

**証明:** $x_1$, $x_2$, $y_1$, $y_2$ に対して、

$$
x_1 y_2 = y_1 x_2, \quad x_1 y_2 > y_1 x_2, \quad x_1 y_2 < y_1 x_2
$$

のうちちょうど一つの場合が成り立つ。

**定理 42:**

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2}
$$

から

$$
\frac{y_1}{y_2} < \frac{x_1}{x_2}
$$

が従う。

**証明:**

$$
x_1 y_2 > y_1 x_2
$$

から

$$
y_1 x_2 < x_1 y_2
$$

が従う。

**定理 43:**

$$
\frac{x_1}{x_2} < \frac{y_1}{y_2}
$$

から

$$
\frac{y_1}{y_2} > \frac{x_1}{x_2}
$$

が従う。

**証明:**

$$
x_1 y_2 < y_1 x_2
$$

から

$$
y_1 x_2 > x_1 y_2
$$

が従う。

**定理 44:**

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
$$

から

$$
\frac{z_1}{z_2} > \frac{u_1}{u_2}
$$

が従う。

**前注:** すなわち、ある類の分数が別の類の分数より大きければ、このことは両方の類の代表元のすべての対について成り立つ。

**証明:**

$$
y_1 u_2 = u_1 y_2, \quad z_1 x_2 = x_1 z_2, \quad x_1 y_2 > y_1 x_2,
$$

ゆえに

$$
(y_1 u_2)(z_1 x_2) = (u_1 y_2)(x_1 z_2),
$$

ゆえに定理 32 により

$$
(y_1 x_2)(z_1 u_2) = (u_1 z_2)(x_1 y_2) > (u_1 z_2)(y_1 x_2),
$$

ゆえに定理 33 により

$$
z_1 u_2 > u_1 z_2.
$$

**定理 45:**

$$
\frac{x_1}{x_2} < \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
$$

から

$$
\frac{z_1}{z_2} < \frac{u_1}{u_2}
$$

が従う。

**前注:** すなわち、ある類の分数が別の類の分数より小さければ、このことは両方の類の代表元のすべての対について成り立つ。

**証明:** 定理 43 により

$$
\frac{y_1}{y_2} > \frac{x_1}{x_2};
$$

であり、

$$
\frac{y_1}{y_2} \sim \frac{u_1}{u_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}
$$

であるから、定理 44 により

$$
\frac{u_1}{u_2} > \frac{z_1}{z_2},
$$

ゆえに定理 42 により

$$
\frac{z_1}{z_2} < \frac{u_1}{u_2}.
$$

**定義 11:**

$$
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}
$$

は

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{または}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2}.
$$

を意味する。

($\gtrsim$ は「より大きいか同値」と読む。)

**定義 12:**

$$
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}
$$

は

$$
\frac{x_1}{x_2} < \frac{y_1}{y_2} \quad\text{または}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2}.
$$

を意味する。

($\lesssim$ は「より小さいか同値」と読む。)

**定理 46:**

$$
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
$$

から

$$
\frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
$$

が従う。

**証明:** 仮定において $>$ の場合は定理 44 により明らかである。そうでない場合は

$$
\frac{z_1}{z_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \sim \frac{u_1}{u_2}.
$$

**定理 47:**

$$
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
$$

から

$$
\frac{z_1}{z_2} \lesssim \frac{u_1}{u_2}
$$

が従う。

**証明:** 仮定において $<$ の場合は定理 45 により明らかである。そうでない場合は

$$
\frac{z_1}{z_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \sim \frac{u_1}{u_2}.
$$

**定理 48:**

$$
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}
$$

から

$$
\frac{y_1}{y_2} \lesssim \frac{x_1}{x_2}
$$

が従う。

**証明:** 定理 38 と定理 42 による。

**定理 49:**

$$
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}
$$

から

$$
\frac{y_1}{y_2} \gtrsim \frac{x_1}{x_2}
$$

が従う。

**証明:** 定理 38 と定理 43 による。

**定理 50**(順序の推移性):

$$
\frac{x_1}{x_2} < \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} < \frac{z_1}{z_2}
$$

から

$$
\frac{x_1}{x_2} < \frac{z_1}{z_2}
$$

が従う。

**証明:**

$$
x_1 y_2 < y_1 x_2, \quad y_1 z_2 < z_1 y_2,
$$

ゆえに

$$
(x_1 y_2)(y_1 z_2) < (y_1 x_2)(z_1 y_2),
$$

$$
(x_1 z_2)(y_1 y_2) < (z_1 x_2)(y_1 y_2),
$$

$$
x_1 z_2 < z_1 x_2.
$$

**定理 51:**

$$
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} < \frac{z_1}{z_2} \quad\text{または}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} \lesssim \frac{z_1}{z_2}
$$

から

$$
\frac{x_1}{x_2} < \frac{z_1}{z_2}
$$

が従う。

**証明:** 仮定に同値記号が現れる場合は定理 45 により、そうでない場合は定理 50 により片付く。

**定理 52:**

$$
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} \lesssim \frac{z_1}{z_2}
$$

から

$$
\frac{x_1}{x_2} \lesssim \frac{z_1}{z_2}
$$

が従う。

**証明:** 仮定に同値記号が二つ現れる場合は定理 39 により、そうでない場合は定理 51 により片付く。

**定理 53:** $\frac{x_1}{x_2}$ に対して、

$$
\frac{z_1}{z_2} > \frac{x_1}{x_2}
$$

となる分数が存在する。

**証明:**

$$
(x_1 + x_1) x_2 = x_1 x_2 + x_1 x_2 > x_1 x_2,
$$

$$
\frac{x_1 + x_1}{x_2} > \frac{x_1}{x_2}.
$$

**定理 54:** $\frac{x_1}{x_2}$ に対して、

$$
\frac{z_1}{z_2} < \frac{x_1}{x_2}
$$

となる分数が存在する。

**証明:**

$$
x_1 x_2 < x_1 x_2 + x_1 x_2 = x_1(x_2 + x_2),
$$

$$
\frac{x_1}{x_2 + x_2} < \frac{x_1}{x_2}.
$$

**定理 55:**

$$
\frac{x_1}{x_2} < \frac{y_1}{y_2}
$$

ならば、

$$
\frac{x_1}{x_2} < \frac{z_1}{z_2} < \frac{y_1}{y_2}
$$

となる $\frac{z_1}{z_2}$ が存在する。

**証明:**

$$
x_1 y_2 < y_1 x_2,
$$

ゆえに

$$
x_1 x_2 + x_1 y_2 < x_1 x_2 + y_1 x_2, \quad x_1 y_2 + y_1 y_2 < y_1 x_2 + y_1 y_2,
$$

$$
x_1(x_2 + y_2) < (x_1 + y_1) x_2, \quad (x_1 + y_1) y_2 < y_1(x_2 + y_2),
$$

$$
\frac{x_1}{x_2} < \frac{x_1 + y_1}{x_2 + y_2} < \frac{y_1}{y_2}.
$$

## § 3. 加法

**定義 13:** $\frac{x_1}{x_2} + \frac{y_1}{y_2}$($+$ は「プラス」と読む)とは、分数 $\frac{x_1 y_2 + y_1 x_2}{x_2 y_2}$ のことをいう。

これを $\frac{x_1}{x_2}$ と $\frac{y_1}{y_2}$ の和、または $\frac{x_1}{x_2}$ への $\frac{y_1}{y_2}$ の加法によって得られる分数と呼ぶ。

**定理 56:**

$$
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \sim \frac{u_1}{u_2}
$$

から

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{y_1}{y_2} + \frac{u_1}{u_2}.
$$

が従う。

**前注:** したがって、和の類は「加数」の属する類のみに依存する。

**証明:**

$$
x_1 y_2 = y_1 x_2, \quad z_1 u_2 = u_1 z_2,
$$

したがって

$$
(x_1 y_2)(z_2 u_2) = (y_1 x_2)(z_2 u_2), \quad (z_1 u_2)(x_2 y_2) = (u_1 z_2)(x_2 y_2),
$$

したがって

$$
(x_1 z_2)(y_2 u_2) = (y_1 u_2)(x_2 z_2), \quad (z_1 x_2)(y_2 u_2) = (u_1 y_2)(x_2 z_2),
$$

$$
(x_1 z_2)(y_2 u_2) + (z_1 x_2)(y_2 u_2) = (y_1 u_2)(x_2 z_2) + (u_1 y_2)(x_2 z_2),
$$

$$
(x_1 z_2 + z_1 x_2)(y_2 u_2) = (y_1 u_2 + u_1 y_2)(x_2 z_2),
$$

$$
\frac{x_1 z_2 + z_1 x_2}{x_2 z_2} \sim \frac{y_1 u_2 + u_1 y_2}{y_2 u_2}.
$$

**定理 57:**

$$
\frac{x_1}{x} + \frac{x_2}{x} \sim \frac{x_1 + x_2}{x}.
$$

**証明:** 定義 13 と定理 40 により

$$
\frac{x_1}{x} + \frac{x_2}{x} \sim \frac{x_1 x + x_2 x}{x x} \sim \frac{(x_1 + x_2) x}{x x} \sim \frac{x_1 + x_2}{x}.
$$

**定理 58**(加法の交換法則):

$$
\frac{x_1}{x_2} + \frac{y_1}{y_2} \sim \frac{y_1}{y_2} + \frac{x_1}{x_2}.
$$

**証明:**

$$
\frac{x_1}{x_2} + \frac{y_1}{y_2} \sim \frac{x_1 y_2 + y_1 x_2}{x_2 y_2} \sim \frac{y_1 x_2 + x_1 y_2}{y_2 x_2} \sim \frac{y_1}{y_2} + \frac{x_1}{x_2}.
$$

**定理 59**(加法の結合法則):

$$
\left(\frac{x_1}{x_2} + \frac{y_1}{y_2}\right) + \frac{z_1}{z_2} \sim \frac{x_1}{x_2} + \left(\frac{y_1}{y_2} + \frac{z_1}{z_2}\right).
$$

**証明:**

$$
\begin{aligned}
\left(\frac{x_1}{x_2} + \frac{y_1}{y_2}\right) + \frac{z_1}{z_2}
&\sim \frac{x_1 y_2 + y_1 x_2}{x_2 y_2} + \frac{z_1}{z_2}
\sim \frac{(x_1 y_2 + y_1 x_2) z_2 + z_1(x_2 y_2)}{(x_2 y_2) z_2}
\sim \frac{((x_1 y_2) z_2 + (y_1 x_2) z_2) + z_1(y_2 x_2)}{x_2(y_2 z_2)} \\
&\sim \frac{(x_1(y_2 z_2) + (x_2 y_1) z_2) + (z_1 y_2) x_2}{x_2(y_2 z_2)}
\sim \frac{(x_1(y_2 z_2) + x_2(y_1 z_2)) + (z_1 y_2) x_2}{x_2(y_2 z_2)} \\
&\sim \frac{x_1(y_2 z_2) + ((y_1 z_2) x_2 + (z_1 y_2) x_2)}{x_2(y_2 z_2)}
\sim \frac{x_1(y_2 z_2) + (y_1 z_2 + z_1 y_2) x_2}{x_2(y_2 z_2)} \\
&\sim \frac{x_1}{x_2} + \frac{y_1 z_2 + z_1 y_2}{y_2 z_2}
\sim \frac{x_1}{x_2} + \left(\frac{y_1}{y_2} + \frac{z_1}{z_2}\right).
\end{aligned}
$$

**定理 60:**

$$
\frac{x_1}{x_2} + \frac{y_1}{y_2} > \frac{x_1}{x_2}.
$$

**証明:**

$$
x_1 y_2 + y_1 x_2 > x_1 y_2,
$$

$$
(x_1 y_2 + y_1 x_2) x_2 > (x_1 y_2) x_2 = x_1(y_2 x_2) = x_1(x_2 y_2),
$$

$$
\frac{x_1}{x_2} + \frac{y_1}{y_2} \sim \frac{x_1 y_2 + y_1 x_2}{x_2 y_2} > \frac{x_1}{x_2}.
$$

**定理 61:**

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2}
$$

から

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2}.
$$

が従う。

**証明:**

$$
x_1 y_2 > y_1 x_2
$$

から

$$
(x_1 y_2) z_2 > (y_1 x_2) z_2.
$$

が従う。

$$
(x y) z = x(y z) = x(z y) = (x z) y
$$

により、したがって

$$
(x_1 z_2) y_2 > (y_1 z_2) x_2
$$

であり、かつ

$$
(z_1 x_2) y_2 = (z_1 y_2) x_2,
$$

であるから、

$$
(x_1 z_2 + z_1 x_2) y_2 > (y_1 z_2 + z_1 y_2) x_2,
$$

$$
(x_1 z_2 + z_1 x_2)(y_2 z_2) > (y_1 z_2 + z_1 y_2)(x_2 z_2),
$$

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{x_1 z_2 + z_1 x_2}{x_2 z_2} > \frac{y_1 z_2 + z_1 y_2}{y_2 z_2} \sim \frac{y_1}{y_2} + \frac{z_1}{z_2}.
$$

**定理 62:**

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{ないし}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{ないし}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}
$$

から、それぞれ

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{ないし}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{ないし}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} < \frac{y_1}{y_2} + \frac{z_1}{z_2}.
$$

が従う。

**証明:** 第一の部分は定理 61 であり、第二の部分は定理 56 に含まれており、第三の部分は

$$
\frac{y_1}{y_2} > \frac{x_1}{x_2},
$$

$$
\frac{y_1}{y_2} + \frac{z_1}{z_2} > \frac{x_1}{x_2} + \frac{z_1}{z_2},
$$

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} < \frac{y_1}{y_2} + \frac{z_1}{z_2}.
$$

により第一の部分の帰結である。

**定理 63:**

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{ないし}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{ないし}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} < \frac{y_1}{y_2} + \frac{z_1}{z_2}
$$

から、それぞれ

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{ないし}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{ないし}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}.
$$

が従う。

**証明:** 三つの場合はどちらにおいても互いに排反であり、かつすべての可能性を尽くすから、定理 62 から従う。

**定理 64:**

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2}
$$

から

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{u_1}{u_2}.
$$

が従う。

**証明:** 定理 61 により

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2}
$$

であり、かつ

$$
\frac{y_1}{y_2} + \frac{z_1}{z_2} \sim \frac{z_1}{z_2} + \frac{y_1}{y_2} > \frac{u_1}{u_2} + \frac{y_1}{y_2} \sim \frac{y_1}{y_2} + \frac{u_1}{u_2},
$$

したがって

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{u_1}{u_2}.
$$

**定理 65:**

$$
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2} \quad\text{または}\quad \frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
$$

から

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{u_1}{u_2}.
$$

が従う。

**証明:** 仮定に同値記号を含む場合は定理 56 と定理 61 によって、そうでない場合は定理 64 によって片付く。

**定理 66:**

$$
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
$$

から

$$
\frac{x_1}{x_2} + \frac{z_1}{z_2} \gtrsim \frac{y_1}{y_2} + \frac{u_1}{u_2}.
$$

が従う。

**証明:** 仮定に二つの同値記号を含む場合は定理 56 によって、そうでない場合は定理 65 によって片付く。

**定理 67:**

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2},
$$

ならば、

$$
\frac{y_1}{y_2} + \frac{u_1}{u_2} \sim \frac{x_1}{x_2}
$$

は解 $\frac{u_1}{u_2}$ をもつ。$\frac{u_1}{u_2}$ と $\frac{w_1}{w_2}$ が解ならば、

$$
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
$$

である。

**前注:**

$$
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}
$$

に対しては、定理 60 により解は存在しない。

**証明:** 第二の主張は定理 63 から直ちに従う。なぜなら、

$$
\frac{y_1}{y_2} + \frac{u_1}{u_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} + \frac{w_1}{w_2}
$$

に対しては、その定理により

$$
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
$$

だからである。

$\frac{u_1}{u_2}$ の存在(第一の主張)は次のようにして得られる。

$$
x_1 y_2 > y_1 x_2.
$$

である。$u$ を

$$
x_1 y_2 = y_1 x_2 + u
$$

から定め、

$$
u_1 = u, \quad u_2 = x_2 y_2
$$

とおく。このとき、

$$
\frac{y_1}{y_2} + \frac{u_1}{u_2} \sim \frac{y_1}{y_2} + \frac{u}{x_2 y_2} \sim \frac{y_1 x_2 + u}{x_2 y_2} \sim \frac{x_1 y_2}{x_2 y_2} \sim \frac{x_1}{x_2}.
$$

により $\frac{u_1}{u_2}$ は解である。

**定義 14:** 定理 67 の証明において構成された特別な $\frac{u_1}{u_2}$ を $\frac{x_1}{x_2} - \frac{y_1}{y_2}$($-$ は「マイナス」と読む)、または差 $\frac{x_1}{x_2}$ マイナス $\frac{y_1}{y_2}$、または分数 $\frac{x_1}{x_2}$ からの分数 $\frac{y_1}{y_2}$ の減法によって得られる分数と呼ぶ。

したがって、

$$
\frac{x_1}{x_2} \sim \frac{y_1}{y_2} + \frac{u_1}{u_2}
$$

から

$$
\frac{u_1}{u_2} \sim \frac{x_1}{x_2} - \frac{y_1}{y_2}.
$$

が従う。

## § 4. 乗法

**定義 15:** $\frac{x_1}{x_2} \cdot \frac{y_1}{y_2}$($\cdot$ は「かける」と読む。ただし、この点は通常書かない)とは、分数 $\frac{x_1 y_1}{x_2 y_2}$ のことをいう。

これを $\frac{x_1}{x_2}$ と $\frac{y_1}{y_2}$ の積、または $\frac{x_1}{x_2}$ への $\frac{y_1}{y_2}$ の乗法によって得られる分数と呼ぶ。

**定理 68:**

$$
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \sim \frac{u_1}{u_2}
$$

から

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
$$

が従う。

**前注:** したがって、積の類は「因子」の属する類のみに依存する。

**証明:**

$$
x_1 y_2 = y_1 x_2, \quad z_1 u_2 = u_1 z_2,
$$

したがって

$$
(x_1 y_2)(z_1 u_2) = (y_1 x_2)(u_1 z_2),
$$

$$
(x_1 z_1)(y_2 u_2) = (y_1 u_1)(x_2 z_2).
$$

**定理 69**(乗法の交換法則):

$$
\frac{x_1}{x_2} \cdot \frac{y_1}{y_2} \sim \frac{y_1}{y_2} \cdot \frac{x_1}{x_2}.
$$

**証明:**

$$
\frac{x_1}{x_2} \cdot \frac{y_1}{y_2} \sim \frac{x_1 y_1}{x_2 y_2} \sim \frac{y_1 x_1}{y_2 x_2} \sim \frac{y_1}{y_2} \cdot \frac{x_1}{x_2}.
$$

**定理 70**(乗法の結合法則):

$$
\left(\frac{x_1}{x_2} \cdot \frac{y_1}{y_2}\right) \cdot \frac{z_1}{z_2} \sim \frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} \cdot \frac{z_1}{z_2}\right).
$$

**証明:**

$$
\begin{aligned}
\left(\frac{x_1}{x_2} \cdot \frac{y_1}{y_2}\right) \cdot \frac{z_1}{z_2}
&\sim \frac{x_1 y_1}{x_2 y_2} \cdot \frac{z_1}{z_2}
\sim \frac{(x_1 y_1) z_1}{(x_2 y_2) z_2} \\
&\sim \frac{x_1(y_1 z_1)}{x_2(y_2 z_2)}
\sim \frac{x_1}{x_2} \cdot \frac{y_1 z_1}{y_2 z_2}
\sim \frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} \cdot \frac{z_1}{z_2}\right).
\end{aligned}
$$

**定理 71**(分配法則):

$$
\frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} + \frac{z_1}{z_2}\right) \sim \frac{x_1}{x_2} \cdot \frac{y_1}{y_2} + \frac{x_1}{x_2} \cdot \frac{z_1}{z_2}.
$$

**証明:**

$$
\begin{aligned}
\frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} + \frac{z_1}{z_2}\right)
&\sim \frac{x_1}{x_2} \cdot \frac{y_1 z_2 + z_1 y_2}{y_2 z_2}
\sim \frac{x_1(y_1 z_2 + z_1 y_2)}{x_2(y_2 z_2)} \\
&\sim \frac{x_1 y_1 z_2 + x_1 z_1 y_2}{x_2 y_2 z_2}
\sim \frac{(x_1 y_1)(x_2 z_2) + (x_1 z_1)(x_2 y_2)}{(x_2 y_2)(x_2 z_2)} \\
&\sim \frac{x_1 y_1}{x_2 y_2} + \frac{x_1 z_1}{x_2 z_2}
\sim \frac{x_1}{x_2} \cdot \frac{y_1}{y_2} + \frac{x_1}{x_2} \cdot \frac{z_1}{z_2}.
\end{aligned}
$$

**定理 72:**

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{ないし}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{ないし}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}
$$

から、それぞれ

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{ないし}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{ないし}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} < \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}.
$$

が従う。

**証明:** 1)

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2}
$$

から

$$
x_1 y_2 > y_1 x_2,
$$

$$
(x_1 y_2)(z_1 z_2) > (y_1 x_2)(z_1 z_2),
$$

$$
(x_1 z_1)(y_2 z_2) > (y_1 z_1)(x_2 z_2),
$$

$$
\frac{x_1 z_1}{x_2 z_2} > \frac{y_1 z_1}{y_2 z_2}.
$$

が従う。

2)

$$
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
$$

から、定理 68 により

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}.
$$

が従う。

3)

$$
\frac{x_1}{x_2} < \frac{y_1}{y_2}
$$

から

$$
\frac{y_1}{y_2} > \frac{x_1}{x_2},
$$

が従い、したがって 1) により

$$
\frac{y_1}{y_2} \cdot \frac{z_1}{z_2} > \frac{x_1}{x_2} \cdot \frac{z_1}{z_2},
$$

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} < \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}.
$$

**定理 73:**

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{ないし}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{ないし}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} < \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}
$$

から、それぞれ

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{ないし}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{ないし}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}.
$$

が従う。

**証明:** 三つの場合はどちらにおいても互いに排反であり、かつすべての可能性を尽くすから、定理 72 から従う。

**定理 74:**

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2}
$$

から

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
$$

が従う。

**証明:** 定理 72 により

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}
$$

であり、かつ

$$
\frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \sim \frac{z_1}{z_2} \cdot \frac{y_1}{y_2} > \frac{u_1}{u_2} \cdot \frac{y_1}{y_2} \sim \frac{y_1}{y_2} \cdot \frac{u_1}{u_2},
$$

であるから、したがって

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
$$

**定理 75:**

$$
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2} \quad\text{または}\quad \frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
$$

から

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
$$

が従う。

**証明:** 仮定に同値記号を含む場合は定理 68 と定理 72 によって、そうでない場合は定理 74 によって片付く。

**定理 76:**

$$
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
$$

から

$$
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \gtrsim \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
$$

が従う。

**証明:** 仮定に二つの同値記号を含む場合は定理 68 によって、そうでない場合は定理 75 によって片付く。

**定理 77:** 同値

$$
\frac{y_1}{y_2} \cdot \frac{u_1}{u_2} \sim \frac{x_1}{x_2},
$$

($\frac{x_1}{x_2}$ と $\frac{y_1}{y_2}$ は与えられているとする)は解 $\frac{u_1}{u_2}$ をもつ。$\frac{u_1}{u_2}$ と $\frac{w_1}{w_2}$ が解ならば、

$$
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
$$

である。

**証明:** 第二の主張は定理 73 から直ちに従う。なぜなら、

$$
\frac{y_1}{y_2} \cdot \frac{u_1}{u_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \cdot \frac{w_1}{w_2}
$$

に対しては、その定理により

$$
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
$$

だからである。

$\frac{u_1}{u_2}$ の存在(第一の主張)は次のようにして得られる。

$$
u_1 = x_1 y_2, \quad u_2 = x_2 y_1
$$

に対して、

$$
\frac{y_1}{y_2} \cdot \frac{u_1}{u_2} \sim \frac{y_1}{y_2} \cdot \frac{x_1 y_2}{x_2 y_1} \sim \frac{y_1(x_1 y_2)}{y_2(x_2 y_1)} \sim \frac{x_1(y_1 y_2)}{x_2(y_1 y_2)} \sim \frac{x_1}{x_2}.
$$

により $\frac{u_1}{u_2}$ は解である。

## § 5. 有理数と整数

**定義 16:** 有理数とは、ある固定した分数に同値なすべての分数の集合(すなわち § 1 の意味での類)をいう。

ラテン大文字は、特に断らない限り、つねに有理数を表すものとする。

**定義 17:**

$$
X = Y
$$

($=$ 読み方:等しい)とは、両方の集合が同じ分数を含むことをいう。そうでない場合は

$$
X \neq Y
$$

($\neq$ 読み方:等しくない)とする。

次の三つの定理は自明である:

**定理 78:** $X = X$。

**定理 79:**

$$
X = Y
$$

から

$$
Y = X.
$$

が従う。

**定理 80:**

$$
X = Y, \quad Y = Z
$$

から

$$
X = Z.
$$

が従う。

**定義 18:**

$$
X > Y
$$

($>$ 読み方:より大きい)とは、集合 $X$ および $Y$ からのある一つの(したがって定理 44 によりそれぞれ任意の)分数 $\frac{x_1}{x_2}$ および $\frac{y_1}{y_2}$ に対して

$$
\frac{x_1}{x_2} > \frac{y_1}{y_2}
$$

が成り立つことをいう。

**定義 19:**

$$
X < Y
$$

($<$ 読み方:より小さい)とは、集合 $X$ および $Y$ からのある一つの(したがって定理 45 によりそれぞれ任意の)分数 $\frac{x_1}{x_2}$ および $\frac{y_1}{y_2}$ に対して

$$
\frac{x_1}{x_2} < \frac{y_1}{y_2}
$$

が成り立つことをいう。

**定理 81:** $X$, $Y$ を任意とすると、

$$
X = Y, \quad X > Y, \quad X < Y
$$

のうちちょうど一つの場合が成り立つ。

**証明:** 定理 41。

**定理 82:**

$$
X > Y
$$

から

$$
Y < X.
$$

が従う。

**証明:** 定理 42。

**定理 83:**

$$
X < Y
$$

から

$$
Y > X.
$$

が従う。

**証明:** 定理 43。

**定義 20:**

$$
X \geqq Y
$$

は

$$
X > Y \quad\text{または}\quad X = Y.
$$

を意味する。

($\geqq$ 読み方:より大きいか等しい。)

**定義 21:**

$$
X \leqq Y
$$

は

$$
X < Y \quad\text{または}\quad X = Y.
$$

を意味する。

($\leqq$ 読み方:より小さいか等しい。)

**定理 84:**

$$
X \geqq Y
$$

から

$$
Y \leqq X.
$$

が従う。

**証明:** 定理 48。

**定理 85:**

$$
X \leqq Y
$$

から

$$
Y \geqq X.
$$

が従う。

**証明:** 定理 49。

**定理 86**(順序の推移律):

$$
X < Y, \quad Y < Z
$$

から

$$
X < Z.
$$

が従う。

**証明:** 定理 50。

**定理 87:**

$$
X \leqq Y, \quad Y < Z \quad\text{または}\quad X < Y, \quad Y \leqq Z
$$

から

$$
X < Z.
$$

が従う。

**証明:** 定理 51。

**定理 88:**

$$
X \leqq Y, \quad Y \leqq Z
$$

から

$$
X \leqq Z.
$$

が従う。

**証明:** 定理 52。

**定理 89:** $X$ に対して

$$
Z > X.
$$

なる $Z$ が存在する。

**証明:** 定理 53。

**定理 90:** $X$ に対して

$$
Z < X.
$$

なる $Z$ が存在する。

**証明:** 定理 54。

**定理 91:**

$$
X < Y,
$$

ならば、

$$
X < Z < Y.
$$

なる $Z$ が存在する。

**証明:** 定理 55。

**定義 22:** $X + Y$($+$ 読み方:プラス)とは、$X$ からの分数と $Y$ からの分数とのある一つの(したがって定理 56 により任意の)和が属する類をいう。

この有理数を $X$ と $Y$ の和、または $X$ に $Y$ を加法して得られる有理数と呼ぶ。

**定理 92**(加法の交換法則):

$$
X + Y = Y + X.
$$

**証明:** 定理 58。

**定理 93**(加法の結合法則):

$$
(X + Y) + Z = X + (Y + Z).
$$

**証明:** 定理 59。

**定理 94:**

$$
X + Y > X.
$$

**証明:** 定理 60。

**定理 95:**

$$
X > Y
$$

から

$$
X + Z > Y + Z.
$$

が従う。

**証明:** 定理 61。

**定理 96:**

$$
X > Y \quad\text{ないし}\quad X = Y \quad\text{ないし}\quad X < Y
$$

から、それぞれ

$$
X + Z > Y + Z \quad\text{ないし}\quad X + Z = Y + Z \quad\text{ないし}\quad X + Z < Y + Z.
$$

が従う。

**証明:** 定理 62。

**定理 97:**

$$
X + Z > Y + Z \quad\text{ないし}\quad X + Z = Y + Z \quad\text{ないし}\quad X + Z < Y + Z
$$

から、それぞれ

$$
X > Y \quad\text{ないし}\quad X = Y \quad\text{ないし}\quad X < Y.
$$

が従う。

**証明:** 定理 63。

**定理 98:**

$$
X > Y, \quad Z > U
$$

から

$$
X + Z > Y + U.
$$

が従う。

**証明:** 定理 64。

**定理 99:**

$$
X > Y, \quad Z = U \quad\text{または}\quad X = Y, \quad Z > U
$$

から

$$
X + Z > Y + U.
$$

が従う。

**証明:** 定理 65。

**定理 100:**

$$
X \geqq Y, \quad Z \geqq U
$$

から

$$
X + Z \geqq Y + U.
$$

が従う。

**証明:** 定理 66。

**定理 101:**

$$
X > Y,
$$

ならば、

$$
Y + U = X
$$

はちょうど一つの解 $U$ を持つ。

**前注:**

$$
X \leqq Y
$$

の場合には、定理 94 により解は存在しない。

**証明:** 定理 67。

**定義 23:** この $U$ を $X - Y$($-$ 読み方:マイナス)、または差 $X$ マイナス $Y$、または有理数 $X$ から有理数 $Y$ を減法して得られる有理数と呼ぶ。

**定義 24:** $X \cdot Y$($\cdot$ 読み方:掛ける;ただし点はふつう書かない)とは、$X$ からの分数と $Y$ からの分数とのある一つの(したがって定理 68 により任意の)積が属する類をいう。

この有理数を $X$ と $Y$ の積、または $X$ に $Y$ を乗法して得られる有理数と呼ぶ。

**定理 102**(乗法の交換法則):

$$
X Y = Y X.
$$

**証明:** 定理 69。

**定理 103**(乗法の結合法則):

$$
(X Y) Z = X (Y Z).
$$

**証明:** 定理 70。

**定理 104**(分配法則):

$$
X(Y + Z) = X Y + X Z.
$$

**証明:** 定理 71。

**定理 105:**

$$
X > Y \quad\text{ないし}\quad X = Y \quad\text{ないし}\quad X < Y
$$

から、それぞれ

$$
X Z > Y Z \quad\text{ないし}\quad X Z = Y Z \quad\text{ないし}\quad X Z < Y Z.
$$

が従う。

**証明:** 定理 72。

**定理 106:**

$$
X Z > Y Z \quad\text{ないし}\quad X Z = Y Z \quad\text{ないし}\quad X Z < Y Z
$$

から、それぞれ

$$
X > Y \quad\text{ないし}\quad X = Y \quad\text{ないし}\quad X < Y.
$$

が従う。

**証明:** 定理 73。

**定理 107:**

$$
X > Y, \quad Z > U
$$

から

$$
X Z > Y U.
$$

が従う。

**証明:** 定理 74。

**定理 108:**

$$
X > Y, \quad Z = U \quad\text{または}\quad X = Y, \quad Z > U
$$

から

$$
X Z > Y U.
$$

が従う。

**証明:** 定理 75。

**定理 109:**

$$
X \geqq Y, \quad Z \geqq U
$$

から

$$
X Z \geqq Y U.
$$

が従う。

**証明:** 定理 76。

**定理 110:** $X$ と $Y$ が与えられているとき、方程式

$$
Y U = X,
$$

はちょうど一つの解 $U$ を持つ。

**証明:** 定理 77。

**定理 111:**

$$
\frac{x}{1} > \frac{y}{1} \quad\text{ないし}\quad \frac{x}{1} \sim \frac{y}{1} \quad\text{ないし}\quad \frac{x}{1} < \frac{y}{1}
$$

から、それぞれ

$$
x > y \quad\text{ないし}\quad x = y \quad\text{ないし}\quad x < y
$$

が従い、また逆も成り立つ。

**証明:**

$$
x \cdot 1 > y \cdot 1 \quad\text{ないし}\quad x \cdot 1 = y \cdot 1 \quad\text{ないし}\quad x \cdot 1 < y \cdot 1
$$

は、それぞれ

$$
x > y \quad\text{ないし}\quad x = y \quad\text{ないし}\quad x < y.
$$

と同じことを意味する。

**定義 25:** ある有理数は、それがその全体であるところの分数のうちに $\frac{x}{1}$ の形の分数が現れるとき、整であるという。

この $x$ は定理 111 により一意に定まり、逆に各 $x$ にはちょうど一つの整数が対応する。

**定理 112:**

$$
\frac{x}{1} + \frac{y}{1} \sim \frac{x + y}{1},
$$

$$
\frac{x}{1} \cdot \frac{y}{1} \sim \frac{x y}{1}.
$$

**前注:** したがって二つの整数の和と積は整数である。

**証明:** 1) 定理 57 により

$$
\frac{x}{1} + \frac{y}{1} \sim \frac{x + y}{1}.
$$

2) 定義 15 により

$$
\frac{x}{1} \cdot \frac{y}{1} \sim \frac{x y}{1 \cdot 1} \sim \frac{x y}{1}.
$$

**定理 113:** 整数は、$1$ の代わりに $\frac{1}{1}$ の類をとり、$\frac{x}{1}$ の類の後続者として $\frac{x'}{1}$ の類をとるならば、自然数の五つの公理を満たす。

**証明:** $Q$ を整数の集合とする。

1) $\frac{1}{1}$ の類は $Q$ に属する。

2) 各整数に対して、後続者を一意に定めた。

3) それはつねに $\frac{1}{1}$ の類とは異なる。なぜなら、つねに

$$
x' \neq 1.
$$

だからである。

4) $\frac{x'}{1}$ の類と $\frac{y'}{1}$ の類が一致するならば、

$$
x' = y',
$$

$$
x = y,
$$

であり、$\frac{x}{1}$ の類と $\frac{y}{1}$ の類は一致する。

5) 整数のある集合 $\mathfrak{M}$ が次の性質を持つとする:

I) $\frac{1}{1}$ の類は $\mathfrak{M}$ に属する。

II) $\frac{x}{1}$ の類が $\mathfrak{M}$ に属するならば、$\frac{x'}{1}$ の類も $\mathfrak{M}$ に属する。

このとき、$\frac{x}{1}$ の類が $\mathfrak{M}$ に属するような $x$ の集合を $\mathfrak{N}$ で表す。すると $1$ は $\mathfrak{N}$ に属し、$\mathfrak{N}$ の各 $x$ とともに $x'$ も $\mathfrak{N}$ に属する。ゆえにすべての自然数は $\mathfrak{N}$ に属し、したがってすべての整数は $\mathfrak{M}$ に属する。

$=$, $>$, $<$、和および積は(定理 111 と 112 により)旧来の概念に対応するから、整数は、我々が第1章で自然数について証明したすべての性質を持つ。

それゆえ我々は自然数を捨て去り、それを対応する整数で置き換え、以後は(分数もまた不要となるので)これまでのことに関しては有理数についてのみ語ることにする。(自然数は分数の概念のうちに線の上と下に対をなして残り、分数は有理数と呼ばれる集合の個体として残る。)

**定義 26:** (自由になった記号)$x$ は、$\frac{x}{1}$ の類によって与えられる整数を表す。

したがって我々の新しい言葉では、例えば

$$
x \cdot 1 = x;
$$

である。なぜなら

$$
\frac{x_1}{x_2} \cdot \frac{1}{1} \sim \frac{x_1 \cdot 1}{x_2 \cdot 1} \sim \frac{x_1}{x_2}.
$$

だからである。

**定理 114:** $Z$ が分数 $\frac{x}{y}$ に属する有理数ならば、

$$
y Z = x.
$$

である。

**証明:**

$$
\frac{y}{1} \cdot \frac{x}{y} \sim \frac{y x}{1 \cdot y} \sim \frac{x y}{1 \cdot y} \sim \frac{x}{1}.
$$

**定義 27:** 定理 110 の $U$ を $X$ の $Y$ による商、または $X$ を $Y$ で除法して得られる有理数と呼ぶ。これを $\frac{X}{Y}$ で表す(読み方:$X$ 割る $Y$)。

$X$ と $Y$ が整数、すなわち $X = x$, $Y = y$ ならば、定義 26 と 27 によって定められた有理数 $\frac{x}{y}$ は、定理 114 により、旧来の意味での分数 $\frac{x}{y}$ が属する類を意味する。

両方の記号 $\frac{x}{y}$ の混同を恐れる必要はない。というのは、今後分数が単独で現れることはもはやないからである。以後 $\frac{x}{y}$ はつねに有理数を表す。逆に、すべての有理数は、定理 114 と定義 27 に基づいて、$\frac{x}{y}$ の形に表すことができる。

**定理 115:** $X$ と $Y$ が与えられているとき、

$$
z X > Y.
$$

なる $z$ が存在する。

**証明:** $\frac{Y}{X}$ は有理数である。定理 89 により(我々の新しい言葉で)

$$
\frac{z}{v} > \frac{Y}{X}.
$$

なる整数 $z$, $v$ が存在する。

定理 111 により

ゆえに定理 105 により
