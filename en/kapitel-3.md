# Chapter 3. Cuts

## § 1. Definition

**Definition 28:** A set of rational numbers is called a cut if

1) it contains a rational number, but not every rational number;

2) every rational number of the set is smaller than every rational number not belonging to the set;

3) it contains no greatest rational number (i.e. a number greater than every possible other number, distinct from it).

One also calls the set the lower class, the set of the rational numbers not contained in it the upper class, and speaks correspondingly of lower numbers and upper numbers.

Small Greek letters throughout denote cuts, unless otherwise stated.

**Definition 29:**

```math
\xi = \eta
```

($=$ read: equals), if every lower number of $\xi$ is a lower number of $\eta$ and every lower number of $\eta$ is a lower number of $\xi$.

In other words: if the sets are identical.

Otherwise

```math
\xi \neq \eta
```

($\neq$ read: not equal).

The following three theorems are trivial:

**Theorem 116:** $\xi = \xi$.

**Theorem 117:** From

```math
\xi = \eta
```

follows

```math
\eta = \xi.
```

**Theorem 118:** From

```math
\xi = \eta, \quad \eta = \zeta
```

follows

```math
\xi = \zeta.
```

**Theorem 119:** If $X$ is an upper number of $\xi$ and

```math
X_1 > X,
```

then $X_1$ is an upper number of $\xi$.

**Proof:** Follows from 2) of Definition 28.

**Theorem 120:** If $X$ is a lower number of $\xi$ and

```math
X_1 < X,
```

then $X_1$ is a lower number of $\xi$.

**Proof:** Follows from 2) of Definition 28.

Of course, conversely, the requirement of Theorem 120 is identical with 2) of Definition 28. Hence in order to show of any set of rational numbers that it is a cut, it always suffices to prove:

1) It is not empty, and there is a rational number not contained in it.

2) Along with each of its numbers, every smaller one belongs to it.

3) For each of its numbers there is a greater one in it.

## § 2. Ordering

**Definition 30:** If $\xi$ and $\eta$ are cuts, then

```math
\xi > \eta
```

($>$ read: greater than), if there is a lower number of $\xi$ which is an upper number of $\eta$.

**Definition 31:** If $\xi$ and $\eta$ are cuts, then

```math
\xi < \eta
```

($<$ read: less than), if there is an upper number of $\xi$ which is a lower number of $\eta$.

**Theorem 121:** From

```math
\xi > \eta
```

follows

```math
\eta < \xi.
```

**Proof:** There is indeed an upper number of $\eta$ which is a lower number of $\xi$.

**Theorem 122:** From

```math
\xi < \eta
```

follows

```math
\eta > \xi.
```

**Proof:** There is indeed a lower number of $\eta$ which is an upper number of $\xi$.

**Theorem 123:** If $\xi$, $\eta$ are arbitrary, then exactly one of the cases

```math
\xi = \eta, \quad \xi > \eta, \quad \xi < \eta
```

holds.

**Proof:** 1)

```math
\xi = \eta, \quad \xi > \eta
```

are incompatible by Definition 29 and Definition 30.

```math
\xi = \eta, \quad \xi < \eta
```

are incompatible by Definition 29 and Definition 31.

From

```math
\xi > \eta, \quad \xi < \eta
```

it would follow that there is a lower number $X$ of $\xi$ which is an upper number of $\eta$, and an upper number $Y$ of $\xi$ which is a lower number of $\eta$. By 2) of Definition 28 we would therefore have simultaneously

```math
X < Y, \quad X > Y.
```

Consequently at most one of the three cases holds.

2) If

```math
\xi \neq \eta,
```

then the lower classes do not coincide. Hence either a certain lower number of $\xi$ is an upper number of $\eta$, and then

```math
\xi > \eta,
```

or a certain lower number of $\eta$ is an upper number of $\xi$, and then

```math
\xi < \eta.
```

**Definition 32:**

```math
\xi \geqq \eta
```

means

```math
\xi > \eta \text{ or } \xi = \eta.
```

($\geqq$ read: greater than or equal to.)

**Definition 33:**

```math
\xi \leqq \eta
```

means

```math
\xi < \eta \text{ or } \xi = \eta.
```

($\leqq$ read: less than or equal to.)

**Theorem 124:** From

```math
\xi \geqq \eta
```

follows

```math
\eta \leqq \xi.
```

**Proof:** Theorem 121.

**Theorem 125:** From

```math
\xi \leqq \eta
```

follows

```math
\eta \geqq \xi.
```

**Proof:** Theorem 122.

**Theorem 126** (transitivity of ordering): From

```math
\xi < \eta, \quad \eta < \zeta
```

follows

```math
\xi < \zeta.
```

**Proof:** There is an upper number $X$ of $\xi$ which is a lower number of $\eta$; and an upper number $Y$ of $\eta$ which is a lower number of $\zeta$. By the cut property 2) of $\eta$ we have

```math
X < Y,
```

hence $Y$ is an upper number of $\xi$. Therefore

```math
\xi < \zeta.
```

**Theorem 127:** From

```math
\xi \leqq \eta, \quad \eta < \zeta \text{ or } \xi < \eta, \quad \eta \leqq \zeta,
```

follows

```math
\xi < \zeta.
```

**Proof:** With the equality sign in the hypothesis, clear; otherwise settled by Theorem 126.

**Theorem 128:** From

```math
\xi \leqq \eta, \quad \eta \leqq \zeta
```

follows

```math
\xi \leqq \zeta.
```

**Proof:** With two equality signs in the hypothesis, clear; otherwise settled by Theorem 127.

## § 3. Addition

**Theorem 129:** I) Let $\xi$ and $\eta$ be cuts. Then the set of the rational numbers which can be represented in the form $X + Y$, where $X$ is a lower number of $\xi$ and $Y$ a lower number of $\eta$, is a cut.

II) No number of this set can be represented as the sum of an upper number of $\xi$ and an upper number of $\eta$.

**Proof:** 1) If one starts from any lower number $X$ of $\xi$ and any lower number $Y$ of $\eta$, then $X + Y$ belongs to the set.

If one starts from any upper number $X_1$ of $\xi$ and any upper number $Y_1$ of $\eta$, then for all lower numbers $X$ resp. $Y$ of $\xi$ resp. $\eta$ we have

```math
X < X_1, \quad Y < Y_1,
```

hence

```math
X + Y < X_1 + Y_1,
```

```math
X_1 + Y_1 \neq X + Y;
```

thus $X_1 + Y_1$ does not belong to the set. And II) is thereby already proved.

2) It is to be shown that every number which is smaller than a number of the set also belongs to the set. So let $X$ be a lower number of $\xi$, $Y$ a lower number of $\eta$, and

```math
Z < X + Y.
```

Then

```math
(X + Y) \cdot \frac{Z}{X + Y} = Z < (X + Y) \cdot 1,
```

hence by Theorem 106

```math
\frac{Z}{X + Y} < 1,
```

hence by Theorem 105

```math
X \cdot \frac{Z}{X + Y} < X
```

and

```math
Y \cdot \frac{Z}{X + Y} < Y.
```

By the second cut property of $\xi$ resp. $\eta$, $X \cdot \frac{Z}{X + Y}$ resp. $Y \cdot \frac{Z}{X + Y}$ is therefore a lower number of $\xi$ resp. $\eta$.

The sum of these two rational numbers is the given $Z$, since

```math
X \cdot \frac{Z}{X + Y} + Y \cdot \frac{Z}{X + Y} = (X + Y) \cdot \frac{Z}{X + Y} = Z.
```

3) If a number of the set is given, then it has the form $X + Y$, where $X$ is a lower number of $\xi$ and $Y$ a lower number of $\eta$. By the third cut property, choose a lower number

```math
X_1 > X
```

of $\xi$; then

```math
X_1 + Y > X + Y,
```

so that a number of the set $> X + Y$ exists.

**Definition 34:** The cut constructed in Theorem 129 is called $\xi + \eta$ ($+$ read: plus). It is also called the sum of $\xi$ and $\eta$, or the cut obtained by the addition of $\eta$ to $\xi$.

**Theorem 130** (commutative law of addition):

```math
\xi + \eta = \eta + \xi.
```

**Proof:** Every $X + Y$ is also $Y + X$, and conversely.

**Theorem 131** (associative law of addition):

```math
(\xi + \eta) + \zeta = \xi + (\eta + \zeta).
```

**Proof:** Every $(X + Y) + Z$ is also $X + (Y + Z)$, and conversely.

**Theorem 132:** For every cut there exist, if $A$ is given, a lower number $X$ and an upper number $U$ with

```math
U - X = A.
```

**Proof:** Let $X_1$ be any lower number. We consider all rational numbers

```math
X_1 + nA,
```

where $n$ is an integer. They are not all lower numbers; for if $Y$ is any upper number, then

```math
Y > X_1,
```

hence by Theorem 115, for suitable $n$,

```math
nA > Y - X_1,
```

```math
X_1 + nA > (Y - X_1) + X_1 = Y,
```

so that $X_1 + nA$ is an upper number.

In the set of the $n$ for which $X_1 + nA$ is an upper number there is, by Theorem 27, a least integer; call it $u$.

If

```math
u = 1,
```

set

```math
X = X_1, \quad U = X_1 + A;
```

if

```math
u > 1,
```

set

```math
X = X_1 + (u - 1) A, \quad U = X_1 + uA = X + A.
```

In each case $X$ is a lower number, $U$ an upper number, and

```math
U - X = A.
```

**Theorem 133:** $\xi + \eta > \xi$.

**Proof:** Let $Y$ be a lower number of $\eta$. By Theorem 132, choose a lower number $X$ of $\xi$ and an upper number $U$ of $\xi$ with

```math
U - X = Y;
```

then

```math
U = X + Y
```

is an upper number of $\xi$ and a lower number of $\xi + \eta$. Therefore

```math
\xi + \eta > \xi.
```

**Theorem 134:** From

```math
\xi > \eta
```

follows

```math
\xi + \zeta > \eta + \zeta.
```

**Proof:** There is an upper number $Y$ of $\eta$ which is a lower number of $\xi$. Choose a greater lower number

```math
X > Y
```

of $\xi$; thus $X$ is an upper number of $\eta$. By Theorem 132, choose for $\zeta$ an upper number $Z$ and a lower number $U$ with

```math
Z - U = X - Y.
```

Then

```math
Y + Z = Y + ((X - Y) + U) = (Y + (X - Y)) + U = X + U,
```

hence a lower number of $\xi + \zeta$ and (by Theorem 129, II)) an upper number of $\eta + \zeta$. Therefore

```math
\xi + \zeta > \eta + \zeta.
```

**Theorem 135:** From

```math
\xi > \eta \text{ resp. } \xi = \eta \text{ resp. } \xi < \eta
```

follows

```math
\xi + \zeta > \eta + \zeta \text{ resp. } \xi + \zeta = \eta + \zeta \text{ resp. } \xi + \zeta < \eta + \zeta.
```

**Proof:** The first part is Theorem 134, the second is clear, the third is a consequence of the first because of

```math
\eta + \zeta > \xi + \zeta,
```

```math
\xi + \zeta < \eta + \zeta.
```

**Theorem 136:** From

```math
\xi + \zeta > \eta + \zeta \text{ resp. } \xi + \zeta = \eta + \zeta \text{ resp. } \xi + \zeta < \eta + \zeta
```

follows

```math
\xi > \eta \text{ resp. } \xi = \eta \text{ resp. } \xi < \eta.
```

**Proof:** Follows from Theorem 135, since in both cases the three cases are mutually exclusive and exhaust all possibilities.

**Theorem 137:** From

```math
\xi > \eta, \quad \zeta > v
```

follows

```math
\xi + \zeta > \eta + v.
```

**Proof:** By Theorem 134 we have

```math
\xi + \zeta > \eta + \zeta
```

and

```math
\eta + \zeta = \zeta + \eta > v + \eta = \eta + v,
```

hence

```math
\xi + \zeta > \eta + v.
```

**Theorem 138:** From

```math
\xi \geqq \eta, \quad \zeta > v \text{ or } \xi > \eta, \quad \zeta \geqq v
```

follows

```math
\xi + \zeta > \eta + v.
```

**Proof:** With the equality sign in the hypothesis, settled by Theorem 134; otherwise by Theorem 137.

**Theorem 139:** From

```math
\xi \geqq \eta, \quad \zeta \geqq v
```

follows

```math
\xi + \zeta \geqq \eta + v.
```

**Proof:** With two equality signs in the hypothesis, clear; otherwise settled by Theorem 138.

**Theorem 140:** If

```math
\xi > \eta,
```

then

```math
\eta + v = \xi
```

has exactly one solution $v$.

**Preliminary Remark:** For

```math
\xi \leqq \eta
```

there is no solution, by Theorem 138.

**Proof:** I) There is at most one solution; for if

```math
v_1 \neq v_2
```

then by Theorem 135

```math
\eta + v_1 \neq \eta + v_2.
```

II) I first show that the set of the rational numbers of the form $X - Y$ (hence $X > Y$), where $X$ is a lower number of $\xi$ and $Y$ an upper number of $\eta$, forms a cut.

1) We know from the beginning of the proof of Theorem 134 that there is such an $X - Y$.

No upper number $X_1$ of $\xi$ is such an $X - Y$; for every number of this form satisfies

```math
X - Y < (X - Y) + Y = X < X_1.
```

2) If an $X - Y$ of the above kind is given and

```math
U < X - Y,
```

then

```math
U + Y < (X - Y) + Y = X,
```

hence

```math
U + Y = X_2
```

is a lower number of $\xi$,

```math
U = X_2 - Y
```

belongs to our set.

3) If an $X - Y$ of the above kind is given, choose a lower number

```math
X_3 > X
```

of $\xi$. Then

```math
(X_3 - Y) + Y > (X - Y) + Y,
```

```math
X_3 - Y > X - Y,
```

so that $X_3 - Y$ is a greater number of our set than the given $X - Y$.

Our set is therefore a cut; call it $v$.

Of it we shall prove

```math
\eta + v = \xi.
```

For this it suffices to show two things:

A) Every lower number of $v + \eta$ is a lower number of $\xi$.

B) Every lower number of $\xi$ is a lower number of $v + \eta$.

Ad A) Every lower number of $v + \eta$ has the form

```math
(X - Y) + Y_1,
```

where $X$ is a lower number of $\xi$, $Y$ an upper number of $\eta$, $Y_1$ a lower number of $\eta$, and

```math
X > Y.
```

Now

```math
Y > Y_1,
```

```math
((X - Y) + Y_1) + (Y - Y_1) = (X - Y) + (Y_1 + (Y - Y_1)) = (X - Y) + Y = X,
```

```math
(X - Y) + Y_1 < X,
```

hence $(X - Y) + Y_1$ is a lower number of $\xi$.

Ad B) a) Let the given lower number of $\xi$ be at the same time an upper number of $\eta$, and call it then $Y$. Choose a lower number $X$ of $\xi$ with

```math
X > Y
```

and, by Theorem 132, for $\eta$ a lower number $Y_1$ and an upper number $Y_2$ with

```math
Y_2 - Y_1 = X - Y.
```

Then

```math
Y > Y_1,
```

hence

```math
\begin{aligned}
Y_2 + (Y - Y_1) &= ((X - Y) + Y_1) + (Y - Y_1) = (X - Y) + (Y_1 + (Y - Y_1)) \\
&= (X - Y) + Y = X,
\end{aligned}
```

```math
Y - Y_1 = X - Y_2,
```

```math
Y = (Y - Y_1) + Y_1 = (X - Y_2) + Y_1;
```

hence $Y$ is a lower number of $v + \eta$.

b) If the given lower number of $\xi$ is a lower number of $\eta$, then it is smaller than every rational number shown in a) to be a lower number of $v + \eta$, hence is itself a lower number of $v + \eta$.

**Definition 35:** The $v$ of Theorem 140 is called $\xi - \eta$ ($-$ read: minus). $\xi - \eta$ is also called the difference $\xi$ minus $\eta$, or the cut obtained by the subtraction of $\eta$ from $\xi$.

## § 4. Multiplication

**Theorem 141:** I) Let $\xi$ and $\eta$ be cuts. Then the set of rational numbers that can be written in the form $XY$, where $X$ is a lower number for $\xi$ and $Y$ is a lower number for $\eta$, is a cut.

II) No number of this set can be represented as the product of an upper number for $\xi$ and an upper number for $\eta$.

**Proof:** 1) If one starts from any lower number $X$ for $\xi$ and any lower number $Y$ for $\eta$, then $XY$ belongs to the set.

If one starts from any upper number $X_1$ for $\xi$ and any upper number $Y_1$ for $\eta$, then for all lower numbers $X$ resp. $Y$ for $\xi$ resp. $\eta$ we have

```math
X < X_1, \quad Y < Y_1,
```

hence

```math
XY < X_1 Y_1,
```

```math
X_1 Y_1 \neq XY;
```

thus $X_1 Y_1$ does not belong to the set. And II) is thereby already proved as well.

2) Let $X$ be a lower number for $\xi$, $Y$ a lower number for $\eta$, and

```math
Z < XY.
```

Then we have

```math
X \left(\frac{1}{X} \cdot Z\right) = \left(X \cdot \frac{1}{X}\right) Z = 1 \cdot Z = Z,
```

```math
\frac{1}{X} \cdot Z < \frac{1}{X} \cdot (XY) = \left(\frac{1}{X} \cdot X\right) Y = Y,
```

hence $\frac{Z}{X}$ is a lower number for $\eta$. The equation

```math
X \cdot \frac{Z}{X} = Z
```

thus shows that $Z$ belongs to our set.

3) If a number of the set is given, then it has the form $XY$, where $X$ is a lower number for $\xi$ and $Y$ is a lower number for $\eta$. Choose for $\xi$ a lower number

```math
X_1 > X;
```

then we have

```math
X_1 Y > XY,
```

so that there exists a number of the set $> XY$.

**Definition 36:** The cut constructed in Theorem 141 is called $\xi \cdot \eta$ ($\cdot$, read: times; but the dot is usually not written). It is also called the product of $\xi$ by $\eta$, or the cut obtained by multiplication of $\xi$ by $\eta$.

**Theorem 142** (commutative law of multiplication):

```math
\xi\eta = \eta\xi.
```

**Proof:** Every $XY$ is also $YX$, and conversely.

**Theorem 143** (associative law of multiplication):

```math
(\xi\eta)\zeta = \xi(\eta\zeta).
```

**Proof:** Every $(XY)Z$ is also $X(YZ)$, and conversely.

**Theorem 144** (distributive law):

```math
\xi(\eta + \zeta) = \xi\eta + \xi\zeta.
```

**Proof:** I) Every lower number for $\xi(\eta + \zeta)$ is

```math
X(Y + Z) = XY + XZ,
```

where $X, Y, Z$ are lower numbers for $\xi, \eta, \zeta$, respectively. The number $XY + XZ$ is a lower number for $\xi\eta + \xi\zeta$.

II) Every lower number for $\xi\eta + \xi\zeta$ has the form

```math
XY + X_1 Z,
```

where $X, Y, X_1, Z$ are lower numbers for $\xi, \eta, \xi, \zeta$, respectively. In the case $X \geqq X_1$ let the number $X$, in the case $X < X_1$ the number $X_1$, be denoted by $X_2$. Then $X_2$ is a lower number for $\xi$, hence $X_2(Y + Z)$ is a lower number for $\xi(\eta + \zeta)$. From

```math
XY \leqq X_2 Y,
```

```math
X_1 Z \leqq X_2 Z
```

it follows that

```math
XY + X_1 Z \leqq X_2 Y + X_2 Z = X_2(Y + Z);
```

hence $XY + X_1 Z$ is a lower number for $\xi(\eta + \zeta)$.

**Theorem 145:** From

```math
\xi > \eta \text{ resp. } \xi = \eta \text{ resp. } \xi < \eta
```

it follows that

```math
\xi\zeta > \eta\zeta \text{ resp. } \xi\zeta = \eta\zeta \text{ resp. } \xi\zeta < \eta\zeta.
```

**Proof:** 1) From

```math
\xi > \eta
```

it follows by Theorem 140, for suitable $v$, that

```math
\xi = \eta + v,
```

hence

```math
\xi\zeta = (\eta + v)\zeta = \eta\zeta + v\zeta > \eta\zeta.
```

2) From

```math
\xi = \eta
```

it follows, of course, that

```math
\xi\zeta = \eta\zeta.
```

3) From

```math
\xi < \eta
```

it follows that

```math
\eta > \xi,
```

hence by 1)

```math
\eta\zeta > \xi\zeta,
```

```math
\xi\zeta < \eta\zeta.
```

**Theorem 146:** From

```math
\xi\zeta > \eta\zeta \text{ resp. } \xi\zeta = \eta\zeta \text{ resp. } \xi\zeta < \eta\zeta
```

it follows that

```math
\xi > \eta \text{ resp. } \xi = \eta \text{ resp. } \xi < \eta.
```

**Proof:** Follows from Theorem 145, since the three cases are, both times, mutually exclusive and exhaust all possibilities.

**Theorem 147:** From

```math
\xi > \eta, \quad \zeta > v
```

it follows that

```math
\xi\zeta > \eta v.
```

**Proof:** By Theorem 145 we have

```math
\xi\zeta > \eta\zeta
```

and

```math
\eta\zeta = \zeta\eta > v\eta = \eta v,
```

hence

```math
\xi\zeta > \eta v.
```

**Theorem 148:** From

```math
\xi \geqq \eta, \quad \zeta > v \text{ or } \xi > \eta, \quad \zeta \geqq v
```

it follows that

```math
\xi\zeta > \eta v.
```

**Proof:** With the equality sign in the hypothesis, settled by Theorem 145; otherwise by Theorem 147.

**Theorem 149:** From

```math
\xi \geqq \eta, \quad \zeta \geqq v
```

it follows that

```math
\xi\zeta \geqq \eta v.
```

**Proof:** With two equality signs in the hypothesis, clear; otherwise settled by Theorem 148.

**Theorem 150:** For every rational number $R$, the set of rational numbers $< R$ forms a cut.

**Proof:** 1) By Theorem 90 there exists an $X < R$. $R$ itself is not $< R$.

2) If

```math
X < R, \quad X_1 < X,
```

then

```math
X_1 < R.
```

3) If

```math
X < R,
```

then by Theorem 91 there exists an $X_1$ with

```math
X < X_1 < R.
```

**Definition 37:** The cut constructed in Theorem 150 is called $R^*$.

(Capital roman letters with stars thus denote cuts, not rational numbers.)

**Theorem 151:** $\xi \cdot 1^* = \xi$.

**Proof:** $\xi \cdot 1^*$ is the set of all $XY$, where $X$ is a lower number for $\xi$ and

```math
Y < 1
```

holds.

Every such $XY$ is $< X$, hence a lower number for $\xi$.

Conversely, let a lower number $X$ for $\xi$ be given. Then choose for $\xi$ a lower number

```math
X_1 > X
```

and set

```math
Y = \frac{X}{X_1}.
```

Then we have

```math
Y < \frac{X_1}{X_1} = 1,
```

hence

```math
X = X_1 Y
```

is a lower number for $\xi \cdot 1^*$.

**Theorem 152:** If $\xi$ is given, then the equation

```math
\xi v = 1^*
```

has a solution $v$.

**Proof:** We consider the set of all numbers $\frac{1}{X}$, where $X$ is an arbitrary upper number for $\xi$, with the possible exception of the smallest (if there is one). We show that this set is a cut.

1) There is a number of the set; for if $X$ is an upper number for $\xi$, then $X + X$ is one also, but not the smallest, so that

```math
\frac{1}{X + X}
```

belongs to the set.

There is a rational number that does not belong to the set; for if $X_1$ is any lower number for $\xi$, then for all upper numbers $X$ for $\xi$ we have

```math
X \neq X_1,
```

hence, on account of

```math
X \cdot \frac{1}{X} = 1 = X_1 \cdot \frac{1}{X_1},
```

```math
\frac{1}{X} \neq \frac{1}{X_1};
```

therefore $\frac{1}{X_1}$ does not belong to our set.

2) If a number $\frac{1}{X}$ of our set is given, so that $X$ is an upper number for $\xi$, and

```math
U < \frac{1}{X},
```

then we have

```math
UX < \left(\frac{1}{X}\right) X = 1 = U \cdot \frac{1}{U},
```

hence

```math
X < \frac{1}{U},
```

hence $\frac{1}{U}$ is an upper number for $\xi$ and not the smallest; on account of

```math
U = \frac{1}{1/U}
```

$U$ thus belongs to our set.

3) If a number $\frac{1}{X}$ of our set is given, so that $X$ is an upper number for $\xi$ and not the smallest, then choose for $\xi$ an upper number

```math
X_1 < X
```

and then, by Theorem 91, an $X_2$ with

```math
X_1 < X_2 < X.
```

Then $X_2$ is an upper number for $\xi$ and not the smallest; from

```math
X_2 \frac{1}{X} < X \frac{1}{X} = 1 = X_2 \frac{1}{X_2}
```

it follows that

```math
\frac{1}{X_2} > \frac{1}{X},
```

so that we have found a number of our set that is greater than the given one.

Our set is therefore a cut; call it $v$.

Of it we shall prove that

```math
\xi v = 1^*.
```

For this it suffices to show two things:

A) Every lower number for $\xi v$ is $< 1$.

B) Every rational number $< 1$ is a lower number for $\xi v$.

Ad A) Every lower number for $\xi v$ has the form

```math
X \cdot \frac{1}{X_1},
```

where $X$ is a lower number for $\xi$ and $X_1$ is an upper number for $\xi$. From

```math
X < X_1
```

it follows that

```math
X \cdot \frac{1}{X_1} < X_1 \cdot \frac{1}{X_1} = 1.
```

Ad B) Let

```math
U < 1.
```

We choose any lower number $X$ for $\xi$ and then, by Theorem 132, a lower number $X_1$ for $\xi$ and an upper number $X_2$ for $\xi$ with

```math
X_2 - X_1 = (1 - U) X.
```

Then we have

```math
X_2 - X_1 < (1 - U) X_2,
```

```math
(X_2 - X_1) + UX_2 < (1 - U)X_2 + UX_2 = X_2 = (X_2 - X_1) + X_1,
```

```math
UX_2 < X_1,
```

```math
X_2 = \left(\frac{1}{U} \cdot U\right) X_2 = \frac{1}{U} (UX_2) < \frac{1}{U} \cdot X_1 = \frac{X_1}{U}.
```

Hence $\frac{X_1}{U}$ is an upper number for $\xi$ and not the smallest. From

```math
U \cdot \frac{X_1}{U} = X_1
```

it follows that

```math
U = \frac{X_1}{X_1/U} = X_1 \cdot \frac{1}{X_1/U};
```

here $X_1$ is a lower number for $\xi$, and $\frac{1}{X_1/U}$ is a lower number for $v$; hence $U$ is a lower number for $\xi v$.

**Theorem 153:** The equation

```math
\eta v = \xi,
```

where $\xi, \eta$ are given, has exactly one solution $v$.

**Proof:** I) There is at most one solution; for if

```math
v_1 \neq v_2
```

then by Theorem 145

```math
\eta v_1 \neq \eta v_2.
```

II) If $\tau$ is the solution, shown to exist by Theorem 152, of

```math
\eta\tau = 1^*,
```

then

```math
v = \tau\xi
```

satisfies our equation; for by Theorem 151 we have

```math
\eta v = \eta(\tau\xi) = (\eta\tau)\xi = 1^*\xi = \xi.
```

**Definition 38:** The $v$ of Theorem 153 is called $\frac{\xi}{\eta}$ (read: $\xi$ over $\eta$). $\frac{\xi}{\eta}$ is also called the quotient of $\xi$ by $\eta$, or the cut obtained by division of $\xi$ by $\eta$.

## § 5. Rational Cuts and Integral Cuts

**Definition 39:** A cut of the form $X^*$ is called a rational cut.

**Definition 40:** A cut of the form $x^*$ is called an integral cut.

(Small Latin letters with stars thus denote cuts, not integers.)

**Theorem 154:** From

```math
X > Y \text{ resp. } X = Y \text{ resp. } X < Y
```

it follows that

```math
X^* > Y^* \text{ resp. } X^* = Y^* \text{ resp. } X^* < Y^*
```

and conversely.

**Proof:** I) 1) From

```math
X > Y
```

it follows that $Y$ is a lower number for $X^*$. $Y$ is an upper number for $Y^*$. Hence

```math
X^* > Y^*.
```

2) From

```math
X = Y
```

it follows, of course, that

```math
X^* = Y^*
```

3) From

```math
X < Y
```

it follows that

```math
Y > X,
```

hence by 1)

```math
Y^* > X^*,
```

```math
X^* < Y^*.
```

II) The converse is clear, since in both cases the three cases are mutually exclusive and exhaust all possibilities.

**Theorem 155:**

```math
\begin{gathered}
(X + Y)^* = X^* + Y^*; \\
(X - Y)^* = X^* - Y^* \quad \text{if } X > Y; \\
(XY)^* = X^* Y^*; \\
\left(\frac{X}{Y}\right)^{\!*} = \frac{X^*}{Y^*}.
\end{gathered}
```

**Proof:** I) a) Every lower number for $X^* + Y^*$ is the sum of a rational number $< X$ and a rational number $< Y$; hence it is $< X + Y$, hence a lower number for $(X + Y)^*$.

b) Every lower number $U$ for $(X + Y)^*$ is $< X + Y$. From

```math
\frac{U}{X + Y} < 1,
```

```math
U = X \cdot \frac{U}{X + Y} + Y \cdot \frac{U}{X + Y}
```

it follows that $U$ is the sum of a rational number $< X$ and a rational number $< Y$, hence a lower number for $X^* + Y^*$.

Therefore

```math
(X + Y)^* = X^* + Y^*.
```

II) From

```math
X > Y
```

it follows that

```math
X = (X - Y) + Y,
```

hence by I)

```math
X^* = (X - Y)^* + Y^*,
```

```math
(X - Y)^* = X^* - Y^*.
```

III) a) Every lower number for $X^* Y^*$ is the product of a rational number $< X$ and a rational number $< Y$; hence it is $< XY$, hence a lower number for $(XY)^*$.

b) Every lower number $U$ for $(XY)^*$ is $< XY$. By Theorem 91, choose a rational number $U_1$ with

```math
U < U_1 < XY
```

Then

```math
\frac{U_1}{X} < Y
```

and

```math
\left(\frac{U}{U_1}\right) X < X.
```

By

```math
U = \left(\left(\frac{U}{U_1}\right) X\right) \left(\frac{U_1}{X}\right)
```

$U$ is thus represented as the product of a lower number for $X^*$ and a lower number for $Y^*$. Hence $U$ is a lower number for $X^* Y^*$.

Therefore

```math
(XY)^* = X^* Y^*.
```

IV)

```math
X = \left(\frac{X}{Y}\right) \cdot Y,
```

hence by III)

```math
X^* = \left(\frac{X}{Y}\right)^{\!*} Y^*,
```

```math
\left(\frac{X}{Y}\right)^{\!*} = \frac{X^*}{Y^*}.
```

**Theorem 156:** The integral cuts satisfy the five axioms of the natural numbers, if $1^*$ is taken in place of $1$ and

```math
(x^*)' = (x')^*
```

is set.

**Proof:** Let $Q^*$ be the set of integral cuts.

1) $1^*$ belongs to $Q^*$.

2) For $x^*$, $(x^*)'$ exists in $Q^*$.

3) We always have

```math
x' \neq 1,
```

hence

```math
(x')^* \neq 1^*,
```

```math
(x^*)' \neq 1^*.
```

4) From

```math
(x^*)' = (y^*)'
```

it follows that

```math
(x')^* = (y')^*,
```

```math
x' = y',
```

```math
x = y,
```

```math
x^* = y^*.
```

5) Let a set $\mathfrak{M}^*$ of integral cuts have the properties:

I) $1^*$ belongs to $\mathfrak{M}^*$.

II) If $x^*$ belongs to $\mathfrak{M}^*$, then $(x^*)'$ belongs to $\mathfrak{M}^*$.

Then let $\mathfrak{M}$ denote the set of $x$ for which $x^*$ belongs to $\mathfrak{M}^*$. Then $1$ belongs to $\mathfrak{M}$, and with every $x$ of $\mathfrak{M}$ also $x'$ belongs to $\mathfrak{M}$. Hence every integer belongs to $\mathfrak{M}$, hence every integral cut to $\mathfrak{M}^*$.

Since $=$, $>$, $<$, sum, difference (where it exists), product and quotient for rational cuts correspond, by Theorem 154 and Theorem 155, to the old concepts, the rational cuts have all the properties that we proved in Chapter 2 for rational numbers, and in particular the integral cuts have all the proved properties of the integers.

Therefore we throw away the rational numbers, replace them by the corresponding rational cuts, and from now on, as far as what has gone before is concerned, we need speak only of cuts. (The rational numbers, however, remain in sets in the concept of the cut.)

**Definition 41:** (The now available symbol) $X$ denotes the rational cut $X^*$, to which the term rational number also passes over; likewise the term integer passes over to the integral cuts.

Thus we now write, e.g., instead of

```math
1^* + 1^* = 2^*
```

simply

```math
1 + 1 = 2.
```

**Theorem 157:** The rational numbers are the cuts for which there is a smallest upper number $X$. And in that case $X$ is the cut.

**Proof:** 1) For the cut $X$ (the old $X^*$), $X$ (rational number in the old sense) is the smallest upper number.

2) If for a cut $\xi$ there is a smallest upper number $X$, then every lower number is $< X$, every upper number $\geqq X$, hence the cut is $X$ (the old $X^*$).

**Theorem 158:** Let $\xi$ be a cut. Then $X$ is a lower number if and only if

```math
X < \xi,
```

hence an upper number if and only if

```math
X \geqq \xi.
```

**Proof:** 1) If $X$ is a lower number for $\xi$, then, since $X$ is an upper number for $X$ (the old $X^*$),

```math
X < \xi.
```

2) If $X$ is an upper number for $\xi$, and in fact the smallest, then by Theorem 157

```math
X = \xi.
```

3) If $X$ is an upper number for $\xi$, and in fact not the smallest, then choose a smaller upper number $X_1$. Then $X_1$ is a lower number for $X$, hence

```math
X > \xi.
```

**Theorem 159:** If

```math
\xi < \eta,
```

then there is a $Z$ with

```math
\xi < Z < \eta.
```

**Proof:** Choose an upper number $X$ for $\xi$ which is a lower number for $\eta$, and then a greater lower number $Z$ for $\eta$. Then by Theorem 158

```math
\xi \leqq X < Z < \eta.
```

**Theorem 160:** Every

```math
Z > \xi\eta
```

can be brought into the form

```math
Z = XY, \quad X > \xi, \quad Y > \eta.
```

**Proof:** Let $\zeta$ denote the smaller of the two cuts $1$ and

```math
\frac{Z - \xi\eta}{(\xi + \eta) + 1}.
```

Then

```math
\zeta \leqq 1, \quad \zeta \leqq \frac{Z - \xi\eta}{(\xi + \eta) + 1}.
```

Choose $Z_1$ and $Z_2$ by Theorem 159 with

```math
\xi < Z_1 < \xi + \zeta, \quad \eta < Z_2 < \eta + \zeta.
```

Then

```math
\begin{aligned}
Z_1 Z_2 &< (\xi + \zeta)(\eta + \zeta) = (\xi + \zeta)\eta + (\xi + \zeta)\zeta \leqq (\xi + \zeta)\eta + (\xi + 1)\zeta \\
&= (\xi\eta + \zeta\eta) + (\xi + 1)\zeta = \xi\eta + ((\xi + \eta) + 1)\zeta \leqq \xi\eta + (Z - \xi\eta) = Z.
\end{aligned}
```

In

```math
Z = \frac{Z}{Z_2} \cdot Z_2
```

we have

```math
X = \frac{Z}{Z_2} = Z \cdot \frac{1}{Z_2} > (Z_1 Z_2) \cdot \frac{1}{Z_2} = Z_1 > \xi, \quad Y = Z_2 > \eta;
```

hence $Z$ is decomposed in the desired manner.

**Theorem 161:** For every $\zeta$,

```math
\xi\xi = \zeta
```

has exactly one solution.

**Proof:** I) There is at most one solution; for from

```math
\xi_1 > \xi_2
```

it follows that

```math
\xi_1 \xi_1 > \xi_2 \xi_2.
```

II) We consider the set of rational numbers $X$ with

```math
XX < \zeta.
```

It forms a cut. For:

1) If

```math
X < 1 \text{ and } X < \zeta,
```

then

```math
XX < X \cdot 1 = X < \zeta.
```

If

```math
X \geqq 1 \text{ and } X \geqq \zeta,
```

then

```math
XX \geqq X \cdot 1 = X \geqq \zeta.
```

2) From

```math
XX < \zeta, \quad Y < X
```

it follows that

```math
YY < XX < \zeta.
```

3) Let

```math
XX < \zeta.
```

Choose $Z$ smaller than the smaller of the two cuts $1$ and

```math
\frac{\zeta - XX}{X + (X + 1)}.
```

Then

```math
Z < 1, \quad Z \leqq \frac{\zeta - XX}{X + (X + 1)};
```

then

```math
X + Z > X
```

and

```math
\begin{aligned}
(X + Z)(X + Z) &= (X + Z)X + (X + Z)Z < (XX + ZX) + (X + 1)Z \\
&= XX + (X + (X + 1))Z \leqq XX + (\zeta - XX) = \zeta.
\end{aligned}
```

If we call the constructed cut $\xi$, we now assert that

```math
\xi\xi = \zeta.
```

If we had

```math
\xi\xi > \zeta,
```

we would choose $Z$ by Theorem 159 with

```math
\xi\xi > Z > \zeta.
```

As a lower number for $\xi\xi$, we would have

```math
Z = X_1 X_2, \quad X_1 < \xi, \quad X_2 < \xi;
```

if $X$ denotes the greater of the numbers $X_1$ and $X_2$, we would have

```math
X < \xi,
```

```math
Z \leqq XX < \zeta,
```

contrary to the above.

If we had

```math
\xi\xi < \zeta,
```

we would choose $Z$ by Theorem 159 with

```math
\xi\xi < Z < \zeta.
```

By Theorem 160, $Z$ would have the form

```math
Z = X_1 X_2, \quad X_1 > \xi, \quad X_2 > \xi;
```

if $X$ denotes the smaller of the numbers $X_1$ and $X_2$, we would have

```math
X > \xi,
```

```math
Z \geqq XX \geqq \zeta,
```

contrary to the above.

**Definition 42:** Every cut which is not a rational number is called an irrational number.

**Theorem 162:** There is an irrational number.

**Proof:** It suffices to show that the solution, existing by Theorem 161, of

```math
\xi\xi = 1'
```

is irrational.

Otherwise we would have

```math
\xi = \frac{x}{y};
```

among all such representations we choose, by Theorem 27, one in which $y$ is as small as possible. Because of

```math
1' = \left(\frac{x}{y}\right)\left(\frac{x}{y}\right) = \frac{xx}{yy}
```

we have

```math
yy < 1'(yy) = xx = (1'y)y < (1'y)(1'y),
```

```math
y < x < 1'y.
```

We set

```math
x - y = u.
```

Then

```math
y + u = x < 1'y = y + y,
```

```math
u < y.
```

Now

```math
\begin{aligned}
(v + w)(v + w) &= (v + w)v + (v + w)w = (vv + wv) + (vw + ww) \\
&= (vv + 1'(vw)) + ww,
\end{aligned}
```

hence, setting

```math
y - u = t
```

we have

```math
\begin{aligned}
xx + tt &= (y + u)(y + u) + tt = (yy + 1'(yu)) + (uu + tt) \\
&= (yy + (1'u)(u + t)) + (uu + tt) \\
&= (yy + 1'(uu)) + ((1'(ut) + uu) + tt) \\
&= (yy + 1'(uu)) + (u + t)(u + t) \\
&= (yy + 1'(uu)) + yy = 1'(yy) + 1'(uu) = xx + 1'(uu),
\end{aligned}
```

```math
tt = 1'(uu),
```

contrary to
