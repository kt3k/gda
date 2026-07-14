# Kapitel 5. Komplexe Zahlen

## § 1. Definition

**Definition 57:** Eine komplexe Zahl ist ein Paar reeller Zahlen $\Xi_1, \Xi_2$ (in bestimmter Reihenfolge). Wir bezeichnen die komplexe Zahl mit $[\Xi_1, \Xi_2]$. Dabei gelten $[\Xi_1, \Xi_2]$ und $[\mathrm{H}_1, \mathrm{H}_2]$ als dieselbe Zahl (als gleich; schreibe: $=$) genau dann, wenn

```math
\Xi_1 = \mathrm{H}_1, \quad \Xi_2 = \mathrm{H}_2
```

ist; sonst als ungleich (verschieden; schreibe: $\neq$).

Kleine deutsche Buchstaben bedeuten durchweg komplexe Zahlen.

Für jedes $\mathfrak{x}$ und jedes $\mathfrak{y}$ liegt somit genau einer der Fälle

```math
\mathfrak{x} = \mathfrak{y}, \quad \mathfrak{x} \neq \mathfrak{y}
```

vor. Bei den komplexen Zahlen vermischen sich die Begriffe der Identität und Gleichheit, so daß die drei Sätze trivial sind:

**Satz 206:** $\mathfrak{x} = \mathfrak{x}$.

**Satz 207:** Aus

```math
\mathfrak{x} = \mathfrak{y}
```

folgt

```math
\mathfrak{y} = \mathfrak{x}.
```

**Satz 208:** Aus

```math
\mathfrak{x} = \mathfrak{y}, \quad \mathfrak{y} = \mathfrak{z}
```

folgt

```math
\mathfrak{x} = \mathfrak{z}.
```

**Definition 58:** $\mathfrak{n} = [0, 0]$.

**Definition 59:** $\mathfrak{e} = [1, 0]$.

Die Buchstaben $\mathfrak{n}$ und $\mathfrak{e}$ bleiben also für bestimmte komplexe Zahlen reserviert.

## § 2. Addition

**Definition 60:** Ist

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
```

so ist

```math
\mathfrak{x} + \mathfrak{y} = [\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2].
```

($+$ sprich: plus.) $\mathfrak{x} + \mathfrak{y}$ heißt die Summe von $\mathfrak{x}$ und $\mathfrak{y}$ oder die durch Addition von $\mathfrak{y}$ zu $\mathfrak{x}$ entstehende (komplexe) Zahl.

**Satz 209** (kommutatives Gesetz der Addition):

```math
\mathfrak{x} + \mathfrak{y} = \mathfrak{y} + \mathfrak{x}.
```

**Beweis:** $[\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2] = [\mathrm{H}_1 + \Xi_1, \mathrm{H}_2 + \Xi_2]$.

**Satz 210:** $\mathfrak{x} + \mathfrak{n} = \mathfrak{x}$.

**Beweis:** $[\Xi_1, \Xi_2] + [0, 0] = [\Xi_1 + 0, \Xi_2 + 0] = [\Xi_1, \Xi_2]$.

**Satz 211** (assoziatives Gesetz der Addition):

```math
(\mathfrak{x} + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + (\mathfrak{y} + \mathfrak{z}).
```

**Beweis:** Ist

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2], \quad \mathfrak{z} = [\mathrm{Z}_1, \mathrm{Z}_2],
```

so ist nach Satz 186

```math
\begin{aligned}
(\mathfrak{x} + \mathfrak{y}) + \mathfrak{z} &= [\Xi_1 + \mathrm{H}_1, \Xi_2 + \mathrm{H}_2] + [\mathrm{Z}_1, \mathrm{Z}_2] = [(\Xi_1 + \mathrm{H}_1) + \mathrm{Z}_1, (\Xi_2 + \mathrm{H}_2) + \mathrm{Z}_2] \\
&= [\Xi_1 + (\mathrm{H}_1 + \mathrm{Z}_1), \Xi_2 + (\mathrm{H}_2 + \mathrm{Z}_2)] = [\Xi_1, \Xi_2] + [\mathrm{H}_1 + \mathrm{Z}_1, \mathrm{H}_2 + \mathrm{Z}_2] = \mathfrak{x} + (\mathfrak{y} + \mathfrak{z}).
\end{aligned}
```

**Satz 212:** Bei gegebenen $\mathfrak{x}, \mathfrak{y}$ hat

```math
\mathfrak{y} + \mathfrak{u} = \mathfrak{x}
```

genau eine Lösung $\mathfrak{u}$, nämlich,

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
```

gesetzt,

```math
\mathfrak{u} = [\Xi_1 - \mathrm{H}_1, \Xi_2 - \mathrm{H}_2].
```

**Beweis:** Für jedes

```math
\mathfrak{u} = [\Upsilon_1, \Upsilon_2]
```

ist

und es wird genau

```math
\mathrm{H}_1 + \Upsilon_1 = \Xi_1, \quad \mathrm{H}_2 + \Upsilon_2 = \Xi_2
```

verlangt, so daß Satz 187 alles beweist.

**Definition 61:** Das $\mathfrak{u}$ des Satzes 212 heißt $\mathfrak{x} - \mathfrak{y}$ ($-$ sprich: minus). $\mathfrak{x} - \mathfrak{y}$ heißt auch die Differenz $\mathfrak{x}$ minus $\mathfrak{y}$ oder die durch Subtraktion des $\mathfrak{y}$ von $\mathfrak{x}$ entstehende Zahl.

**Satz 213:** Es ist

```math
\mathfrak{x} - \mathfrak{y} = \mathfrak{n}
```

dann und nur dann, wenn

```math
\mathfrak{x} = \mathfrak{y}.
```

**Beweis:** Es ist

```math
\Xi_1 - \mathrm{H}_1 = \Xi_2 - \mathrm{H}_2 = 0
```

genau dann, wenn

```math
\Xi_1 = \mathrm{H}_1, \quad \Xi_2 = \mathrm{H}_2.
```

**Definition 62:** $-\mathfrak{x} = \mathfrak{n} - \mathfrak{x}$.

($-$ links sprich: minus.)

**Satz 214:** Für

```math
\mathfrak{x} = [\Xi_1, \Xi_2]
```

ist

```math
-\mathfrak{x} = [-\Xi_1, -\Xi_2].
```

**Beweis:** $-[\Xi_1, \Xi_2] = [0, 0] - [\Xi_1, \Xi_2] = [0 - \Xi_1, 0 - \Xi_2]$.

**Satz 215:** $-(-\mathfrak{x}) = \mathfrak{x}$.

**Beweis:** Nach Satz 177 ist

```math
-(-\Xi_1) = \Xi_1, \quad -(-\Xi_2) = \Xi_2.
```

**Satz 216:** $\mathfrak{x} + (-\mathfrak{x}) = \mathfrak{n}$.

**Beweis:** Nach Satz 179 ist

```math
\Xi_1 + (-\Xi_1) = 0, \quad \Xi_2 + (-\Xi_2) = 0.
```

**Satz 217:** $-(\mathfrak{x} + \mathfrak{y}) = -\mathfrak{x} + (-\mathfrak{y})$.

**Beweis:** Nach Satz 180 ist,

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
```

gesetzt,

```math
= [-\Xi_1, -\Xi_2] + [-\mathrm{H}_1, -\mathrm{H}_2] = -\mathfrak{x} + (-\mathfrak{y}).
```

**Satz 218:** $\mathfrak{x} - \mathfrak{y} = \mathfrak{x} + (-\mathfrak{y})$.

**Beweis:** $[\Xi_1 - \mathrm{H}_1, \Xi_2 - \mathrm{H}_2] = [\Xi_1, \Xi_2] + [-\mathrm{H}_1, -\mathrm{H}_2]$.

**Satz 219:** $-(\mathfrak{x} - \mathfrak{y}) = \mathfrak{y} - \mathfrak{x}$.

**Beweis:**

```math
-(\mathfrak{x} - \mathfrak{y}) = -(\mathfrak{x} + (-\mathfrak{y})) = -\mathfrak{x} + (-(-\mathfrak{y})) = -\mathfrak{x} + \mathfrak{y} = \mathfrak{y} + (-\mathfrak{x}) = \mathfrak{y} - \mathfrak{x}.
```

## § 3. Multiplikation

**Definition 63:** Ist

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
```

so ist

```math
\mathfrak{x} \cdot \mathfrak{y} = [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1].
```

($\cdot$ sprich: mal; aber man schreibt den Punkt meist nicht.) $\mathfrak{x} \cdot \mathfrak{y}$ heißt das Produkt von $\mathfrak{x}$ mit $\mathfrak{y}$ oder die durch Multiplikation von $\mathfrak{x}$ mit $\mathfrak{y}$ entstehende Zahl.

**Satz 220** (kommutatives Gesetz der Multiplikation):

```math
\mathfrak{x}\mathfrak{y} = \mathfrak{y}\mathfrak{x}.
```

**Beweis:**

```math
\begin{aligned}
[\Xi_1, \Xi_2][\mathrm{H}_1, \mathrm{H}_2] &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1] \\
&= [\mathrm{H}_1\Xi_1 - \mathrm{H}_2\Xi_2, \mathrm{H}_1\Xi_2 + \mathrm{H}_2\Xi_1] = [\mathrm{H}_1, \mathrm{H}_2][\Xi_1, \Xi_2].
\end{aligned}
```

**Satz 221:** Es ist

```math
\mathfrak{x}\mathfrak{y} = \mathfrak{n}
```

dann und nur dann, wenn mindestens eine der beiden Zahlen $\mathfrak{x}, \mathfrak{y}$ gleich $\mathfrak{n}$ ist.

**Beweis:** Es sei

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2].
```

1) Aus

```math
\mathfrak{x} = \mathfrak{n}
```

folgt

```math
\Xi_1 = \Xi_2 = 0,
```

```math
\mathfrak{x}\mathfrak{y} = [0 \cdot \mathrm{H}_1 - 0 \cdot \mathrm{H}_2, 0 \cdot \mathrm{H}_2 + 0 \cdot \mathrm{H}_1] = [0, 0] = \mathfrak{n}.
```

2) Aus

```math
\mathfrak{y} = \mathfrak{n}
```

folgt nach Satz 220 und 1)

```math
\mathfrak{x}\mathfrak{y} = \mathfrak{y}\mathfrak{x} = \mathfrak{n}\mathfrak{x} = \mathfrak{n}.
```

3) Aus

```math
\mathfrak{x}\mathfrak{y} = \mathfrak{n}
```

soll gefolgert werden, daß

```math
\mathfrak{x} = \mathfrak{n} \text{ oder } \mathfrak{y} = \mathfrak{n}
```

ist. Wir dürfen daher voraussetzen

```math
\mathfrak{y} \neq \mathfrak{n},
```

d. h.

```math
\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2 > 0,
```

und haben

```math
\mathfrak{x} = \mathfrak{n},
```

d. h.

```math
\Xi_1 = \Xi_2 = 0
```

zu beweisen.

Nach Voraussetzung ist

```math
\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2 = 0 = \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1,
```

also

```math
\begin{aligned}
0 &= (\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{H}_1 + (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{H}_2 \\
&= ((\Xi_1\mathrm{H}_1)\mathrm{H}_1 - (\Xi_2\mathrm{H}_2)\mathrm{H}_1) + ((\Xi_1\mathrm{H}_2)\mathrm{H}_2 + (\Xi_2\mathrm{H}_1)\mathrm{H}_2) \\
&= (\Xi_1(\mathrm{H}_1\mathrm{H}_1) - \Xi_2(\mathrm{H}_2\mathrm{H}_1)) + (\Xi_1(\mathrm{H}_2\mathrm{H}_2) + \Xi_2(\mathrm{H}_1\mathrm{H}_2)) \\
&= ((\Xi_1(\mathrm{H}_1\mathrm{H}_1) - \Xi_2(\mathrm{H}_2\mathrm{H}_1)) + \Xi_2(\mathrm{H}_1\mathrm{H}_2)) + \Xi_1(\mathrm{H}_2\mathrm{H}_2) \\
&= \Xi_1(\mathrm{H}_1\mathrm{H}_1) + \Xi_1(\mathrm{H}_2\mathrm{H}_2) = \Xi_1(\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2),
\end{aligned}
```

also

```math
\Xi_1 = 0,
```

```math
\Xi_2\mathrm{H}_2 = 0 = \Xi_2\mathrm{H}_1.
```

Da $\mathrm{H}_1$ und $\mathrm{H}_2$ nicht beide $0$ sind, ist also

```math
\Xi_2 = 0.
```

**Satz 222:** $\mathfrak{x}\mathfrak{e} = \mathfrak{x}$.

**Beweis:** $[\Xi_1, \Xi_2][1, 0] = [\Xi_1 \cdot 1 - \Xi_2 \cdot 0, \Xi_1 \cdot 0 + \Xi_2 \cdot 1] = [\Xi_1, \Xi_2]$.

**Satz 223:** $\mathfrak{x}(-\mathfrak{e}) = -\mathfrak{x}$.

**Beweis:**

```math
[\Xi_1, \Xi_2][-1, 0] = [\Xi_1(-1) - \Xi_2 \cdot 0, \Xi_1 \cdot 0 + \Xi_2(-1)] = [-\Xi_1, -\Xi_2].
```

**Satz 224:** $(-\mathfrak{x})\mathfrak{y} = \mathfrak{x}(-\mathfrak{y}) = -(\mathfrak{x}\mathfrak{y})$.

**Beweis:** 1)

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

2) Nach 1) ist

```math
\mathfrak{x}(-\mathfrak{y}) = (-\mathfrak{y})\mathfrak{x} = -(\mathfrak{y}\mathfrak{x}) = -(\mathfrak{x}\mathfrak{y}).
```

**Satz 225:** $(-\mathfrak{x})(-\mathfrak{y}) = \mathfrak{x}\mathfrak{y}$.

**Beweis:** Nach Satz 224 ist

```math
(-\mathfrak{x})(-\mathfrak{y}) = \mathfrak{x}(-(-\mathfrak{y})) = \mathfrak{x}\mathfrak{y}.
```

**Satz 226** (assoziatives Gesetz der Multiplikation):

```math
(\mathfrak{x}\mathfrak{y})\mathfrak{z} = \mathfrak{x}(\mathfrak{y}\mathfrak{z}).
```

**Beweis:** In diesem Beweise werde der Übersichtlichkeit wegen ausnahmsweise zur Abkürzung

```math
(\Xi + \mathrm{H}) + \mathrm{Z} = \Xi + \mathrm{H} + \mathrm{Z},
```

```math
(\Xi\mathrm{H})\mathrm{Z} = \Xi\mathrm{H}\mathrm{Z}
```

gesetzt, so daß auch

```math
\Xi + (\mathrm{H} + \mathrm{Z}) = \Xi + \mathrm{H} + \mathrm{Z},
```

```math
\Xi(\mathrm{H}\mathrm{Z}) = \Xi\mathrm{H}\mathrm{Z}
```

ist.

Es werde

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2], \quad \mathfrak{z} = [\mathrm{Z}_1, \mathrm{Z}_2]
```

gesetzt. Dann ist

```math
\begin{aligned}
(\mathfrak{x}\mathfrak{y})\mathfrak{z} &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, \Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1][\mathrm{Z}_1, \mathrm{Z}_2] \\
&= [(\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{Z}_1 - (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{Z}_2, (\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2)\mathrm{Z}_2 + (\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)\mathrm{Z}_1] \\
&= [(\Xi_1\mathrm{H}_1\mathrm{Z}_1 - \Xi_2\mathrm{H}_2\mathrm{Z}_1) - (\Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2), (\Xi_1\mathrm{H}_1\mathrm{Z}_2 - \Xi_2\mathrm{H}_2\mathrm{Z}_2) + (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1)] \\
&= [(\Xi_1\mathrm{H}_1\mathrm{Z}_1 + (-(\Xi_2\mathrm{H}_2\mathrm{Z}_1))) + (-(\Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2)), (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1) + (\Xi_1\mathrm{H}_1\mathrm{Z}_2 + (-(\Xi_2\mathrm{H}_2\mathrm{Z}_2)))] \\
&= [\Xi_1\mathrm{H}_1\mathrm{Z}_1 - (\Xi_2\mathrm{H}_2\mathrm{Z}_1 + \Xi_1\mathrm{H}_2\mathrm{Z}_2 + \Xi_2\mathrm{H}_1\mathrm{Z}_2), (\Xi_1\mathrm{H}_2\mathrm{Z}_1 + \Xi_2\mathrm{H}_1\mathrm{Z}_1 + \Xi_1\mathrm{H}_1\mathrm{Z}_2) - \Xi_2\mathrm{H}_2\mathrm{Z}_2].
\end{aligned}
```

Wegen

```math
\mathfrak{x}(\mathfrak{y}\mathfrak{z}) = (\mathfrak{y}\mathfrak{z})\mathfrak{x}
```

entsteht durch Buchstabenvertauschung ($\mathrm{H}$ statt $\Xi$, $\mathrm{Z}$ statt $\mathrm{H}$, $\Xi$ statt $\mathrm{Z}$)

```math
\mathfrak{x}(\mathfrak{y}\mathfrak{z}) = [\mathrm{H}_1\mathrm{Z}_1\Xi_1 - (\mathrm{H}_2\mathrm{Z}_2\Xi_1 + \mathrm{H}_1\mathrm{Z}_2\Xi_2 + \mathrm{H}_2\mathrm{Z}_1\Xi_2), (\mathrm{H}_1\mathrm{Z}_2\Xi_1 + \mathrm{H}_2\mathrm{Z}_1\Xi_1 + \mathrm{H}_1\mathrm{Z}_1\Xi_2) - \mathrm{H}_2\mathrm{Z}_2\Xi_2].
```

Wegen

```math
\Xi\mathrm{H}\mathrm{Z} = \Xi(\mathrm{H}\mathrm{Z}) = (\mathrm{H}\mathrm{Z})\Xi = \mathrm{H}\mathrm{Z}\Xi,
```

```math
\Xi + \mathrm{H} + \mathrm{Z} = \Xi + (\mathrm{H} + \mathrm{Z}) = (\mathrm{H} + \mathrm{Z}) + \Xi = \mathrm{H} + \mathrm{Z} + \Xi
```

erkennt man an den ausgerechneten Ausdrücken

```math
(\mathfrak{x}\mathfrak{y})\mathfrak{z} = \mathfrak{x}(\mathfrak{y}\mathfrak{z}).
```

**Satz 227** (distributives Gesetz):

```math
\mathfrak{x}(\mathfrak{y} + \mathfrak{z}) = \mathfrak{x}\mathfrak{y} + \mathfrak{x}\mathfrak{z}.
```

**Beweis:**

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

**Satz 228:** $\mathfrak{x}(\mathfrak{y} - \mathfrak{z}) = \mathfrak{x}\mathfrak{y} - \mathfrak{x}\mathfrak{z}$.

**Beweis:**

```math
\mathfrak{x}(\mathfrak{y} - \mathfrak{z}) = \mathfrak{x}(\mathfrak{y} + (-\mathfrak{z})) = \mathfrak{x}\mathfrak{y} + \mathfrak{x}(-\mathfrak{z}) = \mathfrak{x}\mathfrak{y} + (-(\mathfrak{x}\mathfrak{z})) = \mathfrak{x}\mathfrak{y} - \mathfrak{x}\mathfrak{z}.
```

**Satz 229:** Die Gleichung

```math
\mathfrak{y}\mathfrak{u} = \mathfrak{x},
```

wo $\mathfrak{x}, \mathfrak{y}$ gegeben sind und

```math
\mathfrak{y} \neq \mathfrak{n}
```

ist, hat genau eine Lösung $\mathfrak{u}$.

**Beweis:** 1) Es gibt höchstens eine Lösung; denn aus

```math
\mathfrak{y}\mathfrak{u}_1 = \mathfrak{x} = \mathfrak{y}\mathfrak{u}_2
```

folgt

```math
\mathfrak{n} = \mathfrak{y}\mathfrak{u}_1 - \mathfrak{y}\mathfrak{u}_2 = \mathfrak{y}(\mathfrak{u}_1 - \mathfrak{u}_2),
```

also nach Satz 221

```math
\mathfrak{n} = \mathfrak{u}_1 - \mathfrak{u}_2,
```

```math
\mathfrak{u}_1 = \mathfrak{u}_2.
```

2) Ist

```math
\mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
```

so ist

```math
\mathrm{H} = \mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2 > 0,
```

und

```math
\mathfrak{u} = \left[\frac{\mathrm{H}_1}{\mathrm{H}}, -\frac{\mathrm{H}_2}{\mathrm{H}}\right]\mathfrak{x}
```

ist eine Lösung wegen

```math
\mathfrak{y}\mathfrak{u} = \left([\mathrm{H}_1, \mathrm{H}_2]\left[\frac{\mathrm{H}_1}{\mathrm{H}}, -\frac{\mathrm{H}_2}{\mathrm{H}}\right]\right)\mathfrak{x} = \left[\frac{\mathrm{H}_1\mathrm{H}_1 + \mathrm{H}_2\mathrm{H}_2}{\mathrm{H}}, \frac{-(\mathrm{H}_1\mathrm{H}_2) + \mathrm{H}_2\mathrm{H}_1}{\mathrm{H}}\right]\mathfrak{x} = [1, 0]\mathfrak{x} = \mathfrak{e}\mathfrak{x} = \mathfrak{x}.
```

**Definition 64:** Das $\mathfrak{u}$ des Satzes 229 heißt $\frac{\mathfrak{x}}{\mathfrak{y}}$ (sprich: $\mathfrak{x}$ durch $\mathfrak{y}$). $\frac{\mathfrak{x}}{\mathfrak{y}}$ heißt auch der Quotient von $\mathfrak{x}$ durch $\mathfrak{y}$ oder die durch Division von $\mathfrak{x}$ durch $\mathfrak{y}$ entstehende Zahl.

## § 4. Subtraktion

**Satz 230:**

```math
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
```

**Beweis:**

```math
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{y} + (\mathfrak{x} - \mathfrak{y}) = \mathfrak{x}.
```

**Satz 231:**

```math
(\mathfrak{x} + \mathfrak{y}) - \mathfrak{y} = \mathfrak{x}.
```

**Beweis:**

```math
\mathfrak{y} + \mathfrak{x} = \mathfrak{x} + \mathfrak{y}.
```

**Satz 232:**

```math
\mathfrak{x} - (\mathfrak{x} - \mathfrak{y}) = \mathfrak{y}.
```

**Beweis:**

```math
(\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
```

**Satz 233:** $(\mathfrak{x} - \mathfrak{y}) - \mathfrak{z} = \mathfrak{x} - (\mathfrak{y} + \mathfrak{z})$.

**Beweis:**

```math
\begin{aligned}
(\mathfrak{y} + \mathfrak{z}) + ((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) &= ((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) + (\mathfrak{z} + \mathfrak{y}) \\
&= (((\mathfrak{x} - \mathfrak{y}) - \mathfrak{z}) + \mathfrak{z}) + \mathfrak{y} = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
\end{aligned}
```

**Satz 234:** $(\mathfrak{x} + \mathfrak{y}) - \mathfrak{z} = \mathfrak{x} + (\mathfrak{y} - \mathfrak{z})$.

**Beweis:**

```math
(\mathfrak{x} + (\mathfrak{y} - \mathfrak{z})) + \mathfrak{z} = \mathfrak{x} + ((\mathfrak{y} - \mathfrak{z}) + \mathfrak{z}) = \mathfrak{x} + \mathfrak{y}.
```

**Satz 235:** $(\mathfrak{x} - \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} - (\mathfrak{y} - \mathfrak{z})$.

**Beweis:**

```math
((\mathfrak{x} - \mathfrak{y}) + \mathfrak{z}) + (\mathfrak{y} - \mathfrak{z}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} + (\mathfrak{y} - \mathfrak{z})) = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y} = \mathfrak{x}.
```

**Satz 236:** $(\mathfrak{x} + \mathfrak{z}) - (\mathfrak{y} + \mathfrak{z}) = \mathfrak{x} - \mathfrak{y}$.

**Beweis:**

```math
(\mathfrak{x} - \mathfrak{y}) + (\mathfrak{y} + \mathfrak{z}) = ((\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + \mathfrak{z}.
```

**Satz 237:** $(\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} - \mathfrak{u}) = (\mathfrak{x} + \mathfrak{z}) - (\mathfrak{y} + \mathfrak{u})$.

**Beweis:**

```math
\begin{aligned}
((\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} - \mathfrak{u})) + (\mathfrak{y} + \mathfrak{u}) &= (\mathfrak{x} - \mathfrak{y}) + ((\mathfrak{z} - \mathfrak{u}) + (\mathfrak{u} + \mathfrak{y})) \\
&= (\mathfrak{x} - \mathfrak{y}) + (((\mathfrak{z} - \mathfrak{u}) + \mathfrak{u}) + \mathfrak{y}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{z} + \mathfrak{y}) = (\mathfrak{x} - \mathfrak{y}) + (\mathfrak{y} + \mathfrak{z}) \\
&= ((\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}) + \mathfrak{z} = \mathfrak{x} + \mathfrak{z}.
\end{aligned}
```

**Satz 238:** $(\mathfrak{x} - \mathfrak{y}) - (\mathfrak{z} - \mathfrak{u}) = (\mathfrak{x} + \mathfrak{u}) - (\mathfrak{y} + \mathfrak{z})$.

**Beweis:** Nach Satz 237 und Satz 236 ist

```math
\begin{aligned}
((\mathfrak{x} + \mathfrak{u}) - (\mathfrak{y} + \mathfrak{z})) + (\mathfrak{z} - \mathfrak{u}) &= ((\mathfrak{x} + \mathfrak{u}) + \mathfrak{z}) - ((\mathfrak{y} + \mathfrak{z}) + \mathfrak{u}) \\
&= (\mathfrak{x} + (\mathfrak{u} + \mathfrak{z})) - (\mathfrak{y} + (\mathfrak{z} + \mathfrak{u})) = \mathfrak{x} - \mathfrak{y}.
\end{aligned}
```

**Satz 239:** Es ist

```math
\mathfrak{x} - \mathfrak{y} = \mathfrak{z} - \mathfrak{u}
```

dann und nur dann, wenn

```math
\mathfrak{x} + \mathfrak{u} = \mathfrak{y} + \mathfrak{z}.
```

**Beweis:** Satz 213 und Satz 238.

## § 5. Division

**Satz 240:** Ist

```math
\mathfrak{y} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
```

**Beweis:**

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{y}\,\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{x}.
```

**Satz 241:** Ist

```math
\mathfrak{y} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}\mathfrak{y}}{\mathfrak{y}} = \mathfrak{x}.
```

**Beweis:**

```math
\mathfrak{y}\mathfrak{x} = \mathfrak{x}\mathfrak{y}.
```

**Satz 242:** Ist

```math
\mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\frac{\mathfrak{x}}{\mathfrak{y}}} = \mathfrak{y}.
```

**Beweis:**

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
```

**Satz 243:** Ist

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
```

so ist

```math
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}\mathfrak{z}}.
```

**Beweis:**

```math
(\mathfrak{y}\mathfrak{z})\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}} = \frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}}(\mathfrak{z}\mathfrak{y}) = \left(\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\mathfrak{z}}\,\mathfrak{z}\right)\mathfrak{y} = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
```

**Satz 244:** Ist

```math
\mathfrak{z} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}\mathfrak{y}}{\mathfrak{z}} = \mathfrak{x}\,\frac{\mathfrak{y}}{\mathfrak{z}}.
```

**Beweis:**

```math
\left(\mathfrak{x}\,\frac{\mathfrak{y}}{\mathfrak{z}}\right)\mathfrak{z} = \mathfrak{x}\left(\frac{\mathfrak{y}}{\mathfrak{z}}\,\mathfrak{z}\right) = \mathfrak{x}\mathfrak{y}.
```

**Satz 245:** Ist

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{z} = \frac{\mathfrak{x}}{\frac{\mathfrak{y}}{\mathfrak{z}}}.
```

**Beweis:**

```math
\left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{z}\right)\frac{\mathfrak{y}}{\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}}\left(\mathfrak{z}\,\frac{\mathfrak{y}}{\mathfrak{z}}\right) = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x}.
```

**Satz 246:** Ist

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}\mathfrak{z}}{\mathfrak{y}\mathfrak{z}} = \frac{\mathfrak{x}}{\mathfrak{y}}.
```

**Beweis:**

```math
\frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{y}\mathfrak{z}) = \left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}\right)\mathfrak{z} = \mathfrak{x}\mathfrak{z}.
```

**Satz 247:** Ist

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

**Beweis:**

```math
\begin{aligned}
\left(\frac{\mathfrak{x}}{\mathfrak{y}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}}\right)(\mathfrak{y}\mathfrak{u}) &= \frac{\mathfrak{x}}{\mathfrak{y}}\left(\frac{\mathfrak{z}}{\mathfrak{u}}(\mathfrak{u}\mathfrak{y})\right) = \frac{\mathfrak{x}}{\mathfrak{y}}\left(\left(\frac{\mathfrak{z}}{\mathfrak{u}}\,\mathfrak{u}\right)\mathfrak{y}\right) \\
&= \frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{z}\mathfrak{y}) = \frac{\mathfrak{x}}{\mathfrak{y}}(\mathfrak{y}\mathfrak{z}) = \left(\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}\right)\mathfrak{z} = \mathfrak{x}\mathfrak{z}.
\end{aligned}
```

**Satz 248:** Ist

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{z} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

so ist

```math
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\frac{\mathfrak{z}}{\mathfrak{u}}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}}.
```

**Beweis:** Nach Satz 247 und Satz 246 ist

```math
\frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}} \cdot \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{(\mathfrak{x}\mathfrak{u})\mathfrak{z}}{(\mathfrak{y}\mathfrak{z})\mathfrak{u}} = \frac{\mathfrak{x}(\mathfrak{u}\mathfrak{z})}{\mathfrak{y}(\mathfrak{z}\mathfrak{u})} = \frac{\mathfrak{x}}{\mathfrak{y}}.
```

**Satz 249:** Ist

```math
\mathfrak{x} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{n}}{\mathfrak{x}} = \mathfrak{n}.
```

**Beweis:**

```math
\mathfrak{x}\mathfrak{n} = \mathfrak{n}.
```

**Satz 250:** Ist

```math
\mathfrak{x} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{x}} = \mathfrak{e}.
```

**Beweis:**

```math
\mathfrak{x}\mathfrak{e} = \mathfrak{x}.
```

**Satz 251:** Ist

```math
\mathfrak{y} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{e}
```

dann und nur dann, wenn

```math
\mathfrak{x} = \mathfrak{y}.
```

**Beweis:** 1) Ist

```math
\mathfrak{x} = \mathfrak{y},
```

so ist nach Satz 250

```math
\frac{\mathfrak{x}}{\mathfrak{y}} = \frac{\mathfrak{y}}{\mathfrak{y}} = \mathfrak{e}.
```

2) Ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} = \mathfrak{e},
```

so ist nach Satz 222

```math
\mathfrak{x} = \mathfrak{y}\mathfrak{e} = \mathfrak{y}.
```

**Satz 252:** Ist

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} = \frac{\mathfrak{z}}{\mathfrak{u}}
```

dann und nur dann, wenn

```math
\mathfrak{x}\mathfrak{u} = \mathfrak{y}\mathfrak{z}.
```

**Beweis:** Für

```math
\mathfrak{z} = \mathfrak{n}
```

ist die Behauptung klar.

Sonst ist nach Satz 248

```math
\frac{\frac{\mathfrak{x}}{\mathfrak{y}}}{\frac{\mathfrak{z}}{\mathfrak{u}}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{z}},
```

so daß Satz 251 die Behauptung liefert.

**Satz 253:** Ist

```math
\mathfrak{y} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{y}} = \frac{\mathfrak{x} + \mathfrak{z}}{\mathfrak{y}}.
```

**Beweis:**

```math
\mathfrak{y}\left(\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{y}}\right) = \mathfrak{y} \cdot \frac{\mathfrak{x}}{\mathfrak{y}} + \mathfrak{y} \cdot \frac{\mathfrak{z}}{\mathfrak{y}} = \mathfrak{x} + \mathfrak{z}.
```

**Satz 254:** Ist

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} + \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

**Beweis:** Nach Satz 246 und Satz 253 ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} + \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{u}} + \frac{\mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} + \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

**Satz 255:** Ist

```math
\mathfrak{y} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{y}} = \frac{\mathfrak{x} - \mathfrak{z}}{\mathfrak{y}}.
```

**Beweis:**

```math
\mathfrak{y}\left(\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{y}}\right) = \mathfrak{y} \cdot \frac{\mathfrak{x}}{\mathfrak{y}} - \mathfrak{y} \cdot \frac{\mathfrak{z}}{\mathfrak{y}} = \mathfrak{x} - \mathfrak{z}.
```

**Satz 256:** Ist

```math
\mathfrak{y} \neq \mathfrak{n}, \quad \mathfrak{u} \neq \mathfrak{n},
```

so ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} - \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

**Beweis:** Nach Satz 246 und Satz 255 ist

```math
\frac{\mathfrak{x}}{\mathfrak{y}} - \frac{\mathfrak{z}}{\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u}}{\mathfrak{y}\mathfrak{u}} - \frac{\mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}} = \frac{\mathfrak{x}\mathfrak{u} - \mathfrak{y}\mathfrak{z}}{\mathfrak{y}\mathfrak{u}}.
```

## § 6. Konjugierte Zahlen

**Definition 65:** Zu

```math
\mathfrak{x} = [\Xi_1, \Xi_2]
```

heißt

```math
\overline{\mathfrak{x}} = [\Xi_1, -\Xi_2]
```

konjugiert komplex.

**Satz 257:** $\overline{\overline{\mathfrak{x}}} = \mathfrak{x}$.

**Beweis:** $[\Xi_1, -(-\Xi_2)] = [\Xi_1, \Xi_2]$.

**Satz 258:** Es ist

```math
\overline{\mathfrak{x}} = \mathfrak{n}
```

dann und nur dann, wenn

```math
\mathfrak{x} = \mathfrak{n}.
```

**Beweis:**

```math
\Xi_1 = 0, \quad -\Xi_2 = 0
```

ist dasselbe wie

```math
\Xi_1 = 0, \quad \Xi_2 = 0.
```

**Satz 259:** Es ist

```math
\overline{\mathfrak{x}} = \mathfrak{x}
```

dann und nur dann, wenn $\mathfrak{x}$ die Form

```math
\mathfrak{x} = [\Xi, 0]
```

hat.

**Beweis:** Es ist

```math
\Xi_1 = \Xi_1, \quad -\Xi_2 = \Xi_2
```

dann und nur dann, wenn

```math
\Xi_2 = 0.
```

**Satz 260:** $\overline{\mathfrak{x} + \mathfrak{y}} = \overline{\mathfrak{x}} + \overline{\mathfrak{y}}$.

**Beweis:** Für

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
```

ist

```math
\begin{aligned}
\overline{\mathfrak{x} + \mathfrak{y}} &= [\Xi_1 + \mathrm{H}_1, -(\Xi_2 + \mathrm{H}_2)] = [\Xi_1 + \mathrm{H}_1, -\Xi_2 + (-\mathrm{H}_2)] \\
&= [\Xi_1, -\Xi_2] + [\mathrm{H}_1, -\mathrm{H}_2] = \overline{\mathfrak{x}} + \overline{\mathfrak{y}}.
\end{aligned}
```

**Satz 261:** $\overline{\mathfrak{x}\mathfrak{y}} = \overline{\mathfrak{x}}\,\overline{\mathfrak{y}}$.

**Beweis:** Für

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2]
```

ist

```math
\begin{aligned}
\overline{\mathfrak{x}\mathfrak{y}} &= [\Xi_1\mathrm{H}_1 - \Xi_2\mathrm{H}_2, -(\Xi_1\mathrm{H}_2 + \Xi_2\mathrm{H}_1)] \\
&= [\Xi_1\mathrm{H}_1 - (-\Xi_2)(-\mathrm{H}_2), \Xi_1(-\mathrm{H}_2) + (-\Xi_2)\mathrm{H}_1] \\
&= [\Xi_1, -\Xi_2][\mathrm{H}_1, -\mathrm{H}_2] = \overline{\mathfrak{x}}\,\overline{\mathfrak{y}}.
\end{aligned}
```

**Satz 262:** $\overline{\mathfrak{x} - \mathfrak{y}} = \overline{\mathfrak{x}} - \overline{\mathfrak{y}}$.

**Beweis:** Wegen

```math
\mathfrak{x} = (\mathfrak{x} - \mathfrak{y}) + \mathfrak{y}
```

ist nach Satz 260

```math
\overline{\mathfrak{x}} = \overline{\mathfrak{x} - \mathfrak{y}} + \overline{\mathfrak{y}},
```

```math
\overline{\mathfrak{x} - \mathfrak{y}} = \overline{\mathfrak{x}} - \overline{\mathfrak{y}}.
```

**Satz 263:** Für

```math
\mathfrak{y} \neq \mathfrak{n}
```

ist

```math
\overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)} = \frac{\overline{\mathfrak{x}}}{\overline{\mathfrak{y}}}.
```

**Beweis:** Wegen

```math
\mathfrak{x} = \frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y}
```

ist nach Satz 261

```math
\overline{\mathfrak{x}} = \overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)}\,\overline{\mathfrak{y}};
```

nach Satz 258 ist

```math
\overline{\mathfrak{y}} \neq \mathfrak{n},
```

also

```math
\overline{\left(\frac{\mathfrak{x}}{\mathfrak{y}}\right)} = \frac{\overline{\mathfrak{x}}}{\overline{\mathfrak{y}}}.
```

## § 7. Absoluter Betrag

**Definition 66:** Es bedeute $\sqrt{\zeta}$ die nach Satz 161 eindeutig vorhandene (positive) Lösung $\xi$ von

```math
\xi\xi = \zeta.
```

**Definition 67:** $\sqrt{0} = 0$.

**Definition 68:**

```math
|[\Xi_1, \Xi_2]| = \sqrt{\Xi_1\Xi_1 + \Xi_2\Xi_2}.
```

($|\ |$ sprich: absoluter Betrag.)

**Satz 264:**

```math
|\mathfrak{x}| \begin{cases} > 0 & \text{für } \mathfrak{x} \neq \mathfrak{n}, \\ = 0 & \text{für } \mathfrak{x} = \mathfrak{n}. \end{cases}
```

**Beweis:** Definitionen 68, 66 und 67.

**Satz 265:**

```math
|[\Xi_1, \Xi_2]| \geqq |\Xi_1|,
```

```math
|[\Xi_1, \Xi_2]| \geqq |\Xi_2|.
```

**Beweis:**

```math
|[\Xi_1, \Xi_2]|\,|[\Xi_1, \Xi_2]| = \Xi_1\Xi_1 + \Xi_2\Xi_2 \begin{cases} \geqq \Xi_1\Xi_1 = |\Xi_1||\Xi_1|, \\ \geqq \Xi_2\Xi_2 = |\Xi_2||\Xi_2|. \end{cases}
```

Aus

```math
\Xi\Xi \geqq \mathrm{H}\mathrm{H}, \quad \Xi \geqq 0, \quad \mathrm{H} \geqq 0
```

folgt

```math
\Xi \geqq \mathrm{H},
```

da sonst

```math
0 \leqq \Xi < \mathrm{H},
```

```math
\Xi\Xi < \mathrm{H}\mathrm{H}
```

wäre. Damit ist Satz 265 bewiesen.

**Satz 266:** Aus

```math
[\Xi, 0][\Xi, 0] = [\mathrm{H}, 0][\mathrm{H}, 0], \quad \Xi \geqq 0, \quad \mathrm{H} \geqq 0
```

folgt

```math
\Xi = \mathrm{H}.
```

**Beweis:** Wegen

```math
[\mathrm{Z}, 0][\mathrm{Z}, 0] = [\mathrm{Z}\mathrm{Z} - 0 \cdot 0, \mathrm{Z} \cdot 0 + 0 \cdot \mathrm{Z}] = [\mathrm{Z}\mathrm{Z}, 0]
```

ist nach Voraussetzung

```math
[\Xi\Xi, 0] = [\mathrm{H}\mathrm{H}, 0],
```

```math
\Xi\Xi = \mathrm{H}\mathrm{H}.
```

Ist

```math
\Xi > 0,
```

so folgt

```math
\mathrm{H}\mathrm{H} = \Xi\Xi > 0,
```

also nach Satz 161

```math
\mathrm{H} > 0,
```

```math
\Xi = \mathrm{H}.
```

Ist

```math
\Xi = 0,
```

so folgt

```math
\mathrm{H}\mathrm{H} = \Xi\Xi = 0,
```

```math
\mathrm{H} = 0 = \Xi.
```

**Satz 267:** $[|\mathfrak{x}|, 0][|\mathfrak{x}|, 0] = \mathfrak{x}\overline{\mathfrak{x}}$.

**Beweis:** Wird

```math
\mathfrak{x} = [\Xi_1, \Xi_2]
```

gesetzt, so ist

```math
\begin{aligned}
[|\mathfrak{x}|, 0][|\mathfrak{x}|, 0] &= [|\mathfrak{x}||\mathfrak{x}|, 0] = [\Xi_1\Xi_1 + \Xi_2\Xi_2, 0] \\
&= [\Xi_1\Xi_1 - \Xi_2(-\Xi_2), \Xi_1(-\Xi_2) + \Xi_2\Xi_1] = [\Xi_1, \Xi_2][\Xi_1, -\Xi_2] = \mathfrak{x}\overline{\mathfrak{x}}.
\end{aligned}
```

**Satz 268:** $|\mathfrak{x}\mathfrak{y}| = |\mathfrak{x}||\mathfrak{y}|$.

**Beweis:** Nach Satz 267 und Satz 261 ist

```math
\begin{aligned}
[|\mathfrak{x}\mathfrak{y}|, 0][|\mathfrak{x}\mathfrak{y}|, 0] &= (\mathfrak{x}\mathfrak{y})\overline{\mathfrak{x}\mathfrak{y}} = (\mathfrak{x}\mathfrak{y})(\overline{\mathfrak{x}}\,\overline{\mathfrak{y}}) = (\mathfrak{x}\overline{\mathfrak{x}})(\mathfrak{y}\overline{\mathfrak{y}}) \\
&= ([|\mathfrak{x}|, 0][|\mathfrak{x}|, 0])([|\mathfrak{y}|, 0][|\mathfrak{y}|, 0]) \\
&= ([|\mathfrak{x}|, 0][|\mathfrak{y}|, 0])([|\mathfrak{x}|, 0][|\mathfrak{y}|, 0]) \\
&= [|\mathfrak{x}||\mathfrak{y}| - 0 \cdot 0, |\mathfrak{x}| \cdot 0 + 0 \cdot |\mathfrak{y}|][|\mathfrak{x}||\mathfrak{y}| - 0 \cdot 0, |\mathfrak{x}| \cdot 0 + 0 \cdot |\mathfrak{y}|] \\
&= [|\mathfrak{x}||\mathfrak{y}|, 0][|\mathfrak{x}||\mathfrak{y}|, 0],
\end{aligned}
```

nach Satz 266 also

```math
|\mathfrak{x}\mathfrak{y}| = |\mathfrak{x}||\mathfrak{y}|.
```

**Satz 269:** Ist

```math
\mathfrak{y} \neq \mathfrak{n},
```

so ist

```math
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| = \frac{|\mathfrak{x}|}{|\mathfrak{y}|}.
```

**Beweis:**

```math
|\mathfrak{y}| > 0,
```

```math
\frac{\mathfrak{x}}{\mathfrak{y}}\,\mathfrak{y} = \mathfrak{x},
```

also nach Satz 268

```math
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| |\mathfrak{y}| = |\mathfrak{x}|,
```

```math
\left|\frac{\mathfrak{x}}{\mathfrak{y}}\right| = \frac{|\mathfrak{x}|}{|\mathfrak{y}|}.
```

**Satz 270:** Aus

```math
\mathfrak{x} + \mathfrak{y} = \mathfrak{e}
```

folgt

```math
|\mathfrak{x}| + |\mathfrak{y}| \geqq 1.
```

**Beweis:** Ist

```math
\mathfrak{x} = [\Xi_1, \Xi_2], \quad \mathfrak{y} = [\mathrm{H}_1, \mathrm{H}_2],
```

so ist nach Satz 265

```math
|\mathfrak{x}| \geqq |\Xi_1| \geqq \Xi_1,
```

```math
|\mathfrak{y}| \geqq |\mathrm{H}_1| \geqq \mathrm{H}_1,
```

also

```math
|\mathfrak{x}| + |\mathfrak{y}| \geqq \Xi_1 + \mathrm{H}_1 = 1.
```

**Satz 271:** $|\mathfrak{x} + \mathfrak{y}| \leqq |\mathfrak{x}| + |\mathfrak{y}|$.

**Beweis:** 1) Ist

```math
\mathfrak{x} + \mathfrak{y} = \mathfrak{n},
```

so ist die linke Seite der Behauptung $0$, also $\leqq$ der rechten.

2) Ist

```math
\mathfrak{x} + \mathfrak{y} \neq \mathfrak{n},
```

so ist, wegen

```math
\frac{\mathfrak{x}}{\mathfrak{x} + \mathfrak{y}} + \frac{\mathfrak{y}}{\mathfrak{x} + \mathfrak{y}} = \frac{\mathfrak{x} + \mathfrak{y}}{\mathfrak{x} + \mathfrak{y}} = \mathfrak{e},
```

nach Satz 270

```math
\left|\frac{\mathfrak{x}}{\mathfrak{x} + \mathfrak{y}}\right| + \left|\frac{\mathfrak{y}}{\mathfrak{x} + \mathfrak{y}}\right| \geqq 1,
```

also nach Satz 269

```math
\frac{|\mathfrak{x}|}{|\mathfrak{x} + \mathfrak{y}|} + \frac{|\mathfrak{y}|}{|\mathfrak{x} + \mathfrak{y}|} \geqq 1,
```

```math
|\mathfrak{x}| + |\mathfrak{y}| = |\mathfrak{x} + \mathfrak{y}|\left(\frac{|\mathfrak{x}|}{|\mathfrak{x} + \mathfrak{y}|} + \frac{|\mathfrak{y}|}{|\mathfrak{x} + \mathfrak{y}|}\right) \geqq |\mathfrak{x} + \mathfrak{y}|.
```

**Satz 272:** $|-\mathfrak{x}| = |\mathfrak{x}|$.

**Beweis:** $(-\Xi_1)(-\Xi_1) + (-\Xi_2)(-\Xi_2) = \Xi_1\Xi_1 + \Xi_2\Xi_2$.

**Satz 273:** $|\mathfrak{x} - \mathfrak{y}| \geqq ||\mathfrak{x}| - |\mathfrak{y}||$.

**Beweis:**

```math
\mathfrak{x} = \mathfrak{y} + (\mathfrak{x} - \mathfrak{y}),
```

also nach Satz 271

```math
|\mathfrak{x}| \leqq |\mathfrak{y}| + |\mathfrak{x} - \mathfrak{y}|,
```

```math
|\mathfrak{x} - \mathfrak{y}| \geqq |\mathfrak{x}| - |\mathfrak{y}|.
```

Hieraus folgt, wenn $\mathfrak{x}$ und $\mathfrak{y}$ vertauscht werden,

```math
|\mathfrak{y} - \mathfrak{x}| \geqq |\mathfrak{y}| - |\mathfrak{x}|,
```

also nach Satz 272

```math
|\mathfrak{x} - \mathfrak{y}| = |-(\mathfrak{y} - \mathfrak{x})| = |\mathfrak{y} - \mathfrak{x}| \geqq |\mathfrak{y}| - |\mathfrak{x}| = -(|\mathfrak{x}| - |\mathfrak{y}|).
```

Aus

```math
\Xi \geqq \mathrm{H}, \quad \Xi \geqq -\mathrm{H}
```

folgt aber, da $|\mathrm{H}|$ entweder $\mathrm{H}$ oder $-\mathrm{H}$ ist,

```math
\Xi \geqq |\mathrm{H}|.
```

Daher ist

```math
|\mathfrak{x} - \mathfrak{y}| \geqq ||\mathfrak{x}| - |\mathfrak{y}||.
```

## § 8. Summen und Produkte

**Satz 274:** Ist

```math
x < y,
```

so können die $m \leqq x$ nicht auf die $n \leqq y$ ein-eindeutig bezogen werden.

Unter Beziehen verstehe ich in diesem Paragraphen immer ein-eindeutiges Beziehen.

**Beweis:** Es sei $\mathfrak{M}$ die Menge der $x$, für die die Behauptung bei allen $y > x$ wahr ist.

I) Ist

```math
1 < y,
```

so kann $m = 1$ nicht auf die $n \leqq y$ bezogen werden; denn entspricht dem $m = 1$ das $n = 1$, so bleibt kein $m$ für $n = y$ übrig; ist $m = 1$ auf ein $n > 1$ bezogen, so bleibt kein $m$ für $n = 1$ übrig.

1 gehört also zu $\mathfrak{M}$.

II) Es gehöre $x$ zu $\mathfrak{M}$, und es sei

```math
x + 1 < y.
```

Wenn eine Beziehung der $m \leqq x + 1$ auf die $n \leqq y$ vorliegt, so unterscheiden wir zwei Fälle.

α) Dem $m = x + 1$ entspricht $n = y$. Dann sind die $m \leqq x$ auf die $n \leqq y - 1$ bezogen; das geht nicht wegen

```math
x < y - 1.
```

β) Dem $m = x + 1$ entspricht ein $n = n_0 < y$. Dann sei $m = m_0$ die dem $n = y$ entsprechende Zahl, also $m_0 < x + 1$. Man betrachte nun folgende abgeänderte Beziehung der $m \leqq x + 1$ auf die $n \leqq y$.

```math
\begin{cases}
\text{Ist } m \neq m_0,\ m \neq x + 1, \text{ so gelte das Alte.} \\
m = m_0 \text{ entspreche } n = n_0. \\
m = x + 1 \text{ entspreche } n = y.
\end{cases}
```

Dann haben wir eine Beziehung von der soeben in α) als unmöglich nachgewiesenen Art.

Also gehört $x + 1$ zu $\mathfrak{M}$, und die Behauptung ist bewiesen.

Da die Beweise der folgenden Sätze 275 bis 278 und 280 bis 286 nebst zugehörigen Definitionen für Summen und Produkte wörtlich dieselben wären, machen wir das, um lange Wiederholungen zu vermeiden, nur einmal und wählen ein neutrales Zeichen $\dotplus$, welches durchweg $+$ oder durchweg $\cdot$ bedeuten soll. Das einstweilen neutrale Zeichen $\mathop{\Large\dotplus}$ wird später entsprechend in zwei Zeichen ($\Sigma$ bei $+$, $\Pi$ bei $\cdot$) gespalten werden.

Unter definiert verstehe ich in dieser ganzen Entwicklung: als komplexe Zahl definiert.

**Satz 275:** Es sei $x$ fest, $\mathfrak{f}(n)$ für $n \leqq x$ definiert. Dann gibt es genau ein für $n \leqq x$ definiertes

```math
\mathfrak{g}_x(n)
```

(ausführlicher geschrieben

```math
\mathfrak{g}_{x,\mathfrak{f}}(n),
```

abgekürzt geschrieben

```math
\mathfrak{g}(n))
```

mit folgenden Eigenschaften:

```math
\begin{aligned}
\mathfrak{g}_x(1) &= \mathfrak{f}(1), \\
\mathfrak{g}_x(n + 1) &= \mathfrak{g}_x(n) \dotplus \mathfrak{f}(n + 1) \quad \text{für } n < x.
\end{aligned}
```

**Beweis:** 1) Zunächst zeigen wir, daß es höchstens ein solches $\mathfrak{g}_x(n)$ gibt.

Es mögen $\mathfrak{g}(n)$ und $\mathfrak{h}(n)$ die geforderten Eigenschaften haben. $\mathfrak{M}$ sei die aus den $n \leqq x$ mit

```math
\mathfrak{g}(n) = \mathfrak{h}(n)
```

und den $n > x$ bestehende Menge.

I) $\mathfrak{g}(1) = \mathfrak{f}(1) = \mathfrak{h}(1)$;

1 gehört also zu $\mathfrak{M}$.

II) $n$ gehöre zu $\mathfrak{M}$. Dann ist entweder

```math
n < x, \quad \mathfrak{g}(n) = \mathfrak{h}(n),
```

also

```math
\mathfrak{g}(n + 1) = \mathfrak{g}(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{h}(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{h}(n + 1),
```

also $n + 1$ zu $\mathfrak{M}$ gehörig; oder

```math
n \geqq x,
```

also

```math
n + 1 > x
```

und $n + 1$ auch zu $\mathfrak{M}$ gehörig.

Daher ist $\mathfrak{M}$ die Menge aller positiven ganzen Zahlen; für jedes $n \leqq x$ ist also

```math
\mathfrak{g}(n) = \mathfrak{h}(n),
```

w. z. b. w.

2) Wir zeigen jetzt, daß es zu jedem $x$, wenn $\mathfrak{f}(n)$ für $n \leqq x$ definiert ist, ein passendes $\mathfrak{g}_x(n)$ gibt.

$\mathfrak{M}$ sei die Menge der $x$, für die dies wahr ist, für die es also, wenn $\mathfrak{f}(n)$ für $n \leqq x$ definiert ist, nach 1) genau ein passendes $\mathfrak{g}_x(n)$ gibt.

I) Für $x = 1$ leistet, wenn $\mathfrak{f}(1)$ definiert ist,

```math
\mathfrak{g}_x(1) = \mathfrak{f}(1)
```

das Gewünschte (da die zweite Forderung wegen der Unmöglichkeit von $n < 1$ nicht erhoben wird). 1 gehört also zu $\mathfrak{M}$.

II) Es sei $x$ zu $\mathfrak{M}$ gehörig. Wenn $\mathfrak{f}(n)$ für $n \leqq x + 1$ definiert ist, ist es für $n \leqq x$ definiert, also hier genau ein zugehöriges $\mathfrak{g}_x(n)$ vorhanden. Nun leistet

```math
\mathfrak{g}_{x+1}(n) = \begin{cases}
\mathfrak{g}_x(n) & \text{für } n \leqq x, \\
\mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1) & \text{für } n = x + 1
\end{cases}
```

das Gewünschte bei $x + 1$. Denn erstens ist

```math
\mathfrak{g}_{x+1}(1) = \mathfrak{g}_x(1) = \mathfrak{f}(1).
```

Zweitens gilt für

```math
n < x
```

(wegen $n + 1 \leqq x$)

```math
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_x(n + 1) = \mathfrak{g}_x(n) \dotplus \mathfrak{f}(n + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1),
```

während für

```math
n = x
```

```math
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1)
```

ist; aus

```math
n < x + 1
```

folgt also jedenfalls

```math
\mathfrak{g}_{x+1}(n + 1) = \mathfrak{g}_{x+1}(n) \dotplus \mathfrak{f}(n + 1).
```

Daher gehört $x + 1$ zu $\mathfrak{M}$, und $\mathfrak{M}$ umfaßt alle positiven ganzen Zahlen.

**Satz 276:** Wenn $\mathfrak{f}(n)$ für $n \leqq x + 1$ definiert ist, gilt für die zugehörigen $\mathfrak{g}_x(n)$ und $\mathfrak{g}_{x+1}(n)$

```math
\mathfrak{g}_{x+1}(x + 1) = \mathfrak{g}_x(x) \dotplus \mathfrak{f}(x + 1).
```

**Beweis:** Das kam bei der Konstruktion in 2), II) des vorigen Beweises vor.

**Definition 69:** Ist $\mathfrak{f}(n)$ für $n \leqq x$ definiert, so ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{g}_x(x) \quad (= \mathfrak{g}_{x,\mathfrak{f}}(x)).
```

Wenn $\dotplus$ die Bedeutung $+$ hat, schreibt man

```math
\sum_{n=1}^{x} \mathfrak{f}(n);
```

wenn $\dotplus$ die Bedeutung $\cdot$ hat, schreibt man

```math
\prod_{n=1}^{x} \mathfrak{f}(n).
```

($\Sigma$ sprich: Summe; $\Pi$ sprich: Produkt.)

Statt $n$ kann in diesen Zeichen auch jeder andere Buchstabe stehen, der positive ganze Zahlen bezeichnet.

**Satz 277:** Ist $\mathfrak{f}(1)$ definiert, so ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) = \mathfrak{f}(1).
```

**Beweis:** $\mathfrak{g}_1(1) = \mathfrak{f}(1)$.

**Satz 278:** Ist $\mathfrak{f}(n)$ für $n \leqq x + 1$ definiert, so ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1).
```

**Beweis:** Satz 276.

**Satz 279:**

```math
\sum_{n=1}^{x} \mathfrak{x} = \mathfrak{x}[x, 0].
```

**Beweis:** $\mathfrak{x}$ sei fest, $\mathfrak{M}$ die Menge der $x$, für die dies gilt.

I) Nach Satz 277 ist

```math
\sum_{n=1}^{1} \mathfrak{x} = \mathfrak{x} = \mathfrak{x}\mathfrak{e} = \mathfrak{x}[1, 0].
```

1 gehört also zu $\mathfrak{M}$.

II) Wenn $x$ zu $\mathfrak{M}$ gehört, so folgt aus Satz 278

```math
\sum_{n=1}^{x+1} \mathfrak{x} = \sum_{n=1}^{x} \mathfrak{x} + \mathfrak{x} = \mathfrak{x}[x, 0] + \mathfrak{x}[1, 0] = \mathfrak{x}([x, 0] + [1, 0]) = \mathfrak{x}[x + 1, 0].
```

$x + 1$ gehört also zu $\mathfrak{M}$.

Daher gilt die Behauptung für alle $x$.

**Satz 280:** Sind $\mathfrak{f}(1)$ und $\mathfrak{f}(1 + 1)$ definiert, so ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{1+1} \mathfrak{f}(n) = \mathfrak{f}(1) \dotplus \mathfrak{f}(1 + 1).
```

**Beweis:** Nach Satz 278 und Satz 277 ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{1+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) \dotplus \mathfrak{f}(1 + 1) = \mathfrak{f}(1) \dotplus \mathfrak{f}(1 + 1).
```

**Satz 281:** Ist $\mathfrak{f}(n)$ für $n \leqq x + y$ definiert, so ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+y} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n).
```

**Beweis:** Bei festem $x$ sei $\mathfrak{M}$ die Menge der $y$, für die dies gilt.

I) Ist $\mathfrak{f}(n)$ für $n \leqq x + 1$ definiert, so ist nach Satz 278 und Satz 277

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(x + n).
```

1 gehört also zu $\mathfrak{M}$.

II) $y$ gehöre zu $\mathfrak{M}$. Wenn $\mathfrak{f}(n)$ für $n \leqq x + (y + 1)$ definiert ist, so ist nach Satz 278 (auf $x + y$ statt $x$ angewendet)

```math
\begin{aligned}
\mathop{\Large\dotplus}\limits_{n=1}^{x+(y+1)} \mathfrak{f}(n) &= \mathop{\Large\dotplus}\limits_{n=1}^{(x+y)+1} \mathfrak{f}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x+y} \mathfrak{f}(n) \dotplus \mathfrak{f}((x + y) + 1) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n)\right) \dotplus \mathfrak{f}(x + (y + 1)) \\
&= \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \left(\mathop{\Large\dotplus}\limits_{n=1}^{y} \mathfrak{f}(x + n) \dotplus \mathfrak{f}(x + (y + 1))\right),
\end{aligned}
```

also nach Satz 278 (auf $y$ statt $x$, $\mathfrak{f}(x + n)$ statt $\mathfrak{f}(n)$ angewendet)

```math
= \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{y+1} \mathfrak{f}(x + n).
```

$y + 1$ gehört also zu $\mathfrak{M}$, und der Satz ist bewiesen.

**Satz 282:** Sind $\mathfrak{f}(n)$ und $\mathfrak{g}(n)$ für $n \leqq x$ definiert, so ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n).
```

**Beweis:** $\mathfrak{M}$ sei die Menge der $x$, für die dies gilt.

I) Sind $\mathfrak{f}(1)$ und $\mathfrak{g}(1)$ definiert, so ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{1} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) = \mathfrak{f}(1) \dotplus \mathfrak{g}(1) = \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{1} \mathfrak{g}(n).
```

1 gehört also zu $\mathfrak{M}$.

II) $x$ gehöre zu $\mathfrak{M}$. Sind $\mathfrak{f}(n)$ und $\mathfrak{g}(n)$ für $n \leqq x + 1$ definiert, so ist, mit Rücksicht auf

```math
\begin{aligned}
(\mathfrak{x} \dotplus \mathfrak{y}) \dotplus (\mathfrak{z} \dotplus \mathfrak{u}) &= ((\mathfrak{x} \dotplus \mathfrak{y}) \dotplus \mathfrak{z}) \dotplus \mathfrak{u} = (\mathfrak{z} \dotplus (\mathfrak{x} \dotplus \mathfrak{y})) \dotplus \mathfrak{u} \\
&= ((\mathfrak{z} \dotplus \mathfrak{x}) \dotplus \mathfrak{y}) \dotplus \mathfrak{u} = (\mathfrak{z} \dotplus \mathfrak{x}) \dotplus (\mathfrak{y} \dotplus \mathfrak{u}) = (\mathfrak{x} \dotplus \mathfrak{z}) \dotplus (\mathfrak{y} \dotplus \mathfrak{u}),
\end{aligned}
```

```math
\begin{aligned}
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) &= \mathop{\Large\dotplus}\limits_{n=1}^{x} (\mathfrak{f}(n) \dotplus \mathfrak{g}(n)) \dotplus (\mathfrak{f}(x + 1) \dotplus \mathfrak{g}(x + 1)) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n)\right) \dotplus (\mathfrak{f}(x + 1) \dotplus \mathfrak{g}(x + 1)) \\
&= \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1)\right) \dotplus \left(\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x + 1)\right) \\
&= \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n).
\end{aligned}
```

Also gehört $x + 1$ zu $\mathfrak{M}$, und die Behauptung gilt stets.

**Satz 283:** $s(n)$ beziehe die $n \leqq x$ auf die $m \leqq x$. $\mathfrak{f}(n)$ sei für $n \leqq x$ definiert. Dann ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(s(n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n).
```

**Beweis:** Zur Abkürzung werde

```math
\mathfrak{f}(s(n)) = \mathfrak{g}(n)
```

gesetzt.

$\mathfrak{M}$ sei die Menge der $x$, für die die Behauptung

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n)
```

(bei allen zulässigen $s$ und $\mathfrak{f}$) wahr ist.

I) Für

```math
x = 1
```

ist

```math
s(1) = 1,
```

also, wenn $\mathfrak{f}(1)$ definiert ist,

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathfrak{g}(1) = \mathfrak{f}(1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n).
```

1 gehört also zu $\mathfrak{M}$.

II) $x$ gehöre zu $\mathfrak{M}$. Es beziehe $s(n)$ die $n \leqq x + 1$ auf die $m \leqq x + 1$, und $\mathfrak{f}(n)$ sei für $n \leqq x + 1$ definiert.

1) Falls

```math
s(x + 1) = x + 1,
```

bezieht $s(n)$ die $n \leqq x$ auf die $m \leqq x$. Alsdann ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n),
```

```math
\mathfrak{g}(x + 1) = \mathfrak{f}(x + 1),
```

also

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(n) \dotplus \mathfrak{g}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(n) \dotplus \mathfrak{f}(x + 1) = \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n).
```

2) Falls

```math
s(x + 1) < x + 1, \quad s(1) = 1,
```

bezieht $s(n)$ die $n$ mit $1 + 1 \leqq n \leqq x + 1$ auf die $m$ mit $1 + 1 \leqq m \leqq x + 1$; also bezieht $s(1 + n) - 1$ die $n \leqq x$ auf die $m \leqq x$. Daher ist

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(1 + n) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(s(1 + n)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + (s(1 + n) - 1)) = \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + n),
```

also nach Satz 281

```math
\mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{g}(n) = \mathfrak{g}(1) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{g}(1 + n) = \mathfrak{f}(1) \dotplus \mathop{\Large\dotplus}\limits_{n=1}^{x} \mathfrak{f}(1 + n) = \mathop{\Large\dotplus}\limits_{n=1}^{x+1} \mathfrak{f}(n).
```

3) Falls

```math
s(x + 1) < x + 1, \quad s(1) > 1,
```

werde

```math
s(1) = a
```

gesetzt und $b$ aus

```math
1 \leqq b \leqq x + 1, \quad s(b) = 1
```

bestimmt. Dann ist

```math
a > 1, \quad b > 1.
```

α) Es sei

```math
a < x + 1.
```

Dann bezieht sowohl

```math
s_1(n) = \begin{cases}
1 & \text{für } n = 1, \\
a & \text{für } n = b, \\
s(n) & \text{für } 1 < n \leqq x + 1,\ n \neq b
\end{cases}
```

als auch

```math
s_2(n) = \begin{cases}
a & \text{für } n = 1, \\
1 & \text{für } n = a, \\
n & \text{für } 1 < n \leqq x + 1,\ n \neq a
\end{cases}
```

die $n \leqq x + 1$ auf die $m \leqq x + 1$.

Nun ist

```math
s(n) = s_2(s_1(n)) \quad \text{für } n \leqq x + 1.
```

Denn durch $s_2(s_1(n))$ geht über

```math
\begin{aligned}
&1 \text{ via } 1 \text{ in } a = s(1), \\
&b \text{ via } a \text{ in } 1 = s(b), \\
&\text{jedes andere } n \leqq x + 1 \text{ via } s(n) \text{ in } s(n).
\end{aligned}
```

$s_1(n)$ läßt 1, und $s_2(n)$ läßt $x + 1$ unverändert. Nach 2) und 1) ist also

```math
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(s(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_2(s_1(n))) = \sum_{n=1}^{x+1} \mathfrak{f}(s_1(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
```

β) Es sei

```math
a = x + 1, \quad b < x + 1.
```

Dann bezieht

```math
s_3(n) = \begin{cases}
b & \text{für } n = 1, \\
1 & \text{für } n = b, \\
n & \text{für } 1 < n \leqq x + 1,\ n \neq b
\end{cases}
```

die $n \leqq x + 1$ auf die $m \leqq x + 1$. Ferner ist

```math
s(n) = s_1(s_3(n)) \quad \text{für } n \leqq x + 1.
```

Denn durch $s_1(s_3(n))$ geht über

```math
\begin{aligned}
&1 \text{ via } b \text{ in } a = s(1), \\
&b \text{ via } 1 \text{ in } 1 = s(b), \\
&\text{jedes andere } n \leqq x + 1 \text{ via } n \text{ in } s(n).
\end{aligned}
```

$s_3(n)$ läßt $x + 1$ unverändert. Nach 1) und 2) ist also

```math
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(s(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(s_1(s_3(n))) = \sum_{n=1}^{x+1} \mathfrak{f}(s_3(n)) = \sum_{n=1}^{x+1} \mathfrak{f}(n).
```

γ) Es sei

```math
a = b = x + 1.
```

Ist $x = 1$, so ist

```math
\sum_{n=1}^{x+1} \mathfrak{g}(n) = \sum_{n=1}^{x+1} \mathfrak{f}(n)
```

trivial.

Ist $x > 1$, so bezieht

```math
s_4(n) = \begin{cases}
1 & \text{für } n = 1, \\
x + 1 & \text{für } n = x + 1, \\
s(n) & \text{für } 1 < n < x + 1
\end{cases}
```

die $n \leqq x + 1$ auf die $m \leqq x + 1$. Folglich ist nach 1)

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

Daher gehört $x + 1$ zu $\mathfrak{M}$, und der Satz ist bewiesen.

In Definition 70 und Satz 284 bis Satz 286 bezeichnen ausnahmsweise lateinische Buchstaben ganze (nicht notwendig positive) Zahlen.

**Definition 70:** Es sei

```math
y \leqq x,
```

$\mathfrak{f}(n)$ für

```math
y \leqq n \leqq x
```

definiert. Dann ist

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1).
```

Statt $n$ kann auch irgend ein anderer Buchstabe stehen, der ganze Zahlen bezeichnet.

Man beachte

```math
x + 1 > y; \quad y \leqq (n + y) - 1 \leqq x \quad \text{für } 1 \leqq n \leqq (x + 1) - y;
```

ferner, daß für $y = 1$ die Definition 70 (wie es sein muß) im Einklang mit Definition 69 steht.

**Satz 284:** Es sei

```math
y \leqq u < x;
```

$\mathfrak{f}(n)$ sei für

```math
y \leqq n \leqq x
```

definiert. Dann ist

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=u+1}^{x} \mathfrak{f}(n).
```

**Beweis:** Nach Definition 70 und Satz 281 ist

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1) = \sum_{n=1}^{(u+1)-y} \mathfrak{f}((n + y) - 1) \dotplus \sum_{n=1}^{x-u} \mathfrak{f}(((((u + 1) - y) + n) + y) - 1);
```

denn

```math
((u + 1) - y) + (x - u) = (x + (-u)) + ((u + 1) + (-y)) = (x + ((-u) + (u + 1))) + (-y) = (x + 1) - y.
```

Nun ist

```math
(((u + 1) - y) + n) + y = ((u + 1) - y) + (y + n) = (((u + 1) - y) + y) + n = n + (u + 1),
```

also nach Definition 70

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=1}^{(x+1)-(u+1)} \mathfrak{f}((n + (u + 1)) - 1) = \sum_{n=y}^{u} \mathfrak{f}(n) \dotplus \sum_{n=u+1}^{x} \mathfrak{f}(n).
```

**Satz 285:** Es sei

```math
y \leqq x,
```

$\mathfrak{f}(n)$ für

```math
y \leqq n \leqq x
```

definiert. Dann ist

```math
\sum_{n=y}^{x} \mathfrak{f}(n) = \sum_{n=y+v}^{x+v} \mathfrak{f}(n - v).
```

**Beweis:** Nach Definition 70 ist die linke Seite der Behauptung

```math
= \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1),
```

die rechte (man beachte $y \leqq n - v \leqq x$ für $y + v \leqq n \leqq x + v$)

```math
= \sum_{n=1}^{((x+v)+1)-(y+v)} \mathfrak{f}(((n + (y + v)) - 1) - v);
```

hierin ist

```math
((x + v) + 1) - (y + v) = (1 + (x + v)) + ((-v) + (-y)) = (1 + ((x + v) + (-v))) + (-y) = (1 + x) - y = (x + 1) - y
```

und

```math
\begin{aligned}
((n + (y + v)) - 1) - v &= (n + (y + v)) - (1 + v) = ((n + y) + v) + (-v + (-1)) \\
&= (((n + y) + v) + (-v)) + (-1) = ((n + y) + (v + (-v))) - 1 = (n + y) - 1.
\end{aligned}
```

**Satz 286:** Es sei

```math
y \leqq x,
```

$\mathfrak{f}(n)$ für

```math
y \leqq n \leqq x
```

definiert. $s(n)$ beziehe die $n$ mit $y \leqq n \leqq x$ auf die $m$ mit $y \leqq m \leqq x$. Dann ist

```math
\sum_{n=y}^{x} \mathfrak{f}(s(n)) = \sum_{n=y}^{x} \mathfrak{f}(n).
```

**Beweis:**

```math
s_1(n) = s((n + y) - 1) - (y - 1)
```

bezieht die positiven $n \leqq (x + 1) - y$ auf die positiven $m \leqq (x + 1) - y$. Daher ist nach Satz 283

```math
\begin{aligned}
\sum_{n=y}^{x} \mathfrak{f}(s(n)) &= \sum_{n=1}^{(x+1)-y} \mathfrak{f}(s((n + y) - 1)) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}(s_1(n) + (y - 1)) \\
&= \sum_{n=1}^{(x+1)-y} \mathfrak{f}(n + (y - 1)) = \sum_{n=1}^{(x+1)-y} \mathfrak{f}((n + y) - 1) = \sum_{n=y}^{x} \mathfrak{f}(n).
\end{aligned}
```

Üblich ist statt

```math
\sum_{n=y}^{x} \mathfrak{f}(n)
```

auch die saloppe Schreibweise

```math
\mathfrak{f}(y) + \mathfrak{f}(y + 1) + \cdots + \mathfrak{f}(x)
```

(und entsprechend beim Produkt); aber völlig einwandfrei ist z. B.

```math
\mathfrak{f}(1) + \mathfrak{f}(1 + 1) + \mathfrak{f}((1 + 1) + 1) + \mathfrak{f}(((1 + 1) + 1) + 1),
```

mit anderen Worten

```math
\mathfrak{a} + \mathfrak{b} + \mathfrak{c} + \mathfrak{d}
```

(was also nach Definition auf die alte Addition zurückführt und

```math
((\mathfrak{a} + \mathfrak{b}) + \mathfrak{c}) + \mathfrak{d}
```

bedeutet), oder z. B.

```math
\mathfrak{abcdfghiklmopqrstuvwxyz}.
```

Man kann auch ruhig z. B.

```math
\mathfrak{a} - \mathfrak{b} + \mathfrak{c}
```

im Sinne von

```math
\mathfrak{a} + (-\mathfrak{b}) + \mathfrak{c}
```

schreiben, da jedenfalls

```math
\mathfrak{f}(1) + \mathfrak{f}(1 + 1) + \mathfrak{f}((1 + 1) + 1)
```

mit

```math
\mathfrak{f}(1) = \mathfrak{a}, \quad \mathfrak{f}(1 + 1) = -\mathfrak{b}, \quad \mathfrak{f}((1 + 1) + 1) = \mathfrak{c}
```

gemeint ist.

Nunmehr bedeuten kleine lateinische Buchstaben wiederum positive ganze Zahlen.

**Satz 287:** Ist $\mathfrak{f}(n)$ für $n \leqq x$ definiert, so gibt es ein $\Xi$, so daß

```math
\left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| \leqq \Xi,
```

```math
\sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] = [\Xi, 0].
```

**Beweis:** $\mathfrak{M}$ sei die Menge der $x$, für die es (bei beliebigem $\mathfrak{f}(n)$) ein solches $\Xi$ gibt.

I) Ist $\mathfrak{f}(1)$ definiert, so ist

```math
\left| \sum_{n=1}^{1} \mathfrak{f}(n) \right| = |\mathfrak{f}(1)|,
```

```math
\sum_{n=1}^{1} [|\mathfrak{f}(n)|, 0] = [|\mathfrak{f}(1)|, 0];
```

also leistet

```math
\Xi = |\mathfrak{f}(1)|
```

bei $x = 1$ das Gewünschte. 1 gehört also zu $\mathfrak{M}$.

II) $x$ gehöre zu $\mathfrak{M}$. Ist $\mathfrak{f}(n)$ für $n \leqq x + 1$ definiert, so gibt es ein $\Xi_1$ mit

```math
\left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| \leqq \Xi_1,
```

```math
\sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] = [\Xi_1, 0].
```

Nach Satz 278 und Satz 271 ist

```math
\left| \sum_{n=1}^{x+1} \mathfrak{f}(n) \right| = \left| \sum_{n=1}^{x} \mathfrak{f}(n) + \mathfrak{f}(x + 1) \right| \leqq \left| \sum_{n=1}^{x} \mathfrak{f}(n) \right| + |\mathfrak{f}(x + 1)| \leqq \Xi_1 + |\mathfrak{f}(x + 1)|,
```

also, wenn

```math
\Xi = \Xi_1 + |\mathfrak{f}(x + 1)|
```

gesetzt wird,

```math
\left| \sum_{n=1}^{x+1} \mathfrak{f}(n) \right| \leqq \Xi.
```

Andererseits ist nach Satz 278

```math
\sum_{n=1}^{x+1} [|\mathfrak{f}(n)|, 0] = \sum_{n=1}^{x} [|\mathfrak{f}(n)|, 0] + [|\mathfrak{f}(x + 1)|, 0] = [\Xi_1, 0] + [|\mathfrak{f}(x + 1)|, 0] = [\Xi_1 + |\mathfrak{f}(x + 1)|, 0 + 0] = [\Xi, 0].
```

$\Xi$ leistet also das Gewünschte bei $x + 1$; also gehört $x + 1$ zu $\mathfrak{M}$, und der Satz ist bewiesen.

**Satz 288:** Ist $\mathfrak{f}(n)$ für $n \leqq x$ definiert, so ist

```math
\left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right|, 0 \right] = \prod_{n=1}^{x} [|\mathfrak{f}(n)|, 0].
```

**Beweis:** $\mathfrak{M}$ sei die Menge der $x$, für die dies gilt.

I) Ist $\mathfrak{f}(1)$ definiert, so ist

```math
\left[ \left| \prod_{n=1}^{1} \mathfrak{f}(n) \right|, 0 \right] = [|\mathfrak{f}(1)|, 0] = \prod_{n=1}^{1} [|\mathfrak{f}(n)|, 0].
```

Also gehört 1 zu $\mathfrak{M}$.

II) $x$ gehöre zu $\mathfrak{M}$. Ist $\mathfrak{f}(n)$ für $n \leqq x + 1$ definiert, so ist nach Satz 278 und Satz 268

```math
\begin{aligned}
\prod_{n=1}^{x+1} [|\mathfrak{f}(n)|, 0] &= \prod_{n=1}^{x} [|\mathfrak{f}(n)|, 0] \cdot [|\mathfrak{f}(x + 1)|, 0] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right|, 0 \right] \cdot [|\mathfrak{f}(x + 1)|, 0] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot |\mathfrak{f}(x + 1)| - 0 \cdot 0,\ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot 0 + 0 \cdot |\mathfrak{f}(x + 1)| \right] \\
&= \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \right| \cdot |\mathfrak{f}(x + 1)|, 0 \right] = \left[ \left| \prod_{n=1}^{x} \mathfrak{f}(n) \cdot \mathfrak{f}(x + 1) \right|, 0 \right] \\
&= \left[ \left| \prod_{n=1}^{x+1} \mathfrak{f}(n) \right|, 0 \right],
\end{aligned}
```

also $x + 1$ zu $\mathfrak{M}$ gehörig, und der Satz ist bewiesen.

**Satz 289:** Ist $\mathfrak{f}(n)$ für $n \leqq x$ definiert, so ist

```math
\prod_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{n}
```

dann und nur dann, wenn ein $n \leqq x$ mit

```math
\mathfrak{f}(n) = \mathfrak{n}
```

vorhanden ist.

**Beweis:** $\mathfrak{M}$ sei die Menge der $x$, für die dies gilt.

I)

```math
\prod_{n=1}^{1} \mathfrak{f}(n) = \mathfrak{n}
```

ist mit

```math
\mathfrak{f}(1) = \mathfrak{n}
```

identisch. Also gehört 1 zu $\mathfrak{M}$.

II) $x$ gehöre zu $\mathfrak{M}$.

```math
\prod_{n=1}^{x+1} \mathfrak{f}(n) = \mathfrak{n}
```

bedeutet

```math
\prod_{n=1}^{x} \mathfrak{f}(n) \cdot \mathfrak{f}(x + 1) = \mathfrak{n};
```

nach Satz 221 ist hierfür notwendig und hinreichend

```math
\prod_{n=1}^{x} \mathfrak{f}(n) = \mathfrak{n} \quad \text{oder} \quad \mathfrak{f}(x + 1) = \mathfrak{n},
```

also (da $x$ zu $\mathfrak{M}$ gehört) notwendig und hinreichend

```math
\mathfrak{f}(n) = \mathfrak{n} \quad \text{für ein } n \leqq x \text{ oder für } n = x + 1.
```

$x + 1$ gehört also zu $\mathfrak{M}$, und der Satz ist bewiesen.

## § 9. Potenzen

In diesem Paragraphen mögen kleine lateinische Buchstaben ganze Zahlen bezeichnen.

**Definition 71:**

```math
\mathfrak{x}^x = \begin{cases}
\displaystyle\prod_{n=1}^{x} \mathfrak{x} & \text{für } x > 0, \\
\mathfrak{e} & \text{für } \mathfrak{x} \neq \mathfrak{n},\ x = 0, \\
\dfrac{\mathfrak{e}}{\mathfrak{x}^{|x|}} & \text{für } \mathfrak{x} \neq \mathfrak{n},\ x < 0.
\end{cases}
```

(Sprich: $\mathfrak{x}$ hoch $x$.) Nicht definiert ist also $\mathfrak{x}^x$ lediglich für

```math
\mathfrak{x} = \mathfrak{n}, \quad x \leqq 0.
```

Man beachte, daß für

```math
\mathfrak{x} \neq \mathfrak{n}, \quad x < 0
```

nach der ersten Zeile der Definition 71 und Satz 289

```math
\mathfrak{x}^{|x|} \neq \mathfrak{n}
```

ist, so daß dann $\frac{\mathfrak{e}}{\mathfrak{x}^{|x|}}$ einen Sinn hat.

**Satz 290:** Für

```math
\mathfrak{x} \neq \mathfrak{n}
```

ist

```math
\mathfrak{x}^x \neq \mathfrak{n}.
```

**Beweis:** Für $x > 0$ folgt dies aus Satz 289, für $x = 0$ aus der Definition und für $x < 0$ aus

```math
\mathfrak{x}^x \mathfrak{x}^{|x|} \neq \mathfrak{n}.
```

**Satz 291:** $\mathfrak{x}^1 = \mathfrak{x}$.

**Beweis:**

```math
\mathfrak{x}^1 = \prod_{n=1}^{1} \mathfrak{x} = \mathfrak{x}.
```

**Satz 292:** Es sei

```math
x > 0
```

oder

```math
\mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}.
```

Dann ist

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
```

**Vorbemerkung:** Beide Seiten haben jedenfalls einen Sinn; denn für $x \leqq 0$ ist

```math
\mathfrak{x}\mathfrak{y} \neq \mathfrak{n}.
```

**Beweis:** 1) Bei festen $\mathfrak{x}$, $\mathfrak{y}$ sei $\mathfrak{M}$ die Menge der $x > 0$ mit

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
```

I) Nach Satz 291 ist

```math
(\mathfrak{x}\mathfrak{y})^1 = \mathfrak{x}\mathfrak{y} = \mathfrak{x}^1 \mathfrak{y}^1,
```

also 1 zu $\mathfrak{M}$ gehörig.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist

```math
\begin{aligned}
(\mathfrak{x}\mathfrak{y})^{x+1} &= \prod_{n=1}^{x+1} (\mathfrak{x}\mathfrak{y}) = \prod_{n=1}^{x} (\mathfrak{x}\mathfrak{y}) \cdot (\mathfrak{x}\mathfrak{y}) = (\mathfrak{x}^x \mathfrak{y}^x)(\mathfrak{x}\mathfrak{y}) = (\mathfrak{x}^x \mathfrak{x})(\mathfrak{y}^x \mathfrak{y}) \\
&= \left(\prod_{n=1}^{x} \mathfrak{x} \cdot \mathfrak{x}\right)\left(\prod_{n=1}^{x} \mathfrak{y} \cdot \mathfrak{y}\right) = \prod_{n=1}^{x+1} \mathfrak{x} \cdot \prod_{n=1}^{x+1} \mathfrak{y} = \mathfrak{x}^{x+1} \mathfrak{y}^{x+1},
\end{aligned}
```

also $x + 1$ zu $\mathfrak{M}$ gehörig.

Für $x > 0$ ist also stets

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
```

2) Es sei

```math
x = 0, \quad \mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}.
```

Dann ist

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{e} = \mathfrak{e}\mathfrak{e} = \mathfrak{x}^x \mathfrak{y}^x.
```

3) Es sei

```math
x < 0, \quad \mathfrak{x} \neq \mathfrak{n}, \quad \mathfrak{y} \neq \mathfrak{n}.
```

Nach 1) ist

```math
(\mathfrak{x}\mathfrak{y})^{|x|} = \mathfrak{x}^{|x|} \mathfrak{y}^{|x|},
```

```math
\frac{\mathfrak{e}}{(\mathfrak{x}\mathfrak{y})^{|x|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|} \mathfrak{y}^{|x|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|}} \cdot \frac{\mathfrak{e}}{\mathfrak{y}^{|x|}},
```

```math
(\mathfrak{x}\mathfrak{y})^x = \mathfrak{x}^x \mathfrak{y}^x.
```

**Satz 293:** $\mathfrak{e}^x = \mathfrak{e}$.

**Beweis:** Nach Satz 292 ist

```math
\mathfrak{e}^x \mathfrak{e} = \mathfrak{e}^x = (\mathfrak{e}\mathfrak{e})^x = \mathfrak{e}^x \mathfrak{e}^x,
```

```math
\mathfrak{n} = \mathfrak{e}^x \mathfrak{e}^x - \mathfrak{e}^x \mathfrak{e} = \mathfrak{e}^x (\mathfrak{e}^x - \mathfrak{e}),
```

also (nach Satz 290 und Satz 221)

```math
\mathfrak{e}^x - \mathfrak{e} = \mathfrak{n},
```

```math
\mathfrak{e}^x = \mathfrak{e}.
```

**Satz 294:** Es sei

```math
x > 0, \quad y > 0
```

oder

```math
\mathfrak{x} \neq \mathfrak{n}.
```

Dann ist

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^{x+y}.
```

**Beweis:** 1) Es sei

```math
x > 0, \quad y > 0.
```

Dann ist nach Satz 281

```math
\mathfrak{x}^x \mathfrak{x}^y = \prod_{n=1}^{x} \mathfrak{x} \cdot \prod_{n=1}^{y} \mathfrak{x} = \prod_{n=1}^{x+y} \mathfrak{x} = \mathfrak{x}^{x+y}.
```

2) Es sei

```math
\mathfrak{x} \neq \mathfrak{n}
```

und nicht zugleich

```math
x > 0, \quad y > 0.
```

α) Es sei

```math
x < 0, \quad y < 0.
```

Dann ist nach 1)

```math
\mathfrak{x}^{|x|} \mathfrak{x}^{|y|} = \mathfrak{x}^{|x|+|y|} = \mathfrak{x}^{|x+y|},
```

```math
\mathfrak{x}^x \mathfrak{x}^y = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|}} \cdot \frac{\mathfrak{e}}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x|} \mathfrak{x}^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|x+y|}} = \mathfrak{x}^{x+y}.
```

β) Es sei

```math
x > 0, \quad y < 0.
```

Dann ist

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^x \frac{\mathfrak{e}}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}}.
```

A) Für

```math
x > |y|
```

ist nach 1)

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \frac{\mathfrak{x}^{|y|} \mathfrak{x}^{x-|y|}}{\mathfrak{x}^{|y|}} = \mathfrak{x}^{x-|y|} = \mathfrak{x}^{x+y}.
```

B) Für

```math
x = |y|
```

ist

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \mathfrak{e} = \mathfrak{x}^0 = \mathfrak{x}^{x+y}.
```

C) Für

```math
x < |y|
```

ist nach 1)

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^{|y|}} = \mathfrak{x}^x \frac{\mathfrak{e}}{\mathfrak{x}^x \mathfrak{x}^{|y|-x}} = \frac{\mathfrak{e}}{\mathfrak{x}^{|y|-x}} = \mathfrak{x}^{x-|y|} = \mathfrak{x}^{x+y}.
```

γ) Es sei

```math
x < 0, \quad y > 0.
```

Dann ist nach β)

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^y \mathfrak{x}^x = \mathfrak{x}^{y+x} = \mathfrak{x}^{x+y}.
```

δ) Es sei

```math
x = 0.
```

Dann ist

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{e} \mathfrak{x}^y = \mathfrak{x}^y = \mathfrak{x}^{0+y} = \mathfrak{x}^{x+y}.
```

ε) Es sei

```math
x \neq 0, \quad y = 0.
```

Dann ist nach δ)

```math
\mathfrak{x}^x \mathfrak{x}^y = \mathfrak{x}^y \mathfrak{x}^x = \mathfrak{x}^{y+x} = \mathfrak{x}^{x+y}.
```

**Satz 295:** Für

```math
\mathfrak{x} \neq \mathfrak{n}
```

ist

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^y} = \mathfrak{x}^{x-y}.
```

**Beweis:** Nach Satz 294 ist

```math
\mathfrak{x}^{x-y} \mathfrak{x}^y = \mathfrak{x}^{(x-y)+y} = \mathfrak{x}^x;
```

nach Satz 290 ist

```math
\mathfrak{x}^y \neq \mathfrak{n},
```

also

```math
\frac{\mathfrak{x}^x}{\mathfrak{x}^y} = \mathfrak{x}^{x-y}.
```

**Satz 296:** Für

```math
\mathfrak{x} \neq \mathfrak{n}
```

ist

```math
\frac{\mathfrak{e}}{\mathfrak{x}^x} = \mathfrak{x}^{-x}.
```

**Beweis:** Nach Satz 295 ist

```math
\frac{\mathfrak{e}}{\mathfrak{x}^x} = \frac{\mathfrak{x}^0}{\mathfrak{x}^x} = \mathfrak{x}^{0-x} = \mathfrak{x}^{-x}.
```

**Satz 297:** Es sei

```math
x > 0, \quad y > 0
```

oder

```math
\mathfrak{x} \neq \mathfrak{n}.
```

Dann ist

```math
(\mathfrak{x}^x)^y = \mathfrak{x}^{xy}.
```

**Beweis:** 1) Es sei

```math
\mathfrak{x} = \mathfrak{n}, \quad x > 0, \quad y > 0.
```

Dann ist nach Satz 289

```math
(\mathfrak{x}^x)^y = (\mathfrak{n}^x)^y = \mathfrak{n}^y = \mathfrak{n} = \mathfrak{n}^{xy} = \mathfrak{x}^{xy}.
```

2) Es sei

```math
\mathfrak{x} \neq \mathfrak{n}.
```

a) Bei festen $\mathfrak{x}$, $x$ sei $\mathfrak{M}$ die Menge der $y > 0$ mit

```math
(\mathfrak{x}^x)^y = \mathfrak{x}^{xy}.
```

I) $(\mathfrak{x}^x)^1 = \mathfrak{x}^x = \mathfrak{x}^{x \cdot 1}$;

1 gehört also zu $\mathfrak{M}$.

II) $y$ gehöre zu $\mathfrak{M}$. Dann ist nach Satz 294

```math
(\mathfrak{x}^x)^{y+1} = (\mathfrak{x}^x)^y (\mathfrak{x}^x)^1 = \mathfrak{x}^{xy} \mathfrak{x}^x = \mathfrak{x}^{xy+x} = \mathfrak{x}^{x(y+1)},
```

also $y + 1$ zu $\mathfrak{M}$ gehörig.

Für $y > 0$ ist also die Behauptung wahr.

b) Es sei

```math
y = 0.
```

Dann ist

```math
(\mathfrak{x}^x)^y = \mathfrak{e} = \mathfrak{x}^{xy}.
```

c) Es sei

```math
y < 0.
```

Dann ist nach a)

```math
(\mathfrak{x}^x)^{|y|} = \mathfrak{x}^{x|y|},
```

also nach Satz 296 und a)

```math
(\mathfrak{x}^x)^y = \frac{\mathfrak{e}}{(\mathfrak{x}^x)^{-y}} = \frac{\mathfrak{e}}{(\mathfrak{x}^x)^{|y|}} = \frac{\mathfrak{e}}{\mathfrak{x}^{x|y|}} = \mathfrak{x}^{-(x|y|)} = \mathfrak{x}^{xy}.
```

## § 10. Einordnung der reellen Zahlen

**Satz 298:**

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

**Beweis:** 1)

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

4) Nach 3) ist, falls $H \neq 0$,

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

**Satz 299:** Die komplexen Zahlen der Form $[x, 0]$ genügen den fünf Axiomen der natürlichen Zahlen, wenn $[1, 0]$ an Stelle von 1 genommen wird und

```math
[x, 0]' = [x', 0]
```

gesetzt wird.

**Beweis:** $[\mathfrak{Z}]$ sei die Menge der $[x, 0]$.

1) $[1, 0]$ gehört zu $[\mathfrak{Z}]$.

2) Mit $[x, 0]$ ist $[x, 0]'$ in $[\mathfrak{Z}]$ vorhanden.

3) Stets ist

```math
x' \neq 1,
```

also

```math
[x', 0] \neq [1, 0],
```

```math
[x, 0]' \neq [1, 0].
```

4) Aus

```math
[x, 0]' = [y, 0]'
```

folgt

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
[x, 0] = [y, 0].
```

5) Eine Menge $[\mathfrak{M}]$ von Zahlen aus $[\mathfrak{Z}]$ habe die Eigenschaften:

I) $[1, 0]$ gehört zu $[\mathfrak{M}]$.

II) Falls $[x, 0]$ zu $[\mathfrak{M}]$ gehört, so gehört $[x, 0]'$ zu $[\mathfrak{M}]$.

Dann bezeichne $\mathfrak{M}$ die Menge der $x$, für die $[x, 0]$ zu $[\mathfrak{M}]$ gehört. Alsdann ist 1 zu $\mathfrak{M}$ gehörig und mit jedem $x$ von $\mathfrak{M}$ auch $x'$ zu $\mathfrak{M}$ gehörig. Also gehört jede positive ganze Zahl $x$ zu $\mathfrak{M}$, also jedes $[x, 0]$ zu $[\mathfrak{M}]$.

Da Summe, Differenz, Produkt und (wofern vorhanden) Quotient zweier $[\Xi, 0]$ nach Satz 298 den alten Begriffen entsprechen, desgleichen die Zeichen $-[\Xi, 0]$ und $|[\Xi, 0]|$; da man

```math
[\Xi, 0] > [H, 0] \quad \text{für } \Xi > H,
```

```math
[\Xi, 0] < [H, 0] \quad \text{für } \Xi < H
```

definieren kann, so haben also die komplexen Zahlen $[\Xi, 0]$ alle Eigenschaften, die wir in Kapitel 4 für reelle Zahlen bewiesen haben, und insbesondere die Zahlen $[x, 0]$ alle bewiesenen Eigenschaften der positiven ganzen Zahlen.

Daher werfen wir die reellen Zahlen weg, ersetzen sie durch die entsprechenden komplexen Zahlen $[\Xi, 0]$ und brauchen nur von komplexen Zahlen zu reden. (Die reellen Zahlen verbleiben aber paarweise im Begriff der komplexen Zahl.)

**Definition 72:** (Das freigewordene Zeichen) $\Xi$ bezeichnet die komplexe Zahl $[\Xi, 0]$, auf die auch das Wort reelle Zahl übergeht. Ebenso heißt jetzt $[\Xi, 0]$ bei ganzem $\Xi$ ganze Zahl, bei rationalem $\Xi$ rationale Zahl, bei irrationalem $\Xi$ irrationale Zahl, bei positivem $\Xi$ positive Zahl, bei negativem $\Xi$ negative Zahl.

Also schreiben wir z. B. 0 statt $\mathfrak{n}$, 1 statt $\mathfrak{e}$.

Nunmehr können wir die komplexen Zahlen mit kleinen oder großen Buchstaben beliebiger Alphabete (auch promiscue) bezeichnen. Für die folgende spezielle Zahl ist aber ein kleiner lateinischer Buchstabe üblich auf Grund der

**Definition 73:** $i = [0, 1]$.

**Satz 300:** $i \cdot i = -1$.

**Beweis:**

```math
i \cdot i = [0, 1][0, 1] = [0 \cdot 0 - 1 \cdot 1, 0 \cdot 1 + 1 \cdot 0] = [-1, 0] = -1.
```

**Satz 301:** Für reelle $u_1$, $u_2$ ist

```math
u_1 + u_2 i = [u_1, u_2].
```

Zu jeder komplexen Zahl $x$ gibt es also genau ein Paar reeller Zahlen $u_1$, $u_2$ mit

```math
x = u_1 + u_2 i.
```

**Beweis:** Für reelle $u_1$, $u_2$ ist

```math
u_1 + u_2 i = [u_1, 0] + [u_2, 0][0, 1] = [u_1, 0] + [u_2 \cdot 0 - 0 \cdot 1, u_2 \cdot 1 + 0 \cdot 0] = [u_1, 0] + [0, u_2] = [u_1, u_2].
```

Durch Satz 301 ist das Zeichen $[\ ]$ unnötig geworden; die komplexen Zahlen sind eben die Zahlen $u_1 + u_2 i$, wo $u_1$ und $u_2$ reell sind; gleichen bzw. verschiedenen Paaren $u_1$, $u_2$ entsprechen gleiche bzw. verschiedene Zahlen, und Summe, Differenz, Produkt zweier komplexer Zahlen $u_1 + u_2 i$, $v_1 + v_2 i$ (wo $u_1$, $u_2$, $v_1$, $v_2$ reell sind) bildet man nach den Formeln

```math
\begin{aligned}
(u_1 + u_2 i) + (v_1 + v_2 i) &= (u_1 + v_1) + (u_2 + v_2) i, \\
(u_1 + u_2 i) - (v_1 + v_2 i) &= (u_1 - v_1) + (u_2 - v_2) i, \\
(u_1 + u_2 i)(v_1 + v_2 i) &= (u_1 v_1 - u_2 v_2) + (u_1 v_2 + u_2 v_1) i.
\end{aligned}
```

Man braucht sich nicht einmal diese Formeln zu merken, sondern nur, daß die Gesetze der reellen Zahlen erhalten bleiben und Satz 300 gilt; danach rechnet man einfach so:

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

Was die Division betrifft, so ergibt die Rechnung, wenn $v_1$ und $v_2$ nicht beide 0 sind,

```math
\begin{aligned}
\frac{u_1 + u_2 i}{v_1 + v_2 i} &= \frac{(u_1 + u_2 i)(v_1 - v_2 i)}{(v_1 + v_2 i)(v_1 - v_2 i)} = \frac{(u_1 v_1 + u_2 v_2) + (-(u_1 v_2) + u_2 v_1) i}{(v_1 v_1 + v_2 v_2) + (-(v_1 v_2) + v_2 v_1) i} \\
&= \frac{(u_1 v_1 + u_2 v_2) + (-(u_1 v_2) + u_2 v_1) i}{v_1 v_1 + v_2 v_2} = \frac{u_1 v_1 + u_2 v_2}{v_1 v_1 + v_2 v_2} + \frac{-(u_1 v_2) + u_2 v_1}{v_1 v_1 + v_2 v_2}\, i
\end{aligned}
```

als kanonische Darstellung im Sinne des Satzes 301.
