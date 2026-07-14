# Chapter 1. Natural Numbers

## § 1. Axioms

We assume as given:

A set, i.e. a totality, of things called natural numbers, having the properties, called axioms, to be enumerated below.

Before formulating the axioms, a few remarks concerning the symbols $=$ and $\neq$ that will be used.

Small Latin letters in this book denote, unless otherwise stated, natural numbers throughout.

If $x$ is given and $y$ is given, then

either $x$ and $y$ are the same number; this may also be written

```math
x = y
```

($=$ read: equals);

or $x$ and $y$ are not the same number; this may also be written

```math
x \neq y
```

($\neq$ read: unequal).

Accordingly, on purely logical grounds, we have:

1) $x = x$ for every $x$.

2) From

```math
x = y
```

follows

```math
y = x.
```

3) From

```math
x = y, \quad y = z
```

follows

```math
x = z.
```

A notation such as

```math
a = b = c = d,
```

by which at first only

```math
a = b, \quad b = c, \quad c = d
```

is meant, thus contains in addition, e.g.,

```math
a = c, \quad a = d, \quad b = d.
```

(Similarly in the later chapters.)

Of the set of natural numbers we now assume that it has the following properties:

**Axiom 1:** 1 is a natural number.

That is, our set is not empty; it contains a thing called 1 (read: one).

**Axiom 2:** For each $x$ there exists exactly one natural number, which is called the successor of $x$ and will be denoted by $x'$.

In the case of complicated $x$, the number whose successor is in question is enclosed in parentheses if a misunderstanding is otherwise to be feared. The same holds throughout the book for $x + y$, $xy$, $x - y$, $-x$, $x^y$ and the like.

From

```math
x = y
```

it thus follows that

```math
x' = y'.
```

**Axiom 3:** We always have

```math
x' \neq 1.
```

That is, there is no number whose successor is 1.

**Axiom 4:** From

```math
x' = y'
```

follows

```math
x = y.
```

That is, for every number there exists no number, or exactly one, whose successor is that number.

**Axiom 5** (Axiom of Induction): Let $\mathfrak{M}$ be a set of natural numbers with the properties:

I) 1 belongs to $\mathfrak{M}$.

II) If $x$ belongs to $\mathfrak{M}$, then $x'$ belongs to $\mathfrak{M}$.

Then $\mathfrak{M}$ contains all natural numbers.

## § 2. Addition

**Theorem 1:** From

```math
x \neq y
```

follows

```math
x' \neq y'.
```

**Proof:** Otherwise we would have

```math
x' = y',
```

and hence by Axiom 4

```math
x = y.
```

**Theorem 2:**

```math
x' \neq x.
```

**Proof:** Let $\mathfrak{M}$ be the set of all $x$ for which this holds.

I) By Axiom 1 and Axiom 3,

```math
1' \neq 1;
```

hence 1 belongs to $\mathfrak{M}$.

II) If $x$ belongs to $\mathfrak{M}$, then

```math
x' \neq x,
```

and hence by Theorem 1

```math
(x')' \neq x',
```

so that $x'$ belongs to $\mathfrak{M}$.

Hence by Axiom 5 $\mathfrak{M}$ contains all natural numbers; i.e. for every $x$ we have

```math
x' \neq x.
```

**Theorem 3:** If

```math
x \neq 1,
```

then there exists one (hence, by Axiom 4, exactly one) $u$ with

```math
x = u'.
```

**Proof:** Let $\mathfrak{M}$ be the set consisting of the number 1 and of those $x$ for which such a $u$ exists. (Of itself, every such

```math
x \neq 1
```

by Axiom 3.)

I) 1 belongs to $\mathfrak{M}$.

II) If $x$ belongs to $\mathfrak{M}$, then, with $u$ denoting the number $x$,

```math
x' = u',
```

so that $x'$ belongs to $\mathfrak{M}$.

Hence by Axiom 5 $\mathfrak{M}$ contains all natural numbers; thus for every

```math
x \neq 1
```

there exists a $u$ with

```math
x = u'.
```

**Theorem 4, at the same time Definition 1:** In exactly one way can there be assigned to every pair of numbers $x$, $y$ a natural number, called $x + y$ ($+$ read: plus), such that

1) $x + 1 = x'$ for every $x$,

2) $x + y' = (x + y)'$ for every $x$ and every $y$.

$x + y$ is called the sum of $x$ and $y$, or the number obtained by addition of $y$ to $x$.

**Proof:** A) First we show that for each fixed $x$ there is at most one possibility of defining $x + y$ for all $y$ in such a way that

```math
x + 1 = x'
```

and

```math
x + y' = (x + y)' \quad \text{for each } y.
```

Let $a_y$ and $b_y$ be defined for all $y$ and be such that

```math
a_{y'} = (a_y)', \quad b_{y'} = (b_y)' \quad \text{for each } y.
```

Let $\mathfrak{M}$ be the set of all $y$ with

```math
a_y = b_y.
```

I)

```math
a_1 = x' = b_1;
```

hence 1 belongs to $\mathfrak{M}$.

II) If $y$ belongs to $\mathfrak{M}$, then

```math
a_y = b_y,
```

hence by Axiom 2

```math
(a_y)' = (b_y)',
```

hence

```math
a_{y'} = (a_y)' = (b_y)' = b_{y'},
```

so that $y'$ belongs to $\mathfrak{M}$.

Therefore $\mathfrak{M}$ is the set of all natural numbers; i.e. for every $y$ we have

```math
a_y = b_y.
```

B) We now show that for each $x$ there exists a possibility of defining $x + y$ for all $y$ in such a way that

```math
x + 1 = x'
```

and

```math
x + y' = (x + y)' \quad \text{for each } y.
```

Let $\mathfrak{M}$ be the set of all $x$ for which there exists one (hence, by A), exactly one) such possibility.

I) For

```math
x = 1
```

the definition

```math
x + y = y'
```

accomplishes what is required. For

```math
x + 1 = 1' = x',
```

```math
x + y' = (y')' = (x + y)'.
```

Hence 1 belongs to $\mathfrak{M}$.

II) Let $x$ belong to $\mathfrak{M}$, so that there exists an $x + y$ for all $y$. Then

```math
x' + y = (x + y)'
```

accomplishes what is required for $x'$. For

```math
x' + 1 = (x + 1)' = (x')'
```

and

```math
x' + y' = (x + y')' = ((x + y)')' = (x' + y)'.
```

Hence $x'$ belongs to $\mathfrak{M}$.

Therefore $\mathfrak{M}$ contains all $x$.

**Theorem 5** (associative law of addition):

```math
(x + y) + z = x + (y + z).
```

**Proof:** Let $x$ and $y$ be fixed, and $\mathfrak{M}$ the set of all $z$ for which the assertion holds.

I)

```math
(x + y) + 1 = (x + y)' = x + y' = x + (y + 1);
```

hence 1 belongs to $\mathfrak{M}$.

II) Let $z$ belong to $\mathfrak{M}$. Then

```math
(x + y) + z = x + (y + z),
```

hence

```math
(x + y) + z' = ((x + y) + z)' = (x + (y + z))' = x + (y + z)' = x + (y + z'),
```

so that $z'$ belongs to $\mathfrak{M}$.

The assertion therefore holds for all $z$.

**Theorem 6** (commutative law of addition):

```math
x + y = y + x.
```

**Proof:** Let $y$ be fixed, and $\mathfrak{M}$ the set of all $x$ for which the assertion holds.

I) We have

```math
y + 1 = y'
```

and, by the construction in the proof of Theorem 4,

```math
1 + y = y',
```

hence

```math
1 + y = y + 1,
```

so that 1 belongs to $\mathfrak{M}$.

II) If $x$ belongs to $\mathfrak{M}$, then

```math
x + y = y + x,
```

hence

```math
(x + y)' = (y + x)' = y + x'.
```

By the construction in the proof of Theorem 4, we have

```math
x' + y = (x + y)',
```

hence

```math
x' + y = y + x',
```

so that $x'$ belongs to $\mathfrak{M}$.

The assertion therefore holds for all $x$.

**Theorem 7:**

```math
y \neq x + y.
```

**Proof:** Let $x$ be fixed, and $\mathfrak{M}$ the set of all $y$ for which the assertion holds.

I)

```math
1 \neq x + 1;
```

1 belongs to $\mathfrak{M}$.

II) If $y$ belongs to $\mathfrak{M}$, then

```math
y \neq x + y,
```

hence

```math
y' \neq (x + y)',
```

```math
y' \neq x + y',
```

so that $y'$ belongs to $\mathfrak{M}$.

The assertion therefore holds for all $y$.

**Theorem 8:** From

```math
y \neq z
```

follows

```math
x + y \neq x + z.
```

**Proof:** For fixed $y$, $z$ with

```math
y \neq z
```

let $\mathfrak{M}$ be the set of all $x$ with

```math
x + y \neq x + z.
```

I)

```math
y' \neq z',
```

```math
1 + y \neq 1 + z;
```

hence 1 belongs to $\mathfrak{M}$.

II) If $x$ belongs to $\mathfrak{M}$, then

```math
x + y \neq x + z,
```

hence

```math
(x + y)' \neq (x + z)',
```

```math
x' + y \neq x' + z,
```

so that $x'$ belongs to $\mathfrak{M}$.

Hence the assertion always holds.

**Theorem 9:** If $x$ and $y$ are given, then exactly one of the following cases occurs:

1) $x = y$.

2) There exists a (hence, by Theorem 8, exactly one) $u$ with

```math
x = y + u.
```

3) There exists a (hence, by Theorem 8, exactly one) $v$ with

```math
y = x + v.
```

**Proof:** A) By Theorem 7, cases 1), 2) are incompatible, and so are 1), 3). From Theorem 7 there also follows the incompatibility of 2), 3); for otherwise we would have

```math
x = y + u = (x + v) + u = x + (v + u) = (v + u) + x.
```

Hence at most one of the cases 1), 2), 3) occurs.

B) Let $x$ be fixed, and $\mathfrak{M}$ the set of all $y$ for which one (hence, by A), exactly one) of the cases 1), 2), 3) occurs.

I) For $y = 1$ we have, by Theorem 3, either

```math
x = 1 = y \quad \text{(Case 1))}
```

or

```math
x = u' = 1 + u = y + u \quad \text{(Case 2))}.
```

Hence 1 belongs to $\mathfrak{M}$.

II) Let $y$ belong to $\mathfrak{M}$. Then we have

either (case 1) for $y$)

```math
x = y,
```

hence

```math
y' = y + 1 = x + 1 \quad \text{(Case 3) for } y');
```

or (case 2) for $y$)

```math
x = y + u,
```

hence, if

```math
u = 1,
```

```math
x = y + 1 = y' \quad \text{(Case 1) for } y');
```

if

```math
u \neq 1,
```

then by Theorem 3

```math
u = w' = 1 + w,
```

```math
x = y + (1 + w) = (y + 1) + w = y' + w \quad \text{(Case 2) for } y');
```

or (case 3) for $y$)

```math
y = x + v,
```

hence

```math
y' = (x + v)' = x + v' \quad \text{(Case 3) for } y').
```

In each case, therefore, $y'$ belongs to $\mathfrak{M}$.

Hence one of the cases 1), 2), 3) always occurs.

## § 3. Order

**Definition 2:** If

```math
x = y + u,
```

then

```math
x > y.
```

($>$ read: greater than.)

**Definition 3:** If

```math
y = x + v,
```

then

```math
x < y.
```

($<$ read: less than.)

**Theorem 10:** For arbitrary $x$, $y$, exactly one of the cases

```math
x = y, \quad x > y, \quad x < y
```

occurs.

**Proof:** Theorem 9, Definition 2, and Definition 3.

**Theorem 11:** From

```math
x > y
```

it follows that

```math
y < x.
```

**Proof:** Both mean

```math
x = y + u
```

for a suitable $u$.

**Theorem 12:** From

```math
x < y
```

it follows that

```math
y > x.
```

**Proof:** Both mean

```math
y = x + v
```

for a suitable $v$.

**Definition 4:**

```math
x \geqq y
```

means

```math
x > y \quad \text{or} \quad x = y.
```

($\geqq$ read: greater than or equal to.)

**Definition 5:**

```math
x \leqq y
```

means

```math
x < y \quad \text{or} \quad x = y.
```

($\leqq$ read: less than or equal to.)

**Theorem 13:** From

```math
x \geqq y
```

it follows that

```math
y \leqq x.
```

**Proof:** Theorem 11.

**Theorem 14:** From

```math
x \leqq y
```

it follows that

```math
y \geqq x.
```

**Proof:** Theorem 12.

**Theorem 15** (transitivity of order): From

```math
x < y, \quad y < z
```

it follows that

```math
x < z.
```

**Preliminary Remark:** Thus from

```math
x > y, \quad y > z
```

it follows (since

```math
z < y, \quad y < x,
```

```math
z < x)
```

that

```math
x > z;
```

but such statements, arising trivially by reading backwards, I shall not bother to write down in what follows.

**Proof:** For suitable $v$, $w$ we have

```math
y = x + v, \quad z = y + w,
```

hence

```math
z = (x + v) + w = x + (v + w),
```

```math
x < z.
```

**Theorem 16:** From

```math
x \leqq y, \; y < z \quad \text{or} \quad x < y, \; y \leqq z
```

it follows that

```math
x < z.
```

**Proof:** With the equality sign in the hypothesis, clear; otherwise settled by Theorem 15.

**Theorem 17:** From

```math
x \leqq y, \quad y \leqq z
```

it follows that

```math
x \leqq z.
```

**Proof:** With two equality signs in the hypothesis, clear; otherwise settled by Theorem 16.

By Theorems 15 to 17, a notation such as

```math
a < b \leqq c < d
```

is justified; in the first instance this means

```math
a < b, \quad b \leqq c, \quad c < d,
```

but by those theorems it also contains, e.g.,

```math
a < c, \quad a < d, \quad b < d.
```

(Correspondingly in the later chapters.)

**Theorem 18:**

```math
x + y > x.
```

**Proof:**

```math
x + y = x + y.
```

**Theorem 19:** From

```math
x > y \quad \text{resp.} \quad x = y \quad \text{resp.} \quad x < y
```

it follows that

```math
x + z > y + z \quad \text{resp.} \quad x + z = y + z \quad \text{resp.} \quad x + z < y + z.
```

**Proof:** 1) From

```math
x > y
```

it follows that

```math
x = y + u,
```

```math
x + z = (y + u) + z = (u + y) + z = u + (y + z) = (y + z) + u,
```

```math
x + z > y + z.
```

2) From

```math
x = y
```

it of course follows that

```math
x + z = y + z.
```

3) From

```math
x < y
```

it follows that

```math
y > x,
```

hence by 1)

```math
y + z > x + z,
```

```math
x + z < y + z.
```

**Theorem 20:** From

```math
x + z > y + z \quad \text{resp.} \quad x + z = y + z \quad \text{resp.} \quad x + z < y + z
```

it follows that

```math
x > y \quad \text{resp.} \quad x = y \quad \text{resp.} \quad x < y.
```

**Proof:** Follows from Theorem 19, since in each case the three cases are mutually exclusive and exhaust all possibilities.

**Theorem 21:** From

```math
x > y, \quad z > u
```

it follows that

```math
x + z > y + u.
```

**Proof:** By Theorem 19 we have

```math
x + z > y + z
```

and

```math
y + z = z + y > u + y = y + u,
```

hence

```math
x + z > y + u.
```

**Theorem 22:** From

```math
x \geqq y, \; z > u \quad \text{or} \quad x > y, \; z \geqq u
```

it follows that

```math
x + z > y + u.
```

**Proof:** With the equality sign in the hypothesis, settled by Theorem 19; otherwise by Theorem 21.

**Theorem 23:** From

```math
x \geqq y, \quad z \geqq u
```

it follows that

```math
x + z \geqq y + u.
```

**Proof:** With two equality signs in the hypothesis, clear; otherwise settled by Theorem 22.

**Theorem 24:**

```math
x \geqq 1.
```

**Proof:** Either

```math
x = 1
```

or

```math
x = u' = u + 1 > 1.
```

**Theorem 25:** From

```math
y > x
```

it follows that

```math
y \geqq x + 1.
```

**Proof:**

```math
y = x + u,
```

```math
u \geqq 1,
```

hence

```math
y \geqq x + 1.
```

**Theorem 26:** From

```math
y < x + 1
```

it follows that

```math
y \leqq x.
```

**Proof:** Otherwise we would have

```math
y > x,
```

hence by Theorem 25

```math
y \geqq x + 1.
```

**Theorem 27:** In every non-empty set of natural numbers there is a least one (i.e., one which is less than any other that there may be).

**Proof:** Let $\mathfrak{N}$ be the given set. Let $\mathfrak{M}$ be the set of $x$ which are $\leqq$ every number of $\mathfrak{N}$.

1 belongs to $\mathfrak{M}$ by Theorem 24. Not every $x$ belongs to $\mathfrak{M}$; for, for every $y$ of $\mathfrak{N}$, $y + 1$ does not belong to $\mathfrak{M}$, since

```math
y + 1 > y.
```

Hence there is an $m$ in $\mathfrak{M}$ such that $m + 1$ does not belong to $\mathfrak{M}$; for otherwise, by Axiom 5, every natural number would have to belong to $\mathfrak{M}$.

Of this $m$ I assert that it is $\leqq$ every $n$ of $\mathfrak{N}$ and that it belongs to $\mathfrak{N}$. The former is already established. The latter follows indirectly, thus: If $m$ did not belong to $\mathfrak{N}$, then for every $n$ of $\mathfrak{N}$ we would have

```math
m < n,
```

hence by Theorem 25

```math
m + 1 \leqq n;
```

hence $m + 1$ would belong to $\mathfrak{M}$, contradicting the above.

## § 4. Multiplication

**Theorem 28, and at the same time Definition 6:** In exactly one way can there be assigned to every pair of numbers $x$, $y$ a natural number, called $x \cdot y$ ($\cdot$ read: times; but the dot is usually not written), such that

1) $x \cdot 1 = x$ for every $x$,

2) $x \cdot y' = x \cdot y + x$ for every $x$ and every $y$.

$x \cdot y$ is called the product of $x$ with $y$, or the number arising from multiplication of $x$ by $y$.

**Proof** (agreeing, mutatis mutandis, word for word with that of Theorem 4): A) First we show that for each fixed $x$ there is at most one possibility of defining $xy$ for all $y$ in such a way that

```math
x \cdot 1 = x
```

and

```math
xy' = xy + x \quad \text{for every } y.
```

Let $a_y$ and $b_y$ be defined for all $y$ and be such that

```math
a_1 = x, \quad b_1 = x,
```

```math
a_{y'} = a_y + x, \quad b_{y'} = b_y + x \quad \text{for every } y.
```

Let $\mathfrak{M}$ be the set of $y$ with

```math
a_y = b_y.
```

I)

```math
a_1 = x = b_1;
```

hence 1 belongs to $\mathfrak{M}$.

II) If $y$ belongs to $\mathfrak{M}$, then

```math
a_y = b_y,
```

hence

```math
a_{y'} = a_y + x = b_y + x = b_{y'},
```

hence $y'$ belongs to $\mathfrak{M}$.

Therefore $\mathfrak{M}$ is the set of all natural numbers; i.e., for every $y$ we have

```math
a_y = b_y.
```

B) We now show that for every $x$ there is a possibility of defining $xy$ for all $y$ in such a way that

```math
x \cdot 1 = x
```

and

```math
xy' = xy + x \quad \text{for every } y.
```

Let $\mathfrak{M}$ be the set of $x$ for which there is one (hence, by A), exactly one) such possibility.

I) For

```math
x = 1
```

the definition

```math
xy = y
```

accomplishes what is required. For

```math
x \cdot 1 = 1 = x,
```

```math
xy' = y' = y + 1 = xy + x.
```

Hence 1 belongs to $\mathfrak{M}$.

II) Let $x$ belong to $\mathfrak{M}$, so that there exists an $xy$ for all $y$. Then

```math
x'y = xy + y
```

accomplishes what is required for $x'$. For

```math
x' \cdot 1 = x \cdot 1 + 1 = x + 1 = x'
```

and

```math
\begin{aligned}
x'y' &= xy' + y' = (xy + x) + y' = xy + (x + y') = xy + (x + y)' \\
&= xy + (x' + y) = xy + (y + x') = (xy + y) + x' = x'y + x'.
\end{aligned}
```

Hence $x'$ belongs to $\mathfrak{M}$.

Therefore $\mathfrak{M}$ contains all $x$.

**Theorem 29** (commutative law of multiplication):

```math
xy = yx.
```

**Proof:** Let $y$ be fixed, and let $\mathfrak{M}$ be the set of $x$ for which the assertion holds.

I) We have

```math
y \cdot 1 = y
```

and, by the construction in the proof of Theorem 28,

```math
1 \cdot y = y,
```

hence

```math
1 \cdot y = y \cdot 1,
```

so that 1 belongs to $\mathfrak{M}$.

II) If $x$ belongs to $\mathfrak{M}$, then

```math
xy = yx,
```

hence

```math
xy + y = yx + y = yx'.
```

By the construction in the proof of Theorem 28 we have

```math
x'y = xy + y,
```

hence

```math
x'y = yx',
```

so that $x'$ belongs to $\mathfrak{M}$.

Hence the assertion holds for all $x$.

**Theorem 30** (distributive law):

```math
x(y + z) = xy + xz.
```

**Preliminary Remark:** The formula

```math
(y + z)x = yx + zx
```

which flows from Theorem 30 and Theorem 29, and similar analogues later on, need not be specially formulated as theorems, nor even written down.

**Proof:** For fixed $x$, $y$, let $\mathfrak{M}$ be the set of $z$ for which the assertion holds.

I)

```math
x(y + 1) = xy' = xy + x = xy + x \cdot 1;
```

1 belongs to $\mathfrak{M}$.

II) If $z$ belongs to $\mathfrak{M}$, then

```math
x(y + z) = xy + xz,
```

hence

```math
\begin{aligned}
x(y + z') &= x((y + z)') = x(y + z) + x = (xy + xz) + x \\
&= xy + (xz + x) = xy + xz',
\end{aligned}
```

so that $z'$ belongs to $\mathfrak{M}$.

Therefore the assertion always holds.

**Theorem 31** (associative law of multiplication):

```math
(xy)z = x(yz).
```

**Proof:** Let $x$ and $y$ be fixed, and let $\mathfrak{M}$ be the set of $z$ for which the assertion holds.

I)

```math
(xy) \cdot 1 = xy = x(y \cdot 1);
```

hence 1 belongs to $\mathfrak{M}$.

II) Let $z$ belong to $\mathfrak{M}$. Then

```math
(xy)z = x(yz),
```

hence, using Theorem 30,

```math
(xy)z' = (xy)z + xy = x(yz) + xy = x(yz + y) = x(yz'),
```

so that $z'$ belongs to $\mathfrak{M}$.

Hence $\mathfrak{M}$ contains all natural numbers.

**Theorem 32:** From

```math
x > y \quad \text{resp.} \quad x = y \quad \text{resp.} \quad x < y
```

it follows that

```math
xz > yz \quad \text{resp.} \quad xz = yz \quad \text{resp.} \quad xz < yz.
```

**Proof:** 1) From

```math
x > y
```

it follows that

```math
x = y + u,
```

```math
xz = (y + u)z = yz + uz > yz.
```

2) From

```math
x = y
```

it of course follows that

```math
xz = yz.
```

3) From

```math
x < y
```

it follows that

```math
y > x,
```

hence by 1)

```math
yz > xz,
```

```math
xz < yz.
```

**Theorem 33:** From

```math
xz > yz \quad \text{resp.} \quad xz = yz \quad \text{resp.} \quad xz < yz
```

it follows that

```math
x > y \quad \text{resp.} \quad x = y \quad \text{resp.} \quad x < y.
```

**Proof:** Follows from Theorem 32, since in each case the three cases are mutually exclusive and exhaust all possibilities.

**Theorem 34:** From

```math
x > y, \quad z > u
```

it follows that

```math
xz > yu.
```

**Proof:** By Theorem 32 we have

```math
xz > yz
```

and

```math
yz = zy > uy = yu,
```

hence

```math
xz > yu.
```

**Theorem 35:** From

```math
x \geqq y, \; z > u \quad \text{or} \quad x > y, \; z \geqq u
```

it follows that

```math
xz > yu.
```

**Proof:** With the equality sign in the hypothesis, settled by Theorem 32; otherwise by Theorem 34.

**Theorem 36:** From

```math
x \geqq y, \quad z \geqq u
```

it follows that

```math
xz \geqq yu.
```

**Proof:** With two equality signs in the hypothesis, clear; otherwise settled by Theorem 35.
