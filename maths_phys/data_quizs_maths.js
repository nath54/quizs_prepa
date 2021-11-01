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

/*

    {
        "type": "",
        "titre": "",
        "hypotheses": "",
        "resultat": ""
    },


*/


// TOUS LES QUIZS SONT DANS LA VARIABLE QUIZS

const Quizs = {
    "Logique (incomplet)": quiz_logique,
    "Relations": quiz_relations
};