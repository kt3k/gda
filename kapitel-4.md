# Kapitel 4. Reelle Zahlen

## § 1. Definition

**Definition 43:** Die Schnitte nennen wir jetzt positive Zahlen; und entsprechend sagen wir jetzt positive rationale Zahl statt bisher rationale Zahl und positive ganze Zahl statt bisher ganze Zahl.

Wir erschaffen eine neue, von den positiven Zahlen verschiedene Zahl 0 (sprich: Null).

Wir erschaffen ferner Zahlen, die von den positiven und von 0 verschieden sind, negative genannt, derart, daß wir jedem $\xi$ (d. h. jeder positiven Zahl) eine negative Zahl zuordnen, die wir $-\xi$ ($-$ sprich: minus) nennen.

Dabei gelten $-\xi$ und $-\eta$ als dieselbe Zahl (als gleich) genau dann, wenn $\xi$ und $\eta$ dieselbe Zahl sind.

Die Gesamtheit der positiven Zahlen, der 0 und der negativen Zahlen nennen wir reelle Zahlen.

Große griechische Buchstaben bedeuten, wenn nichts anderes gesagt wird, durchweg reelle Zahlen. Gleich schreiben wir $=$, ungleich (verschieden) $\neq$.

Für jedes $\Xi$ und jedes $\mathrm{H}$ liegt somit genau einer der Fälle

```math
\Xi = \mathrm{H}, \quad \Xi \neq \mathrm{H}
```

vor. Bei den reellen Zahlen vermischen sich die Begriffe der Identität und Gleichheit, so daß die drei Sätze trivial sind:

**Satz 163:** $\Xi = \Xi$.

**Satz 164:** Aus

```math
\Xi = \mathrm{H}
```

folgt

```math
\mathrm{H} = \Xi.
```

**Satz 165:** Aus

```math
\Xi = \mathrm{H}, \quad \mathrm{H} = \mathrm{Z}
```

folgt

```math
\Xi = \mathrm{Z}.
```

## § 2. Ordnung

**Definition 44:**

```math
|\Xi| =
\begin{cases}
\xi, & \text{wenn } \Xi = \xi, \\
0, & \text{wenn } \Xi = 0, \\
\xi, & \text{wenn } \Xi = -\xi.
\end{cases}
```

Die Zahl $|\Xi|$ heißt der absolute Betrag von $\Xi$.

**Satz 166:** $|\Xi|$ ist für positives und negatives $\Xi$ positiv.

**Beweis:** Definition 44.

**Definition 45:** Sind $\Xi$ und $\mathrm{H}$ nicht beide positiv, so ist

```math
\Xi > \mathrm{H}
```

genau dann, wenn

entweder $\Xi$ negativ, $\mathrm{H}$ negativ und $|\Xi| < |\mathrm{H}|$,\
oder $\Xi = 0$, $\mathrm{H}$ negativ,\
oder $\Xi$ positiv, $\mathrm{H}$ negativ,\
oder $\Xi$ positiv, $\mathrm{H} = 0$.

($>$ sprich: größer als.)

Man beachte, daß wir für positives $\Xi$ nebst positivem $\mathrm{H}$ die Begriffe $>$ und $<$ schon haben und letzteren sogar in dem einen Falle der Definition 45 benutzten.

**Definition 46:**

```math
\Xi < \mathrm{H}
```

genau dann, wenn

```math
\mathrm{H} > \Xi.
```

($<$ sprich: kleiner als.)

Man beachte, daß für positives $\Xi$ nebst positivem $\mathrm{H}$ Definition 46 im Einklang mit unseren alten Begriffen steht.

**Satz 167:** Sind $\Xi$, $\mathrm{H}$ beliebig, so liegt genau einer der Fälle

```math
\Xi = \mathrm{H}, \quad \Xi > \mathrm{H}, \quad \Xi < \mathrm{H}
```

vor.

**Beweis:** 1) Sind $\Xi$ und $\mathrm{H}$ positiv, wissen wir dies aus Satz 123.

2) Ist $\Xi$ positiv, $\mathrm{H} = 0$ oder $\mathrm{H}$ negativ, so ist

```math
\Xi \neq \mathrm{H},
```

ferner nach Definition 45

```math
\Xi > \mathrm{H}
```

und nach Definition 46

$\Xi$ nicht $< \mathrm{H}$.

3) Ist $\Xi = 0$, $\mathrm{H}$ positiv, so ist

```math
\Xi \neq \mathrm{H},
```

ferner nach Definition 45

$\Xi$ nicht $> \mathrm{H}$

und nach Definition 46

```math
\Xi < \mathrm{H}.
```

4) Ist $\Xi = 0$, $\mathrm{H} = 0$, so ist

$\Xi = \mathrm{H}$,\
$\Xi$ nicht $> \mathrm{H}$,\
$\Xi$ nicht $< \mathrm{H}$.

5) Ist $\Xi = 0$, $\mathrm{H}$ negativ, so ist

$\Xi \neq \mathrm{H}$,\
$\Xi > \mathrm{H}$,\
$\Xi$ nicht $< \mathrm{H}$.

6) Ist $\Xi$ negativ, $\mathrm{H}$ positiv oder $\mathrm{H} = 0$, so ist

$\Xi \neq \mathrm{H}$,\
$\Xi$ nicht $> \mathrm{H}$,\
$\Xi < \mathrm{H}$.

7) Ist $\Xi$ negativ, $\mathrm{H}$ negativ, so ist

$\Xi \neq \mathrm{H}$, $\Xi > \mathrm{H}$, $\Xi$ nicht $< \mathrm{H}$ für $|\Xi| < |\mathrm{H}|$,\
$\Xi = \mathrm{H}$, $\Xi$ nicht $> \mathrm{H}$, $\Xi$ nicht $< \mathrm{H}$ für $|\Xi| = |\mathrm{H}|$,\
$\Xi \neq \mathrm{H}$, $\Xi$ nicht $> \mathrm{H}$, $\Xi < \mathrm{H}$ für $|\Xi| > |\mathrm{H}|$.

**Definition 47:**

```math
\Xi \geqq \mathrm{H}
```

bedeutet

$\Xi > \mathrm{H}$ oder $\Xi = \mathrm{H}$.

($\geqq$ sprich: größer oder gleich.)

**Definition 48:**

```math
\Xi \leqq \mathrm{H}
```

bedeutet

$\Xi < \mathrm{H}$ oder $\Xi = \mathrm{H}$.

($\leqq$ sprich: kleiner oder gleich.)

**Satz 168:** Aus

```math
\Xi > \mathrm{H}
```

folgt

```math
\mathrm{H} < \Xi
```

und umgekehrt.

**Beweis:** Definition 46.

ist gewiß\
2) Es sei\
Dann ist\
also\
3) Es sei\
Dann ist\
$\Xi \leqq 0$,\
$\Xi < \mathrm{Z}$.\
$\mathrm{Z} = 0$.\
$\mathrm{H} < 0$,\
$\Xi < 0$,\
$\Xi < \mathrm{Z}$.\
$\mathrm{Z} < 0$.\
$\mathrm{H} < 0$,\
$\Xi < 0$.

**Satz 169:** Die positiven Zahlen sind die Zahlen $> 0$; die negativen Zahlen sind die Zahlen $< 0$.

**Beweis:** 1) Nach Definition 45 ist

```math
\xi > 0.
```

2) Aus

```math
\Xi > 0
```

folgt nach Definition 45

```math
\Xi = \xi.
```

3) Nach Definition 46 ist

```math
-\xi < 0.
```

4) Aus

```math
\Xi < 0
```

folgt nach Definition 46

```math
\Xi = -\xi.
```

**Satz 170:** $|\Xi| \geqq 0$.

**Beweis:** Definition 44, Satz 166 und Satz 169.

**Satz 171** (Transitivität der Ordnung): Aus

```math
\Xi < \mathrm{H}, \quad \mathrm{H} < \mathrm{Z}
```

folgt

```math
\Xi < \mathrm{Z}.
```

**Beweis:** 1) Es sei

```math
\mathrm{Z} > 0.
```

Falls

```math
\Xi > 0,
```

ist

```math
\mathrm{H} > 0,
```

und wir haben den alten Satz 126.

Falls

Ferner ist

```math
|\Xi| > |\mathrm{H}|, \quad |\mathrm{H}| > |\mathrm{Z}|,
```

also

```math
|\Xi| > |\mathrm{Z}|,
```

```math
\Xi < \mathrm{Z}.
```

**Satz 172:** Aus

```math
\Xi \leqq \mathrm{H}, \ \mathrm{H} < \mathrm{Z} \quad \text{oder} \quad \Xi < \mathrm{H}, \ \mathrm{H} \leqq \mathrm{Z}
```

folgt

```math
\Xi < \mathrm{Z}.
```

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 171 erledigt.

**Satz 173:** Aus

```math
\Xi \leqq \mathrm{H}, \quad \mathrm{H} \leqq \mathrm{Z}
```

folgt

```math
\Xi \leqq \mathrm{Z}.
```

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 172 erledigt.

**Definition 49:** Ist

```math
\Xi \leqq 0,
```

so heißt $\Xi$ rational, wenn

```math
\Xi = 0
```

oder

$\Xi < 0$, $|\Xi|$ rational.

Wir haben also jetzt positive rationale Zahlen, die rationale Zahl 0 und negative rationale Zahlen.

**Definition 50:** Ist

```math
\Xi \leqq 0,
```

so heißt $\Xi$ irrational, wenn es nicht rational ist.

Wir haben also jetzt positive irrationale Zahlen und negative irrationale Zahlen. (Zahlen? Ja; wir hatten ein irrationales $\xi$; also ist die positive Zahl $\xi + X$ stets irrational, da aus

```math
\xi + X = Y
```

folgen würde

```math
\xi = Y - X;
```

und $-(\xi + X)$ ist stets negativ irrational.)

**Definition 51:** Ist

```math
\Xi \leqq 0,
```

so heißt $\Xi$ ganz, wenn

```math
\Xi = 0
```

oder

$\Xi < 0$, $|\Xi|$ ganz.

Wir haben also jetzt positive ganze Zahlen, die ganze Zahl 0 und negative ganze Zahlen.

**Satz 174:** Jede ganze Zahl ist rational.

**Beweis:** Für die positiven Zahlen wissen wir das; für 0 und negative Zahlen folgt es aus Definition 49 und Definition 51.

## § 3. Addition

**Definition 52:**

```math
\Xi + \mathrm{H} =
\begin{cases}
-(|\Xi| + |\mathrm{H}|), & \text{wenn } \Xi < 0,\ \mathrm{H} < 0; \\
\left.\begin{matrix} |\Xi| - |\mathrm{H}| \\ 0 \\ -(|\mathrm{H}| - |\Xi|) \end{matrix}\right\}\!, & \text{wenn } \Xi > 0,\ \mathrm{H} < 0, \ \begin{cases} |\Xi| > |\mathrm{H}|; \\ |\Xi| = |\mathrm{H}|; \\ |\Xi| < |\mathrm{H}|; \end{cases} \\
\mathrm{H} + \Xi, & \text{wenn } \Xi < 0,\ \mathrm{H} > 0; \\
\mathrm{H}, & \text{wenn } \Xi = 0; \\
\Xi, & \text{wenn } \mathrm{H} = 0.
\end{cases}
```

($+$ sprich: plus.) $\Xi + \mathrm{H}$ heißt die Summe von $\Xi$ und $\mathrm{H}$ oder die durch Addition von $\mathrm{H}$ zu $\Xi$ entstehende Zahl.

Man beachte bei dieser Definition:

1) Für

```math
\Xi > 0, \quad \mathrm{H} > 0
```

haben wir den Begriff $\Xi + \mathrm{H}$ schon aus Definition 34.

2) Er wurde auch in Definition 52 benutzt.

3) Der dritte Fall der Definition benutzt den Begriff der Summe im zweiten Fall.

4) Der vierte und fünfte Fall überdecken sich, wenn

```math
\Xi = \mathrm{H} = 0;
```

aber dann ist die als $\Xi + \mathrm{H}$ definierte Zahl die gleiche (nämlich 0).

**Satz 175** (kommutatives Gesetz der Addition):

```math
\Xi + \mathrm{H} = \mathrm{H} + \Xi.
```

**Beweis:** Für

```math
\Xi = 0
```

sind beide Zahlen $\mathrm{H}$; für

```math
\mathrm{H} = 0
```

sind beide $\Xi$.

Für

```math
\Xi > 0, \quad \mathrm{H} > 0
```

liegt der alte Satz 130 vor.

Für

```math
\Xi < 0, \quad \mathrm{H} < 0
```

ist nach Satz 130

```math
\Xi + \mathrm{H} = -(|\Xi| + |\mathrm{H}|) = -(|\mathrm{H}| + |\Xi|) = \mathrm{H} + \Xi.
```

Für

```math
\Xi < 0, \quad \mathrm{H} > 0
```

war die Behauptung geradezu Definition.

Für

```math
\Xi > 0, \quad \mathrm{H} < 0
```

ist nach dem vorangehenden Fall

```math
\mathrm{H} + \Xi = \Xi + \mathrm{H},
```

also

```math
\Xi + \mathrm{H} = \mathrm{H} + \Xi.
```

**Definition 53:**

```math
-\Xi =
\begin{cases}
0 & \text{für } \Xi = 0, \\
|\Xi| & \text{für } \Xi < 0.
\end{cases}
```

($-$ sprich: minus.)

Man beachte, daß wir für $\Xi > 0$ den Begriff $-\Xi$ aus Definition 43 schon haben.

**Satz 176:** Ist

```math
\Xi > 0 \ \text{bzw.} \ \Xi = 0 \ \text{bzw.} \ \Xi < 0,
```

so ist

```math
-\Xi < 0 \ \text{bzw.} \ -\Xi = 0 \ \text{bzw.} \ -\Xi > 0
```

und umgekehrt.

**Beweis:** Definition 43 und Definition 53.

**Satz 177:** $-(-\Xi) = \Xi$.

**Beweis:** Definitionen 43, 44 und 53.

**Satz 178:** $|-\Xi| = |\Xi|$.

**Beweis:** Definitionen 43, 44 und 53.

**Satz 179:** $\Xi + (-\Xi) = 0$.

**Beweis:** Definition 52, Definition 53 und Satz 178.

**Satz 180:** $-(\Xi + \mathrm{H}) = -\Xi + (-\mathrm{H})$.

**Beweis:** Nach Satz 175 ist

```math
-(\Xi + \mathrm{H}) = -(\mathrm{H} + \Xi)
```

und

```math
-\Xi + (-\mathrm{H}) = -\mathrm{H} + (-\Xi);
```

daher darf ohne Beschränkung der Allgemeinheit

```math
\Xi \geqq \mathrm{H}
```

vorausgesetzt werden; denn mindestens eine der Relationen

```math
\Xi \geqq \mathrm{H}, \quad \mathrm{H} \geqq \Xi
```

besteht, und aus

```math
-(\mathrm{H} + \Xi) = -\mathrm{H} + (-\Xi)
```

folgt eben

```math
-(\Xi + \mathrm{H}) = -\Xi + (-\mathrm{H}).
```

Es sei also

```math
\Xi \geqq \mathrm{H}.
```

1) Ist

```math
\Xi > 0, \quad \mathrm{H} > 0,
```

so ist

```math
-\Xi + (-\mathrm{H}) = -(\Xi + \mathrm{H}).
```

2) Ist

```math
\Xi > 0, \quad \mathrm{H} = 0,
```

so ist

```math
-\Xi + (-\mathrm{H}) = -\Xi + 0 = -\Xi = -(\Xi + 0) = -(\Xi + \mathrm{H}).
```

3) Ist

```math
\Xi > 0, \quad \mathrm{H} < 0,
```

so ist

entweder

```math
\Xi > |\mathrm{H}|,
```

also

```math
\Xi + \mathrm{H} = \Xi - |\mathrm{H}|,
```

```math
-\Xi + (-\mathrm{H}) = -\Xi + |\mathrm{H}| = -(\Xi - |\mathrm{H}|) = -(\Xi + \mathrm{H});
```

oder

```math
\Xi = |\mathrm{H}|,
```

also

```math
\Xi + \mathrm{H} = 0,
```

```math
-\Xi + (-\mathrm{H}) = -\Xi + |\mathrm{H}| = 0 = -(\Xi + \mathrm{H});
```

oder

```math
\Xi < |\mathrm{H}|,
```

also

```math
\Xi + \mathrm{H} = -(|\mathrm{H}| - \Xi),
```

```math
-\Xi + (-\mathrm{H}) = -\Xi + |\mathrm{H}| = |\mathrm{H}| - \Xi = -(\Xi + \mathrm{H}).
```

4) Ist

```math
\Xi = 0,
```

so ist

```math
-\Xi + (-\mathrm{H}) = 0 + (-\mathrm{H}) = -\mathrm{H} = -(0 + \mathrm{H}) = -(\Xi + \mathrm{H}).
```

5) Ist

```math
\Xi < 0,
```

so ist

```math
\mathrm{H} < 0,
```

```math
\Xi + \mathrm{H} = -(|\Xi| + |\mathrm{H}|),
```

```math
-\Xi + (-\mathrm{H}) = |\Xi| + |\mathrm{H}| = -(\Xi + \mathrm{H}).
```

**Definition 54:** $\Xi - \mathrm{H} = \Xi + (-\mathrm{H})$.

($-$ sprich: minus.) $\Xi - \mathrm{H}$ heißt die Differenz $\Xi$ minus $\mathrm{H}$ oder die durch Subtraktion des $\mathrm{H}$ von $\Xi$ entstehende Zahl.

Man beachte, daß Definition 54 (wie es sein muß) für

```math
\Xi > \mathrm{H} > 0
```

mit der alten Definition 35 übereinstimmt; denn dann ist

```math
\Xi > 0, \quad -\mathrm{H} < 0, \quad |\Xi| > |-\mathrm{H}|, \quad \Xi + (-\mathrm{H}) = |\Xi| - |-\mathrm{H}| = \Xi - \mathrm{H}.
```

**Satz 181:** $-(\Xi - \mathrm{H}) = \mathrm{H} - \Xi$.

**Beweis:** Nach Satz 180 und Satz 177 ist

```math
-(\Xi - \mathrm{H}) = -(\Xi + (-\mathrm{H})) = -\Xi + (-(-\mathrm{H})) = -\Xi + \mathrm{H} = \mathrm{H} + (-\Xi) = \mathrm{H} - \Xi.
```

**Satz 182:** Aus

```math
\Xi - \mathrm{H} > 0 \ \text{bzw.} \ \Xi - \mathrm{H} = 0 \ \text{bzw.} \ \Xi - \mathrm{H} < 0
```

folgt

```math
\Xi > \mathrm{H} \ \text{bzw.} \ \Xi = \mathrm{H} \ \text{bzw.} \ \Xi < \mathrm{H}
```

und umgekehrt.

**Beweis:** Da $-\mathrm{H}$ auch eine beliebige reelle Zahl ist, darf man $-\mathrm{H}$ statt $\mathrm{H}$ schreiben und hat demnach das Entsprechen der Fälle bei

```math
\Xi + \mathrm{H} > 0 \ \text{bzw.} \ \Xi + \mathrm{H} = 0 \ \text{bzw.} \ \Xi + \mathrm{H} < 0
```

und

```math
\Xi > -\mathrm{H} \ \text{bzw.} \ \Xi = -\mathrm{H} \ \text{bzw.} \ \Xi < -\mathrm{H}
```

zu zeigen.

In der Tat ist für $\Xi = 0$ oder $\mathrm{H} = 0$ die Behauptung klar; im übrigen gelten im Fall

```math
\Xi > 0, \quad \mathrm{H} > 0
```

und in den drei ersten Fällen der Definition 52, wenn der dritte in die drei Unterfälle

```math
|\mathrm{H}| > |\Xi|, \quad |\mathrm{H}| = |\Xi|, \quad |\mathrm{H}| < |\Xi|
```

zerlegt wird, beide Male resp. die Zeichen

```math
> \ < \ > \ = \ < \ > \ = \ <.
```

**Satz 183:** Aus

```math
\Xi > \mathrm{H} \ \text{bzw.} \ \Xi = \mathrm{H} \ \text{bzw.} \ \Xi < \mathrm{H}
```

folgt

```math
-\Xi < -\mathrm{H} \ \text{bzw.} \ -\Xi = -\mathrm{H} \ \text{bzw.} \ -\Xi > -\mathrm{H}
```

und umgekehrt.

**Beweis:** Nach Satz 182 entspricht ersteres den Fällen

```math
\Xi - \mathrm{H} > 0 \ \text{bzw.} \ \Xi - \mathrm{H} = 0 \ \text{bzw.} \ \Xi - \mathrm{H} < 0,
```

letzteres den Fällen

```math
-\mathrm{H} - (-\Xi) > 0 \ \text{bzw.} \ -\mathrm{H} - (-\Xi) = 0 \ \text{bzw.} \ -\mathrm{H} - (-\Xi) < 0;
```

also liefert

```math
-\mathrm{H} - (-\Xi) = -\mathrm{H} + (-(-\Xi)) = -\mathrm{H} + \Xi = \Xi + (-\mathrm{H}) = \Xi - \mathrm{H}
```

alles.

**Satz 184:** Jede reelle Zahl läßt sich als Differenz zweier positiver Zahlen darstellen.

**Beweis:** 1) Ist

```math
\Xi > 0,
```

so ist

```math
\Xi = (\Xi + 1) - 1.
```

2) Ist

```math
\Xi = 0,
```

so ist

```math
\Xi = 1 - 1.
```

3) Ist

```math
\Xi < 0,
```

so ist

```math
-\Xi = |\Xi| = (|\Xi| + 1) - 1,
```

```math
\Xi = -((|\Xi| + 1) - 1) = 1 - (|\Xi| + 1).
```

**Satz 185:** Aus

```math
\Xi = \xi_1 - \xi_2, \quad \mathrm{H} = \eta_1 - \eta_2
```

folgt

```math
\Xi + \mathrm{H} = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

**Beweis:** 1) Es sei

```math
\Xi > 0, \quad \mathrm{H} > 0.
```

Dann ist, da

```math
\begin{aligned}
(\alpha + \beta) + (\gamma + \delta) &= (\alpha + \beta) + (\delta + \gamma) = ((\alpha + \beta) + \delta) + \gamma \\
&= \gamma + (\alpha + (\beta + \delta)) = (\gamma + \alpha) + (\beta + \delta)
\end{aligned}
```

ist,

```math
(\Xi + \mathrm{H}) + (\xi_2 + \eta_2) = \xi_1 + \eta_1,
```

also die Behauptung wahr.

2) Es sei

```math
\Xi < 0, \quad \mathrm{H} < 0.
```

Dann ist nach Satz 181

```math
\xi_2 - \xi_1 = -\Xi > 0, \quad \eta_2 - \eta_1 = -\mathrm{H} > 0,
```

also nach 1)

```math
-\Xi + (-\mathrm{H}) = (\xi_2 + \eta_2) - (\xi_1 + \eta_1),
```

```math
\Xi + \mathrm{H} = -(-\Xi + (-\mathrm{H})) = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

3) Es sei

```math
\Xi > 0, \quad \mathrm{H} < 0,
```

also

```math
\xi_1 - \xi_2 > 0, \quad \eta_2 - \eta_1 > 0.
```

A) Ist

```math
\Xi > |\mathrm{H}|,
```

so ist

```math
\xi_1 - \xi_2 > \eta_2 - \eta_1,
```

also

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

B) Ist

```math
\Xi < |\mathrm{H}|,
```

so ist nach A)

```math
\begin{aligned}
\Xi + \mathrm{H} &= -(-\mathrm{H} + (-\Xi)) = -((\eta_2 - \eta_1) + (\xi_2 - \xi_1)) \\
&= -((\eta_2 + \xi_2) - (\eta_1 + \xi_1)) = (\eta_1 + \xi_1) - (\eta_2 + \xi_2) \\
&= (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
\end{aligned}
```

C) Ist

```math
\Xi = |\mathrm{H}|,
```

also

```math
\xi_1 - \xi_2 = \eta_2 - \eta_1,
```

so ist

```math
\xi_1 = \xi_2 + (\eta_2 - \eta_1),
```

```math
\xi_1 + \eta_1 = \xi_2 + \eta_2,
```

```math
\Xi + \mathrm{H} = 0 = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

4) Es sei

```math
\Xi < 0, \quad \mathrm{H} > 0.
```

Dann ist nach 3)

```math
\Xi + \mathrm{H} = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

5) Es sei

```math
\Xi = 0.
```

Dann ist

```math
\xi_1 = \xi_2,
```

```math
\Xi + \mathrm{H} = \mathrm{H}.
```

a) Für

```math
\eta_1 > \eta_2
```

ist

```math
(\eta_1 - \eta_2) + (\xi_1 + \eta_2) = ((\eta_1 - \eta_2) + \eta_2) + \xi_1 = \eta_1 + \xi_1 = \xi_1 + \eta_1,
```

b) Für

```math
\eta_1 = \eta_2
```

ist

```math
\mathrm{H} = 0 = (\xi_1 + \eta_1) - (\xi_1 + \eta_2).
```

c) Für

```math
\eta_1 < \eta_2
```

ist nach a)

```math
\mathrm{H} = -(-\mathrm{H}) = -((\xi_1 + \eta_2) - (\xi_1 + \eta_1)) = (\xi_1 + \eta_1) - (\xi_1 + \eta_2).
```

6) Es sei

```math
\mathrm{H} = 0.
```

Dann ist nach 5)

```math
\Xi + \mathrm{H} = \mathrm{H} + \Xi = (\eta_1 + \xi_1) - (\eta_2 + \xi_2) = (\xi_1 + \eta_1) - (\xi_2 + \eta_2).
```

**Satz 186** (assoziatives Gesetz der Addition):

```math
(\Xi + \mathrm{H}) + \mathrm{Z} = \Xi + (\mathrm{H} + \mathrm{Z}).
```

**Beweis:** Nach Satz 184 ist

```math
\Xi = \xi_1 - \xi_2, \quad \mathrm{H} = \eta_1 - \eta_2, \quad \mathrm{Z} = \zeta_1 - \zeta_2.
```

Nach Satz 185 ist

```math
\begin{aligned}
(\Xi + \mathrm{H}) + \mathrm{Z} &= ((\xi_1 + \eta_1) - (\xi_2 + \eta_2)) + (\zeta_1 - \zeta_2) \\
&= ((\xi_1 + \eta_1) + \zeta_1) - ((\xi_2 + \eta_2) + \zeta_2) = (\xi_1 + (\eta_1 + \zeta_1)) - (\xi_2 + (\eta_2 + \zeta_2)) \\
&= (\xi_1 - \xi_2) + ((\eta_1 + \zeta_1) - (\eta_2 + \zeta_2)) = \Xi + (\mathrm{H} + \mathrm{Z}).
\end{aligned}
```

**Satz 187:** Bei gegebenen $\Xi$, $\mathrm{H}$ hat

```math
\mathrm{H} + \Upsilon = \Xi
```

genau eine Lösung $\Upsilon$, nämlich

```math
\Upsilon = \Xi - \mathrm{H}.
```

**Beweis:** 1)

```math
\Upsilon = \Xi - \mathrm{H}
```

ist eine Lösung, da nach Satz 186

```math
\mathrm{H} + (\Xi - \mathrm{H}) = (\Xi - \mathrm{H}) + \mathrm{H} = (\Xi + (-\mathrm{H})) + \mathrm{H} = \Xi + (-\mathrm{H} + \mathrm{H}) = \Xi + 0 = \Xi.
```

2) Aus

```math
\mathrm{H} + \Upsilon = \Xi
```

folgt

```math
\Xi - \mathrm{H} = \Xi + (-\mathrm{H}) = -\mathrm{H} + \Xi = -\mathrm{H} + (\mathrm{H} + \Upsilon) = (-\mathrm{H} + \mathrm{H}) + \Upsilon = 0 + \Upsilon = \Upsilon.
```

**Satz 188:** Es ist

```math
\Xi + \mathrm{Z} > \mathrm{H} + \mathrm{Z} \ \text{bzw.} \ \Xi + \mathrm{Z} = \mathrm{H} + \mathrm{Z} \ \text{bzw.} \ \Xi + \mathrm{Z} < \mathrm{H} + \mathrm{Z},
```

je nachdem

```math
\Xi > \mathrm{H} \ \text{bzw.} \ \Xi = \mathrm{H} \ \text{bzw.} \ \Xi < \mathrm{H}.
```

**Beweis:** Nach Satz 182 gilt ersteres, je nachdem

```math
(\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) > 0 \ \text{bzw.} \ (\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) = 0 \ \text{bzw.} \ (\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) < 0;
```

letzteres, je nachdem

```math
\Xi - \mathrm{H} > 0 \ \text{bzw.} \ \Xi - \mathrm{H} = 0 \ \text{bzw.} \ \Xi - \mathrm{H} < 0.
```

Aus

```math
(\Xi + \mathrm{Z}) - (\mathrm{H} + \mathrm{Z}) = (\Xi + \mathrm{Z}) + (-\mathrm{Z} + (-\mathrm{H})) = (\Xi + (\mathrm{Z} + (-\mathrm{Z}))) + (-\mathrm{H}) = \Xi + (-\mathrm{H}) = \Xi - \mathrm{H}
```

folgen also die Behauptungen.

**Satz 189:** Aus

```math
\Xi > \mathrm{H}, \quad \mathrm{Z} > \Upsilon
```

folgt

```math
\Xi + \mathrm{Z} > \mathrm{H} + \Upsilon.
```

**Beweis:** Nach Satz 188 ist

```math
\Xi + \mathrm{Z} > \mathrm{H} + \mathrm{Z}
```

und

```math
\mathrm{H} + \mathrm{Z} = \mathrm{Z} + \mathrm{H} > \Upsilon + \mathrm{H} = \mathrm{H} + \Upsilon,
```

also

```math
\Xi + \mathrm{Z} > \mathrm{H} + \Upsilon.
```

**Satz 190:** Aus

```math
\Xi \geqq \mathrm{H}, \ \mathrm{Z} > \Upsilon \quad \text{oder} \quad \Xi > \mathrm{H}, \ \mathrm{Z} \geqq \Upsilon
```

folgt

```math
\Xi + \mathrm{Z} > \mathrm{H} + \Upsilon.
```

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung durch Satz 188, sonst durch Satz 189 erledigt.

**Satz 191:** Aus

```math
\Xi \geqq \mathrm{H}, \quad \mathrm{Z} \geqq \Upsilon
```

folgt

```math
\Xi + \mathrm{Z} \geqq \mathrm{H} + \Upsilon.
```

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 190 erledigt.

## § 4. Multiplikation

**Definition 55:**

```math
\Xi \cdot \mathrm{H} =
\begin{cases}
-(|\Xi| \, |\mathrm{H}|), & \text{wenn } \Xi > 0,\ \mathrm{H} < 0 \ \text{oder} \ \Xi < 0,\ \mathrm{H} > 0; \\
|\Xi| \, |\mathrm{H}|, & \text{wenn } \Xi < 0,\ \mathrm{H} < 0; \\
0, & \text{wenn } \Xi = 0 \ \text{oder} \ \mathrm{H} = 0.
\end{cases}
```

($\cdot$ sprich: mal; aber man schreibt den Punkt meist nicht.) $\Xi \cdot \mathrm{H}$ heißt das Produkt von $\Xi$ mit $\mathrm{H}$ oder die durch Multiplikation von $\Xi$ mit $\mathrm{H}$ entstehende Zahl.

Man beachte, daß $\Xi \cdot \mathrm{H}$ für $\Xi > 0$, $\mathrm{H} > 0$ uns schon aus Definition 36 bekannt ist, was ja auch in Definition 55 benutzt wurde.

**Satz 192:** Es ist

```math
\Xi \mathrm{H} = 0
```

dann und nur dann, wenn mindestens eine der beiden Zahlen $\Xi$, $\mathrm{H}$ Null ist.

**Beweis:** Definition 55.

**Satz 193:** $|\Xi \mathrm{H}| = |\Xi| \, |\mathrm{H}|$.

**Beweis:** Definition 55.

**Satz 194** (kommutatives Gesetz der Multiplikation):

```math
\Xi \mathrm{H} = \mathrm{H} \Xi.
```

**Beweis:** Das ist für $\Xi > 0$, $\mathrm{H} > 0$ der Satz 142 und folgt sonst aus Definition 55, da die rechte Seite dieser Definition (nach Satz 142) und die Fallunterscheidung in $\Xi$, $\mathrm{H}$ symmetrisch sind.

**Satz 195:** $\Xi \cdot 1 = \Xi$.

**Beweis:** Für $\Xi > 0$ folgt dies aus Satz 151; für $\Xi = 0$ aus Definition 55; für $\Xi < 0$ ist nach Definition 55

```math
\Xi \cdot 1 = -(|\Xi| \cdot 1) = -|\Xi| = \Xi.
```

**Satz 196:** Ist

```math
\Xi \neq 0, \quad \mathrm{H} \neq 0,
```

so ist

```math
\Xi \mathrm{H} = |\Xi| \, |\mathrm{H}| \quad \text{bzw.} \quad \Xi \mathrm{H} = -(|\Xi| \, |\mathrm{H}|),
```

je nachdem keine oder zwei bzw. genau eine der Zahlen $\Xi$, $\mathrm{H}$ negativ sind.

**Beweis:** Definition 55.

**Satz 197:** $(-\Xi) \mathrm{H} = \Xi (-\mathrm{H}) = -(\Xi \mathrm{H})$.

**Beweis:** 1) Ist eine der Zahlen $\Xi$, $\mathrm{H}$ Null, so sind alle drei Ausdrücke 0.

2) Ist

```math
\Xi \neq 0, \quad \mathrm{H} \neq 0,
```

so haben nach Satz 193 alle drei Ausdrücke denselben absoluten Betrag $|\Xi| \, |\mathrm{H}|$, und nach Satz 196 sind alle drei $> 0$ bzw. $< 0$, je nachdem genau eine bzw. keine oder zwei der Zahlen $\Xi$, $\mathrm{H}$ negativ sind.

**Satz 198:** $(-\Xi)(-\mathrm{H}) = \Xi \mathrm{H}$.

**Beweis:** Nach Satz 197 ist

```math
(-\Xi)(-\mathrm{H}) = \Xi(-(-\mathrm{H})) = \Xi \mathrm{H}.
```

**Satz 199** (assoziatives Gesetz der Multiplikation):

```math
(\Xi \mathrm{H}) \mathrm{Z} = \Xi (\mathrm{H} \mathrm{Z}).
```

**Beweis:** 1) Ist eine der Zahlen $\Xi$, $\mathrm{H}$, $\mathrm{Z}$ Null, so sind beide Seiten der Behauptung 0.

2) Ist

```math
\Xi \neq 0, \quad \mathrm{H} \neq 0, \quad \mathrm{Z} \neq 0,
```

so haben nach Satz 193 beide Seiten denselben absoluten Betrag

```math
(|\Xi| \, |\mathrm{H}|) \, |\mathrm{Z}| = |\Xi| \, (|\mathrm{H}| \, |\mathrm{Z}|),
```

und nach Satz 196 sind beide Seiten $> 0$ bzw. $< 0$, je nachdem keine oder genau zwei bzw. genau eine oder drei der Zahlen $\Xi$, $\mathrm{H}$, $\mathrm{Z}$ negativ sind.

**Satz 200:** $\xi(\eta - \zeta) = \xi\eta - \xi\zeta$.

**Beweis:** 1) Für

```math
\eta > \zeta
```

ist

```math
(\eta - \zeta) + \zeta = \eta,
```

also nach Satz 144

```math
\xi(\eta - \zeta) + \xi\zeta = \xi\eta,
```

```math
\xi(\eta - \zeta) = \xi\eta - \xi\zeta.
```

2) Für

```math
\eta = \zeta
```

ist

```math
\eta - \zeta = 0,
```

```math
\xi(\eta - \zeta) = \xi \cdot 0 = 0 = \xi\eta - \xi\zeta.
```

3) Für

```math
\eta < \zeta
```

ist nach 1)

```math
\xi(\zeta - \eta) = \xi\zeta - \xi\eta,
```

```math
\xi(\eta - \zeta) = \xi(-(\zeta - \eta)) = -(\xi(\zeta - \eta)) = -(\xi\zeta - \xi\eta) = \xi\eta - \xi\zeta.
```

**Satz 201** (distributives Gesetz):

```math
\Xi(\mathrm{H} + \mathrm{Z}) = \Xi\mathrm{H} + \Xi\mathrm{Z}.
```

**Beweis:** 1) Es sei

```math
\Xi > 0.
```

Nach Satz 184 ist

```math
\mathrm{H} = \eta_1 - \eta_2, \quad \mathrm{Z} = \zeta_1 - \zeta_2,
```

nach Satz 185 somit

```math
\mathrm{H} + \mathrm{Z} = (\eta_1 + \zeta_1) - (\eta_2 + \zeta_2),
```

also nach Satz 200 und Satz 144

```math
\Xi(\mathrm{H} + \mathrm{Z}) = \Xi(\eta_1 + \zeta_1) - \Xi(\eta_2 + \zeta_2) = (\Xi\eta_1 + \Xi\zeta_1) - (\Xi\eta_2 + \Xi\zeta_2),
```

also nach Satz 185 und Satz 200

```math
\Xi(\mathrm{H} + \mathrm{Z}) = (\Xi\eta_1 - \Xi\eta_2) + (\Xi\zeta_1 - \Xi\zeta_2) = \Xi(\eta_1 - \eta_2) + \Xi(\zeta_1 - \zeta_2) = \Xi\mathrm{H} + \Xi\mathrm{Z}.
```

2) Es sei

```math
\Xi = 0.
```

Dann ist

```math
\Xi(\mathrm{H} + \mathrm{Z}) = 0 = \Xi\mathrm{H} + \Xi\mathrm{Z}.
```

3) Es sei

```math
\Xi < 0.
```

Dann ist nach 1)

```math
(-\Xi)(\mathrm{H} + \mathrm{Z}) = (-\Xi)\mathrm{H} + (-\Xi)\mathrm{Z},
```

also

```math
-(\Xi(\mathrm{H} + \mathrm{Z})) = (-\Xi)\mathrm{H} + (-\Xi)\mathrm{Z},
```

```math
\Xi(\mathrm{H} + \mathrm{Z}) = -((-\Xi)\mathrm{H} + (-\Xi)\mathrm{Z}) = -((-\Xi)\mathrm{H}) + (-((-\Xi)\mathrm{Z})) = \Xi\mathrm{H} + \Xi\mathrm{Z}.
```

**Satz 202:** $\Xi(\mathrm{H} - \mathrm{Z}) = \Xi\mathrm{H} - \Xi\mathrm{Z}$.

**Beweis:** Nach Satz 201 ist

```math
\Xi(\mathrm{H} - \mathrm{Z}) = \Xi(\mathrm{H} + (-\mathrm{Z})) = \Xi\mathrm{H} + \Xi(-\mathrm{Z}) = \Xi\mathrm{H} + (-(\Xi\mathrm{Z})) = \Xi\mathrm{H} - \Xi\mathrm{Z}.
```

**Satz 203:** Es sei

```math
\Xi > \mathrm{H}.
```

eine Lösung wegen\
$\mathrm{H}\Upsilon = $ ,\
2) Es sei\
$\mathrm{H} < 0$.

Aus

```math
\mathrm{Z} > 0 \ \text{bzw.} \ \mathrm{Z} = 0 \ \text{bzw.} \ \mathrm{Z} < 0
```

folgt dann

```math
\Xi\mathrm{Z} > \mathrm{H}\mathrm{Z} \ \text{bzw.} \ \Xi\mathrm{Z} = \mathrm{H}\mathrm{Z} \ \text{bzw.} \ \Xi\mathrm{Z} < \mathrm{H}\mathrm{Z}.
```

**Beweis:**

```math
\Xi - \mathrm{H} > 0,
```

also

```math
(\Xi - \mathrm{H})\mathrm{Z} > 0 \ \text{bzw.} \ (\Xi - \mathrm{H})\mathrm{Z} = 0 \ \text{bzw.} \ (\Xi - \mathrm{H})\mathrm{Z} < 0,
```

je nachdem

```math
\mathrm{Z} > 0 \ \text{bzw.} \ \mathrm{Z} = 0 \ \text{bzw.} \ \mathrm{Z} < 0.
```

Da nach Satz 202

```math
(\Xi - \mathrm{H})\mathrm{Z} = \mathrm{Z}(\Xi - \mathrm{H}) = \mathrm{Z}\Xi - \mathrm{Z}\mathrm{H} = \Xi\mathrm{Z} - \mathrm{H}\mathrm{Z}
```

ist, ist in diesen Fällen nach Satz 182

```math
\Xi\mathrm{Z} > \mathrm{H}\mathrm{Z} \ \text{bzw.} \ \Xi\mathrm{Z} = \mathrm{H}\mathrm{Z} \ \text{bzw.} \ \Xi\mathrm{Z} < \mathrm{H}\mathrm{Z}.
```

**Satz 204:** Die Gleichung

```math
\mathrm{H}\Upsilon = \Xi,
```

wo $\Xi$, $\mathrm{H}$ gegeben sind und

```math
\mathrm{H} \neq 0
```

ist, hat genau eine Lösung $\Upsilon$.

**Beweis:** I) Es gibt höchstens eine Lösung; denn aus

```math
\mathrm{H}\Upsilon_1 = \Xi = \mathrm{H}\Upsilon_2
```

folgt

```math
0 = \mathrm{H}\Upsilon_1 - \mathrm{H}\Upsilon_2 = \mathrm{H}(\Upsilon_1 - \Upsilon_2),
```

also nach Satz 192

```math
0 = \Upsilon_1 - \Upsilon_2,
```

```math
\Upsilon_1 = \Upsilon_2.
```

II) 1) Es sei

```math
\mathrm{H} > 0.
```

Dann ist

Dann ist

eine Lösung. Denn nach 1) ist

```math
\Xi = |\mathrm{H}|(-\Upsilon) = (-|\mathrm{H}|)\Upsilon = \mathrm{H}\Upsilon.
```

**Definition 56:** Das $\Upsilon$ des Satzes 204 heißt $\frac{\Xi}{\mathrm{H}}$ (sprich: $\Xi$ durch $\mathrm{H}$). $\frac{\Xi}{\mathrm{H}}$ heißt auch der Quotient von $\Xi$ durch $\mathrm{H}$ oder die durch Division von $\Xi$ durch $\mathrm{H}$ entstehende Zahl.

Man beachte, daß (wie es sein muß) dies für $\Xi > 0$, $\mathrm{H} > 0$ mit der alten Definition 38 übereinstimmt.

## § 5. Dedekindscher Hauptsatz

**Satz 205:** Gegeben sei irgend eine Einteilung aller reellen Zahlen in zwei Klassen mit folgenden Eigenschaften.

1) Es gibt eine Zahl der ersten Klasse und eine Zahl der zweiten Klasse.

2) Jede Zahl der ersten Klasse ist kleiner als jede Zahl der zweiten Klasse.

Dann gibt es genau eine reelle Zahl $\Xi$, so daß jedes $\mathrm{H} < \Xi$ zur ersten, jedes $\mathrm{H} > \Xi$ zur zweiten Klasse gehört.

Mit anderen Worten: Jede Zahl der ersten Klasse ist $\leqq \Xi$, jede Zahl der zweiten Klasse $\geqq \Xi$.

**Vorbemerkung:** Es ist umgekehrt klar, daß jede reelle Zahl $\Xi$ genau zwei solche Einteilungen erzeugt: die eine mit $\mathrm{H} \leqq \Xi$ als erster, $\mathrm{H} > \Xi$ als zweiter Klasse; die andere mit $\mathrm{H} < \Xi$ als erster, $\mathrm{H} \geqq \Xi$ als zweiter Klasse.

**Beweis:** A) Mehr als ein solches $\Xi$ kann es nicht geben; denn wäre

```math
\Xi_1 < \Xi_2
```

und leisteten $\Xi_1$ und $\Xi_2$ das Gewünschte, so würde $\frac{\Xi_1 + \Xi_2}{1+1}$ wegen

```math
(1+1)\Xi_1 = \Xi_1 + \Xi_1 < \Xi_1 + \Xi_2 < \Xi_2 + \Xi_2 = (1+1)\Xi_2,
```

```math
\Xi_1 < \frac{\Xi_1 + \Xi_2}{1+1} < \Xi_2
```

sowohl zur zweiten als auch zur ersten Klasse gehören.

B) Zum Nachweis der Existenz eines $\Xi$ unterscheiden wir vier Fälle:

I) Es gebe eine positive Zahl in der ersten Klasse.

Wir betrachten den Schnitt, der folgendermaßen erzeugt wird: Jede positive rationale Zahl kommt in die Unterklasse, wenn sie in der ersten Klasse liegt, ohne die etwaige größte rationale Zahl der ersten Klasse zu sein; sonst (d. h. wenn sie die etwaige größte rationale Zahl der ersten Klasse ist oder in der zweiten Klasse liegt) in die Oberklasse. Das ist wirklich ein Schnitt. Denn:

1) Da die erste Klasse eine positive Zahl enthält, enthält sie jede kleinere positive rationale Zahl (eine solche gibt es nach Satz 158), also eine, zu der es in der ersten Klasse eine größere gibt. Die Unterklasse ist also nicht leer.

Da die zweite Klasse eine Zahl enthält, enthält sie jede größere positive rationale Zahl (eine solche gibt es nach Satz 158). Die Oberklasse ist also nicht leer.

2) Jede Zahl der Unterklasse ist kleiner als jede der Oberklasse; denn jede Zahl der ersten Klasse ist kleiner als jede der zweiten Klasse, und die etwaige größte positive rationale Zahl der ersten Klasse ist gewiß größer als jede Zahl der Unterklasse.

3) Die Unterklasse enthält keine größte positive rationale Zahl. Denn entweder die erste Klasse enthält schon keine solche. Oder sie enthält eine solche; dann war diese in die Oberklasse getan, und unter den positiven rationalen Zahlen, die kleiner als eine gegebene sind, gibt es schon nach Satz 91 keine größte.

Die durch unseren Schnitt definierte positive Zahl nennen wir $\Xi$ und behaupten, daß sie die gestellten Forderungen erfüllt.

a) Es sei $\mathrm{H}$ mit

```math
\mathrm{H} < \Xi
```

gegeben. Wir wählen nach Satz 159 (mit $\xi = \mathrm{H}$, $\eta = \Xi$, wenn $\mathrm{H} > 0$ ist; mit $\xi = \frac{\Xi}{1 + 1}$, $\eta = \Xi$, wenn $\mathrm{H} \leqq 0$ ist) ein $\mathrm{Z}$ mit

```math
\mathrm{H} < \mathrm{Z} < \Xi.
```

Dann ist $\mathrm{Z}$ Unterzahl bei $\Xi$, also zur ersten Klasse gehörig; daher gehört $\mathrm{H}$ zur ersten Klasse.

b) Es sei $\mathrm{H}$ mit

```math
\mathrm{H} > \Xi
```

gegeben. Wir wählen nach Satz 159 ein $\mathrm{Z}$ mit

```math
\Xi < \mathrm{Z} < \mathrm{H}.
```

Dann ist $\mathrm{Z}$ Oberzahl bei $\Xi$ und (nach Satz 159) nicht die kleinste, also zur zweiten Klasse gehörig; daher gehört $\mathrm{H}$ zur zweiten Klasse.

II) Jede positive Zahl liege in der zweiten Klasse; 0 liege in der ersten Klasse.

Dann liegt jede negative Zahl in der ersten Klasse, und

```math
\Xi = 0
```

leistet das Gewünschte.

III) 0 liege in der zweiten Klasse; jede negative Zahl liege in der ersten Klasse.

Dann liegt jede positive Zahl in der zweiten Klasse, und

```math
\Xi = 0
```

leistet das Gewünschte.

IV) Es gebe eine negative Zahl in der zweiten Klasse.

Dann betrachten wir folgende neue Einteilung:

$\mathrm{H}$ in der neuen ersten Klasse, wenn $-\mathrm{H}$ in der alten zweiten Klasse lag;

$\mathrm{H}$ in der neuen zweiten Klasse, wenn $-\mathrm{H}$ in der alten ersten Klasse lag.

Diese Einteilung genügt offenbar den beiden Bedingungen des Satzes 205. Denn

1) in jeder Klasse liegt eine Zahl;

2) aus

```math
\mathrm{H}_1 < \mathrm{H}_2
```

folgt nach Satz 183

```math
-\mathrm{H}_2 < -\mathrm{H}_1.
```

Überdies fällt die neue Einteilung unter Fall I), da es eine positive Zahl in der neuen ersten Klasse gibt. Nach I) existiert also eine Zahl $\Xi_1$, so daß jedes

```math
\mathrm{H} < \Xi_1
```

in der neuen ersten Klasse, jedes

```math
\mathrm{H} > \Xi_1
```

in der neuen zweiten Klasse liegt. Wird

```math
-\Xi_1 = \Xi
```

gesetzt, so folgt aus

```math
\mathrm{H} < \Xi \quad \text{bzw.} \quad \mathrm{H} > \Xi,
```

daß

```math
-\mathrm{H} > \Xi_1 \quad \text{bzw.} \quad -\mathrm{H} < \Xi_1
```

ist. Also liegt $-\mathrm{H}$ in der neuen zweiten bzw. neuen ersten Klasse, also $\mathrm{H}$ in der alten ersten bzw. alten zweiten Klasse.
