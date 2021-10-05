const quiz_logique = [{
        "type": "definition",
        "titre": "Formule propositionnelle",
        "hypotheses": "",
        "resultat": "Une formule propositionnelle est une formule liant des propositions élémentaires représentées par des lettres (ou variables propositionnelles), à l'aide d'un certain nombre de symboles représentant des opérations logiques."
    },
    {
        "type": "definition",
        "titre": "Formules équivalentes",
        "hypotheses": "",
        "resultat": "Deux formules $A$ et $B$ sont dites équivalentes si elles prennent la même valeur de vérité l'une et l'autre, quelle que soit la distribution de vérités données sur l'ensemble des variables propositionnelles intervenant dans ces formules. Autrement dit, elles sont vraies et fausses sous les mêmes conditions sur les variables propositionnelles."
    },
    {
        "type": "definition",
        "titre": "Tautologie",
        "hypotheses": "",
        "resultat": "Ce sont des formules toujours vraies (pour toute distribution de vérité)."
    },
    {
        "type": "proposition",
        "titre": "Associativité du #ou",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "($A$ #ou $B$) #ou $C$ #equivaut $A$ #ou ($B$ #ou $C$)"
    },
    {
        "type": "proposition",
        "titre": "Associativité du #et",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "($A$ #et $B$) #et $C$ #equivaut $A$ #et ($B$ #et $C$)"
    },
    {
        "type": "proposition",
        "titre": "Distributivité du #ou",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "$A$ #et($B$ #ou $C$) #equivaut($A$ #et $B$) #ou ($A$ #et $C$)"
    },
    {
        "type": "proposition",
        "titre": "Distributé du #et",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "$A$ #ou($B$ #et $C$) #equivaut($A$ #ou $B$) #et ($A$ #ou $C$)"
    },
    {
        "type": "proposition",
        "titre": "Equivalence de l'impliquation",
        "hypotheses": "$A$ et $B$ désignent des variables propositionnelles",
        "resultat": "($A$ #implique $B$) #equivaut ($B$ #ou #non $A$)"
    },
    {
        "type": "proposition",
        "titre": "Contraposée",
        "hypotheses": "$A$ et $B$ désignent des variables propositionnelles",
        "resultat": "($A$ #implique $B$) #equivaut (#non $B$ #implique #non $A$)"
    }
];

const quiz_relations = [{
        "type": "definition",
        "titre": "Relation binaire",
        "hypotheses": "",
        "resultat": "Une relation binaire entre deux ensembles $E$ et $F$ est un sous-ensemble $G$ de $E$ #x$F$."
    },
    {
        "type": "definition",
        "titre": "Relation fonctionnelle",
        "hypotheses": "",
        "resultat": "Une relation @R entre $E$ et $F$ est fonctionnelle si pout tout $x$ de $E$ il existe au plus un $y$ de $F$ tel que $x$@R$y$."
    },
    {
        "type": "definition",
        "titre": "Relation applicationnelle",
        "hypotheses": "",
        "resultat": "Une relation @R entre $E$ et $F$ est applicationnelle si pout tout $x$ de $E$ il existe un et un seul $y$ de $F$ tel que $x$@R$y$."
    },
    {
        "type": "definition",
        "titre": "Reflexivité",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est réflexive si pour tout $x$ #dans $E$, $x$@R$x$."
    },
    {
        "type": "definition",
        "titre": "Irréflexivité",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est irréflexive si pour tout $x$ #dans $E$, on a #non ($x$@R$x$)."
    },
    {
        "type": "definition",
        "titre": "Symétrie",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est symétrique si pour tout ($x$, $y$) #dans $E^2$, ($x$@R$y$) #implique ($y$@R$x$)."
    },
    {
        "type": "definition",
        "titre": "Antisymétrie",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est antisymétrique si pour tout ($x$, $y$) #dans $E^2$, ($x$@R$y$) #et ($y$@R$x$) #implique $x=y$."
    },
    {
        "type": "definition",
        "titre": "Asymétrie",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est asymétrique si pour tout ($x$, $y$) #dans $E^2$, ($x$@R$y$) #implique #non ($y$@R$x$)."
    },
    {
        "type": "definition",
        "titre": "Transitivité",
        "hypotheses": "Soit @R une relation sur $E$.",
        "resultat": "On dit que @R est transitive si pour tout ($x$, $y$, $z$) #dans $E^3$, ($x$@R$y$) #et ($y$@R$z$) #implique $x$@R$z$."
    },
    {
        "type": "definition",
        "titre": "Relation d'équivalence",
        "hypotheses": "",
        "resultat": "Une relation d'équivalence sur $E$ est une relation réflexive, symétrique et transitive."
    },
    {
        "type": "definition",
        "titre": "Classe d'équivalence",
        "hypotheses": "Soit @R une relation d'équivalence sur $E$, et $x$ #dans $E$.",
        "resultat": "La classe d'équivalence de $x$ sous la relation @R est le sous ensemble $C_x$ de $E$ constitué des éléments en relation avec $x$ : $C_x = \\{x$ #dans $E | x$@R$y\\}$."
    },
    {
        "type": "lemme",
        "titre": "Classe d'équivalence",
        "hypotheses": "",
        "resultat": "Si y et x sont dans une même classe d'équivalence, alors $y$@R$x$."
    },
    {
        "type": "theoreme",
        "titre": "Partition formée par les classes d'équivalence",
        "hypotheses": "Soit $E$ un ensemble, et @R une relation d'équivalence sur $E$",
        "resultat": "L'ensemble des classes d'équivalence sous @R forme une partition de $E$."
    },
    {
        "type": "definition",
        "titre": "Ensemble quotient",
        "hypotheses": "",
        "resultat": "L'ensemble des classes sous la relation @R s'appelle l'ensemble quotient de $E$ par @R, et est noté $E$/@R. C'est un sous-ensemble de #P($E$)."
    },
    {
        "type": "definition",
        "titre": "Projection canonique",
        "hypotheses": "",
        "resultat": "On appelle projection canonique de $E$ sur $E/$@R l'application #pi@R qui à $x$ associe sa classe $#barre{x}$. Par définition, #pi@R est surjective, et vérifie : #pour_tout ($x$, $y$) #dans $E^2$, $x$@R$y$#equivalent#pi@R$(x)$$=$#pi@R$(y)$."
    },
    {
        "type": "theoreme",
        "titre": "Factorisation d'une application constante sur les classes d'équivalence",
        "hypotheses": "Soit $f: E$ #fleche_droite $F$. Alors les deux propriétés suivantes sont équivalentes.",
        "resultat": "($i$) Pour tout ($x$, $y$) #dans $E^2$, $x$@R$y$ #implique $f(x) = f(y)$\n\
            ($ii$) Il existe $g: E/$@R #fleche_droite $F$ tel que $f = g$ #rond #pi@R"
    },
    {
        "type": "definition",
        "titre": "Congruence",
        "hypotheses": "Soit $E$ un ensemble, muni d'un certain nombre d'opération #x$_1$, #x$_2$, ..., #x$_n$.",
        "resultat": "On dit qu'une relation d'équivalence @R est une congruence sur $(E, $#x$_1,...,$#x$_n)$ si \n #pour_tout $(x,y,x',y')$ #dans $E^4$, #pour_tout $i$ #dans $[[1, n]]$, $(x$@R$x')$ #et $(y$@R$y')$ #implique $(x$#x$_i y)$@R$(x'$#x$_iy')$."
    },
    {
        "type": "proposition",
        "titre": "Congruence des entiers",
        "hypotheses": "",
        "resultat": "La relation de congruence des entiers #equivaut$[n]$ est une congruence sur (#Z, $+$, #x)."
    },
    {
        "type": "proposition",
        "titre": "Passage au quotient des opérations",
        "hypotheses": "Soit $(E, $#x$_1, ..., $#x$_n)$ un ensemble muni de n lois d'opérations, et @R une congruence sur $(E, $#x$_1, ..., $#x$_n)$.",
        "resultat": "Alors on peut définir sur $E$/@R des lois #x$_1$, ..., #x$_n$ telles que pour tout $i$ #dans $[[1, n]]$ et tout $(x, y)$ #dans $E^2$"
    },
    {
        "type": "corollaire",
        "titre": "Addition et multiplication de #Z/$n$#Z",
        "hypotheses": "",
        "resultat": "On peut munir #Z/$n$#Z d'une addition $+$ et d'une multiplication #x telles que :\n#pour_tout $(x, y)$ #dans #Z$^2$, $(#barre{x} + #barre{y\\ }= #barre{x + y})\\ $   et   $\\ (#barre{x} #$x #barre{y\\ }= #barre{x #$x y})$."
    },
    {
        "type": "definition",
        "titre": "relation d'ordre large",
        "hypotheses": "",
        "resultat": "Une relation d'ordre sur $E$ est une relation réflexive, antisymétrique et transitive."
    },
    {
        "type": "definition",
        "titre": "relation d'ordre stricte",
        "hypotheses": "",
        "resultat": "Une relation d'ordre sur $E$ est une relation antiréflexive et transitive."
    },
    {
        "type": "proposition",
        "titre": "Antisimétrie d'une relation d'ordre stricte",
        "hypotheses": "",
        "resultat": "Une relation d'ordre stricte est antisymétrique"
    },
    {
        "type": "proposition",
        "titre": "D'une relation d'ordre large à une relation d'ordre stricte",
        "hypotheses": "",
        "resultat": "Toute relation d'ordre large #<= définit une relation d'ordre stricte par $x < y$ si et seulement si $x$ #<= $y$ et $x$ #different $y$"
    },
    {
        "type": "proposition",
        "titre": "D'une relation d'ordre stricte à une relation d'ordre large",
        "hypotheses": "",
        "resultat": "Toute relation d'ordre stricte $<$ définit une relation d'ordre large #<= par $x$ #<= $y$ si et seulement si $x < y$ ou $x=y$ "
    },
    {
        "type": "definition",
        "titre": "Ordre total/partiel",
        "hypotheses": "Soit @R une relation d'ordre sur un ensemble $E$.",
        "resultat": "On dit que @R est une relation d'ordre total si pour tout $(x, y)$ #dans $E^2$, soit $x$ #<= $y$ soit $y$ #<= $x$.\nDans le cas contraire, on dit que @R est une relation d'ordre partiel."
    },
    {
        "type": "definition",
        "titre": "Restriction d'une relation d'ordre",
        "hypotheses": "Soit $E$ un ensemble muni d'une relation d'ordre @R, et $A$ un sous-ensemble de $E$.",
        "resultat": "Alors @R définition sur A, une relation d'ordre @R' par : \n #pour_tout $(x, y)$ #dans $A^2$, $x$@R$'y$ #equivalent $x$@R$y$.\nIl s'agit de la restriction à $A$ de la relation @R, ou de la relation induite par @R sur $A$."
    },
    {
        "type": "definition",
        "titre": "Minimum, maximum",
        "hypotheses": "Soit $(E,$ #<= $)$ un ensemble muni d'une relation d'ordre.",
        "resultat": "1) Un élément $m$ de $E$ est appelé plus petit élément de $E$ si : #pour_tout $m'$ #dans $E$, $m$ #<= $m'$.\n\
        2) Un élémént $M$ de $E$ est appelé plus grand élément de $E$ si : #pour_tout $m'$ #dans $E$, $M$#>=$m'$.\n\
        3) Etant donné un sous-ensemble $A$ de $E$, un élément minimum (resp maximum) de $A$ est un élément minimum (resp maximum) pour la relation d'ordre @R' induite par @R sur $A$."
    },
    {
        "type": "proposition",
        "titre": "Unicité du minimum",
        "hypotheses": "",
        "resultat": "S'il existe, le plus petit élément de E (resp de $A$ #inclus $E$) est unique. De même pour le plus grand élémént."
    },
    {
        "type": "definition",
        "titre": "Elément minimal",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble muni d'une relation d'ordre.",
        "resultat": "Un élément $m$ de $E$ est appelé élément minimal de $E$ s'il n'existe pas d'élément $x$ de $E$ tel que $x < m$."
    },
    {
        "type": "definition",
        "titre": "Elément maximal",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble muni d'une relation d'ordre.",
        "resultat": "Un élément $M$ de $E$ est appelé élément maximal de $E$ s'il n'existe pas d'élément $x$ de $E$ tel que $x > M$."
    },
    {
        "type": "proposition",
        "titre": "Existence d'un élément minimal dans un ensemble fini",
        "hypotheses": "Soit $E$ un ensemble ordonné et non vide.",
        "resultat": "Alors $E$ admet un élément minimal."
    },
    {
        "type": "definition",
        "titre": "Minorant",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble muni d'une relation d'ordre. Soit $A$ #inclus $E$.",
        "resultat": "Un minorant $m$ de $A$ est un élément $m$ #dans $E$ tel que : #pour_tout $a$  #dans $A$, $a$ #>= $m$."
    },
    {
        "type": "definition",
        "titre": "Majorant",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble muni d'une relation d'ordre. Soit $A$ #inclus $E$.",
        "resultat": "Un majorant $M$ de $A$ est un élément $M$ #dans $E$ tel que : #pour_tout $a$  #dans $A$, $a$ #<= $M$."
    },
    {
        "type": "definition",
        "titre": "Borne supérieure",
        "hypotheses": "Soit $(E,$#<=$)$, et soit $A$ #inclus $E$",
        "resultat": "La borne supérieure de $A$ est le plus petit des majorants de $A$, s'il existe."
    },
    {
        "type": "definition",
        "titre": "Borne inférieure",
        "hypotheses": "Soit $(E,$#<=$)$, et soit $A$ #inclus $E$",
        "resultat": "La borne inférieure de $A$ est le plus grand des minorants de $A$, s'il existe."
    },
    {
        "type": "proposition",
        "titre": "Maximum d'un sous-ensemble",
        "hypotheses": "Soit $(E,$#<=$)$, et $A$ #inclus $E$.",
        "resultat": "$A$ admet un maximum $M$ si et seulement si $A$ admet une borne supérieure $b$ et si $b$ #dans $A$. Dans ce cas $M=b$."
    },
    {
        "type": "proposition",
        "titre": "Minimum d'un sous-ensemble",
        "hypotheses": "Soit $(E,$#<=$)$, et $A$ #inclus $E$.",
        "resultat": "$A$ admet un minimum $m$ si et seulement si $A$ admet une borne inférieure $b$ et si $b$ #dans $A$. Dans ce cas $m=b$."
    },
    {
        "type": "definition",
        "titre": "Application croissante",
        "hypotheses": "Soit $E$ et $F$ deux ensembles, munis chacun d'une relation d'ordre #<=$_E$ et #<=$_F$ respectivement.",
        "resultat": "Une application $f: E$#fleche_droite$F$ est dite : \n\
        croissante si \n\
        #pour_tout $(x,y)$ #dans $E^2$, $x$#<=$_E$ #implique $f(x)$#<=$_F f(y)$,\n\
        décroissante si \n\
        #pour_tout $(x,y)$ #dans $E^2$, $x$#<=$_E$ #implique $f(x)$#>=$_F f(y)$."
    },
    {
        "type": "definition",
        "titre": "Ensemble inductif",
        "hypotheses": "Soit $(E,$#<=$)$ un ensemble ordonné.",
        "resultat": "On dit que $E$ est un ensemble inductif si pour tout sous-ensemble $F$ #inclus $E$ totalement ordonné, $F$ admet un majorant dans $E$."
    },
    {
        "type": "theoreme",
        "titre": "lemme de Zorn",
        "hypotheses": "",
        "resultat": "Tout ensemble inductif admet un élément maximal."
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
    "Logique": quiz_logique,
    "Relations": quiz_relations
};