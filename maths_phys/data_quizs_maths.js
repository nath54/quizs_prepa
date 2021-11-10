const quiz_logique = [{
        "type": "definition",
        "titre": "Formule propositionnelle",
        "hypotheses": "",
        "resultat": "Une formule propositionnelle est une formule liant des propositions élémentaires représentées par des lettres (ou variables propositionnelles), à l'aide d'un certain nombre de symboles représentant des opérations logiques.",
        "id": 0
    },
    {
        "type": "definition",
        "titre": "Formules équivalentes",
        "hypotheses": "",
        "resultat": "Deux formules $A$ et $B$ sont dites équivalentes si elles prennent la même valeur de vérité l'une et l'autre, quelle que soit la distribution de vérités données sur l'ensemble des variables propositionnelles intervenant dans ces formules. Autrement dit, elles sont vraies et fausses sous les mêmes conditions sur les variables propositionnelles.",
        "id": 1
    },
    {
        "type": "definition",
        "titre": "Tautologie",
        "hypotheses": "",
        "resultat": "Ce sont des formules toujours vraies (pour toute distribution de vérité).",
        "id": 2
    },
    {
        "type": "proposition",
        "titre": "Associativité du #ou",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "($A$ #ou $B$) #ou $C$ #equivaut $A$ #ou ($B$ #ou $C$)",
        "id": 3
    },
    {
        "type": "proposition",
        "titre": "Associativité du #et",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "($A$ #et $B$) #et $C$ #equivaut $A$ #et ($B$ #et $C$)",
        "id": 4
    },
    {
        "type": "proposition",
        "titre": "Distributivité du #ou",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "$A$ #et($B$ #ou $C$) #equivaut($A$ #et $B$) #ou ($A$ #et $C$)",
        "id": 5
    },
    {
        "type": "proposition",
        "titre": "Distributé du #et",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "$A$ #ou($B$ #et $C$) #equivaut($A$ #ou $B$) #et ($A$ #ou $C$)",
        "id": 6
    },
    {
        "type": "proposition",
        "titre": "Equivalence de l'impliquation",
        "hypotheses": "$A$ et $B$ désignent des variables propositionnelles",
        "resultat": "($A$ #implique $B$) #equivaut ($B$ #ou #non $A$)",
        "id": 7
    },
    {
        "type": "proposition",
        "titre": "Contraposée",
        "hypotheses": "$A$ et $B$ désignent des variables propositionnelles",
        "resultat": "($A$ #implique $B$) #equivaut (#non $B$ #implique #non $A$)",
        "id": 8
    }
];


const quiz_relations = [{
        "type": "definition",
        "titre": "Relation binaire",
        "hypotheses": "",
        "resultat": "Une relation binaire entre deux ensembles $E$ et $F$ est un sous-ensemble $G$ de $E$ #x$F$.",
        "id": 9
    },
    {
        "type": "definition",
        "titre": "Relation fonctionnelle",
        "hypotheses": "",
        "resultat": "Une relation @R entre $E$ et $F$ est fonctionnelle si pout tout $x$ de $E$ il existe au plus un $y$ de $F$ tel que $x$@R$y$.",
        "id": 10
    },
    {
        "type": "definition",
        "titre": "Relation applicationnelle",
        "hypotheses": "",
        "resultat": "Une relation @R entre $E$ et $F$ est applicationnelle si pout tout $x$ de $E$ il existe un et un seul $y$ de $F$ tel que $x$@R$y$.",
        "id": 11
    },
    {
        "type": "definition",
        "titre": "Reflexivité",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est réflexive si pour tout $x$ #dans $E$, $x$@R$x$.",
        "id": 12
    },
    {
        "type": "definition",
        "titre": "Irréflexivité",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est irréflexive si pour tout $x$ #dans $E$, on a #non ($x$@R$x$).",
        "id": 13
    },
    {
        "type": "definition",
        "titre": "Symétrie",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est symétrique si pour tout ($x$, $y$) #dans $E^2$, ($x$@R$y$) #implique ($y$@R$x$).",
        "id": 14
    },
    {
        "type": "definition",
        "titre": "Antisymétrie",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est antisymétrique si pour tout ($x$, $y$) #dans $E^2$, ($x$@R$y$) #et ($y$@R$x$) #implique $x=y$.",
        "id": 15
    },
    {
        "type": "definition",
        "titre": "Asymétrie",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est asymétrique si pour tout ($x$, $y$) #dans $E^2$, ($x$@R$y$) #implique #non ($y$@R$x$).",
        "id": 16
    },
    {
        "type": "definition",
        "titre": "Transitivité",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est transitive si pour tout ($x$, $y$, $z$) #dans $E^3$, ($x$@R$y$) #et ($y$@R$z$) #implique $x$@R$z$.",
        "id": 17
    },
    {
        "type": "definition",
        "titre": "Relation d'équivalence",
        "hypotheses": "",
        "resultat": "Une relation d'équivalence sur $E$ est une relation réflexive, symétrique et transitive.",
        "id": 18
    },
    {
        "type": "definition",
        "titre": "Classe d'équivalence",
        "hypotheses": "Soit @R une relation d'équivalence sur $E$, et $x$ #dans $E$.",
        "resultat": "La classe d'équivalence de $x$ sous la relation @R est le sous ensemble $C_x$ de $E$ constitué des éléments en relation avec $x$ : $C_x = \\{x$ #dans $E | x$@R$y\\}$.",
        "id": 19
    },
    {
        "type": "lemme",
        "titre": "Classe d'équivalence",
        "hypotheses": "",
        "resultat": "Si y et x sont dans une même classe d'équivalence, alors $y$@R$x$.",
        "id": 20
    },
    {
        "type": "theoreme",
        "titre": "Partition formée par les classes d'équivalence",
        "hypotheses": "Soit $E$ un ensemble, et @R une relation d'équivalence sur $E$",
        "resultat": "L'ensemble des classes d'équivalence sous @R forme une partition de $E$.",
        "id": 21
    },
    {
        "type": "definition",
        "titre": "Ensemble quotient",
        "hypotheses": "",
        "resultat": "L'ensemble des classes sous la relation @R s'appelle l'ensemble quotient de $E$ par @R, et est noté $E$/@R. C'est un sous-ensemble de #P($E$).",
        "id": 22
    },
    {
        "type": "definition",
        "titre": "Projection canonique",
        "hypotheses": "",
        "resultat": "On appelle projection canonique de $E$ sur $E/$@R l'application #pi@R qui à $x$ associe sa classe $#barre{x}$. Par définition, #pi@R est surjective, et vérifie : #pour_tout ($x$, $y$) #dans $E^2$, $x$@R$y$#equivalent#pi@R$(x)$$=$#pi@R$(y)$.",
        "id": 23
    },
    {
        "type": "theoreme",
        "titre": "Factorisation d'une application constante sur les classes d'équivalence",
        "hypotheses": "Soit $f: E$ #fleche_droite $F$. Alors les deux propriétés suivantes sont équivalentes.",
        "resultat": "($i$) Pour tout ($x$, $y$) #dans $E^2$, $x$@R$y$ #implique $f(x) = f(y)$\n\
            ($ii$) Il existe $g: E/$@R #fleche_droite $F$ tel que $f = g$ #rond #pi@R",
        "id": 24
    },
    {
        "type": "definition",
        "titre": "Congruence",
        "hypotheses": "Soit $E$ un ensemble, muni d'un certain nombre d'opération #x$_1$, #x$_2$, ..., #x$_n$.",
        "resultat": "On dit qu'une relation d'équivalence @R est une congruence sur $(E, $#x$_1,...,$#x$_n)$ si \n #pour_tout $(x,y,x',y')$ #dans $E^4$, #pour_tout $i$ #dans $[\\![1, n]\\!]$, $(x$@R$x')$ #et $(y$@R$y')$ #implique $(x$#x$_i y)$@R$(x'$#x$_iy')$.",
        "id": 25
    },
    {
        "type": "proposition",
        "titre": "Congruence des entiers",
        "hypotheses": "",
        "resultat": "La relation de congruence des entiers #equivaut$[n]$ est une congruence sur (#Z, $+$, #x).",
        "id": 26
    },
    {
        "type": "proposition",
        "titre": "Passage au quotient des opérations",
        "hypotheses": "Soit $(E, $#x$_1, ..., $#x$_n)$ un ensemble muni de n lois d'opérations, et @R une congruence sur $(E, $#x$_1, ..., $#x$_n)$.",
        "resultat": "Alors on peut définir sur $E$/@R des lois #x$_1$, ..., #x$_n$ telles que pour tout $i$ #dans $[\\![1, n]\\!]$ et tout $(x, y)$ #dans $E^2$",
        "id": 27
    },
    {
        "type": "corollaire",
        "titre": "Addition et multiplication de #Z/$n$#Z",
        "hypotheses": "",
        "resultat": "On peut munir #Z/$n$#Z d'une addition $+$ et d'une multiplication #x telles que :\n#pour_tout $(x, y)$ #dans #Z$^2$, $(#barre{x} + #barre{y\\ }= #barre{x + y})\\ $   et   $\\ (#barre{x} #$x #barre{y\\ }= #barre{x #$x y})$.",
        "id": 28
    },
    {
        "type": "definition",
        "titre": "relation d'ordre large",
        "hypotheses": "",
        "resultat": "Une relation d'ordre sur $E$ est une relation réflexive, antisymétrique et transitive.",
        "id": 29
    },
    {
        "type": "definition",
        "titre": "relation d'ordre stricte",
        "hypotheses": "",
        "resultat": "Une relation d'ordre sur $E$ est une relation antiréflexive et transitive.",
        "id": 30
    },
    {
        "type": "proposition",
        "titre": "Antisimétrie d'une relation d'ordre stricte",
        "hypotheses": "",
        "resultat": "Une relation d'ordre stricte est antisymétrique",
        "id": 31
    },
    {
        "type": "proposition",
        "titre": "D'une relation d'ordre large à une relation d'ordre stricte",
        "hypotheses": "",
        "resultat": "Toute relation d'ordre large #<= définit une relation d'ordre stricte par $x < y$ si et seulement si $x$ #<= $y$ et $x$ #different $y$",
        "id": 32
    },
    {
        "type": "proposition",
        "titre": "D'une relation d'ordre stricte à une relation d'ordre large",
        "hypotheses": "",
        "resultat": "Toute relation d'ordre stricte $<$ définit une relation d'ordre large #<= par $x$ #<= $y$ si et seulement si $x < y$ ou $x=y$ ",
        "id": 33
    },
    {
        "type": "definition",
        "titre": "Ordre total/partiel",
        "hypotheses": "Soit @R une relation d'ordre sur un ensemble $E$.",
        "resultat": "On dit que @R est une relation d'ordre total si pour tout $(x, y)$ #dans $E^2$, soit $x$ #<= $y$ soit $y$ #<= $x$.\nDans le cas contraire, on dit que @R est une relation d'ordre partiel.",
        "id": 34
    },
    {
        "type": "definition",
        "titre": "Restriction d'une relation d'ordre",
        "hypotheses": "Soit $E$ un ensemble muni d'une relation d'ordre @R, et $A$ un sous-ensemble de $E$.",
        "resultat": "Alors @R définition sur A, une relation d'ordre @R' par : \n #pour_tout $(x, y)$ #dans $A^2$, $x$@R$'y$ #equivalent $x$@R$y$.\nIl s'agit de la restriction à $A$ de la relation @R, ou de la relation induite par @R sur $A$.",
        "id": 35
    },
    {
        "type": "definition",
        "titre": "Minimum, maximum",
        "hypotheses": "Soit $(E,$ #<= $)$ un ensemble muni d'une relation d'ordre.",
        "resultat": "1) Un élément $m$ de $E$ est appelé plus petit élément de $E$ si : #pour_tout $m'$ #dans $E$, $m$ #<= $m'$.\n\
        2) Un élémént $M$ de $E$ est appelé plus grand élément de $E$ si : #pour_tout $m'$ #dans $E$, $M$#>=$m'$.\n\
        3) Etant donné un sous-ensemble $A$ de $E$, un élément minimum (resp maximum) de $A$ est un élément minimum (resp maximum) pour la relation d'ordre @R' induite par @R sur $A$.",
        "id": 36
    },
    {
        "type": "proposition",
        "titre": "Unicité du minimum",
        "hypotheses": "",
        "resultat": "S'il existe, le plus petit élément de E (resp de $A$ #inclus $E$) est unique. De même pour le plus grand élémént.",
        "id": 37
    },
    {
        "type": "definition",
        "titre": "Elément minimal",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble muni d'une relation d'ordre.",
        "resultat": "Un élément $m$ de $E$ est appelé élément minimal de $E$ s'il n'existe pas d'élément $x$ de $E$ tel que $x < m$.",
        "id": 38
    },
    {
        "type": "definition",
        "titre": "Elément maximal",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble muni d'une relation d'ordre.",
        "resultat": "Un élément $M$ de $E$ est appelé élément maximal de $E$ s'il n'existe pas d'élément $x$ de $E$ tel que $x > M$.",
        "id": 39
    },
    {
        "type": "proposition",
        "titre": "Existence d'un élément minimal dans un ensemble fini",
        "hypotheses": "Soit $E$ un ensemble ordonné et non vide.",
        "resultat": "Alors $E$ admet un élément minimal.",
        "id": 40
    },
    {
        "type": "definition",
        "titre": "Minorant",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble muni d'une relation d'ordre. Soit $A$ #inclus $E$.",
        "resultat": "Un minorant $m$ de $A$ est un élément $m$ #dans $E$ tel que : #pour_tout $a$  #dans $A$, $a$ #>= $m$.",
        "id": 41
    },
    {
        "type": "definition",
        "titre": "Majorant",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble muni d'une relation d'ordre. Soit $A$ #inclus $E$.",
        "resultat": "Un majorant $M$ de $A$ est un élément $M$ #dans $E$ tel que : #pour_tout $a$  #dans $A$, $a$ #<= $M$.",
        "id": 42
    },
    {
        "type": "definition",
        "titre": "Borne supérieure",
        "hypotheses": "Soit $(E,$#<=$)$, et soit $A$ #inclus $E$",
        "resultat": "La borne supérieure de $A$ est le plus petit des majorants de $A$, s'il existe.",
        "id": 43
    },
    {
        "type": "definition",
        "titre": "Borne inférieure",
        "hypotheses": "Soit $(E,$#<=$)$, et soit $A$ #inclus $E$",
        "resultat": "La borne inférieure de $A$ est le plus grand des minorants de $A$, s'il existe.",
        "id": 44
    },
    {
        "type": "proposition",
        "titre": "Maximum d'un sous-ensemble",
        "hypotheses": "Soit $(E,$#<=$)$, et $A$ #inclus $E$.",
        "resultat": "$A$ admet un maximum $M$ si et seulement si $A$ admet une borne supérieure $b$ et si $b$ #dans $A$. Dans ce cas $M=b$.",
        "id": 45
    },
    {
        "type": "proposition",
        "titre": "Minimum d'un sous-ensemble",
        "hypotheses": "Soit $(E,$#<=$)$, et $A$ #inclus $E$.",
        "resultat": "$A$ admet un minimum $m$ si et seulement si $A$ admet une borne inférieure $b$ et si $b$ #dans $A$. Dans ce cas $m=b$.",
        "id": 46
    },
    {
        "type": "definition",
        "titre": "Application croissante",
        "hypotheses": "Soit $E$ et $F$ deux ensembles, munis chacun d'une relation d'ordre #<=$_E$ et #<=$_F$ respectivement.",
        "resultat": "Une application $f: E$#fleche_droite$F$ est dite : \n\
        croissante si \n\
        #pour_tout $(x,y)$ #dans $E^2$, $x $#<=$_E y$ #implique $f(x)$#<=$_F f(y)$,\n\
        décroissante si \n\
        #pour_tout $(x,y)$ #dans $E^2$, $x $#<=$_E y$ #implique $f(x)$#>=$_F f(y)$.",
        "id": 47
    },
    {
        "type": "definition",
        "titre": "Ensemble inductif",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble ordonné.",
        "resultat": "On dit que $E$ est un ensemble inductif si pour tout sous-ensemble $F$ #inclus $E$ totalement ordonné, $F$ admet un majorant dans $E$.",
        "id": 48
    },
    {
        "type": "theoreme",
        "titre": "lemme de Zorn",
        "hypotheses": "",
        "resultat": "Tout ensemble inductif admet un élément maximal.",
        "id": 49
    },
];

const quiz_reels = [{
        "type": "proposition",
        "titre": "Axiome de récurrence",
        "hypotheses": "Soit $P$ définie sur $n \\in $#N",
        "resultat": "$(P(0) \\land (\\forall n \\in $#N$, P(n) \\implies P(n+1)))) \\implies (\\forall n \\in $#N$, P(n))$",
        "id": 50
    }, {
        "type": "theoreme",
        "titre": "propriété fondamentale de #N",
        "hypotheses": "",
        "resultat": "Tout sous-ensemble non vide et majoré de #N admet un plus grand élément",
        "id": 51
    }, {
        "type": "corollaire",
        "titre": "Corollaire  de la propriété fondamentale de #N",
        "hypotheses": "",
        "resultat": "Tout sous-ensemble non vide de #N admet un plus petit élément.",
        "id": 52
    }, {
        "type": "theoreme",
        "titre": "équivalence de la propriété fondamentale de #N",
        "hypotheses": "",
        "resultat": "La propriété fondamentale de #N est équivalente à l'axiome de récurrence.",
        "id": 53
    }, {
        "type": "proposition",
        "titre": "Propriétés de l'addition et du produit d'entiers",
        "hypotheses": "Soient $a$, $b$ et $c$ des éléments de #N",
        "resultat": "<ul> <li>$a+0=0+a=a$ ($0$ est élément neutre pour $+$)</li> <li>$a \\times 0 = 0 \\times a = 0$ ($0$ est absorbant pour $\\times$) </li> <li>$a + 1 = 1 + a$</li> <li> $a \\times 1 = 1 \\times a = a$ ($1$ est neutre pour $\\times$) </li> <li>$(a+b)+c = a + (b + c)$ ($\\times$ est associative)</li> <li>$a+b=b+a$ ($+$ est commutative)</li> <li>$a \\times (b + c) = a \\times b + a \\times c$ ($\\times$ est distributive sur $+$)</li> <li>$a \\times b = b \\times a$ ($\\times$ est commutative) </li> <li>$(a \\times b) \\times c = a \\times (b \\times c)$ ($\\times$ est associative)</li> <li>$ab = 0  \\implies a = 0 \\lor b = 0$ (intégrité de $($#N$, \\times)$)</li> <li>$a + b = 0 \\implies a = 0 \\land b = 0$ </li> <li>$a + b = a + c \\implies b = c$ (régularité pour $+$)</li> <li>Si $a \\neq 0, ab = ac \\implies b = c$ (régularité pour $\\times$)</li> </ul>",
        "id": 54
    }, {
        "type": "proposition",
        "titre": "Relation d'ordre, somme et produit",
        "hypotheses": "Soit $a$, $b$, $c$ et $d$ des entiers naturels.",
        "resultat": "<ul><li>Si $a \\leqslant c$ et $b \\leqslant d$ alors $a + b \\leqslant c + d$ avec égalité si et seulement si $a = c$ et $b = d$</li> <li>si $0 \\lt a \\leqslant c$ et $0 \\lt b \\leqslant d$ alors $ab \\leqslant cd$ avec égalité si et seulement si $a=c$ et $b=d$ </li></ul>",
        "id": 55
    }, {
        "type": "proposition",
        "titre": "#Z peut être vu comme un prolongement de #N",
        "hypotheses": "",
        "resultat": "L'application : <br />$i: $#N$ \\rightarrow $#Z <br />$\\ n \\rightarrow \\overline{(n, 0)}$ <br /> est une injection compatible avec les lois $+$ et $\\times$.",
        "id": 56
    }, {
        "type": "proposition",
        "titre": "Compatibilité de la relation d'ordre avec le produit",
        "hypotheses": "",
        "resultat": "<ol> <li>Soit $c \\in $#N$^*$. Alors, $\\forall (a,b) \\in $#Z$^2$, <br /> $a \\lt b \\iff ac \\lt bc$ et $a \\leqslant b \\iff ac \\leqslant bc$</li> <br /> <li>Soit $c \\in $#Z$^*$, <br /> $a \\lt b \\iff ac \\gt bc$ et $a \\leqslant b \\iff ac \\geqslant bc$</li> </ol>",
        "id": 57
    }, {
        "type": "definition",
        "titre": "Notation usuelle pour un rationnel",
        "hypotheses": "",
        "resultat": "La classe $\\overline{(a,b)}$ du couple $(a, b)$ est notée $\\frac{a}{b}$.",
        "id": 58
    }, {
        "type": "theoreme",
        "titre": "Définition de l'addition et du produit de rationnels",
        "hypotheses": "",
        "resultat": "Les lois définies sur #Z$\\times$#N$^*$ par $(a,b) + (c,d) = (ad+bc, bd)$ et $(a, b) \\times (c,d) = (ac, bd)$ passent au quotient, définissant sur #Q les lois pouvant être décrites avec les notations usuelles par : <br /> $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$ et $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$",
        "id": 59
    }, {
        "type": "theoreme",
        "titre": "Propriétés des lois de #Q",
        "hypotheses": "",
        "resultat": "<ul> <li>Les lois $+$ et $\\times$ sont associatives</li> <li>Les lois $+$ et $\\times$ sont commutatives</li> <li>La loi $\\times$ est distributive sur $+$</li> <li>L'élément $0=\\frac{0}{1}$ est neutre pour $+$, et tout élément $\\frac{a}{b}$ admet un opposé $\\frac{-a}{b}$</li> <li>Le rationnel $\\frac{a}{b}$ est égal = $0$ si et seulement si $a=0$</li> <li>L'élément $1=\\frac{1}{1}$ est neutre pour $\\times$, et tout élément $\\frac{a}{b}$ non nul est inversible, d'inverse $\\frac{b}{a}$</li> </ul> Ainsi que #Q est un corps.",
        "id": 60
    }, {
        "type": "remarque",
        "titre": "inclusion de #Z dans #Q",
        "hypotheses": "",
        "resultat": "Les entiers $a \\in $#Z peuvent être identifiés aux rationnels $\\frac{a}{1}$ (dans le sens où $a \\rightarrow \\frac{a}{1}$ définit une injection de #Z dans #Q). Via cette identification, on peut considérer que #Z $\\subset$ #Q.",
        "id": 61
    }, {
        "type": "definition",
        "titre": "Inégalité dans #Q",
        "hypotheses": "Soit $q = \\frac{a}{b}$ et $r=\\frac{c}{d}$ deux rationnels (avec $b$ et $d$ dans #N$^*$).",
        "resultat": "Alors le signe de l'entier relatif $ad-bc$ est indépendant de la représentation choisie (avec un dénominateur positif de $q$ et $q'$. On définit alors la relation d'ordre sur $q$ par : <br /> $q \\leqslant r \\iff ad - bc \\leqslant 0$",
        "id": 62
    }, {
        "type": "theoreme",
        "titre": "Relation $\\leqslant$ sur #Q",
        "hypotheses": "",
        "resultat": "La relation $\\leqslant$ ainsi difinie sur #Q est une relation d'ordre total.",
        "id": 63
    }, {
        "type": "definition",
        "titre": "Nombres incommensurables",
        "hypotheses": "Soit $(x, y) \\in ($#R$^*)^2$",
        "resultat": "On dit que $x$ et $y$ sont incommensurables si $\\frac{x}{y}$ est irrationnel.",
        "id": 64
    }, {
        "type": "proposition",
        "titre": "Existence de nombres irrationnels",
        "hypotheses": "",
        "resultat": "Si $n$ n'est pas un carré parfait (donc si $n$ ne s'écrit pas sous la forme $n = m^2$ pour un certain entier $m$), alors $\\sqrt(N)$ est irrationnel.",
        "id": 65
    }, {
        "type": "axiome",
        "titre": "Propriété fondamentale de #R",
        "hypotheses": "Soit $E$ un sous-ensemble non vide et majoré de #R.",
        "resultat": "Alors $E$ admet une borne supérieure dans #R.",
        "id": 66
    }, {
        "type": "theoreme",
        "titre": "Propriété fondamentale de #R, exprimée avec la borne inférieure",
        "hypotheses": "Soit $E$ un sous-ensemble non vide et minoré de #R.",
        "resultat": "Alors $E$ admet une borne inférieure dans #R.",
        "id": 67
    }, {
        "type": "propriete",
        "titre": "Relation d'ordre sur #R",
        "hypotheses": "",
        "resultat": "La relation d'ordre sur #R vérifie les 4 propriétés élémentaires suivants : <ol> <li>C'est une relation d'ordre totale</li> <li>$\\forall (x,y) \\in$#R$^2$, $x \\leqslant y \\iff y - x \\in$#R$_+$</li> <li> $\\forall (x,y) \\in ($#R$_+)^2$, $x+y \\geqslant 0$ avec égalité si et seulement si $x = y = 0$ </li> <li>$\\forall (x,y) \\in ($#R$_+)^2$, $xy \\geqslant 0$</li> </ol>",
        "id": 68
    }, {
        "type": "corollaire",
        "titre": "Règle des signes pour le produit",
        "hypotheses": "Soit $x$ et $y$ deux réels.",
        "resultat": "<ol> <li>Si $x \\leqslant 0$ alors $-x \\geqslant 0$</li> <li>Si $x \\geqslant 0$, alors $-x \\leqslant 0$</li> <li>Si $x \\geqslant 0$#et$y \\leqslant 0$ ou si $x \\leqslant 0$#et$y \\geqslant 0$, alors $xy \\leqslant 0$</li> <li>Si $x \\leqslant 0$ et $y \\leqslant 0$, alors $xy \\geqslant 0$</li> </ol>",
        "id": 69
    }, {
        "type": "proposition",
        "titre": "Manipulation élémentaires d'inégalités",
        "hypotheses": "Soient $a$, $b$ et $c$ des réels.",
        "resultat": "<ol> <li>Si $a \\leqslant b$ et $c \\leqslant d$, alors $a + c \\leqslant b + d$</li> <li>Si $a \\leqslant b$ alors $-b \\leqslant -a$ </li> <li>Si $a \\leqslant b$ et $c \\leqslant d$, alors $a-d \\leqslant b-c$</li> <li>Si $0 \\lt a \\leqslant b$ et $0 \\lt c \\leqslant d$, alors $0 \\lt ac \\leqslant bd$, avec égalité si et seulement si $a=b$ et $c=d$ </li> <li>Si $a \\geqslant 0$ et $c \\leqslant d$, alors $ac \\leqslant ad$</li> <li>Si $a \\leqslant 0$ et $c \\leqslant d$, alors $ac \\geqslant ad$</li> <li>Pour toutes les autres situations de produit d'inégalité, raisonner d'abord sur la valeur absolue, puis ajouter le signe</li> </ol>",
        "id": 70
    }, {
        "type": "methode",
        "titre": "Majorer, minorer",
        "hypotheses": "",
        "resultat": "Pour obtenir des inégalités, on peut : <ul> <li>Tout passer du même côté (si l'inégalité est donnée) et essayer de factoriser pour déterminer le signe.</li> <li>Procéder par étude de fonction, si l'inégalité est donnée : on passe tout du même côté, et on étudie le signe de la fonction obtenue, grâce à une étude de variations.</li> <li>Utiliser une propriété de convexité ou de concavité : une fonction dérivable $f$ est convexe si $f'$ est croissante (donc la pente est de plus en plus forte). Intuitivement, la convexité se traduit par le fait que les tangentes sont sous la courbe, et les cordes sont au-dessus de la courbe.</li> <li>Utiliser des inégalités classiques (en premiere lieu l'inéaglité triangulaire, l'inégalité de Cauchy-Schwarz, l'inégalité arithmético-géométrique...). L'inégalité triangulaire est à utiliser dès lors qu'on cherche à majorer la valeur absolue (ou le module) d'une somme dont on sait majorer la valeur absolue de chaque terme : il faut d'abord sortir ces termes de la valeur absolue globale et ce grâce à l'inégalité triangulaire.</li> </ul>",
        "id": 71
    }, {
        "type": "definition",
        "titre": "Valeur absolue",
        "hypotheses": "Soit $x \\in $#R",
        "resultat": "La valeur absolue de $x$, notée $|x|$, est la réel obtenu de $x$ en changeant si besoin son signe de sorte à obtenir une quantité positive : <br /> $\\left\\{ \\begin{array}{ll} x \\text{ si } x \\geqslant 0 \\\\ -x \\text{ si } x \\lt 0 \\end{array} \\right.$.",
        "id": 72
    }, {
        "type": "remarque",
        "titre": "Utilisation de la valeur absolue",
        "hypotheses": "",
        "resultat": "La valeur absolue est souvent utilisée lorsqu'on veut montrer qu'une quantité reste bornée, c'est-à-dire peut être à la fois majorée et minorée. En effet, majorer $|A|$ revient à majorer et minorer $A$, puisque $|A| \\leqslant B$ équivaut à $-B \\leqslant A \\leqslant$",
        "id": 73
    }, {
        "type": "definition",
        "titre": "Partie positive d'un réel",
        "hypotheses": "Soit $x \\in $#R",
        "resultat": "On appelle <b>partie positive</b> de $x$, et on note $x^+$ le réel défini par : <br /> $x^+ = \\max(0, x) = \\left\\{ \\begin{array}{ll} x \\text{ si } x \\geqslant 0 \\\\ 0 \\text{ si } x \\lt 0 \\end{array} \\right.$",
        "id": 74
    }, {
        "type": "definition",
        "titre": "Partie négative d'un réel",
        "hypotheses": "Soit $x \\in $#R",
        "resultat": "On appelle <b>partie négative</b> de $x$, et on note $x^-$ le réel défini par : <br /> $x^- = -\\min(0, x) = \\max(0, -x) = \\left\\{ \\begin{array}{ll} x \\text{ si } - x \\lt 0 \\\\ 0 \\text{ si } x \\geqslant 0 \\end{array} \\right.$",
        "id": 75
    }, {
        "type": "propriete",
        "titre": "Propriétés des parties positives et négatives",
        "hypotheses": "Soit $x$ un réel",
        "resultat": "Alors : <ol> <li>$x^+ \\geqslant 0$ et $x^- \\geqslant 0$ </li>  <li>$x^+ = 0$ ou $x^- = 0$</li> <li>$x = x^+ - x^-$</li> <li>$\\forall(y,z) \\in $#R$_+$, si $x=y-z$ alors $y \\geqslant x^+$ et $z \\geqslant x^-$ </li>  <li>$|x| = x^+ + x^- = max(0, x) - min(0, -x)$</li> <li>$(-x)^+ = x^-$ et $(-x)^- = x^+$</li> </ol>",
        "id": 76
    }, {
        "type": "corollaire",
        "titre": "Inégalité triangulaires",
        "hypotheses": "Soit $x$ et $y$ deux réels",
        "resultat": "Alors : <ol> <li>$(x+y)^+ \\leqslant x^+ + y^+$</li> <li>$(x+y)^- \\leqslant x^- + y^-$</li> <li>$|x+y| \\leqslant |x| + |y|$</li> </ol> <br /> Chacune de ces inégalités est une égalité si et seulement si $x$ et $y$ sont de même signe.",
        "id": 77
    }, {
        "type": "corollaire",
        "titre": "Inégalité triangulaire pour les sommes",
        "hypotheses": "Soit $(a_i)_{i \\in I}$ une famille finie de réels.",
        "resultat": "Alors $|\\sum_{i=1}^{n}x_iy_i| \\leqslant \\sum_{i=1}^{n}|x_iy_i|$",
        "id": 78
    }, {
        "type": "theoreme",
        "titre": "Inégalité de Cauchy-Schwarz numérique",
        "hypotheses": "Soient $x_1, ..., x_n, y_1, ..., y_n$ des réels.",
        "resultat": "On a alors : <br /> $|\\sum_{i=1}^{n}x_iy_i|^2 \\leqslant (\\sum_{i=1}^{n}x^2_i)(\\sum_{i=1}^{n}y^2_i)$",
        "id": 79
    }, {
        "type": "theoreme",
        "titre": "Inégalité arithmético-géométrique",
        "hypotheses": "",
        "resultat": "Pour tout $X = (x_1, ..., x_n) \\in ($#R$_+^*)^n$, <br /> $\\frac{1}{n}(x_1 + ... + x_n) \\geqslant \\sqrt[\\leftroot{10}\\uproot{10}n]{x_1 \\times ... \\times x_n}$",
        "id": 80
    }, {
        "type": "proposition",
        "titre": "Propriété d'Archimède",
        "hypotheses": "Soit $x$ et $y$ deux réels strictement positifs.",
        "resultat": "Il existe un entier $n \\in $#N tel que $x \\lt ny$",
        "id": 81
    }, {
        "type": "corollaire",
        "titre": "Propriété d'Archimède appliquée au rationnels",
        "hypotheses": "",
        "resultat": "Pour tout $x \\gt 0$ et tout $y \\gt 0$, il existe un rationnel $r$ tel que $0 \\lt rx \\lt y$.",
        "id": 82
    }, {
        "type": "theoreme",
        "titre": "Division euclidienne",
        "hypotheses": "Soit $x \\in $#R et $y \\in $#R$_+^*$",
        "resultat": "Il existe un unique entier $n$ et un unique réel $r \\in [0, y[$ tels que $x = ny +r$",
        "id": 83
    }, {
        "type": "definition",
        "titre": "Densité dans #R",
        "hypotheses": "",
        "resultat": "Un sous ensemble $E$ de #R est dense dans #R si pour tout $(x,y) \\in $#R$^2$ tel que que $x < y$, il existe $z \\in E$ tel que $x \\lt z \\lt y$",
        "id": 84
    }, {
        "type": "theoreme",
        "titre": "Densité des rationnels et des irrationnels dans #R",
        "hypotheses": "",
        "resultat": "Les ensembles #Q et #R\\#Q sont denses dans #R.",
        "id": 85
    }, {
        "type": "definition",
        "titre": "Nombres algébriques, transcendants sur #Q",
        "hypotheses": "Soit $x \\in $#R",
        "resultat": "<ul> <li>On dit que $x$ est <b>algébrique</b> sur #Q s'il existe un polynôme $P$ à coefficients dans #Q tel que $P(x) = 0$</li> <li>On dit que $x$ est transcendant sur #Q s'il n'est pas algébrique</li> </ul>",
        "id": 86
    }, {
        "type": "definition",
        "titre": "Partie entière",
        "hypotheses": "",
        "resultat": "La partie entière d'un réel $x$, notée $\\lfloor x\\rfloor$ est le quotient de la division euclidienne par $1$. Il s'agit donc de l'unique entier $n$ tel qu'il existe $r \\in [0, 1[$ tel que $x=n + r$",
        "id": 87
    }, {
        "type": "definition",
        "titre": "Partie décimale",
        "hypotheses": "",
        "resultat": "Le réel $r$ de la définition de la partie entière (reste de la division euclidienne d'un réel $x$ par $1$) est parfois notée $\\{x\\}$, lorsqu'il n'y a pas de confusion possible avec la notation ensembliste désignant le singleton dont l'unique élément est $x$.",
        "id": 88
    }, {
        "type": "proposition",
        "titre": "Caractérisation de la partie entière",
        "hypotheses": "Soit $x \\in $#R",
        "resultat": "<ol> <li>$\\lfloor x\\rfloor = \\max\\{n \\in $#Z$ | n \\leqslant x\\}$</li> <li>$\\lfloor x \\rfloor = \\min\\{n \\in $#Z$ | n \\gt x \\} - 1$</li> <li>$\\lfloor x \\rfloor$ est l'unique entier tel que $\\lfloor x \\rfloor \\leqslant x \\lt \\lfloor x \\rfloor - 1$</li>  <li>$\\lfloor x \\rfloor$ est l'unique entier tel que $x - 1 \\lt \\lfloor x \\rfloor \\leqslant x$</li> </ol>",
        "id": 89
    }, {
        "type": "definition",
        "titre": "partie entière par excès",
        "hypotheses": "",
        "resultat": "On définit parfois aussi la partie entière par excès, notée $\\lceil x \\rceil$, comme étant le plus petit entier supérieur ou égal à $x$ : <br /> $\\lceil x \\rceil = \\min\\{ n \\in $#N$ | n \\geqslant x\\}$",
        "id": 90
    }, {
        "type": "proposition",
        "titre": "Relation entre partie entière et partie entière par excès",
        "hypotheses": "Soit $x \\in $#R.",
        "resultat": "On a alors : <ol> <li>$\\lceil x \\rceil = \\left \\{ \\begin{array}{ll} \\lfloor x \\rceil + 1 \\text{ si } x \\notin $#Z$ \\\\ \\lfloor x \\rfloor \\quad \\quad \\text{si } x \\in $#Z$ \\end{array}\\right.$</li>  <li>$\\lfloor -x \\rfloor = -\\lceil x \\rceil$</li> </ol>",
        "id": 91
    }, {
        "type": "propriete",
        "titre": "Propriétés de la partie entière",
        "hypotheses": "",
        "resultat": "<ol> <li>$\\forall x,y \\in $#R$, \\lfloor x \\rfloor + \\lfloor y \\rfloor + 1 \\geq \\lfloor x + y \\rfloor \\geq \\lfloor x \\rfloor + \\lfloor y \\rfloor$</li> <li>$\\forall x,y \\in $#R$_+, \\lfloor xy \\rfloor \\geq \\lfloor x \\rfloor \\times \\lfloor y \\rfloor $</li> <li>$\\forall x \\in $#R$, \\forall n \\in $#Z$, \\lfloor x + n \\rfloor = \\lfloor x \\rfloor + n$</li></ol>",
        "id": 92
    }, {
        "type": "remarque",
        "titre": "Notation des nombres décimaux",
        "hypotheses": "",
        "resultat": "<ul> <li>Nous notons #D l'ensemble des nombres décimaux, c'est à dire des réels $x$ tels qu'il existe $n \\in $#N tel que $10^{n}x$ est entier</li> <li>Etant donné $n \\in $#N, nous notons #D$_n$ l'ensemble des nombres décimaux tels que $10^{n}x \\in $#Z. Par exemble #D$_0 = $#Z et #D$_1$ sont les décimaux s'écrivant avec au plus un chiffre après la virgule.</li></ul>",
        "id": 93
    }, {
        "type": "proposition",
        "titre": "Approximation des décimales d'un réel $x$",
        "hypotheses": "Soit $x$ un réel et $n \\in $#N$^*$",
        "resultat": "Il existe un unique élément $y$ de #D$_n$ tel que $y_n \\leq x \\lt y_n + 10^{-n}$. <br /> <ul><li>Le décimal $y_n$ est appelé valeur approchée décimal à la précision $10^{-n}$ par défaut</li> <li>Le décimal $y_n + 10^{-n}$ est appelé valeur approchée décimale à la précision $10^{-n}$ par excès.</li> </ul>",
        "id": 94
    },
    /* {
        "type": "lemme",
        "titre": "",
        "hypotheses": "",
        "resultat": "Pour tout $n \\in $#N$^*$, il existe $a_n \\in [\\![0, 9]\\!]$ tel que $y_n - y_{n-1} = \\frac{a_n}{10^n}$",
        "id": 95
    }, */
    {
        "type": "theoreme",
        "titre": "Existence du développement décimal de $x$",
        "hypotheses": "Soit $x \\in $#R",
        "resultat": "Il existe un entier relatif $y_0$ et pour tout $n \\in $#N$^*$, des entiers $a_n \\in [\\![0, 9]\\!]$ tels que <br /> $x=y_0 + \\sum_{n+1}^{+\\infty} a_n10^{-n} = y_0 + \\lim_{N \\rightarrow +\\infty} \\sum_{n=1}^{N} a_n10^{-n}$.",
        "id": 96
    }, {
        "type": "theoreme",
        "titre": "Unicité du développement décimal de $x$",
        "hypotheses": "Soit $x \\in $#R ",
        "resultat": "<ol><li>Si $x$ n'est pas décimal, $x$ admet un unique développement décimal</li> <li>Si $x$ est décimal, $x$ admet exactement deux développements décimaux, l'un terminant uniquement par des $9$, l'autre terminant uniquement par des $0$</li> </ol>",
        "id": 97
    }, {
        "type": "definition",
        "titre": "Développement propre",
        "hypotheses": "",
        "resultat": "On appelle développement décimal propre de $x$ l'unique développement de $x$ si $x$ n'est pas décimal, ou l'unique développement de $x$ terminant par des $0$ si $x$ est décimal. Ainsi, tout réel admet un unique développement décimal propre.",
        "id": 98
    }, {
        "type": "definition",
        "titre": "Ensemble convexe",
        "hypotheses": "Soit $E$ un sous-ensemble de #R$^n$.",
        "resultat": "On dit que $E$ est convexe si et seulement si pour tout couple de points $A$ et $B$ de $E$, le segment $[AB]$ est entièrement inclus dans $E$.",
        "id": 99
    }, {
        "type": "definition",
        "titre": "Intervalle",
        "hypotheses": "",
        "resultat": "Un intervalle $I$ est un sous-ensemble convexe $I$ de #R, c'est-à-dire tel que : <br /> $\\forall (a,b) \\in I^2, \\forall x \\in $#R$, a \\leqslant x \\leqslant b \\implies x \\in I$",
        "id": 100
    }, {
        "type": "theoreme",
        "titre": "Inventaire des intervalles réels",
        "hypotheses": "",
        "resultat": "Tout intervalle $I$ de #R est d'une des formes suivantes, pour certaines valeurs réelles $a$ et $b$ : <ul> <li>$[a, b] = \\{x \\in $#R$, a \\leqslant x \\leqslant b \\}, a \\leqslant b$</li> <li>$]a, b[ = \\{x \\in $#R$, a \\lt x \\lt b \\}, a \\lt b$</li>  <li>$[a, b[ = \\{x \\in $#R$, a \\leqslant x \\lt b \\}, a \\lt b$</li> <li>$]a, b] = \\{x \\in $#R$, a \\lt x \\leqslantt b \\}, a \\lt b$</li> <li>$[a, +\\infty[ = \\{x \\in $#R$, x \\geqslant a \\}$</li> <li>$]a, +\\infty[ = \\{x \\in $#R$, x \\gt a \\}$</li> <li>$]-\\infty, b] = \\{x \\in $#R$, x \\leqslant b \\}$</li> <li>$]-\\infty, b[ = \\{x \\in $#R$, x \\lt b \\}$</li> <li>$]-\\infty, +\\infty = $#R</li> <li>$\\emptyset$</li> </ul>",
        "id": 101
    }, {
        "type": "definition",
        "titre": "Intervalles ouverts, fermés, semi-ouverts",
        "hypotheses": "",
        "resultat": "<ul> <li>On dit qu'un intervalle est ouvert s'il est de la forme $]a, b[, ]a, +\\infty[, ]-\\infty, b[, $#R ou $\\emptyset$</li> <li>On dit qu'un intervalle est fermé s'il est de la forme $[a, b], [a, +\\infty[, ]-\\infty, b]$ ou $\\emptyset$</li> <li>On dit qu'un intervalle est semi-ouvert s'il est de la forme $[a, b[$ ou $]a, b]$</li> </ul>",
        "id": 102
    }, {
        "type": "definition",
        "titre": "Boule dans #R$^n$",
        "hypotheses": "Soit $x \\in $#R$^n$ et $r \\in $#R$_+$.",
        "resultat": "<ol> <li>La boule ouverte de centre $x$ et de rayon $r$ est : $B(x, r) = \\{y \\in $#R$^n | d(y,x) \\lt r\\}$</li> <li>La boule fermée de centre $x$ et de rayon $r$ est : $\\overline{B}(x, r) = \\{ y \\in $#R$^n | d(y,x) \\leqslant r \\}$</li> </ol>",
        "id": 103
    }, {
        "type": "remarque",
        "titre": "Lien entre majoration de valeur absolue et appartenance à une boule",
        "hypotheses": "",
        "resultat": "Il est important de retenir qu'une majoration de certaines valeurs absolues se traduit par l'appartenance à une boule : <ul> <li>une majoration du type $|x - a| \\leqslant r$ traduit l'appartenance de $x$ à la boule fermée $\\overline{B}(a, r)$ de centre $a$ et de rayon $r$, donc à l'intervalle $[a-r,a+r]$</li> <li>une majoration du type $|x - a| \\lt r$ traduit l'appartenance de $x$ à la boule ouverte $B(a, r)$ de centre $a$ et de rayon $r$, donc à l'intervalle $]a-r,a+r[$</li> </ul>",
        "id": 104
    }, {
        "type": "definition",
        "titre": "Voisinage",
        "hypotheses": "Soit $x \\in $#R$^n$.",
        "resultat": "Un <b>voisinage</b> $V$ de $x$ est un sous-ensemble $V$ de #R$^n$ tel qu'il existe une boule ouverte centrée en $x$ entièrement contenue dans $V$ : $\\exists \\varepsilon \\gt 0, B(x,\\varepsilon) \\subset V$, i.e. $\\exists \\varepsilon \\gt 0, \\forall y \\in E, d(y,x) \\lt \\varepsilon \\implies y \\in V$",
        "id": 105
    }, {
        "type": "definition",
        "titre": "Sous-ensemble ouvert",
        "hypotheses": "",
        "resultat": "<ul> <li>Un <b>ouvert</b> de $U$ de #R$^n$ est un sous-ensemble $U$ de #R$^n$ qui est voisinage de tous ses points</li> <li>De manière équivalente, $U \\subset $#R$^n$ est ouvesrt si et seulement si : <br /> $\\forall x \\in U, \\exists \\varepsilon \\gt 0, B(x, \\varepsilon) \\subset U$ </li> </ul>",
        "id": 106
    }, {
        "type": "definition",
        "titre": "Sous-ensemble fermé",
        "hypotheses": "",
        "resultat": "Un sous-ensemble $F$ de #R$^n$ est <b>fermé</b> si son complémentaire $C_E F$ est <b>ouvert</b>",
        "id": 107
    }, {
        "type": "proposition",
        "titre": "Union/intersections d'ouverts et de fermés",
        "hypotheses": "",
        "resultat": "<ol> <li>Toute union quelconque d'ouverts est un ouvert</li> <li>Toute intersection d'un nombre fini d'ouverts est un ouvert</li> <li>Toute intersection quelconque de fermés est un fermé</li> <li>Toute union d'un nombre fini de fermés est un fermé</li> </ol>",
        "id": 108
    }, {
        "type": "definition",
        "titre": "Droite achevée réelle",
        "hypotheses": "",
        "resultat": "La droite achevée réelle, notée $\\overline{$#R$}$, est l'ensemble #R$ \\cup \\{-\\infty, + \\infty\\}$.",
        "id": 109
    }, {
        "type": "definition",
        "titre": "Relation d'ordre sur $\\overline{$#R$}$",
        "hypotheses": "",
        "resultat": "On peut prolonger l'ordre de #R en un ordre de $\\overline{$#R$}$ en posant : <br /> $\\forall x \\in \\overline{$#R$}, -\\infty \\leqslant x \\leqslant +\\infty$.",
        "id": 110
    }, {
        "type": "definition",
        "titre": "Règles calculatoires dans $\\overline{$#R$}$",
        "hypotheses": "",
        "resultat": "On peut prolonger partiellement les opérations de #R sur $\\overline{$#R$}$, en posant : <ul> <li>$-(+\\infty) = - \\infty$</li> <li>$\\forall x \\in \\overline{$#R$}\\text{\\ }\\{-\\infty\\}, x + (+\\infty) = +\\infty$</li> <li>$\\forall x \\in \\overline{$#R$}\\text{\\ }\\{+\\infty\\}, x + (-\\infty) = -\\infty$</li> <li>$\\frac{1}{+\\infty} = \\frac{1}{-\\infty} = 0$</li> <li>$\\forall x \\in \\overline{$#R$}_+^*, x \\times (+\\infty) = +\\infty, x \\times (-\\infty) = -\\infty$</li> <li>$\\forall x \\in \\overline{$#R$}_-^*, x \\times (+\\infty) = -\\infty, x \\times (-\\infty) = +\\infty$</li> </ul>",
        "id": 111
    }, {
        "type": "definition",
        "titre": "Formes indéterminées dans $\\overline{$#R$}$",
        "hypotheses": "",
        "resultat": "Les opérations suivantes ne sont pas définies, et définissent les formes indéterminées de la somme et du produit dans $\\overline{$#R$}$ : <ul> <li>$-\\infty + (+\\infty)$</li> <li>$0 \\times (+\\infty)$</li> <li>$0 \\times (-\\infty)$</li> </ul>",
        "id": 112
    }, {
        "type": "proposition",
        "titre": "Bornes supérieures dans $\\overline{$#R$}$",
        "hypotheses": "",
        "resultat": "Tous sous-ensemble $E$ de $\\overline{$#R$}$ admet une borne supérieure dans $\\overline{$#R$}$",
        "id": 113
    }, {
        "type": "proposition",
        "titre": "Bornes inférieures dans $\\overline{$#R$}$",
        "hypotheses": "",
        "resultat": "Tous sous-ensemble $E$ de $\\overline{$#R$}$ admet une borne inférieure dans $\\overline{$#R$}$",
        "id": 114
    }
];

const quiz_nb_complexes = [{
    "type": "definition",
    "titre": "Ensemble #C des nombres complexes",
    "hypotheses": "",
    "resultat": "L'ensemble des nombres complexes #C est l'ensemble #R$^2$, muni des opérations suivantes : <ul><li>$(a, b) + (a',b') = (a+a', b+b')$</li> <li>$(a, b) \\times (a', b') = (aa' - bb', ab' + a'b)$</li></ul>",
    "id": 115
}, {
    "type": "remarque",
    "titre": "Injection de #R dans #C",
    "hypotheses": "",
    "resultat": "L'application $\\lambda \\rightarrow (\\lambda, 0)$ étant injective, on identifie un réel $\\lambda$ au complexe $(\\lambda, 0)$. Via cette définition, on peut considérer que #R$ \\in $#C, et on vérifie facilement que la somme et le produit défini sur #C prolongent les lois de #R.",
    "id": 116
}, {
    "type": "definition",
    "titre": "definition de la forme algébrique",
    "hypotheses": "",
    "resultat": "<ul><li>On note $1 = (1,0)$ et $i = (0, 1)$</li><li>On a alors, pour tout $z = (a,b) \\in $#C, <br/> $z = a\\times 1 + b\\times i =  a+ib$<br/>C'est la forme algébrique du nombre complexe $z$.</li></ul>",
    "id": 117
}, {
    "type": "definition",
    "titre": "Parties réelle/imaginaire",
    "hypotheses": "",
    "resultat": "<ul><li>Soit $z=a+ib$, avec $a,b \\in $#R. <br/> * Le réel $a$ est appelé <b>partie réelle de $z$</b>, et est noté $\\Re(z)$<br/> * Le réel $b$ est appelé <b>partie imaginaire de $z$</b>, et est noté $\\Im(z)$</li> <li>Un nombre $z \\in $#C tel que $\\Re(z) = 0$ est appelé <b>nombre imaginaire pur</b></li> <li>Un nombre $z \\in $#C vérifie $\\Im(z) = 0$ si et seulement si $z \\in $#R</li> </ul>",
    "id": 118
}, {
    "type": "proposition",
    "titre": "Propriétés liées au produit (nb complexes)",
    "hypotheses": "",
    "resultat": "<ol><li>$i^2=-1$</li> <li>Le produit $(a+ib)(a'+ib')$ est simplement obtenu par utilisation des règles de distributivité et par la relation $i^2=-1$</li> <li>Si $z\\neq0$, alors $z$ est inversible, et, si $z=a+ib$ avec $(a,b) \\in $#R$^2$, on a l'expression de l'inverse : <br/> $z^{-1} = \\frac{a-ib}{a^2+b^2}$</li></ol>",
    "id": 119
}, {
    "type": "theoreme",
    "titre": "Structure de #C",
    "hypotheses": "",
    "resultat": "L'ensemble #C muni des opérations ci-dessus est un corps.",
    "id": 120
}, {
    "type": "definition",
    "titre": "Affixe d'un point du plan",
    "hypotheses": "Soit $A = (a,b)$ un point de #R$^2$.",
    "resultat": "L'affixe du point $A$ est le nombre complexe $z_A = a+ib$.",
    "id": 121
}, {
    "type": "theoreme",
    "titre": "Théorème d'Alembert-Gauss",
    "hypotheses": "",
    "resultat": "Tout polynôme non constant à coefficients complexes admet au moins une racine dans #C.",
    "id": 122
}, {
    "type": "definition",
    "titre": "Conjugué d'un nombre complexe",
    "hypotheses": "Soit $z = a+ib$ (avec $(a,b) \\in $#R$^2$) un nombre complexe.",
    "resultat": "Le conjugué de $z$ est le nombre complexe <br/> $\\overline{z\\ } a - ib$",
    "id": 123
}, {
    "type": "propriete",
    "titre": "Propriétés de la conjugaison dans #C",
    "hypotheses": "Soit $z$ et $z'$ deux nombres complexes.",
    "resultat": "<ol><li>$\\overline{\\overline{z\\ }} = z$ (autrement dit, la conjugaison est une involution)</li> <li>$z = \\overline{z\\ } \\iff z \\in $#R</li> <li>$z = -\\overline{z\\ } \\iff z$ imaginaire pur</li> <li>$\\Re(z) = \\frac{z + \\overline{z\\ }}{2}$ et $\\Im(z) = \\frac{z - \\overline{z\\ }}{2}$</li> <li>$\\overline{z + z'} = \\overline{z\\ } + \\overline{z'}$, $\\overline{zz'} = \\overline{z\\ }\\times\\overline{z'}$, $\\overline{z^{-1}} = \\overline{z\\ }^{-1}$, $\\overline{(\\frac{z}{z'})} = \\frac{\\overline{z\\ }}{\\overline{z'}}$</li></ol>",
    "id": 124
}, {
    "type": "definition",
    "titre": "Module d'un nombre complexe",
    "hypotheses": "Soit $(a,b) \\in $#R$^2$, et $z=a+ib$.",
    "resultat": "Le module de $z$ est le réel positif défini par <br/> $|z| = \\sqrt{a^2 + b^2}$",
    "id": 125
}, {
    "type": "propriete",
    "titre": "Propriétés du module",
    "hypotheses": "Soit $z$ et $z'$ deux nombres complexes.",
    "resultat": "<ol><li>$z = 0 \\iff |z| = 0$</li> <li>$|\\Re(z)| \\leqslant |z| \\ $   et   $\\ |\\Im(z)| \\leqslant |z|$</li> <li>$|z|^2 = z\\overline{z\\ }$</li> <li>$|zz'| = |z|\\times|z'| \\ $ et si $z' \\neq 0$, $|\\frac{z}{z'}| = \\frac{|z|}{|z'|}$</li> <li>$|z| = |\\overline{z\\ }|$</li> <li>$|z + z'| = |z| + |z'|$</li></ol>",
    "id": 126
}, {
    "type": "methode",
    "titre": "Expression algébrique du quotient",
    "hypotheses": "Soit $z_1$ et $z_2$ deux nombres complexes donnés sous forme algébrique avec $z_2 \\neq 0$.",
    "resultat": "Pour trouver la forme algébrique du quotient $\\frac{z_1}{z_2}$, multipliez le dénominateur par $\\overline{z_2}$. De la sorte, le dénominateur est maintenant un réel.",
    "id": 127
}];

const quiz_trigo = [{
    "type": "definition",
    "titre": "Cercle trigonométrique",
    "hypotheses": "",
    "resultat": "Le cercle trigonométrique (ou cercle unité) est le sous ensemble de #C, noté #U (comme \"unité\"), constitué des nombres complexes de module $1$ : <br/> #U$ = \\{z \\in $#C$, |z| = 1\\}$. <br/> Le cercle trigonométrique correspond dans l'interprétation géométrique des complexes au cercle de centre $(0, 0)$ et de rayon $1$, de #R$^2$. <br/> <img style=\"background-color:white!important;\" class=\"imgc\" src=\"res/cercle_trigo.svg\" />",
    "id": 128
}, {
    "type": "definition",
    "titre": "Fonctions trigonométriques",
    "hypotheses": "Soit $x \\in $#R.",
    "resultat": "On considère le cercle trigonométrique dans le plan euclidien canonoique. Soit $z$ le point du cercle trigonométrique tel que le rayon correspondant du cercle trigonométrique forme avec l'axe des réels un angle (orienté dans le sens direct) de $x$.<br/> On définit alors les fonctions cosinus, sinus et tangente par : <br/> $\\cos(x) = \\Re(x)$, $\\sin(x) = \\Im(z)$ et $\\tan(x) = \\frac{sin(x)}{cos(x)}$ si $cos(x)\\neq 0$",
    "id": 129
}, {
    "type": "texte",
    "titre": "Fonctions trigonométrique dans un triangle rectangle",
    "hypotheses": "Soit $\\alpha$ un angle dans $]0, \\frac{\\pi}{2}[$.",
    "resultat": "Si $ABC$ est un triangle rectangle en $A$, et d'angle en $B$ égal à $\\alpha$, alors <br/> $\\sin(x) = \\frac{\\text{côté opposé}}{\\text{hypoténuse}}$, $\\cos(x) = \\frac{\\text{côté adjacent}}{\\text{hypothénuse}}$, $\\tan(x) = \\frac{\\text{côté opposé}}{\\text{côté adjacent}}$.",
    "id": 130
}, {
    "type": "definition",
    "titre": "Cotangente",
    "hypotheses": "Soit $x \\in $#R.",
    "resultat": "La contangente est définie, pour tout $x$ tel que $\\sin(x) \\neq 0$, par : <br/> $\\text{cotan}(x) = \\frac{\\cos(x)}{\\sin(x)}.$",
    "id": 131
}, {
    "type": "proposition",
    "titre": "Domaines de définition des fonctions trigonométriques",
    "hypotheses": "",
    "resultat": "<ol><li>Les fonctions sin et cos sont définies sur #R</li> <li>La fonction tan est définie sur #R$\\backslash \\{\\frac{\\pi}{2} + n\\pi, n \\in $#Z$\\}$</li> <li>La fonction cotan est définie sur #R$\\backslash \\{n\\pi, n \\in $#Z$\\}$.</li></ol>",
    "id": 132
}, {
    "type": "proposition",
    "titre": "Périodicité de sin et cos",
    "hypotheses": "",
    "resultat": "sin et cos sont $2\\pi$-périodiques",
    "id": 133
}, {
    "type": "proposition",
    "titre": "Parité de sin et cos",
    "hypotheses": "",
    "resultat": "sin est impaire et cos est paire",
    "id": 134
}, {
    "type": "proposition",
    "titre": "$\\cos(\\pi+x)$",
    "hypotheses": "",
    "resultat": "$\\cos(\\pi+x) = -\\cos(x)$",
    "id": 135
}, {
    "type": "proposition",
    "titre": "$\\sin(\\pi+x)$",
    "hypotheses": "",
    "resultat": "$\\sin(\\pi+x) = -\\sin(x)$",
    "id": 136
}, {
    "type": "proposition",
    "titre": "$\\cos(\\pi-x)$",
    "hypotheses": "",
    "resultat": "$\\cos(\\pi-x) = -\\cos(x)$",
    "id": 137
}, {
    "type": "proposition",
    "titre": "$\\sin(\\pi-x)$",
    "hypotheses": "",
    "resultat": "$\\sin(\\pi-x) = \\sin(x)$",
    "id": 138
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{2}-x)$",
    "hypotheses": "",
    "resultat": "$\\cos(\\frac{\\pi}{2}-x) = \\sin(x)$",
    "id": 139
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{2}-x)$",
    "hypotheses": "",
    "resultat": "$\\sin(\\frac{\\pi}{2}-x) = \\cos(x)$",
    "id": 140
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{2}+x)$",
    "hypotheses": "",
    "resultat": "$\\cos(\\frac{\\pi}{2}+x) = -\\sin(x)$",
    "id": 141
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{2}+x)$",
    "hypotheses": "",
    "resultat": "$\\sin(\\frac{\\pi}{2}+x) = \\cos(x)$",
    "id": 142
}, {
    "type": "proposition",
    "titre": "Périodicité de tan et cotan",
    "hypotheses": "",
    "resultat": "tan et cotan sont $\\pi$-périodiques",
    "id": 143
}, {
    "type": "proposition",
    "titre": "Parité de tan et cotan",
    "hypotheses": "",
    "resultat": "tan et cotan sont impaires",
    "id": 144
}, {
    "type": "proposition",
    "titre": "$\\sin(0)$",
    "hypotheses": "",
    "resultat": "$\\sin(0) = 0$",
    "id": 145
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{6})$",
    "hypotheses": "",
    "resultat": "$\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$",
    "id": 146
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{4})$",
    "hypotheses": "",
    "resultat": "$\\sin(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$",
    "id": 147
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{3})$",
    "hypotheses": "",
    "resultat": "$\\sin(\\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$",
    "id": 148
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{2})$",
    "hypotheses": "",
    "resultat": "$\\sin(\\frac{\\pi}{2}) = 1$",
    "id": 149
}, {
    "type": "proposition",
    "titre": "$\\cos(0)$",
    "hypotheses": "",
    "resultat": "$\\cos(0) = 1$",
    "id": 150
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{6})$",
    "hypotheses": "",
    "resultat": "$\\cos(\\frac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}$",
    "id": 151
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{4})$",
    "hypotheses": "",
    "resultat": "$\\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$",
    "id": 152
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{3})$",
    "hypotheses": "",
    "resultat": "$\\cos(\\frac{\\pi}{3}) = \\frac{1}{2}$",
    "id": 153
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{2})$",
    "hypotheses": "",
    "resultat": "$\\cos(\\frac{\\pi}{2}) = 0$",
    "id": 154
}, {
    "type": "proposition",
    "titre": "$\\tan(0)$",
    "hypotheses": "",
    "resultat": "$\\tan(0) = 0$",
    "id": 155
}, {
    "type": "proposition",
    "titre": "$\\tan(\\frac{\\pi}{6})$",
    "hypotheses": "",
    "resultat": "$\\tan(\\frac{\\pi}{6}) = \\frac{1}{\\sqrt{3}}$",
    "id": 156
}, {
    "type": "proposition",
    "titre": "$\\tan(\\frac{\\pi}{4})$",
    "hypotheses": "",
    "resultat": "$\\tan(\\frac{\\pi}{4}) = 1$",
    "id": 157
}, {
    "type": "proposition",
    "titre": "$\\tan(\\frac{\\pi}{3})$",
    "hypotheses": "",
    "resultat": "$\\tan(\\frac{\\pi}{3}) = \\sqrt{3}$",
    "id": 158
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(\\frac{\\pi}{6})$",
    "hypotheses": "",
    "resultat": "$\\text{cotan}(\\frac{\\pi}{6}) = \\sqrt{3}$",
    "id": 159
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(\\frac{\\pi}{4})$",
    "hypotheses": "",
    "resultat": "$\\text{cotan}(\\frac{\\pi}{4}) = 1$",
    "id": 160
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(\\frac{\\pi}{3})$",
    "hypotheses": "",
    "resultat": "$\\text{cotan}(\\frac{\\pi}{3}) = \\frac{1}{\\sqrt{3}}$",
    "id": 161
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(\\frac{\\pi}{2})$",
    "hypotheses": "",
    "resultat": "$\\text{cotan}(\\frac{\\pi}{2}) = 0$",
    "id": 162
}, {
    "type": "proposition",
    "titre": "Identité remarquable ou théorème de Pythagore",
    "hypotheses": "",
    "resultat": "Pour tout $x \\in $#R, $\\sin^2(x) + \\cos^2(x) = 1$",
    "id": 163
}, {
    "type": "proposition",
    "titre": "$\\sin(a+b)$",
    "hypotheses": "Soient $a$ et $b$ deux réels",
    "resultat": "$\\sin(a+b) = \\sin(a)\\cos(b) + \\sin(b)\\cos(a)$",
    "id": 164
}, {
    "type": "proposition",
    "titre": "$\\sin(a-b)$",
    "hypotheses": "Soient $a$ et $b$ deux réels",
    "resultat": "$\\sin(a-b) = \\sin(a)\\cos(b) - \\sin(b)\\cos(a)$",
    "id": 165
}, {
    "type": "proposition",
    "titre": "$\\cos(a+b)$",
    "hypotheses": "Soient $a$ et $b$ deux réels",
    "resultat": "$\\cos(a+b) = \\cos(a)\\cos(b) - \\sin(a)\\sin(b)$",
    "id": 166
}, {
    "type": "proposition",
    "titre": "$\\cos(a-b)$",
    "hypotheses": "Soient $a$ et $b$ deux réels",
    "resultat": "$\\cos(a-b) = \\cos(a)\\cos(b) + \\sin(a)\\sin(b)$",
    "id": 167
}, {
    "type": "proposition",
    "titre": "$\\tan(a+b)$",
    "hypotheses": "Soient $a$ et $b$ deux réels tels que $\\tan(a)$, $\\tan(b)$ et $\\tan(a+b)$ soient définis",
    "resultat": "$\\tan(a+b) = \\frac{\\tan(a)+\\tan(b)}{1-\\tan(a)\\tan(b)}$",
    "id": 168
}, {
    "type": "proposition",
    "titre": "$\\tan(a-b)$",
    "hypotheses": "Soient $a$ et $b$ deux réels tels que $\\tan(a)$, $\\tan(b)$ et $\\tan(a+b)$ soient définis",
    "resultat": "$\\tan(a-b) = \\frac{\\tan(a)-\\tan(b)}{1+\\tan(a)\\tan(b)}$",
    "id": 169
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(a+b)$",
    "hypotheses": "Soient $a$ et $b$ deux réels tels que $\\text{cotan}(a)$, $\\text{cotan}(b)$ et $\\text{cotan}(a+b)$ soient définis",
    "resultat": "$\\text{cotan}(a+b) = \\frac{\\text{cotan}(a)\\text{cotan}(b)-1}{\\text{cotan}(a)+\\text{cotan}(b)}$",
    "id": 170
}, {
    "type": "proposition",
    "titre": "$\\sin(2a)$",
    "hypotheses": "Soit $a$ un réel.",
    "resultat": "$\\sin(2a) = 2\\sin(a)\\sin(b)$",
    "id": 171
}, {
    "type": "proposition",
    "titre": "$\\cos(2a)$",
    "hypotheses": "Soit $a$ un réel.",
    "resultat": "$\\cos(2a) = \\cos^2(a) - \\sin^2(a)$<br/>$ = 1 - 2\\sin^2(a)$<br/>$ = 2\\cos^2(a) - 1$",
    "id": 172
}, {
    "type": "proposition",
    "titre": "$\\tan(2a)$",
    "hypotheses": "Soit $a$ un réel",
    "resultat": "$\\ŧan(2a) = \\frac{2\\tan(a)}{1-\\tan^2(a)}$",
    "id": 173
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(2a)$",
    "hypotheses": "Soit $a$ un réel.",
    "resultat": "$\\text{cotan}(2a) = \\frac{\\text{cotan}^2(a) - 1}{2\\text{cotan}(a)}$",
    "id": 174
}, {
    "type": "proposition",
    "titre": "$\\cos^2(a)$",
    "hypotheses": "Soit $a \\in $#R",
    "resultat": "$\\cos^2(a) = \\frac{1 + \\cos^2(2a)}{2}$",
    "id": 175
}, {
    "type": "proposition",
    "titre": "$\\sin^2(a)$",
    "hypotheses": "Soit $a \\in $#R",
    "resultat": "$\\sin^2(a) = \\frac{1 - \\cos^2(2a)}{2}$",
    "id": 176
}, {
    "type": "proposition",
    "titre": "$\\sin(a)\\sin(b)$",
    "hypotheses": "Soit $a$ et $b$ deux réel.",
    "resultat": "$\\sin(a)\\sin(b) = \\frac{1}{2}[\\cos(a-b)-\\cos(a+b)]$",
    "id": 177
}, {
    "type": "proposition",
    "titre": "$\\cos(a)\\cos(b)$",
    "hypotheses": "Soit $a$ et $b$ deux réel.",
    "resultat": "$\\cos(a)\\cos(b) = \\frac{1}{2}[\\cos(a-b)+\\cos(a+b)]$",
    "id": 178
}, {
    "type": "proposition",
    "titre": "$\\sin(a)\\cos(b)$",
    "hypotheses": "Soit $a$ et $b$ deux réel.",
    "resultat": "$\\sin(a)\\cos(b) = \\frac{1}{2}[\\sin(a+b)-\\sin(a-b)]$",
    "id": 179
}, {
    "type": "proposition",
    "titre": "$\\sin(p)+\\sin(q)$",
    "hypotheses": "Soit $p$ et $q$ deux réels.",
    "resultat": "$\\sin(p)+\\sin(q) = 2\\sin(\\frac{p+q}{2})\\cos(\\frac{p-q}{2})$",
    "id": 180
}, {
    "type": "proposition",
    "titre": "$\\sin(p)-\\sin(q)$",
    "hypotheses": "Soit $p$ et $q$ deux réels.",
    "resultat": "$\\sin(p)-\\sin(q) = 2\\cos(\\frac{p+q}{2})\\sin(\\frac{p-q}{2})$",
    "id": 181
}, {
    "type": "proposition",
    "titre": "$\\cos(p)+\\cos(q)$",
    "hypotheses": "Soit $p$ et $q$ deux réels.",
    "resultat": "$\\cos(p)+\\cos(q) = 2\\cos(\\frac{p+q}{2})\\cos(\\frac{p-q}{2})$",
    "id": 182
}, {
    "type": "proposition",
    "titre": "$\\cos(p)-\\cos(q)$",
    "hypotheses": "Soit $p$ et $q$ deux réels.",
    "resultat": "$\\cos(p)-\\cos(q) = -2\\sin(\\frac{p+q}{2})\\sin(\\frac{p-q}{2})$",
    "id": 183
}, {
    "type": "proposition",
    "titre": "$\\sin(x)$ (Formule de l'arc moitié)",
    "hypotheses": "Soit $x$ un réel tel que $t = \\tan(\\frac{x}{2})$ soit défini.",
    "resultat": "$\\sin(x) = \\frac{2t}{1+t^2}$",
    "id": 184
}, {
    "type": "proposition",
    "titre": "$\\cos(x)$ (Formule de l'arc moitié)",
    "hypotheses": "Soit $x$ un réel tel que $t = \\tan(\\frac{x}{2})$ soit défini.",
    "resultat": "$\\cos(x) = \\frac{1-t^2}{1+t^2}$",
    "id": 185
}, {
    "type": "proposition",
    "titre": "$\\tan(x)$ (Formule de l'arc moitié)",
    "hypotheses": "Soit $x$ un réel tel que $t = \\tan(\\frac{x}{2})$ soit défini.",
    "resultat": "$\\tan(x) = \\frac{2t}{1-t^2}$, si $t\\neq\\pm1$",
    "id": 186
}, {
    "type": "proposition",
    "titre": "$a\\cos(x)+b\\sin(x)$ (Formule de factorisation)",
    "hypotheses": "Soient $a$, $b$ et $c$ trois réels. $a \\neq 0$.",
    "resultat": "$a\\cos(x) + b\\sin(x) = \\frac{a}{\\cos(\\varphi)} \\cos(x - \\varphi)$, où $\\tan(\\varphi) = \\frac{b}{a}$",
    "id": 187
}];

const quiz_combi = [{
    "type": "definition",
    "titre": "Définition de la cardinalité selon Frege",
    "hypotheses": "",
    "resultat": "On dit que deux ensembles $E$ et $F$ ont le même cardinal s'il existe une bijection de $E$ à $F$. On note $\\text{Card}(E) = \\text{Card}(F)$",
    "id": 188
}, {
    "type": "definition",
    "titre": "Ensemble fini",
    "hypotheses": "Soit $E$ un ensemble.",
    "resultat": "On dit que $E$ est fini si et seulement s'il existe un entier $n$ et une surjection $f: [\\![1,n]\\!] \\rightarrow E$, où de façon équivalente s'il existe une injection $g : E \\rightarrow [\\![1,n]\\!]$.",
    "id": 189
}, {
    "type": "proposition",
    "titre": "Sous-ensemble d'un ensemble fini",
    "hypotheses": "Soit $F$ un sous ensemble de $E$.",
    "resultat": "Si $E$ est fini, alors $F$ aussi.",
    "id": 190
}, {
    "type": "lemme",
    "titre": "Bijections de $[\\![1, n]\\!]$ et $[\\![1, m]\\!]$",
    "hypotheses": "",
    "resultat": "Tout sous ensemble $F$ de $$[\\![1, n]\\!]$ peut être mis en bijection avec un ensemble $[\\![1, m]\\!]$",
    "id": 191
}, {
    "type": "lemme",
    "titre": "Egalité provenant de la bijection $[\\![1, n]\\!] \\rightarrow [\\![1, m]\\!]$",
    "hypotheses": "Soit $n$ et $m$ deux entiers.",
    "resultat": "S'il existe une bijection de $[\\![1, n]\\!]$ sur $[\\![1, m]\\!]$, alors $n = m$.",
    "id": 192
}, {
    "type": "proposition",
    "titre": "Cardinal d'un ensemble fini",
    "hypotheses": "Soit $E$ un ensemble fini.",
    "resultat": "Il existeun unique entier $n$ tel qu'il existe une bijection $f: [\\![1,n]\\!] \\rightarrow E$. L'entier $n$ est appelé cardinal de $E$, et noté $|E|$, ou Card($E$).",
    "id": 193
}, {
    "type": "proposition",
    "titre": "Cardinal d'une union disjointe",
    "hypotheses": "Soit $A$, $B$, $A_1$, ..., $A_n$ des ensembles finis.",
    "resultat": "<ol><li>Si $A \\cap B = \\emptyset\\ $, alors $|A \\sqcup B| = |A| + |B|$</li> <li>Plus généralement, si pour tout $(i, j) \\in [\\![1, n]\\!]^2$ tel que $i \\neq j$, $A_i \\cap A_j = \\emptyset\\ $, alors $|A_1 \\sqcup ... \\sqcup A_n| = |A_1| + ... + |A_n|$</li></ol>",
    "id": 194
}, {
    "type": "proposition",
    "titre": "Cardinal d'un complémentaire",
    "hypotheses": "",
    "resultat": "Si $a \\subset B$, alors $|\\text{C}_BA|$ = |B| - |A|",
    "id": 195
}, {
    "type": "corollaire",
    "titre": "Cardinal d'un sous-ensemble",
    "hypotheses": "",
    "resultat": "Si $A \\subset B$, alors $|A| \\leqslant |B|$, avec égalité si et seulement si $A=B$.",
    "id": 196
}, {
    "type": "proposition",
    "titre": "Cardinal d'une union quelconque",
    "hypotheses": "Soient $A$ et $B$ des ensembles finis.",
    "resultat": "On a : $|A \\cup B| = |A| + |B| - |A \\cap B|$",
    "id": 197
}, {
    "type": "theoreme",
    "titre": "Formule du crible de Poincaré",
    "hypotheses": "Soient $A_1, ..., A_n$ des ensembles finis.",
    "resultat": "On a : $$|A_1 \\cup ... \\cup A_n| = \\sum_{k=1}^{n}( (-1)^{k-1} \\sum_{1 \\leqslant i_{1} \\leqslant ... \\leqslant i_{k} \\leqslant n} |A_{i_1} \\cap \\ldots\\! \\cap A_{i_k}|)$$ <br/> $$ = \\sum_{I \\subset [\\![1,n]\\!], I \\neq \\emptyset\\ }((-1)^{|I|-1}|\\bigcap_{i \\in I}(A_i)|)$$",
    "id": 198
}, {
    "type": "proposition",
    "titre": "Cardinal d'un produit cartésien",
    "hypotheses": "Soient $A$, $B$, $A1,...,A_n$ des ensembles finis.",
    "resultat": "<ol><li>$|A \\times B| = |A| \\times |B|$</li> <li>Plus généralement, $|A_1 \\times ... \\times A_n| = \\Pi_{i=1}^n|A_i|$</li></ol>",
    "id": 199
}, {
    "type": "proposition",
    "titre": "Cardinal et injectivité",
    "hypotheses": "Soient $E$ et $F$ deux ensembles finis, et soit $f: E \\longrightarrow F$ une application",
    "resultat": "Si $f$ est injective, $\\text{Card}(E) \\leqslant \\text{Card}(F)$",
    "id": 200
}, {
    "type": "proposition",
    "titre": "Cardinal et surjectivité",
    "hypotheses": "Soient $E$ et $F$ deux ensembles finis, et soit $f: E \\longrightarrow F$ une application",
    "resultat": "Si $f$ est surjective, $\\text{Card}(E) \\geqslant \\text{Card}(F)$",
    "id": 201
}, {
    "type": "proposition",
    "titre": "Cardinal et bijectivité",
    "hypotheses": "Soient $E$ et $F$ deux ensembles finis, et soit $f: E \\longrightarrow F$ une application",
    "resultat": "Si $f$ est bijective, $\\text{Card}(E) = \\text{Card}(F)$",
    "id": 202
}, {
    "type": "proposition",
    "titre": "Caractérisation des bijections",
    "hypotheses": "Soient $A$ et $B$ deux ensembles finsi de même cardinal, et $f: A \\longrightarrow B$.",
    "resultat": "Les trois propriétés sont équivalentes : <ol><li>$f$ est bijective</li> <li>$f$ est injective</li> <li>$f$ est surjective</li> </ol>",
    "id": 203
}, {
    "type": "proposition",
    "titre": "Cardinal de l'ensemble des applications",
    "hypotheses": "Soient $E$ et $F$ deux ensembles finis.<br/>On rappelle qu'on note $F^E$ l'ensemble des applications de $E$ vers $F$.",
    "resultat": "$|F^E| = |E^F|$",
    "id": 204
}, {
    "type": "definition",
    "titre": "p-listes",
    "hypotheses": "",
    "resultat": "Une p-liste d'éléments de $F$ (ou p-uplet) est un élément ($x_1$, ..., $x_p$) de $F^p$.",
    "id": 205
}, {
    "type": "proposition",
    "titre": "Nombre de p-liste",
    "hypotheses": "",
    "resultat": "Le nombre de p-listes d'éléments de $F$ est $|F|^p$",
    "id": 206
}, {
    "type": "proposition",
    "titre": "Cardinal de l'ensemble des parties",
    "hypotheses": "",
    "resultat": "$|\\mathcal{P}(E)| = 2^{|E|}$",
    "id": 207
}, {
    "type": "lemme",
    "titre": "Lemme du berger",
    "hypotheses": "Soit $f: E \\longrightarrow F$ une application surjective. <br/> On suppose qu'il existe un entier $k \\in \\mathbb{N}^*$ tel que pour tout $y \\in F$, $|f^{-1}(y)| = k$ (tous les éléments de $F$ ont le même nombre $k$ d'antécédents).",
    "resultat": "$|E| = k \\times |F|$",
    "id": 208
}, {
    "type": "theoreme",
    "titre": "Dénombrement des injections",
    "hypotheses": "Soit $A$ et $B$ deux ensembles de cardinaux respectifs $p$ et $n$.",
    "resultat": "Alors si $p \\leqslant n$, le nombre d'injections de $A$ vers $B$ est $A_n^p  = \\frac{n!}{(n-p)!}$. <br/> Si $p \\gt n$, il n'existe pas d'injection de $A$ vers $B$.",
    "id": 209
}, {
    "type": "proposition",
    "titre": "Dénombrement des p-arrangements",
    "hypotheses": "Soit $F$ de cardinal $n$ et $p \\leqslant n$.",
    "resultat": "Le nombre de p-listes d'éléments distincts de $F$ (ou p-arrangements de $F$) est $A_n^p = \\frac{n!}{(n-p)!}$",
    "id": 210
}, {
    "type": "corollaire",
    "titre": "Nombre de permutations d'un ensemble",
    "hypotheses": "$\\mathfrak{S}E$ représente l'ensemble des permutations de $E$",
    "resultat": "<ol> <li>Soit $E$ un ensemble fini. Alors $|\\mathfrak{S} E| = |E|!$</li> <li>En particulier $|\\mathfrak{S}_n| = n!$</li></ol>",
    "id": 211
}, {
    "type": "definition",
    "titre": "Coefficient binomial",
    "hypotheses": "",
    "resultat": "Le coefficient binomial $\\binom{n}{k}$ est le nombre de parties à $k$ éléments de $[\\![1,n]\\!]$",
    "id": 212
}, {
    "type": "proposition",
    "titre": "Sens général du coefficient binomial",
    "hypotheses": "",
    "resultat": "Le coefficient binomial $\\binom{n}{k}$ est plus généralement le nombre de sous-ensemble de cardinal $k$ de n'importe quel ensemble $E$ de cardinal $n$.",
    "id": 213
}, {
    "type": "proposition",
    "titre": "Expression factorielle du coefficient binomial",
    "hypotheses": "",
    "resultat": "Pour $k \\in [\\![0, n]\\!]$, $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
    "id": 214
}, {
    "type": "proposition",
    "titre": "Propriétés du coefficient binomial",
    "hypotheses": "Soit $(n,k) \\in \\mathbb{Z}^2$.",
    "resultat": "<ol> <li>$\\binom{n}{k} = \\binom{n}{n-k}$ (symétrie)</li> <li>$k\\binom{n}{k} = n\\binom{n-1}{k-1}$ (formule du comité-président)</li> <li>si $(n,k) \\neq (-1, -1)$, $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$</li> </ol>",
    "id": 215
}, {
    "type": "theoreme",
    "titre": "Formule du binôme",
    "hypotheses": "",
    "resultat": "Pour $n \\in \\mathbb{N}$, $(a+b)^n = \\sum_{k=0}^n\\binom{n}{k}a^kb^{n-k}$",
    "id": 216
}, {
    "type": "methode",
    "titre": "Principe fondamental du dénombrement",
    "hypotheses": "",
    "resultat": "Pour montrer que deux ensembles ont le même cardinal, il suffit de construire une bijection entre eux. Ainsi, pour déterminer le cardinal d'un ensemble, on le met souvent en bijection avec un ensemble \"de référence\" dont on connaît le cardinal.",
    "id": 217
}, {
    "type": "methode",
    "titre": "Démonstration combinatoire d'une formule",
    "hypotheses": "",
    "resultat": "<ol><li>Trouver un modèle adapté de la formule, autrement dit un ensemble d'objets dont le dénombrement fournira un des membres de l'égalité. Pour cela, il est préférable de s'aider du membre le plus simple de l'égalité</li> <li></li> </ol>",
    "id": 218
}]

/*

    ,{
        "type": "",
        "titre": "",
        "hypotheses": "",
        "resultat": "",
        "id": 0
    }


*/


// TOUS LES QUIZS SONT DANS LA VARIABLE QUIZS

const Quizs = {
    "Logique - incomplet": quiz_logique,
    "Relations": quiz_relations,
    "Nombres réels": quiz_reels,
    "Complexes": quiz_nb_complexes,
    "Trigonométrie - incomplet": quiz_trigo,
    "Combinatoire - incomplet": quiz_combi
};