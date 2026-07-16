# Chapter 4. Real Numbers

## § 1. Definition

**Definition 43:** The cuts we now call positive numbers; and accordingly we now say positive rational number instead of, as hitherto, rational number, and positive integer instead of, as hitherto, integer.

We create a new number 0 (read: zero), distinct from the positive numbers.

We further create numbers distinct from the positive numbers and from 0, called negative, in such a way that to every $\xi$ (i.e. to every positive number) we assign a negative number, which we call $-\xi$ ($-$ read: minus).

Here $-\xi$ and $-\eta$ are considered the same number (equal) if and only if $\xi$ and $\eta$ are the same number.

The totality of the positive numbers, of 0, and of the negative numbers we call real numbers.

Capital Greek letters, unless otherwise stated, denote real numbers throughout. For equal we write $=$, for unequal (distinct) $\neq$.

For every $\Xi$ and every $\mathrm{H}$, exactly one of the cases

$$
\Xi = \mathrm{H}, \quad \Xi \neq \mathrm{H}
$$

therefore holds. For the real numbers the concepts of identity and equality merge, so that the three theorems are trivial:

**Theorem 163:** $\Xi = \Xi$.

**Theorem 164:** From

$$
\Xi = \mathrm{H}
$$

follows

$$
\mathrm{H} = \Xi.
$$

**Theorem 165:** From

$$
\Xi = \mathrm{H}, \quad \mathrm{H} = \mathrm{Z}
$$

follows

$$
\Xi = \mathrm{Z}.
$$

## § 2. Ordering

**Definition 44:**

$$
|\Xi| =
\begin{cases}
\xi, & \text{if } \Xi = \xi, \\
0, & \text{if } \Xi = 0, \\
\xi, & \text{if } \Xi = -\xi.
\end{cases}
$$

The number $|\Xi|$ is called the absolute value of $\Xi$.

**Theorem 166:** $|\Xi|$ is positive for positive and for negative $\Xi$.

**Proof:** Definition 44.

**Definition 45:** If $\Xi$ and $\mathrm{H}$ are not both positive, then

$$
\Xi > \mathrm{H}
$$

if and only if

either $\Xi$ negative, $\mathrm{H}$ negative and $|\Xi| < |\mathrm{H}|$,\
or $\Xi = 0$, $\mathrm{H}$ negative,\
or $\Xi$ positive, $\mathrm{H}$ negative,\
or $\Xi$ positive, $\mathrm{H} = 0$.

($>$ read: greater than.)

Observe that for positive $\Xi$ together with positive $\mathrm{H}$ we already have the concepts $>$ and $<$, and indeed used the latter in the one case of Definition 45.

**Definition 46:**

$$
\Xi < \mathrm{H}
$$

if and only if

$$
\mathrm{H} > \Xi.
$$

($<$ read: less than.)

Observe that for positive $\Xi$ together with positive $\mathrm{H}$, Definition 46 is in accordance with our old concepts.

**Theorem 167:** If $\Xi$, $\mathrm{H}$ are arbitrary, then exactly one of the cases

$$
\Xi = \mathrm{H}, \quad \Xi > \mathrm{H}, \quad \Xi < \mathrm{H}
$$

holds.

**Proof:** 1) If $\Xi$ and $\mathrm{H}$ are positive, we know this from Theorem 123.

2) If $\Xi$ is positive, $\mathrm{H} = 0$ or $\mathrm{H}$ negative, then

$$
\Xi \neq \mathrm{H},
$$

furthermore by Definition 45

$$
\Xi > \mathrm{H}
$$

and by Definition 46

$\Xi$ not $< \mathrm{H}$.

3) If $\Xi = 0$, $\mathrm{H}$ positive, then

$$
\Xi \neq \mathrm{H},
$$

furthermore by Definition 45

$\Xi$ not $> \mathrm{H}$

and by Definition 46

$$
\Xi < \mathrm{H}.
$$

4) If $\Xi = 0$, $\mathrm{H} = 0$, then

$\Xi = \mathrm{H}$,\
$\Xi$ not $> \mathrm{H}$,\
$\Xi$ not $< \mathrm{H}$.

5) If $\Xi = 0$, $\mathrm{H}$ negative, then

$\Xi \neq \mathrm{H}$,\
$\Xi > \mathrm{H}$,\
$\Xi$ not $< \mathrm{H}$.

6) If $\Xi$ is negative, $\mathrm{H}$ positive or $\mathrm{H} = 0$, then

$\Xi \neq \mathrm{H}$,\
$\Xi$ not $> \mathrm{H}$,\
$\Xi < \mathrm{H}$.

7) If $\Xi$ is negative, $\mathrm{H}$ negative, then

$\Xi \neq \mathrm{H}$, $\Xi > \mathrm{H}$, $\Xi$ not $< \mathrm{H}$ for $|\Xi| < |\mathrm{H}|$,\
$\Xi = \mathrm{H}$, $\Xi$ not $> \mathrm{H}$, $\Xi$ not $< \mathrm{H}$ for $|\Xi| = |\mathrm{H}|$,\
$\Xi \neq \mathrm{H}$, $\Xi$ not $> \mathrm{H}$, $\Xi < \mathrm{H}$ for $|\Xi| > |\mathrm{H}|$.

**Definition 47:**

$$
\Xi \geqq \mathrm{H}
$$

means

$\Xi > \mathrm{H}$ or $\Xi = \mathrm{H}$.

($\geqq$ read: greater than or equal to.)

**Definition 48:**

$$
\Xi \leqq \mathrm{H}
$$

means

$\Xi < \mathrm{H}$ or $\Xi = \mathrm{H}$.

($\leqq$ read: less than or equal to.)

**Theorem 168:** From

$$
\Xi > \mathrm{H}
$$

follows

$$
\mathrm{H} < \Xi
$$

and conversely.

**Proof:** Definition 46.

is certainly\
2) Let\
Then\
hence\
3) Let\
Then\
$\Xi \leqq 0$,\
$\Xi < \mathrm{Z}$.\
$\mathrm{Z} = 0$.\
$\mathrm{H} < 0$,\
$\Xi < 0$,\
$\Xi < \mathrm{Z}$.\
$\mathrm{Z} < 0$.\
$\mathrm{H} < 0$,\
$\Xi < 0$.

**Theorem 169:** The positive numbers are the numbers $> 0$; the negative numbers are the numbers $< 0$.

**Proof:** 1) By Definition 45,

$$
\xi > 0.
$$

2) From

$$
\Xi > 0
$$

follows by Definition 45

$$
\Xi = \xi.
$$

3) By Definition 46,

$$
-\xi < 0.
$$

4) From

$$
\Xi < 0
$$

follows by Definition 46

$$
\Xi = -\xi.
$$

**Theorem 170:** $|\Xi| \geqq 0$.

**Proof:** Definition 44, Theorem 166, and Theorem 169.

**Theorem 171** (Transitivity of Ordering): From

$$
\Xi < \mathrm{H}, \quad \mathrm{H} < \mathrm{Z}
$$

follows

$$
\Xi < \mathrm{Z}.
$$

**Proof:** 1) Let

$$
\mathrm{Z} > 0.
$$

If

$$
\Xi > 0,
$$

then

$$
\mathrm{H} > 0,
$$

and we have the old Theorem 126.

If

Furthermore,

$$
|\Xi| > |\mathrm{H}|, \quad |\mathrm{H}| > |\mathrm{Z}|,
$$

hence

$$
|\Xi| > |\mathrm{Z}|,
$$

$$
\Xi < \mathrm{Z}.
$$

**Theorem 172:** From

$$
\Xi \leqq \mathrm{H}, \ \mathrm{H} < \mathrm{Z} \quad \text{or} \quad \Xi < \mathrm{H}, \ \mathrm{H} \leqq \mathrm{Z}
$$

follows

$$
\Xi < \mathrm{Z}.
$$

**Proof:** Clear with the equality sign in the hypothesis; otherwise settled by Theorem 171.

**Theorem 173:** From

$$
\Xi \leqq \mathrm{H}, \quad \mathrm{H} \leqq \mathrm{Z}
$$

follows

$$
\Xi \leqq \mathrm{Z}.
$$

**Proof:** Clear with two equality signs in the hypothesis; otherwise settled by Theorem 172.

**Definition 49:** If

$$
\Xi \leqq 0,
$$

then $\Xi$ is called rational if

$$
\Xi = 0
$$

or

$\Xi < 0$, $|\Xi|$ rational.

We thus now have positive rational numbers, the rational number 0, and negative rational numbers.

**Definition 50:** If

$$
\Xi \leqq 0,
$$

then $\Xi$ is called irrational if it is not rational.

We thus now have positive irrational numbers and negative irrational numbers. (Numbers? Yes; we had an irrational $\xi$; hence the positive number $\xi + X$ is always irrational, since from

$$
\xi + X = Y
$$

would follow

$$
\xi = Y - X;
$$

and $-(\xi + X)$ is always negative irrational.)

**Definition 51:** If

$$
\Xi \leqq 0,
$$

then $\Xi$ is called integral if

$$
\Xi = 0
$$

or

$\Xi < 0$, $|\Xi|$ integral.

We thus now have positive integers, the integer 0, and negative integers.

**Theorem 174:** Every integer is rational.

**Proof:** For the positive numbers we know this; for 0 and negative numbers it follows from Definition 49 and Definition 51.

## § 3. Addition

**Definition 52:**

$$
\Xi + \mathrm{H} =
\begin{cases}
-(|\Xi| + |\mathrm{H}|), & \text{if } \Xi < 0,\ \mathrm{H} < 0; \\
\left.\begin{matrix} |\Xi| - |\mathrm{H}| \\ 0 \\ -(|\mathrm{H}| - |\Xi|) \end{matrix}\right\}\!, & \text{if } \Xi > 0,\ \mathrm{H} < 0, \ \begin{cases} |\Xi| > |\mathrm{H}|; \\ |\Xi| = |\mathrm{H}|; \\ |\Xi| < |\mathrm{H}|; \end{cases} \\
\mathrm{H} + \Xi, & \text{if } \Xi < 0,\ \mathrm{H} > 0; \\
\mathrm{H}, & \text{if } \Xi = 0; \\
\Xi, & \text{if } \mathrm{H} = 0.
\end{cases}
$$

($+$ read: plus.) $\Xi + \mathrm{H}$ is called the sum of $\Xi$ and $\mathrm{H}$, or the number obtained by addition of $\mathrm{H}$ to $\Xi$.

Concerning this definition, one should note:

1) For

$$
\Xi > 0, \quad \mathrm{H} > 0
$$

we already have the concept $\Xi + \mathrm{H}$ from Definition 34.

2) It was also used in Definition 52.

3) The third case of the definition uses the concept of the sum in the second case.

4) The fourth and fifth cases overlap if

$$
\Xi = \mathrm{H} = 0;
$$

but then the number defined as $\Xi + \mathrm{H}$ is the same (namely 0).

**Theorem 175** (commutative law of addition):

$$
\Xi + \mathrm{H} = \mathrm{H} + \Xi.
$$

**Proof:** For

$$
\Xi = 0
$$

both numbers are $\mathrm{H}$; for

$$
\mathrm{H} = 0
$$

both are $\Xi$.

For

$$
\Xi > 0, \quad \mathrm{H} > 0
$$

we have the old Theorem 130.

For

$$
\Xi < 0, \quad \mathrm{H} < 0
$$

we have by Theorem 130

$$
\Xi + \mathrm{H} = -(|\Xi| + |\mathrm{H}|) = -(|\mathrm{H}| + |\Xi|) = \mathrm{H} + \Xi.
$$

For

$$
\Xi < 0, \quad \mathrm{H} > 0
$$

the assertion was the very definition.

For

$$
\Xi > 0, \quad \mathrm{H} < 0
$$

we have by the preceding case

$$
\mathrm{H} + \Xi = \Xi + \mathrm{H},
$$

hence

$$
\Xi + \mathrm{H} = \mathrm{H} + \Xi.
$$

**Definition 53:**

$$
-\Xi =
\begin{cases}
0 & \text{for } \Xi = 0, \\
|\Xi| & \text{for } \Xi < 0.
\end{cases}
$$

($-$ read: minus.)

Note that for $\Xi > 0$ we already have the concept $-\Xi$ from Definition 43.

**Theorem 176:** If

$$
\Xi > 0 \ \text{resp.} \ \Xi = 0 \ \text{resp.} \ \Xi < 0,
$$

then

$$
-\Xi < 0 \ \text{resp.} \ -\Xi = 0 \ \text{resp.} \ -\Xi > 0
$$

and conversely.

**Proof:** Definition 43 and Definition 53.

**Theorem 177:** $-(-\Xi) = \Xi$.

**Proof:** Definitions 43, 44 and 53.

**Theorem 178:** $|-\Xi| = |\Xi|$.

**Proof:** Definitions 43, 44 and 53.

**Theorem 179:** $\Xi + (-\Xi) = 0$.

**Proof:** Definition 52, Definition 53 and Theorem 178.

**Theorem 180:** $-(\Xi + \mathrm{H}) = -\Xi + (-\mathrm{H})$.

**Proof:** By Theorem 175 we have

$$
-(\Xi + \mathrm{H}) = -(\mathrm{H} + \Xi)
$$

and

$$
-\Xi + (-\mathrm{H}) = -\mathrm{H} + (-\Xi);
$$

hence without loss of generality

$$
\Xi \geqq \mathrm{H}
$$

may be assumed; for at least one of the relations

$$
\Xi \geqq \mathrm{H}, \quad \mathrm{H} \geqq \Xi
$$

holds, and from

$$
-(\mathrm{H} + \Xi) = -\mathrm{H} + (-\Xi)
$$

there follows precisely

$$
-(\Xi + \mathrm{H}) = -\Xi + (-\mathrm{H}).
$$

So let

$$
\Xi \geqq \mathrm{H}.
$$

1) If

$$
\Xi > 0, \quad \mathrm{H} > 0,
$$

then

$$
-\Xi + (-\mathrm{H}) = -(\Xi + \mathrm{H}).
$$

2) If

$$
\Xi > 0, \quad \mathrm{H} = 0,
$$

then

$$
-\Xi + (-\mathrm{H}) = -\Xi + 0 = -\Xi = -(\Xi + 0) = -(\Xi + \mathrm{H}).
$$

3) If

$$
\Xi > 0, \quad \mathrm{H} < 0,
$$

then

either

$$
\Xi > |\mathrm{H}|,
$$

hence

$$
\Xi + \mathrm{H} = \Xi - |\mathrm{H}|,
$$

$$
-\Xi + (-\mathrm{H}) = -\Xi + |\mathrm{H}| = -(\Xi - |\mathrm{H}|) = -(\Xi + \mathrm{H});
$$

or

$$
\Xi = |\mathrm{H}|,
$$

hence

$$
\Xi + \mathrm{H} = 0,
$$

$$
-\Xi + (-\mathrm{H}) = -\Xi + |\mathrm{H}| = 0 = -(\Xi + \mathrm{H});
$$

or

$$
\Xi < |\mathrm{H}|,
$$

hence

$$
\Xi + \mathrm{H} = -(|\mathrm{H}| - \Xi),
$$

$$
-\Xi + (-\mathrm{H}) = -\Xi + |\mathrm{H}| = |\mathrm{H}| - \Xi = -(\Xi + \mathrm{H}).
$$

4) If

$$
\Xi = 0,
$$

then

$$
-\Xi + (-\mathrm{H}) = 0 + (-\mathrm{H}) = -\mathrm{H} = -(0 + \mathrm{H}) = -(\Xi + \mathrm{H}).
$$

5) If

$$
\Xi < 0,
$$

then

$$
\mathrm{H} < 0,
$$

$$
\Xi + \mathrm{H} = -(|\Xi| + |\mathrm{H}|),
$$

$$
-\Xi + (-\mathrm{H}) = |\Xi| + |\mathrm{H}| = -(\Xi + \mathrm{H}).
$$

**Definition 54:** $\Xi - \mathrm{H} = \Xi + (-\mathrm{H})$.

($-$ read: minus.) $\Xi - \mathrm{H}$ is called the difference $\Xi$ minus $\mathrm{H}$, or the number obtained by subtraction of $\mathrm{H}$ from $\Xi$.

Note that Definition 54 (as it must be) agrees, for

$$
\Xi > \mathrm{H} > 0
$$

with the old Definition 35; for then

$$
\Xi > 0, \quad -\mathrm{H} < 0, \quad |\Xi| > |-\mathrm{H}|, \quad \Xi + (-\mathrm{H}) = |\Xi| - |-\mathrm{H}| = \Xi - \mathrm{H}.
$$

**Theorem 181:** $-(\Xi - \mathrm{H}) = \mathrm{H} - \Xi$.

**Proof:** By Theorem 180 and Theorem 177 we have

$$
-(\Xi - \mathrm{H}) = -(\Xi + (-\mathrm{H})) = -\Xi + (-(-\mathrm{H})) = -\Xi + \mathrm{H} = \mathrm{H} + (-\Xi) = \mathrm{H} - \Xi.
$$

**Theorem 182:** From

$$
\Xi - \mathrm{H} > 0 \ \text{resp.} \ \Xi - \mathrm{H} = 0 \ \text{resp.} \ \Xi - \mathrm{H} < 0
$$

follows

$$
\Xi > \mathrm{H} \ \text{resp.} \ \Xi = \mathrm{H} \ \text{resp.} \ \Xi < \mathrm{H}
$$

and conversely.

**Proof:** Since $-\mathrm{H}$ is also an arbitrary real number, we may write $-\mathrm{H}$ in place of $\mathrm{H}$, and accordingly the correspondence of the cases in

$$
\Xi + \mathrm{H} > 0 \ \text{resp.} \ \Xi + \mathrm{H} = 0 \ \text{resp.} \ \Xi + \mathrm{H} < 0
$$

and

$$
\Xi > -\mathrm{H} \ \text{resp.} \ \Xi = -\mathrm{H} \ \text{resp.} \ \Xi < -\mathrm{H}
$$

is to be shown.

Indeed, for $\Xi = 0$ or $\mathrm{H} = 0$ the assertion is clear; for the rest, in the case

$$
\Xi > 0, \quad \mathrm{H} > 0
$$

and in the first three cases of Definition 52, if the third is decomposed into the three subcases

$$
|\mathrm{H}| > |\Xi|, \quad |\mathrm{H}| = |\Xi|, \quad |\mathrm{H}| < |\Xi|
$$

there hold both times, respectively, the signs

$$
> \ < \ > \ = \ < \ > \ = \ <.
$$

**Theorem 183:** From

$$
\Xi > \mathrm{H} \ \text{resp.} \ \Xi = \mathrm{H} \ \text{resp.} \ \Xi < \mathrm{H}
$$

follows

$$
-\Xi < -\mathrm{H} \ \text{resp.} \ -\Xi = -\mathrm{H} \ \text{resp.} \ -\Xi > -\mathrm{H}
$$

and conversely.

**Proof:** By Theorem 182 the former corresponds to the cases

$$
\Xi - \mathrm{H} > 0 \ \text{resp.} \ \Xi - \mathrm{H} = 0 \ \text{resp.} \ \Xi - \mathrm{H} < 0,
$$

the latter to the cases

$$
-\mathrm{H} - (-\Xi) > 0 \ \text{resp.} \ -\mathrm{H} - (-\Xi) = 0 \ \text{resp.} \ -\mathrm{H} - (-\Xi) < 0;
$$

hence

$$
-\mathrm{H} - (-\Xi) = -\mathrm{H} + (-(-\Xi)) = -\mathrm{H} + \Xi = \Xi + (-\mathrm{H}) = \Xi - \mathrm{H}
$$

yields everything.

**Theorem 184:** Every real number can be represented as the difference of two positive numbers.

**Proof:** 1) If

$$
\Xi > 0,
$$

then

$$
\Xi = (\Xi + 1) - 1.
$$

2) If

$$
\Xi = 0,
$$

then

$$
\Xi = 1 - 1.
$$

3) If

$$
\Xi < 0,
$$

then

$$
-\Xi = |\Xi| = (|\Xi| + 1) - 1,
$$

$$
\Xi = -((|\Xi| + 1) - 1) = 1 - (|\Xi| + 1).
$$

**Theorem 185:** From

$$
\Xi = \xi_1 - \xi_2, \quad \mathrm{H} = \eta_1 - \eta_2
$$

follows

$$
\Xi + \mathrm{H} = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
$$

**Proof:** 1) Let

$$
\Xi > 0, \quad \mathrm{H} > 0.
$$

Then, since

$$
\begin{aligned}
(\alpha + \beta) + (\gamma + \delta) &= (\alpha + \beta) + (\delta + \gamma) = ((\alpha + \beta) + \delta) + \gamma \\
&= \gamma + (\alpha + (\beta + \delta)) = (\gamma + \alpha) + (\beta + \delta)
\end{aligned}
$$

we have

$$
(\Xi + \mathrm{H}) + (\xi_2 + \eta_2) = \xi_1 + \eta_1,
$$

so the assertion is true.

2) Let

$$
\Xi < 0, \quad \mathrm{H} < 0.
$$

Then by Theorem 181

$$
\xi_2 - \xi_1 = -\Xi > 0, \quad \eta_2 - \eta_1 = -\mathrm{H} > 0,
$$

hence by 1)

$$
-\Xi + (-\mathrm{H}) = (\xi_2 + \eta_2) - (\xi_1 + \eta_1),
$$

$$
\Xi + \mathrm{H} = -(-\Xi + (-\mathrm{H})) = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
$$

3) Let

$$
\Xi > 0, \quad \mathrm{H} < 0,
$$

hence

$$
\xi_1 - \xi_2 > 0, \quad \eta_2 - \eta_1 > 0.
$$

A) If

$$
\Xi > |\mathrm{H}|,
$$

then

$$
\xi_1 - \xi_2 > \eta_2 - \eta_1,
$$

hence

$$
\begin{aligned}
\xi_1 + \eta_1 &= ((\xi_1 - \xi_2) + \xi_2) + \eta_1 = (\xi_1 - \xi_2) + (\xi_2 + \eta_1) = (\xi_2 + \eta_1) + (\xi_1 - \xi_2) \\
&= (\xi_2 + \eta_1) + ((\eta_2 - \eta_1) + ((\xi_1 - \xi_2) - (\eta_2 - \eta_1))) \\
&= ((\xi_2 + \eta_1) + (\eta_2 - \eta_1)) + ((\xi_1 - \xi_2) - (\eta_2 - \eta_1)) \\
&= (\xi_2 + (\eta_1 + (\eta_2 - \eta_1))) + ((\xi_1 - \xi_2) - (\eta_2 - \eta_1)) \\
&= (\xi_2 + \eta_2) + ((\xi_1 - \xi_2) - (\eta_2 - \eta_1)),
\end{aligned}
$$

$$
(\xi_1 + \eta_1) - (\xi_2 + \eta_2) = (\xi_1 - \xi_2) - (\eta_2 - \eta_1) = \Xi - |\mathrm{H}| = \Xi + \mathrm{H}.
$$

B) If

$$
\Xi < |\mathrm{H}|,
$$

then by A)

$$
\begin{aligned}
\Xi + \mathrm{H} &= -(-\mathrm{H} + (-\Xi)) = -((\eta_2 - \eta_1) + (\xi_2 - \xi_1)) \\
&= -((\eta_2 + \xi_2) - (\eta_1 + \xi_1)) = (\eta_1 + \xi_1) - (\eta_2 + \xi_2) \\
&= (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
\end{aligned}
$$

C) If

$$
\Xi = |\mathrm{H}|,
$$

hence

$$
\xi_1 - \xi_2 = \eta_2 - \eta_1,
$$

then

$$
\xi_1 = \xi_2 + (\eta_2 - \eta_1),
$$

$$
\xi_1 + \eta_1 = \xi_2 + \eta_2,
$$

$$
\Xi + \mathrm{H} = 0 = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
$$

4) Let

$$
\Xi < 0, \quad \mathrm{H} > 0.
$$

Then by 3)

$$
\Xi + \mathrm{H} = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
$$

5) Let

$$
\Xi = 0.
$$

Then

$$
\xi_1 = \xi_2,
$$

$$
\Xi + \mathrm{H} = \mathrm{H}.
$$

a) For

$$
\eta_1 > \eta_2
$$

we have

$$
(\eta_1 - \eta_2) + (\xi_1 + \eta_2) = ((\eta_1 - \eta_2) + \eta_2) + \xi_1 = \eta_1 + \xi_1 = \xi_1 + \eta_1,
$$

b) For

$$
\eta_1 = \eta_2
$$

we have

$$
\mathrm{H} = 0 = (\xi_1 + \eta_1) - (\xi_1 + \eta_2).
$$

c) For

$$
\eta_1 < \eta_2
$$

we have by a)

$$
\mathrm{H} = -(-\mathrm{H}) = -((\xi_1 + \eta_2) - (\xi_1 + \eta_1)) = (\xi_1 + \eta_1) - (\xi_1 + \eta_2).
$$

6) Let

$$
\mathrm{H} = 0.
$$

Then by 5)

$$
\Xi + \mathrm{H} = \mathrm{H} + \Xi = (\eta_1 + \xi_1) - (\eta_2 + \xi_2) = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
$$

**Theorem 186** (associative law of addition):

$$
(\Xi + \mathrm{H}) + \mathrm{Z} = \Xi + (\mathrm{H} + \mathrm{Z}).
$$

**Proof:** By Theorem 184 we have

$$
\Xi = \xi_1 - \xi_2, \quad \mathrm{H} = \eta_1 - \eta_2, \quad \mathrm{Z} = \zeta_1 - \zeta_2.
$$

By Theorem 185 we have

$$
\begin{aligned}
(\Xi + \mathrm{H}) + \mathrm{Z} &= ((\xi_1 + \eta_1) - (\xi_2 + \eta_2)) + (\zeta_1 - \zeta_2) \\
&= ((\xi_1 + \eta_1) + \zeta_1) - ((\xi_2 + \eta_2) + \zeta_2) = (\xi_1 + (\eta_1 + \zeta_1)) - (\xi_2 + (\eta_2 + \zeta_2)) \\
&= (\xi_1 - \xi_2) + ((\eta_1 + \zeta_1) - (\eta_2 + \zeta_2)) = \Xi + (\mathrm{H} + \mathrm{Z}).
\end{aligned}
$$

**Theorem 187:** For given $\Xi$, $\mathrm{H}$,

$$
\mathrm{H} + \Upsilon = \Xi
$$

has exactly one solution $\Upsilon$, namely

$$
\Upsilon = \Xi - \mathrm{H}.
$$

**Proof:** 1)

$$
\Upsilon = \Xi - \mathrm{H}
$$

is a solution, since by Theorem 186

$$
\mathrm{H} + (\Xi - \mathrm{H}) = (\Xi - \mathrm{H}) + \mathrm{H} = (\Xi + (-\mathrm{H})) + \mathrm{H} = \Xi + (-\mathrm{H} + \mathrm{H}) = \Xi + 0 = \Xi.
$$

2) From

$$
\mathrm{H} + \Upsilon = \Xi
$$

follows

$$
\Xi - \mathrm{H} = \Xi + (-\mathrm{H}) = -\mathrm{H} + \Xi = -\mathrm{H} + (\mathrm{H} + \Upsilon) = (-\mathrm{H} + \mathrm{H}) + \Upsilon = 0 + \Upsilon = \Upsilon.
$$

**Theorem 188:** We have

$$
\Xi + \mathrm{Z} > \mathrm{H} + \mathrm{Z} \ \text{resp.} \ \Xi + \mathrm{Z} = \mathrm{H} + \mathrm{Z} \ \text{resp.} \ \Xi + \mathrm{Z} < \mathrm{H} + \mathrm{Z},
$$

according as

$$
\Xi > \mathrm{H} \ \text{resp.} \ \Xi = \mathrm{H} \ \text{resp.} \ \Xi < \mathrm{H}.
$$

**Proof:** By Theorem 182 the former holds according as

$$
(\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) > 0 \ \text{resp.} \ (\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) = 0 \ \text{resp.} \ (\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) < 0;
$$

the latter, according as

$$
\Xi - \mathrm{H} > 0 \ \text{resp.} \ \Xi - \mathrm{H} = 0 \ \text{resp.} \ \Xi - \mathrm{H} < 0.
$$

From

$$
(\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) = (\Xi + \mathrm{Z}) + (-\mathrm{Z} + (-\mathrm{H})) = (\Xi + (\mathrm{Z} + (-\mathrm{Z}))) + (-\mathrm{H}) = \Xi + (-\mathrm{H}) = \Xi - \mathrm{H}
$$

the assertions therefore follow.

**Theorem 189:** From

$$
\Xi > \mathrm{H}, \quad \mathrm{Z} > \Upsilon
$$

follows

$$
\Xi + \mathrm{Z} > \mathrm{H} + \Upsilon.
$$

**Proof:** By Theorem 188 we have

$$
\Xi + \mathrm{Z} > \mathrm{H} + \mathrm{Z}
$$

and

$$
\mathrm{H} + \mathrm{Z} = \mathrm{Z} + \mathrm{H} > \Upsilon + \mathrm{H} = \mathrm{H} + \Upsilon,
$$

hence

$$
\Xi + \mathrm{Z} > \mathrm{H} + \Upsilon.
$$

**Theorem 190:** From

$$
\Xi \geqq \mathrm{H}, \ \mathrm{Z} > \Upsilon \quad \text{or} \quad \Xi > \mathrm{H}, \ \mathrm{Z} \geqq \Upsilon
$$

follows

$$
\Xi + \mathrm{Z} > \mathrm{H} + \Upsilon.
$$

**Proof:** With the equality sign in the hypothesis, settled by Theorem 188; otherwise by Theorem 189.

**Theorem 191:** From

$$
\Xi \geqq \mathrm{H}, \quad \mathrm{Z} \geqq \Upsilon
$$

follows

$$
\Xi + \mathrm{Z} \geqq \mathrm{H} + \Upsilon.
$$

**Proof:** With two equality signs in the hypothesis, obvious; otherwise settled by Theorem 190.

## § 4. Multiplication

**Definition 55:**

$$
\Xi \cdot \mathrm{H} =
\begin{cases}
-(|\Xi| \, |\mathrm{H}|), & \text{if } \Xi > 0,\ \mathrm{H} < 0 \ \text{or} \ \Xi < 0,\ \mathrm{H} > 0; \\
|\Xi| \, |\mathrm{H}|, & \text{if } \Xi < 0,\ \mathrm{H} < 0; \\
0, & \text{if } \Xi = 0 \ \text{or} \ \mathrm{H} = 0.
\end{cases}
$$

($\cdot$ read: times; but the dot is usually not written.) $\Xi \cdot \mathrm{H}$ is called the product of $\Xi$ and $\mathrm{H}$, or the number obtained by multiplication of $\Xi$ by $\mathrm{H}$.

Observe that $\Xi \cdot \mathrm{H}$ for $\Xi > 0$, $\mathrm{H} > 0$ is already known to us from Definition 36, which indeed was used in Definition 55.

**Theorem 192:** We have

$$
\Xi \mathrm{H} = 0
$$

if and only if at least one of the two numbers $\Xi$, $\mathrm{H}$ is zero.

**Proof:** Definition 55.

**Theorem 193:** $|\Xi \mathrm{H}| = |\Xi| \, |\mathrm{H}|$.

**Proof:** Definition 55.

**Theorem 194** (commutative law of multiplication):

$$
\Xi \mathrm{H} = \mathrm{H} \Xi.
$$

**Proof:** For $\Xi > 0$, $\mathrm{H} > 0$ this is Theorem 142, and otherwise it follows from Definition 55, since the right-hand side of that definition (by Theorem 142) and the distinction of cases are symmetric in $\Xi$, $\mathrm{H}$.

**Theorem 195:** $\Xi \cdot 1 = \Xi$.

**Proof:** For $\Xi > 0$ this follows from Theorem 151; for $\Xi = 0$ from Definition 55; for $\Xi < 0$ we have by Definition 55

$$
\Xi \cdot 1 = -(|\Xi| \cdot 1) = -|\Xi| = \Xi.
$$

**Theorem 196:** If

$$
\Xi \neq 0, \quad \mathrm{H} \neq 0,
$$

then

$$
\Xi \mathrm{H} = |\Xi| \, |\mathrm{H}| \quad \text{resp.} \quad \Xi \mathrm{H} = -(|\Xi| \, |\mathrm{H}|),
$$

according as none or two, resp. exactly one, of the numbers $\Xi$, $\mathrm{H}$ are negative.

**Proof:** Definition 55.

**Theorem 197:** $(-\Xi) \mathrm{H} = \Xi (-\mathrm{H}) = -(\Xi \mathrm{H})$.

**Proof:** 1) If one of the numbers $\Xi$, $\mathrm{H}$ is zero, then all three expressions are 0.

2) If

$$
\Xi \neq 0, \quad \mathrm{H} \neq 0,
$$

then by Theorem 193 all three expressions have the same absolute value $|\Xi| \, |\mathrm{H}|$, and by Theorem 196 all three are $> 0$ resp. $< 0$, according as exactly one, resp. none or two, of the numbers $\Xi$, $\mathrm{H}$ are negative.

**Theorem 198:** $(-\Xi)(-\mathrm{H}) = \Xi \mathrm{H}$.

**Proof:** By Theorem 197 we have

$$
(-\Xi)(-\mathrm{H}) = \Xi(-(-\mathrm{H})) = \Xi \mathrm{H}.
$$

**Theorem 199** (associative law of multiplication):

$$
(\Xi \mathrm{H}) \mathrm{Z} = \Xi (\mathrm{H} \mathrm{Z}).
$$

**Proof:** 1) If one of the numbers $\Xi$, $\mathrm{H}$, $\mathrm{Z}$ is zero, then both sides of the assertion are 0.

2) If

$$
\Xi \neq 0, \quad \mathrm{H} \neq 0, \quad \mathrm{Z} \neq 0,
$$

then by Theorem 193 both sides have the same absolute value

$$
(|\Xi| \, |\mathrm{H}|) \, |\mathrm{Z}| = |\Xi| \, (|\mathrm{H}| \, |\mathrm{Z}|),
$$

and by Theorem 196 both sides are $> 0$ resp. $< 0$, according as none or exactly two, resp. exactly one or three, of the numbers $\Xi$, $\mathrm{H}$, $\mathrm{Z}$ are negative.

**Theorem 200:** $\xi(\eta - \zeta) = \xi\eta - \xi\zeta$.

**Proof:** 1) For

$$
\eta > \zeta
$$

we have

$$
(\eta - \zeta) + \zeta = \eta,
$$

hence by Theorem 144

$$
\xi(\eta - \zeta) + \xi\zeta = \xi\eta,
$$

$$
\xi(\eta - \zeta) = \xi\eta - \xi\zeta.
$$

2) For

$$
\eta = \zeta
$$

we have

$$
\eta - \zeta = 0,
$$

$$
\xi(\eta - \zeta) = \xi \cdot 0 = 0 = \xi\eta - \xi\zeta.
$$

3) For

$$
\eta < \zeta
$$

we have by 1)

$$
\xi(\zeta - \eta) = \xi\zeta - \xi\eta,
$$

$$
\xi(\eta - \zeta) = \xi(-(\zeta - \eta)) = -(\xi(\zeta - \eta)) = -(\xi\zeta - \xi\eta) = \xi\eta - \xi\zeta.
$$

**Theorem 201** (distributive law):

$$
\Xi(\mathrm{H} + \mathrm{Z}) = \Xi\mathrm{H} + \Xi\mathrm{Z}.
$$

**Proof:** 1) Let

$$
\Xi > 0.
$$

By Theorem 184 we have

$$
\mathrm{H} = \eta_1 - \eta_2, \quad \mathrm{Z} = \zeta_1 - \zeta_2,
$$

hence by Theorem 185

$$
\mathrm{H} + \mathrm{Z} = (\eta_1 + \zeta_1) - (\eta_2 + \zeta_2),
$$

hence by Theorem 200 and Theorem 144

$$
\Xi(\mathrm{H} + \mathrm{Z}) = \Xi(\eta_1 + \zeta_1) - \Xi(\eta_2 + \zeta_2) = (\Xi\eta_1 + \Xi\zeta_1) - (\Xi\eta_2 + \Xi\zeta_2),
$$

hence by Theorem 185 and Theorem 200

$$
\Xi(\mathrm{H} + \mathrm{Z}) = (\Xi\eta_1 - \Xi\eta_2) + (\Xi\zeta_1 - \Xi\zeta_2) = \Xi(\eta_1 - \eta_2) + \Xi(\zeta_1 - \zeta_2) = \Xi\mathrm{H} + \Xi\mathrm{Z}.
$$

2) Let

$$
\Xi = 0.
$$

Then

$$
\Xi(\mathrm{H} + \mathrm{Z}) = 0 = \Xi\mathrm{H} + \Xi\mathrm{Z}.
$$

3) Let

$$
\Xi < 0.
$$

Then by 1)

$$
(-\Xi)(\mathrm{H} + \mathrm{Z}) = (-\Xi)\mathrm{H} + (-\Xi)\mathrm{Z},
$$

hence

$$
-(\Xi(\mathrm{H} + \mathrm{Z})) = (-\Xi)\mathrm{H} + (-\Xi)\mathrm{Z},
$$

$$
\Xi(\mathrm{H} + \mathrm{Z}) = -((-\Xi)\mathrm{H} + (-\Xi)\mathrm{Z}) = -((-\Xi)\mathrm{H}) + (-((-\Xi)\mathrm{Z})) = \Xi\mathrm{H} + \Xi\mathrm{Z}.
$$

**Theorem 202:** $\Xi(\mathrm{H} - \mathrm{Z}) = \Xi\mathrm{H} - \Xi\mathrm{Z}$.

**Proof:** By Theorem 201 we have

$$
\Xi(\mathrm{H} - \mathrm{Z}) = \Xi(\mathrm{H} + (-\mathrm{Z})) = \Xi\mathrm{H} + \Xi(-\mathrm{Z}) = \Xi\mathrm{H} + (-(\Xi\mathrm{Z})) = \Xi\mathrm{H} - \Xi\mathrm{Z}.
$$

**Theorem 203:** Let

$$
\Xi > \mathrm{H}.
$$

a solution because\
$\mathrm{H}\Upsilon = $ ,\
2) Let\
$\mathrm{H} < 0$.

From

$$
\mathrm{Z} > 0 \ \text{resp.} \ \mathrm{Z} = 0 \ \text{resp.} \ \mathrm{Z} < 0
$$

it then follows that

$$
\Xi\mathrm{Z} > \mathrm{H}\mathrm{Z} \ \text{resp.} \ \Xi\mathrm{Z} = \mathrm{H}\mathrm{Z} \ \text{resp.} \ \Xi\mathrm{Z} < \mathrm{H}\mathrm{Z}.
$$

**Proof:**

$$
\Xi - \mathrm{H} > 0,
$$

hence

$$
(\Xi - \mathrm{H})\mathrm{Z} > 0 \ \text{resp.} \ (\Xi - \mathrm{H})\mathrm{Z} = 0 \ \text{resp.} \ (\Xi - \mathrm{H})\mathrm{Z} < 0,
$$

according as

$$
\mathrm{Z} > 0 \ \text{resp.} \ \mathrm{Z} = 0 \ \text{resp.} \ \mathrm{Z} < 0.
$$

Since by Theorem 202

$$
(\Xi - \mathrm{H})\mathrm{Z} = \mathrm{Z}(\Xi - \mathrm{H}) = \mathrm{Z}\Xi - \mathrm{Z}\mathrm{H} = \Xi\mathrm{Z} - \mathrm{H}\mathrm{Z}
$$

we have in these cases, by Theorem 182,

$$
\Xi\mathrm{Z} > \mathrm{H}\mathrm{Z} \ \text{resp.} \ \Xi\mathrm{Z} = \mathrm{H}\mathrm{Z} \ \text{resp.} \ \Xi\mathrm{Z} < \mathrm{H}\mathrm{Z}.
$$

**Theorem 204:** The equation

$$
\mathrm{H}\Upsilon = \Xi,
$$

where $\Xi$, $\mathrm{H}$ are given and

$$
\mathrm{H} \neq 0
$$

holds, has exactly one solution $\Upsilon$.

**Proof:** I) There is at most one solution; for from

$$
\mathrm{H}\Upsilon_1 = \Xi = \mathrm{H}\Upsilon_2
$$

it follows that

$$
0 = \mathrm{H}\Upsilon_1 - \mathrm{H}\Upsilon_2 = \mathrm{H}(\Upsilon_1 - \Upsilon_2),
$$

hence by Theorem 192

$$
0 = \Upsilon_1 - \Upsilon_2,
$$

$$
\Upsilon_1 = \Upsilon_2.
$$

II) 1) Let

$$
\mathrm{H} > 0.
$$

Then

Then

is a solution. For by 1) we have

$$
\Xi = |\mathrm{H}|(-\Upsilon) = (-|\mathrm{H}|)\Upsilon = \mathrm{H}\Upsilon.
$$

**Definition 56:** The $\Upsilon$ of Theorem 204 is denoted by $\frac{\Xi}{\mathrm{H}}$ (read: $\Xi$ over $\mathrm{H}$). $\frac{\Xi}{\mathrm{H}}$ is also called the quotient of $\Xi$ by $\mathrm{H}$, or the number obtained by division of $\Xi$ by $\mathrm{H}$.

Observe that (as must be the case) this agrees, for $\Xi > 0$, $\mathrm{H} > 0$, with the old Definition 38.

## § 5. Dedekind's Fundamental Theorem

**Theorem 205:** Let there be given any division of all real numbers into two classes with the following properties.

1) There is a number of the first class and a number of the second class.

2) Every number of the first class is smaller than every number of the second class.

Then there exists exactly one real number $\Xi$ such that every $\mathrm{H} < \Xi$ belongs to the first class, and every $\mathrm{H} > \Xi$ to the second class.

In other words: Every number of the first class is $\leqq \Xi$, every number of the second class $\geqq \Xi$.

**Preliminary Remark:** Conversely, it is clear that every real number $\Xi$ generates exactly two such divisions: the one with $\mathrm{H} \leqq \Xi$ as first class, $\mathrm{H} > \Xi$ as second class; the other with $\mathrm{H} < \Xi$ as first class, $\mathrm{H} \geqq \Xi$ as second class.

**Proof:** A) There cannot be more than one such $\Xi$; for if

$$
\Xi_1 < \Xi_2
$$

and if $\Xi_1$ and $\Xi_2$ both did what is required, then $\frac{\Xi_1 + \Xi_2}{1+1}$ would, because of

$$
(1+1)\Xi_1 = \Xi_1 + \Xi_1 < \Xi_1 + \Xi_2 < \Xi_2 + \Xi_2 = (1+1)\Xi_2,
$$

$$
\Xi_1 < \frac{\Xi_1 + \Xi_2}{1+1} < \Xi_2
$$

belong both to the second and to the first class.

B) To prove the existence of a $\Xi$ we distinguish four cases:

I) Suppose there is a positive number in the first class.

We consider the cut which is generated as follows: Every positive rational number goes into the lower class if it lies in the first class without being the possible greatest rational number of the first class; otherwise (i.e. if it is the possible greatest rational number of the first class, or lies in the second class) it goes into the upper class. This is really a cut. For:

1) Since the first class contains a positive number, it contains every smaller positive rational number (such a number exists by Theorem 158), hence one to which there is a greater one in the first class. Therefore the lower class is not empty.

Since the second class contains a number, it contains every greater positive rational number (such a number exists by Theorem 158). Therefore the upper class is not empty.

2) Every number of the lower class is smaller than every number of the upper class; for every number of the first class is smaller than every number of the second class, and the possible greatest positive rational number of the first class is certainly greater than every number of the lower class.

3) The lower class contains no greatest positive rational number. For either the first class contains no such number to begin with. Or it does contain one; then that number was put into the upper class, and among the positive rational numbers which are smaller than a given one there is, already by Theorem 91, no greatest.

We call the positive number defined by our cut $\Xi$, and assert that it fulfills the stated requirements.

a) Let $\mathrm{H}$ with

$$
\mathrm{H} < \Xi
$$

be given. By Theorem 159 (with $\xi = \mathrm{H}$, $\eta = \Xi$ if $\mathrm{H} > 0$; with $\xi = \frac{\Xi}{1 + 1}$, $\eta = \Xi$ if $\mathrm{H} \leqq 0$) we choose a $\mathrm{Z}$ with

$$
\mathrm{H} < \mathrm{Z} < \Xi.
$$

Then $\mathrm{Z}$ is a lower number for $\Xi$, hence belongs to the first class; therefore $\mathrm{H}$ belongs to the first class.

b) Let $\mathrm{H}$ with

$$
\mathrm{H} > \Xi
$$

be given. By Theorem 159 we choose a $\mathrm{Z}$ with

$$
\Xi < \mathrm{Z} < \mathrm{H}.
$$

Then $\mathrm{Z}$ is an upper number for $\Xi$ and (by Theorem 159) not the smallest, hence belongs to the second class; therefore $\mathrm{H}$ belongs to the second class.

II) Suppose every positive number lies in the second class, and 0 lies in the first class.

Then every negative number lies in the first class, and

$$
\Xi = 0
$$

does what is required.

III) Suppose 0 lies in the second class, and every negative number lies in the first class.

Then every positive number lies in the second class, and

$$
\Xi = 0
$$

does what is required.

IV) Suppose there is a negative number in the second class.

Then we consider the following new division:

$\mathrm{H}$ in the new first class if $-\mathrm{H}$ lay in the old second class;

$\mathrm{H}$ in the new second class if $-\mathrm{H}$ lay in the old first class.

This division evidently satisfies the two conditions of Theorem 205. For

1) in each class there lies a number;

2) from

$$
\mathrm{H}_1 < \mathrm{H}_2
$$

it follows by Theorem 183 that

$$
-\mathrm{H}_2 < -\mathrm{H}_1.
$$

Moreover, the new division falls under case I), since there is a positive number in the new first class. Hence by I) there exists a number $\Xi_1$ such that every

$$
\mathrm{H} < \Xi_1
$$

lies in the new first class, and every

$$
\mathrm{H} > \Xi_1
$$

in the new second class. If we set

$$
-\Xi_1 = \Xi
$$

then from

$$
\mathrm{H} < \Xi \quad \text{resp.} \quad \mathrm{H} > \Xi,
$$

it follows that

$$
-\mathrm{H} > \Xi_1 \quad \text{resp.} \quad -\mathrm{H} < \Xi_1
$$

holds. Hence $-\mathrm{H}$ lies in the new second resp. new first class, and therefore $\mathrm{H}$ in the old first resp. old second class.
