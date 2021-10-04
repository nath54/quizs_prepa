const quiz_logique = [{
        "type": "definition",
        "titre": "Formule propositionnelle",
        "resultat": "Une formule propositionnelle est une formule liant des propositions élémentaires représentées par des lettres (ou variables propositionnelles), à l'aide d'un certain nombre de symboles représentant des opérations logiques."
    },
    {
        "type": "definition",
        "titre": "Formules équivalentes",
        "resultat": "Deux formules $A$ et $B$ sont dites équivalentes si elles prennent la même valeur de vérité l'une et l'autre, quelle que soit la distribution de vérités données sur l'ensemble des variables propositionnelles intervenant dans ces formules. Autrement dit, elles sont vraies et fausses sous les mêmes conditions sur les variables propositionnelles."
    },
    {
        "type": "definition",
        "titre": "Tautologie",
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
        "resultat": "Une relation binaire entre deux ensembles $E$ et $F$ est un sous-ensemble $G$ de $E \\times F$"
    },
    {
        "type": "definition",
        "titre": "Relation fonctionnelle",
        "resultat": "Une relation #R entre $E$ et $F$ est fonctionnelle si pout tout $x$ de $E$ il existe au plus un $y$ de $F$ tel que $x$#R$y$."
    },
    {
        "type": "definition",
        "titre": "Relation applicationnelle",
        "resultat": "Une relation #R entre $E$ et $F$ est applicationnelle si pout tout $x$ de $E$ il existe un et un seul $y$ de $F$ tel que $x$#R$y$."
    },
    {
        "type": "definition",
        "titre": "Reflexivité",
        "resultat": "Soit #R une relation sur $E$. On dit que #R est réflexive si pour tout $x$ #in $E$, $x$#R$x$"
    },
    {
        "type": "definition",
        "titre": "Irréflexivité",
        "resultat": "Soit #R une relation sur $E$. On dit que #R est irréflexive si pour tout $x$ #in $E$, on a #non ($x$#R$x$)"
    },
    {
        "type": "definition",
        "titre": "Symétrie",
        "resultat": "Soit #R une relation sur $E$. On dit que #R est symétrique si pour tout ($x$, $y$) #in $E^2$, ($x$#R$y$) #implique ($y$#R$x$)"
    },
    {
        "type": "definition",
        "titre": "Antisymétrie",
        "resultat": "Soit #R une relation sur $E$. On dit que #R est antisymétrique si pour tout ($x$, $y$) #in $E^2$, ($x$#R$y$) #et ($y$#R$x$) #implique $x=y$"
    },
    {
        "type": "definition",
        "titre": "Asymétrie",
        "resultat": "Soit #R une relation sur $E$. On dit que #R est asymétrique si pour tout ($x$, $y$) #in $E^2$, ($x$#R$y$) #implique #non ($y$#R$x$)"
    },
    {
        "type": "definition",
        "titre": "Transitivité",
        "resultat": "Soit #R une relation sur $E$. On dit que #R est transitive si pour tout ($x$, $y$, $z$) #in $E^3$, ($x$#R$y$) #et ($y$#R$z$) #implique $x$#R$z$"
    },
    {
        "type": "definition",
        "titre": "Relation d'équivalence",
        "resultat": "Une relation d'équivalence sur $E$ est une relation réflexive, symétrique et transitive."
    },
    {
        "type": "definition",
        "titre": "Classe d'équivalence",
        "resultat": "Soit #R une relation d'équivalence sur $E$, et $x$ #appartient $E$. La classe d'équivalence de $x$ sous la relation #R est le sous ensemble $C_x$ de $E$ constitué des éléments en relation avec $x$ : $C_x = \\{x$ #appartient $E | x$#R$y\\}$ "
    },
    {
        "type": "lemme",
        "titre": "Classe d'équivalence",
        "hypotheses": "",
        "resultat": "Si y et x sont dans une même classe d'équivalence, alors $y$#R$x$"
    }
];


// TOUS LES QUIZS SONT DANS LA VARIABLE QUIZS

const Quizs = {
    "Logique": quiz_logique,
    "Relations": quiz_relations
};