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
        "resultat": "On dit qu'une relation d'équivalence @R est une congruence sur $(E, $#x$_1,...,$#x$_n)$ si \n #pour_tout $(x,y,x',y')$ #dans $E^4$, #pour_tout $i$ #dans $[[1, n]]$, $(x$@R$x')$ #et $(y$@R$y')$ #implique $(x$#x$_i y)$@R$(x'$#x$_iy')$.",
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
        "resultat": "Alors on peut définir sur $E$/@R des lois #x$_1$, ..., #x$_n$ telles que pour tout $i$ #dans $[[1, n]]$ et tout $(x, y)$ #dans $E^2$",
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
        "resultat": "Pour tout $n \\in $#N$^*$, il existe $a_n \\in [[0, 9]]$ tel que $y_n - y_{n-1} = \\frac{a_n}{10^n}$",
        "id": 95
    }, */
    {
        "type": "theoreme",
        "titre": "Existence du développement décimal de $x$",
        "hypotheses": "Soit $x \\in $#R",
        "resultat": "Il existe un entier relatif $y_0$ et pour tout $n \\in $#N$^*$, des entiers $a_n \\in [[0, 9]]$ tels que <br /> $x=y_0 + \\sum_{n+1}^{+\\infty} a_n10^{-n} = y_0 + \\lim_{N \\rightarrow +\\infty} \\sum_{n=1}^{N} a_n10^{-n}$.",
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
    "Nombres réels": quiz_reels
};