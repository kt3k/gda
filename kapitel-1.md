# Kapitel 1. Natürliche Zahlen

## § 1. Axiome

Wir nehmen als gegeben an:

Eine Menge, d. h. Gesamtheit, von Dingen, natürliche Zahlen genannt, mit den nachher aufzuzählenden Eigenschaften, Axiome genannt.

Vor der Formulierung der Axiome sei einiges in bezug auf die benutzten Zeichen $=$ und $\neq$ vorangeschickt.

Kleine lateinische Buchstaben bedeuten in diesem Buch, wenn nichts anderes gesagt wird, durchweg natürliche Zahlen.

Ist $x$ gegeben und $y$ gegeben, so sind

entweder $x$ und $y$ dieselbe Zahl; das kann man auch

```math
x = y
```

schreiben ($=$ sprich: gleich);

oder $x$ und $y$ nicht dieselbe Zahl; das kann man auch

```math
x \neq y
```

schreiben ($\neq$ sprich: ungleich).

Hiernach gilt aus rein logischen Gründen:

1) $x = x$ für jedes $x$.

2) Aus

```math
x = y
```

folgt

```math
y = x.
```

3) Aus

```math
x = y, \quad y = z
```

folgt

```math
x = z.
```

Eine Schreibweise wie

```math
a = b = c = d,
```

mit der zunächst nur

```math
a = b, \quad b = c, \quad c = d
```

gemeint ist, enthält also überdies z. B.

```math
a = c, \quad a = d, \quad b = d.
```

(Entsprechend in den späteren Kapiteln.)

Von der Menge der natürlichen Zahlen nehmen wir nun an, daß sie die Eigenschaften hat:

**Axiom 1:** 1 ist eine natürliche Zahl.

D. h. unsere Menge ist nicht leer; sie enthält ein Ding, das 1 (sprich: Eins) heißt.

**Axiom 2:** Zu jedem $x$ gibt es genau eine natürliche Zahl, die der Nachfolger von $x$ heißt und mit $x'$ bezeichnet werden möge.

Bei komplizierten $x$ wird die Zahl, um deren Nachfolger es sich handelt, eingeklammert, wenn sonst ein Mißverständnis zu befürchten ist. Entsprechendes gilt im ganzen Buch bei $x + y$, $xy$, $x - y$, $-x$, $x^y$ u. dgl.

Aus

```math
x = y
```

folgt also

```math
x' = y'.
```

**Axiom 3:** Stets ist

```math
x' \neq 1.
```

D. h. es gibt keine Zahl mit dem Nachfolger 1.

**Axiom 4:** Aus

```math
x' = y'
```

folgt

```math
x = y.
```

D. h. zu jeder Zahl gibt es keine oder genau eine, deren Nachfolger jene Zahl ist.

**Axiom 5** (Induktionsaxiom): Es sei $\mathfrak{M}$ eine Menge natürlicher Zahlen mit den Eigenschaften:

I) 1 gehört zu $\mathfrak{M}$.

II) Wenn $x$ zu $\mathfrak{M}$ gehört, so gehört $x'$ zu $\mathfrak{M}$.

Dann umfaßt $\mathfrak{M}$ alle natürlichen Zahlen.

## § 2. Addition

**Satz 1:** Aus

```math
x \neq y
```

folgt

```math
x' \neq y'.
```

**Beweis:** Sonst wäre

```math
x' = y',
```

also nach Axiom 4

```math
x = y.
```

**Satz 2:**

```math
x' \neq x.
```

**Beweis:** $\mathfrak{M}$ sei die Menge der $x$, für die dies gilt.

I) Nach Axiom 1 und Axiom 3 ist

```math
1' \neq 1;
```

also gehört 1 zu $\mathfrak{M}$.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist

```math
x' \neq x,
```

also nach Satz 1

```math
(x')' \neq x',
```

also $x'$ zu $\mathfrak{M}$ gehörig.

Nach Axiom 5 umfaßt also $\mathfrak{M}$ alle natürlichen Zahlen; d. h. für jedes $x$ ist

```math
x' \neq x.
```

**Satz 3:** Ist

```math
x \neq 1,
```

so gibt es ein (also nach Axiom 4 genau ein) $u$ mit

```math
x = u'.
```

**Beweis:** $\mathfrak{M}$ sei die Menge, die aus der Zahl 1 und denjenigen $x$ besteht, zu denen es ein solches $u$ gibt. (Von selbst ist jedes derartige

```math
x \neq 1
```

nach Axiom 3.)

I) 1 gehört zu $\mathfrak{M}$.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist, wenn unter $u$ die Zahl $x$ verstanden wird,

```math
x' = u',
```

also $x'$ zu $\mathfrak{M}$ gehörig.

Nach Axiom 5 umfaßt also $\mathfrak{M}$ alle natürlichen Zahlen; zu jedem

```math
x \neq 1
```

gibt es also ein $u$ mit

```math
x = u'.
```

**Satz 4, zugleich Definition 1:** Auf genau eine Art läßt sich jedem Zahlenpaar $x$, $y$ eine natürliche Zahl, $x + y$ genannt ($+$ sprich: plus), so zuordnen, daß

1) $x + 1 = x'$ für jedes $x$,

2) $x + y' = (x + y)'$ für jedes $x$ und jedes $y$.

$x + y$ heißt die Summe von $x$ und $y$ oder die durch Addition von $y$ zu $x$ entstehende Zahl.

**Beweis:** A) Zunächst zeigen wir, daß es bei jedem festen $x$ höchstens eine Möglichkeit gibt, $x + y$ für alle $y$ so zu definieren, daß

```math
x + 1 = x'
```

und

```math
x + y' = (x + y)' \quad \text{für jedes } y.
```

Es seien $a_y$ und $b_y$ für alle $y$ definiert und so beschaffen, daß

```math
a_{y'} = (a_y)', \quad b_{y'} = (b_y)' \quad \text{für jedes } y.
```

$\mathfrak{M}$ sei die Menge der $y$ mit

```math
a_y = b_y.
```

I)

```math
a_1 = x' = b_1;
```

1 gehört also zu $\mathfrak{M}$.

II) Ist $y$ zu $\mathfrak{M}$ gehörig, so ist

```math
a_y = b_y,
```

also nach Axiom 2

```math
(a_y)' = (b_y)',
```

also

```math
a_{y'} = (a_y)' = (b_y)' = b_{y'},
```

also $y'$ zu $\mathfrak{M}$ gehörig.

Daher ist $\mathfrak{M}$ die Menge aller natürlichen Zahlen; d. h. für jedes $y$ ist

```math
a_y = b_y.
```

B) Wir zeigen jetzt, daß es zu jedem $x$ eine Möglichkeit gibt, $x + y$ für alle $y$ so zu definieren, daß

```math
x + 1 = x'
```

und

```math
x + y' = (x + y)' \quad \text{für jedes } y.
```

$\mathfrak{M}$ sei die Menge der $x$, zu denen es eine (also nach A) genau eine) solche Möglichkeit gibt.

I) Für

```math
x = 1
```

leistet

```math
x + y = y'
```

das Gewünschte. Denn

```math
x + 1 = 1' = x',
```

```math
x + y' = (y')' = (x + y)'.
```

Also gehört 1 zu $\mathfrak{M}$.

II) Es sei $x$ zu $\mathfrak{M}$ gehörig, also ein $x + y$ für alle $y$ vorhanden. Dann leistet

```math
x' + y = (x + y)'
```

das Gewünschte bei $x'$. Denn

```math
x' + 1 = (x + 1)' = (x')'
```

und

```math
x' + y' = (x + y')' = ((x + y)')' = (x' + y)'.
```

Also gehört $x'$ zu $\mathfrak{M}$.

Daher umfaßt $\mathfrak{M}$ alle $x$.

**Satz 5** (assoziatives Gesetz der Addition):

```math
(x + y) + z = x + (y + z).
```

**Beweis:** $x$ und $y$ seien fest, $\mathfrak{M}$ die Menge der $z$, für die die Behauptung gilt.

I)

```math
(x + y) + 1 = (x + y)' = x + y' = x + (y + 1);
```

also gehört 1 zu $\mathfrak{M}$.

II) $z$ gehöre zu $\mathfrak{M}$. Dann ist

```math
(x + y) + z = x + (y + z),
```

also

```math
(x + y) + z' = ((x + y) + z)' = (x + (y + z))' = x + (y + z)' = x + (y + z'),
```

also $z'$ zu $\mathfrak{M}$ gehörig.

Die Behauptung gilt also für alle $z$.

**Satz 6** (kommutatives Gesetz der Addition):

```math
x + y = y + x.
```

**Beweis:** $y$ sei fest, $\mathfrak{M}$ die Menge der $x$, für die die Behauptung gilt.

I) Es ist

```math
y + 1 = y'
```

und nach der Konstruktion beim Beweise des Satzes 4

```math
1 + y = y',
```

also

```math
1 + y = y + 1,
```

1 zu $\mathfrak{M}$ gehörig.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist

```math
x + y = y + x,
```

also

```math
(x + y)' = (y + x)' = y + x'.
```

Nach der Konstruktion beim Beweise des Satzes 4 ist

```math
x' + y = (x + y)',
```

also

```math
x' + y = y + x',
```

also $x'$ zu $\mathfrak{M}$ gehörig.

Die Behauptung gilt also für alle $x$.

**Satz 7:**

```math
y \neq x + y.
```

**Beweis:** $x$ sei fest, $\mathfrak{M}$ die Menge der $y$, für die die Behauptung gilt.

I)

```math
1 \neq x + 1;
```

1 gehört zu $\mathfrak{M}$.

II) Ist $y$ zu $\mathfrak{M}$ gehörig, so ist

```math
y \neq x + y,
```

also

```math
y' \neq (x + y)',
```

```math
y' \neq x + y',
```

$y'$ zu $\mathfrak{M}$ gehörig.

Die Behauptung gilt also für alle $y$.

**Satz 8:** Aus

```math
y \neq z
```

folgt

```math
x + y \neq x + z.
```

**Beweis:** Bei festen $y$, $z$ mit

```math
y \neq z
```

sei $\mathfrak{M}$ die Menge der $x$ mit

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

1 gehört also zu $\mathfrak{M}$.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist

```math
x + y \neq x + z,
```

also

```math
(x + y)' \neq (x + z)',
```

```math
x' + y \neq x' + z,
```

$x'$ zu $\mathfrak{M}$ gehörig.

Also gilt die Behauptung stets.

**Satz 9:** Sind $x$ und $y$ gegeben, so liegt genau einer der Fälle vor:

1) $x = y$.

2) Es gibt ein (also nach Satz 8 genau ein) $u$ mit

```math
x = y + u.
```

3) Es gibt ein (also nach Satz 8 genau ein) $v$ mit

```math
y = x + v.
```

**Beweis:** A) Nach Satz 7 sind 1), 2) unverträglich und 1), 3) unverträglich. Aus Satz 7 folgt auch die Unverträglichkeit von 2), 3); denn sonst wäre

```math
x = y + u = (x + v) + u = x + (v + u) = (v + u) + x.
```

Also liegt höchstens einer der Fälle 1), 2), 3) vor.

B) $x$ sei fest, $\mathfrak{M}$ die Menge der $y$, für die einer (also nach A) genau einer) der Fälle 1), 2), 3) vorliegt.

I) Für $y = 1$ ist nach Satz 3 entweder

```math
x = 1 = y \quad \text{(Fall 1))}
```

oder

```math
x = u' = 1 + u = y + u \quad \text{(Fall 2))}.
```

Daher gehört 1 zu $\mathfrak{M}$.

II) Es gehöre $y$ zu $\mathfrak{M}$. Dann ist

entweder (Fall 1) bei $y$)

```math
x = y,
```

also

```math
y' = y + 1 = x + 1 \quad \text{(Fall 3) für } y');
```

oder (Fall 2) bei $y$)

```math
x = y + u,
```

also, wenn

```math
u = 1,
```

```math
x = y + 1 = y' \quad \text{(Fall 1) für } y');
```

wenn

```math
u \neq 1,
```

nach Satz 3

```math
u = w' = 1 + w,
```

```math
x = y + (1 + w) = (y + 1) + w = y' + w \quad \text{(Fall 2) für } y');
```

oder (Fall 3) bei $y$)

```math
y = x + v,
```

also

```math
y' = (x + v)' = x + v' \quad \text{(Fall 3) für } y').
```

Jedenfalls gehört also $y'$ zu $\mathfrak{M}$.

Daher liegt stets einer der Fälle 1), 2), 3) vor.

## § 3. Ordnung

**Definition 2:** Ist

```math
x = y + u,
```

so ist

```math
x > y.
```

($>$ sprich: größer als.)

**Definition 3:** Ist

```math
y = x + v,
```

so ist

```math
x < y.
```

($<$ sprich: kleiner als.)

**Satz 10:** Sind $x$, $y$ beliebig, so liegt genau einer der Fälle

```math
x = y, \quad x > y, \quad x < y
```

vor.

**Beweis:** Satz 9, Definition 2 und Definition 3.

**Satz 11:** Aus

```math
x > y
```

folgt

```math
y < x.
```

**Beweis:** Beides besagt

```math
x = y + u
```

bei passendem $u$.

**Satz 12:** Aus

```math
x < y
```

folgt

```math
y > x.
```

**Beweis:** Beides besagt

```math
y = x + v
```

bei passendem $v$.

**Definition 4:**

```math
x \geqq y
```

bedeutet

```math
x > y \quad \text{oder} \quad x = y.
```

($\geqq$ sprich: größer oder gleich.)

**Definition 5:**

```math
x \leqq y
```

bedeutet

```math
x < y \quad \text{oder} \quad x = y.
```

($\leqq$ sprich: kleiner oder gleich.)

**Satz 13:** Aus

```math
x \geqq y
```

folgt

```math
y \leqq x.
```

**Beweis:** Satz 11.

**Satz 14:** Aus

```math
x \leqq y
```

folgt

```math
y \geqq x.
```

**Beweis:** Satz 12.

**Satz 15** (Transitivität der Ordnung): Aus

```math
x < y, \quad y < z
```

folgt

```math
x < z.
```

**Vorbemerkung:** Aus

```math
x > y, \quad y > z
```

folgt also (wegen

```math
z < y, \quad y < x,
```

```math
z < x)
```

```math
x > z;
```

aber solche trivialerweise durch Rückwärtslesen entstehenden Wortlaute schreibe ich in der Folge nicht erst auf.

**Beweis:** Bei passenden $v$, $w$ ist

```math
y = x + v, \quad z = y + w,
```

also

```math
z = (x + v) + w = x + (v + w),
```

```math
x < z.
```

**Satz 16:** Aus

```math
x \leqq y, \; y < z \quad \text{oder} \quad x < y, \; y \leqq z
```

folgt

```math
x < z.
```

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 15 erledigt.

**Satz 17:** Aus

```math
x \leqq y, \quad y \leqq z
```

folgt

```math
x \leqq z.
```

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 16 erledigt.

Nach den Sätzen 15 bis 17 ist eine Schreibweise wie

```math
a < b \leqq c < d
```

gerechtfertigt; das heißt zunächst

```math
a < b, \quad b \leqq c, \quad c < d,
```

enthält aber nach jenen Sätzen auch z. B.

```math
a < c, \quad a < d, \quad b < d.
```

(Entsprechend in den späteren Kapiteln.)

**Satz 18:**

```math
x + y > x.
```

**Beweis:**

```math
x + y = x + y.
```

**Satz 19:** Aus

```math
x > y \quad \text{bzw.} \quad x = y \quad \text{bzw.} \quad x < y
```

folgt

```math
x + z > y + z \quad \text{bzw.} \quad x + z = y + z \quad \text{bzw.} \quad x + z < y + z.
```

**Beweis:** 1) Aus

```math
x > y
```

folgt

```math
x = y + u,
```

```math
x + z = (y + u) + z = (u + y) + z = u + (y + z) = (y + z) + u,
```

```math
x + z > y + z.
```

2) Aus

```math
x = y
```

folgt natürlich

```math
x + z = y + z.
```

3) Aus

```math
x < y
```

folgt

```math
y > x,
```

also nach 1)

```math
y + z > x + z,
```

```math
x + z < y + z.
```

**Satz 20:** Aus

```math
x + z > y + z \quad \text{bzw.} \quad x + z = y + z \quad \text{bzw.} \quad x + z < y + z
```

folgt

```math
x > y \quad \text{bzw.} \quad x = y \quad \text{bzw.} \quad x < y.
```

**Beweis:** Folgt aus Satz 19, da die drei Fälle beide Male sich ausschließen und alle Möglichkeiten erschöpfen.

**Satz 21:** Aus

```math
x > y, \quad z > u
```

folgt

```math
x + z > y + u.
```

**Beweis:** Nach Satz 19 ist

```math
x + z > y + z
```

und

```math
y + z = z + y > u + y = y + u,
```

also

```math
x + z > y + u.
```

**Satz 22:** Aus

```math
x \geqq y, \; z > u \quad \text{oder} \quad x > y, \; z \geqq u
```

folgt

```math
x + z > y + u.
```

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung durch Satz 19, sonst durch Satz 21 erledigt.

**Satz 23:** Aus

```math
x \geqq y, \quad z \geqq u
```

folgt

```math
x + z \geqq y + u.
```

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 22 erledigt.

**Satz 24:**

```math
x \geqq 1.
```

**Beweis:** Entweder ist

```math
x = 1
```

oder

```math
x = u' = u + 1 > 1.
```

**Satz 25:** Aus

```math
y > x
```

folgt

```math
y \geqq x + 1.
```

**Beweis:**

```math
y = x + u,
```

```math
u \geqq 1,
```

also

```math
y \geqq x + 1.
```

**Satz 26:** Aus

```math
y < x + 1
```

folgt

```math
y \leqq x.
```

**Beweis:** Sonst wäre

```math
y > x,
```

also nach Satz 25

```math
y \geqq x + 1.
```

**Satz 27:** In jeder nicht leeren Menge natürlicher Zahlen gibt es eine kleinste (d. h. eine, die kleiner ist als jede etwaige andere).

**Beweis:** $\mathfrak{N}$ sei die gegebene Menge. $\mathfrak{M}$ sei die Menge der $x$, die $\leqq$ jeder Zahl aus $\mathfrak{N}$ sind.

1 gehört zu $\mathfrak{M}$ nach Satz 24. Nicht jedes $x$ gehört zu $\mathfrak{M}$; denn für jedes $y$ aus $\mathfrak{N}$ gehört $y + 1$ nicht zu $\mathfrak{M}$, wegen

```math
y + 1 > y.
```

Also gibt es in $\mathfrak{M}$ ein $m$, so daß $m + 1$ nicht zu $\mathfrak{M}$ gehört; denn sonst müßte nach Axiom 5 jede natürliche Zahl zu $\mathfrak{M}$ gehören.

Von jenem $m$ behaupte ich, daß es $\leqq$ jedem $n$ aus $\mathfrak{N}$ ist und zu $\mathfrak{N}$ gehört. Ersteres steht schon fest. Letzteres folgt indirekt so: Wäre $m$ nicht zu $\mathfrak{N}$ gehörig, so wäre für jedes $n$ aus $\mathfrak{N}$

```math
m < n,
```

also nach Satz 25

```math
m + 1 \leqq n;
```

$m + 1$ würde also zu $\mathfrak{M}$ gehören, gegen das Obige.

## § 4. Multiplikation

**Satz 28, zugleich Definition 6:** Auf genau eine Art läßt sich jedem Zahlenpaar $x$, $y$ eine natürliche Zahl, $x \cdot y$ genannt ($\cdot$ sprich: mal; aber man schreibt den Punkt meist nicht), so zuordnen, daß

1) $x \cdot 1 = x$ für jedes $x$,

2) $x \cdot y' = x \cdot y + x$ für jedes $x$ und jedes $y$.

$x \cdot y$ heißt das Produkt von $x$ mit $y$ oder die durch Multiplikation von $x$ mit $y$ entstehende Zahl.

**Beweis** (mutatis mutandis wörtlich mit dem des Satzes 4 übereinstimmend): A) Zunächst zeigen wir, daß es bei jedem festen $x$ höchstens eine Möglichkeit gibt, $xy$ für alle $y$ so zu definieren, daß

```math
x \cdot 1 = x
```

und

```math
xy' = xy + x \quad \text{für jedes } y.
```

Es seien $a_y$ und $b_y$ für alle $y$ definiert und so beschaffen, daß

```math
a_1 = x, \quad b_1 = x,
```

```math
a_{y'} = a_y + x, \quad b_{y'} = b_y + x \quad \text{für jedes } y.
```

$\mathfrak{M}$ sei die Menge der $y$ mit

```math
a_y = b_y.
```

I)

```math
a_1 = x = b_1;
```

1 gehört also zu $\mathfrak{M}$.

II) Ist $y$ zu $\mathfrak{M}$ gehörig, so ist

```math
a_y = b_y,
```

also

```math
a_{y'} = a_y + x = b_y + x = b_{y'},
```

also $y'$ zu $\mathfrak{M}$ gehörig.

Daher ist $\mathfrak{M}$ die Menge aller natürlichen Zahlen; d. h. für jedes $y$ ist

```math
a_y = b_y.
```

B) Wir zeigen jetzt, daß es zu jedem $x$ eine Möglichkeit gibt, $xy$ für alle $y$ so zu definieren, daß

```math
x \cdot 1 = x
```

und

```math
xy' = xy + x \quad \text{für jedes } y.
```

$\mathfrak{M}$ sei die Menge der $x$, zu denen es eine (also nach A) genau eine) solche Möglichkeit gibt.

I) Für

```math
x = 1
```

leistet

```math
xy = y
```

das Gewünschte. Denn

```math
x \cdot 1 = 1 = x,
```

```math
xy' = y' = y + 1 = xy + x.
```

Also gehört 1 zu $\mathfrak{M}$.

II) Es sei $x$ zu $\mathfrak{M}$ gehörig, also ein $xy$ für alle $y$ vorhanden. Dann leistet

```math
x'y = xy + y
```

das Gewünschte bei $x'$. Denn

```math
x' \cdot 1 = x \cdot 1 + 1 = x + 1 = x'
```

und

```math
\begin{aligned}
x'y' &= xy' + y' = (xy + x) + y' = xy + (x + y') = xy + (x + y)' \\
&= xy + (x' + y) = xy + (y + x') = (xy + y) + x' = x'y + x'.
\end{aligned}
```

Also gehört $x'$ zu $\mathfrak{M}$.

Daher umfaßt $\mathfrak{M}$ alle $x$.

**Satz 29** (kommutatives Gesetz der Multiplikation):

```math
xy = yx.
```

**Beweis:** $y$ sei fest, $\mathfrak{M}$ die Menge der $x$, für die die Behauptung gilt.

I) Es ist

```math
y \cdot 1 = y
```

und nach der Konstruktion beim Beweise des Satzes 28

```math
1 \cdot y = y,
```

also

```math
1 \cdot y = y \cdot 1,
```

1 zu $\mathfrak{M}$ gehörig.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist

```math
xy = yx,
```

also

```math
xy + y = yx + y = yx'.
```

Nach der Konstruktion beim Beweise des Satzes 28 ist

```math
x'y = xy + y,
```

also

```math
x'y = yx',
```

also $x'$ zu $\mathfrak{M}$ gehörig.

Die Behauptung gilt also für alle $x$.

**Satz 30** (distributives Gesetz):

```math
x(y + z) = xy + xz.
```

**Vorbemerkung:** Die aus Satz 30 und Satz 29 fließende Formel

```math
(y + z)x = yx + zx
```

und ähnliche Analoga späterhin brauchen nicht besonders als Sätze formuliert oder auch nur aufgeschrieben zu werden.

**Beweis:** Bei festen $x$, $y$ sei $\mathfrak{M}$ die Menge der $z$, für die die Behauptung gilt.

I)

```math
x(y + 1) = xy' = xy + x = xy + x \cdot 1;
```

1 gehört zu $\mathfrak{M}$.

II) Wenn $z$ zu $\mathfrak{M}$ gehört, ist

```math
x(y + z) = xy + xz,
```

also

```math
\begin{aligned}
x(y + z') &= x((y + z)') = x(y + z) + x = (xy + xz) + x \\
&= xy + (xz + x) = xy + xz',
\end{aligned}
```

also $z'$ zu $\mathfrak{M}$ gehörig.

Daher gilt die Behauptung stets.

**Satz 31** (assoziatives Gesetz der Multiplikation):

```math
(xy)z = x(yz).
```

**Beweis:** $x$ und $y$ seien fest, $\mathfrak{M}$ die Menge der $z$, für die die Behauptung gilt.

I)

```math
(xy) \cdot 1 = xy = x(y \cdot 1);
```

also gehört 1 zu $\mathfrak{M}$.

II) $z$ gehöre zu $\mathfrak{M}$. Dann ist

```math
(xy)z = x(yz),
```

also unter Benutzung von Satz 30

```math
(xy)z' = (xy)z + xy = x(yz) + xy = x(yz + y) = x(yz'),
```

also $z'$ zu $\mathfrak{M}$ gehörig.

$\mathfrak{M}$ umfaßt also alle natürlichen Zahlen.

**Satz 32:** Aus

```math
x > y \quad \text{bzw.} \quad x = y \quad \text{bzw.} \quad x < y
```

folgt

```math
xz > yz \quad \text{bzw.} \quad xz = yz \quad \text{bzw.} \quad xz < yz.
```

**Beweis:** 1) Aus

```math
x > y
```

folgt

```math
x = y + u,
```

```math
xz = (y + u)z = yz + uz > yz.
```

2) Aus

```math
x = y
```

folgt natürlich

```math
xz = yz.
```

3) Aus

```math
x < y
```

folgt

```math
y > x,
```

also nach 1)

```math
yz > xz,
```

```math
xz < yz.
```

**Satz 33:** Aus

```math
xz > yz \quad \text{bzw.} \quad xz = yz \quad \text{bzw.} \quad xz < yz
```

folgt

```math
x > y \quad \text{bzw.} \quad x = y \quad \text{bzw.} \quad x < y.
```

**Beweis:** Folgt aus Satz 32, da die drei Fälle beide Male sich ausschließen und alle Möglichkeiten erschöpfen.

**Satz 34:** Aus

```math
x > y, \quad z > u
```

folgt

```math
xz > yu.
```

**Beweis:** Nach Satz 32 ist

```math
xz > yz
```

und

```math
yz = zy > uy = yu,
```

also

```math
xz > yu.
```

**Satz 35:** Aus

```math
x \geqq y, \; z > u \quad \text{oder} \quad x > y, \; z \geqq u
```

folgt

```math
xz > yu.
```

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung durch Satz 32, sonst durch Satz 34 erledigt.

**Satz 36:** Aus

```math
x \geqq y, \quad z \geqq u
```

folgt

```math
xz \geqq yu.
```

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 35 erledigt.
