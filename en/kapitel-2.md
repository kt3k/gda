# Chapter 2. Fractions

## § 1. Definition and Equivalence

**Definition 7:** By a fraction $\frac{x_1}{x_2}$ (read: $x_1$ over $x_2$) we mean the pair of natural numbers $x_1$, $x_2$ (in this order).

**Definition 8:**

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
```

($\sim$ read: equivalent), if

```math
x_1 y_2 = y_1 x_2.
```

**Theorem 37:**

```math
\frac{x_1}{x_2} \sim \frac{x_1}{x_2}.
```

**Proof:**

```math
x_1 x_2 = x_1 x_2.
```

**Theorem 38:** From

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
```

it follows that

```math
\frac{y_1}{y_2} \sim \frac{x_1}{x_2}.
```

**Proof:**

```math
x_1 y_2 = y_1 x_2,
```

hence

```math
y_1 x_2 = x_1 y_2.
```

**Theorem 39:** From

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} \sim \frac{z_1}{z_2}
```

it follows that

```math
\frac{x_1}{x_2} \sim \frac{z_1}{z_2}.
```

**Proof:**

```math
x_1 y_2 = y_1 x_2, \quad y_1 z_2 = z_1 y_2,
```

hence

```math
(x_1 y_2)(y_1 z_2) = (y_1 x_2)(z_1 y_2).
```

We always have

```math
(x y)(z u) = x(y(z u)) = x((y z) u) = x(u(y z)) = (x u)(y z) = (x u)(z y);
```

therefore

```math
(x_1 y_2)(y_1 z_2) = (x_1 z_2)(y_1 y_2)
```

and

```math
(y_1 x_2)(z_1 y_2) = (y_1 y_2)(z_1 x_2) = (z_1 x_2)(y_1 y_2),
```

consequently, by the above,

```math
(x_1 z_2)(y_1 y_2) = (z_1 x_2)(y_1 y_2),
```

```math
x_1 z_2 = z_1 x_2.
```

By virtue of Theorems 37 through 39, all fractions fall into classes, in such a way that

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
```

if and only if $\frac{x_1}{x_2}$ and $\frac{y_1}{y_2}$ belong to the same class.

**Theorem 40:**

```math
\frac{x_1}{x_2} \sim \frac{x_1 x}{x_2 x}.
```

**Proof:**

```math
x_1(x_2 x) = x_1(x x_2) = (x_1 x) x_2.
```

## § 2. Ordering

**Definition 9:**

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}
```

($>$ read: greater than), if

```math
x_1 y_2 > y_1 x_2.
```

**Definition 10:**

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}
```

($<$ read: less than), if

```math
x_1 y_2 < y_1 x_2.
```

**Theorem 41:** If $\frac{x_1}{x_2}$, $\frac{y_1}{y_2}$ are arbitrary, then exactly one of the cases

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} < \frac{y_1}{y_2}
```

holds.

**Proof:** For $x_1$, $x_2$, $y_1$, $y_2$, exactly one of the cases

```math
x_1 y_2 = y_1 x_2, \quad x_1 y_2 > y_1 x_2, \quad x_1 y_2 < y_1 x_2
```

holds.

**Theorem 42:** From

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}
```

it follows that

```math
\frac{y_1}{y_2} < \frac{x_1}{x_2}.
```

**Proof:** From

```math
x_1 y_2 > y_1 x_2
```

it follows that

```math
y_1 x_2 < x_1 y_2.
```

**Theorem 43:** From

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}
```

it follows that

```math
\frac{y_1}{y_2} > \frac{x_1}{x_2}.
```

**Proof:** From

```math
x_1 y_2 < y_1 x_2
```

it follows that

```math
y_1 x_2 > x_1 y_2.
```

**Theorem 44:** From

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
```

it follows that

```math
\frac{z_1}{z_2} > \frac{u_1}{u_2}.
```

**Preliminary Remark:** Thus if a fraction of one class is greater than a fraction of another class, then this holds for all pairs of representatives of the two classes.

**Proof:**

```math
y_1 u_2 = u_1 y_2, \quad z_1 x_2 = x_1 z_2, \quad x_1 y_2 > y_1 x_2,
```

hence

```math
(y_1 u_2)(z_1 x_2) = (u_1 y_2)(x_1 z_2),
```

hence by Theorem 32

```math
(y_1 x_2)(z_1 u_2) = (u_1 z_2)(x_1 y_2) > (u_1 z_2)(y_1 x_2),
```

hence by Theorem 33

```math
z_1 u_2 > u_1 z_2.
```

**Theorem 45:** From

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
```

it follows that

```math
\frac{z_1}{z_2} < \frac{u_1}{u_2}.
```

**Preliminary Remark:** Thus if a fraction of one class is less than a fraction of another class, then this holds for all pairs of representatives of the two classes.

**Proof:** By Theorem 43,

```math
\frac{y_1}{y_2} > \frac{x_1}{x_2};
```

because of

```math
\frac{y_1}{y_2} \sim \frac{u_1}{u_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}
```

we thus have, by Theorem 44,

```math
\frac{u_1}{u_2} > \frac{z_1}{z_2},
```

hence by Theorem 42

```math
\frac{z_1}{z_2} < \frac{u_1}{u_2}.
```

**Definition 11:**

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}
```

means

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{or}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2}.
```

($\gtrsim$ read: greater than or equivalent to.)

**Definition 12:**

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}
```

means

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2} \quad\text{or}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2}.
```

($\lesssim$ read: less than or equivalent to.)

**Theorem 46:** From

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
```

it follows that

```math
\frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}.
```

**Proof:** With $>$ in the hypothesis, this is clear by Theorem 44; otherwise

```math
\frac{z_1}{z_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \sim \frac{u_1}{u_2}.
```

**Theorem 47:** From

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
```

it follows that

```math
\frac{z_1}{z_2} \lesssim \frac{u_1}{u_2}.
```

**Proof:** With $<$ in the hypothesis, this is clear by Theorem 45; otherwise

```math
\frac{z_1}{z_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \sim \frac{u_1}{u_2}.
```

**Theorem 48:** From

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}
```

it follows that

```math
\frac{y_1}{y_2} \lesssim \frac{x_1}{x_2}.
```

**Proof:** Theorem 38 and Theorem 42.

**Theorem 49:** From

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}
```

it follows that

```math
\frac{y_1}{y_2} \gtrsim \frac{x_1}{x_2}.
```

**Proof:** Theorem 38 and Theorem 43.

**Theorem 50** (Transitivity of Ordering): From

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} < \frac{z_1}{z_2}
```

it follows that

```math
\frac{x_1}{x_2} < \frac{z_1}{z_2}.
```

**Proof:**

```math
x_1 y_2 < y_1 x_2, \quad y_1 z_2 < z_1 y_2,
```

hence

```math
(x_1 y_2)(y_1 z_2) < (y_1 x_2)(z_1 y_2),
```

```math
(x_1 z_2)(y_1 y_2) < (z_1 x_2)(y_1 y_2),
```

```math
x_1 z_2 < z_1 x_2.
```

**Theorem 51:** From

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} < \frac{z_1}{z_2} \quad\text{or}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} \lesssim \frac{z_1}{z_2}
```

it follows that

```math
\frac{x_1}{x_2} < \frac{z_1}{z_2}.
```

**Proof:** With the equivalence sign in the hypothesis, settled by Theorem 45; otherwise by Theorem 50.

**Theorem 52:** From

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} \lesssim \frac{z_1}{z_2}
```

it follows that

```math
\frac{x_1}{x_2} \lesssim \frac{z_1}{z_2}.
```

**Proof:** With two equivalence signs in the hypothesis, settled by Theorem 39; otherwise by Theorem 51.

**Theorem 53:** For $\frac{x_1}{x_2}$ there exists a

```math
\frac{z_1}{z_2} > \frac{x_1}{x_2}.
```

**Proof:**

```math
(x_1 + x_1) x_2 = x_1 x_2 + x_1 x_2 > x_1 x_2,
```

```math
\frac{x_1 + x_1}{x_2} > \frac{x_1}{x_2}.
```

**Theorem 54:** For $\frac{x_1}{x_2}$ there exists a

```math
\frac{z_1}{z_2} < \frac{x_1}{x_2}.
```

**Proof:**

```math
x_1 x_2 < x_1 x_2 + x_1 x_2 = x_1(x_2 + x_2),
```

```math
\frac{x_1}{x_2 + x_2} < \frac{x_1}{x_2}.
```

**Theorem 55:** If

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2},
```

then there exists a $\frac{z_1}{z_2}$ with

```math
\frac{x_1}{x_2} < \frac{z_1}{z_2} < \frac{y_1}{y_2}.
```

**Proof:**

```math
x_1 y_2 < y_1 x_2,
```

hence

```math
x_1 x_2 + x_1 y_2 < x_1 x_2 + y_1 x_2, \quad x_1 y_2 + y_1 y_2 < y_1 x_2 + y_1 y_2,
```

```math
x_1(x_2 + y_2) < (x_1 + y_1) x_2, \quad (x_1 + y_1) y_2 < y_1(x_2 + y_2),
```

```math
\frac{x_1}{x_2} < \frac{x_1 + y_1}{x_2 + y_2} < \frac{y_1}{y_2}.
```

## § 3. Addition

**Definition 13:** By $\frac{x_1}{x_2} + \frac{y_1}{y_2}$ ($+$ read: plus) we mean the fraction $\frac{x_1 y_2 + y_1 x_2}{x_2 y_2}$.

It is called the sum of $\frac{x_1}{x_2}$ and $\frac{y_1}{y_2}$, or the fraction obtained by addition of $\frac{y_1}{y_2}$ to $\frac{x_1}{x_2}$.

**Theorem 56:** From

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \sim \frac{u_1}{u_2}
```

it follows that

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Preliminary Remark:** The class of the sum thus depends only on the classes to which the "summands" belong.

**Proof:**

```math
x_1 y_2 = y_1 x_2, \quad z_1 u_2 = u_1 z_2,
```

hence

```math
(x_1 y_2)(z_2 u_2) = (y_1 x_2)(z_2 u_2), \quad (z_1 u_2)(x_2 y_2) = (u_1 z_2)(x_2 y_2),
```

hence

```math
(x_1 z_2)(y_2 u_2) = (y_1 u_2)(x_2 z_2), \quad (z_1 x_2)(y_2 u_2) = (u_1 y_2)(x_2 z_2),
```

```math
(x_1 z_2)(y_2 u_2) + (z_1 x_2)(y_2 u_2) = (y_1 u_2)(x_2 z_2) + (u_1 y_2)(x_2 z_2),
```

```math
(x_1 z_2 + z_1 x_2)(y_2 u_2) = (y_1 u_2 + u_1 y_2)(x_2 z_2),
```

```math
\frac{x_1 z_2 + z_1 x_2}{x_2 z_2} \sim \frac{y_1 u_2 + u_1 y_2}{y_2 u_2}.
```

**Theorem 57:**

```math
\frac{x_1}{x} + \frac{x_2}{x} \sim \frac{x_1 + x_2}{x}.
```

**Proof:** By Definition 13 and Theorem 40, we have

```math
\frac{x_1}{x} + \frac{x_2}{x} \sim \frac{x_1 x + x_2 x}{x x} \sim \frac{(x_1 + x_2) x}{x x} \sim \frac{x_1 + x_2}{x}.
```

**Theorem 58** (commutative law of addition):

```math
\frac{x_1}{x_2} + \frac{y_1}{y_2} \sim \frac{y_1}{y_2} + \frac{x_1}{x_2}.
```

**Proof:**

```math
\frac{x_1}{x_2} + \frac{y_1}{y_2} \sim \frac{x_1 y_2 + y_1 x_2}{x_2 y_2} \sim \frac{y_1 x_2 + x_1 y_2}{y_2 x_2} \sim \frac{y_1}{y_2} + \frac{x_1}{x_2}.
```

**Theorem 59** (associative law of addition):

```math
\left(\frac{x_1}{x_2} + \frac{y_1}{y_2}\right) + \frac{z_1}{z_2} \sim \frac{x_1}{x_2} + \left(\frac{y_1}{y_2} + \frac{z_1}{z_2}\right).
```

**Proof:**

```math
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
```

**Theorem 60:**

```math
\frac{x_1}{x_2} + \frac{y_1}{y_2} > \frac{x_1}{x_2}.
```

**Proof:**

```math
x_1 y_2 + y_1 x_2 > x_1 y_2,
```

```math
(x_1 y_2 + y_1 x_2) x_2 > (x_1 y_2) x_2 = x_1(y_2 x_2) = x_1(x_2 y_2),
```

```math
\frac{x_1}{x_2} + \frac{y_1}{y_2} \sim \frac{x_1 y_2 + y_1 x_2}{x_2 y_2} > \frac{x_1}{x_2}.
```

**Theorem 61:** From

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}
```

it follows that

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2}.
```

**Proof:** From

```math
x_1 y_2 > y_1 x_2
```

it follows that

```math
(x_1 y_2) z_2 > (y_1 x_2) z_2.
```

Since

```math
(x y) z = x(y z) = x(z y) = (x z) y
```

we thus have

```math
(x_1 z_2) y_2 > (y_1 z_2) x_2
```

and

```math
(z_1 x_2) y_2 = (z_1 y_2) x_2,
```

hence

```math
(x_1 z_2 + z_1 x_2) y_2 > (y_1 z_2 + z_1 y_2) x_2,
```

```math
(x_1 z_2 + z_1 x_2)(y_2 z_2) > (y_1 z_2 + z_1 y_2)(x_2 z_2),
```

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{x_1 z_2 + z_1 x_2}{x_2 z_2} > \frac{y_1 z_2 + z_1 y_2}{y_2 z_2} \sim \frac{y_1}{y_2} + \frac{z_1}{z_2}.
```

**Theorem 62:** From

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{resp.}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{resp.}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}
```

it follows that

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{resp.}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{resp.}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} < \frac{y_1}{y_2} + \frac{z_1}{z_2}.
```

**Proof:** The first part is Theorem 61, the second is contained in Theorem 56, and the third is a consequence of the first, since

```math
\frac{y_1}{y_2} > \frac{x_1}{x_2},
```

```math
\frac{y_1}{y_2} + \frac{z_1}{z_2} > \frac{x_1}{x_2} + \frac{z_1}{z_2},
```

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} < \frac{y_1}{y_2} + \frac{z_1}{z_2}.
```

**Theorem 63:** From

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{resp.}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{resp.}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} < \frac{y_1}{y_2} + \frac{z_1}{z_2}
```

it follows that

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{resp.}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{resp.}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}.
```

**Proof:** Follows from Theorem 62, since in each case the three cases are mutually exclusive and exhaust all possibilities.

**Theorem 64:** From

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2}
```

it follows that

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Proof:** By Theorem 61, we have

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2}
```

and

```math
\frac{y_1}{y_2} + \frac{z_1}{z_2} \sim \frac{z_1}{z_2} + \frac{y_1}{y_2} > \frac{u_1}{u_2} + \frac{y_1}{y_2} \sim \frac{y_1}{y_2} + \frac{u_1}{u_2},
```

hence

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Theorem 65:** From

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2} \quad\text{or}\quad \frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
```

it follows that

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Proof:** With the equivalence sign in the hypothesis, settled by Theorem 56 and Theorem 61; otherwise by Theorem 64.

**Theorem 66:** From

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
```

it follows that

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} \gtrsim \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Proof:** With two equivalence signs in the hypothesis, settled by Theorem 56; otherwise by Theorem 65.

**Theorem 67:** If

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2},
```

then

```math
\frac{y_1}{y_2} + \frac{u_1}{u_2} \sim \frac{x_1}{x_2}
```

has a solution $\frac{u_1}{u_2}$. If $\frac{u_1}{u_2}$ and $\frac{w_1}{w_2}$ are solutions, then

```math
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
```

**Preliminary Remark:** For

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}
```

there is no solution, by Theorem 60.

**Proof:** The second assertion follows immediately from Theorem 63; for if

```math
\frac{y_1}{y_2} + \frac{u_1}{u_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} + \frac{w_1}{w_2}
```

then by that theorem

```math
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
```

The existence of a $\frac{u_1}{u_2}$ (first assertion) is obtained as follows. We have

```math
x_1 y_2 > y_1 x_2.
```

Let $u$ be determined from

```math
x_1 y_2 = y_1 x_2 + u
```

and set

```math
u_1 = u, \quad u_2 = x_2 y_2
```

Then $\frac{u_1}{u_2}$ is a solution, since

```math
\frac{y_1}{y_2} + \frac{u_1}{u_2} \sim \frac{y_1}{y_2} + \frac{u}{x_2 y_2} \sim \frac{y_1 x_2 + u}{x_2 y_2} \sim \frac{x_1 y_2}{x_2 y_2} \sim \frac{x_1}{x_2}.
```

**Definition 14:** The particular $\frac{u_1}{u_2}$ constructed in the proof of Theorem 67 is called $\frac{x_1}{x_2} - \frac{y_1}{y_2}$ ($-$ read: minus), or the difference $\frac{x_1}{x_2}$ minus $\frac{y_1}{y_2}$, or the fraction obtained by subtraction of the fraction $\frac{y_1}{y_2}$ from the fraction $\frac{x_1}{x_2}$.

From

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2} + \frac{u_1}{u_2}
```

it thus follows that

```math
\frac{u_1}{u_2} \sim \frac{x_1}{x_2} - \frac{y_1}{y_2}.
```

## § 4. Multiplication

**Definition 15:** By $\frac{x_1}{x_2} \cdot \frac{y_1}{y_2}$ ($\cdot$ read: times; but the dot is usually not written) we mean the fraction $\frac{x_1 y_1}{x_2 y_2}$.

It is called the product of $\frac{x_1}{x_2}$ by $\frac{y_1}{y_2}$, or the fraction obtained by multiplication of $\frac{x_1}{x_2}$ by $\frac{y_1}{y_2}$.

**Theorem 68:** From

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \sim \frac{u_1}{u_2}
```

it follows that

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Preliminary Remark:** The class of the product thus depends only on the classes to which the "factors" belong.

**Proof:**

```math
x_1 y_2 = y_1 x_2, \quad z_1 u_2 = u_1 z_2,
```

hence

```math
(x_1 y_2)(z_1 u_2) = (y_1 x_2)(u_1 z_2),
```

```math
(x_1 z_1)(y_2 u_2) = (y_1 u_1)(x_2 z_2).
```

**Theorem 69** (commutative law of multiplication):

```math
\frac{x_1}{x_2} \cdot \frac{y_1}{y_2} \sim \frac{y_1}{y_2} \cdot \frac{x_1}{x_2}.
```

**Proof:**

```math
\frac{x_1}{x_2} \cdot \frac{y_1}{y_2} \sim \frac{x_1 y_1}{x_2 y_2} \sim \frac{y_1 x_1}{y_2 x_2} \sim \frac{y_1}{y_2} \cdot \frac{x_1}{x_2}.
```

**Theorem 70** (associative law of multiplication):

```math
\left(\frac{x_1}{x_2} \cdot \frac{y_1}{y_2}\right) \cdot \frac{z_1}{z_2} \sim \frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} \cdot \frac{z_1}{z_2}\right).
```

**Proof:**

```math
\begin{aligned}
\left(\frac{x_1}{x_2} \cdot \frac{y_1}{y_2}\right) \cdot \frac{z_1}{z_2}
&\sim \frac{x_1 y_1}{x_2 y_2} \cdot \frac{z_1}{z_2}
\sim \frac{(x_1 y_1) z_1}{(x_2 y_2) z_2} \\
&\sim \frac{x_1(y_1 z_1)}{x_2(y_2 z_2)}
\sim \frac{x_1}{x_2} \cdot \frac{y_1 z_1}{y_2 z_2}
\sim \frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} \cdot \frac{z_1}{z_2}\right).
\end{aligned}
```

**Theorem 71** (distributive law):

```math
\frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} + \frac{z_1}{z_2}\right) \sim \frac{x_1}{x_2} \cdot \frac{y_1}{y_2} + \frac{x_1}{x_2} \cdot \frac{z_1}{z_2}.
```

**Proof:**

```math
\begin{aligned}
\frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} + \frac{z_1}{z_2}\right)
&\sim \frac{x_1}{x_2} \cdot \frac{y_1 z_2 + z_1 y_2}{y_2 z_2}
\sim \frac{x_1(y_1 z_2 + z_1 y_2)}{x_2(y_2 z_2)} \\
&\sim \frac{x_1 y_1 z_2 + x_1 z_1 y_2}{x_2 y_2 z_2}
\sim \frac{(x_1 y_1)(x_2 z_2) + (x_1 z_1)(x_2 y_2)}{(x_2 y_2)(x_2 z_2)} \\
&\sim \frac{x_1 y_1}{x_2 y_2} + \frac{x_1 z_1}{x_2 z_2}
\sim \frac{x_1}{x_2} \cdot \frac{y_1}{y_2} + \frac{x_1}{x_2} \cdot \frac{z_1}{z_2}.
\end{aligned}
```

**Theorem 72:** From

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{resp.}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{resp.}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}
```

it follows that

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{resp.}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{resp.}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} < \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}.
```

**Proof:** 1) From

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}
```

it follows that

```math
x_1 y_2 > y_1 x_2,
```

```math
(x_1 y_2)(z_1 z_2) > (y_1 x_2)(z_1 z_2),
```

```math
(x_1 z_1)(y_2 z_2) > (y_1 z_1)(x_2 z_2),
```

```math
\frac{x_1 z_1}{x_2 z_2} > \frac{y_1 z_1}{y_2 z_2}.
```

2) From

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
```

it follows by Theorem 68 that

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}.
```

3) From

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}
```

it follows that

```math
\frac{y_1}{y_2} > \frac{x_1}{x_2},
```

hence by 1)

```math
\frac{y_1}{y_2} \cdot \frac{z_1}{z_2} > \frac{x_1}{x_2} \cdot \frac{z_1}{z_2},
```

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} < \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}.
```

**Theorem 73:** From

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{resp.}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{resp.}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} < \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}
```

it follows that

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{resp.}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{resp.}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}.
```

**Proof:** Follows from Theorem 72, since in each case the three cases are mutually exclusive and exhaust all possibilities.

**Theorem 74:** From

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2}
```

it follows that

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Proof:** By Theorem 72, we have

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}
```

and

```math
\frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \sim \frac{z_1}{z_2} \cdot \frac{y_1}{y_2} > \frac{u_1}{u_2} \cdot \frac{y_1}{y_2} \sim \frac{y_1}{y_2} \cdot \frac{u_1}{u_2},
```

hence

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Theorem 75:** From

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2} \quad\text{or}\quad \frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
```

it follows that

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Proof:** With the equivalence sign in the hypothesis, settled by Theorem 68 and Theorem 72; otherwise by Theorem 74.

**Theorem 76:** From

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
```

it follows that

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \gtrsim \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Proof:** With two equivalence signs in the hypothesis, settled by Theorem 68; otherwise by Theorem 75.

**Theorem 77:** The equivalence

```math
\frac{y_1}{y_2} \cdot \frac{u_1}{u_2} \sim \frac{x_1}{x_2},
```

where $\frac{x_1}{x_2}$ and $\frac{y_1}{y_2}$ are given, has a solution $\frac{u_1}{u_2}$. If $\frac{u_1}{u_2}$ and $\frac{w_1}{w_2}$ are solutions, then

```math
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
```

**Proof:** The second assertion follows immediately from Theorem 73; for if

```math
\frac{y_1}{y_2} \cdot \frac{u_1}{u_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \cdot \frac{w_1}{w_2}
```

then by that theorem

```math
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
```

The existence of a $\frac{u_1}{u_2}$ (first assertion) is obtained as follows. For

```math
u_1 = x_1 y_2, \quad u_2 = x_2 y_1
```

$\frac{u_1}{u_2}$ is a solution, since

```math
\frac{y_1}{y_2} \cdot \frac{u_1}{u_2} \sim \frac{y_1}{y_2} \cdot \frac{x_1 y_2}{x_2 y_1} \sim \frac{y_1(x_1 y_2)}{y_2(x_2 y_1)} \sim \frac{x_1(y_1 y_2)}{x_2(y_1 y_2)} \sim \frac{x_1}{x_2}.
```

## § 5. Rational Numbers and Integers

**Definition 16:** By a rational number one understands the set of all fractions equivalent to a fixed fraction (hence a class in the sense of § 1).

Capital latin letters denote throughout, unless otherwise stated, rational numbers.

**Definition 17:**

```math
X = Y
```

($=$ read: equals), if both sets comprise the same fractions. Otherwise

```math
X \neq Y
```

($\neq$ read: not equal).

The following three theorems are trivial:

**Theorem 78:** $X = X$.

**Theorem 79:** From

```math
X = Y
```

follows

```math
Y = X.
```

**Theorem 80:** From

```math
X = Y, \quad Y = Z
```

follows

```math
X = Z.
```

**Definition 18:**

```math
X > Y
```

($>$ read: greater than), if for some (hence by Theorem 44 for every) fraction $\frac{x_1}{x_2}$ resp. $\frac{y_1}{y_2}$ from the set $X$ resp. $Y$ we have

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}.
```

**Definition 19:**

```math
X < Y
```

($<$ read: less than), if for some (hence by Theorem 45 for every) fraction $\frac{x_1}{x_2}$ resp. $\frac{y_1}{y_2}$ from the set $X$ resp. $Y$ we have

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}.
```

**Theorem 81:** For arbitrary $X$, $Y$ exactly one of the cases

```math
X = Y, \quad X > Y, \quad X < Y
```

occurs.

**Proof:** Theorem 41.

**Theorem 82:** From

```math
X > Y
```

follows

```math
Y < X.
```

**Proof:** Theorem 42.

**Theorem 83:** From

```math
X < Y
```

follows

```math
Y > X.
```

**Proof:** Theorem 43.

**Definition 20:**

```math
X \geqq Y
```

means

```math
X > Y \quad\text{or}\quad X = Y.
```

($\geqq$ read: greater than or equal to.)

**Definition 21:**

```math
X \leqq Y
```

means

```math
X < Y \quad\text{or}\quad X = Y.
```

($\leqq$ read: less than or equal to.)

**Theorem 84:** From

```math
X \geqq Y
```

follows

```math
Y \leqq X.
```

**Proof:** Theorem 48.

**Theorem 85:** From

```math
X \leqq Y
```

follows

```math
Y \geqq X.
```

**Proof:** Theorem 49.

**Theorem 86** (Transitivity of Ordering): From

```math
X < Y, \quad Y < Z
```

follows

```math
X < Z.
```

**Proof:** Theorem 50.

**Theorem 87:** From

```math
X \leqq Y, \quad Y < Z \quad\text{or}\quad X < Y, \quad Y \leqq Z
```

follows

```math
X < Z.
```

**Proof:** Theorem 51.

**Theorem 88:** From

```math
X \leqq Y, \quad Y \leqq Z
```

follows

```math
X \leqq Z.
```

**Proof:** Theorem 52.

**Theorem 89:** For every $X$ there is a

```math
Z > X.
```

**Proof:** Theorem 53.

**Theorem 90:** For every $X$ there is a

```math
Z < X.
```

**Proof:** Theorem 54.

**Theorem 91:** If

```math
X < Y,
```

then there is a $Z$ with

```math
X < Z < Y.
```

**Proof:** Theorem 55.

**Definition 22:** By $X + Y$ ($+$ read: plus) one understands the class to which some (hence by Theorem 56 every) sum of a fraction from $X$ and a fraction from $Y$ belongs.

This rational number is called the sum of $X$ and $Y$, or the rational number obtained by addition of $Y$ to $X$.

**Theorem 92** (Commutative Law of Addition):

```math
X + Y = Y + X.
```

**Proof:** Theorem 58.

**Theorem 93** (Associative Law of Addition):

```math
(X + Y) + Z = X + (Y + Z).
```

**Proof:** Theorem 59.

**Theorem 94:**

```math
X + Y > X.
```

**Proof:** Theorem 60.

**Theorem 95:** From

```math
X > Y
```

follows

```math
X + Z > Y + Z.
```

**Proof:** Theorem 61.

**Theorem 96:** From

```math
X > Y \quad\text{resp.}\quad X = Y \quad\text{resp.}\quad X < Y
```

follows

```math
X + Z > Y + Z \quad\text{resp.}\quad X + Z = Y + Z \quad\text{resp.}\quad X + Z < Y + Z.
```

**Proof:** Theorem 62.

**Theorem 97:** From

```math
X + Z > Y + Z \quad\text{resp.}\quad X + Z = Y + Z \quad\text{resp.}\quad X + Z < Y + Z
```

follows

```math
X > Y \quad\text{resp.}\quad X = Y \quad\text{resp.}\quad X < Y.
```

**Proof:** Theorem 63.

**Theorem 98:** From

```math
X > Y, \quad Z > U
```

follows

```math
X + Z > Y + U.
```

**Proof:** Theorem 64.

**Theorem 99:** From

```math
X > Y, \quad Z = U \quad\text{or}\quad X = Y, \quad Z > U
```

follows

```math
X + Z > Y + U.
```

**Proof:** Theorem 65.

**Theorem 100:** From

```math
X \geqq Y, \quad Z \geqq U
```

follows

```math
X + Z \geqq Y + U.
```

**Proof:** Theorem 66.

**Theorem 101:** If

```math
X > Y,
```

then

```math
Y + U = X
```

has exactly one solution $U$.

**Preliminary Remark:** For

```math
X \leqq Y
```

there is no solution, by Theorem 94.

**Proof:** Theorem 67.

**Definition 23:** This $U$ is called $X - Y$ ($-$ read: minus), or the difference $X$ minus $Y$, or the rational number obtained by subtraction of the rational number $Y$ from the rational number $X$.

**Definition 24:** By $X \cdot Y$ ($\cdot$ read: times; but the dot is usually not written) one understands the class to which some (hence by Theorem 68 every) product of a fraction from $X$ with a fraction from $Y$ belongs.

This rational number is called the product of $X$ with $Y$, or the rational number obtained by multiplication of $X$ by $Y$.

**Theorem 102** (Commutative Law of Multiplication):

```math
X Y = Y X.
```

**Proof:** Theorem 69.

**Theorem 103** (Associative Law of Multiplication):

```math
(X Y) Z = X (Y Z).
```

**Proof:** Theorem 70.

**Theorem 104** (Distributive Law):

```math
X(Y + Z) = X Y + X Z.
```

**Proof:** Theorem 71.

**Theorem 105:** From

```math
X > Y \quad\text{resp.}\quad X = Y \quad\text{resp.}\quad X < Y
```

follows

```math
X Z > Y Z \quad\text{resp.}\quad X Z = Y Z \quad\text{resp.}\quad X Z < Y Z.
```

**Proof:** Theorem 72.

**Theorem 106:** From

```math
X Z > Y Z \quad\text{resp.}\quad X Z = Y Z \quad\text{resp.}\quad X Z < Y Z
```

follows

```math
X > Y \quad\text{resp.}\quad X = Y \quad\text{resp.}\quad X < Y.
```

**Proof:** Theorem 73.

**Theorem 107:** From

```math
X > Y, \quad Z > U
```

follows

```math
X Z > Y U.
```

**Proof:** Theorem 74.

**Theorem 108:** From

```math
X > Y, \quad Z = U \quad\text{or}\quad X = Y, \quad Z > U
```

follows

```math
X Z > Y U.
```

**Proof:** Theorem 75.

**Theorem 109:** From

```math
X \geqq Y, \quad Z \geqq U
```

follows

```math
X Z \geqq Y U.
```

**Proof:** Theorem 76.

**Theorem 110:** The equation

```math
Y U = X,
```

where $X$ and $Y$ are given, has exactly one solution $U$.

**Proof:** Theorem 77.

**Theorem 111:** From

```math
\frac{x}{1} > \frac{y}{1} \quad\text{resp.}\quad \frac{x}{1} \sim \frac{y}{1} \quad\text{resp.}\quad \frac{x}{1} < \frac{y}{1}
```

follows

```math
x > y \quad\text{resp.}\quad x = y \quad\text{resp.}\quad x < y
```

and conversely.

**Proof:**

```math
x \cdot 1 > y \cdot 1 \quad\text{resp.}\quad x \cdot 1 = y \cdot 1 \quad\text{resp.}\quad x \cdot 1 < y \cdot 1
```

means the same as

```math
x > y \quad\text{resp.}\quad x = y \quad\text{resp.}\quad x < y.
```

**Definition 25:** A rational number is called integral if among the fractions whose totality it is, there occurs a fraction $\frac{x}{1}$.

This $x$ is uniquely determined, by Theorem 111, and conversely to every $x$ there corresponds exactly one integer.

**Theorem 112:**

```math
\frac{x}{1} + \frac{y}{1} \sim \frac{x + y}{1},
```

```math
\frac{x}{1} \cdot \frac{y}{1} \sim \frac{x y}{1}.
```

**Preliminary Remark:** The sum and product of two integers are thus integers.

**Proof:** 1) By Theorem 57 we have

```math
\frac{x}{1} + \frac{y}{1} \sim \frac{x + y}{1}.
```

2) By Definition 15 we have

```math
\frac{x}{1} \cdot \frac{y}{1} \sim \frac{x y}{1 \cdot 1} \sim \frac{x y}{1}.
```

**Theorem 113:** The integers satisfy the five axioms of the natural numbers, if the class of $\frac{1}{1}$ is taken in place of $1$ and as successor of the class of $\frac{x}{1}$ the class of $\frac{x'}{1}$ is taken.

**Proof:** Let $Q$ be the set of integers.

1) The class of $\frac{1}{1}$ belongs to $Q$.

2) For every integer we have uniquely defined a successor.

3) It is always different from the class of $\frac{1}{1}$, since always

```math
x' \neq 1.
```

4) If the classes of $\frac{x'}{1}$ and $\frac{y'}{1}$ coincide, then

```math
x' = y',
```

```math
x = y,
```

and the classes of $\frac{x}{1}$ and $\frac{y}{1}$ coincide.

5) Let a set $\mathfrak{M}$ of integers have the properties:

I) The class of $\frac{1}{1}$ belongs to $\mathfrak{M}$.

II) If the class of $\frac{x}{1}$ belongs to $\mathfrak{M}$, then the class of $\frac{x'}{1}$ belongs to $\mathfrak{M}$.

Then let $\mathfrak{N}$ denote the set of $x$ for which the class of $\frac{x}{1}$ belongs to $\mathfrak{M}$. Then $1$ belongs to $\mathfrak{N}$, and with every $x$ of $\mathfrak{N}$ also $x'$ belongs to $\mathfrak{N}$. Hence every natural number belongs to $\mathfrak{N}$, hence every integer to $\mathfrak{M}$.

Since $=$, $>$, $<$, sum and product (by Theorems 111 and 112) correspond to the old concepts, the integers have all the properties which we proved in Chapter 1 for the natural numbers.

Therefore we throw away the natural numbers, replace them by the corresponding integers, and henceforth (since the fractions also become superfluous) have to speak, as regards what has gone before, only of rational numbers. (The natural numbers remain in pairs above and below the bar in the concept of the fraction, and the fractions remain as individuals of the set which is called a rational number.)

**Definition 26:** (The now available symbol) $x$ denotes the integer given by the class of $\frac{x}{1}$.

In our new language we thus have, e.g.,

```math
x \cdot 1 = x;
```

for

```math
\frac{x_1}{x_2} \cdot \frac{1}{1} \sim \frac{x_1 \cdot 1}{x_2 \cdot 1} \sim \frac{x_1}{x_2}.
```

**Theorem 114:** If $Z$ is the rational number belonging to the fraction $\frac{x}{y}$, then

```math
y Z = x.
```

**Proof:**

```math
\frac{y}{1} \cdot \frac{x}{y} \sim \frac{y x}{1 \cdot y} \sim \frac{x y}{1 \cdot y} \sim \frac{x}{1}.
```

**Definition 27:** The $U$ of Theorem 110 is called the quotient of $X$ by $Y$, or the rational number obtained by division of $X$ by $Y$. It is denoted by $\frac{X}{Y}$ (read: $X$ over $Y$).

If $X$ and $Y$ are integers, say $X = x$, $Y = y$, then the rational number $\frac{x}{y}$ defined by Definitions 26 and 27 means, by Theorem 114, the class to which the fraction $\frac{x}{y}$ in the old sense belongs.

A confusion of the two symbols $\frac{x}{y}$ is not to be feared, since fractions will in future no longer occur separately; henceforth $\frac{x}{y}$ always denotes a rational number. Conversely, every rational number can be represented in the form $\frac{x}{y}$, on the basis of Theorem 114 and Definition 27.

**Theorem 115:** If $X$ and $Y$ are given, then there is a $z$ with

```math
z X > Y.
```

**Proof:** $\frac{Y}{X}$ is a rational number; by Theorem 89 there are (in our new language) integers $z$, $v$ with

```math
\frac{z}{v} > \frac{Y}{X}.
```

By Theorem 111 we have

hence by Theorem 105
