# Chapter 5. Complex Numbers

## § 1. Definition

**Definition 57:** A complex number is a pair of real numbers $\Xi_1, \Xi_2$ (in a definite order). We denote the complex number by $[\Xi_1, \Xi_2]$. Here $[\Xi_1, \Xi_2]$ and $[\mathrm{H}_1, \mathrm{H}_2]$ are regarded as the same number (as equal; written: $=$) if and only if

$$
\Xi_1 = \mathrm{H}_1, \quad \Xi_2 = \mathrm{H}_2
$$

holds; otherwise as unequal (distinct; written: $\neq$).

Small German letters will throughout stand for complex numbers.

Thus for every $\mathfrak{x}$ and every $\mathfrak{y}$ exactly one of the cases

$$
\mathfrak{x} = \mathfrak{y}, \quad \mathfrak{x} \neq \mathfrak{y}
$$

occurs. For the complex numbers the concepts of identity and equality coincide, so that the three theorems are trivial:

**Theorem 206:** $\mathfrak{x} = \mathfrak{x}$.

**Theorem 207:** From

$$
\mathfrak{x} = \mathfrak{y}
$$

it follows that

$$
\mathfrak{y} = \mathfrak{x}.
$$

**Theorem 208:** From

$$
\mathfrak{x} = \mathfrak{y}, \quad \mathfrak{y} = \mathfrak{z}
$$

it follows that

$$
\mathfrak{x} = \mathfrak{z}.
$$

**Definition 58:** $\mathfrak{n} = [0, 0]$.

**Definition 59:** $\mathfrak{e} = [1, 0]$.

The letters $\mathfrak{n}$ and $\mathfrak{e}$ thus remain reserved for particular complex numbers.

## § 2. Addition

**Definition 60:** If

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
$$

then

$$
\mathfrak{x} + \mathfrak{y} = [\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2].
$$

($+$ read: plus.) $\mathfrak{x} + \mathfrak{y}$ is called the sum of $\mathfrak{x}$ and $\mathfrak{y}$, or the (complex) number obtained by addition of $\mathfrak{y}$ to $\mathfrak{x}$.

**Theorem 209** (commutative law of addition):

$$
\mathfrak{x} + \mathfrak{y} = \mathfrak{y} + \mathfrak{x}.
$$

**Proof:** $[\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2] = [\mathrm{H}_1 + \Xi_1, \mathrm{H}_2 + \Xi_2]$.

**Theorem 210:** $\mathfrak{x} + \mathfrak{n} = \mathfrak{x}$.

**Proof:** $[\Xi_1, \Xi_2] + [0, 0] = [\Xi_1 + 0, \Xi_2 + 0] = [\Xi_1, \Xi_2]$.

**Theorem 211** (associative law of addition):

$$
(\mathfrak{x} + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + (\mathfrak{y} + \mathfrak{z}).
$$

**Proof:** If

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2], \quad \mathfrak{z} = [\mathrm{Z}_1, \mathrm{Z}_2],
$$

then by Theorem 186

$$
\begin{aligned}
(\mathfrak{x} + \mathfrak{y}) + \mathfrak{z} &= [\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2] + [\mathrm{Z}_1, \mathrm{Z}_2] = [(\Xi_1 + \mathrm{H}_1) + \mathrm{Z}_1, (\Xi_2 + \mathrm{H}_2) + \mathrm{Z}_2] \\
&= [\Xi_1 + (\mathrm{H}_1 + \mathrm{Z}_1), \Xi_2 + (\mathrm{H}_2 + \mathrm{Z}_2)] = [\Xi_1, \Xi_2] + [\mathrm{H}_1 + \mathrm{Z}_1, \mathrm{H}_2 + \mathrm{Z}_2] = \mathfrak{x} + (\mathfrak{y} + \mathfrak{z}).
\end{aligned}
$$

**Theorem 212:** For given $\mathfrak{x}, \mathfrak{y}$,

$$
\mathfrak{y} + \mathfrak{u} = \mathfrak{x}
$$

has exactly one solution $\mathfrak{u}$, namely, setting

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
$$

$$
\mathfrak{u} = [\Xi_1 - \mathrm{H}_1, \Xi_2 - \mathrm{H}_2].
$$

**Proof:** For every

$$
\mathfrak{u} = [\Upsilon_1, \Upsilon_2]
$$

we have

$$
\mathfrak{y} + \mathfrak{u} = [\mathrm{H}_1 + \Upsilon_1, \mathrm{H}_2 + \Upsilon_2],
$$

and what is required is exactly that

$$
\mathrm{H}_1 + \Upsilon_1 = \Xi_1, \quad \mathrm{H}_2 + \Upsilon_2 = \Xi_2
$$

so that Theorem 187 proves everything.

**Definition 61:** The $\mathfrak{u}$ of Theorem 212 is called $\mathfrak{x} - \mathfrak{y}$ ($-$ read: minus). $\mathfrak{x} - \mathfrak{y}$ is also called the difference $\mathfrak{x}$ minus $\mathfrak{y}$, or the number obtained by subtraction of $\mathfrak{y}$ from $\mathfrak{x}$.

**Theorem 213:** We have

$$
\mathfrak{x} - \mathfrak{y} = \mathfrak{n}
$$

if and only if

$$
\mathfrak{x} = \mathfrak{y}.
$$

**Proof:** We have

$$
\Xi_1 - \mathrm{H}_1 = \Xi_2 - \mathrm{H}_2 = 0
$$

if and only if

$$
\Xi_1 = \mathrm{H}_1, \quad \Xi_2 = \mathrm{H}_2.
$$

**Definition 62:** $-\mathfrak{x} = \mathfrak{n} - \mathfrak{x}$.

($-$ on the left, read: minus.)

**Theorem 214:** For

$$
\mathfrak{x} = [\Xi_1, \Xi_2]
$$

we have

$$
-\mathfrak{x} = [-\Xi_1, -\Xi_2].
$$

**Proof:** $-[\Xi_1, \Xi_2] = [0, 0] - [\Xi_1, \Xi_2] = [0 - \Xi_1, 0 - \Xi_2]$.

**Theorem 215:** $-(-\mathfrak{x}) = \mathfrak{x}$.

**Proof:** By Theorem 177 we have

$$
-(-\Xi_1) = \Xi_1, \quad -(-\Xi_2) = \Xi_2.
$$

**Theorem 216:** $\mathfrak{x} + (-\mathfrak{x}) = \mathfrak{n}$.

**Proof:** By Theorem 179 we have

$$
\Xi_1 + (-\Xi_1) = 0, \quad \Xi_2 + (-\Xi_2) = 0.
$$

**Theorem 217:** $-(\mathfrak{x} + \mathfrak{y}) = -\mathfrak{x} + (-\mathfrak{y})$.

**Proof:** By Theorem 180 we have, setting

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
$$

$$
\begin{aligned}
-(\mathfrak{x} + \mathfrak{y}) &= [-(\Xi_1 + \mathrm{H}_1), -(\Xi_2 + \mathrm{H}_2)] = [-\Xi_1 + (-\mathrm{H}_1), -\Xi_2 + (-\mathrm{H}_2)] \\
&= [-\Xi_1, -\Xi_2] + [-\mathrm{H}_1, -\mathrm{H}_2] = -\mathfrak{x} + (-\mathfrak{y}).
\end{aligned}
$$

**Theorem 218:** $\mathfrak{x} - \mathfrak{y} = \mathfrak{x} + (-\mathfrak{y})$.

**Proof:** $[\Xi_1 - \mathrm{H}_1, \Xi_2 - \mathrm{H}_2] = [\Xi_1, \Xi_2] + [-\mathrm{H}_1, -\mathrm{H}_2]$.

**Theorem 219:** $-(\mathfrak{x} - \mathfrak{y}) = \mathfrak{y} - \mathfrak{x}$.

**Proof:**

$$
-(\mathfrak{x} - \mathfrak{y}) = -(\mathfrak{x} + (-\mathfrak{y})) = -\mathfrak{x} + (-(-\mathfrak{y})) = -\mathfrak{x} + \mathfrak{y} = \mathfrak{y} + (-\mathfrak{x}) = \mathfrak{y} - \mathfrak{x}.
$$

## § 3. Multiplication

**Definition 63:** If

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
$$

then

$$
\mathfrak{x} \cdot \mathfrak{y} = [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1].
$$

($\cdot$ read: times; but the dot is usually not written.) $\mathfrak{x} \cdot \mathfrak{y}$ is called the product of $\mathfrak{x}$ by $\mathfrak{y}$, or the number obtained by multiplication of $\mathfrak{x}$ by $\mathfrak{y}$.

**Theorem 220** (commutative law of multiplication):

$$
\mathfrak{x}\mathfrak{y} = \mathfrak{y}\mathfrak{x}.
$$

**Proof:**

$$
\begin{aligned}
[\Xi_1, \Xi_2][\mathrm{H}_1, \mathrm{H}_2] &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1] \\
&= [\mathrm{H}_1\Xi_1 - \mathrm{H}_2\Xi_2, \mathrm{H}_1\Xi_2 + \mathrm{H}_2\Xi_1] = [\mathrm{H}_1, \mathrm{H}_2][\Xi_1, \Xi_2].
\end{aligned}
$$

**Theorem 221:** We have

$$
\mathfrak{x}\mathfrak{y} = \mathfrak{n}
$$

if and only if at least one of the two numbers $\mathfrak{x}, \mathfrak{y}$ equals $\mathfrak{n}$.

**Proof:** Let

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2].
$$

1) From

$$
\mathfrak{x} = \mathfrak{n}
$$

it follows that

$$
\Xi_1 = \Xi_2 = 0,
$$

$$
\mathfrak{x}\mathfrak{y} = [0 \cdot \mathrm{H}_1 - 0 \cdot \mathrm{H}_2, 0 \cdot \mathrm{H}_2 + 0 \cdot \mathrm{H}_1] = [0, 0] = \mathfrak{n}.
$$

2) From

$$
\mathfrak{y} = \mathfrak{n}
$$

it follows by Theorem 220 and 1) that

$$
\mathfrak{x}\mathfrak{y} = \mathfrak{y}\mathfrak{x} = \mathfrak{n}\mathfrak{x} = \mathfrak{n}.
$$

3) From

$$
\mathfrak{x}\mathfrak{y} = \mathfrak{n}
$$

it is to be concluded that

$$
\mathfrak{x} = \mathfrak{n} \text{ or } \mathfrak{y} = \mathfrak{n}
$$

holds. We may therefore assume that

$$
\mathfrak{y} \neq \mathfrak{n},
$$

i.e.

$$
\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2 > 0,
$$

and have to prove

$$
\mathfrak{x} = \mathfrak{n},
$$

i.e.

$$
\Xi_1 = \Xi_2 = 0
$$

By hypothesis we have

$$
\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2 = 0 = \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1,
$$

hence

$$
\begin{aligned}
0 &= (\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{H}_1 + (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{H}_2 \\
&= ((\Xi_1\mathrm{H}_1)\mathrm{H}_1 - (\Xi_2\mathrm{H}_2)\mathrm{H}_1) + ((\Xi_1\mathrm{H}_2)\mathrm{H}_2 + (\Xi_2\mathrm{H}_1)\mathrm{H}_2) \\
&= (\Xi_1(\mathrm{H}_1\mathrm{H}_1) - \Xi_2(\mathrm{H}_2\mathrm{H}_1)) + (\Xi_1(\mathrm{H}_2\mathrm{H}_2) + \Xi_2(\mathrm{H}_1\mathrm{H}_2)) \\
&= ((\Xi_1(\mathrm{H}_1\mathrm{H}_1) - \Xi_2(\mathrm{H}_2\mathrm{H}_1)) + \Xi_2(\mathrm{H}_1\mathrm{H}_2)) + \Xi_1(\mathrm{H}_2\mathrm{H}_2) \\
&= \Xi_1(\mathrm{H}_1\mathrm{H}_1) + \Xi_1(\mathrm{H}_2\mathrm{H}_2) = \Xi_1(\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2),
\end{aligned}
$$

hence

$$
\Xi_1 = 0,
$$

$$
\Xi_2\mathrm{H}_2 = 0 = \Xi_2\mathrm{H}_1.
$$

Since $\mathrm{H}_1$ and $\mathrm{H}_2$ are not both $0$, we thus have

$$
\Xi_2 = 0.
$$

**Theorem 222:** $\mathfrak{x}\mathfrak{e} = \mathfrak{x}$.

**Proof:** $[\Xi_1, \Xi_2][1, 0] = [\Xi_1 \cdot 1 - \Xi_2 \cdot 0, \Xi_1 \cdot 0 + \Xi_2 \cdot 1] = [\Xi_1, \Xi_2]$.

**Theorem 223:** $\mathfrak{x}(-\mathfrak{e}) = -\mathfrak{x}$.

**Proof:**

$$
[\Xi_1, \Xi_2][-1, 0] = [\Xi_1(-1) - \Xi_2 \cdot 0, \Xi_1 \cdot 0 + \Xi_2(-1)] = [-\Xi_1, -\Xi_2].
$$

**Theorem 224:** $(-\mathfrak{x})\mathfrak{y} = \mathfrak{x}(-\mathfrak{y}) = -(\mathfrak{x}\mathfrak{y})$.

**Proof:** 1)

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

2) By 1) we have

$$
\mathfrak{x}(-\mathfrak{y}) = (-\mathfrak{y})\mathfrak{x} = -(\mathfrak{y}\mathfrak{x}) = -(\mathfrak{x}\mathfrak{y}).
$$

**Theorem 225:** $(-\mathfrak{x})(-\mathfrak{y}) = \mathfrak{x}\mathfrak{y}$.

**Proof:** By Theorem 224 we have

$$
(-\mathfrak{x})(-\mathfrak{y}) = \mathfrak{x}(-(-\mathfrak{y})) = \mathfrak{x}\mathfrak{y}.
$$

**Theorem 226** (associative law of multiplication):

$$
(\mathfrak{x}\mathfrak{y})\mathfrak{z} = \mathfrak{x}(\mathfrak{y}\mathfrak{z}).
$$

**Proof:** In this proof, for the sake of clarity, we exceptionally set as an abbreviation

$$
(\Xi + \mathrm{H}) + \mathrm{Z} = \Xi + \mathrm{H} + \mathrm{Z},
$$

$$
(\Xi\mathrm{H})\mathrm{Z} = \Xi\mathrm{H}\mathrm{Z}
$$

so that also

$$
\Xi + (\mathrm{H} + \mathrm{Z}) = \Xi + \mathrm{H} + \mathrm{Z},
$$

$$
\Xi(\mathrm{H}\mathrm{Z}) = \Xi\mathrm{H}\mathrm{Z}
$$

holds.

Set

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2], \quad \mathfrak{z} = [\mathrm{Z}_1, \mathrm{Z}_2]
$$

Then we have

$$
\begin{aligned}
(\mathfrak{x}\mathfrak{y})\mathfrak{z} &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1][\mathrm{Z}_1, \mathrm{Z}_2] \\
&= [(\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{Z}_1 - (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{Z}_2, (\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{Z}_2 + (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{Z}_1] \\
&= [(\Xi_1\mathrm{H}_1\mathrm{Z}_1 - \Xi_2\mathrm{H}_2\mathrm{Z}_1) - (\Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2), (\Xi_1\mathrm{H}_1\mathrm{Z}_2 - \Xi_2\mathrm{H}_2\mathrm{Z}_2) + (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1)] \\
&= [(\Xi_1\mathrm{H}_1\mathrm{Z}_1 + (-(\Xi_2\mathrm{H}_2\mathrm{Z}_1))) + (-(\Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2)), (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1) + (\Xi_1\mathrm{H}_1\mathrm{Z}_2 + (-(\Xi_2\mathrm{H}_2\mathrm{Z}_2)))] \\
&= [\Xi_1\mathrm{H}_1\mathrm{Z}_1 - (\Xi_2\mathrm{H}_2\mathrm{Z}_1 + \Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2), (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1 + \Xi_1\mathrm{H}_1\mathrm{Z}_2) - \Xi_2\mathrm{H}_2\mathrm{Z}_2].
\end{aligned}
$$

Since

$$
\mathfrak{x}(\mathfrak{y}\mathfrak{z}) = (\mathfrak{y}\mathfrak{z})\mathfrak{x}
$$

interchange of letters ($\mathrm{H}$ for $\Xi$, $\mathrm{Z}$ for $\mathrm{H}$, $\Xi$ for $\mathrm{Z}$) yields

$$
\mathfrak{x}(\mathfrak{y}\mathfrak{z}) = [\mathrm{H}_1\mathrm{Z}_1\Xi_1 - (\mathrm{H}_2\mathrm{Z}_2\Xi_1 + \mathrm{H}_1\mathrm{Z}_2\Xi_2 + \mathrm{H}_2\mathrm{Z}_1\Xi_2), (\mathrm{H}_1\mathrm{Z}_2\Xi_1 + \mathrm{H}_2\mathrm{Z}_1\Xi_1 + \mathrm{H}_1\mathrm{Z}_1\Xi_2) - \mathrm{H}_2\mathrm{Z}_2\Xi_2].
$$

Since

$$
\Xi\mathrm{H}\mathrm{Z} = \Xi(\mathrm{H}\mathrm{Z}) = (\mathrm{H}\mathrm{Z})\Xi = \mathrm{H}\mathrm{Z}\Xi,
$$

$$
\Xi + \mathrm{H} + \mathrm{Z} = \Xi + (\mathrm{H} + \mathrm{Z}) = (\mathrm{H} + \mathrm{Z}) + \Xi = \mathrm{H} + \mathrm{Z} + \Xi
$$

one sees from the expressions computed above that

$$
(\mathfrak{x}\mathfrak{y})\mathfrak{z} = \mathfrak{x}(\mathfrak{y}\mathfrak{z}).
$$

**Theorem 227** (distributive law):

$$
\mathfrak{x}(\mathfrak{y} + \mathfrak{z}) = \mathfrak{x}\mathfrak{y} + \mathfrak{x}\mathfrak{z}.
$$

**Proof:**

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

**Theorem 228:** $\mathfrak{x}(\mathfrak{y} - \mathfrak{z}) = \mathfrak{x}\mathfrak{y} - \mathfrak{x}\mathfrak{z}$.

**Proof:**

$$
\mathfrak{x}(\mathfrak{y} - \mathfrak{z}) = \mathfrak{x}(\mathfrak{y} + (-\mathfrak{z})) = \mathfrak{x}\mathfrak{y} + \mathfrak{x}(-\mathfrak{z}) = \mathfrak{x}\mathfrak{y} + (-(\mathfrak{x}\mathfrak{z})) = \mathfrak{x}\mathfrak{y} - \mathfrak{x}\mathfrak{z}.
$$

**Theorem 229:** The equation

$$
\mathfrak{y}\mathfrak{u} = \mathfrak{x},
$$

where $\mathfrak{x}, \mathfrak{y}$ are given and

$$
\mathfrak{y} \neq \mathfrak{n}
$$

holds, has exactly one solution $\mathfrak{u}$.

**Proof:** 1) There is at most one solution; for from

$$
\mathfrak{y}\mathfrak{u}_1 = \mathfrak{x} = \mathfrak{y}\mathfrak{u}_2
$$

it follows that

$$
\mathfrak{n} = \mathfrak{y}\mathfrak{u}_1 - \mathfrak{y}\mathfrak{u}_2 = \mathfrak{y}(\mathfrak{u}_1 - \mathfrak{u}_2),
$$

hence by Theorem 221

$$
\mathfrak{n} = \mathfrak{u}_1 - \mathfrak{u}_2,
$$

$$
\mathfrak{u}_1 = \mathfrak{u}_2.
$$

2) If

$$
\mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
$$

then

$$
\mathrm{H} = \mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2 > 0,
$$

and

$$
\mathfrak{u} = \left[\frac{\mathrm{H}_1}{\mathrm{H}}, -\frac{\mathrm{H}_2}{\mathrm{H}}\right]\mathfrak{x}
$$

is a solution, since

$$
\mathfrak{y}\mathfrak{u} = \left([\mathrm{H}_1, \mathrm{H}_2]\left[\frac{\mathrm{H}_1}{\mathrm{H}}, -\frac{\mathrm{H}_2}{\mathrm{H}}\right]\right)\mathfrak{x} = \left[\frac{\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2}{\mathrm{H}}, \frac{-(\mathrm{H}_1\mathrm{H}_2) + \mathrm{H}_2\mathrm{H}_1}{\mathrm{H}}\right]\mathfrak{x} = [1, 0]\mathfrak{x} = \mathfrak{e}\mathfrak{x} = \mathfrak{x}.
$$

**Definition 64:** The $\mathfrak{u}$ of Theorem 229 is called $\frac{\mathfrak{x}}{\mathfrak{y}}$ (read: $\mathfrak{x}$ over $\mathfrak{y}$). $\frac{\mathfrak{x}}{\mathfrak{y}}$ is also called the quotient of $\mathfrak{x}$ by $\mathfrak{y}$, or the number obtained by division of $\mathfrak{x}$ by $\mathfrak{y}$.

## § 4. Subtraction

**Theorem 230:**

$$
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
$$

**Proof:**

$$
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{y} + (\mathfrak{x} - \mathfrak{y}) = \mathfrak{x}.
$$

**Theorem 231:**

$$
(\mathfrak{x} + \mathfrak{y}) - \mathfrak{y} = \mathfrak{x}.
$$

**Proof:**

$$
\mathfrak{y} + \mathfrak{x} = \mathfrak{x} + \mathfrak{y}.
$$

**Theorem 232:**

$$
\mathfrak{x} - (\mathfrak{x} - \mathfrak{y}) = \mathfrak{y}.
$$

**Proof:**

$$
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
$$

**Theorem 233:** $(\mathfrak{x} - \mathfrak{y}) - \mathfrak{z} = \mathfrak{x} - (\mathfrak{y} + \mathfrak{z})$.

**Proof:**

$$
\begin{aligned}
(\mathfrak{y} + \mathfrak{z}) + ((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) &= ((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) + (\mathfrak{z} + \mathfrak{y}) \\
&= (((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) + \mathfrak{z}) + \mathfrak{y} = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
\end{aligned}
$$

**Theorem 234:** $(\mathfrak{x} + \mathfrak{y}) - \mathfrak{z} = \mathfrak{x} + (\mathfrak{y} - \mathfrak{z})$.

**Proof:**

$$
(\mathfrak{x} + (\mathfrak{y} - \mathfrak{z})) + \mathfrak{z} = \mathfrak{x} + ((\mathfrak{y} - \mathfrak{z}) + \mathfrak{z}) = \mathfrak{x} + \mathfrak{y}.
$$

**Theorem 235:** $(\mathfrak{x} - \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} - (\mathfrak{y} - \mathfrak{z})$.

**Proof:**

$$
((\mathfrak{x} - \mathfrak{y}) + \mathfrak{z}) + (\mathfrak{y} - \mathfrak{z}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} + (\mathfrak{y} - \mathfrak{z})) = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
$$

**Theorem 236:** $(\mathfrak{x} + \mathfrak{z}) - (\mathfrak{y} + \mathfrak{z}) = \mathfrak{x} - \mathfrak{y}$.

**Proof:**

$$
(\mathfrak{x} - \mathfrak{y}) + (\mathfrak{y} + \mathfrak{z}) = ((\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + \mathfrak{z}.
$$

**Theorem 237:** $(\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} - \mathfrak{u}) = (\mathfrak{x} + \mathfrak{z}) - (\mathfrak{y} + \mathfrak{u})$.

**Proof:**

$$
\begin{aligned}
((\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} - \mathfrak{u})) + (\mathfrak{y} + \mathfrak{u}) &= (\mathfrak{x} - \mathfrak{y}) + ((\mathfrak{z} - \mathfrak{u}) + (\mathfrak{u} + \mathfrak{y})) \\
&= (\mathfrak{x} - \mathfrak{y}) + (((\mathfrak{z} - \mathfrak{u}) + \mathfrak{u}) + \mathfrak{y}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} + \mathfrak{y}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{y} + \mathfrak{z}) \\
&= ((\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + \mathfrak{z}.
\end{aligned}
$$

**Theorem 238:** $(\mathfrak{x} - \mathfrak{y}) - (\mathfrak{z} - \mathfrak{u}) = (\mathfrak{x} + \mathfrak{u}) - (\mathfrak{y} + \mathfrak{z})$.

**Proof:** By Theorem 237 and Theorem 236,

$$
\begin{aligned}
((\mathfrak{x} + \mathfrak{u}) - (\mathfrak{y} + \mathfrak{z})) + (\mathfrak{z} - \mathfrak{u}) &= ((\mathfrak{x} + \mathfrak{u}) + \mathfrak{z}) - ((\mathfrak{y} + \mathfrak{z}) + \mathfrak{u}) \\
&= (\mathfrak{x} + (\mathfrak{u} + \mathfrak{z})) - (\mathfrak{y} + (\mathfrak{z} + \mathfrak{u})) = \mathfrak{x} - \mathfrak{y}.
\end{aligned}
$$

**Theorem 239:** We have

$$
\mathfrak{x} - \mathfrak{y} = \mathfrak{z} - \mathfrak{u}
$$

if and only if

$$
\mathfrak{x} + \mathfrak{u} = \mathfrak{y} + \mathfrak{z}.
$$

**Proof:** Theorem 213 and Theorem 238.

## § 5. Division

**Theorem 240:** If

$$
\mathfrak{y} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
$$

**Proof:**

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{y}\,\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{x}.
$$

**Theorem 241:** If

$$
\mathfrak{y} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}\mathfrak{y}}{\mathfrak{y}} = \mathfrak{x}.
$$

**Proof:**

$$
\mathfrak{y}\mathfrak{x} = \mathfrak{x}\mathfrak{y}.
$$

**Theorem 242:** If

$$
\mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\frac{\mathfrak{x}}{\mathfrak{y}}} = \mathfrak{y}.
$$

**Proof:**

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
$$

**Theorem 243:** If

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
$$

then

$$
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}\mathfrak{z}}.
$$

**Proof:**

$$
(\mathfrak{y}\mathfrak{z})\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}} = \frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}}(\mathfrak{z}\mathfrak{y}) = \left(\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}}\,\mathfrak{z}\right)\mathfrak{y} = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
$$

**Theorem 244:** If

$$
\mathfrak{z} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}\mathfrak{y}}{\mathfrak{z}} = \mathfrak{x}\,\frac{\mathfrak{y}}{\mathfrak{z}}.
$$

**Proof:**

$$
\left(\mathfrak{x}\,\frac{\mathfrak{y}}{\mathfrak{z}}\right)\mathfrak{z} = \mathfrak{x}\left(\frac{\mathfrak{y}}{\mathfrak{z}}\,\mathfrak{z}\right) = \mathfrak{x}\mathfrak{y}.
$$

**Theorem 245:** If

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{z} = \frac{\mathfrak{x}}{\frac{\mathfrak{y}}{\mathfrak{z}}}.
$$

**Proof:**

$$
\left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{z}\right)\frac{\mathfrak{y}}{\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}}\left(\mathfrak{z}\,\frac{\mathfrak{y}}{\mathfrak{z}}\right) = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
$$

**Theorem 246:** If

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}\mathfrak{z}}{\mathfrak{y}\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}}.
$$

**Proof:**

$$
\frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{y}\mathfrak{z}) = \left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}\right)\mathfrak{z} = \mathfrak{x}\mathfrak{z}.
$$

**Theorem 247:** If

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{y}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

**Proof:**

$$
\begin{aligned}
\left(\frac{\mathfrak{x}}{\mathfrak{y}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}}\right)(\mathfrak{y}\mathfrak{u}) &= \frac{\mathfrak{x}}{\mathfrak{y}}\left(\frac{\mathfrak{z}}{\mathfrak{u}}(\mathfrak{u}\mathfrak{y})\right) = \frac{\mathfrak{x}}{\mathfrak{y}}\left(\left(\frac{\mathfrak{z}}{\mathfrak{u}}\,\mathfrak{u}\right)\mathfrak{y}\right) \\
&= \frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{z}\mathfrak{y}) = \frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{y}\mathfrak{z}) = \left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}\right)\mathfrak{z} = \mathfrak{x}\mathfrak{z}.
\end{aligned}
$$

**Theorem 248:** If

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

then

$$
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\frac{\mathfrak{z}}{\mathfrak{u}}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}}.
$$

**Proof:** By Theorem 247 and Theorem 246,

$$
\frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{(\mathfrak{x}\mathfrak{u})\mathfrak{z}}{(\mathfrak{y}\mathfrak{z})\mathfrak{u}} = \frac{\mathfrak{x}(\mathfrak{u}\mathfrak{z})}{\mathfrak{y}(\mathfrak{z}\mathfrak{u})} = \frac{\mathfrak{x}}{\mathfrak{y}}.
$$

**Theorem 249:** If

$$
\mathfrak{x} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{n}}{\mathfrak{x}} = \mathfrak{n}.
$$

**Proof:**

$$
\mathfrak{x}\mathfrak{n} = \mathfrak{n}.
$$

**Theorem 250:** If

$$
\mathfrak{x} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{x}} = \mathfrak{e}.
$$

**Proof:**

$$
\mathfrak{x}\mathfrak{e} = \mathfrak{x}.
$$

**Theorem 251:** If

$$
\mathfrak{y} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{e}
$$

if and only if

$$
\mathfrak{x} = \mathfrak{y}.
$$

**Proof:** 1) If

$$
\mathfrak{x} = \mathfrak{y},
$$

then by Theorem 250

$$
\frac{\mathfrak{x}}{\mathfrak{y}} = \frac{\mathfrak{y}}{\mathfrak{y}} = \mathfrak{e}.
$$

2) If

$$
\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{e},
$$

then by Theorem 222

$$
\mathfrak{x} = \mathfrak{y}\mathfrak{e} = \mathfrak{y}.
$$

**Theorem 252:** If

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{y}} = \frac{\mathfrak{z}}{\mathfrak{u}}
$$

if and only if

$$
\mathfrak{x}\mathfrak{u} = \mathfrak{y}\mathfrak{z}.
$$

**Proof:** For

$$
\mathfrak{z} = \mathfrak{n}
$$

the assertion is clear.

Otherwise, by Theorem 248,

$$
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\frac{\mathfrak{z}}{\mathfrak{u}}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}},
$$

so that Theorem 251 yields the assertion.

**Theorem 253:** If

$$
\mathfrak{y} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{y}} = \frac{\mathfrak{x} + \mathfrak{z}}{\mathfrak{y}}.
$$

**Proof:**

$$
\mathfrak{y}\left(\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{y}}\right) = \mathfrak{y} \cdot \frac{\mathfrak{x}}{\mathfrak{y}} + \mathfrak{y} \cdot \frac{\mathfrak{z}}{\mathfrak{y}} = \mathfrak{x} + \mathfrak{z}.
$$

**Theorem 254:** If

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} + \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

**Proof:** By Theorem 246 and Theorem 253,

$$
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{u}} + \frac{\mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} + \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

**Theorem 255:** If

$$
\mathfrak{y} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{y}} = \frac{\mathfrak{x} - \mathfrak{z}}{\mathfrak{y}}.
$$

**Proof:**

$$
\mathfrak{y}\left(\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{y}}\right) = \mathfrak{y} \cdot \frac{\mathfrak{x}}{\mathfrak{y}} - \mathfrak{y} \cdot \frac{\mathfrak{z}}{\mathfrak{y}} = \mathfrak{x} - \mathfrak{z}.
$$

**Theorem 256:** If

$$
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
$$

then

$$
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} - \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

**Proof:** By Theorem 246 and Theorem 255,

$$
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{u}} - \frac{\mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} - \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
$$

## § 6. Conjugate Numbers

**Definition 65:** To

$$
\mathfrak{x} = [\Xi_1, \Xi_2]
$$

the number

$$
\overline{\mathfrak{x}} = [\Xi_1, -\Xi_2]
$$

is called the complex conjugate.

**Theorem 257:** $\overline{\overline{\mathfrak{x}}} = \mathfrak{x}$.

**Proof:** $[\Xi_1, -(-\Xi_2)] = [\Xi_1, \Xi_2]$.

**Theorem 258:** We have

$$
\overline{\mathfrak{x}} = \mathfrak{n}
$$

if and only if

$$
\mathfrak{x} = \mathfrak{n}.
$$

**Proof:**

$$
\Xi_1 = 0, \quad -\Xi_2 = 0
$$

is the same as

$$
\Xi_1 = 0, \quad \Xi_2 = 0.
$$

**Theorem 259:** We have

$$
\overline{\mathfrak{x}} = \mathfrak{x}
$$

if and only if $\mathfrak{x}$ has the form

$$
\mathfrak{x} = [\Xi, 0]
$$

**Proof:** We have

$$
\Xi_1 = \Xi_1, \quad -\Xi_2 = \Xi_2
$$

if and only if

$$
\Xi_2 = 0.
$$

**Theorem 260:** $\overline{\mathfrak{x} + \mathfrak{y}} = \overline{\mathfrak{x}} + \overline{\mathfrak{y}}$.

**Proof:** For

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
$$

we have

$$
\begin{aligned}
\overline{\mathfrak{x} + \mathfrak{y}} &= [\Xi_1 + \mathrm{H}_1, -(\Xi_2 + \mathrm{H}_2)] = [\Xi_1 + \mathrm{H}_1, -\Xi_2 + (-\mathrm{H}_2)] \\
&= [\Xi_1, -\Xi_2] + [\mathrm{H}_1, -\mathrm{H}_2] = \overline{\mathfrak{x}} + \overline{\mathfrak{y}}.
\end{aligned}
$$

**Theorem 261:** $\overline{\mathfrak{x}\mathfrak{y}} = \overline{\mathfrak{x}}\,\overline{\mathfrak{y}}$.

**Proof:** For

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
$$

we have

$$
\begin{aligned}
\overline{\mathfrak{x}\mathfrak{y}} &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, -(\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)] \\
&= [\Xi_1\mathrm{H}_1 - (-\Xi_2)(-\mathrm{H}_2), \Xi_1(-\mathrm{H}_2) + (-\Xi_2)\mathrm{H}_1] \\
&= [\Xi_1, -\Xi_2][\mathrm{H}_1, -\mathrm{H}_2] = \overline{\mathfrak{x}}\,\overline{\mathfrak{y}}.
\end{aligned}
$$

**Theorem 262:** $\overline{\mathfrak{x} - \mathfrak{y}} = \overline{\mathfrak{x}} - \overline{\mathfrak{y}}$.

**Proof:** Since

$$
\mathfrak{x} = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}
$$

we have, by Theorem 260,

$$
\overline{\mathfrak{x}} = \overline{\mathfrak{x} - \mathfrak{y}} + \overline{\mathfrak{y}},
$$

$$
\overline{\mathfrak{x} - \mathfrak{y}} = \overline{\mathfrak{x}} - \overline{\mathfrak{y}}.
$$

**Theorem 263:** For

$$
\mathfrak{y} \neq \mathfrak{n}
$$

we have

$$
\overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)} = \frac{\overline{\mathfrak{x}}}{\overline{\mathfrak{y}}}.
$$

**Proof:** Since

$$
\mathfrak{x} = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}
$$

we have, by Theorem 261,

$$
\overline{\mathfrak{x}} = \overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)}\,\overline{\mathfrak{y}};
$$

by Theorem 258 we have

$$
\overline{\mathfrak{y}} \neq \mathfrak{n},
$$

hence

$$
\overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)} = \frac{\overline{\mathfrak{x}}}{\overline{\mathfrak{y}}}.
$$

## § 7. Absolute Value

**Definition 66:** Let $\sqrt{\zeta}$ denote the (positive) solution $\xi$, which exists uniquely by Theorem 161, of

$$
\xi\xi = \zeta.
$$

**Definition 67:** $\sqrt{0} = 0$.

**Definition 68:**

$$
|[\Xi_1, \Xi_2]| = \sqrt{\Xi_1\Xi_1 + \Xi_2\Xi_2}.
$$

($|\ |$ to be read: absolute value.)

**Theorem 264:**

$$
|\mathfrak{x}| \begin{cases} > 0 & \text{for } \mathfrak{x} \neq \mathfrak{n}, \\ = 0 & \text{for } \mathfrak{x} = \mathfrak{n}. \end{cases}
$$

**Proof:** Definitions 68, 66 and 67.

**Theorem 265:**

$$
|[\Xi_1, \Xi_2]| \geqq |\Xi_1|,
$$

$$
|[\Xi_1, \Xi_2]| \geqq |\Xi_2|.
$$

**Proof:**

$$
|[\Xi_1, \Xi_2]|\,|[\Xi_1, \Xi_2]| = \Xi_1\Xi_1 + \Xi_2\Xi_2 \begin{cases} \geqq \Xi_1\Xi_1 = |\Xi_1||\Xi_1|, \\ \geqq \Xi_2\Xi_2 = |\Xi_2||\Xi_2|. \end{cases}
$$

From

$$
\Xi\Xi \geqq \mathrm{H}\mathrm{H}, \quad \Xi \geqq 0, \quad \mathrm{H} \geqq 0
$$

it follows that

$$
\Xi \geqq \mathrm{H},
$$

since otherwise we would have

$$
0 \leqq \Xi < \mathrm{H},
$$

$$
\Xi\Xi < \mathrm{H}\mathrm{H}.
$$

This proves Theorem 265.

**Theorem 266:** From

$$
[\Xi, 0][\Xi, 0] = [\mathrm{H}, 0][\mathrm{H}, 0], \quad \Xi \geqq 0, \quad \mathrm{H} \geqq 0
$$

it follows that

$$
\Xi = \mathrm{H}.
$$

**Proof:** Since

$$
[\mathrm{Z}, 0][\mathrm{Z}, 0] = [\mathrm{Z}\mathrm{Z} - 0 \cdot 0, \mathrm{Z} \cdot 0 + 0 \cdot \mathrm{Z}] = [\mathrm{Z}\mathrm{Z}, 0]
$$

we have, by hypothesis,

$$
[\Xi\Xi, 0] = [\mathrm{H}\mathrm{H}, 0],
$$

$$
\Xi\Xi = \mathrm{H}\mathrm{H}.
$$

If

$$
\Xi > 0,
$$

then it follows that

$$
\mathrm{H}\mathrm{H} = \Xi\Xi > 0,
$$

hence by Theorem 161

$$
\mathrm{H} > 0,
$$

$$
\Xi = \mathrm{H}.
$$

If

$$
\Xi = 0,
$$

then it follows that

$$
\mathrm{H}\mathrm{H} = \Xi\Xi = 0,
$$

$$
\mathrm{H} = 0 = \Xi.
$$

**Theorem 267:** $[|\mathfrak{x}|, 0][|\mathfrak{x}|, 0] = \mathfrak{x}\overline{\mathfrak{x}}$.

**Proof:** If we set

$$
\mathfrak{x} = [\Xi_1, \Xi_2]
$$

then we have

$$
\begin{aligned}
[|\mathfrak{x}|, 0][|\mathfrak{x}|, 0] &= [|\mathfrak{x}||\mathfrak{x}|, 0] = [\Xi_1\Xi_1 + \Xi_2\Xi_2, 0] \\
&= [\Xi_1\Xi_1 - \Xi_2(-\Xi_2), \Xi_1(-\Xi_2) + \Xi_2\Xi_1] = [\Xi_1, \Xi_2][\Xi_1, -\Xi_2] = \mathfrak{x}\overline{\mathfrak{x}}.
\end{aligned}
$$

**Theorem 268:** $|\mathfrak{x}\mathfrak{y}| = |\mathfrak{x}||\mathfrak{y}|$.

**Proof:** By Theorem 267 and Theorem 261 we have

$$
\begin{aligned}
[|\mathfrak{x}\mathfrak{y}|, 0][|\mathfrak{x}\mathfrak{y}|, 0] &= (\mathfrak{x}\mathfrak{y})\overline{\mathfrak{x}\mathfrak{y}} = (\mathfrak{x}\mathfrak{y})(\overline{\mathfrak{x}}\,\overline{\mathfrak{y}}) = (\mathfrak{x}\overline{\mathfrak{x}})(\mathfrak{y}\overline{\mathfrak{y}}) \\
&= ([|\mathfrak{x}|, 0][|\mathfrak{x}|, 0])([|\mathfrak{y}|, 0][|\mathfrak{y}|, 0]) \\
&= ([|\mathfrak{x}|, 0][|\mathfrak{y}|, 0])([|\mathfrak{x}|, 0][|\mathfrak{y}|, 0]) \\
&= [|\mathfrak{x}||\mathfrak{y}| - 0 \cdot 0, |\mathfrak{x}| \cdot 0 + 0 \cdot |\mathfrak{y}|][|\mathfrak{x}||\mathfrak{y}| - 0 \cdot 0, |\mathfrak{x}| \cdot 0 + 0 \cdot |\mathfrak{y}|] \\
&= [|\mathfrak{x}||\mathfrak{y}|, 0][|\mathfrak{x}||\mathfrak{y}|, 0],
\end{aligned}
$$

hence by Theorem 266

$$
|\mathfrak{x}\mathfrak{y}| = |\mathfrak{x}||\mathfrak{y}|.
$$

**Theorem 269:** If

$$
\mathfrak{y} \neq \mathfrak{n},
$$

then

$$
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| = \frac{|\mathfrak{x}|}{|\mathfrak{y}|}.
$$

**Proof:**

$$
|\mathfrak{y}| > 0,
$$

$$
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x},
$$

hence by Theorem 268

$$
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| |\mathfrak{y}| = |\mathfrak{x}|,
$$

$$
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| = \frac{|\mathfrak{x}|}{|\mathfrak{y}|}.
$$

**Theorem 270:** From

$$
\mathfrak{x} + \mathfrak{y} = \mathfrak{e}
$$

it follows that

$$
|\mathfrak{x}| + |\mathfrak{y}| \geqq 1.
$$

**Proof:** If

$$
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
$$

then by Theorem 265 we have

$$
|\mathfrak{x}| \geqq |\Xi_1| \geqq \Xi_1,
$$

$$
|\mathfrak{y}| \geqq |\mathrm{H}_1| \geqq \mathrm{H}_1,
$$

hence

$$
|\mathfrak{x}| + |\mathfrak{y}| \geqq \Xi_1 + \mathrm{H}_1 = 1.
$$

**Theorem 271:** $|\mathfrak{x} + \mathfrak{y}| \leqq |\mathfrak{x}| + |\mathfrak{y}|$.

**Proof:** 1) If

$$
\mathfrak{x} + \mathfrak{y} = \mathfrak{n},
$$

then the left-hand side of the assertion is $0$, hence $\leqq$ the right-hand side.

2) If

$$
\mathfrak{x} + \mathfrak{y} \neq \mathfrak{n},
$$

then, since

$$
\frac{\mathfrak{x}}{\mathfrak{x} + \mathfrak{y}} + \frac{\mathfrak{y}}{\mathfrak{x} + \mathfrak{y}} = \frac{\mathfrak{x} + \mathfrak{y}}{\mathfrak{x} + \mathfrak{y}} = \mathfrak{e},
$$

we have by Theorem 270

$$
\left|\frac{\mathfrak{x}}{\mathfrak{x} + \mathfrak{y}}\right| + \left|\frac{\mathfrak{y}}{\mathfrak{x} + \mathfrak{y}}\right| \geqq 1,
$$

hence by Theorem 269

$$
\frac{|\mathfrak{x}|}{|\mathfrak{x} + \mathfrak{y}|} + \frac{|\mathfrak{y}|}{|\mathfrak{x} + \mathfrak{y}|} \geqq 1,
$$

$$
|\mathfrak{x}| + |\mathfrak{y}| = |\mathfrak{x} + \mathfrak{y}|\left(\frac{|\mathfrak{x}|}{|\mathfrak{x} + \mathfrak{y}|} + \frac{|\mathfrak{y}|}{|\mathfrak{x} + \mathfrak{y}|}\right) \geqq |\mathfrak{x} + \mathfrak{y}|.
$$

**Theorem 272:** $|-\mathfrak{x}| = |\mathfrak{x}|$.

**Proof:** $(-\Xi_1)(-\Xi_1) + (-\Xi_2)(-\Xi_2) = \Xi_1\Xi_1 + \Xi_2\Xi_2$.

**Theorem 273:** $|\mathfrak{x} - \mathfrak{y}| \geqq ||\mathfrak{x}| - |\mathfrak{y}||$.

**Proof:**

$$
\mathfrak{x} = \mathfrak{y} + (\mathfrak{x} - \mathfrak{y}),
$$

hence by Theorem 271

$$
|\mathfrak{x}| \leqq |\mathfrak{y}| + |\mathfrak{x} - \mathfrak{y}|,
$$

$$
|\mathfrak{x} - \mathfrak{y}| \geqq |\mathfrak{x}| - |\mathfrak{y}|.
$$

From this it follows, if $\mathfrak{x}$ and $\mathfrak{y}$ are interchanged,

$$
|\mathfrak{y} - \mathfrak{x}| \geqq |\mathfrak{y}| - |\mathfrak{x}|,
$$

hence by Theorem 272

$$
|\mathfrak{x} - \mathfrak{y}| = |-(\mathfrak{y} - \mathfrak{x})| = |\mathfrak{y} - \mathfrak{x}| \geqq |\mathfrak{y}| - |\mathfrak{x}| = -(|\mathfrak{x}| - |\mathfrak{y}|).
$$

But from

$$
\Xi \geqq \mathrm{H}, \quad \Xi \geqq -\mathrm{H}
$$

it follows, since $|\mathrm{H}|$ is either $\mathrm{H}$ or $-\mathrm{H}$, that

$$
\Xi \geqq |\mathrm{H}|.
$$

Therefore

$$
|\mathfrak{x} - \mathfrak{y}| \geqq ||\mathfrak{x}| - |\mathfrak{y}||.
$$

## § 8. Sums and Products

**Theorem 274:** If

$$
x < y,
$$

then the $m \leqq x$ cannot be put in one-to-one correspondence with the $n \leqq y$.

By a correspondence I always mean, in this section, a one-to-one correspondence.

**Proof:** Let $\mathfrak{M}$ be the set of $x$ for which the assertion is true for all $y > x$.

I) If

$$
1 < y,
$$

then $m = 1$ cannot be put in correspondence with the $n \leqq y$; for if to $m = 1$ there corresponds $n = 1$, then no $m$ is left over for $n = y$; if $m = 1$ is put in correspondence with an $n > 1$, then no $m$ is left over for $n = 1$.

Hence 1 belongs to $\mathfrak{M}$.

II) Let $x$ belong to $\mathfrak{M}$, and let

$$
x + 1 < y.
$$

If a correspondence of the $m \leqq x + 1$ to the $n \leqq y$ is given, we distinguish two cases.

α) To $m = x + 1$ there corresponds $n = y$. Then the $m \leqq x$ are put in correspondence with the $n \leqq y - 1$; this is impossible because of

$$
x < y - 1.
$$

β) To $m = x + 1$ there corresponds an $n = n_0 < y$. Then let $m = m_0$ be the number corresponding to $n = y$, so that $m_0 < x + 1$. Now consider the following modified correspondence of the $m \leqq x + 1$ to the $n \leqq y$.

$$
\begin{cases}
\text{If } m \neq m_0,\ m \neq x + 1, \text{ let the old assignment stand.} \\
\text{to } m = m_0 \text{ let } n = n_0 \text{ correspond.} \\
\text{to } m = x + 1 \text{ let } n = y \text{ correspond.}
\end{cases}
$$

Then we have a correspondence of the kind just shown in α) to be impossible.

Hence $x + 1$ belongs to $\mathfrak{M}$, and the assertion is proved.

Since the proofs of the following Theorems 275 to 278 and 280 to 286, together with the associated definitions, would be word for word the same for sums and for products, we carry this out only once, in order to avoid long repetitions, and choose a neutral symbol $\dotplus$, which is to mean throughout $+$ or throughout $\cdot$. The symbol $\mathop{\Large\dotplus}$, neutral for the time being, will later be split correspondingly into two symbols ($\Sigma$ for $+$, $\Pi$ for $\cdot$).

By defined I mean, throughout this entire development: defined as a complex number.

**Theorem 275:** Let $x$ be fixed, and let $\mathfrak{f}(n)$ be defined for $n \leqq x$. Then there is exactly one

$$
\mathfrak{g}_x(n)
$$

defined for $n \leqq x$ (written more fully

$$
\mathfrak{g}_{x,\mathfrak{f}}(n),
$$

written in abbreviated form

$$
\mathfrak{g}(n))
$$

with the following properties:

$$
\begin{aligned}
\mathfrak{g}_x(1) &= \mathfrak{f}(1), \\
\mathfrak{g}_x(n + 1) &= \mathfrak{g}_x(n) \dotplus \mathfrak{f}(n + 1) \quad \text{for } n < x.
\end{aligned}
$$

**Proof:** 1) First we show that there is at most one such $\mathfrak{g}_x(n)$.

Let $\mathfrak{g}(n)$ and $\mathfrak{h}(n)$ have the required properties. Let $\mathfrak{M}$ be the set consisting of the $n \leqq x$ with

$$
\mathfrak{g}(n) = \mathfrak{h}(n)
$$

and of the $n > x$.

I) $\mathfrak{g}(1) = \mathfrak{f}(1) = \mathfrak{h}(1)$;

hence 1 belongs to $\mathfrak{M}$.

II) Let $n$ belong to $\mathfrak{M}$. Then either

$$
n < x, \quad \mathfrak{g}(n) = \mathfrak{h}(n),
$$

hence

$$
\mathfrak{g}(n + 1) = \mathfrak{g}(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{h}(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{h}(n + 1),
$$

so that $n + 1$ belongs to $\mathfrak{M}$; or

$$
n \geqq x,
$$

hence

$$
n + 1 > x
$$

and $n + 1$ likewise belongs to $\mathfrak{M}$.

Therefore $\mathfrak{M}$ is the set of all positive integers; hence for every $n \leqq x$ we have

$$
\mathfrak{g}(n) = \mathfrak{h}(n),
$$

q.e.d.

2) We now show that for every $x$, if $\mathfrak{f}(n)$ is defined for $n \leqq x$, there is a suitable $\mathfrak{g}_x(n)$.

Let $\mathfrak{M}$ be the set of $x$ for which this is true, hence for which, if $\mathfrak{f}(n)$ is defined for $n \leqq x$, there is by 1) exactly one suitable $\mathfrak{g}_x(n)$.

I) For $x = 1$, if $\mathfrak{f}(1)$ is defined,

$$
\mathfrak{g}_x(1) = \mathfrak{f}(1)
$$

does what is required (since the second requirement is not imposed, $n < 1$ being impossible). Hence 1 belongs to $\mathfrak{M}$.

II) Let $x$ belong to $\mathfrak{M}$. If $\mathfrak{f}(n)$ is defined for $n \leqq x + 1$, then it is defined for $n \leqq x$, so that here exactly one associated $\mathfrak{g}_x(n)$ exists. Now

$$
\mathfrak{g}_{x+1}(n) = \begin{cases}
\mathfrak{g}_x(n) & \text{for } n \leqq x, \\
\mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1) & \text{for } n = x + 1
\end{cases}
$$

does what is required for $x + 1$. For, first,

$$
\mathfrak{g}_{x+1}(1) = \mathfrak{g}_x(1) = \mathfrak{f}(1).
$$

Secondly, for

$$
n < x
$$

(since $n + 1 \leqq x$) we have

$$
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_x(n + 1) = \mathfrak{g}_x(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1),
$$

while for

$$
n = x
$$

$$
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1)
$$

holds; hence from

$$
n < x + 1
$$

it follows in any case that

$$
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1).
$$

Therefore $x + 1$ belongs to $\mathfrak{M}$, and $\mathfrak{M}$ contains all positive integers.

**Theorem 276:** If $\mathfrak{f}(n)$ is defined for $n \leqq x + 1$, then for the associated $\mathfrak{g}_x(n)$ and $\mathfrak{g}_{x+1}(n)$ we have

$$
\mathfrak{g}_{x+1}(x + 1) = \mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1).
$$

**Proof:** This occurred in the construction in 2), II) of the preceding proof.

**Definition 69:** If $\mathfrak{f}(n)$ is defined for $n \leqq x$, then

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{g}_x(x) \quad (= \mathfrak{g}_{x,\mathfrak{f}}(x)).
$$

If $\dotplus$ has the meaning $+$, one writes

$$
\sum_{n=1}^{x} \mathfrak{f}(n);
$$

if $\dotplus$ has the meaning $\cdot$, one writes

$$
\prod_{n=1}^{x} \mathfrak{f}(n).
$$

($\Sigma$ to be read: sum; $\Pi$ to be read: product.)

In these symbols, any other letter denoting positive integers may also stand in place of $n$.

**Theorem 277:** If $\mathfrak{f}(1)$ is defined, then

$$
\mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) = \mathfrak{f}(1).
$$

**Proof:** $\mathfrak{g}_1(1) = \mathfrak{f}(1)$.

**Theorem 278:** If $\mathfrak{f}(n)$ is defined for $n \leqq x + 1$, then

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1).
$$

**Proof:** Theorem 276.

**Theorem 279:**

$$
\sum_{n=1}^{x} \mathfrak{x} = \mathfrak{x}[x, 0].
$$

**Proof:** Let $\mathfrak{x}$ be fixed, and let $\mathfrak{M}$ be the set of $x$ for which this holds.

I) By Theorem 277 we have

$$
\sum_{n=1}^{1} \mathfrak{x} = \mathfrak{x} = \mathfrak{x}\mathfrak{e} = \mathfrak{x}[1, 0].
$$

Hence 1 belongs to $\mathfrak{M}$.

II) If $x$ belongs to $\mathfrak{M}$, then it follows from Theorem 278 that

$$
\sum_{n=1}^{x+1} \mathfrak{x} = \sum_{n=1}^{x} \mathfrak{x} + \mathfrak{x} = \mathfrak{x}[x, 0] + \mathfrak{x}[1, 0] = \mathfrak{x}([x, 0] + [1, 0]) = \mathfrak{x}[x + 1, 0].
$$

Hence $x + 1$ belongs to $\mathfrak{M}$.

Therefore the assertion holds for all $x$.

**Theorem 280:** If $\mathfrak{f}(1)$ and $\mathfrak{f}(1 + 1)$ are defined, then

$$
\mathop{\Large\dotplus}\limits_{n=1}^{1+1} \mathfrak{f}(n) = \mathfrak{f}(1) \dotplus \mathfrak{f}(1 + 1).
$$

**Proof:** By Theorem 278 and Theorem 277 we have

$$
\mathop{\Large\dotplus}\limits_{n=1}^{1+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) \dotplus \mathfrak{f}(1 + 1) = \mathfrak{f}(1) \dotplus \mathfrak{f}(1 + 1).
$$

**Theorem 281:** If $\mathfrak{f}(n)$ is defined for $n \leqq x + y$, then

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+y} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n).
$$

**Proof:** For fixed $x$, let $\mathfrak{M}$ be the set of $y$ for which this holds.

I) If $\mathfrak{f}(n)$ is defined for $n \leqq x + 1$, then by Theorem 278 and Theorem 277 we have

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(x + n).
$$

Hence 1 belongs to $\mathfrak{M}$.

II) Let $y$ belong to $\mathfrak{M}$. If $\mathfrak{f}(n)$ is defined for $n \leqq x + (y + 1)$, then by Theorem 278 (applied to $x + y$ in place of $x$)

$$
\begin{aligned}
\mathop{\Large\dotplus}\limits_{n=1}^{x+(y+1)} \mathfrak{f}(n) &= \mathop{\Large\dotplus}\limits_{n=1}^{(x+y)+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x+y} \mathfrak{f}(n) \dotplus \mathfrak{f}((x + y) + 1) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n)\right) \dotplus \mathfrak{f}(x + (y + 1)) \\
&= \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \left(\mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n) \dotplus \mathfrak{f}(x + (y + 1))\right),
\end{aligned}
$$

hence by Theorem 278 (applied to $y$ in place of $x$, $\mathfrak{f}(x + n)$ in place of $\mathfrak{f}(n)$)

$$
= \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y+1} \mathfrak{f}(x + n).
$$

Hence $y + 1$ belongs to $\mathfrak{M}$, and the theorem is proved.

**Theorem 282:** If $\mathfrak{f}(n)$ and $\mathfrak{g}(n)$ are defined for $n \leqq x$, then

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n).
$$

**Proof:** Let $\mathfrak{M}$ be the set of $x$ for which this holds.

I) If $\mathfrak{f}(1)$ and $\mathfrak{g}(1)$ are defined, then

$$
\mathop{\Large\dotplus}\limits_{n=1}^{1} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) = \mathfrak{f}(1) \dotplus \mathfrak{g}(1) = \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{g}(n).
$$

Hence 1 belongs to $\mathfrak{M}$.

II) Let $x$ belong to $\mathfrak{M}$. If $\mathfrak{f}(n)$ and $\mathfrak{g}(n)$ are defined for $n \leqq x + 1$, then, in view of

$$
\begin{aligned}
(\mathfrak{x} \dotplus \mathfrak{y}) \dotplus (\mathfrak{z} \dotplus \mathfrak{u}) &= ((\mathfrak{x} \dotplus \mathfrak{y}) \dotplus \mathfrak{z}) \dotplus \mathfrak{u} = (\mathfrak{z} \dotplus (\mathfrak{x} \dotplus \mathfrak{y})) \dotplus \mathfrak{u} \\
&= ((\mathfrak{z} \dotplus \mathfrak{x}) \dotplus \mathfrak{y}) \dotplus \mathfrak{u} = (\mathfrak{z} \dotplus \mathfrak{x}) \dotplus (\mathfrak{y} \dotplus \mathfrak{u}) = (\mathfrak{x} \dotplus \mathfrak{z}) \dotplus (\mathfrak{y} \dotplus \mathfrak{u}),
\end{aligned}
$$

we have

$$
\begin{aligned}
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) &= \mathop{\Large\dotplus}\limits_{n=1}^{x} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) \dotplus (\mathfrak{f}(x + 1) \dotplus \mathfrak{g}(x + 1)) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n)\right) \dotplus (\mathfrak{f}(x + 1) \dotplus \mathfrak{g}(x + 1)) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1)\right) \dotplus \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x + 1)\right) \\
&= \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n).
\end{aligned}
$$

Hence $x + 1$ belongs to $\mathfrak{M}$, and the assertion always holds.

**Theorem 283:** Let $s(n)$ put the $n \leqq x$ in correspondence with the $m \leqq x$. Let $\mathfrak{f}(n)$ be defined for $n \leqq x$. Then

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(s(n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n).
$$

**Proof:** For brevity, we set

$$
\mathfrak{f}(s(n)) = \mathfrak{g}(n)
$$

Let $\mathfrak{M}$ be the set of $x$ for which the assertion

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n)
$$

is true (for all admissible $s$ and $\mathfrak{f}$).

I) For

$$
x = 1
$$

we have

$$
s(1) = 1,
$$

hence, if $\mathfrak{f}(1)$ is defined,

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathfrak{g}(1) = \mathfrak{f}(1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n).
$$

Hence 1 belongs to $\mathfrak{M}$.

II) Let $x$ belong to $\mathfrak{M}$. Let $s(n)$ put the $n \leqq x + 1$ in correspondence with the $m \leqq x + 1$, and let $\mathfrak{f}(n)$ be defined for $n \leqq x + 1$.

1) If

$$
s(x + 1) = x + 1,
$$

then $s(n)$ puts the $n \leqq x$ in correspondence with the $m \leqq x$. In that case

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n),
$$

$$
\mathfrak{g}(x + 1) = \mathfrak{f}(x + 1),
$$

hence

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n).
$$

2) If

$$
s(x + 1) < x + 1, \quad s(1) = 1,
$$

then $s(n)$ puts the $n$ with $1 + 1 \leqq n \leqq x + 1$ in correspondence with the $m$ with $1 + 1 \leqq m \leqq x + 1$; hence $s(1 + n) - 1$ puts the $n \leqq x$ in correspondence with the $m \leqq x$. Therefore

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(1 + n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(s(1 + n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + (s(1 + n) - 1)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + n),
$$

hence by Theorem 281

$$
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n) = \mathfrak{g}(1) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(1 + n) = \mathfrak{f}(1) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + n) = \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n).
$$

3) If

$$
s(x + 1) < x + 1, \quad s(1) > 1,
$$

we set

$$
s(1) = a
$$

and determine $b$ from

$$
1 \leqq b \leqq x + 1, \quad s(b) = 1
$$

Then

$$
a > 1, \quad b > 1.
$$

α) Let

$$
a < x + 1.
$$

Then both

$$
s_1(n) = \begin{cases}
1 & \text{for } n = 1, \\
a & \text{for } n = b, \\
s(n) & \text{for } 1 < n \leqq x + 1,\ n \neq b
\end{cases}
$$

and

$$
s_2(n) = \begin{cases}
a & \text{for } n = 1, \\
1 & \text{for } n = a, \\
n & \text{for } 1 < n \leqq x + 1,\ n \neq a
\end{cases}
$$

put the $n \leqq x + 1$ in correspondence with the $m \leqq x + 1$.

Now

$$
s(n) = s_2(s_1(n)) \quad \text{for } n \leqq x + 1.
$$

For under $s_2(s_1(n))$ there passes over

$$
\begin{aligned}
&1 \text{ via } 1 \text{ into } a = s(1), \\
&b \text{ via } a \text{ into } 1 = s(b), \\
&\text{every other } n \leqq x + 1 \text{ via } s(n) \text{ into } s(n).
\end{aligned}
$$

$s_1(n)$ leaves 1 unchanged, and $s_2(n)$ leaves $x + 1$ unchanged. Hence by 2) and 1) we have

$$
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(s(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_2(s_1(n))) = \sum_{n=1}^{x+1} \mathfrak{f}(s_1(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
$$

β) Let

$$
a = x + 1, \quad b < x + 1.
$$

Then

$$
s_3(n) = \begin{cases}
b & \text{for } n = 1, \\
1 & \text{for } n = b, \\
n & \text{for } 1 < n \leqq x + 1,\ n \neq b
\end{cases}
$$

puts the $n \leqq x + 1$ in correspondence with the $m \leqq x + 1$. Moreover

$$
s(n) = s_1(s_3(n)) \quad \text{for } n \leqq x + 1.
$$

For under $s_1(s_3(n))$ there passes over

$$
\begin{aligned}
&1 \text{ via } b \text{ into } a = s(1), \\
&b \text{ via } 1 \text{ into } 1 = s(b), \\
&\text{every other } n \leqq x + 1 \text{ via } n \text{ into } s(n).
\end{aligned}
$$

$s_3(n)$ leaves $x + 1$ unchanged. Hence by 1) and 2) we have

$$
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(s(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_1(s_3(n))) = \sum_{n=1}^{x+1} \mathfrak{f}(s_3(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
$$

γ) Let

$$
a = b = x + 1.
$$

If $x = 1$, then

$$
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(n)
$$

is trivial.

If $x > 1$, then

$$
s_4(n) = \begin{cases}
1 & \text{for } n = 1, \\
x + 1 & \text{for } n = x + 1, \\
s(n) & \text{for } 1 < n < x + 1
\end{cases}
$$

puts the $n \leqq x + 1$ in correspondence with the $m \leqq x + 1$. Consequently, by 1),

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

Therefore $x + 1$ belongs to $\mathfrak{M}$, and the theorem is proved.

In Definition 70 and Theorems 284 to 286, by way of exception, Latin letters denote integers (not necessarily positive).

**Definition 70:** Let

$$
y \leqq x,
$$

and let $\mathfrak{f}(n)$ be defined for

$$
y \leqq n \leqq x
$$

Then

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1).
$$

Any other letter denoting integers may also stand in place of $n$.

Observe that

$$
x + 1 > y; \quad y \leqq (n + y) - 1 \leqq x \quad \text{for } 1 \leqq n \leqq (x + 1) - y;
$$

furthermore, that for $y = 1$ Definition 70 is (as it must be) in agreement with Definition 69.

**Theorem 284:** Let

$$
y \leqq u < x;
$$

let $\mathfrak{f}(n)$ be defined for

$$
y \leqq n \leqq x
$$

Then

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=u+1}^{x} \mathfrak{f}(n).
$$

**Proof:** By Definition 70 and Theorem 281 we have

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1) = \sum_{n=1}^{(u+1)-y} \mathfrak{f}((n + y) - 1) \dotplus \sum_{n=1}^{x-u} \mathfrak{f}(((((u + 1) - y) + n) + y) - 1);
$$

for

$$
((u + 1) - y) + (x - u) = (x + (-u)) + ((u + 1) + (-y)) = (x + ((-u) + (u + 1))) + (-y) = (x + 1) - y.
$$

Now

$$
(((u + 1) - y) + n) + y = ((u + 1) - y) + (y + n) = (((u + 1) - y) + y) + n = n + (u + 1),
$$

hence by Definition 70

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=1}^{(x+1)-(u+1)} \mathfrak{f}((n + (u + 1)) - 1) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=u+1}^{x} \mathfrak{f}(n).
$$

**Theorem 285:** Let

$$
y \leqq x,
$$

and let $\mathfrak{f}(n)$ be defined for

$$
y \leqq n \leqq x
$$

Then

$$
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y+v}^{x+v} \mathfrak{f}(n - v).
$$

**Proof:** By Definition 70, the left-hand side of the assertion is

$$
= \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1),
$$

and the right-hand side (observe that $y \leqq n - v \leqq x$ for $y + v \leqq n \leqq x + v$) is

$$
= \sum_{n=1}^{((x+v)+1)-(y+v)} \mathfrak{f}(((n + (y + v)) - 1) - v);
$$

herein

$$
((x + v) + 1) - (y + v) = (1 + (x + v)) + ((-v) + (-y)) = (1 + ((x + v) + (-v))) + (-y) = (1 + x) - y = (x + 1) - y
$$

and

$$
\begin{aligned}
((n + (y + v)) - 1) - v &= (n + (y + v)) - (1 + v) = ((n + y) + v) + (-v + (-1)) \\
&= (((n + y) + v) + (-v)) + (-1) = ((n + y) + (v + (-v))) - 1 = (n + y) - 1.
\end{aligned}
$$

**Theorem 286:** Let

$$
y \leqq x,
$$

and let $\mathfrak{f}(n)$ be defined for

$$
y \leqq n \leqq x
$$

Let $s(n)$ put the $n$ with $y \leqq n \leqq x$ in correspondence with the $m$ with $y \leqq m \leqq x$. Then

$$
\sum_{n=y}^{x} \mathfrak{f}(s(n)) = \sum_{n=y}^{x} \mathfrak{f}(n).
$$

**Proof:**

$$
s_1(n) = s((n + y) - 1) - (y - 1)
$$

puts the positive $n \leqq (x + 1) - y$ in correspondence with the positive $m \leqq (x + 1) - y$. Hence by Theorem 283 we have

$$
\begin{aligned}
\sum_{n=y}^{x} \mathfrak{f}(s(n)) &= \sum_{n=1}^{(x+1)-y} \mathfrak{f}(s((n + y) - 1)) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}(s_1(n) + (y - 1)) \\
&= \sum_{n=1}^{(x+1)-y} \mathfrak{f}(n + (y - 1)) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1) = \sum_{n=y}^{x} \mathfrak{f}(n).
\end{aligned}
$$

In place of

$$
\sum_{n=y}^{x} \mathfrak{f}(n)
$$

the loose notation

$$
\mathfrak{f}(y) + \mathfrak{f}(y + 1) + \cdots + \mathfrak{f}(x)
$$

is also customary (and correspondingly for the product); but entirely unobjectionable is, e.g.,

$$
\mathfrak{f}(1) + \mathfrak{f}(1 + 1) + \mathfrak{f}((1 + 1) + 1) + \mathfrak{f}(((1 + 1) + 1) + 1),
$$

in other words

$$
\mathfrak{a} + \mathfrak{b} + \mathfrak{c} + \mathfrak{d}
$$

(which thus by definition reduces to the old addition and means

$$
((\mathfrak{a} + \mathfrak{b}) + \mathfrak{c}) + \mathfrak{d}
$$

), or, e.g.,

$$
\mathfrak{abcdfghiklmopqrstuvwxyz}.
$$

One may also without hesitation write, e.g.,

$$
\mathfrak{a} - \mathfrak{b} + \mathfrak{c}
$$

in the sense of

$$
\mathfrak{a} + (-\mathfrak{b}) + \mathfrak{c}
$$

since in any case

$$
\mathfrak{f}(1) + \mathfrak{f}(1 + 1) + \mathfrak{f}((1 + 1) + 1)
$$

with

$$
\mathfrak{f}(1) = \mathfrak{a}, \quad \mathfrak{f}(1 + 1) = -\mathfrak{b}, \quad \mathfrak{f}((1 + 1) + 1) = \mathfrak{c}
$$

is meant.

From now on, small Latin letters again denote positive integers.

**Theorem 287:** If $\mathfrak{f}(n)$ is defined for $n \leqq x$, then there is a $\Xi$ such that

$$
\left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| \leqq \Xi,
$$

$$
\sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] = [\Xi, 0].
$$

**Proof:** Let $\mathfrak{M}$ be the set of $x$ for which (for arbitrary $\mathfrak{f}(n)$) there is such a $\Xi$.

I) If $\mathfrak{f}(1)$ is defined, then

$$
\left| \sum_{n=1}^{1} \mathfrak{f}(n) \right| = |\mathfrak{f}(1)|,
$$

$$
\sum_{n=1}^{1} [|\mathfrak{f}(n)|, 0] = [|\mathfrak{f}(1)|, 0];
$$

hence

$$
\Xi = |\mathfrak{f}(1)|
$$

does what is required for $x = 1$. Hence 1 belongs to $\mathfrak{M}$.

II) Let $x$ belong to $\mathfrak{M}$. If $\mathfrak{f}(n)$ is defined for $n \leqq x + 1$, then there is a $\Xi_1$ with

$$
\left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| \leqq \Xi_1,
$$

$$
\sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] = [\Xi_1, 0].
$$

By Theorem 278 and Theorem 271 we have

$$
\left| \sum_{n=1}^{x+1} \mathfrak{f}(n) \right| = \left| \sum_{n=1}^{x} \mathfrak{f}(n) + \mathfrak{f}(x + 1) \right| \leqq \left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| + |\mathfrak{f}(x + 1)| \leqq \Xi_1 + |\mathfrak{f}(x + 1)|,
$$

hence, if we set

$$
\Xi = \Xi_1 + |\mathfrak{f}(x + 1)|
$$

then

$$
\left| \sum_{n=1}^{x+1} \mathfrak{f}(n) \right| \leqq \Xi.
$$

On the other hand, by Theorem 278,

$$
\sum_{n=1}^{x+1} [|\mathfrak{f}(n)|, 0] = \sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] + [|\mathfrak{f}(x + 1)|, 0] = [\Xi_1, 0] + [|\mathfrak{f}(x + 1)|, 0] = [\Xi_1 + |\mathfrak{f}(x + 1)|, 0 + 0] = [\Xi, 0].
$$

Hence $\Xi$ does what is required for $x + 1$; therefore $x + 1$ belongs to $\mathfrak{M}$, and the theorem is proved.

**Theorem 288:** If $\mathfrak{f}(n)$ is defined for $n \leqq x$, then

$$
\left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right|, 0 \right] = \prod_{n=1}^{x} [|\mathfrak{f}(n)|, 0].
$$

**Proof:** Let $\mathfrak{M}$ be the set of $x$ for which this holds.

I) If $\mathfrak{f}(1)$ is defined, then

$$
\left[ \left| \prod_{n=1}^{1} \mathfrak{f}(n) \right|, 0 \right] = [|\mathfrak{f}(1)|, 0] = \prod_{n=1}^{1} [|\mathfrak{f}(n)|, 0].
$$

Hence 1 belongs to $\mathfrak{M}$.

II) Let $x$ belong to $\mathfrak{M}$. If $\mathfrak{f}(n)$ is defined for $n \leqq x + 1$, then by Theorem 278 and Theorem 268

$$
\begin{aligned}
\prod_{n=1}^{x+1} [|\mathfrak{f}(n)|, 0] &= \prod_{n=1}^{x} [|\mathfrak{f}(n)|, 0] \cdot [|\mathfrak{f}(x + 1)|, 0] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right|, 0 \right] \cdot [|\mathfrak{f}(x + 1)|, 0] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot |\mathfrak{f}(x + 1)| - 0 \cdot 0,\ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot 0 + 0 \cdot |\mathfrak{f}(x + 1)| \right] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot |\mathfrak{f}(x + 1)|, 0 \right] = \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \cdot \mathfrak{f}(x + 1) \right|, 0 \right] \\
&= \left[ \left| \prod_{n=1}^{x+1} \mathfrak{f}(n) \right|, 0 \right],
\end{aligned}
$$

so that $x + 1$ belongs to $\mathfrak{M}$, and the theorem is proved.

**Theorem 289:** If $\mathfrak{f}(n)$ is defined for $n \leqq x$, then

$$
\prod_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{n}
$$

if and only if there exists an $n \leqq x$ with

$$
\mathfrak{f}(n) = \mathfrak{n}
$$

**Proof:** Let $\mathfrak{M}$ be the set of $x$ for which this holds.

I)

$$
\prod_{n=1}^{1} \mathfrak{f}(n) = \mathfrak{n}
$$

is identical with

$$
\mathfrak{f}(1) = \mathfrak{n}
$$

Hence 1 belongs to $\mathfrak{M}$.

II) Let $x$ belong to $\mathfrak{M}$.

$$
\prod_{n=1}^{x+1} \mathfrak{f}(n) = \mathfrak{n}
$$

means

$$
\prod_{n=1}^{x} \mathfrak{f}(n) \cdot \mathfrak{f}(x + 1) = \mathfrak{n};
$$

by Theorem 221, necessary and sufficient for this is

$$
\prod_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{n} \quad \text{or} \quad \mathfrak{f}(x + 1) = \mathfrak{n},
$$

hence (since $x$ belongs to $\mathfrak{M}$) necessary and sufficient is

$$
\mathfrak{f}(n) = \mathfrak{n} \quad \text{for ein } n \leqq x \text{ or for } n = x + 1.
$$

Hence $x + 1$ belongs to $\mathfrak{M}$, and the theorem is proved.

## § 9. Powers

In this section, small Latin letters shall denote integers.

**Definition 71:**

$$
\mathfrak{x}^x = \begin{cases}
\displaystyle\prod_{n=1}^{x} \mathfrak{x} & \text{for } x > 0, \\
\mathfrak{e} & \text{for } \mathfrak{x} \neq \mathfrak{n},\ x = 0, \\
\dfrac{\mathfrak{e}}{\mathfrak{x}^{|x|}} & \text{for } \mathfrak{x} \neq \mathfrak{n},\ x < 0.
\end{cases}
$$

(Read: $\mathfrak{x}$ to the power $x$.) Thus $\mathfrak{x}^x$ is undefined only for

$$
\mathfrak{x} = \mathfrak{n}, \quad x \leqq 0.
$$

Observe that for

$$
\mathfrak{x} \neq \mathfrak{n}, \quad x < 0
$$

we have, by the first line of Definition 71 and Theorem 289,

$$
\mathfrak{x}^{|x|} \neq \mathfrak{n},
$$

so that $\frac{\mathfrak{e}}{\mathfrak{x}^{|x|}}$ then has a meaning.

**Theorem 290:** For

$$
\mathfrak{x} \neq \mathfrak{n}
$$

we have

$$
\mathfrak{x}^x \neq \mathfrak{n}.
$$

**Proof:** For $x > 0$ this follows from Theorem 289, for $x = 0$ from the definition, and for $x < 0$ from

$$
\mathfrak{x}^x \mathfrak{x}^{|x|} \neq \mathfrak{n}.
$$

**Theorem 291:** $\mathfrak{x}^1 = \mathfrak{x}$.

**Proof:**

$$
\mathfrak{x}^1 = \prod_{n=1}^{1} \mathfrak{x} = \mathfrak{x}.
$$

**Theorem 292:** Let

$$
x > 0
$$

or

$$
\mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}.
$$

Then

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
$$

**Preliminary Remark:** Both sides have a meaning in any case; for if $x \leqq 0$ then

$$
\mathfrak{x}\mathfrak{y} \neq \mathfrak{n}.
$$

**Proof:** 1) For fixed $\mathfrak{x}$, $\mathfrak{y}$, let $\mathfrak{M}$ be the set of $x > 0$ with

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
$$

I) By Theorem 291,

$$
(\mathfrak{x}\mathfrak{y})^1 = \mathfrak{x}\mathfrak{y} = \mathfrak{x}^1 \mathfrak{y}^1,
$$

so that 1 belongs to $\mathfrak{M}$.

II) If $x$ belongs to $\mathfrak{M}$, then

$$
\begin{aligned}
(\mathfrak{x}\mathfrak{y})^{x+1} &= \prod_{n=1}^{x+1} (\mathfrak{x}\mathfrak{y}) = \prod_{n=1}^{x} (\mathfrak{x}\mathfrak{y}) \cdot (\mathfrak{x}\mathfrak{y}) = (\mathfrak{x}^x \mathfrak{y}^x)(\mathfrak{x}\mathfrak{y}) = (\mathfrak{x}^x \mathfrak{x})(\mathfrak{y}^x \mathfrak{y}) \\
&= \left(\prod_{n=1}^{x} \mathfrak{x} \cdot \mathfrak{x}\right)\left(\prod_{n=1}^{x} \mathfrak{y} \cdot \mathfrak{y}\right) = \prod_{n=1}^{x+1} \mathfrak{x} \cdot \prod_{n=1}^{x+1} \mathfrak{y} = \mathfrak{x}^{x+1} \mathfrak{y}^{x+1},
\end{aligned}
$$

so that $x + 1$ belongs to $\mathfrak{M}$.

Hence for $x > 0$ we always have

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
$$

2) Let

$$
x = 0, \quad \mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}.
$$

Then

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{e} = \mathfrak{e}\mathfrak{e} = \mathfrak{x}^x \mathfrak{y}^x.
$$

3) Let

$$
x < 0, \quad \mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}.
$$

By 1),

$$
(\mathfrak{x}\mathfrak{y})^{|x|} = \mathfrak{x}^{|x|} \mathfrak{y}^{|x|},
$$

$$
\frac{\mathfrak{e}}{(\mathfrak{x}\mathfrak{y})^{|x|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|} \mathfrak{y}^{|x|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|}} \cdot \frac{\mathfrak{e}}{\mathfrak{y}^{|x|}},
$$

$$
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
$$

**Theorem 293:** $\mathfrak{e}^x = \mathfrak{e}$.

**Proof:** By Theorem 292,

$$
\mathfrak{e}^x \mathfrak{e} = \mathfrak{e}^x = (\mathfrak{e}\mathfrak{e})^x = \mathfrak{e}^x \mathfrak{e}^x,
$$

$$
\mathfrak{n} = \mathfrak{e}^x \mathfrak{e}^x - \mathfrak{e}^x \mathfrak{e} = \mathfrak{e}^x (\mathfrak{e}^x - \mathfrak{e}),
$$

hence (by Theorem 290 and Theorem 221)

$$
\mathfrak{e}^x - \mathfrak{e} = \mathfrak{n},
$$

$$
\mathfrak{e}^x = \mathfrak{e}.
$$

**Theorem 294:** Let

$$
x > 0, \quad y > 0
$$

or

$$
\mathfrak{x} \neq \mathfrak{n}.
$$

Then

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^{x+y}.
$$

**Proof:** 1) Let

$$
x > 0, \quad y > 0.
$$

Then by Theorem 281,

$$
\mathfrak{x}^x \mathfrak{x}^y = \prod_{n=1}^{x} \mathfrak{x} \cdot \prod_{n=1}^{y} \mathfrak{x} = \prod_{n=1}^{x+y} \mathfrak{x} = \mathfrak{x}^{x+y}.
$$

2) Let

$$
\mathfrak{x} \neq \mathfrak{n}
$$

and not both

$$
x > 0, \quad y > 0.
$$

α) Let

$$
x < 0, \quad y < 0.
$$

Then by 1),

$$
\mathfrak{x}^{|x|} \mathfrak{x}^{|y|} = \mathfrak{x}^{|x|+|y|} = \mathfrak{x}^{|x+y|},
$$

$$
\mathfrak{x}^x \mathfrak{x}^y = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|}} \cdot \frac{\mathfrak{e}}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|} \mathfrak{x}^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x+y|}} = \mathfrak{x}^{x+y}.
$$

β) Let

$$
x > 0, \quad y < 0.
$$

Then

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^x \frac{\mathfrak{e}}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}}.
$$

A) For

$$
x > |y|
$$

we have, by 1),

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{x}^{|y|} \mathfrak{x}^{x-|y|}}{\mathfrak{x}^{|y|}} = \mathfrak{x}^{x-|y|} = \mathfrak{x}^{x+y}.
$$

B) For

$$
x = |y|
$$

we have

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \mathfrak{e} = \mathfrak{x}^0 = \mathfrak{x}^{x+y}.
$$

C) For

$$
x < |y|
$$

we have, by 1),

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \mathfrak{x}^x \frac{\mathfrak{e}}{\mathfrak{x}^x \mathfrak{x}^{|y|-x}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|y|-x}} = \mathfrak{x}^{x-|y|} = \mathfrak{x}^{x+y}.
$$

γ) Let

$$
x < 0, \quad y > 0.
$$

Then by β),

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^y \mathfrak{x}^x = \mathfrak{x}^{y+x} = \mathfrak{x}^{x+y}.
$$

δ) Let

$$
x = 0.
$$

Then

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{e} \mathfrak{x}^y = \mathfrak{x}^y = \mathfrak{x}^{0+y} = \mathfrak{x}^{x+y}.
$$

ε) Let

$$
x \neq 0, \quad y = 0.
$$

Then by δ),

$$
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^y \mathfrak{x}^x = \mathfrak{x}^{y+x} = \mathfrak{x}^{x+y}.
$$

**Theorem 295:** For

$$
\mathfrak{x} \neq \mathfrak{n}
$$

we have

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^y} = \mathfrak{x}^{x-y}.
$$

**Proof:** By Theorem 294,

$$
\mathfrak{x}^{x-y} \mathfrak{x}^y = \mathfrak{x}^{(x-y)+y} = \mathfrak{x}^x;
$$

by Theorem 290,

$$
\mathfrak{x}^y \neq \mathfrak{n},
$$

hence

$$
\frac{\mathfrak{x}^x}{\mathfrak{x}^y} = \mathfrak{x}^{x-y}.
$$

**Theorem 296:** For

$$
\mathfrak{x} \neq \mathfrak{n}
$$

we have

$$
\frac{\mathfrak{e}}{\mathfrak{x}^x} = \mathfrak{x}^{-x}.
$$

**Proof:** By Theorem 295,

$$
\frac{\mathfrak{e}}{\mathfrak{x}^x} = \frac{\mathfrak{x}^0}{\mathfrak{x}^x} = \mathfrak{x}^{0-x} = \mathfrak{x}^{-x}.
$$

**Theorem 297:** Let

$$
x > 0, \quad y > 0
$$

or

$$
\mathfrak{x} \neq \mathfrak{n}.
$$

Then

$$
(\mathfrak{x}^x)^y = \mathfrak{x}^{xy}.
$$

**Proof:** 1) Let

$$
\mathfrak{x} = \mathfrak{n}, \quad x > 0, \quad y > 0.
$$

Then by Theorem 289,

$$
(\mathfrak{x}^x)^y = (\mathfrak{n}^x)^y = \mathfrak{n}^y = \mathfrak{n} = \mathfrak{n}^{xy} = \mathfrak{x}^{xy}.
$$

2) Let

$$
\mathfrak{x} \neq \mathfrak{n}.
$$

a) For fixed $\mathfrak{x}$, $x$, let $\mathfrak{M}$ be the set of $y > 0$ with

$$
(\mathfrak{x}^x)^y = \mathfrak{x}^{xy}.
$$

I) $(\mathfrak{x}^x)^1 = \mathfrak{x}^x = \mathfrak{x}^{x \cdot 1}$;

hence 1 belongs to $\mathfrak{M}$.

II) Let $y$ belong to $\mathfrak{M}$. Then by Theorem 294,

$$
(\mathfrak{x}^x)^{y+1} = (\mathfrak{x}^x)^y (\mathfrak{x}^x)^1 = \mathfrak{x}^{xy} \mathfrak{x}^x = \mathfrak{x}^{xy+x} = \mathfrak{x}^{x(y+1)},
$$

so that $y + 1$ belongs to $\mathfrak{M}$.

Hence the assertion is true for $y > 0$.

b) Let

$$
y = 0.
$$

Then

$$
(\mathfrak{x}^x)^y = \mathfrak{e} = \mathfrak{x}^{xy}.
$$

c) Let

$$
y < 0.
$$

Then by a),

$$
(\mathfrak{x}^x)^{|y|} = \mathfrak{x}^{x|y|},
$$

hence by Theorem 296 and a),

$$
(\mathfrak{x}^x)^y = \frac{\mathfrak{e}}{(\mathfrak{x}^x)^{-y}} = \frac{\mathfrak{e}}{(\mathfrak{x}^x)^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{x|y|}} = \mathfrak{x}^{-(x|y|)} = \mathfrak{x}^{xy}.
$$

## § 10. Incorporation of the Real Numbers

**Theorem 298:**

$$
\begin{aligned}
[\Xi + H, 0] &= [\Xi, 0] + [H, 0]; \\
[\Xi - H, 0] &= [\Xi, 0] - [H, 0]; \\
[\Xi H, 0] &= [\Xi, 0][H, 0]; \\
\left[\frac{\Xi}{H}, 0\right] &= \frac{[\Xi, 0]}{[H, 0]}, \quad \text{if } H \neq 0; \\
[-\Xi, 0] &= -[\Xi, 0]; \\
|[\Xi, 0]| &= |\Xi|.
\end{aligned}
$$

**Proof:** 1)

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

4) By 3), if $H \neq 0$,

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

**Theorem 299:** The complex numbers of the form $[x, 0]$ satisfy the five axioms of the natural numbers, if $[1, 0]$ is taken in place of 1 and we set

$$
[x, 0]' = [x', 0].
$$

**Proof:** Let $[\mathfrak{Z}]$ be the set of the $[x, 0]$.

1) $[1, 0]$ belongs to $[\mathfrak{Z}]$.

2) Along with $[x, 0]$, $[x, 0]'$ exists in $[\mathfrak{Z}]$.

3) We always have

$$
x' \neq 1,
$$

hence

$$
[x', 0] \neq [1, 0],
$$

$$
[x, 0]' \neq [1, 0].
$$

4) From

$$
[x, 0]' = [y, 0]'
$$

it follows that

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
[x, 0] = [y, 0].
$$

5) Let a set $[\mathfrak{M}]$ of numbers from $[\mathfrak{Z}]$ have the properties:

I) $[1, 0]$ belongs to $[\mathfrak{M}]$.

II) If $[x, 0]$ belongs to $[\mathfrak{M}]$, then $[x, 0]'$ belongs to $[\mathfrak{M}]$.

Then let $\mathfrak{M}$ denote the set of the $x$ for which $[x, 0]$ belongs to $[\mathfrak{M}]$. Then 1 belongs to $\mathfrak{M}$, and along with every $x$ of $\mathfrak{M}$, $x'$ also belongs to $\mathfrak{M}$. Hence every positive integer $x$ belongs to $\mathfrak{M}$, hence every $[x, 0]$ belongs to $[\mathfrak{M}]$.

Since the sum, difference, product and (provided it exists) quotient of two $[\Xi, 0]$ correspond, by Theorem 298, to the old concepts, and likewise the symbols $-[\Xi, 0]$ and $|[\Xi, 0]|$; and since one can define

$$
[\Xi, 0] > [H, 0] \quad \text{for } \Xi > H,
$$

$$
[\Xi, 0] < [H, 0] \quad \text{for } \Xi < H,
$$

the complex numbers $[\Xi, 0]$ therefore have all the properties which we proved in Chapter 4 for real numbers, and in particular the numbers $[x, 0]$ have all the proved properties of the positive integers.

Therefore we throw away the real numbers, replace them by the corresponding complex numbers $[\Xi, 0]$, and need speak only of complex numbers. (The real numbers remain, however, in pairs within the concept of the complex number.)

**Definition 72:** (The symbol thus set free) $\Xi$ denotes the complex number $[\Xi, 0]$, to which the term real number is also carried over. Likewise, $[\Xi, 0]$ for integral $\Xi$ is now called an integer, for rational $\Xi$ a rational number, for irrational $\Xi$ an irrational number, for positive $\Xi$ a positive number, for negative $\Xi$ a negative number.

Thus we write, e.g., 0 instead of $\mathfrak{n}$, 1 instead of $\mathfrak{e}$.

From now on we may denote the complex numbers by small or capital letters of arbitrary alphabets (even promiscuously). For the following special number, however, a small Latin letter is customary, on account of

**Definition 73:** $i = [0, 1]$.

**Theorem 300:** $i \cdot i = -1$.

**Proof:**

$$
i \cdot i = [0, 1][0, 1] = [0 \cdot 0 - 1 \cdot 1, 0 \cdot 1 + 1 \cdot 0] = [-1, 0] = -1.
$$

**Theorem 301:** For real $u_1$, $u_2$ we have

$$
u_1 + u_2 i = [u_1, u_2].
$$

Hence to every complex number $x$ there corresponds exactly one pair of real numbers $u_1$, $u_2$ with

$$
x = u_1 + u_2 i.
$$

**Proof:** For real $u_1$, $u_2$ we have

$$
u_1 + u_2 i = [u_1, 0] + [u_2, 0][0, 1] = [u_1, 0] + [u_2 \cdot 0 - 0 \cdot 1, u_2 \cdot 1 + 0 \cdot 0] = [u_1, 0] + [0, u_2] = [u_1, u_2].
$$

By Theorem 301 the symbol $[\ ]$ has become unnecessary; the complex numbers are simply the numbers $u_1 + u_2 i$, where $u_1$ and $u_2$ are real; to equal resp. distinct pairs $u_1$, $u_2$ there correspond equal resp. distinct numbers, and the sum, difference, product of two complex numbers $u_1 + u_2 i$, $v_1 + v_2 i$ (where $u_1$, $u_2$, $v_1$, $v_2$ are real) are formed according to the formulas

$$
\begin{aligned}
(u_1 + u_2 i) + (v_1 + v_2 i) &= (u_1 + v_1) + (u_2 + v_2) i, \\
(u_1 + u_2 i) - (v_1 + v_2 i) &= (u_1 - v_1) + (u_2 - v_2) i, \\
(u_1 + u_2 i)(v_1 + v_2 i) &= (u_1 v_1 - u_2 v_2) + (u_1 v_2 + u_2 v_1) i.
\end{aligned}
$$

One need not even remember these formulas, but only that the laws of the real numbers remain valid and that Theorem 300 holds; accordingly one simply computes as follows:

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

As for division, the computation yields, if $v_1$ and $v_2$ are not both 0,

$$
\begin{aligned}
\frac{u_1 + u_2 i}{v_1 + v_2 i} &= \frac{(u_1 + u_2 i)(v_1 - v_2 i)}{(v_1 + v_2 i)(v_1 - v_2 i)} = \frac{(u_1 v_1 + u_2 v_2) + (-(u_1 v_2) + u_2 v_1) i}{(v_1 v_1 + v_2 v_2) + (-(v_1 v_2) + v_2 v_1) i} \\
&= \frac{(u_1 v_1 + u_2 v_2) + (-(u_1 v_2) + u_2 v_1) i}{v_1 v_1 + v_2 v_2} = \frac{u_1 v_1 + u_2 v_2}{v_1 v_1 + v_2 v_2} + \frac{-(u_1 v_2) + u_2 v_1}{v_1 v_1 + v_2 v_2}\, i
\end{aligned}
$$

as the canonical representation in the sense of Theorem 301.
