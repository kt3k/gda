# Kapitel 3. Schnitte

## § 1. Definition

**Definition 28:** Eine Menge von rationalen Zahlen heißt Schnitt, wenn

1) sie eine rationale Zahl, aber nicht jede rationale Zahl enthält;

2) jede rationale Zahl der Menge kleiner ist als jede nicht zur Menge gehörige rationale Zahl;

3) in ihr keine größte rationale Zahl vorkommt (d. h. Zahl, die größer als jede etwaige andere, von ihr verschiedene ist).

Man nennt auch die Menge Unterklasse, die Menge der nicht in ihr enthaltenen rationalen Zahlen Oberklasse und redet entsprechend von Unterzahlen und Oberzahlen.

Kleine griechische Buchstaben bedeuten durchweg, wenn nichts anderes gesagt wird, Schnitte.

**Definition 29:**

```math
\xi = \eta
```

($=$ sprich: gleich), wenn jede Unterzahl bei $\xi$ Unterzahl bei $\eta$ und jede Unterzahl bei $\eta$ Unterzahl bei $\xi$ ist.

Mit anderen Worten: wenn die Mengen identisch sind.

Anderenfalls

```math
\xi \neq \eta
```

($\neq$ sprich: ungleich).

Trivial sind die drei Sätze:

**Satz 116:** $\xi = \xi$.

**Satz 117:** Aus

```math
\xi = \eta
```

folgt

```math
\eta = \xi.
```

**Satz 118:** Aus

```math
\xi = \eta, \quad \eta = \zeta
```

folgt

```math
\xi = \zeta.
```

**Satz 119:** Ist $X$ Oberzahl bei $\xi$ und

```math
X_1 > X,
```

so ist $X_1$ Oberzahl bei $\xi$.

**Beweis:** Folgt aus 2) der Definition 28.

**Satz 120:** Ist $X$ Unterzahl bei $\xi$ und

```math
X_1 < X,
```

so ist $X_1$ Unterzahl bei $\xi$.

**Beweis:** Folgt aus 2) der Definition 28.

Natürlich ist umgekehrt die Forderung des Satzes 120 mit 2) der Definition 28 identisch. Um also von irgend einer Menge rationaler Zahlen zu zeigen, daß sie ein Schnitt ist, genügt stets der Nachweis von:

1) Sie ist nicht leer, und es gibt eine rationale Zahl, die nicht darin liegt.

2) Mit jeder ihrer Zahlen gehört jede kleinere dazu.

3) Zu jeder ihrer Zahlen gibt es in ihr eine größere.

## § 2. Ordnung

**Definition 30:** Sind $\xi$ und $\eta$ Schnitte, so ist

```math
\xi > \eta
```

($>$ sprich: größer als), wenn es eine Unterzahl bei $\xi$ gibt, die Oberzahl bei $\eta$ ist.

**Definition 31:** Sind $\xi$ und $\eta$ Schnitte, so ist

```math
\xi < \eta
```

($<$ sprich: kleiner als), wenn es eine Oberzahl bei $\xi$ gibt, die Unterzahl bei $\eta$ ist.

**Satz 121:** Aus

```math
\xi > \eta
```

folgt

```math
\eta < \xi.
```

**Beweis:** Es gibt eben eine Oberzahl bei $\eta$, die Unterzahl bei $\xi$ ist.

**Satz 122:** Aus

```math
\xi < \eta
```

folgt

```math
\eta > \xi.
```

**Beweis:** Es gibt eben eine Unterzahl bei $\eta$, die Oberzahl bei $\xi$ ist.

**Satz 123:** Sind $\xi$, $\eta$ beliebig, so liegt genau einer der Fälle

```math
\xi = \eta, \quad \xi > \eta, \quad \xi < \eta
```

vor.

**Beweis:** 1)

```math
\xi = \eta, \quad \xi > \eta
```

sind unverträglich nach Definition 29 und Definition 30.

```math
\xi = \eta, \quad \xi < \eta
```

sind unverträglich nach Definition 29 und Definition 31.

Aus

```math
\xi > \eta, \quad \xi < \eta
```

würde folgen, daß es eine Unterzahl $X$ bei $\xi$ gibt, die Oberzahl bei $\eta$ ist, und eine Oberzahl $Y$ bei $\xi$, die Unterzahl bei $\eta$ ist. Nach 2) der Definition 28 wäre also zugleich

```math
X < Y, \quad X > Y.
```

Folglich liegt höchstens einer der drei Fälle vor.

2) Ist

```math
\xi \neq \eta,
```

so stimmen die Unterklassen nicht überein. Also ist entweder eine gewisse Unterzahl bei $\xi$ Oberzahl bei $\eta$ und alsdann

```math
\xi > \eta,
```

oder eine gewisse Unterzahl bei $\eta$ Oberzahl bei $\xi$ und alsdann

```math
\xi < \eta.
```

**Definition 32:**

```math
\xi \geqq \eta
```

bedeutet

```math
\xi > \eta \text{ oder } \xi = \eta.
```

($\geqq$ sprich: größer oder gleich.)

**Definition 33:**

```math
\xi \leqq \eta
```

bedeutet

```math
\xi < \eta \text{ oder } \xi = \eta.
```

($\leqq$ sprich: kleiner oder gleich.)

**Satz 124:** Aus

```math
\xi \geqq \eta
```

folgt

```math
\eta \leqq \xi.
```

**Beweis:** Satz 121.

**Satz 125:** Aus

```math
\xi \leqq \eta
```

folgt

```math
\eta \geqq \xi.
```

**Beweis:** Satz 122.

**Satz 126** (Transitivität der Ordnung): Aus

```math
\xi < \eta, \quad \eta < \zeta
```

folgt

```math
\xi < \zeta.
```

**Beweis:** Es gibt eine Oberzahl $X$ bei $\xi$, die Unterzahl bei $\eta$ ist; und eine Oberzahl $Y$ bei $\eta$, die Unterzahl bei $\zeta$ ist. Wegen der Schnitteigenschaft 2) von $\eta$ ist

```math
X < Y,
```

also $Y$ Oberzahl bei $\xi$. Daher ist

```math
\xi < \zeta.
```

**Satz 127:** Aus

```math
\xi \leqq \eta, \quad \eta < \zeta \text{ oder } \xi < \eta, \quad \eta \leqq \zeta,
```

folgt

```math
\xi < \zeta.
```

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 126 erledigt.

**Satz 128:** Aus

```math
\xi \leqq \eta, \quad \eta \leqq \zeta
```

folgt

```math
\xi \leqq \zeta.
```

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 127 erledigt.

## § 3. Addition

**Satz 129:** I) Es seien $\xi$ und $\eta$ Schnitte. Dann ist die Menge der rationalen Zahlen, die sich in der Form $X + Y$ darstellen lassen, wo $X$ Unterzahl bei $\xi$, $Y$ Unterzahl bei $\eta$ ist, ein Schnitt.

II) Keine Zahl dieser Menge läßt sich als Summe einer Oberzahl bei $\xi$ und einer Oberzahl bei $\eta$ darstellen.

**Beweis:** 1) Geht man von irgend einer Unterzahl $X$ bei $\xi$ und irgend einer Unterzahl $Y$ bei $\eta$ aus, so gehört $X + Y$ zur Menge.

Geht man von irgend einer Oberzahl $X_1$ bei $\xi$ und irgend einer Oberzahl $Y_1$ bei $\eta$ aus, so ist für alle Unterzahlen $X$ bzw. $Y$ bei $\xi$ bzw. $\eta$

```math
X < X_1, \quad Y < Y_1,
```

also

```math
X + Y < X_1 + Y_1,
```

```math
X_1 + Y_1 \neq X + Y;
```

$X_1 + Y_1$ gehört also nicht zur Menge. Und II) ist schon mitbewiesen.

2) Es ist zu zeigen, daß jede Zahl, die kleiner als eine Zahl der Menge ist, auch zur Menge gehört. Es sei also $X$ Unterzahl bei $\xi$, $Y$ Unterzahl bei $\eta$ und

```math
Z < X + Y.
```

Dann ist

```math
(X + Y) \cdot \frac{Z}{X + Y} = Z < (X + Y) \cdot 1,
```

also nach Satz 106

```math
\frac{Z}{X + Y} < 1,
```

also nach Satz 105

```math
X \cdot \frac{Z}{X + Y} < X
```

und

```math
Y \cdot \frac{Z}{X + Y} < Y.
```

Nach der zweiten Schnitteigenschaft bei $\xi$ bzw. $\eta$ ist also $X \cdot \frac{Z}{X + Y}$ bzw. $Y \cdot \frac{Z}{X + Y}$ Unterzahl bei $\xi$ bzw. $\eta$.

Die Summe dieser beiden rationalen Zahlen ist das gegebene $Z$, wegen

```math
X \cdot \frac{Z}{X + Y} + Y \cdot \frac{Z}{X + Y} = (X + Y) \cdot \frac{Z}{X + Y} = Z.
```

3) Ist eine Zahl der Menge gegeben, so hat sie die Form $X + Y$, wo $X$ Unterzahl bei $\xi$, $Y$ Unterzahl bei $\eta$ ist. Man wähle nach der dritten Schnitteigenschaft eine Unterzahl

```math
X_1 > X
```

bei $\xi$; dann ist

```math
X_1 + Y > X + Y,
```

also eine Zahl der Menge $> X + Y$ vorhanden.

**Definition 34:** Der in Satz 129 konstruierte Schnitt heißt $\xi + \eta$ ($+$ sprich: plus). Er heißt auch die Summe von $\xi$ und $\eta$ oder der durch Addition von $\eta$ zu $\xi$ entstehende Schnitt.

**Satz 130** (kommutatives Gesetz der Addition):

```math
\xi + \eta = \eta + \xi.
```

**Beweis:** Jedes $X + Y$ ist auch $Y + X$ und umgekehrt.

**Satz 131** (assoziatives Gesetz der Addition):

```math
(\xi + \eta) + \zeta = \xi + (\eta + \zeta).
```

**Beweis:** Jedes $(X + Y) + Z$ ist auch $X + (Y + Z)$ und umgekehrt.

**Satz 132:** Bei jedem Schnitt gibt es, wenn $A$ gegeben ist, eine Unterzahl $X$ und eine Oberzahl $U$ mit

```math
U - X = A.
```

**Beweis:** $X_1$ sei irgend eine Unterzahl. Wir betrachten alle rationalen Zahlen

```math
X_1 + nA,
```

wo $n$ ganz ist. Sie sind nicht lauter Unterzahlen; denn ist $Y$ irgend eine Oberzahl, so ist

```math
Y > X_1,
```

also nach Satz 115 bei passendem $n$

```math
nA > Y - X_1,
```

```math
X_1 + nA > (Y - X_1) + X_1 = Y,
```

also $X_1 + nA$ Oberzahl.

In der Menge der $n$, für die $X_1 + nA$ Oberzahl ist, gibt es nach Satz 27 eine kleinste ganze Zahl; sie heiße $u$.

Ist

```math
u = 1,
```

so setze man

```math
X = X_1, \quad U = X_1 + A;
```

ist

```math
u > 1,
```

so setze man

```math
X = X_1 + (u - 1) A, \quad U = X_1 + uA = X + A.
```

Jedesmal ist $X$ Unterzahl, $U$ Oberzahl und

```math
U - X = A.
```

**Satz 133:** $\xi + \eta > \xi$.

**Beweis:** $Y$ sei eine Unterzahl bei $\eta$. Nach Satz 132 wähle man eine Unterzahl $X$ bei $\xi$ und eine Oberzahl $U$ bei $\xi$ mit

```math
U - X = Y;
```

dann ist

```math
U = X + Y
```

Oberzahl bei $\xi$ und Unterzahl bei $\xi + \eta$. Daher ist

```math
\xi + \eta > \xi.
```

**Satz 134:** Aus

```math
\xi > \eta
```

folgt

```math
\xi + \zeta > \eta + \zeta.
```

**Beweis:** Es gibt eine Oberzahl $Y$ bei $\eta$, die Unterzahl bei $\xi$ ist. Man wähle eine größere Unterzahl

```math
X > Y
```

bei $\xi$; $X$ ist also Oberzahl bei $\eta$. Nach Satz 132 wähle man bei $\zeta$ eine Oberzahl $Z$ und eine Unterzahl $U$ mit

```math
Z - U = X - Y.
```

Dann ist

```math
Y + Z = Y + ((X - Y) + U) = (Y + (X - Y)) + U = X + U,
```

also Unterzahl bei $\xi + \zeta$ und (nach Satz 129, II)) Oberzahl bei $\eta + \zeta$. Daher ist

```math
\xi + \zeta > \eta + \zeta.
```

**Satz 135:** Aus

```math
\xi > \eta \text{ bzw. } \xi = \eta \text{ bzw. } \xi < \eta
```

folgt

```math
\xi + \zeta > \eta + \zeta \text{ bzw. } \xi + \zeta = \eta + \zeta \text{ bzw. } \xi + \zeta < \eta + \zeta.
```

**Beweis:** Der erste Teil ist Satz 134, der zweite klar, der dritte eine Folge des ersten wegen

```math
\eta + \zeta > \xi + \zeta,
```

```math
\xi + \zeta < \eta + \zeta.
```

**Satz 136:** Aus

```math
\xi + \zeta > \eta + \zeta \text{ bzw. } \xi + \zeta = \eta + \zeta \text{ bzw. } \xi + \zeta < \eta + \zeta
```

folgt

```math
\xi > \eta \text{ bzw. } \xi = \eta \text{ bzw. } \xi < \eta.
```

**Beweis:** Folgt aus Satz 135, da die drei Fälle beide Male sich ausschließen und alle Möglichkeiten erschöpfen.

**Satz 137:** Aus

```math
\xi > \eta, \quad \zeta > v
```

folgt

```math
\xi + \zeta > \eta + v.
```

**Beweis:** Nach Satz 134 ist

```math
\xi + \zeta > \eta + \zeta
```

und

```math
\eta + \zeta = \zeta + \eta > v + \eta = \eta + v,
```

also

```math
\xi + \zeta > \eta + v.
```

**Satz 138:** Aus

```math
\xi \geqq \eta, \quad \zeta > v \text{ oder } \xi > \eta, \quad \zeta \geqq v
```

folgt

```math
\xi + \zeta > \eta + v.
```

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung durch Satz 134, sonst durch Satz 137 erledigt.

**Satz 139:** Aus

```math
\xi \geqq \eta, \quad \zeta \geqq v
```

folgt

```math
\xi + \zeta \geqq \eta + v.
```

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 138 erledigt.

**Satz 140:** Ist

```math
\xi > \eta,
```

so hat

```math
\eta + v = \xi
```

genau eine Lösung $v$.

**Vorbemerkung:** Für

```math
\xi \leqq \eta
```

gibt es nach Satz 138 keine Lösung.

**Beweis:** I) Es gibt höchstens eine Lösung; denn für

```math
v_1 \neq v_2
```

ist nach Satz 135

```math
\eta + v_1 \neq \eta + v_2.
```

II) Ich zeige zunächst, daß die Menge der rationalen Zahlen der Form $X - Y$ (also $X > Y$), wo $X$ Unterzahl bei $\xi$, $Y$ Oberzahl bei $\eta$ ist, einen Schnitt bildet.

1) Wir wissen aus dem Anfang des Beweises des Satzes 134, daß es ein solches $X - Y$ gibt.

Keine Oberzahl $X_1$ bei $\xi$ ist ein solches $X - Y$; denn für jede Zahl dieser Form ist

```math
X - Y < (X - Y) + Y = X < X_1.
```

2) Ist ein $X - Y$ obiger Art gegeben und

```math
U < X - Y,
```

so ist

```math
U + Y < (X - Y) + Y = X,
```

also

```math
U + Y = X_2
```

Unterzahl bei $\xi$,

```math
U = X_2 - Y
```

zu unserer Menge gehörig.

3) Ist ein $X - Y$ obiger Art gegeben, so wähle man bei $\xi$ eine Unterzahl

```math
X_3 > X.
```

Dann ist

```math
(X_3 - Y) + Y > (X - Y) + Y,
```

```math
X_3 - Y > X - Y,
```

also $X_3 - Y$ eine größere Zahl unserer Menge als die gegebene $X - Y$.

Unsere Menge ist also ein Schnitt; er heiße $v$.

Von ihm werden wir

```math
\eta + v = \xi
```

beweisen. Hierzu genügt es, zweierlei zu zeigen:

A) Jede Unterzahl bei $v + \eta$ ist Unterzahl bei $\xi$.

B) Jede Unterzahl bei $\xi$ ist Unterzahl bei $v + \eta$.

Ad A) Jede Unterzahl bei $v + \eta$ hat die Form

```math
(X - Y) + Y_1,
```

wo $X$ Unterzahl bei $\xi$, $Y$ Oberzahl bei $\eta$, $Y_1$ Unterzahl bei $\eta$ und

```math
X > Y
```

ist. Nun ist

```math
Y > Y_1,
```

```math
((X - Y) + Y_1) + (Y - Y_1) = (X - Y) + (Y_1 + (Y - Y_1)) = (X - Y) + Y = X,
```

```math
(X - Y) + Y_1 < X,
```

also $(X - Y) + Y_1$ Unterzahl bei $\xi$.

Ad B) a) Die gegebene Unterzahl bei $\xi$ sei zugleich Oberzahl bei $\eta$ und heiße alsdann $Y$. Man wähle eine Unterzahl $X$ bei $\xi$ mit

```math
X > Y
```

und nach Satz 132 bei $\eta$ eine Unterzahl $Y_1$ und eine Oberzahl $Y_2$ mit

```math
Y_2 - Y_1 = X - Y.
```

Dann ist

```math
Y > Y_1,
```

also

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

also $Y$ Unterzahl bei $v + \eta$.

b) Ist die gegebene Unterzahl bei $\xi$ Unterzahl bei $\eta$, so ist sie kleiner als jede in a) als Unterzahl bei $v + \eta$ nachgewiesene rationale Zahl, also selbst Unterzahl bei $v + \eta$.

**Definition 35:** Das $v$ des Satzes 140 heißt $\xi - \eta$ ($-$ sprich: minus). $\xi - \eta$ heißt auch die Differenz $\xi$ minus $\eta$ oder der durch Subtraktion des $\eta$ von $\xi$ entstehende Schnitt.

## § 4. Multiplikation

**Satz 141:** I) Es seien $\xi$ und $\eta$ Schnitte. Dann ist die Menge der rationalen Zahlen, die sich in der Form $XY$ schreiben lassen, wo $X$ Unterzahl bei $\xi$, $Y$ Unterzahl bei $\eta$ ist, ein Schnitt.

II) Keine Zahl dieser Menge läßt sich als Produkt einer Oberzahl bei $\xi$ und einer Oberzahl bei $\eta$ darstellen.

**Beweis:** 1) Geht man von irgend einer Unterzahl $X$ bei $\xi$ und irgend einer Unterzahl $Y$ bei $\eta$ aus, so gehört $XY$ zur Menge.

Geht man von irgend einer Oberzahl $X_1$ bei $\xi$ und irgend einer Oberzahl $Y_1$ bei $\eta$ aus, so ist für alle Unterzahlen $X$ bzw. $Y$ bei $\xi$ bzw. $\eta$

```math
X < X_1, \quad Y < Y_1,
```

also

```math
XY < X_1 Y_1,
```

```math
X_1 Y_1 \neq XY;
```

$X_1 Y_1$ gehört also nicht zur Menge. Und II) ist schon mitbewiesen.

2) Es sei $X$ Unterzahl bei $\xi$, $Y$ Unterzahl bei $\eta$ und

```math
Z < XY.
```

Dann ist

```math
X \left(\frac{1}{X} \cdot Z\right) = \left(X \cdot \frac{1}{X}\right) Z = 1 \cdot Z = Z,
```

```math
\frac{1}{X} \cdot Z < \frac{1}{X} \cdot (XY) = \left(\frac{1}{X} \cdot X\right) Y = Y,
```

also $\frac{Z}{X}$ Unterzahl bei $\eta$. Die Gleichung

```math
X \cdot \frac{Z}{X} = Z
```

zeigt also, daß $Z$ zu unserer Menge gehört.

3) Ist eine Zahl der Menge gegeben, so hat sie die Form $XY$, wo $X$ Unterzahl bei $\xi$, $Y$ Unterzahl bei $\eta$ ist. Man wähle bei $\xi$ eine Unterzahl

```math
X_1 > X;
```

dann ist

```math
X_1 Y > XY,
```

also eine Zahl der Menge $> XY$ vorhanden.

**Definition 36:** Der in Satz 141 konstruierte Schnitt heißt $\xi \cdot \eta$ ($\cdot$ sprich: mal; aber man schreibt den Punkt meist nicht). Er heißt auch das Produkt von $\xi$ mit $\eta$ oder der durch Multiplikation von $\xi$ mit $\eta$ entstehende Schnitt.

**Satz 142** (kommutatives Gesetz der Multiplikation):

```math
\xi\eta = \eta\xi.
```

**Beweis:** Jedes $XY$ ist auch $YX$ und umgekehrt.

**Satz 143** (assoziatives Gesetz der Multiplikation):

```math
(\xi\eta)\zeta = \xi(\eta\zeta).
```

**Beweis:** Jedes $(XY)Z$ ist auch $X(YZ)$ und umgekehrt.

**Satz 144** (distributives Gesetz):

```math
\xi(\eta + \zeta) = \xi\eta + \xi\zeta.
```

**Beweis:** I) Jede Unterzahl bei $\xi(\eta + \zeta)$ ist

```math
X(Y + Z) = XY + XZ,
```

wo $X, Y, Z$ bzw. Unterzahlen bei $\xi, \eta, \zeta$ sind. Die Zahl $XY + XZ$ ist Unterzahl bei $\xi\eta + \xi\zeta$.

II) Jede Unterzahl bei $\xi\eta + \xi\zeta$ hat die Form

```math
XY + X_1 Z,
```

wo $X, Y, X_1, Z$ bzw. Unterzahlen bei $\xi, \eta, \xi, \zeta$ sind. Im Falle $X \geqq X_1$ sei die Zahl $X$, im Falle $X < X_1$ die Zahl $X_1$ mit $X_2$ bezeichnet. Dann ist $X_2$ Unterzahl bei $\xi$, also $X_2(Y + Z)$ Unterzahl bei $\xi(\eta + \zeta)$. Aus

```math
XY \leqq X_2 Y,
```

```math
X_1 Z \leqq X_2 Z
```

folgt

```math
XY + X_1 Z \leqq X_2 Y + X_2 Z = X_2(Y + Z);
```

also ist $XY + X_1 Z$ Unterzahl bei $\xi(\eta + \zeta)$.

**Satz 145:** Aus

```math
\xi > \eta \text{ bzw. } \xi = \eta \text{ bzw. } \xi < \eta
```

folgt

```math
\xi\zeta > \eta\zeta \text{ bzw. } \xi\zeta = \eta\zeta \text{ bzw. } \xi\zeta < \eta\zeta.
```

**Beweis:** 1) Aus

```math
\xi > \eta
```

folgt nach Satz 140 bei passendem $v$

```math
\xi = \eta + v,
```

also

```math
\xi\zeta = (\eta + v)\zeta = \eta\zeta + v\zeta > \eta\zeta.
```

2) Aus

```math
\xi = \eta
```

folgt natürlich

```math
\xi\zeta = \eta\zeta.
```

3) Aus

```math
\xi < \eta
```

folgt

```math
\eta > \xi,
```

also nach 1)

```math
\eta\zeta > \xi\zeta,
```

```math
\xi\zeta < \eta\zeta.
```

**Satz 146:** Aus

```math
\xi\zeta > \eta\zeta \text{ bzw. } \xi\zeta = \eta\zeta \text{ bzw. } \xi\zeta < \eta\zeta
```

folgt

```math
\xi > \eta \text{ bzw. } \xi = \eta \text{ bzw. } \xi < \eta.
```

**Beweis:** Folgt aus Satz 145, da die drei Fälle beide Male sich ausschließen und alle Möglichkeiten erschöpfen.

**Satz 147:** Aus

```math
\xi > \eta, \quad \zeta > v
```

folgt

```math
\xi\zeta > \eta v.
```

**Beweis:** Nach Satz 145 ist

```math
\xi\zeta > \eta\zeta
```

und

```math
\eta\zeta = \zeta\eta > v\eta = \eta v,
```

also

```math
\xi\zeta > \eta v.
```

**Satz 148:** Aus

```math
\xi \geqq \eta, \quad \zeta > v \text{ oder } \xi > \eta, \quad \zeta \geqq v
```

folgt

```math
\xi\zeta > \eta v.
```

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung durch Satz 145, sonst durch Satz 147 erledigt.

**Satz 149:** Aus

```math
\xi \geqq \eta, \quad \zeta \geqq v
```

folgt

```math
\xi\zeta \geqq \eta v.
```

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 148 erledigt.

**Satz 150:** Für jede rationale Zahl $R$ bildet die Menge der rationalen Zahlen $< R$ einen Schnitt.

**Beweis:** 1) Nach Satz 90 gibt es ein $X < R$. $R$ selbst ist nicht $< R$.

2) Ist

```math
X < R, \quad X_1 < X,
```

so ist

```math
X_1 < R.
```

3) Ist

```math
X < R,
```

so gibt es nach Satz 91 ein $X_1$ mit

```math
X < X_1 < R.
```

**Definition 37:** Der in Satz 150 konstruierte Schnitt heißt $R^*$.

(Große lateinische Buchstaben mit Sternen bedeuten also Schnitte, nicht rationale Zahlen.)

**Satz 151:** $\xi \cdot 1^* = \xi$.

**Beweis:** $\xi \cdot 1^*$ ist die Menge aller $XY$, wo $X$ Unterzahl bei $\xi$ und

```math
Y < 1
```

ist.

Jedes solche $XY$ ist $< X$, also Unterzahl bei $\xi$.

Umgekehrt sei eine Unterzahl $X$ bei $\xi$ gegeben. Dann wähle man bei $\xi$ eine Unterzahl

```math
X_1 > X
```

und setze

```math
Y = \frac{X}{X_1}.
```

Dann ist

```math
Y < \frac{X_1}{X_1} = 1,
```

also

```math
X = X_1 Y
```

Unterzahl bei $\xi \cdot 1^*$.

**Satz 152:** Ist $\xi$ gegeben, so hat die Gleichung

```math
\xi v = 1^*
```

eine Lösung $v$.

**Beweis:** Wir betrachten die Menge aller Zahlen $\frac{1}{X}$, wo $X$ eine beliebige Oberzahl bei $\xi$ mit etwaiger Ausnahme der kleinsten (wenn es nämlich eine gibt) ist. Wir zeigen, daß diese Menge ein Schnitt ist.

1) Es gibt eine Zahl der Menge; denn wenn $X$ eine Oberzahl bei $\xi$ ist, ist $X + X$ auch eine, aber nicht die kleinste, also

```math
\frac{1}{X + X}
```

zur Menge gehörig.

Es gibt eine rationale Zahl, die nicht zur Menge gehört; denn ist $X_1$ irgend eine Unterzahl bei $\xi$, so ist für alle Oberzahlen $X$ bei $\xi$

```math
X \neq X_1,
```

also, wegen

```math
X \cdot \frac{1}{X} = 1 = X_1 \cdot \frac{1}{X_1},
```

```math
\frac{1}{X} \neq \frac{1}{X_1};
```

$\frac{1}{X_1}$ ist daher nicht zu unserer Menge gehörig.

2) Ist eine Zahl $\frac{1}{X}$ unserer Menge gegeben, also $X$ Oberzahl bei $\xi$, und

```math
U < \frac{1}{X},
```

so ist

```math
UX < \left(\frac{1}{X}\right) X = 1 = U \cdot \frac{1}{U},
```

also

```math
X < \frac{1}{U},
```

also $\frac{1}{U}$ Oberzahl bei $\xi$ und nicht die kleinste; wegen

```math
U = \frac{1}{1/U}
```

ist also $U$ zu unserer Menge gehörig.

3) Ist eine Zahl $\frac{1}{X}$ unserer Menge gegeben, also $X$ Oberzahl bei $\xi$ und nicht die kleinste, so wähle man bei $\xi$ eine Oberzahl

```math
X_1 < X
```

und alsdann nach Satz 91 ein $X_2$ mit

```math
X_1 < X_2 < X.
```

Dann ist $X_2$ Oberzahl bei $\xi$ und nicht die kleinste; aus

```math
\left(\frac{1}{X}\right) X_2 < \left(\frac{1}{X}\right) X = 1 = \left(\frac{1}{X_2}\right) X_2
```

folgt

```math
\frac{1}{X} < \frac{1}{X_2},
```

so daß wir eine Zahl unserer Menge gefunden haben, die größer ist als die gegebene.

Unsere Menge ist also ein Schnitt; er heiße $v$.

Von ihm werden wir

```math
\xi v = 1^*
```

beweisen. Hierzu genügt es, zweierlei zu zeigen:

A) Jede Unterzahl bei $\xi v$ ist $< 1$.

B) Jede rationale Zahl $< 1$ ist Unterzahl bei $\xi v$.

Ad A) Jede Unterzahl bei $\xi v$ hat die Form

```math
X \cdot \frac{1}{X_1},
```

wo $X$ Unterzahl bei $\xi$, $X_1$ Oberzahl bei $\xi$ ist. Aus

```math
X < X_1
```

folgt

```math
X \cdot \frac{1}{X_1} < X_1 \cdot \frac{1}{X_1} = 1.
```

Ad B) Es sei

```math
U < 1.
```

Wir wählen irgend eine Unterzahl $X$ bei $\xi$ und dann nach Satz 132 eine Unterzahl $X_1$ bei $\xi$ und eine Oberzahl $X_2$ bei $\xi$ mit

```math
X_2 - X_1 = (1 - U) X.
```

Dann ist

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

$\frac{X_1}{U}$ ist also Oberzahl bei $\xi$ und nicht die kleinste. Aus

folgt

```math
U = X_1 \cdot \frac{1}{X_1/U};
```

hier ist $X_1$ Unterzahl bei $\xi$, $\frac{1}{X_1/U}$ Unterzahl bei $v$; also ist $U$ Unterzahl bei $\xi v$.

**Satz 153:** Die Gleichung

```math
\eta v = \xi,
```

wo $\xi, \eta$ gegeben sind, hat genau eine Lösung $v$.

**Beweis:** I) Es gibt höchstens eine Lösung; denn für

```math
v_1 \neq v_2
```

ist nach Satz 145

```math
\eta v_1 \neq \eta v_2.
```

II) Ist $\tau$ die durch Satz 152 als vorhanden nachgewiesene Lösung von

```math
\eta\tau = 1^*,
```

so genügt

```math
v = \tau\xi
```

unserer Gleichung; denn nach Satz 151 ist

```math
\eta v = \eta(\tau\xi) = (\eta\tau)\xi = 1^*\xi = \xi.
```

**Definition 38:** Das $v$ des Satzes 153 heißt $\frac{\xi}{\eta}$ (sprich: $\xi$ durch $\eta$). $\frac{\xi}{\eta}$ heißt auch der Quotient von $\xi$ durch $\eta$ oder der durch Division von $\xi$ durch $\eta$ entstehende Schnitt.

## § 5. Rationale Schnitte und ganze Schnitte

**Definition 39:** Ein Schnitt der Form $X^*$ heißt rationaler Schnitt.

**Definition 40:** Ein Schnitt der Form $x^*$ heißt ganzer Schnitt.

(Kleine lateinische Buchstaben mit Sternen bedeuten also Schnitte, nicht ganze Zahlen.)

**Satz 154:** Aus

```math
X > Y \text{ bzw. } X = Y \text{ bzw. } X < Y
```

folgt

```math
X^* > Y^* \text{ bzw. } X^* = Y^* \text{ bzw. } X^* < Y^*
```

und umgekehrt.

**Beweis:** I) 1) Aus

```math
X > Y
```

folgt, daß $Y$ Unterzahl bei $X^*$ ist. $Y$ ist Oberzahl bei $Y^*$. Also

```math
X^* > Y^*.
```

2) Aus

```math
X = Y
```

folgt natürlich

```math
X^* = Y^*
```

3) Aus

```math
X < Y
```

folgt

```math
Y > X,
```

also nach 1)

```math
Y^* > X^*,
```

```math
X^* < Y^*.
```

II) Die Umkehrung ist klar, da die drei Fälle beide Male sich ausschließen und alle Möglichkeiten erschöpfen.

**Satz 155:**

```math
\begin{gathered}
(X + Y)^* = X^* + Y^*; \\
(X - Y)^* = X^* - Y^* \quad \text{falls } X > Y; \\
(XY)^* = X^* Y^*; \\
\left(\frac{X}{Y}\right)^{\!*} = \frac{X^*}{Y^*}.
\end{gathered}
```

**Beweis:** I) a) Jede Unterzahl bei $X^* + Y^*$ ist die Summe einer rationalen Zahl $< X$ und einer rationalen Zahl $< Y$; sie ist also $< X + Y$, also Unterzahl bei $(X + Y)^*$.

b) Jede Unterzahl $U$ bei $(X + Y)^*$ ist $< X + Y$. Aus

```math
\frac{U}{X + Y} < 1,
```

```math
U = X \cdot \frac{U}{X + Y} + Y \cdot \frac{U}{X + Y}
```

folgt, daß $U$ Summe einer rationalen Zahl $< X$ und einer rationalen Zahl $< Y$ ist, also Unterzahl bei $X^* + Y^*$ ist.

Daher ist

```math
(X + Y)^* = X^* + Y^*.
```

II) Aus

```math
X > Y
```

folgt

```math
X = (X - Y) + Y,
```

also nach I)

```math
X^* = (X - Y)^* + Y^*,
```

```math
(X - Y)^* = X^* - Y^*.
```

III) a) Jede Unterzahl bei $X^* Y^*$ ist Produkt einer rationalen Zahl $< X$ und einer rationalen Zahl $< Y$; sie ist also $< XY$, also Unterzahl bei $(XY)^*$.

b) Jede Unterzahl $U$ bei $(XY)^*$ ist $< XY$. Es werde nach Satz 91 eine rationale Zahl $U_1$ mit

```math
U < U_1 < XY
```

gewählt. Dann ist

```math
\frac{U_1}{X} < Y
```

und

```math
\left(\frac{U}{U_1}\right) X < X.
```

Durch

```math
U = \left(\left(\frac{U}{U_1}\right) X\right) \left(\frac{U_1}{X}\right)
```

ist also $U$ als das Produkt einer Unterzahl bei $X^*$ und einer Unterzahl bei $Y^*$ dargestellt. $U$ ist also Unterzahl bei $X^* Y^*$.

Daher ist

```math
(XY)^* = X^* Y^*.
```

IV)

```math
X = \left(\frac{X}{Y}\right) \cdot Y,
```

also nach III)

```math
X^* = \left(\frac{X}{Y}\right)^{\!*} Y^*,
```

```math
\left(\frac{X}{Y}\right)^{\!*} = \frac{X^*}{Y^*}.
```

**Satz 156:** Die ganzen Schnitte genügen den fünf Axiomen der natürlichen Zahlen, wenn $1^*$ an Stelle von $1$ genommen wird und

```math
(x^*)' = (x')^*
```

gesetzt wird.

**Beweis:** $Q^*$ sei die Menge der ganzen Schnitte.

1) $1^*$ gehört zu $Q^*$.

2) Zu $x^*$ ist $(x^*)'$ in $Q^*$ vorhanden.

3) Stets ist

```math
x' \neq 1,
```

also

```math
(x')^* \neq 1^*,
```

```math
(x^*)' \neq 1^*.
```

4) Aus

```math
(x^*)' = (y^*)'
```

folgt

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

5) Eine Menge $\mathfrak{M}^*$ von ganzen Schnitten habe die Eigenschaften:

I) $1^*$ gehört zu $\mathfrak{M}^*$.

II) Falls $x^*$ zu $\mathfrak{M}^*$ gehört, so gehört $(x^*)'$ zu $\mathfrak{M}^*$.

Dann bezeichne $\mathfrak{M}$ die Menge der $x$, für die $x^*$ zu $\mathfrak{M}^*$ gehört. Alsdann ist $1$ zu $\mathfrak{M}$ gehörig und mit jedem $x$ von $\mathfrak{M}$ auch $x'$ zu $\mathfrak{M}$ gehörig. Also gehört jede ganze Zahl zu $\mathfrak{M}$, also jeder ganze Schnitt zu $\mathfrak{M}^*$.

Da $=$, $>$, $<$, Summe, Differenz (wofern vorhanden), Produkt und Quotient bei rationalen Schnitten nach Satz 154 und Satz 155 den alten Begriffen entsprechen, haben die rationalen Schnitte alle Eigenschaften, die wir in Kapitel 2 für rationale Zahlen bewiesen haben, und insbesondere die ganzen Schnitte alle bewiesenen Eigenschaften der ganzen Zahlen.

Daher werfen wir die rationalen Zahlen weg, ersetzen sie durch die entsprechenden rationalen Schnitte und haben fortan in bezug auf das Bisherige nur noch von Schnitten zu reden. (Die rationalen Zahlen verbleiben aber in Mengen beim Begriff des Schnittes.)

**Definition 41:** (Das freigewordene Zeichen) $X$ bezeichnet den rationalen Schnitt $X^*$, auf den auch das Wort rationale Zahl übergeht; ebenso geht das Wort ganze Zahl auf die ganzen Schnitte über.

Also schreiben wir jetzt z. B. statt

```math
1^* + 1^* = 2^*
```

einfach

```math
1 + 1 = 2.
```

**Satz 157:** Die rationalen Zahlen sind die Schnitte, bei denen es eine kleinste Oberzahl $X$ gibt. Und zwar ist alsdann $X$ der Schnitt.

**Beweis:** 1) Beim Schnitt $X$ (dem alten $X^*$) ist $X$ (rationale Zahl im alten Sinne) kleinste Oberzahl.

2) Gibt es bei einem Schnitt $\xi$ eine kleinste Oberzahl $X$, so ist jede Unterzahl $< X$, jede Oberzahl $\geqq X$, der Schnitt also $X$ (das alte $X^*$).

**Satz 158:** Es sei $\xi$ ein Schnitt. Dann ist $X$ Unterzahl genau dann, wenn

```math
X < \xi,
```

also Oberzahl genau dann, wenn

```math
X \geqq \xi.
```

**Beweis:** 1) Ist $X$ Unterzahl bei $\xi$, so ist, da $X$ Oberzahl bei $X$ (dem alten $X^*$) ist,

```math
X < \xi.
```

2) Ist $X$ Oberzahl bei $\xi$ und zwar die kleinste, so ist nach Satz 157

```math
X = \xi.
```

3) Ist $X$ Oberzahl bei $\xi$ und zwar nicht die kleinste, so wähle man eine kleinere Oberzahl $X_1$. Dann ist $X_1$ Unterzahl bei $X$, also

```math
X > \xi.
```

**Satz 159:** Ist

```math
\xi < \eta,
```

so gibt es ein $Z$ mit

```math
\xi < Z < \eta.
```

**Beweis:** Man wähle eine Oberzahl $X$ bei $\xi$, die Unterzahl bei $\eta$ ist, und dann eine größere Unterzahl $Z$ bei $\eta$. Dann ist nach Satz 158

```math
\xi \leqq X < Z < \eta.
```

**Satz 160:** Jedes

```math
Z > \xi\eta
```

läßt sich auf die Form bringen

```math
Z = XY, \quad X > \xi, \quad Y > \eta.
```

**Beweis:** Es bezeichne $\zeta$ den kleinsten der beiden Schnitte $1$ und

```math
\frac{Z - \xi\eta}{(\xi + \eta) + 1}.
```

Dann ist

```math
\zeta \leqq 1, \quad \zeta \leqq \frac{Z - \xi\eta}{(\xi + \eta) + 1}.
```

Man wähle $Z_1$ und $Z_2$ nach Satz 159 mit

```math
\xi < Z_1 < \xi + \zeta, \quad \eta < Z_2 < \eta + \zeta.
```

Dann ist

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

ist

```math
X = \frac{Z}{Z_2} = Z \cdot \frac{1}{Z_2} > (Z_1 Z_2) \cdot \frac{1}{Z_2} = Z_1 > \xi, \quad Y = Z_2 > \eta;
```

also $Z$ in gewünschter Weise zerlegt.

**Satz 161:** Bei jedem $\zeta$ hat

```math
\xi\xi = \zeta
```

genau eine Lösung.

**Beweis:** I) Es gibt höchstens eine Lösung; denn aus

```math
\xi_1 > \xi_2
```

folgt

```math
\xi_1 \xi_1 > \xi_2 \xi_2.
```

II) Wir betrachten die Menge der rationalen Zahlen $X$ mit

```math
XX < \zeta.
```

Sie bildet einen Schnitt. Denn:

1) Ist

```math
X < 1 \text{ und } X < \zeta,
```

so ist

```math
XX < X \cdot 1 = X < \zeta.
```

Ist

```math
X \geqq 1 \text{ und } X \geqq \zeta,
```

so ist

```math
XX \geqq X \cdot 1 = X \geqq \zeta.
```

2) Aus

```math
XX < \zeta, \quad Y < X
```

folgt

```math
YY < XX < \zeta.
```

3) Es sei

```math
XX < \zeta.
```

Man wähle $Z$ kleiner als der kleinste der beiden Schnitte $1$ und

```math
\frac{\zeta - XX}{X + (X + 1)}.
```

Dann ist

```math
Z < 1, \quad Z \leqq \frac{\zeta - XX}{X + (X + 1)};
```

alsdann ist

```math
X + Z > X
```

und

```math
\begin{aligned}
(X + Z)(X + Z) &= (X + Z)X + (X + Z)Z < (XX + ZX) + (X + 1)Z \\
&= XX + (X + (X + 1))Z \leqq XX + (\zeta - XX) = \zeta.
\end{aligned}
```

Nennen wir den konstruierten Schnitt $\xi$, so behaupten wir nunmehr

```math
\xi\xi = \zeta.
```

Wäre

```math
\xi\xi > \zeta,
```

so wählen wir $Z$ nach Satz 159 mit

```math
\xi\xi > Z > \zeta.
```

Als Unterzahl bei $\xi\xi$ wäre

```math
Z = X_1 X_2, \quad X_1 < \xi, \quad X_2 < \xi;
```

wenn $X$ die größte der Zahlen $X_1$ und $X_2$ bedeutet, wäre

```math
X < \xi,
```

```math
Z \leqq XX < \zeta,
```

gegen das Obige.

Wäre

```math
\xi\xi < \zeta,
```

so wählen wir $Z$ nach Satz 159 mit

```math
\xi\xi < Z < \zeta.
```

$Z$ hätte nach Satz 160 die Form

```math
Z = X_1 X_2, \quad X_1 > \xi, \quad X_2 > \xi;
```

wenn $X$ die kleinste der Zahlen $X_1$ und $X_2$ bedeutet, wäre

```math
X > \xi,
```

```math
Z \geqq XX \geqq \zeta,
```

gegen das Obige.

**Definition 42:** Jeder Schnitt, der keine rationale Zahl ist, heißt irrationale Zahl.

**Satz 162:** Es gibt eine irrationale Zahl.

**Beweis:** Es genügt zu zeigen, daß die nach Satz 161 vorhandene Lösung von

```math
\xi\xi = 1'
```

irrational ist.

Sonst wäre

```math
\xi = \frac{x}{y};
```

unter allen solchen Darstellungen wählen wir nach Satz 27 eine solche, in der $y$ möglichst klein ist. Wegen

```math
1' = \left(\frac{x}{y}\right)\left(\frac{x}{y}\right) = \frac{xx}{yy}
```

ist

```math
yy < 1'(yy) = xx = (1'y)y < (1'y)(1'y),
```

```math
y < x < 1'y.
```

Wir setzen

```math
x - y = u.
```

Dann ist

```math
y + u = x < 1'y = y + y,
```

```math
u < y.
```

Nun ist

```math
\begin{aligned}
(v + w)(v + w) &= (v + w)v + (v + w)w = (vv + wv) + (vw + ww) \\
&= (vv + 1'(vw)) + ww,
\end{aligned}
```

also,

```math
y - u = t
```

gesetzt,

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

gegen
