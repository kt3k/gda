# Kapitel 1. Natürliche Zahlen

## § 1. Axiome

Wir nehmen als gegeben an:

Eine Menge, d. h. Gesamtheit, von Dingen, natürliche Zahlen genannt, mit den nachher aufzuzählenden Eigenschaften, Axiome genannt.

Vor der Formulierung der Axiome sei einiges in bezug auf die benutzten Zeichen $=$ und $\neq$ vorangeschickt.

Kleine lateinische Buchstaben bedeuten in diesem Buch, wenn nichts anderes gesagt wird, durchweg natürliche Zahlen.

Ist $x$ gegeben und $y$ gegeben, so sind

entweder $x$ und $y$ dieselbe Zahl; das kann man auch

$$
x = y
$$

schreiben ($=$ sprich: gleich);

oder $x$ und $y$ nicht dieselbe Zahl; das kann man auch

$$
x \neq y
$$

schreiben ($\neq$ sprich: ungleich).

Hiernach gilt aus rein logischen Gründen:

1) $x = x$ für jedes $x$.

2) Aus

$$
x = y
$$

folgt

$$
y = x.
$$

3) Aus

$$
x = y, \quad y = z
$$

folgt

$$
x = z.
$$

Eine Schreibweise wie

$$
a = b = c = d,
$$

mit der zunächst nur

$$
a = b, \quad b = c, \quad c = d
$$

gemeint ist, enthält also überdies z. B.

$$
a = c, \quad a = d, \quad b = d.
$$

(Entsprechend in den späteren Kapiteln.)

Von der Menge der natürlichen Zahlen nehmen wir nun an, daß sie die Eigenschaften hat:

**Axiom 1:** 1 ist eine natürliche Zahl.

D. h. unsere Menge ist nicht leer; sie enthält ein Ding, das 1 (sprich: Eins) heißt.

**Axiom 2:** Zu jedem $x$ gibt es genau eine natürliche Zahl, die der Nachfolger von $x$ heißt und mit $x'$ bezeichnet werden möge.

Bei komplizierten $x$ wird die Zahl, um deren Nachfolger es sich handelt, eingeklammert, wenn sonst ein Mißverständnis zu befürchten ist. Entsprechendes gilt im ganzen Buch bei $x + y$, $xy$, $x - y$, $-x$, $x^y$ u. dgl.

Aus

$$
x = y
$$

folgt also

$$
x' = y'.
$$

**Axiom 3:** Stets ist

$$
x' \neq 1.
$$

D. h. es gibt keine Zahl mit dem Nachfolger 1.

**Axiom 4:** Aus

$$
x' = y'
$$

folgt

$$
x = y.
$$

D. h. zu jeder Zahl gibt es keine oder genau eine, deren Nachfolger jene Zahl ist.

**Axiom 5** (Induktionsaxiom): Es sei $\mathfrak{M}$ eine Menge natürlicher Zahlen mit den Eigenschaften:

I) 1 gehört zu $\mathfrak{M}$.

II) Wenn $x$ zu $\mathfrak{M}$ gehört, so gehört $x'$ zu $\mathfrak{M}$.

Dann umfaßt $\mathfrak{M}$ alle natürlichen Zahlen.

## § 2. Addition

**Satz 1:** Aus

$$
x \neq y
$$

folgt

$$
x' \neq y'.
$$

**Beweis:** Sonst wäre

$$
x' = y',
$$

also nach Axiom 4

$$
x = y.
$$

**Satz 2:**

$$
x' \neq x.
$$

**Beweis:** $\mathfrak{M}$ sei die Menge der $x$, für die dies gilt.

I) Nach Axiom 1 und Axiom 3 ist

$$
1' \neq 1;
$$

also gehört 1 zu $\mathfrak{M}$.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist

$$
x' \neq x,
$$

also nach Satz 1

$$
(x')' \neq x',
$$

also $x'$ zu $\mathfrak{M}$ gehörig.

Nach Axiom 5 umfaßt also $\mathfrak{M}$ alle natürlichen Zahlen; d. h. für jedes $x$ ist

$$
x' \neq x.
$$

**Satz 3:** Ist

$$
x \neq 1,
$$

so gibt es ein (also nach Axiom 4 genau ein) $u$ mit

$$
x = u'.
$$

**Beweis:** $\mathfrak{M}$ sei die Menge, die aus der Zahl 1 und denjenigen $x$ besteht, zu denen es ein solches $u$ gibt. (Von selbst ist jedes derartige

$$
x \neq 1
$$

nach Axiom 3.)

I) 1 gehört zu $\mathfrak{M}$.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist, wenn unter $u$ die Zahl $x$ verstanden wird,

$$
x' = u',
$$

also $x'$ zu $\mathfrak{M}$ gehörig.

Nach Axiom 5 umfaßt also $\mathfrak{M}$ alle natürlichen Zahlen; zu jedem

$$
x \neq 1
$$

gibt es also ein $u$ mit

$$
x = u'.
$$

**Satz 4, zugleich Definition 1:** Auf genau eine Art läßt sich jedem Zahlenpaar $x$, $y$ eine natürliche Zahl, $x + y$ genannt ($+$ sprich: plus), so zuordnen, daß

1) $x + 1 = x'$ für jedes $x$,

2) $x + y' = (x + y)'$ für jedes $x$ und jedes $y$.

$x + y$ heißt die Summe von $x$ und $y$ oder die durch Addition von $y$ zu $x$ entstehende Zahl.

**Beweis:** A) Zunächst zeigen wir, daß es bei jedem festen $x$ höchstens eine Möglichkeit gibt, $x + y$ für alle $y$ so zu definieren, daß

$$
x + 1 = x'
$$

und

$$
x + y' = (x + y)' \quad \text{für jedes } y.
$$

Es seien $a_y$ und $b_y$ für alle $y$ definiert und so beschaffen, daß

$$
a_{y'} = (a_y)', \quad b_{y'} = (b_y)' \quad \text{für jedes } y.
$$

$\mathfrak{M}$ sei die Menge der $y$ mit

$$
a_y = b_y.
$$

I)

$$
a_1 = x' = b_1;
$$

1 gehört also zu $\mathfrak{M}$.

II) Ist $y$ zu $\mathfrak{M}$ gehörig, so ist

$$
a_y = b_y,
$$

also nach Axiom 2

$$
(a_y)' = (b_y)',
$$

also

$$
a_{y'} = (a_y)' = (b_y)' = b_{y'},
$$

also $y'$ zu $\mathfrak{M}$ gehörig.

Daher ist $\mathfrak{M}$ die Menge aller natürlichen Zahlen; d. h. für jedes $y$ ist

$$
a_y = b_y.
$$

B) Wir zeigen jetzt, daß es zu jedem $x$ eine Möglichkeit gibt, $x + y$ für alle $y$ so zu definieren, daß

$$
x + 1 = x'
$$

und

$$
x + y' = (x + y)' \quad \text{für jedes } y.
$$

$\mathfrak{M}$ sei die Menge der $x$, zu denen es eine (also nach A) genau eine) solche Möglichkeit gibt.

I) Für

$$
x = 1
$$

leistet

$$
x + y = y'
$$

das Gewünschte. Denn

$$
x + 1 = 1' = x',
$$

$$
x + y' = (y')' = (x + y)'.
$$

Also gehört 1 zu $\mathfrak{M}$.

II) Es sei $x$ zu $\mathfrak{M}$ gehörig, also ein $x + y$ für alle $y$ vorhanden. Dann leistet

$$
x' + y = (x + y)'
$$

das Gewünschte bei $x'$. Denn

$$
x' + 1 = (x + 1)' = (x')'
$$

und

$$
x' + y' = (x + y')' = ((x + y)')' = (x' + y)'.
$$

Also gehört $x'$ zu $\mathfrak{M}$.

Daher umfaßt $\mathfrak{M}$ alle $x$.

**Satz 5** (assoziatives Gesetz der Addition):

$$
(x + y) + z = x + (y + z).
$$

**Beweis:** $x$ und $y$ seien fest, $\mathfrak{M}$ die Menge der $z$, für die die Behauptung gilt.

I)

$$
(x + y) + 1 = (x + y)' = x + y' = x + (y + 1);
$$

also gehört 1 zu $\mathfrak{M}$.

II) $z$ gehöre zu $\mathfrak{M}$. Dann ist

$$
(x + y) + z = x + (y + z),
$$

also

$$
(x + y) + z' = ((x + y) + z)' = (x + (y + z))' = x + (y + z)' = x + (y + z'),
$$

also $z'$ zu $\mathfrak{M}$ gehörig.

Die Behauptung gilt also für alle $z$.

**Satz 6** (kommutatives Gesetz der Addition):

$$
x + y = y + x.
$$

**Beweis:** $y$ sei fest, $\mathfrak{M}$ die Menge der $x$, für die die Behauptung gilt.

I) Es ist

$$
y + 1 = y'
$$

und nach der Konstruktion beim Beweise des Satzes 4

$$
1 + y = y',
$$

also

$$
1 + y = y + 1,
$$

1 zu $\mathfrak{M}$ gehörig.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist

$$
x + y = y + x,
$$

also

$$
(x + y)' = (y + x)' = y + x'.
$$

Nach der Konstruktion beim Beweise des Satzes 4 ist

$$
x' + y = (x + y)',
$$

also

$$
x' + y = y + x',
$$

also $x'$ zu $\mathfrak{M}$ gehörig.

Die Behauptung gilt also für alle $x$.

**Satz 7:**

$$
y \neq x + y.
$$

**Beweis:** $x$ sei fest, $\mathfrak{M}$ die Menge der $y$, für die die Behauptung gilt.

I)

$$
1 \neq x + 1;
$$

1 gehört zu $\mathfrak{M}$.

II) Ist $y$ zu $\mathfrak{M}$ gehörig, so ist

$$
y \neq x + y,
$$

also

$$
y' \neq (x + y)',
$$

$$
y' \neq x + y',
$$

$y'$ zu $\mathfrak{M}$ gehörig.

Die Behauptung gilt also für alle $y$.

**Satz 8:** Aus

$$
y \neq z
$$

folgt

$$
x + y \neq x + z.
$$

**Beweis:** Bei festen $y$, $z$ mit

$$
y \neq z
$$

sei $\mathfrak{M}$ die Menge der $x$ mit

$$
x + y \neq x + z.
$$

I)

$$
y' \neq z',
$$

$$
1 + y \neq 1 + z;
$$

1 gehört also zu $\mathfrak{M}$.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist

$$
x + y \neq x + z,
$$

also

$$
(x + y)' \neq (x + z)',
$$

$$
x' + y \neq x' + z,
$$

$x'$ zu $\mathfrak{M}$ gehörig.

Also gilt die Behauptung stets.

**Satz 9:** Sind $x$ und $y$ gegeben, so liegt genau einer der Fälle vor:

1) $x = y$.

2) Es gibt ein (also nach Satz 8 genau ein) $u$ mit

$$
x = y + u.
$$

3) Es gibt ein (also nach Satz 8 genau ein) $v$ mit

$$
y = x + v.
$$

**Beweis:** A) Nach Satz 7 sind 1), 2) unverträglich und 1), 3) unverträglich. Aus Satz 7 folgt auch die Unverträglichkeit von 2), 3); denn sonst wäre

$$
x = y + u = (x + v) + u = x + (v + u) = (v + u) + x.
$$

Also liegt höchstens einer der Fälle 1), 2), 3) vor.

B) $x$ sei fest, $\mathfrak{M}$ die Menge der $y$, für die einer (also nach A) genau einer) der Fälle 1), 2), 3) vorliegt.

I) Für $y = 1$ ist nach Satz 3 entweder

$$
x = 1 = y \quad \text{(Fall 1))}
$$

oder

$$
x = u' = 1 + u = y + u \quad \text{(Fall 2))}.
$$

Daher gehört 1 zu $\mathfrak{M}$.

II) Es gehöre $y$ zu $\mathfrak{M}$. Dann ist

entweder (Fall 1) bei $y$)

$$
x = y,
$$

also

$$
y' = y + 1 = x + 1 \quad \text{(Fall 3) für } y');
$$

oder (Fall 2) bei $y$)

$$
x = y + u,
$$

also, wenn

$$
u = 1,
$$

$$
x = y + 1 = y' \quad \text{(Fall 1) für } y');
$$

wenn

$$
u \neq 1,
$$

nach Satz 3

$$
u = w' = 1 + w,
$$

$$
x = y + (1 + w) = (y + 1) + w = y' + w \quad \text{(Fall 2) für } y');
$$

oder (Fall 3) bei $y$)

$$
y = x + v,
$$

also

$$
y' = (x + v)' = x + v' \quad \text{(Fall 3) für } y').
$$

Jedenfalls gehört also $y'$ zu $\mathfrak{M}$.

Daher liegt stets einer der Fälle 1), 2), 3) vor.

## § 3. Ordnung

**Definition 2:** Ist

$$
x = y + u,
$$

so ist

$$
x > y.
$$

($>$ sprich: größer als.)

**Definition 3:** Ist

$$
y = x + v,
$$

so ist

$$
x < y.
$$

($<$ sprich: kleiner als.)

**Satz 10:** Sind $x$, $y$ beliebig, so liegt genau einer der Fälle

$$
x = y, \quad x > y, \quad x < y
$$

vor.

**Beweis:** Satz 9, Definition 2 und Definition 3.

**Satz 11:** Aus

$$
x > y
$$

folgt

$$
y < x.
$$

**Beweis:** Beides besagt

$$
x = y + u
$$

bei passendem $u$.

**Satz 12:** Aus

$$
x < y
$$

folgt

$$
y > x.
$$

**Beweis:** Beides besagt

$$
y = x + v
$$

bei passendem $v$.

**Definition 4:**

$$
x \geqq y
$$

bedeutet

$$
x > y \quad \text{oder} \quad x = y.
$$

($\geqq$ sprich: größer oder gleich.)

**Definition 5:**

$$
x \leqq y
$$

bedeutet

$$
x < y \quad \text{oder} \quad x = y.
$$

($\leqq$ sprich: kleiner oder gleich.)

**Satz 13:** Aus

$$
x \geqq y
$$

folgt

$$
y \leqq x.
$$

**Beweis:** Satz 11.

**Satz 14:** Aus

$$
x \leqq y
$$

folgt

$$
y \geqq x.
$$

**Beweis:** Satz 12.

**Satz 15** (Transitivität der Ordnung): Aus

$$
x < y, \quad y < z
$$

folgt

$$
x < z.
$$

**Vorbemerkung:** Aus

$$
x > y, \quad y > z
$$

folgt also (wegen

$$
z < y, \quad y < x,
$$

$$
z < x)
$$

$$
x > z;
$$

aber solche trivialerweise durch Rückwärtslesen entstehenden Wortlaute schreibe ich in der Folge nicht erst auf.

**Beweis:** Bei passenden $v$, $w$ ist

$$
y = x + v, \quad z = y + w,
$$

also

$$
z = (x + v) + w = x + (v + w),
$$

$$
x < z.
$$

**Satz 16:** Aus

$$
x \leqq y, \; y < z \quad \text{oder} \quad x < y, \; y \leqq z
$$

folgt

$$
x < z.
$$

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 15 erledigt.

**Satz 17:** Aus

$$
x \leqq y, \quad y \leqq z
$$

folgt

$$
x \leqq z.
$$

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 16 erledigt.

Nach den Sätzen 15 bis 17 ist eine Schreibweise wie

$$
a < b \leqq c < d
$$

gerechtfertigt; das heißt zunächst

$$
a < b, \quad b \leqq c, \quad c < d,
$$

enthält aber nach jenen Sätzen auch z. B.

$$
a < c, \quad a < d, \quad b < d.
$$

(Entsprechend in den späteren Kapiteln.)

**Satz 18:**

$$
x + y > x.
$$

**Beweis:**

$$
x + y = x + y.
$$

**Satz 19:** Aus

$$
x > y \quad \text{bzw.} \quad x = y \quad \text{bzw.} \quad x < y
$$

folgt

$$
x + z > y + z \quad \text{bzw.} \quad x + z = y + z \quad \text{bzw.} \quad x + z < y + z.
$$

**Beweis:** 1) Aus

$$
x > y
$$

folgt

$$
x = y + u,
$$

$$
x + z = (y + u) + z = (u + y) + z = u + (y + z) = (y + z) + u,
$$

$$
x + z > y + z.
$$

2) Aus

$$
x = y
$$

folgt natürlich

$$
x + z = y + z.
$$

3) Aus

$$
x < y
$$

folgt

$$
y > x,
$$

also nach 1)

$$
y + z > x + z,
$$

$$
x + z < y + z.
$$

**Satz 20:** Aus

$$
x + z > y + z \quad \text{bzw.} \quad x + z = y + z \quad \text{bzw.} \quad x + z < y + z
$$

folgt

$$
x > y \quad \text{bzw.} \quad x = y \quad \text{bzw.} \quad x < y.
$$

**Beweis:** Folgt aus Satz 19, da die drei Fälle beide Male sich ausschließen und alle Möglichkeiten erschöpfen.

**Satz 21:** Aus

$$
x > y, \quad z > u
$$

folgt

$$
x + z > y + u.
$$

**Beweis:** Nach Satz 19 ist

$$
x + z > y + z
$$

und

$$
y + z = z + y > u + y = y + u,
$$

also

$$
x + z > y + u.
$$

**Satz 22:** Aus

$$
x \geqq y, \; z > u \quad \text{oder} \quad x > y, \; z \geqq u
$$

folgt

$$
x + z > y + u.
$$

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung durch Satz 19, sonst durch Satz 21 erledigt.

**Satz 23:** Aus

$$
x \geqq y, \quad z \geqq u
$$

folgt

$$
x + z \geqq y + u.
$$

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 22 erledigt.

**Satz 24:**

$$
x \geqq 1.
$$

**Beweis:** Entweder ist

$$
x = 1
$$

oder

$$
x = u' = u + 1 > 1.
$$

**Satz 25:** Aus

$$
y > x
$$

folgt

$$
y \geqq x + 1.
$$

**Beweis:**

$$
y = x + u,
$$

$$
u \geqq 1,
$$

also

$$
y \geqq x + 1.
$$

**Satz 26:** Aus

$$
y < x + 1
$$

folgt

$$
y \leqq x.
$$

**Beweis:** Sonst wäre

$$
y > x,
$$

also nach Satz 25

$$
y \geqq x + 1.
$$

**Satz 27:** In jeder nicht leeren Menge natürlicher Zahlen gibt es eine kleinste (d. h. eine, die kleiner ist als jede etwaige andere).

**Beweis:** $\mathfrak{N}$ sei die gegebene Menge. $\mathfrak{M}$ sei die Menge der $x$, die $\leqq$ jeder Zahl aus $\mathfrak{N}$ sind.

1 gehört zu $\mathfrak{M}$ nach Satz 24. Nicht jedes $x$ gehört zu $\mathfrak{M}$; denn für jedes $y$ aus $\mathfrak{N}$ gehört $y + 1$ nicht zu $\mathfrak{M}$, wegen

$$
y + 1 > y.
$$

Also gibt es in $\mathfrak{M}$ ein $m$, so daß $m + 1$ nicht zu $\mathfrak{M}$ gehört; denn sonst müßte nach Axiom 5 jede natürliche Zahl zu $\mathfrak{M}$ gehören.

Von jenem $m$ behaupte ich, daß es $\leqq$ jedem $n$ aus $\mathfrak{N}$ ist und zu $\mathfrak{N}$ gehört. Ersteres steht schon fest. Letzteres folgt indirekt so: Wäre $m$ nicht zu $\mathfrak{N}$ gehörig, so wäre für jedes $n$ aus $\mathfrak{N}$

$$
m < n,
$$

also nach Satz 25

$$
m + 1 \leqq n;
$$

$m + 1$ würde also zu $\mathfrak{M}$ gehören, gegen das Obige.

## § 4. Multiplikation

**Satz 28, zugleich Definition 6:** Auf genau eine Art läßt sich jedem Zahlenpaar $x$, $y$ eine natürliche Zahl, $x \cdot y$ genannt ($\cdot$ sprich: mal; aber man schreibt den Punkt meist nicht), so zuordnen, daß

1) $x \cdot 1 = x$ für jedes $x$,

2) $x \cdot y' = x \cdot y + x$ für jedes $x$ und jedes $y$.

$x \cdot y$ heißt das Produkt von $x$ mit $y$ oder die durch Multiplikation von $x$ mit $y$ entstehende Zahl.

**Beweis** (mutatis mutandis wörtlich mit dem des Satzes 4 übereinstimmend): A) Zunächst zeigen wir, daß es bei jedem festen $x$ höchstens eine Möglichkeit gibt, $xy$ für alle $y$ so zu definieren, daß

$$
x \cdot 1 = x
$$

und

$$
xy' = xy + x \quad \text{für jedes } y.
$$

Es seien $a_y$ und $b_y$ für alle $y$ definiert und so beschaffen, daß

$$
a_1 = x, \quad b_1 = x,
$$

$$
a_{y'} = a_y + x, \quad b_{y'} = b_y + x \quad \text{für jedes } y.
$$

$\mathfrak{M}$ sei die Menge der $y$ mit

$$
a_y = b_y.
$$

I)

$$
a_1 = x = b_1;
$$

1 gehört also zu $\mathfrak{M}$.

II) Ist $y$ zu $\mathfrak{M}$ gehörig, so ist

$$
a_y = b_y,
$$

also

$$
a_{y'} = a_y + x = b_y + x = b_{y'},
$$

also $y'$ zu $\mathfrak{M}$ gehörig.

Daher ist $\mathfrak{M}$ die Menge aller natürlichen Zahlen; d. h. für jedes $y$ ist

$$
a_y = b_y.
$$

B) Wir zeigen jetzt, daß es zu jedem $x$ eine Möglichkeit gibt, $xy$ für alle $y$ so zu definieren, daß

$$
x \cdot 1 = x
$$

und

$$
xy' = xy + x \quad \text{für jedes } y.
$$

$\mathfrak{M}$ sei die Menge der $x$, zu denen es eine (also nach A) genau eine) solche Möglichkeit gibt.

I) Für

$$
x = 1
$$

leistet

$$
xy = y
$$

das Gewünschte. Denn

$$
x \cdot 1 = 1 = x,
$$

$$
xy' = y' = y + 1 = xy + x.
$$

Also gehört 1 zu $\mathfrak{M}$.

II) Es sei $x$ zu $\mathfrak{M}$ gehörig, also ein $xy$ für alle $y$ vorhanden. Dann leistet

$$
x'y = xy + y
$$

das Gewünschte bei $x'$. Denn

$$
x' \cdot 1 = x \cdot 1 + 1 = x + 1 = x'
$$

und

$$
\begin{aligned}
x'y' &= xy' + y' = (xy + x) + y' = xy + (x + y') = xy + (x + y)' \\
&= xy + (x' + y) = xy + (y + x') = (xy + y) + x' = x'y + x'.
\end{aligned}
$$

Also gehört $x'$ zu $\mathfrak{M}$.

Daher umfaßt $\mathfrak{M}$ alle $x$.

**Satz 29** (kommutatives Gesetz der Multiplikation):

$$
xy = yx.
$$

**Beweis:** $y$ sei fest, $\mathfrak{M}$ die Menge der $x$, für die die Behauptung gilt.

I) Es ist

$$
y \cdot 1 = y
$$

und nach der Konstruktion beim Beweise des Satzes 28

$$
1 \cdot y = y,
$$

also

$$
1 \cdot y = y \cdot 1,
$$

1 zu $\mathfrak{M}$ gehörig.

II) Ist $x$ zu $\mathfrak{M}$ gehörig, so ist

$$
xy = yx,
$$

also

$$
xy + y = yx + y = yx'.
$$

Nach der Konstruktion beim Beweise des Satzes 28 ist

$$
x'y = xy + y,
$$

also

$$
x'y = yx',
$$

also $x'$ zu $\mathfrak{M}$ gehörig.

Die Behauptung gilt also für alle $x$.

**Satz 30** (distributives Gesetz):

$$
x(y + z) = xy + xz.
$$

**Vorbemerkung:** Die aus Satz 30 und Satz 29 fließende Formel

$$
(y + z)x = yx + zx
$$

und ähnliche Analoga späterhin brauchen nicht besonders als Sätze formuliert oder auch nur aufgeschrieben zu werden.

**Beweis:** Bei festen $x$, $y$ sei $\mathfrak{M}$ die Menge der $z$, für die die Behauptung gilt.

I)

$$
x(y + 1) = xy' = xy + x = xy + x \cdot 1;
$$

1 gehört zu $\mathfrak{M}$.

II) Wenn $z$ zu $\mathfrak{M}$ gehört, ist

$$
x(y + z) = xy + xz,
$$

also

$$
\begin{aligned}
x(y + z') &= x((y + z)') = x(y + z) + x = (xy + xz) + x \\
&= xy + (xz + x) = xy + xz',
\end{aligned}
$$

also $z'$ zu $\mathfrak{M}$ gehörig.

Daher gilt die Behauptung stets.

**Satz 31** (assoziatives Gesetz der Multiplikation):

$$
(xy)z = x(yz).
$$

**Beweis:** $x$ und $y$ seien fest, $\mathfrak{M}$ die Menge der $z$, für die die Behauptung gilt.

I)

$$
(xy) \cdot 1 = xy = x(y \cdot 1);
$$

also gehört 1 zu $\mathfrak{M}$.

II) $z$ gehöre zu $\mathfrak{M}$. Dann ist

$$
(xy)z = x(yz),
$$

also unter Benutzung von Satz 30

$$
(xy)z' = (xy)z + xy = x(yz) + xy = x(yz + y) = x(yz'),
$$

also $z'$ zu $\mathfrak{M}$ gehörig.

$\mathfrak{M}$ umfaßt also alle natürlichen Zahlen.

**Satz 32:** Aus

$$
x > y \quad \text{bzw.} \quad x = y \quad \text{bzw.} \quad x < y
$$

folgt

$$
xz > yz \quad \text{bzw.} \quad xz = yz \quad \text{bzw.} \quad xz < yz.
$$

**Beweis:** 1) Aus

$$
x > y
$$

folgt

$$
x = y + u,
$$

$$
xz = (y + u)z = yz + uz > yz.
$$

2) Aus

$$
x = y
$$

folgt natürlich

$$
xz = yz.
$$

3) Aus

$$
x < y
$$

folgt

$$
y > x,
$$

also nach 1)

$$
yz > xz,
$$

$$
xz < yz.
$$

**Satz 33:** Aus

$$
xz > yz \quad \text{bzw.} \quad xz = yz \quad \text{bzw.} \quad xz < yz
$$

folgt

$$
x > y \quad \text{bzw.} \quad x = y \quad \text{bzw.} \quad x < y.
$$

**Beweis:** Folgt aus Satz 32, da die drei Fälle beide Male sich ausschließen und alle Möglichkeiten erschöpfen.

**Satz 34:** Aus

$$
x > y, \quad z > u
$$

folgt

$$
xz > yu.
$$

**Beweis:** Nach Satz 32 ist

$$
xz > yz
$$

und

$$
yz = zy > uy = yu,
$$

also

$$
xz > yu.
$$

**Satz 35:** Aus

$$
x \geqq y, \; z > u \quad \text{oder} \quad x > y, \; z \geqq u
$$

folgt

$$
xz > yu.
$$

**Beweis:** Mit dem Gleichheitszeichen in der Voraussetzung durch Satz 32, sonst durch Satz 34 erledigt.

**Satz 36:** Aus

$$
x \geqq y, \quad z \geqq u
$$

folgt

$$
xz \geqq yu.
$$

**Beweis:** Mit zwei Gleichheitszeichen in der Voraussetzung klar; sonst durch Satz 35 erledigt.
