# 第4章 実数

## § 1. 定義

**定義 43:** 切断をこれからは正の数と呼ぶ。またこれに応じて、これまで有理数と呼んでいたものを正の有理数、これまで整数と呼んでいたものを正の整数と言うことにする。

われわれは、正の数とは異なる新しい数 0(零と読む)を創造する。

さらに、正の数とも 0 とも異なる数、負の数と呼ばれるものを創造する。すなわち、各 $\xi$(つまり各正の数)に対して一つの負の数を対応させ、これを $-\xi$($-$ はマイナスと読む)と呼ぶ。

その際、$-\xi$ と $-\eta$ が同じ数である(等しい)とみなされるのは、$\xi$ と $\eta$ が同じ数であるとき、またそのときに限る。

正の数、0、および負の数の全体を実数と呼ぶ。

大文字のギリシア文字は、特に断らない限り、常に実数を表す。等しいことを $=$、等しくない(異なる)ことを $\neq$ と書く。

したがって、任意の $\Xi$ と任意の $\mathrm{H}$ に対して、

```math
\Xi = \mathrm{H}, \quad \Xi \neq \mathrm{H}
```

のうちのちょうど一つの場合が成り立つ。実数においては同一性と相等性の概念が融け合うので、次の三つの定理は自明である。

**定理 163:** $\Xi = \Xi$。

**定理 164:**

```math
\Xi = \mathrm{H}
```

から

```math
\mathrm{H} = \Xi.
```

が従う。

**定理 165:**

```math
\Xi = \mathrm{H}, \quad \mathrm{H} = \mathrm{Z}
```

から

```math
\Xi = \mathrm{Z}.
```

が従う。

## § 2. 順序

**定義 44:**

```math
|\Xi| =
\begin{cases}
\xi, & \text{wenn } \Xi = \xi, \\
0, & \text{wenn } \Xi = 0, \\
\xi, & \text{wenn } \Xi = -\xi.
\end{cases}
```

数 $|\Xi|$ を $\Xi$ の絶対値と呼ぶ。

**定理 166:** $|\Xi|$ は、$\Xi$ が正のときも負のときも正である。

**証明:** 定義 44。

**定義 45:** $\Xi$ と $\mathrm{H}$ がともに正であるのではないとき、

```math
\Xi > \mathrm{H}
```

であるのは、

$\Xi$ が負、$\mathrm{H}$ が負で $|\Xi| < |\mathrm{H}|$ であるか、\
または $\Xi = 0$、$\mathrm{H}$ が負であるか、\
または $\Xi$ が正、$\mathrm{H}$ が負であるか、\
または $\Xi$ が正、$\mathrm{H} = 0$ であるとき、またそのときに限る。

($>$ は「より大きい」と読む。)

正の $\Xi$ と正の $\mathrm{H}$ に対しては $>$ と $<$ の概念をすでに持っており、後者は定義 45 の一つの場合においてすでに用いたことに注意せよ。

**定義 46:**

```math
\Xi < \mathrm{H}
```

であるのは、

```math
\mathrm{H} > \Xi.
```

のとき、またそのときに限る。

($<$ は「より小さい」と読む。)

正の $\Xi$ と正の $\mathrm{H}$ に対しては、定義 46 がわれわれの従来の概念と一致していることに注意せよ。

**定理 167:** $\Xi$、$\mathrm{H}$ が任意のとき、

```math
\Xi = \mathrm{H}, \quad \Xi > \mathrm{H}, \quad \Xi < \mathrm{H}
```

のうちのちょうど一つの場合が成り立つ。

**証明:** 1) $\Xi$ と $\mathrm{H}$ が正なら、これは定理 123 により分かっている。

2) $\Xi$ が正で、$\mathrm{H} = 0$ または $\mathrm{H}$ が負なら、

```math
\Xi \neq \mathrm{H},
```

であり、さらに定義 45 により

```math
\Xi > \mathrm{H}
```

であり、定義 46 により

$\Xi$ は $< \mathrm{H}$ でない。

3) $\Xi = 0$ で $\mathrm{H}$ が正なら、

```math
\Xi \neq \mathrm{H},
```

であり、さらに定義 45 により

$\Xi$ は $> \mathrm{H}$ でなく、

定義 46 により

```math
\Xi < \mathrm{H}.
```

である。

4) $\Xi = 0$、$\mathrm{H} = 0$ なら、

$\Xi = \mathrm{H}$ であり、\
$\Xi$ は $> \mathrm{H}$ でなく、\
$\Xi$ は $< \mathrm{H}$ でない。

5) $\Xi = 0$ で $\mathrm{H}$ が負なら、

$\Xi \neq \mathrm{H}$ であり、\
$\Xi > \mathrm{H}$ であり、\
$\Xi$ は $< \mathrm{H}$ でない。

6) $\Xi$ が負で、$\mathrm{H}$ が正または $\mathrm{H} = 0$ なら、

$\Xi \neq \mathrm{H}$ であり、\
$\Xi$ は $> \mathrm{H}$ でなく、\
$\Xi < \mathrm{H}$ である。

7) $\Xi$ が負、$\mathrm{H}$ が負なら、

$|\Xi| < |\mathrm{H}|$ のとき、$\Xi \neq \mathrm{H}$、$\Xi > \mathrm{H}$ であり、$\Xi$ は $< \mathrm{H}$ でなく、\
$|\Xi| = |\mathrm{H}|$ のとき、$\Xi = \mathrm{H}$ であり、$\Xi$ は $> \mathrm{H}$ でなく、$\Xi$ は $< \mathrm{H}$ でなく、\
$|\Xi| > |\mathrm{H}|$ のとき、$\Xi \neq \mathrm{H}$ であり、$\Xi$ は $> \mathrm{H}$ でなく、$\Xi < \mathrm{H}$ である。

**定義 47:**

```math
\Xi \geqq \mathrm{H}
```

は

$\Xi > \mathrm{H}$ または $\Xi = \mathrm{H}$ を意味する。

($\geqq$ は「より大きいか等しい」と読む。)

**定義 48:**

```math
\Xi \leqq \mathrm{H}
```

は

$\Xi < \mathrm{H}$ または $\Xi = \mathrm{H}$ を意味する。

($\leqq$ は「より小さいか等しい」と読む。)

**定理 168:**

```math
\Xi > \mathrm{H}
```

から

```math
\mathrm{H} < \Xi
```

が従い、逆も成り立つ。

**証明:** 定義 46。

は確かである\
2) とする\
このとき\
ゆえに\
3) とする\
このとき\
$\Xi \leqq 0$,\
$\Xi < \mathrm{Z}$.\
$\mathrm{Z} = 0$.\
$\mathrm{H} < 0$,\
$\Xi < 0$,\
$\Xi < \mathrm{Z}$.\
$\mathrm{Z} < 0$.\
$\mathrm{H} < 0$,\
$\Xi < 0$.

**定理 169:** 正の数とは $> 0$ なる数のことであり、負の数とは $< 0$ なる数のことである。

**証明:** 1) 定義 45 により

```math
\xi > 0.
```

である。

2)

```math
\Xi > 0
```

から、定義 45 により

```math
\Xi = \xi.
```

が従う。

3) 定義 46 により

```math
-\xi < 0.
```

である。

4)

```math
\Xi < 0
```

から、定義 46 により

```math
\Xi = -\xi.
```

が従う。

**定理 170:** $|\Xi| \geqq 0$。

**証明:** 定義 44、定理 166 および定理 169。

**定理 171**(順序の推移律):

```math
\Xi < \mathrm{H}, \quad \mathrm{H} < \mathrm{Z}
```

から

```math
\Xi < \mathrm{Z}.
```

が従う。

**証明:** 1)

```math
\mathrm{Z} > 0.
```

とする。

もし

```math
\Xi > 0,
```

ならば

```math
\mathrm{H} > 0,
```

であり、従来の定理 126 が適用される。

もし

さらに

```math
|\Xi| > |\mathrm{H}|, \quad |\mathrm{H}| > |\mathrm{Z}|,
```

であり、ゆえに

```math
|\Xi| > |\mathrm{Z}|,
```

```math
\Xi < \mathrm{Z}.
```

である。

**定理 172:**

```math
\Xi \leqq \mathrm{H}, \ \mathrm{H} < \mathrm{Z} \quad \text{または} \quad \Xi < \mathrm{H}, \ \mathrm{H} \leqq \mathrm{Z}
```

から

```math
\Xi < \mathrm{Z}.
```

が従う。

**証明:** 仮定において等号が成り立つ場合は明らかであり、そうでない場合は定理 171 により片付く。

**定理 173:**

```math
\Xi \leqq \mathrm{H}, \quad \mathrm{H} \leqq \mathrm{Z}
```

から

```math
\Xi \leqq \mathrm{Z}.
```

が従う。

**証明:** 仮定において二つの等号が成り立つ場合は明らかであり、そうでない場合は定理 172 により片付く。

**定義 49:**

```math
\Xi \leqq 0,
```

のとき、$\Xi$ が有理であるとは、

```math
\Xi = 0
```

であるか、または

$\Xi < 0$ で $|\Xi|$ が有理であることをいう。

こうしてわれわれは今や、正の有理数、有理数 0、および負の有理数を持つ。

**定義 50:**

```math
\Xi \leqq 0,
```

のとき、$\Xi$ が無理であるとは、それが有理でないことをいう。

こうしてわれわれは今や、正の無理数と負の無理数を持つ。(そのような数はあるのか?ある。われわれは無理な $\xi$ を持っていた。ゆえに正の数 $\xi + X$ は常に無理である。なぜなら

```math
\xi + X = Y
```

から

```math
\xi = Y - X;
```

が従うことになるからである。そして $-(\xi + X)$ は常に負の無理数である。)

**定義 51:**

```math
\Xi \leqq 0,
```

のとき、$\Xi$ が整であるとは、

```math
\Xi = 0
```

であるか、または

$\Xi < 0$ で $|\Xi|$ が整であることをいう。

こうしてわれわれは今や、正の整数、整数 0、および負の整数を持つ。

**定理 174:** すべての整数は有理数である。

**証明:** 正の数についてはすでに分かっている。0 と負の数については定義 49 と定義 51 から従う。

## § 3. 加法

**定義 52:**

```math
\Xi + \mathrm{H} =
\begin{cases}
-(|\Xi| + |\mathrm{H}|), & \text{wenn } \Xi < 0,\ \mathrm{H} < 0; \\
0, & \text{wenn } \Xi > 0,\ \mathrm{H} < 0,\ |\Xi| = |\mathrm{H}|; \\
|\Xi| - |\mathrm{H}| \ \text{ないし} \ -(|\mathrm{H}| - |\Xi|), & \text{wenn } \Xi > 0,\ \mathrm{H} < 0,\ |\Xi| > |\mathrm{H}| \ \text{ないし} \ |\Xi| < |\mathrm{H}|; \\
\mathrm{H} + \Xi, & \text{wenn } \Xi < 0,\ \mathrm{H} > 0; \\
\mathrm{H}, & \text{wenn } \Xi = 0; \\
\Xi, & \text{wenn } \mathrm{H} = 0.
\end{cases}
```

($+$ は「プラス」と読む。)$\Xi + \mathrm{H}$ は $\Xi$ と $\mathrm{H}$ の和、または $\Xi$ への $\mathrm{H}$ の加法によって生じる数と呼ばれる。

この定義については次のことに注意せよ:

1) 次の場合

```math
\Xi > 0, \quad \mathrm{H} > 0
```

には、$\Xi + \mathrm{H}$ という概念はすでに定義 34 から得られている。

2) この概念は定義 52 においても用いられた。

3) 定義の第三の場合は、第二の場合における和の概念を用いている。

4) 第四の場合と第五の場合は、次のとき互いに重なり合う:

```math
\Xi = \mathrm{H} = 0;
```

しかしそのとき、$\Xi + \mathrm{H}$ として定義される数は同一(すなわち 0)である。

**定理 175**(加法の交換法則):

```math
\Xi + \mathrm{H} = \mathrm{H} + \Xi.
```

**証明:** もし

```math
\Xi = 0
```

ならば両方の数とも $\mathrm{H}$ であり、また

```math
\mathrm{H} = 0
```

ならば両方とも $\Xi$ である。

また

```math
\Xi > 0, \quad \mathrm{H} > 0
```

の場合には、既知の定理 130 がそのまま当てはまる。

また

```math
\Xi < 0, \quad \mathrm{H} < 0
```

の場合には、定理 130 により

```math
\Xi + \mathrm{H} = -(|\Xi| + |\mathrm{H}|) = -(|\mathrm{H}| + |\Xi|) = \mathrm{H} + \Xi.
```

また

```math
\Xi < 0, \quad \mathrm{H} > 0
```

の場合には、主張はまさに定義そのものであった。

また

```math
\Xi > 0, \quad \mathrm{H} < 0
```

の場合には、直前の場合により

```math
\mathrm{H} + \Xi = \Xi + \mathrm{H},
```

ゆえに

```math
\Xi + \mathrm{H} = \mathrm{H} + \Xi.
```

**定義 53:**

```math
-\Xi =
\begin{cases}
0 & \text{für } \Xi = 0, \\
|\Xi| & \text{für } \Xi < 0.
\end{cases}
```

($-$ は「マイナス」と読む。)

$\Xi > 0$ に対しては、$-\Xi$ という概念をすでに定義 43 から得ていることに注意せよ。

**定理 176:** もし

```math
\Xi > 0 \ \text{ないし} \ \Xi = 0 \ \text{ないし} \ \Xi < 0,
```

ならば、それぞれ

```math
-\Xi < 0 \ \text{ないし} \ -\Xi = 0 \ \text{ないし} \ -\Xi > 0
```

であり、逆もまた成り立つ。

**証明:** 定義 43 と定義 53 による。

**定理 177:** $-(-\Xi) = \Xi$.

**証明:** 定義 43、44 および 53 による。

**定理 178:** $|-\Xi| = |\Xi|$.

**証明:** 定義 43、44 および 53 による。

**定理 179:** $\Xi + (-\Xi) = 0$.

**証明:** 定義 52、定義 53 および定理 178 による。

**定理 180:** $-(\Xi + \mathrm{H}) = -\Xi + (-\mathrm{H})$.

**証明:** 定理 175 により

```math
-(\Xi + \mathrm{H}) = -(\mathrm{H} + \Xi)
```

かつ

```math
-\Xi + (-\mathrm{H}) = -\mathrm{H} + (-\Xi);
```

であるから、一般性を制限することなく

```math
\Xi \geqq \mathrm{H}
```

を仮定してよい。なぜなら、二つの関係

```math
\Xi \geqq \mathrm{H}, \quad \mathrm{H} \geqq \Xi
```

のうち少なくとも一方が成り立ち、また

```math
-(\mathrm{H} + \Xi) = -\mathrm{H} + (-\Xi)
```

からまさに

```math
-(\Xi + \mathrm{H}) = -\Xi + (-\mathrm{H}).
```

が従うからである。そこで、以下では次を仮定する:

```math
\Xi \geqq \mathrm{H}.
```

1) もし

```math
\Xi > 0, \quad \mathrm{H} > 0,
```

ならば

```math
-\Xi + (-\mathrm{H}) = -(\Xi + \mathrm{H}).
```

2) もし

```math
\Xi > 0, \quad \mathrm{H} = 0,
```

ならば

```math
-\Xi + (-\mathrm{H}) = -\Xi + 0 = -\Xi = -(\Xi + 0) = -(\Xi + \mathrm{H}).
```

3) もし

```math
\Xi > 0, \quad \mathrm{H} < 0,
```

ならば

あるいは

```math
\Xi > |\mathrm{H}|,
```

したがって

```math
\Xi + \mathrm{H} = \Xi - |\mathrm{H}|,
```

```math
-\Xi + (-\mathrm{H}) = -\Xi + |\mathrm{H}| = -(\Xi - |\mathrm{H}|) = -(\Xi + \mathrm{H});
```

あるいは

```math
\Xi = |\mathrm{H}|,
```

したがって

```math
\Xi + \mathrm{H} = 0,
```

```math
-\Xi + (-\mathrm{H}) = -\Xi + |\mathrm{H}| = 0 = -(\Xi + \mathrm{H});
```

あるいは

```math
\Xi < |\mathrm{H}|,
```

したがって

```math
\Xi + \mathrm{H} = -(|\mathrm{H}| - \Xi),
```

```math
-\Xi + (-\mathrm{H}) = -\Xi + |\mathrm{H}| = |\mathrm{H}| - \Xi = -(\Xi + \mathrm{H}).
```

4) もし

```math
\Xi = 0,
```

ならば

```math
-\Xi + (-\mathrm{H}) = 0 + (-\mathrm{H}) = -\mathrm{H} = -(0 + \mathrm{H}) = -(\Xi + \mathrm{H}).
```

5) もし

```math
\Xi < 0,
```

ならば

```math
\mathrm{H} < 0,
```

```math
\Xi + \mathrm{H} = -(|\Xi| + |\mathrm{H}|),
```

```math
-\Xi + (-\mathrm{H}) = |\Xi| + |\mathrm{H}| = -(\Xi + \mathrm{H}).
```

**定義 54:** $\Xi - \mathrm{H} = \Xi + (-\mathrm{H})$.

($-$ は「マイナス」と読む。)$\Xi - \mathrm{H}$ は差 $\Xi$ マイナス $\mathrm{H}$、または $\Xi$ からの $\mathrm{H}$ の減法によって生じる数と呼ばれる。

定義 54 は(当然そうでなければならないが)

```math
\Xi > \mathrm{H} > 0
```

のとき、以前の定義 35 と一致することに注意せよ。実際、そのときは

```math
\Xi > 0, \quad -\mathrm{H} < 0, \quad |\Xi| > |-\mathrm{H}|, \quad \Xi + (-\mathrm{H}) = |\Xi| - |-\mathrm{H}| = \Xi - \mathrm{H}.
```

**定理 181:** $-(\Xi - \mathrm{H}) = \mathrm{H} - \Xi$.

**証明:** 定理 180 と定理 177 により

```math
-(\Xi - \mathrm{H}) = -(\Xi + (-\mathrm{H})) = -\Xi + (-(-\mathrm{H})) = -\Xi + \mathrm{H} = \mathrm{H} + (-\Xi) = \mathrm{H} - \Xi.
```

**定理 182:** もし

```math
\Xi - \mathrm{H} > 0 \ \text{ないし} \ \Xi - \mathrm{H} = 0 \ \text{ないし} \ \Xi - \mathrm{H} < 0
```

ならば、それぞれ

```math
\Xi > \mathrm{H} \ \text{ないし} \ \Xi = \mathrm{H} \ \text{ないし} \ \Xi < \mathrm{H}
```

であり、逆もまた成り立つ。

**証明:** $-\mathrm{H}$ もまた任意の実数であるから、$\mathrm{H}$ の代わりに $-\mathrm{H}$ と書いてよく、したがって

```math
\Xi + \mathrm{H} > 0 \ \text{ないし} \ \Xi + \mathrm{H} = 0 \ \text{ないし} \ \Xi + \mathrm{H} < 0
```

と

```math
\Xi > -\mathrm{H} \ \text{ないし} \ \Xi = -\mathrm{H} \ \text{ないし} \ \Xi < -\mathrm{H}
```

とにおける場合の対応を示せばよい。

実際、$\Xi = 0$ または $\mathrm{H} = 0$ のときは主張は明らかである。それ以外では、

```math
\Xi > 0, \quad \mathrm{H} > 0
```

の場合と、定義 52 の最初の三つの場合とにおいて(ただし第三の場合は三つの小場合

```math
|\mathrm{H}| > |\Xi|, \quad |\mathrm{H}| = |\Xi|, \quad |\mathrm{H}| < |\Xi|
```

に分けるものとする)、いずれの側にもそれぞれ次の記号が成り立つ:

```math
>, \ =, \ <; \qquad >, \ =, \ <.
```

**定理 183:** もし

```math
\Xi > \mathrm{H} \ \text{ないし} \ \Xi = \mathrm{H} \ \text{ないし} \ \Xi < \mathrm{H}
```

ならば\
2) もし\
ならば\
3) もし\
ならば\
$\Xi > 0$,\
$\Xi = (\Xi + 1) - 1$.\
$\Xi = 0$,\
$\Xi = 1 - 1$.\
$\Xi < 0$,\
$-\Xi = |\Xi| = (|\Xi| + 1) - 1$,\
$\Xi = -((|\Xi| + 1) - 1) = 1 - (|\Xi| + 1)$.

**定理 185:** もし

```math
\Xi = \xi_1 - \xi_2, \quad \mathrm{H} = \eta_1 - \eta_2
```

ならば

```math
\Xi + \mathrm{H} = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

**証明:** 1) いま

```math
\Xi > 0, \quad \mathrm{H} > 0.
```

とする。このとき、

```math
\begin{aligned}
(\alpha + \beta) + (\gamma + \delta) &= (\alpha + \beta) + (\delta + \gamma) = ((\alpha + \beta) + \delta) + \gamma \\
&= \gamma + (\alpha + (\beta + \delta)) = (\gamma + \alpha) + (\beta + \delta)
\end{aligned}
```

であるから

```math
(\Xi + \mathrm{H}) + (\xi_2 + \eta_2) = (\Xi + \xi_2) + (\mathrm{H} + \eta_2) = \xi_1 + \eta_1,
```

となり、したがって主張は真である。

ならば、それぞれ

```math
-\Xi < -\mathrm{H} \ \text{ないし} \ -\Xi = -\mathrm{H} \ \text{ないし} \ -\Xi > -\mathrm{H}
```

であり、逆もまた成り立つ。

**証明:** 定理 182 により、前者は次の場合に対応し

```math
\Xi - \mathrm{H} > 0 \ \text{ないし} \ \Xi - \mathrm{H} = 0 \ \text{ないし} \ \Xi - \mathrm{H} < 0,
```

後者は次の場合に対応する:

```math
-\mathrm{H} - (-\Xi) > 0 \ \text{ないし} \ -\mathrm{H} - (-\Xi) = 0 \ \text{ないし} \ -\mathrm{H} - (-\Xi) < 0;
```

ゆえに

```math
-\mathrm{H} - (-\Xi) = -\mathrm{H} + (-(-\Xi)) = -\mathrm{H} + \Xi = \Xi + (-\mathrm{H}) = \Xi - \mathrm{H}
```

がすべてを与える。

**定理 184:** 任意の実数は、二つの正の数の差として表すことができる。

**証明:** 1) もし

2) いま

```math
\Xi < 0, \quad \mathrm{H} < 0.
```

とする。このとき定理 181 により

```math
\xi_2 - \xi_1 = -\Xi > 0, \quad \eta_2 - \eta_1 = -\mathrm{H} > 0,
```

ゆえに 1) により

```math
-\Xi + (-\mathrm{H}) = (\xi_2 + \eta_2) - (\xi_1 + \eta_1),
```

```math
\Xi + \mathrm{H} = -(-\Xi + (-\mathrm{H})) = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

3) いま

```math
\Xi > 0, \quad \mathrm{H} < 0,
```

とする。したがって

```math
\xi_1 - \xi_2 > 0, \quad \eta_2 - \eta_1 > 0.
```

A) もし

```math
\Xi > |\mathrm{H}|,
```

ならば

```math
\xi_1 - \xi_2 > \eta_2 - \eta_1,
```

したがって

```math
\begin{aligned}
\xi_1 + \eta_1 &= ((\xi_1 - \xi_2) + \xi_2) + \eta_1 = (\xi_1 - \xi_2) + (\xi_2 + \eta_1) = (\xi_2 + \eta_1) + (\xi_1 - \xi_2) \\
&= (\xi_2 + \eta_1) + ((\eta_2 - \eta_1) + ((\xi_1 - \xi_2) - (\eta_2 - \eta_1))) \\
&= ((\xi_2 + \eta_1) + (\eta_2 - \eta_1)) + ((\xi_1 - \xi_2) - (\eta_2 - \eta_1)) \\
&= (\xi_2 + (\eta_1 + (\eta_2 - \eta_1))) + ((\xi_1 - \xi_2) - (\eta_2 - \eta_1)) \\
&= (\xi_2 + \eta_2) + ((\xi_1 - \xi_2) - (\eta_2 - \eta_1)),
\end{aligned}
```

```math
(\xi_1 + \eta_1) - (\xi_2 + \eta_2) = (\xi_1 - \xi_2) - (\eta_2 - \eta_1) = \Xi - |\mathrm{H}| = \Xi + \mathrm{H}.
```

B) もし

```math
\Xi < |\mathrm{H}|,
```

ならば、A) により

```math
\Xi + \mathrm{H} = -(-\mathrm{H} + (-\Xi)) = -((\xi_2 + \eta_2) - (\xi_1 + \eta_1)) = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

C) もし

```math
\Xi = |\mathrm{H}|,
```

すなわち

```math
\xi_1 - \xi_2 = \eta_2 - \eta_1,
```

ならば

```math
\xi_1 = \xi_2 + (\eta_2 - \eta_1),
```

```math
\xi_1 + \eta_1 = \xi_2 + \eta_2,
```

```math
\Xi + \mathrm{H} = 0 = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

4) いま

```math
\Xi < 0, \quad \mathrm{H} > 0.
```

とする。このとき 3) により

```math
\Xi + \mathrm{H} = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

5) いま

```math
\Xi = 0.
```

とする。このとき

```math
\xi_1 = \xi_2,
```

```math
\Xi + \mathrm{H} = \mathrm{H}.
```

a) もし

```math
\eta_1 > \eta_2
```

ならば

```math
(\eta_1 - \eta_2) + (\xi_1 + \eta_2) = ((\eta_1 - \eta_2) + \eta_2) + \xi_1 = \eta_1 + \xi_1 = \xi_1 + \eta_1,
```

b) もし

```math
\eta_1 = \eta_2
```

ならば

```math
\mathrm{H} = 0 = (\xi_1 + \eta_1) - (\xi_1 + \eta_2).
```

c) もし

```math
\eta_1 < \eta_2
```

ならば、a) により

```math
\mathrm{H} = -(-\mathrm{H}) = -((\xi_1 + \eta_2) - (\xi_1 + \eta_1)) = (\xi_1 + \eta_1) - (\xi_1 + \eta_2).
```

6) いま

```math
\mathrm{H} = 0.
```

とする。このとき 5) により

```math
\Xi + \mathrm{H} = \mathrm{H} + \Xi = (\eta_1 + \xi_1) - (\eta_2 + \xi_2) = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

**定理 186**(加法の結合法則):

```math
(\Xi + \mathrm{H}) + \mathrm{Z} = \Xi + (\mathrm{H} + \mathrm{Z}).
```

**証明:** 定理 184 により

```math
\Xi = \xi_1 - \xi_2, \quad \mathrm{H} = \eta_1 - \eta_2, \quad \mathrm{Z} = \zeta_1 - \zeta_2.
```

定理 185 により

```math
\begin{aligned}
(\Xi + \mathrm{H}) + \mathrm{Z} &= ((\xi_1 + \eta_1) - (\xi_2 + \eta_2)) + (\zeta_1 - \zeta_2) \\
&= ((\xi_1 + \eta_1) + \zeta_1) - ((\xi_2 + \eta_2) + \zeta_2) = (\xi_1 + (\eta_1 + \zeta_1)) - (\xi_2 + (\eta_2 + \zeta_2)) \\
&= (\xi_1 - \xi_2) + ((\eta_1 + \zeta_1) - (\eta_2 + \zeta_2)) = \Xi + (\mathrm{H} + \mathrm{Z}).
\end{aligned}
```

**定理 187:** $\Xi$, $\mathrm{H}$ が与えられたとき、

```math
\mathrm{H} + \Upsilon = \Xi
```

はちょうど一つの解 $\Upsilon$ をもつ。すなわち

```math
\Upsilon = \Xi - \mathrm{H}.
```

**証明:** 1)

```math
\Upsilon = \Xi - \mathrm{H}
```

は一つの解である。なぜなら、定理 186 により

```math
\mathrm{H} + (\Xi - \mathrm{H}) = (\Xi - \mathrm{H}) + \mathrm{H} = (\Xi + (-\mathrm{H})) + \mathrm{H} = \Xi + (-\mathrm{H} + \mathrm{H}) = \Xi + 0 = \Xi.
```

2) もし

```math
\mathrm{H} + \Upsilon = \Xi
```

ならば

```math
\Xi - \mathrm{H} = \Xi + (-\mathrm{H}) = -\mathrm{H} + \Xi = -\mathrm{H} + (\mathrm{H} + \Upsilon) = (-\mathrm{H} + \mathrm{H}) + \Upsilon = 0 + \Upsilon = \Upsilon.
```

**定理 188:** 次のうち

```math
\Xi + \mathrm{Z} > \mathrm{H} + \mathrm{Z} \ \text{ないし} \ \Xi + \mathrm{Z} = \mathrm{H} + \mathrm{Z} \ \text{ないし} \ \Xi + \mathrm{Z} < \mathrm{H} + \mathrm{Z},
```

のいずれが成り立つかは、それぞれ、次のいずれであるかに応じて定まる:

```math
\Xi > \mathrm{H} \ \text{ないし} \ \Xi = \mathrm{H} \ \text{ないし} \ \Xi < \mathrm{H}.
```

**証明:** 定理 182 により、前者が成り立つのは、それぞれ次に応じてである:

```math
(\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) > 0 \ \text{ないし} \ (\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) = 0 \ \text{ないし} \ (\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) < 0;
```

後者が成り立つのは、それぞれ次に応じてである:

```math
\Xi - \mathrm{H} > 0 \ \text{ないし} \ \Xi - \mathrm{H} = 0 \ \text{ないし} \ \Xi - \mathrm{H} < 0.
```

そして

```math
(\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) = (\Xi + \mathrm{Z}) + (-\mathrm{Z} + (-\mathrm{H})) = (\Xi + (\mathrm{Z} + (-\mathrm{Z}))) + (-\mathrm{H}) = \Xi + (-\mathrm{H}) = \Xi - \mathrm{H}
```

から、したがって主張が従う。

**定理 189:** もし

```math
\Xi > \mathrm{H}, \quad \mathrm{Z} > \Upsilon
```

ならば

```math
\Xi + \mathrm{Z} > \mathrm{H} + \Upsilon.
```

**証明:** 定理 188 により

```math
\Xi + \mathrm{Z} > \mathrm{H} + \mathrm{Z}
```

かつ

```math
\mathrm{H} + \mathrm{Z} = \mathrm{Z} + \mathrm{H} > \Upsilon + \mathrm{H} = \mathrm{H} + \Upsilon,
```

ゆえに

```math
\Xi + \mathrm{Z} > \mathrm{H} + \Upsilon.
```

**定理 190:** もし

```math
\Xi \geqq \mathrm{H}, \ \mathrm{Z} > \Upsilon \quad \text{または} \quad \Xi > \mathrm{H}, \ \mathrm{Z} \geqq \Upsilon
```

ならば

```math
\Xi + \mathrm{Z} > \mathrm{H} + \Upsilon.
```

**証明:** 仮定に等号が現れる場合は定理 188 により、それ以外の場合は定理 189 により片付く。

**定理 191:** もし

```math
\Xi \geqq \mathrm{H}, \quad \mathrm{Z} \geqq \Upsilon
```

ならば

```math
\Xi + \mathrm{Z} \geqq \mathrm{H} + \Upsilon.
```

**証明:** 仮定に二つの等号がある場合は明らかであり、それ以外は定理 190 により片付く。

## § 4. 乗法

**定義 55:**

```math
\Xi \cdot \mathrm{H} =
\begin{cases}
-(|\Xi| \, |\mathrm{H}|), & \text{wenn } \Xi > 0,\ \mathrm{H} < 0 \ \text{または} \ \Xi < 0,\ \mathrm{H} > 0; \\
|\Xi| \, |\mathrm{H}|, & \text{wenn } \Xi < 0,\ \mathrm{H} < 0; \\
0, & \text{wenn } \Xi = 0 \ \text{または} \ \mathrm{H} = 0.
\end{cases}
```

($\cdot$ は「掛ける」と読む。ただしこの点はふつう書かない。)$\Xi \cdot \mathrm{H}$ を $\Xi$ と $\mathrm{H}$ との積、または $\Xi$ に $\mathrm{H}$ を乗ずる乗法によって生ずる数と呼ぶ。

$\Xi > 0$, $\mathrm{H} > 0$ の場合の $\Xi \cdot \mathrm{H}$ は定義 36 によってすでにわれわれに知られていることに注意せよ。このことはまさに定義 55 においても用いられている。

**定理 192:**

```math
\Xi \mathrm{H} = 0
```

となるのは、二つの数 $\Xi$, $\mathrm{H}$ のうち少なくとも一方が 0 のとき、またそのときに限る。

**証明:** 定義 55 による。

**定理 193:** $|\Xi \mathrm{H}| = |\Xi| \, |\mathrm{H}|$.

**証明:** 定義 55 による。

**定理 194**(乗法の交換法則):

```math
\Xi \mathrm{H} = \mathrm{H} \Xi.
```

**証明:** $\Xi > 0$, $\mathrm{H} > 0$ の場合、これは定理 142 である。それ以外の場合は定義 55 から従う。なぜなら、この定義の右辺は(定理 142 により)、また場合分けも、$\Xi$, $\mathrm{H}$ に関して対称だからである。

**定理 195:** $\Xi \cdot 1 = \Xi$.

**証明:** $\Xi > 0$ の場合、これは定理 151 から従う。$\Xi = 0$ の場合は定義 55 から従う。$\Xi < 0$ の場合は、定義 55 により

```math
\Xi \cdot 1 = -(|\Xi| \cdot 1) = -|\Xi| = \Xi.
```

**定理 196:**

```math
\Xi \neq 0, \quad \mathrm{H} \neq 0,
```

ならば

```math
\Xi \mathrm{H} = |\Xi| \, |\mathrm{H}| \quad \text{ないし} \quad \Xi \mathrm{H} = -(|\Xi| \, |\mathrm{H}|),
```

であり、数 $\Xi$, $\mathrm{H}$ のうち負のものが一つもないか二つあるか、あるいはちょうど一つあるかに応じて、それぞれ前者あるいは後者が成り立つ。

**証明:** 定義 55 による。

**定理 197:** $(-\Xi) \mathrm{H} = \Xi (-\mathrm{H}) = -(\Xi \mathrm{H})$.

**証明:** 1) 数 $\Xi$, $\mathrm{H}$ のうち一方が 0 ならば、三つの式はすべて 0 である。

2)

```math
\Xi \neq 0, \quad \mathrm{H} \neq 0,
```

ならば、定理 193 により三つの式はすべて同じ絶対値 $|\Xi| \, |\mathrm{H}|$ をもち、定理 196 により、数 $\Xi$, $\mathrm{H}$ のうち負のものがちょうど一つあるか、それとも一つもないか二つあるかに応じて、三つの式はすべて $> 0$ あるいは $< 0$ である。

**定理 198:** $(-\Xi)(-\mathrm{H}) = \Xi \mathrm{H}$.

**証明:** 定理 197 により

```math
(-\Xi)(-\mathrm{H}) = \Xi(-(-\mathrm{H})) = \Xi \mathrm{H}.
```

**定理 199**(乗法の結合法則):

```math
(\Xi \mathrm{H}) \mathrm{Z} = \Xi (\mathrm{H} \mathrm{Z}).
```

**証明:** 1) 数 $\Xi$, $\mathrm{H}$, $\mathrm{Z}$ のうち一つが 0 ならば、主張の両辺はともに 0 である。

2)

```math
\Xi \neq 0, \quad \mathrm{H} \neq 0, \quad \mathrm{Z} \neq 0,
```

ならば、定理 193 により両辺は同じ絶対値

```math
(|\Xi| \, |\mathrm{H}|) \, |\mathrm{Z}| = |\Xi| \, (|\mathrm{H}| \, |\mathrm{Z}|),
```

をもち、定理 196 により、数 $\Xi$, $\mathrm{H}$, $\mathrm{Z}$ のうち負のものが一つもないかちょうど二つあるか、それともちょうど一つあるか三つあるかに応じて、両辺はともに $> 0$ あるいは $< 0$ である。

**定理 200:** $\xi(\eta - \zeta) = \xi\eta - \xi\zeta$.

**証明:** 1)

```math
\eta > \zeta
```

の場合、

```math
(\eta - \zeta) + \zeta = \eta,
```

であるから、定理 144 により

```math
\xi(\eta - \zeta) + \xi\zeta = \xi\eta,
```

```math
\xi(\eta - \zeta) = \xi\eta - \xi\zeta.
```

2)

```math
\eta = \zeta
```

の場合、

```math
\eta - \zeta = 0,
```

```math
\xi(\eta - \zeta) = \xi \cdot 0 = 0 = \xi\eta - \xi\zeta.
```

3)

```math
\eta < \zeta
```

の場合、1) により

```math
\xi(\zeta - \eta) = \xi\zeta - \xi\eta,
```

```math
\xi(\eta - \zeta) = \xi(-(\zeta - \eta)) = -(\xi(\zeta - \eta)) = -(\xi\zeta - \xi\eta) = \xi\eta - \xi\zeta.
```

**定理 201**(分配法則):

```math
\Xi(\mathrm{H} + \mathrm{Z}) = \Xi\mathrm{H} + \Xi\mathrm{Z}.
```

**証明:** 1)

```math
\Xi > 0.
```

とする。定理 184 により

```math
\mathrm{H} = \eta_1 - \eta_2, \quad \mathrm{Z} = \zeta_1 - \zeta_2,
```

であり、したがって定理 185 により

```math
\mathrm{H} + \mathrm{Z} = (\eta_1 + \zeta_1) - (\eta_2 + \zeta_2),
```

であるから、定理 200 と定理 144 により

```math
\Xi(\mathrm{H} + \mathrm{Z}) = \Xi(\eta_1 + \zeta_1) - \Xi(\eta_2 + \zeta_2) = (\Xi\eta_1 + \Xi\zeta_1) - (\Xi\eta_2 + \Xi\zeta_2),
```

となり、さらに定理 185 と定理 200 により

```math
\Xi(\mathrm{H} + \mathrm{Z}) = (\Xi\eta_1 - \Xi\eta_2) + (\Xi\zeta_1 - \Xi\zeta_2) = \Xi(\eta_1 - \eta_2) + \Xi(\zeta_1 - \zeta_2) = \Xi\mathrm{H} + \Xi\mathrm{Z}.
```

2)

```math
\Xi = 0.
```

とする。このとき

```math
\Xi(\mathrm{H} + \mathrm{Z}) = 0 = \Xi\mathrm{H} + \Xi\mathrm{Z}.
```

3)

```math
\Xi < 0.
```

とする。このとき 1) により

```math
(-\Xi)(\mathrm{H} + \mathrm{Z}) = (-\Xi)\mathrm{H} + (-\Xi)\mathrm{Z},
```

であるから、

```math
-(\Xi(\mathrm{H} + \mathrm{Z})) = (-\Xi)\mathrm{H} + (-\Xi)\mathrm{Z},
```

```math
\Xi(\mathrm{H} + \mathrm{Z}) = -((-\Xi)\mathrm{H} + (-\Xi)\mathrm{Z}) = -((-\Xi)\mathrm{H}) + (-((-\Xi)\mathrm{Z})) = \Xi\mathrm{H} + \Xi\mathrm{Z}.
```

**定理 202:** $\Xi(\mathrm{H} - \mathrm{Z}) = \Xi\mathrm{H} - \Xi\mathrm{Z}$.

**証明:** 定理 201 により

```math
\Xi(\mathrm{H} - \mathrm{Z}) = \Xi(\mathrm{H} + (-\mathrm{Z})) = \Xi\mathrm{H} + \Xi(-\mathrm{Z}) = \Xi\mathrm{H} + (-(\Xi\mathrm{Z})) = \Xi\mathrm{H} - \Xi\mathrm{Z}.
```

**定理 203:**

```math
\Xi > \mathrm{H}.
```

とする。
は一つの解である。なぜなら\
$\mathrm{H}\Upsilon = $ ,\
2) \
$\mathrm{H} < 0$ とする。

このとき

```math
\mathrm{Z} > 0 \ \text{ないし} \ \mathrm{Z} = 0 \ \text{ないし} \ \mathrm{Z} < 0
```

から

```math
\Xi\mathrm{Z} > \mathrm{H}\mathrm{Z} \ \text{ないし} \ \Xi\mathrm{Z} = \mathrm{H}\mathrm{Z} \ \text{ないし} \ \Xi\mathrm{Z} < \mathrm{H}\mathrm{Z}.
```

が従う。

**証明:**

```math
\Xi - \mathrm{H} > 0,
```

であるから、

```math
(\Xi - \mathrm{H})\mathrm{Z} > 0 \ \text{ないし} \ (\Xi - \mathrm{H})\mathrm{Z} = 0 \ \text{ないし} \ (\Xi - \mathrm{H})\mathrm{Z} < 0,
```

であって、それぞれ

```math
\mathrm{Z} > 0 \ \text{ないし} \ \mathrm{Z} = 0 \ \text{ないし} \ \mathrm{Z} < 0.
```

に応ずる。定理 202 により

```math
(\Xi - \mathrm{H})\mathrm{Z} = \mathrm{Z}(\Xi - \mathrm{H}) = \mathrm{Z}\Xi - \mathrm{Z}\mathrm{H} = \Xi\mathrm{Z} - \mathrm{H}\mathrm{Z}
```

であるから、これらの場合には定理 182 により

```math
\Xi\mathrm{Z} > \mathrm{H}\mathrm{Z} \ \text{ないし} \ \Xi\mathrm{Z} = \mathrm{H}\mathrm{Z} \ \text{ないし} \ \Xi\mathrm{Z} < \mathrm{H}\mathrm{Z}.
```

である。

**定理 204:** 方程式

```math
\mathrm{H}\Upsilon = \Xi,
```

は、$\Xi$, $\mathrm{H}$ が与えられており

```math
\mathrm{H} \neq 0
```

であるとき、ちょうど一つの解 $\Upsilon$ をもつ。

**証明:** I) 解は高々一つである。なぜなら、

```math
\mathrm{H}\Upsilon_1 = \Xi = \mathrm{H}\Upsilon_2
```

から

```math
0 = \mathrm{H}\Upsilon_1 - \mathrm{H}\Upsilon_2 = \mathrm{H}(\Upsilon_1 - \Upsilon_2),
```

が従い、したがって定理 192 により

```math
0 = \Upsilon_1 - \Upsilon_2,
```

```math
\Upsilon_1 = \Upsilon_2.
```

となるからである。

II) 1)

```math
\mathrm{H} > 0.
```

とする。このとき

このとき

が一つの解である。なぜなら、1) により

```math
\Xi = |\mathrm{H}|(-\Upsilon) = (-|\mathrm{H}|)\Upsilon = \mathrm{H}\Upsilon.
```

だからである。

**定義 56:** 定理 204 の $\Upsilon$ を $\frac{\Xi}{\mathrm{H}}$ と呼ぶ($\Xi$ 割る $\mathrm{H}$ と読む)。$\frac{\Xi}{\mathrm{H}}$ はまた、$\Xi$ の $\mathrm{H}$ による商、あるいは $\Xi$ を $\mathrm{H}$ で除する除法によって生ずる数とも呼ばれる。

(当然そうでなければならないが)$\Xi > 0$, $\mathrm{H} > 0$ の場合、これが以前の定義 38 と一致することに注意せよ。

## § 5. デデキントの主定理

**定理 205:** すべての実数を二つの組へ分ける任意の分割で、次の性質をもつものが与えられたとする。

1) 第一の組に属する数と第二の組に属する数とが存在する。

2) 第一の組のどの数も第二の組のどの数よりも小さい。

このとき、$\mathrm{H} < \Xi$ なるどの $\mathrm{H}$ も第一の組に、$\mathrm{H} > \Xi$ なるどの $\mathrm{H}$ も第二の組に属するような実数 $\Xi$ がちょうど一つ存在する。

言い換えれば、第一の組のどの数も $\leqq \Xi$ であり、第二の組のどの数も $\geqq \Xi$ である。

**前注:** 逆に、各実数 $\Xi$ がこのような分割をちょうど二つ生ずることは明らかである。一つは $\mathrm{H} \leqq \Xi$ を第一の組、$\mathrm{H} > \Xi$ を第二の組とするものであり、もう一つは $\mathrm{H} < \Xi$ を第一の組、$\mathrm{H} \geqq \Xi$ を第二の組とするものである。

**証明:** A) そのような $\Xi$ は二つ以上存在し得ない。なぜなら、もし

第二の組にも第一の組にも属することになるからである。

B) $\Xi$ の存在を示すために、四つの場合を区別する。

I) 第一の組に正の数が存在するとする。

次のようにして生ずる切断を考える。各正の有理数は、それが第一の組に属し、かつ第一の組の(もしあれば)最大の有理数でないならば下組に入れ、そうでないならば(すなわち、それが第一の組の(もしあれば)最大の有理数であるか、または第二の組に属するならば)上組に入れる。これは実際に切断である。なぜなら:

また $\Xi_1$ と $\Xi_2$ とが求められたことを満たすとすれば、次のゆえに

1) 第一の組は正の数を含むから、それより小さいどの正の有理数をも含み(そのようなものは定理 158 により存在する)、したがって、第一の組の中にそれより大きいものが存在するような数を含む。ゆえに下組は空でない。

第二の組は数を含むから、それより大きいどの正の有理数をも含む(そのようなものは定理 158 により存在する)。ゆえに上組は空でない。

2) 下組のどの数も上組のどの数よりも小さい。なぜなら、第一の組のどの数も第二の組のどの数よりも小さく、また第一の組の(もしあれば)最大の正の有理数は確かに下組のどの数よりも大きいからである。

3) 下組は最大の正の有理数を含まない。なぜなら、第一の組がそもそもそのようなものを含まないか、あるいは含むかのいずれかであるが、後者の場合、それは上組に入れられており、しかも与えられた数より小さい正の有理数のうちには、すでに定理 91 により最大のものは存在しないからである。

われわれの切断によって定義される正の数を $\Xi$ と名づけ、それが課された要求を満たすことを主張する。

a)

```math
\mathrm{H} < \Xi
```

なる $\mathrm{H}$ が与えられたとする。定理 159 により($\mathrm{H} > 0$ のときは $\xi = \mathrm{H}$, $\eta = \Xi$ として、$\mathrm{H} \leqq 0$ のときは $\xi = \frac{\Xi}{1 + 1}$, $\eta = \Xi$ として)

```math
\mathrm{H} < \mathrm{Z} < \Xi.
```

なる $\mathrm{Z}$ を選ぶ。

このとき $\mathrm{Z}$ は $\Xi$ における下数であり、したがって第一の組に属する。ゆえに $\mathrm{H}$ は第一の組に属する。

b)

```math
\mathrm{H} > \Xi
```

なる $\mathrm{H}$ が与えられたとする。定理 159 により

```math
\Xi < \mathrm{Z} < \mathrm{H}.
```

なる $\mathrm{Z}$ を選ぶ。

このとき $\mathrm{Z}$ は $\Xi$ における上数であり、しかも(定理 159 により)最小のものではないから、第二の組に属する。ゆえに $\mathrm{H}$ は第二の組に属する。

II) どの正の数も第二の組に属し、0 は第一の組に属するとする。

このときどの負の数も第一の組に属し、

```math
\Xi = 0
```

が求められたことを満たす。

III) 0 は第二の組に属し、どの負の数も第一の組に属するとする。

このときどの正の数も第二の組に属し、

```math
\Xi = 0
```

が求められたことを満たす。

IV) 第二の組に負の数が存在するとする。

このとき次の新しい分割を考える。

$-\mathrm{H}$ が旧第二の組に属していたならば、$\mathrm{H}$ は新第一の組に入れる。

$-\mathrm{H}$ が旧第一の組に属していたならば、$\mathrm{H}$ は新第二の組に入れる。

この分割は明らかに定理 205 の二つの条件を満たす。なぜなら

1) どちらの組にも数が存在する。

2)

```math
\mathrm{H}_1 < \mathrm{H}_2
```

から、定理 183 により

```math
-\mathrm{H}_2 < -\mathrm{H}_1.
```

が従うからである。

そのうえ、新第一の組には正の数が存在するから、新しい分割は場合 I) に該当する。したがって I) により、

```math
\mathrm{H} < \Xi_1
```

なるどの $\mathrm{H}$ も新第一の組に属し、

```math
\mathrm{H} > \Xi_1
```

なるどの $\mathrm{H}$ も新第二の組に属するような数 $\Xi_1$ が存在する。

```math
-\Xi_1 = \Xi
```

とおけば、

```math
\mathrm{H} < \Xi \quad \text{ないし} \quad \mathrm{H} > \Xi,
```

から

```math
-\mathrm{H} > \Xi_1 \quad \text{ないし} \quad -\mathrm{H} < \Xi_1
```

が従う。したがって $-\mathrm{H}$ はそれぞれ新第二の組あるいは新第一の組に属し、ゆえに $\mathrm{H}$ はそれぞれ旧第一の組あるいは旧第二の組に属する。
