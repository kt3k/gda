# Kapitel 2. Brüche

## § 1. Definition und Äquivalenz

**Definition 7:** Unter einem Bruch $\frac{x_1}{x_2}$ (sprich: $x_1$ über $x_2$) versteht man das Paar der natürlichen Zahlen $x_1$, $x_2$ (in dieser Reihenfolge).

**Definition 8:**

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
```

($\sim$ sprich: äquivalent), wenn

```math
x_1 y_2 = y_1 x_2.
```

**Satz 37:**

```math
\frac{x_1}{x_2} \sim \frac{x_1}{x_2}.
```

**Beweis:**

```math
x_1 x_2 = x_1 x_2.
```

**Satz 38:** Aus

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
```

folgt

```math
\frac{y_1}{y_2} \sim \frac{x_1}{x_2}.
```

**Beweis:**

```math
x_1 y_2 = y_1 x_2,
```

also

```math
y_1 x_2 = x_1 y_2.
```

**Satz 39:** Aus

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} \sim \frac{z_1}{z_2}
```

folgt

```math
\frac{x_1}{x_2} \sim \frac{z_1}{z_2}.
```

**Beweis:**

```math
x_1 y_2 = y_1 x_2, \quad y_1 z_2 = z_1 y_2,
```

also

```math
(x_1 y_2)(y_1 z_2) = (y_1 x_2)(z_1 y_2).
```

Stets ist

```math
(x y)(z u) = x(y(z u)) = x((y z) u) = x(u(y z)) = (x u)(y z) = (x u)(z y);
```

daher ist

```math
(x_1 y_2)(y_1 z_2) = (x_1 z_2)(y_1 y_2)
```

und

```math
(y_1 x_2)(z_1 y_2) = (y_1 y_2)(z_1 x_2) = (z_1 x_2)(y_1 y_2),
```

folglich nach dem Obigen

```math
(x_1 z_2)(y_1 y_2) = (z_1 x_2)(y_1 y_2),
```

```math
x_1 z_2 = z_1 x_2.
```

Auf Grund der Sätze 37 bis 39 zerfallen alle Brüche in Klassen, so daß

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
```

dann und nur dann, wenn $\frac{x_1}{x_2}$ und $\frac{y_1}{y_2}$ derselben Klasse angehören.

**Satz 40:**

```math
\frac{x_1}{x_2} \sim \frac{x_1 x}{x_2 x}.
```

**Beweis:**

```math
x_1(x_2 x) = x_1(x x_2) = (x_1 x) x_2.
```

## § 2. Ordnung

**Definition 9:**

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}
```

($>$ sprich: größer als), wenn

```math
x_1 y_2 > y_1 x_2.
```

**Definition 10:**

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}
```

($<$ sprich: kleiner als), wenn

```math
x_1 y_2 < y_1 x_2.
```

**Satz 41:** Sind $\frac{x_1}{x_2}$, $\frac{y_1}{y_2}$ beliebig, so liegt genau einer der Fälle

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} < \frac{y_1}{y_2}
```

vor.

**Beweis:** Es liegt für $x_1$, $x_2$, $y_1$, $y_2$ genau einer der Fälle

```math
x_1 y_2 = y_1 x_2, \quad x_1 y_2 > y_1 x_2, \quad x_1 y_2 < y_1 x_2
```

vor.

**Satz 42:** Aus

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}
```

folgt

```math
\frac{y_1}{y_2} < \frac{x_1}{x_2}.
```

**Beweis:** Aus

```math
x_1 y_2 > y_1 x_2
```

folgt

```math
y_1 x_2 < x_1 y_2.
```

**Satz 43:** Aus

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}
```

folgt

```math
\frac{y_1}{y_2} > \frac{x_1}{x_2}.
```

**Beweis:** Aus

```math
x_1 y_2 < y_1 x_2
```

folgt

```math
y_1 x_2 > x_1 y_2.
```

**Satz 44:** Aus

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
```

folgt

```math
\frac{z_1}{z_2} > \frac{u_1}{u_2}.
```

**Vorbemerkung:** Ist also ein Bruch einer Klasse größer als ein Bruch einer anderen Klasse, so gilt dies für alle Repräsentantenpaare der beiden Klassen.

**Beweis:**

```math
y_1 u_2 = u_1 y_2, \quad z_1 x_2 = x_1 z_2, \quad x_1 y_2 > y_1 x_2,
```

also

```math
(y_1 u_2)(z_1 x_2) = (u_1 y_2)(x_1 z_2),
```

also nach Satz 32

```math
(y_1 x_2)(z_1 u_2) = (u_1 z_2)(x_1 y_2) > (u_1 z_2)(y_1 x_2),
```

also nach Satz 33

```math
z_1 u_2 > u_1 z_2.
```

**Satz 45:** Aus

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
```

folgt

```math
\frac{z_1}{z_2} < \frac{u_1}{u_2}.
```

**Vorbemerkung:** Ist also ein Bruch einer Klasse kleiner als ein Bruch einer anderen Klasse, so gilt dies für alle Repräsentantenpaare der beiden Klassen.

**Beweis:** Nach Satz 43 ist

```math
\frac{y_1}{y_2} > \frac{x_1}{x_2};
```

wegen

```math
\frac{y_1}{y_2} \sim \frac{u_1}{u_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}
```

ist also nach Satz 44

```math
\frac{u_1}{u_2} > \frac{z_1}{z_2},
```

also nach Satz 42

```math
\frac{z_1}{z_2} < \frac{u_1}{u_2}.
```

**Definition 11:**

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}
```

bedeutet

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{oder}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2}.
```

($\gtrsim$ sprich: größer oder äquivalent.)

**Definition 12:**

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}
```

bedeutet

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2} \quad\text{oder}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2}.
```

($\lesssim$ sprich: kleiner oder äquivalent.)

**Satz 46:** Aus

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
```

folgt

```math
\frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}.
```

**Beweis:** Mit $>$ in der Voraussetzung ist dies durch Satz 44 klar; anderenfalls ist

```math
\frac{z_1}{z_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \sim \frac{u_1}{u_2}.
```

**Satz 47:** Aus

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}, \quad \frac{x_1}{x_2} \sim \frac{z_1}{z_2}, \quad \frac{y_1}{y_2} \sim \frac{u_1}{u_2}
```

folgt

```math
\frac{z_1}{z_2} \lesssim \frac{u_1}{u_2}.
```

**Beweis:** Mit $<$ in der Voraussetzung ist dies durch Satz 45 klar; anderenfalls ist

```math
\frac{z_1}{z_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \sim \frac{u_1}{u_2}.
```

**Satz 48:** Aus

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}
```

folgt

```math
\frac{y_1}{y_2} \lesssim \frac{x_1}{x_2}.
```

**Beweis:** Satz 38 und Satz 42.

**Satz 49:** Aus

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}
```

folgt

```math
\frac{y_1}{y_2} \gtrsim \frac{x_1}{x_2}.
```

**Beweis:** Satz 38 und Satz 43.

**Satz 50** (Transitivität der Ordnung): Aus

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} < \frac{z_1}{z_2}
```

folgt

```math
\frac{x_1}{x_2} < \frac{z_1}{z_2}.
```

**Beweis:**

```math
x_1 y_2 < y_1 x_2, \quad y_1 z_2 < z_1 y_2,
```

also

```math
(x_1 y_2)(y_1 z_2) < (y_1 x_2)(z_1 y_2),
```

```math
(x_1 z_2)(y_1 y_2) < (z_1 x_2)(y_1 y_2),
```

```math
x_1 z_2 < z_1 x_2.
```

**Satz 51:** Aus

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} < \frac{z_1}{z_2} \quad\text{oder}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} \lesssim \frac{z_1}{z_2}
```

folgt

```math
\frac{x_1}{x_2} < \frac{z_1}{z_2}.
```

**Beweis:** Mit dem Aquivalenzzeichen in der Voraussetzung durch Satz 45, sonst durch Satz 50 erledigt.

**Satz 52:** Aus

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}, \quad \frac{y_1}{y_2} \lesssim \frac{z_1}{z_2}
```

folgt

```math
\frac{x_1}{x_2} \lesssim \frac{z_1}{z_2}.
```

**Beweis:** Mit zwei Äquivalenzzeichen in der Voraussetzung durch Satz 39, sonst durch Satz 51 erledigt.

**Satz 53:** Zu $\frac{x_1}{x_2}$ gibt es ein

```math
\frac{z_1}{z_2} > \frac{x_1}{x_2}.
```

**Beweis:**

```math
(x_1 + x_1) x_2 = x_1 x_2 + x_1 x_2 > x_1 x_2,
```

```math
\frac{x_1 + x_1}{x_2} > \frac{x_1}{x_2}.
```

**Satz 54:** Zu $\frac{x_1}{x_2}$ gibt es ein

```math
\frac{z_1}{z_2} < \frac{x_1}{x_2}.
```

**Beweis:**

```math
x_1 x_2 < x_1 x_2 + x_1 x_2 = x_1(x_2 + x_2),
```

```math
\frac{x_1}{x_2 + x_2} < \frac{x_1}{x_2}.
```

**Satz 55:** Ist

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2},
```

so gibt es ein $\frac{z_1}{z_2}$ mit

```math
\frac{x_1}{x_2} < \frac{z_1}{z_2} < \frac{y_1}{y_2}.
```

**Beweis:**

```math
x_1 y_2 < y_1 x_2,
```

also

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

**Definition 13:** Unter $\frac{x_1}{x_2} + \frac{y_1}{y_2}$ ($+$ sprich: plus) versteht man den Bruch $\frac{x_1 y_2 + y_1 x_2}{x_2 y_2}$.

Er heißt die Summe von $\frac{x_1}{x_2}$ und $\frac{y_1}{y_2}$ oder der durch Addition von $\frac{y_1}{y_2}$ zu $\frac{x_1}{x_2}$ entstehende Bruch.

**Satz 56:** Aus

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \sim \frac{u_1}{u_2}
```

folgt

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Vorbemerkung:** Die Klasse der Summe hängt also nur von den Klassen ab, zu denen die „Summanden“ gehören.

**Beweis:**

```math
x_1 y_2 = y_1 x_2, \quad z_1 u_2 = u_1 z_2,
```

also

```math
(x_1 y_2)(z_2 u_2) = (y_1 x_2)(z_2 u_2), \quad (z_1 u_2)(x_2 y_2) = (u_1 z_2)(x_2 y_2),
```

also

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

**Satz 57:**

```math
\frac{x_1}{x} + \frac{x_2}{x} \sim \frac{x_1 + x_2}{x}.
```

**Beweis:** Nach Definition 13 und Satz 40 ist

```math
\frac{x_1}{x} + \frac{x_2}{x} \sim \frac{x_1 x + x_2 x}{x x} \sim \frac{(x_1 + x_2) x}{x x} \sim \frac{x_1 + x_2}{x}.
```

**Satz 58** (kommutatives Gesetz der Addition):

```math
\frac{x_1}{x_2} + \frac{y_1}{y_2} \sim \frac{y_1}{y_2} + \frac{x_1}{x_2}.
```

**Beweis:**

```math
\frac{x_1}{x_2} + \frac{y_1}{y_2} \sim \frac{x_1 y_2 + y_1 x_2}{x_2 y_2} \sim \frac{y_1 x_2 + x_1 y_2}{y_2 x_2} \sim \frac{y_1}{y_2} + \frac{x_1}{x_2}.
```

**Satz 59** (assoziatives Gesetz der Addition):

```math
\left(\frac{x_1}{x_2} + \frac{y_1}{y_2}\right) + \frac{z_1}{z_2} \sim \frac{x_1}{x_2} + \left(\frac{y_1}{y_2} + \frac{z_1}{z_2}\right).
```

**Beweis:**

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

**Satz 60:**

```math
\frac{x_1}{x_2} + \frac{y_1}{y_2} > \frac{x_1}{x_2}.
```

**Beweis:**

```math
x_1 y_2 + y_1 x_2 > x_1 y_2,
```

```math
(x_1 y_2 + y_1 x_2) x_2 > (x_1 y_2) x_2 = x_1(y_2 x_2) = x_1(x_2 y_2),
```

```math
\frac{x_1}{x_2} + \frac{y_1}{y_2} \sim \frac{x_1 y_2 + y_1 x_2}{x_2 y_2} > \frac{x_1}{x_2}.
```

**Satz 61:** Aus

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}
```

folgt

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2}.
```

**Beweis:** Aus

```math
x_1 y_2 > y_1 x_2
```

folgt

```math
(x_1 y_2) z_2 > (y_1 x_2) z_2.
```

Wegen

```math
(x y) z = x(y z) = x(z y) = (x z) y
```

ist also

```math
(x_1 z_2) y_2 > (y_1 z_2) x_2
```

und

```math
(z_1 x_2) y_2 = (z_1 y_2) x_2,
```

also

```math
(x_1 z_2 + z_1 x_2) y_2 > (y_1 z_2 + z_1 y_2) x_2,
```

```math
(x_1 z_2 + z_1 x_2)(y_2 z_2) > (y_1 z_2 + z_1 y_2)(x_2 z_2),
```

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{x_1 z_2 + z_1 x_2}{x_2 z_2} > \frac{y_1 z_2 + z_1 y_2}{y_2 z_2} \sim \frac{y_1}{y_2} + \frac{z_1}{z_2}.
```

**Satz 62:** Aus

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}
```

folgt

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} < \frac{y_1}{y_2} + \frac{z_1}{z_2}.
```

**Beweis:** Der erste Teil ist Satz 61, der zweite in Satz 56 enthalten, der dritte eine Folge des ersten wegen

```math
\frac{y_1}{y_2} > \frac{x_1}{x_2},
```

```math
\frac{y_1}{y_2} + \frac{z_1}{z_2} > \frac{x_1}{x_2} + \frac{z_1}{z_2},
```

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} < \frac{y_1}{y_2} + \frac{z_1}{z_2}.
```

**Satz 63:** Aus

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} \sim \frac{y_1}{y_2} + \frac{z_1}{z_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} + \frac{z_1}{z_2} < \frac{y_1}{y_2} + \frac{z_1}{z_2}
```

folgt

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}.
```

**Beweis:** Folgt aus Satz 62, da die drei Fälle beide Male sich ausschließen und alle Möglichkeiten erschöpfen.

**Satz 64:** Aus

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2}
```

folgt

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Beweis:** Nach Satz 61 ist

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{z_1}{z_2}
```

und

```math
\frac{y_1}{y_2} + \frac{z_1}{z_2} \sim \frac{z_1}{z_2} + \frac{y_1}{y_2} > \frac{u_1}{u_2} + \frac{y_1}{y_2} \sim \frac{y_1}{y_2} + \frac{u_1}{u_2},
```

also

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Satz 65:** Aus

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2} \quad\text{oder}\quad \frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
```

folgt

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} > \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Beweis:** Mit dem Äquivalenzzeichen in der Voraussetzung durch Satz 56 und Satz 61, sonst durch Satz 64 erledigt.

**Satz 66:** Aus

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
```

folgt

```math
\frac{x_1}{x_2} + \frac{z_1}{z_2} \gtrsim \frac{y_1}{y_2} + \frac{u_1}{u_2}.
```

**Beweis:** Mit zwei Äquivalenzzeichen in der Voraussetzung durch Satz 56, sonst durch Satz 65 erledigt.

**Satz 67:** Ist

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2},
```

so hat

```math
\frac{y_1}{y_2} + \frac{u_1}{u_2} \sim \frac{x_1}{x_2}
```

eine Lösung $\frac{u_1}{u_2}$. Sind $\frac{u_1}{u_2}$ und $\frac{w_1}{w_2}$ Lösungen, so ist

```math
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
```

**Vorbemerkung:** Für

```math
\frac{x_1}{x_2} \lesssim \frac{y_1}{y_2}
```

gibt es nach Satz 60 keine Lösung.

**Beweis:** Die zweite Behauptung folgt unmittelbar aus Satz 63; denn für

```math
\frac{y_1}{y_2} + \frac{u_1}{u_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} + \frac{w_1}{w_2}
```

ist nach jenem Satz

```math
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
```

Die Existenz eines $\frac{u_1}{u_2}$ (erste Behauptung) ergibt sich folgendermaßen. Es ist

```math
x_1 y_2 > y_1 x_2.
```

Es werde $u$ aus

```math
x_1 y_2 = y_1 x_2 + u
```

bestimmt und

```math
u_1 = u, \quad u_2 = x_2 y_2
```

gesetzt. Dann ist $\frac{u_1}{u_2}$ Lösung wegen

```math
\frac{y_1}{y_2} + \frac{u_1}{u_2} \sim \frac{y_1}{y_2} + \frac{u}{x_2 y_2} \sim \frac{y_1 x_2 + u}{x_2 y_2} \sim \frac{x_1 y_2}{x_2 y_2} \sim \frac{x_1}{x_2}.
```

**Definition 14:** Das beim Beweise des Satzes 67 konstruierte spezielle $\frac{u_1}{u_2}$ heißt $\frac{x_1}{x_2} - \frac{y_1}{y_2}$ ($-$ sprich: minus) oder die Differenz $\frac{x_1}{x_2}$ minus $\frac{y_1}{y_2}$ oder der durch Subtraktion des Bruches $\frac{y_1}{y_2}$ vom Bruche $\frac{x_1}{x_2}$ entstehende Bruch.

Aus

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2} + \frac{u_1}{u_2}
```

folgt also

```math
\frac{u_1}{u_2} \sim \frac{x_1}{x_2} - \frac{y_1}{y_2}.
```

## § 4. Multiplikation

**Definition 15:** Unter $\frac{x_1}{x_2} \cdot \frac{y_1}{y_2}$ ($\cdot$ sprich: mal; aber man schreibt den Punkt meist nicht) versteht man den Bruch $\frac{x_1 y_1}{x_2 y_2}$.

Er heißt das Produkt von $\frac{x_1}{x_2}$ mit $\frac{y_1}{y_2}$ oder der durch Multiplikation von $\frac{x_1}{x_2}$ mit $\frac{y_1}{y_2}$ entstehende Bruch.

**Satz 68:** Aus

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \sim \frac{u_1}{u_2}
```

folgt

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Vorbemerkung:** Die Klasse des Produktes hängt also nur von den Klassen ab, zu denen die „Faktoren" gehören.

**Beweis:**

```math
x_1 y_2 = y_1 x_2, \quad z_1 u_2 = u_1 z_2,
```

also

```math
(x_1 y_2)(z_1 u_2) = (y_1 x_2)(u_1 z_2),
```

```math
(x_1 z_1)(y_2 u_2) = (y_1 u_1)(x_2 z_2).
```

**Satz 69** (kommutatives Gesetz der Multiplikation):

```math
\frac{x_1}{x_2} \cdot \frac{y_1}{y_2} \sim \frac{y_1}{y_2} \cdot \frac{x_1}{x_2}.
```

**Beweis:**

```math
\frac{x_1}{x_2} \cdot \frac{y_1}{y_2} \sim \frac{x_1 y_1}{x_2 y_2} \sim \frac{y_1 x_1}{y_2 x_2} \sim \frac{y_1}{y_2} \cdot \frac{x_1}{x_2}.
```

**Satz 70** (assoziatives Gesetz der Multiplikation):

```math
\left(\frac{x_1}{x_2} \cdot \frac{y_1}{y_2}\right) \cdot \frac{z_1}{z_2} \sim \frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} \cdot \frac{z_1}{z_2}\right).
```

**Beweis:**

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

**Satz 71** (distributives Gesetz):

```math
\frac{x_1}{x_2} \cdot \left(\frac{y_1}{y_2} + \frac{z_1}{z_2}\right) \sim \frac{x_1}{x_2} \cdot \frac{y_1}{y_2} + \frac{x_1}{x_2} \cdot \frac{z_1}{z_2}.
```

**Beweis:**

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

**Satz 72:** Aus

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}
```

folgt

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} < \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}.
```

**Beweis:** 1) Aus

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}
```

folgt

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

2) Aus

```math
\frac{x_1}{x_2} \sim \frac{y_1}{y_2}
```

folgt nach Satz 68

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}.
```

3) Aus

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}
```

folgt

```math
\frac{y_1}{y_2} > \frac{x_1}{x_2},
```

also nach 1)

```math
\frac{y_1}{y_2} \cdot \frac{z_1}{z_2} > \frac{x_1}{x_2} \cdot \frac{z_1}{z_2},
```

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} < \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}.
```

**Satz 73:** Aus

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \sim \frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} \cdot \frac{z_1}{z_2} < \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}
```

folgt

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \quad\text{bzw.}\quad \frac{x_1}{x_2} < \frac{y_1}{y_2}.
```

**Beweis:** Folgt aus Satz 72, da die drei Fälle beide Male sich ausschließen und alle Möglichkeiten erschöpfen.

**Satz 74:** Aus

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2}
```

folgt

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Beweis:** Nach Satz 72 ist

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{z_1}{z_2}
```

und

```math
\frac{y_1}{y_2} \cdot \frac{z_1}{z_2} \sim \frac{z_1}{z_2} \cdot \frac{y_1}{y_2} > \frac{u_1}{u_2} \cdot \frac{y_1}{y_2} \sim \frac{y_1}{y_2} \cdot \frac{u_1}{u_2},
```

also

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Satz 75:** Aus

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} > \frac{u_1}{u_2} \quad\text{oder}\quad \frac{x_1}{x_2} > \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
```

folgt

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} > \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Beweis:** Mit dem Äquivalenzzeichen in der Voraussetzung durch Satz 68 und Satz 72, sonst durch Satz 74 erledigt.

**Satz 76:** Aus

```math
\frac{x_1}{x_2} \gtrsim \frac{y_1}{y_2}, \quad \frac{z_1}{z_2} \gtrsim \frac{u_1}{u_2}
```

folgt

```math
\frac{x_1}{x_2} \cdot \frac{z_1}{z_2} \gtrsim \frac{y_1}{y_2} \cdot \frac{u_1}{u_2}.
```

**Beweis:** Mit zwei Äquivalenzzeichen in der Voraussetzung durch Satz 68, sonst durch Satz 75 erledigt.

**Satz 77:** Die Äquivalenz

```math
\frac{y_1}{y_2} \cdot \frac{u_1}{u_2} \sim \frac{x_1}{x_2},
```

wo $\frac{x_1}{x_2}$ und $\frac{y_1}{y_2}$ gegeben sind, hat eine Lösung $\frac{u_1}{u_2}$. Sind $\frac{u_1}{u_2}$ und $\frac{w_1}{w_2}$ Lösungen, so ist

```math
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
```

**Beweis:** Die zweite Behauptung folgt unmittelbar aus Satz 73; denn für

```math
\frac{y_1}{y_2} \cdot \frac{u_1}{u_2} \sim \frac{x_1}{x_2} \sim \frac{y_1}{y_2} \cdot \frac{w_1}{w_2}
```

ist nach jenem Satz

```math
\frac{u_1}{u_2} \sim \frac{w_1}{w_2}.
```

Die Existenz eines $\frac{u_1}{u_2}$ (erste Behauptung) ergibt sich folgendermaßen. Für

```math
u_1 = x_1 y_2, \quad u_2 = x_2 y_1
```

ist $\frac{u_1}{u_2}$ Lösung wegen

```math
\frac{y_1}{y_2} \cdot \frac{u_1}{u_2} \sim \frac{y_1}{y_2} \cdot \frac{x_1 y_2}{x_2 y_1} \sim \frac{y_1(x_1 y_2)}{y_2(x_2 y_1)} \sim \frac{x_1(y_1 y_2)}{x_2(y_1 y_2)} \sim \frac{x_1}{x_2}.
```

## § 5. Rationale Zahlen und ganze Zahlen

**Definition 16:** Unter einer rationalen Zahl versteht man die Menge aller einem festen Bruch äquivalenten Brüche (also eine Klasse im Sinne des § 1).

Große lateinische Buchstaben bezeichnen durchweg, wofern nichts anderes gesagt wird, rationale Zahlen.

**Definition 17:**

```math
X = Y
```

($=$ sprich: gleich), wenn beide Mengen dieselben Brüche umfassen. Anderenfalls

```math
X \neq Y
```

($\neq$ sprich: ungleich).

Trivial sind die drei Sätze:

**Satz 78:** $X = X$.

**Satz 79:** Aus

```math
X = Y
```

folgt

```math
Y = X.
```

**Satz 80:** Aus

```math
X = Y, \quad Y = Z
```

folgt

```math
X = Z.
```

**Definition 18:**

```math
X > Y
```

($>$ sprich: größer als), wenn für einen (also nach Satz 44 für je einen) Bruch $\frac{x_1}{x_2}$ bzw. $\frac{y_1}{y_2}$ aus der Menge $X$ bzw. $Y$

```math
\frac{x_1}{x_2} > \frac{y_1}{y_2}
```

ist.

**Definition 19:**

```math
X < Y
```

($<$ sprich: kleiner als), wenn für einen (also nach Satz 45 für je einen) Bruch $\frac{x_1}{x_2}$ bzw. $\frac{y_1}{y_2}$ aus der Menge $X$ bzw. $Y$

```math
\frac{x_1}{x_2} < \frac{y_1}{y_2}
```

ist.

**Satz 81:** Sind $X$, $Y$ beliebig, so liegt genau einer der Fälle

```math
X = Y, \quad X > Y, \quad X < Y
```

vor.

**Beweis:** Satz 41.

**Satz 82:** Aus

```math
X > Y
```

folgt

```math
Y < X.
```

**Beweis:** Satz 42.

**Satz 83:** Aus

```math
X < Y
```

folgt

```math
Y > X.
```

**Beweis:** Satz 43.

**Definition 20:**

```math
X \geqq Y
```

bedeutet

```math
X > Y \quad\text{oder}\quad X = Y.
```

($\geqq$ sprich: größer oder gleich.)

**Definition 21:**

```math
X \leqq Y
```

bedeutet

```math
X < Y \quad\text{oder}\quad X = Y.
```

($\leqq$ sprich: kleiner oder gleich.)

**Satz 84:** Aus

```math
X \geqq Y
```

folgt

```math
Y \leqq X.
```

**Beweis:** Satz 48.

**Satz 85:** Aus

```math
X \leqq Y
```

folgt

```math
Y \geqq X.
```

**Beweis:** Satz 49.

**Satz 86** (Transitivität der Ordnung): Aus

```math
X < Y, \quad Y < Z
```

folgt

```math
X < Z.
```

**Beweis:** Satz 50.

**Satz 87:** Aus

```math
X \leqq Y, \quad Y < Z \quad\text{oder}\quad X < Y, \quad Y \leqq Z
```

folgt

```math
X < Z.
```

**Beweis:** Satz 51.

**Satz 88:** Aus

```math
X \leqq Y, \quad Y \leqq Z
```

folgt

```math
X \leqq Z.
```

**Beweis:** Satz 52.

**Satz 89:** Zu $X$ gibt es ein

```math
Z > X.
```

**Beweis:** Satz 53.

**Satz 90:** Zu $X$ gibt es ein

```math
Z < X.
```

**Beweis:** Satz 54.

**Satz 91:** Ist

```math
X < Y,
```

so gibt es ein $Z$ mit

```math
X < Z < Y.
```

**Beweis:** Satz 55.

**Definition 22:** Unter $X + Y$ ($+$ sprich: plus) versteht man die Klasse, der eine (also nach Satz 56 jede) Summe eines Bruches aus $X$ und eines Bruches aus $Y$ angehört.

Diese rationale Zahl heißt die Summe von $X$ und $Y$ oder die durch Addition von $Y$ zu $X$ entstehende rationale Zahl.

**Satz 92** (kommutatives Gesetz der Addition):

```math
X + Y = Y + X.
```

**Beweis:** Satz 58.

**Satz 93** (assoziatives Gesetz der Addition):

```math
(X + Y) + Z = X + (Y + Z).
```

**Beweis:** Satz 59.

**Satz 94:**

```math
X + Y > X.
```

**Beweis:** Satz 60.

**Satz 95:** Aus

```math
X > Y
```

folgt

```math
X + Z > Y + Z.
```

**Beweis:** Satz 61.

**Satz 96:** Aus

```math
X > Y \quad\text{bzw.}\quad X = Y \quad\text{bzw.}\quad X < Y
```

folgt

```math
X + Z > Y + Z \quad\text{bzw.}\quad X + Z = Y + Z \quad\text{bzw.}\quad X + Z < Y + Z.
```

**Beweis:** Satz 62.

**Satz 97:** Aus

```math
X + Z > Y + Z \quad\text{bzw.}\quad X + Z = Y + Z \quad\text{bzw.}\quad X + Z < Y + Z
```

folgt

```math
X > Y \quad\text{bzw.}\quad X = Y \quad\text{bzw.}\quad X < Y.
```

**Beweis:** Satz 63.

**Satz 98:** Aus

```math
X > Y, \quad Z > U
```

folgt

```math
X + Z > Y + U.
```

**Beweis:** Satz 64.

**Satz 99:** Aus

```math
X > Y, \quad Z = U \quad\text{oder}\quad X = Y, \quad Z > U
```

folgt

```math
X + Z > Y + U.
```

**Beweis:** Satz 65.

**Satz 100:** Aus

```math
X \geqq Y, \quad Z \geqq U
```

folgt

```math
X + Z \geqq Y + U.
```

**Beweis:** Satz 66.

**Satz 101:** Ist

```math
X > Y,
```

so hat

```math
Y + U = X
```

genau eine Lösung $U$.

**Vorbemerkung:** Für

```math
X \leqq Y
```

gibt es nach Satz 94 keine Lösung.

**Beweis:** Satz 67.

**Definition 23:** Dies $U$ heißt $X - Y$ ($-$ sprich: minus) oder die Differenz $X$ minus $Y$ oder die durch Subtraktion der rationalen Zahl $Y$ von der rationalen Zahl $X$ entstehende rationale Zahl.

**Definition 24:** Unter $X \cdot Y$ ($\cdot$ sprich: mal; aber man schreibt den Punkt meist nicht) versteht man die Klasse, der ein (also nach Satz 68 jedes) Produkt eines Bruches aus $X$ mit einem Bruche aus $Y$ angehört.

Diese rationale Zahl heißt das Produkt von $X$ mit $Y$ oder die durch Multiplikation von $X$ mit $Y$ entstehende rationale Zahl.

**Satz 102** (kommutatives Gesetz der Multiplikation):

```math
X Y = Y X.
```

**Beweis:** Satz 69.

**Satz 103** (assoziatives Gesetz der Multiplikation):

```math
(X Y) Z = X (Y Z).
```

**Beweis:** Satz 70.

**Satz 104** (distributives Gesetz):

```math
X(Y + Z) = X Y + X Z.
```

**Beweis:** Satz 71.

**Satz 105:** Aus

```math
X > Y \quad\text{bzw.}\quad X = Y \quad\text{bzw.}\quad X < Y
```

folgt

```math
X Z > Y Z \quad\text{bzw.}\quad X Z = Y Z \quad\text{bzw.}\quad X Z < Y Z.
```

**Beweis:** Satz 72.

**Satz 106:** Aus

```math
X Z > Y Z \quad\text{bzw.}\quad X Z = Y Z \quad\text{bzw.}\quad X Z < Y Z
```

folgt

```math
X > Y \quad\text{bzw.}\quad X = Y \quad\text{bzw.}\quad X < Y.
```

**Beweis:** Satz 73.

**Satz 107:** Aus

```math
X > Y, \quad Z > U
```

folgt

```math
X Z > Y U.
```

**Beweis:** Satz 74.

**Satz 108:** Aus

```math
X > Y, \quad Z = U \quad\text{oder}\quad X = Y, \quad Z > U
```

folgt

```math
X Z > Y U.
```

**Beweis:** Satz 75.

**Satz 109:** Aus

```math
X \geqq Y, \quad Z \geqq U
```

folgt

```math
X Z \geqq Y U.
```

**Beweis:** Satz 76.

**Satz 110:** Die Gleichung

```math
Y U = X,
```

wo $X$ und $Y$ gegeben sind, hat genau eine Lösung $U$.

**Beweis:** Satz 77.

**Satz 111:** Aus

```math
\frac{x}{1} > \frac{y}{1} \quad\text{bzw.}\quad \frac{x}{1} \sim \frac{y}{1} \quad\text{bzw.}\quad \frac{x}{1} < \frac{y}{1}
```

folgt

```math
x > y \quad\text{bzw.}\quad x = y \quad\text{bzw.}\quad x < y
```

und umgekehrt.

**Beweis:**

```math
x \cdot 1 > y \cdot 1 \quad\text{bzw.}\quad x \cdot 1 = y \cdot 1 \quad\text{bzw.}\quad x \cdot 1 < y \cdot 1
```

bedeutet dasselbe wie

```math
x > y \quad\text{bzw.}\quad x = y \quad\text{bzw.}\quad x < y.
```

**Definition 25:** Eine rationale Zahl heißt ganz, wenn unter den Brüchen, deren Gesamtheit sie ist, ein Bruch $\frac{x}{1}$ vorkommt.

Dies $x$ ist nach Satz 111 eindeutig bestimmt, und umgekehrt entspricht jedem $x$ genau eine ganze Zahl.

**Satz 112:**

```math
\frac{x}{1} + \frac{y}{1} \sim \frac{x + y}{1},
```

```math
\frac{x}{1} \cdot \frac{y}{1} \sim \frac{x y}{1}.
```

**Vorbemerkung:** Summe und Produkt zweier ganzer Zahlen sind also ganze Zahlen.

**Beweis:** 1) Nach Satz 57 ist

```math
\frac{x}{1} + \frac{y}{1} \sim \frac{x + y}{1}.
```

2) Nach Definition 15 ist

```math
\frac{x}{1} \cdot \frac{y}{1} \sim \frac{x y}{1 \cdot 1} \sim \frac{x y}{1}.
```

**Satz 113:** Die ganzen Zahlen genügen den fünf Axiomen der natürlichen Zahlen, wenn die Klasse von $\frac{1}{1}$ an Stelle von $1$ genommen wird und als Nachfolger der Klasse von $\frac{x}{1}$ die Klasse von $\frac{x'}{1}$ angesehen wird.

**Beweis:** $Q$ sei die Menge der ganzen Zahlen.

1) Die Klasse von $\frac{1}{1}$ gehört zu $Q$.

2) Zu jeder ganzen Zahl haben wir einen Nachfolger eindeutig erklärt.

3) Er ist stets von der Klasse von $\frac{1}{1}$ verschieden, da stets

```math
x' \neq 1.
```

4) Stimmen die Klassen von $\frac{x'}{1}$ und $\frac{y'}{1}$ überein, so ist

```math
x' = y',
```

```math
x = y,
```

und die Klassen von $\frac{x}{1}$ und $\frac{y}{1}$ stimmen überein.

5) Eine Menge $\mathfrak{M}$ von ganzen Zahlen habe die Eigenschaften:

I) Die Klasse von $\frac{1}{1}$ gehört zu $\mathfrak{M}$.

II) Falls die Klasse von $\frac{x}{1}$ zu $\mathfrak{M}$ gehört, so gehört die Klasse von $\frac{x'}{1}$ zu $\mathfrak{M}$.

Dann bezeichne $\mathfrak{N}$ die Menge der $x$, für die die Klasse von $\frac{x}{1}$ zu $\mathfrak{M}$ gehört. Alsdann ist $1$ zu $\mathfrak{N}$ und mit jedem $x$ von $\mathfrak{N}$ auch $x'$ zu $\mathfrak{N}$ gehörig. Also gehört jede natürliche Zahl zu $\mathfrak{N}$, also jede ganze Zahl zu $\mathfrak{M}$.

Da $=$, $>$, $<$, Summe und Produkt (nach Satz 111 und 112) den alten Begriffen entsprechen, haben die ganzen Zahlen alle Eigenschaften, die wir in Kapitel 1 für die natürlichen Zahlen bewiesen haben.

Daher werfen wir die natürlichen Zahlen weg, ersetzen sie durch die entsprechenden ganzen Zahlen und haben fortan (da auch die Brüche überflüssig werden) in bezug auf das Bisherige nur von rationalen Zahlen zu reden. (Die natürlichen Zahlen verbleiben paarweise über und unter dem Strich im Begriff des Bruches, und die Brüche bleiben als Individuen der Menge, die rationale Zahl heißt.)

**Definition 26:** (Das freigewordene Zeichen) $x$ bezeichnet die ganze Zahl, die durch die Klasse von $\frac{x}{1}$ gegeben ist.

In unserer neuen Sprache ist also z. B.

```math
x \cdot 1 = x;
```

denn

```math
\frac{x_1}{x_2} \cdot \frac{1}{1} \sim \frac{x_1 \cdot 1}{x_2 \cdot 1} \sim \frac{x_1}{x_2}.
```

**Satz 114:** Ist $Z$ die zum Bruch $\frac{x}{y}$ gehörige rationale Zahl, so ist

```math
y Z = x.
```

**Beweis:**

```math
\frac{y}{1} \cdot \frac{x}{y} \sim \frac{y x}{1 \cdot y} \sim \frac{x y}{1 \cdot y} \sim \frac{x}{1}.
```

**Definition 27:** Das $U$ des Satzes 110 heißt Quotient von $X$ durch $Y$ oder die durch Division von $X$ durch $Y$ entstehende rationale Zahl. Es werde mit $\frac{X}{Y}$ bezeichnet (sprich: $X$ durch $Y$).

Sind $X$ und $Y$ ganze Zahlen, also $X = x$, $Y = y$, so bedeutet die durch die Definitionen 26 und 27 erklärte rationale Zahl $\frac{x}{y}$ nach Satz 114 die Klasse, der der Bruch $\frac{x}{y}$ im alten Sinne angehört.

Eine Verwechselung beider Zeichen $\frac{x}{y}$ ist nicht zu befürchten, da Brüche in Zukunft nicht mehr gesondert vorkommen werden; es bezeichnet fortan $\frac{x}{y}$ stets eine rationale Zahl. Umgekehrt läßt sich jede rationale Zahl in der Form $\frac{x}{y}$ darstellen, auf Grund von Satz 114 und Definition 27.

**Satz 115:** Sind $X$ und $Y$ gegeben, so gibt es ein $z$ mit

```math
z X > Y.
```

**Beweis:** $\frac{Y}{X}$ ist eine rationale Zahl; nach Satz 89 gibt es (in unserer neuen Sprache) ganze Zahlen $z$, $v$ mit

```math
\frac{z}{v} > \frac{Y}{X}.
```

Nach Satz 111 ist

also nach Satz 105
