const quiz_logique = [{
        "type": "definition",
        "titre": "Formule propositionnelle",

        "resultat": "Une formule propositionnelle est une formule liant des propositions élémentaires représentées par des lettres (ou variables propositionnelles), à l'aide d'un certain nombre de symboles représentant des opérations logiques: <ul><li>$\\land$ : et</li><li>$\\lor$ : ou</li><li>$\\implies$ : implique</li><li>$\\iff$ : équivalent</li><li>$\\neg$ : non</li></ul>.<br/>A part $\\neg$ qui se met devant une unique proposition, les autres symboles permettent de lier 2 propositions.<br/>Un parenthésage rigoureux est nécessaire afin de rendre l'expression non ambiguë quant à l'ordre des opérations à effectuer.",
        "id": 0
    },{
        "type": "remarque",
        "titre": "Conditions nécessaire",
        "resultat": "$P \\implies Q$ : $P$ est un condition nécessaire à $Q$",
        "id": 397
    },{
        "type": "remarque",
        "titre": "Condition suffisante",
        "resultat": "$Q \\implies P$ : $P$ est une condition suffisante à $Q$",
        "id": 398
    },{
        "type": "remarque",
        "titre": "Condition nécessaire et suffisante",
        "resultat": "$P \\iff Q$ : $P$ est une condition nécessaire et suffisante à $Q$",
        "id": 399
    },
    {
        "type": "definition",
        "titre": "Formules équivalentes",
        "resultat": "Deux formules $A$ et $B$ sont dites équivalentes si elles prennent la même valeur de vérité l'une et l'autre, quelle que soit la distribution de vérités données sur l'ensemble des variables propositionnelles intervenant dans ces formules. Autrement dit, elles sont vraies et fausses sous les mêmes conditions sur les variables propositionnelles.",
        "id": 1
    },
    {
        "type": "definition",
        "titre": "Tautologie",
        "resultat": "Ce sont des formules toujours vraies (pour toute distribution de vérité).",
        "id": 2
    },
    {
        "type": "proposition",
        "titre": "Associativité du $\\lor$",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "$(A \\lor B) \\lor C \\iff A \\lor (B \\lor C)$",
        "id": 3
    },
    {
        "type": "proposition",
        "titre": "Associativité du $\\land$",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "$(A \\land B) \\land C \\iff A \\land (B \\land C)$",
        "id": 4
    },
    {
        "type": "proposition",
        "titre": "Distributivité du $\\lor$",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "$A \\land(B \\lor C) \\iff(A \\land B) \\lor (A \\land C)$",
        "id": 5
    },
    {
        "type": "proposition",
        "titre": "Distributé du $\\land$",
        "hypotheses": "$A$, $B$ et $C$ désignent des variables propositionnelles",
        "resultat": "$A \\lor(B \\land C) \\iff(A \\lor B) \\land (A \\lor C)$",
        "id": 6
    },
    {
        "type": "proposition",
        "titre": "Equivalence de l'impliquation",
        "hypotheses": "$A$ et $B$ désignent des variables propositionnelles",
        "resultat": "$(A \\implies B) \\iff (B \\lor \\neg A)$",
        "id": 7
    },
    {
        "type": "proposition",
        "titre": "Equivalence de la contraposée",
        "hypotheses": "$A$ et $B$ désignent des variables propositionnelles",
        "resultat": "$(A \\implies B) \\iff (\\neg B \\implies \\neg A)$",
        "id": 8
    },{
        "type": "definition",
        "titre": "Quantificateur universel $\\forall$",
        "hypotheses": "Soit $F(x)$ une propriété dépendant d'une variable $x$",
        "resultat": "$\\forall x$, $F(x)$ satisfait si et seulement si pour toute valeur possible prise par $x$, $F(x)$ est vraie.",
        "id": 400
    },{
        "type": "definition",
        "titre": "Quantificateur existentiel $\\exists$",
        "hypotheses": "Soit $F(x)$ une propriété dépendant d'une variable $x$",
        "resultat": "$\\exists x$, $F(x)$ est satisfait si et seulement si il existe $x$ tel que $F(x)$ soit satisfait.<br/>Dans ce cas, même s'il n'est bien souvent pas possible d'expliciter $x$, on peut se donner un $x$ qui satisfait $F(x)$.",
        "id": 401
    },{
        "type": "remarque",
        "titre": "Ordre des quantificateurs",
        "resultat": "Attention ! En général, on ne peut pas intervertir $\\exists$ et $\\forall$ !",
        "id": 402
    },{
        "type": "propriete",
        "titre": "$\\neg\\neg P$",
        "resultat": "$\\neg\\neg P \\eq P$",
        "id": 403
    },{
        "type": "propriete",
        "titre": "Négation du ou - Loi de De Morgan",
        "resultat": "$\\neg(P \\lor Q) \\eq \\neg P \\land \\neg Q$",
        "id": 404
    },{
        "type": "propriete",
        "titre": "Négation du et - Loi de De Morgan",
        "resultat": "$\\neg(P \\land Q) \\eq \\neg P \\lor \\neg Q$",
        "id": 405
    },{
        "type": "propriete",
        "titre": "$\\neg(P \\implies Q)$",
        "resultat": "$\\neg(P \\implies Q) \\eq P \\land \\neg Q$",
        "id": 406
    },{
        "type": "propriete",
        "titre": "$\\neg(P \\iff Q)$",
        "resultat": "$\\neg(P \\iff Q)$ $\\eq$ $(P \\iff (\\neg Q))$ $\\eq$ $((\\neg P) \\iff Q)$",
        "id": 407
    },{
        "type": "propriete",
        "titre": "Négation des quantificateurs",
        "resultat": "$(i)$ $\\neg(\\forall x P)$ $\\eq$ $\\exists x (\\neg P)$ <br/> $(ii)$ $\\neg(\\exists x P)$ $\\eq$ $\\forall x (\\neg P)$",
        "id": 408
    },{
        "type": "texte",
        "titre": "Composition d'un texte mathématique",
        "resultat": "<div style=\"text-align:left\">Un texte mathématique est constitué de : <ol><li><b>définitions : </b> des descriptions de certains objets constituant les briques de la théorie. C'est à voir comme un raccourcis de langage</li> <li><b>résultats : </b> des énoncés mettant en jeu les objets définis dans la théorie, et donnant des propriétés vérifiées par ces objets. Un résultat s'énonce sous la forme $A \\implies B$. On distingue <ul> <li> les <i>axiomes</i> : des résultats qui sont des vérités de la théorie, et qu'on ne démontre pas</li> <li>les <i>théorèmes</i> : les résultats les plus significatis, démontrés à partir des axiomes et de résultats démontrés antérieurement</li> <li>les <i>propositions</i> : des résultats de moindre envergure</li> <li>les <i>lemmes</i> : des résultats à voir comme des étapes vers dés résultats plus consistants (résultats préliminaires, mais pouvant avoir leurs intérêts en soi)</li> <li>les <i>corollaires</i> : des conséquences assez immédiates d'autres résultats, par exemple des cas particuliers intéressants</li></ul> </li> <li><b>démonstrations : </b> des justifications de la véracité des résultats</li> <li><b>conjectures : </b> des énoncés qu'on pense être vrais, mais qu'on a pas encore réussi à prouver</li></ol></div>",
        "id": 409
    },{
        "type": "methode",
        "titre": "Prouver une implication $A \\implies B$",
        "resultat": "On suppose que $A$ est vrai, on démontre $B$. La rédaction commence par <i>\"Supposons que $A$ soit vrai\"</i><br/>Dans certaines situations, il peut être plus simple de montrer l'implication contraposée.",
        "id": 410
    },{
        "type": "methode",
        "titre": "Prouver une équivalence $A \\iff B$",
        "resultat": "On prouve en deux temps $A \\implies B$ et $B \\implies A$.<br/>On peut aussi raisonner par équivalences successives, mais dans ce cas, raisonner d'abord dans un sens, puis vérifier scrupuleusement qu'on peut \"remonter\" toutes les implications.",
        "id": 411
    },{
        "type": "methode",
        "titre": "Prouver une conjonction $A \\land B$",
        "resultat": "On prouve en deux temps: on prouve $A$, puis on prouve $B$",
        "id": 412
    },{
        "type": "methode",
        "titre": "Prouver une disjonction $A \\lor B$",
        "resultat": "On prouve $\\neg A \\implies B$, ce qui revient à supposer que $A$ n'est pas vrai, et à en déduire que $B$ est vrai. <br/>On peut bien sur intervertir $A$ et $B$ : un bon choix dans la propriété que l'on nie peut parfois simplifier la démonstration",
        "id": 413
    },{
        "type": "methode",
        "titre": "Prouver $\\forall x A(x)$",
        "resultat": "La proposition $A$ doit être vraie pour tout choix de $x$.<br/>On pose donc un $x$ <b>supposé quelconque</b> (c'est à dire sur lequel on n'impose pas de conditions), et on se montre que pour ce $x$, $A(x)$ est vérifié.<br/>Le fait d'avoir choisi $x$ quelconque montre qu'alors $A(x)$ est vrai pour tout $x$.<br/>La démonstration débute alors systématiquement par <i>\"Soit x ...\"</i>, puis on démontre $A(x)$.",
        "id": 414
    },{
        "type": "methode",
        "titre": "Prouver $\\exists x A(x)$",
        "resultat": "Montrer une propriété existentielle est souvent ce qu'il y a de plus délicat.<br/>Dans le meilleur des cas, on construit explicitement $x$ qui convient.<br/>Pour s'aider à définir $x$ convenable, on peut faire une analyse synthèse.",
        "id": 415
    },{
        "type": "remarque",
        "titre": "Direction d'une preuve",
        "resultat": "C'est le but qui dirige une preuve ! On se fixe un cap, et on le garde. A aucun moment, il ne faut le perdre de vue.",
        "id": 416
    },{
        "type": "methode",
        "titre": "Modus Ponens",
        "resultat": "Pour que $B$ soit vrai, il suffit que $A$ soit vrai, et que $A \\implies B$.<br/>Formellement, il s'agit d'exploiter la tautologie : <br/>$(A \\land (A\\implies B) \\implies B$",
        "id": 417
    },{
        "type": "methode",
        "titre": "Demonstration par contraposée",
        "resultat": "Pour montrer $A \\implies B$, on peut adopter la démarche suivante : on suppose que la conclusion $B$ est fausse, et on montre dans ce cas, l'hypothèse $A$ ne peut pas être vraie.<br/>Cela revient à montrer <br/> $\\neg B \\implies \\neg A$",
        "id": 418
    },{
        "type": "definition",
        "titre": "Contraposée",
        "resultat": "L'expression $\\neg B \\implies \\neg A$ est la contraposée de $A \\implies B$",
        "id": 419
    },{
        "type": "methode",
        "titre": "Démonstration par l'absurde",
        "resultat": "Pour démontrer $B$, il suffit de montrer que le fait de supposer que $B$ est fausse conduit à une contradiction",
        "id": 420
    },{
        "type": "methode",
        "titre": "Disjonction de cas, ou discussion",
        "resultat": "Pour montrer $A \\lor B \\implies B$, on peut séparer en deux cas : voir ce qu'il se passe sous l'hypothèse $A$, puis sous l'hypothèse $B$. Ainsi on montre que si on suppose que $A$ est vérifié, alors $C$ aussi, et de même, si $B$ est vérifié, $C$ aussi.",
        "id": 421
    },{
        "type": "methode",
        "titre": "Analyse-synthèse",
        "resultat": "<div style=\"text-align:left\"><ul><li><b>Phase d'analyse</b> (ou recherche de CN) : On suppose dans un premier temps l'existence d'un objet tel que souhaité, et à l'aide des propriétés qu'il est censé vérifier, on obtient autant d'informations que possible sur la façon de construire un tel objet</li> <li><b>Phase de synthèse</b> (ou vérifiant CS) : lorsqu'on a suffisament d'informations sur une façon de construire l'objet recherché, on construit un objet de la sorte, de façon explicite, et on vérifie qu'il répond au problème.</ul> Bonus : si la phase d'analyse fournis une expression explicite de l'objet recherché, ne laissant pas le choix pour cet objet, cela fournis l'unicité</div>",
        "id": 422
    },{
        "type": "definition",
        "titre": "Principe de récurrence",
        "resultat": "[$\\cP(0)$ $\\land$ ($\\forall n \\in \\N$, ($\\cP(n)$ $\\implies$ $\\cP(n+1)$))] $\\implies$ ($\\forall n \\in \\N$, $\\cP(n)$)",
        "id": 423
    },{
        "type": "methode",
        "titre": "Démonstration par récurrence simple",
        "resultat": "Pour montrer une propriété $\\cP(n)$ dépendant d'un entier $n \\in \\N$, on procède suivant le schéma suivant : <ul><li><b>Initialisation : </b> monter que $\\cP(0)$ est vraie.</li> <li><b>Hérédité : </b> montrer que pour tout $n\\in \\N$, ($\\cP(n) \\implies \\cP(n+1)$, ce qui se fait en posant $n$ quelconque, (<i>\"Soit $n \\in \\N$\"</i>), en supposant que pour ce $n$, $\\cP(n)$ est vrai, et en montrant qu'alors $\\cP(n+1)$ l'est aussi</li> <li><b>Conclusion : </b> Conclure, en faisant référence au principe de récurrence</li></ul>",
        "id": 424
    }
];

const quiz_relations = [{
        "type": "definition",
        "titre": "Relation binaire",

        "resultat": "Une relation binaire entre deux ensembles $E$ et $F$ est un sous-ensemble $G$ de $E \\times F$.",
        "id": 9
    },
    {
        "type": "definition",
        "titre": "Relation fonctionnelle",

        "resultat": "Une relation $cR$ entre $E$ et $F$ est fonctionnelle si pout tout $x$ de $E$ il existe au plus un $y$ de $F$ tel que $xcRy$.",
        "id": 10
    },
    {
        "type": "definition",
        "titre": "Relation applicationnelle",

        "resultat": "Une relation $cR$ entre $E$ et $F$ est applicationnelle si pout tout $x$ de $E$ il existe un et un seul $y$ de $F$ tel que $xcRy$.",
        "id": 11
    },
    {
        "type": "definition",
        "titre": "Reflexivité",
        "hypotheses": "Soit $cR$ une relation sur $E$.",
        "resultat": "On dit que $cR$ est réflexive si pour tout $x \\in E$, $xcRx$.",
        "id": 12
    },
    {
        "type": "definition",
        "titre": "Irréflexivité",
        "hypotheses": "Soit $cR$ une relation sur $E$.",
        "resultat": "On dit que $cR$ est irréflexive si pour tout $x \\in E$, on a $\\ne  (xcRx)$.",
        "id": 13
    },
    {
        "type": "definition",
        "titre": "Symétrie",
        "hypotheses": "Soit $cR$ une relation sur $E$.",
        "resultat": "On dit que $cR$ est symétrique si pour tout $(x, y) \\in E^2$, $(xcRy) \\implies (ycRx)$.",
        "id": 14
    },
    {
        "type": "definition",
        "titre": "Antisymétrie",
        "hypotheses": "Soit $cR$ une relation sur $E$.",
        "resultat": "On dit que $cR$ est antisymétrique si pour tout $(x, y) \\in E^2$, $(xcRy) \\land (ycRx) \\implies x=y$.",
        "id": 15
    },
    {
        "type": "definition",
        "titre": "Asymétrie",
        "hypotheses": "Soit $cR$ une relation sur $E$.",
        "resultat": "On dit que $cR$ est asymétrique si pour tout $(x, y) \\in E^2$, $(xcRy) \\implies \\neq (ycRx)$.",
        "id": 16
    },
    {
        "type": "definition",
        "titre": "Transitivité",
        "hypotheses": "Soit $cR$ une relation sur $E$.",
        "resultat": "On dit que $cR$ est transitive si pour tout $(x, y, z) \\in E^3$, $(xcRy) \\land (ycRz) \\implies xcRz$.",
        "id": 17
    },
    {
        "type": "definition",
        "titre": "Relation d'équivalence",

        "resultat": "Une relation d'équivalence sur $E$ est une relation réflexive, symétrique et transitive.",
        "id": 18
    },
    {
        "type": "definition",
        "titre": "Classe d'équivalence",
        "hypotheses": "Soit $cR$ une relation d'équivalence sur $E$, et $x \\in E$.",
        "resultat": "La classe d'équivalence de $x$ sous la relation $cR$ est le sous ensemble $C_x$ de $E$ constitué des éléments en relation avec $x$ : $C_x = \\{x \\in E | xcRy\\}$.",
        "id": 19
    },
    {
        "type": "lemme",
        "titre": "Classe d'équivalence",

        "resultat": "Si y et x sont dans une même classe d'équivalence, alors $ycRx$.",
        "id": 20
    },
    {
        "type": "theoreme",
        "titre": "Partition formée par les classes d'équivalence",
        "hypotheses": "Soit $E$ un ensemble, et $cR$ une relation d'équivalence sur $E$",
        "resultat": "L'ensemble des classes d'équivalence sous $cR$ forme une partition de $E$.",
        "id": 21
    },
    {
        "type": "definition",
        "titre": "Ensemble quotient",

        "resultat": "L'ensemble des classes sous la relation $cR$ s'appelle l'ensemble quotient de $E$ par $cR$, et est noté $E/cR$. C'est un sous-ensemble de $\\cP(E)$.",
        "id": 22
    },
    {
        "type": "definition",
        "titre": "Projection canonique",

        "resultat": "On appelle projection canonique de $E$ sur $E/cR$ l'application $\\picR$ qui à $x$ associe sa classe $\\ol{x}$. Par définition, $\\picR$ est surjective, et vérifie : $\\forall (x, y) \\in E^2$, $xcRy\\iff\\picR(x)=\\picR(y)$.",
        "id": 23
    },
    {
        "type": "theoreme",
        "titre": "Factorisation d'une application constante sur les classes d'équivalence",
        "hypotheses": "Soit $f: E \\rightarrow F$. Alors les deux propriétés suivantes sont équivalentes.",
        "resultat": "($i$) Pour tout $(x, y) \\in E^2$, $xcRy \\implies f(x) = f(y)$<br/>($ii$) Il existe $g: E/cR \\rightarrow F$ tel que $f = g \\circ \\picR$",
        "id": 24
    },
    {
        "type": "definition",
        "titre": "Congruence",
        "hypotheses": "Soit $E$ un ensemble, muni d'un certain nombre d'opération $\\times_1, \\times_2, \\ldots, \\times_n$.",
        "resultat": "On dit qu'une relation d'équivalence $cR$ est une congruence sur $(E, \\times_1,\\ldots,\\times_n)$ si <br/> $\\forall (x,y,x',y') \\in E^4$, $\\forall i \\in [\\![1, n]\\!]$, $(xcRx') \\land (ycRy') \\implies (x\\times_i y)cR(x'\\times_iy')$.",
        "id": 25
    },
    {
        "type": "proposition",
        "titre": "Congruence des entiers",

        "resultat": "La relation de congruence des entiers $\\equiv[n]$ est une congruence sur $(\\Z, +, \\times)$",
        "id": 26
    },
    {
        "type": "proposition",
        "titre": "Passage au quotient des opérations",
        "hypotheses": "Soit $(E, \\times_1, \\ldots, \\times_n)$ un ensemble muni de $n$ lois d'opérations, et $cR$ une congruence sur $(E, \\times_1, \\ldots, \\times_n)$.",
        "resultat": "Alors on peut définir sur $E/cR$ des lois $\\times_1, \\ldots, \\times_n$ telles que pour tout $i \\in [\\![1, n]\\!]$ et tout $(x, y) \\in E^2$ <br/> $$\\ol{x} \\times_i \\ol{y\\ } = \\ol{x \\times_i y}$$",
        "id": 27
    },
    {
        "type": "corollaire",
        "titre": "Addition et multiplication de $\\Z/n\\Z$",

        "resultat": "On peut munir $\\Z/n\\Z$ d'une addition $+$ et d'une multiplication $\\times$ telles que :<br/>$\\forall (x, y) \\in \\Z^2$, $(\\ol{x} + \\ol{y\\ }= \\ol{x + y})\\ $   et   $\\ (\\ol{x} \\times \\ol{y\\ }= \\ol{x \\times y})$.",
        "id": 28
    },
    {
        "type": "definition",
        "titre": "relation d'ordre large",

        "resultat": "Une relation d'ordre sur $E$ est une relation réflexive, antisymétrique et transitive.",
        "id": 29
    },
    {
        "type": "definition",
        "titre": "relation d'ordre stricte",

        "resultat": "Une relation d'ordre sur $E$ est une relation antiréflexive et transitive.",
        "id": 30
    },
    {
        "type": "proposition",
        "titre": "Antisimétrie d'une relation d'ordre stricte",

        "resultat": "Une relation d'ordre stricte est antisymétrique",
        "id": 31
    },
    {
        "type": "proposition",
        "titre": "D'une relation d'ordre large à une relation d'ordre stricte",

        "resultat": "Toute relation d'ordre large $\\leqslant$ définit une relation d'ordre stricte par $x < y$ si et seulement si $x \\leqslant y$ et $x \\neq y$",
        "id": 32
    },
    {
        "type": "proposition",
        "titre": "D'une relation d'ordre stricte à une relation d'ordre large",

        "resultat": "Toute relation d'ordre stricte $<$ définit une relation d'ordre large $\\leqslant$ par $x \\leqslant y$ si et seulement si $x < y$ ou $x=y$ ",
        "id": 33
    },
    {
        "type": "definition",
        "titre": "Ordre total/partiel",
        "hypotheses": "Soit $cR$ une relation d'ordre sur un ensemble $E$.",
        "resultat": "On dit que $cR$ est une relation d'ordre total si pour tout $(x, y) \\in E^2$, soit $x \\leqslant y$ soit $y \\leqslant x$.<br/>Dans le cas contraire, on dit que $cR$ est une relation d'ordre partiel.",
        "id": 34
    },
    {
        "type": "definition",
        "titre": "Restriction d'une relation d'ordre",
        "hypotheses": "Soit $E$ un ensemble muni d'une relation d'ordre $cR$, et $A$ un sous-ensemble de $E$.",
        "resultat": "Alors $cR$ définition sur $A$, une relation d'ordre $cR'$ par : <br/> $\\forall (x, y) \\in A^2$, $xcR'y \\iff xcRy$.<br/>Il s'agit de la restriction à $A$ de la relation $cR$, ou de la relation induite par $cR$ sur $A$.",
        "id": 35
    },
    {
        "type": "definition",
        "titre": "Minimum, maximum",
        "hypotheses": "Soit $(E, \\leqslant )$ un ensemble muni d'une relation d'ordre.",
        "resultat": "1) Un élément $m$ de $E$ est appelé plus petit élément de $E$ si : $\\forall m' \\in E$, $m \\leqslant m'$.<br/>\
        2) Un élément $M$ de $E$ est appelé plus grand élément de $E$ si : $\\forall m' \\in E$, $M\\geqslant m'$.<br/>\
        3) Etant donné un sous-ensemble $A$ de $E$, un élément minimum (resp maximum) de $A$ est un élément minimum (resp maximum) pour la relation d'ordre $cR'$ induite par $cR$ sur $A$.",
        "id": 36
    },
    {
        "type": "proposition",
        "titre": "Unicité du minimum",

        "resultat": "S'il existe, le plus petit élément de E (resp de $A \\subset E$) est unique. De même pour le plus grand élémént.",
        "id": 37
    },
    {
        "type": "definition",
        "titre": "Elément minimal",
        "hypotheses": "Soit $(E,\\leqslant)$ un ensemble muni d'une relation d'ordre.",
        "resultat": "Un élément $m$ de $E$ est appelé élément minimal de $E$ s'il n'existe pas d'élément $x$ de $E$ tel que $x < m$.",
        "id": 38
    },
    {
        "type": "definition",
        "titre": "Elément maximal",
        "hypotheses": "Soit $(E,\\leqslant)$ un ensemble muni d'une relation d'ordre.",
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
        "hypotheses": "Soit $(E,\\leqslant)$ un ensemble muni d'une relation d'ordre. Soit $A \\subset E$.",
        "resultat": "Un minorant $m$ de $A$ est un élément $m \\in E$ tel que : $\\forall a \\in A$, $a \\geqslant m$.",
        "id": 41
    },
    {
        "type": "definition",
        "titre": "Majorant",
        "hypotheses": "Soit $(E,\\leqslant)$ un ensemble muni d'une relation d'ordre. Soit $A \\subset E$.",
        "resultat": "Un majorant $M$ de $A$ est un élément $M \\in E$ tel que : $\\forall a \\in A$, $a \\leqslant M$.",
        "id": 42
    },
    {
        "type": "definition",
        "titre": "Borne supérieure",
        "hypotheses": "Soit $(E,\\leqslant)$, et soit $A \\subset E$",
        "resultat": "La borne supérieure de $A$ est le plus petit des majorants de $A$, s'il existe.",
        "id": 43
    },
    {
        "type": "definition",
        "titre": "Borne inférieure",
        "hypotheses": "Soit $(E,\\leqslant)$, et soit $A \\subset E$",
        "resultat": "La borne inférieure de $A$ est le plus grand des minorants de $A$, s'il existe.",
        "id": 44
    },
    {
        "type": "proposition",
        "titre": "Maximum d'un sous-ensemble",
        "hypotheses": "Soit $(E,\\leqslant)$, et $A \\subset E$.",
        "resultat": "$A$ admet un maximum $M$ si et seulement si $A$ admet une borne supérieure $b$ et si $b \\in A$. Dans ce cas $M=b$.",
        "id": 45
    },
    {
        "type": "proposition",
        "titre": "Minimum d'un sous-ensemble",
        "hypotheses": "Soit $(E,\\leqslant)$, et $A \\subset E$.",
        "resultat": "$A$ admet un minimum $m$ si et seulement si $A$ admet une borne inférieure $b$ et si $b \\in A$. Dans ce cas $m=b$.",
        "id": 46
    },
    {
        "type": "definition",
        "titre": "Application croissante",
        "hypotheses": "Soit $E$ et $F$ deux ensembles, munis chacun d'une relation d'ordre $\\leqslant_E$ et $\\leqslant_F$ respectivement.",
        "resultat": "Une application $f: E\\rightarrow F$ est dite : <br/>\
        croissante si <br/>\
        $\\forall (x,y) \\in E^2$, $x \\leqslant_E y \\implies f(x)\\leqslant_F f(y)$,<br/>\
        décroissante si <br/>\
        $\\forall (x,y) \\in E^2$, $x \\leqslant_E y \\implies f(x)\\geqslant_F f(y)$.",
        "id": 47
    },
    {
        "type": "definition",
        "titre": "Ensemble inductif",
        "hypotheses": "Soit $(E,\\leqslant)$ un ensemble ordonné.",
        "resultat": "On dit que $E$ est un ensemble inductif si pour tout sous-ensemble $F \\subset E$ totalement ordonné, $F$ admet un majorant dans $E$.",
        "id": 48
    },
    {
        "type": "theoreme",
        "titre": "lemme de Zorn",

        "resultat": "Tout ensemble inductif admet un élément maximal.",
        "id": 49
    },
];

const quiz_reels = [{
        "type": "proposition",
        "titre": "Axiome de récurrence",
        "hypotheses": "Soit $P$ définie sur $n \\in \\N$",
        "resultat": "$(P(0) \\land (\\forall n \\in \\N, P(n) \\implies P(n+1)))) \\implies (\\forall n \\in \\N, P(n))$",
        "id": 50
    }, {
        "type": "theoreme",
        "titre": "propriété fondamentale de $\\N$",

        "resultat": "Tout sous-ensemble non vide et majoré de $\\N$ admet un plus grand élément",
        "id": 51
    }, {
        "type": "corollaire",
        "titre": "Corollaire  de la propriété fondamentale de $\\N$",

        "resultat": "Tout sous-ensemble non vide de $\\N$ admet un plus petit élément.",
        "id": 52
    }, {
        "type": "theoreme",
        "titre": "équivalence de la propriété fondamentale de $\\N$",

        "resultat": "La propriété fondamentale de $\\N$ est équivalente à l'axiome de récurrence.",
        "id": 53
    }, {
        "type": "proposition",
        "titre": "Propriétés de l'addition et du produit d'entiers",
        "hypotheses": "Soient $a$, $b$ et $c$ des éléments de $\\N$",
        "resultat": "<ul> <li>$a+0=0+a=a$ ($0$ est élément neutre pour $+$)</li> <li>$a \\times 0 = 0 \\times a = 0$ ($0$ est absorbant pour $\\times$) </li> <li>$a + 1 = 1 + a$</li> <li> $a \\times 1 = 1 \\times a = a$ ($1$ est neutre pour $\\times$) </li> <li>$(a+b)+c = a + (b + c)$ ($\\times$ est associative)</li> <li>$a+b=b+a$ ($+$ est commutative)</li> <li>$a \\times (b + c) = a \\times b + a \\times c$ ($\\times$ est distributive sur $+$)</li> <li>$a \\times b = b \\times a$ ($\\times$ est commutative) </li> <li>$(a \\times b) \\times c = a \\times (b \\times c)$ ($\\times$ est associative)</li> <li>$ab = 0  \\implies a = 0 \\lor b = 0$ (intégrité de $(\\N, \\times)$)</li> <li>$a + b = 0 \\implies a = 0 \\land b = 0$ </li> <li>$a + b = a + c \\implies b = c$ (régularité pour $+$)</li> <li>Si $a \\neq 0, ab = ac \\implies b = c$ (régularité pour $\\times$)</li> </ul>",
        "id": 54
    }, {
        "type": "proposition",
        "titre": "Relation d'ordre, somme et produit",
        "hypotheses": "Soit $a$, $b$, $c$ et $d$ des entiers naturels.",
        "resultat": "<ul><li>Si $a \\leqslant c$ et $b \\leqslant d$ alors $a + b \\leqslant c + d$ avec égalité si et seulement si $a = c$ et $b = d$</li> <li>si $0 \\lt a \\leqslant c$ et $0 \\lt b \\leqslant d$ alors $ab \\leqslant cd$ avec égalité si et seulement si $a=c$ et $b=d$ </li></ul>",
        "id": 55
    }, {
        "type": "proposition",
        "titre": "$\\Z$ peut être vu comme un prolongement de $\\N$",

        "resultat": "L'application : <br />$i: \\N \\rightarrow \\Z$ <br />$\\ n \\rightarrow \\ol{(n, 0)}$ <br /> est une injection compatible avec les lois $+$ et $\\times$.",
        "id": 56
    }, {
        "type": "proposition",
        "titre": "Compatibilité de la relation d'ordre avec le produit",

        "resultat": "<ol> <li>Soit $c \\in \\N^*$. Alors, $\\forall (a,b) \\in \\Z^2$, <br /> $a \\lt b \\iff ac \\lt bc$ et $a \\leqslant b \\iff ac \\leqslant bc$</li> <br /> <li>Soit $c \\in \\Z^*$, <br /> $a \\lt b \\iff ac \\gt bc$ et $a \\leqslant b \\iff ac \\geqslant bc$</li> </ol>",
        "id": 57
    }, {
        "type": "definition",
        "titre": "Notation usuelle pour un rationnel",

        "resultat": "La classe $\\ol{(a,b)}$ du couple $(a, b)$ est notée $\\frac{a}{b}$.",
        "id": 58
    }, {
        "type": "theoreme",
        "titre": "Définition de l'addition et du produit de rationnels",

        "resultat": "Les lois définies sur $\\Z\\times\\N^*$ par $(a,b) + (c,d) = (ad+bc, bd)$ et $(a, b) \\times (c,d) = (ac, bd)$ passent au quotient, définissant sur $\\Q$ les lois pouvant être décrites avec les notations usuelles par : <br /> $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$ et $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$",
        "id": 59
    }, {
        "type": "theoreme",
        "titre": "Propriétés des lois de $\\Q$",

        "resultat": "<ul> <li>Les lois $+$ et $\\times$ sont associatives</li> <li>Les lois $+$ et $\\times$ sont commutatives</li> <li>La loi $\\times$ est distributive sur $+$</li> <li>L'élément $0=\\frac{0}{1}$ est neutre pour $+$, et tout élément $\\frac{a}{b}$ admet un opposé $\\frac{-a}{b}$</li> <li>Le rationnel $\\frac{a}{b}$ est égal = $0$ si et seulement si $a=0$</li> <li>L'élément $1=\\frac{1}{1}$ est neutre pour $\\times$, et tout élément $\\frac{a}{b}$ non nul est inversible, d'inverse $\\frac{b}{a}$</li> </ul> Ainsi que $\\Q$ est un corps.",
        "id": 60
    }, {
        "type": "remarque",
        "titre": "inclusion de $\\Z$ dans $\\Q$",

        "resultat": "Les entiers $a \\in \\Z$ peuvent être identifiés aux rationnels $\\frac{a}{1}$ (dans le sens où $a \\rightarrow \\frac{a}{1}$ définit une injection de $\\Z$ dans $\\Q$). Via cette identification, on peut considérer que $\\Z \\subset \\Q$.",
        "id": 61
    }, {
        "type": "definition",
        "titre": "Inégalité dans $\\Q$",
        "hypotheses": "Soit $q = \\frac{a}{b}$ et $r=\\frac{c}{d}$ deux rationnels (avec $b$ et $d$ dans $\\N^*$).",
        "resultat": "Alors le signe de l'entier relatif $ad-bc$ est indépendant de la représentation choisie (avec un dénominateur positif de $q$ et $q'$. On définit alors la relation d'ordre sur $q$ par : <br /> $q \\leqslant r \\iff ad - bc \\leqslant 0$",
        "id": 62
    }, {
        "type": "theoreme",
        "titre": "Relation $\\leqslant$ sur $\\Q$",

        "resultat": "La relation $\\leqslant$ ainsi difinie sur $\\Q$ est une relation d'ordre total.",
        "id": 63
    }, {
        "type": "definition",
        "titre": "Nombres incommensurables",
        "hypotheses": "Soit $(x, y) \\in (\\R^*)^2$",
        "resultat": "On dit que $x$ et $y$ sont incommensurables si $\\frac{x}{y}$ est irrationnel.",
        "id": 64
    }, {
        "type": "proposition",
        "titre": "Existence de nombres irrationnels",

        "resultat": "Si $n$ n'est pas un carré parfait (donc si $n$ ne s'écrit pas sous la forme $n = m^2$ pour un certain entier $m$), alors $\\sqrt(N)$ est irrationnel.",
        "id": 65
    }, {
        "type": "axiome",
        "titre": "Propriété fondamentale de $\\R$",
        "hypotheses": "Soit $E$ un sous-ensemble non vide et majoré de $\\R$.",
        "resultat": "Alors $E$ admet une borne supérieure dans $\\R$.",
        "id": 66
    }, {
        "type": "theoreme",
        "titre": "Propriété fondamentale de $\\R$, exprimée avec la borne inférieure",
        "hypotheses": "Soit $E$ un sous-ensemble non vide et minoré de $\\R$.",
        "resultat": "Alors $E$ admet une borne inférieure dans $\\R$.",
        "id": 67
    }, {
        "type": "propriete",
        "titre": "Relation d'ordre sur $\\R$",

        "resultat": "La relation d'ordre sur $\\R$ vérifie les 4 propriétés élémentaires suivants : <ol> <li>C'est une relation d'ordre totale</li> <li>$\\forall (x,y) \\in\\R^2$, $x \\leqslant y \\iff y - x \\in\\R_+$</li> <li> $\\forall (x,y) \\in (\\R_+)^2$, $x+y \\geqslant 0$ avec égalité si et seulement si $x = y = 0$ </li> <li>$\\forall (x,y) \\in (\\R_+)^2$, $xy \\geqslant 0$</li> </ol>",
        "id": 68
    }, {
        "type": "corollaire",
        "titre": "Règle des signes pour le produit",
        "hypotheses": "Soit $x$ et $y$ deux réels.",
        "resultat": "<ol> <li>Si $x \\leqslant 0$ alors $-x \\geqslant 0$</li> <li>Si $x \\geqslant 0$, alors $-x \\leqslant 0$</li> <li>Si $x \\geqslant 0\\land y \\leqslant 0$ ou si $x \\leqslant 0\\land y \\geqslant 0$, alors $xy \\leqslant 0$</li> <li>Si $x \\leqslant 0$ et $y \\leqslant 0$, alors $xy \\geqslant 0$</li> </ol>",
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

        "resultat": "Pour obtenir des inégalités, on peut : <ul> <li>Tout passer du même côté (si l'inégalité est donnée) et essayer de factoriser pour déterminer le signe.</li> <li>Procéder par étude de fonction, si l'inégalité est donnée : on passe tout du même côté, et on étudie le signe de la fonction obtenue, grâce à une étude de variations.</li> <li>Utiliser une propriété de convexité ou de concavité : une fonction dérivable $f$ est convexe si $f'$ est croissante (donc la pente est de plus en plus forte). Intuitivement, la convexité se traduit par le fait que les tangentes sont sous la courbe, et les cordes sont au-dessus de la courbe.</li> <li>Utiliser des inégalités classiques (en premiere lieu l'inéaglité triangulaire, l'inégalité de Cauchy-Schwarz, l'inégalité arithmético-géométrique...). L'inégalité triangulaire est à utiliser dès lors qu'on cherche à majorer la valeur absolue (ou le module) d'une somme dont on sait majorer la valeur absolue de chaque terme : il faut d'abord sortir ces termes de la valeur absolue globale et ce grâce à l'inégalité triangulaire.</li> </ul>",
        "id": 71
    }, {
        "type": "definition",
        "titre": "Valeur absolue",
        "hypotheses": "Soit $x \\in \\R$",
        "resultat": "La valeur absolue de $x$, notée $|x|$, est la réel obtenu de $x$ en changeant si besoin son signe de sorte à obtenir une quantité positive : <br /> $\\left\\{ \\begin{array}{ll} x \\text{ si } x \\geqslant 0 \\\\ -x \\text{ si } x \\lt 0 \\end{array} \\right.$.",
        "id": 72
    }, {
        "type": "remarque",
        "titre": "Utilisation de la valeur absolue",

        "resultat": "La valeur absolue est souvent utilisée lorsqu'on veut montrer qu'une quantité reste bornée, c'est-à-dire peut être à la fois majorée et minorée. En effet, majorer $|A|$ revient à majorer et minorer $A$, puisque $|A| \\leqslant B$ équivaut à $-B \\leqslant A \\leqslant$",
        "id": 73
    }, {
        "type": "definition",
        "titre": "Partie positive d'un réel",
        "hypotheses": "Soit $x \\in \\R$",
        "resultat": "On appelle <b>partie positive</b> de $x$, et on note $x^+$ le réel défini par : <br /> $x^+ = \\max(0, x) = \\left\\{ \\begin{array}{ll} x \\text{ si } x \\geqslant 0 \\\\ 0 \\text{ si } x \\lt 0 \\end{array} \\right.$",
        "id": 74
    }, {
        "type": "definition",
        "titre": "Partie négative d'un réel",
        "hypotheses": "Soit $x \\in \\R$",
        "resultat": "On appelle <b>partie négative</b> de $x$, et on note $x^-$ le réel défini par : <br /> $x^- = -\\min(0, x) = \\max(0, -x) = \\left\\{ \\begin{array}{ll} x \\text{ si } - x \\lt 0 \\\\ 0 \\text{ si } x \\geqslant 0 \\end{array} \\right.$",
        "id": 75
    }, {
        "type": "propriete",
        "titre": "Propriétés des parties positives et négatives",
        "hypotheses": "Soit $x$ un réel",
        "resultat": "Alors : <ol> <li>$x^+ \\geqslant 0$ et $x^- \\geqslant 0$ </li>  <li>$x^+ = 0$ ou $x^- = 0$</li> <li>$x = x^+ - x^-$</li> <li>$\\forall(y,z) \\in \\R_+$, si $x=y-z$ alors $y \\geqslant x^+$ et $z \\geqslant x^-$ </li>  <li>$|x| = x^+ + x^- = max(0, x) - min(0, -x)$</li> <li>$(-x)^+ = x^-$ et $(-x)^- = x^+$</li> </ol>",
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
        "resultat": "Alors $$|\\sum_{i=1}^{n}x_iy_i| \\leqslant \\sum_{i=1}^{n}|x_iy_i|$$",
        "id": 78
    }, {
        "type": "theoreme",
        "titre": "Inégalité de Cauchy-Schwarz numérique",
        "hypotheses": "Soient $x_1, ..., x_n, y_1, ..., y_n$ des réels.",
        "resultat": "On a alors : <br /> $$|\\sum_{i=1}^{n}x_iy_i|^2 \\leqslant (\\sum_{i=1}^{n}x^2_i)(\\sum_{i=1}^{n}y^2_i)$$",
        "id": 79
    }, {
        "type": "theoreme",
        "titre": "Inégalité arithmético-géométrique",

        "resultat": "Pour tout $X = (x_1, ..., x_n) \\in (\\R_+^*)^n$, <br /> $\\frac{1}{n}(x_1 + ... + x_n) \\geqslant \\sqrt[\\leftroot{10}\\uproot{10}n]{x_1 \\times ... \\times x_n}$",
        "id": 80
    }, {
        "type": "proposition",
        "titre": "Propriété d'Archimède",
        "hypotheses": "Soit $x$ et $y$ deux réels strictement positifs.",
        "resultat": "Il existe un entier $n \\in \\N$ tel que $x \\lt ny$",
        "id": 81
    }, {
        "type": "corollaire",
        "titre": "Propriété d'Archimède appliquée au rationnels",

        "resultat": "Pour tout $x \\gt 0$ et tout $y \\gt 0$, il existe un rationnel $r$ tel que $0 \\lt rx \\lt y$.",
        "id": 82
    }, {
        "type": "theoreme",
        "titre": "Division euclidienne",
        "hypotheses": "Soit $x \\in \\R$ et $y \\in \\R_+^*$",
        "resultat": "Il existe un unique entier $n$ et un unique réel $r \\in [0, y[$ tels que $x = ny +r$",
        "id": 83
    }, {
        "type": "definition",
        "titre": "Densité dans $\\R$",

        "resultat": "Un sous ensemble $E$ de $\\R$ est dense dans $\\R$ si pour tout $(x,y) \\in \\R^2$ tel que que $x < y$, il existe $z \\in E$ tel que $x \\lt z \\lt y$",
        "id": 84
    }, {
        "type": "theoreme",
        "titre": "Densité des rationnels et des irrationnels dans $\\R$",

        "resultat": "Les ensembles $\\Q$ et $\\R\\backslash\\Q$ sont denses dans $\\R$.",
        "id": 85
    }, {
        "type": "definition",
        "titre": "Nombres algébriques, transcendants sur $\\Q$",
        "hypotheses": "Soit $x \\in \\R$",
        "resultat": "<ul> <li>On dit que $x$ est <b>algébrique</b> sur $\\Q$ s'il existe un polynôme $P$ à coefficients dans $\\Q$ tel que $P(x) = 0$</li> <li>On dit que $x$ est transcendant sur $\\Q$ s'il n'est pas algébrique</li> </ul>",
        "id": 86
    }, {
        "type": "definition",
        "titre": "Partie entière",

        "resultat": "La partie entière d'un réel $x$, notée $\\lfloor x\\rfloor$ est le quotient de la division euclidienne par $1$. Il s'agit donc de l'unique entier $n$ tel qu'il existe $r \\in [0, 1[$ tel que $x=n + r$",
        "id": 87
    }, {
        "type": "definition",
        "titre": "Partie décimale",

        "resultat": "Le réel $r$ de la définition de la partie entière (reste de la division euclidienne d'un réel $x$ par $1$) est parfois notée $\\{x\\}$, lorsqu'il n'y a pas de confusion possible avec la notation ensembliste désignant le singleton dont l'unique élément est $x$.",
        "id": 88
    }, {
        "type": "proposition",
        "titre": "Caractérisation de la partie entière",
        "hypotheses": "Soit $x \\in \\R$",
        "resultat": "<ol> <li>$\\lfloor x\\rfloor = \\max\\{n \\in \\Z | n \\leqslant x\\}$</li> <li>$\\lfloor x \\rfloor = \\min\\{n \\in \\Z | n \\gt x \\} - 1$</li> <li>$\\lfloor x \\rfloor$ est l'unique entier tel que $\\lfloor x \\rfloor \\leqslant x \\lt \\lfloor x \\rfloor - 1$</li>  <li>$\\lfloor x \\rfloor$ est l'unique entier tel que $x - 1 \\lt \\lfloor x \\rfloor \\leqslant x$</li> </ol>",
        "id": 89
    }, {
        "type": "definition",
        "titre": "partie entière par excès",

        "resultat": "On définit parfois aussi la partie entière par excès, notée $\\lceil x \\rceil$, comme étant le plus petit entier supérieur ou égal à $x$ : <br /> $\\lceil x \\rceil = \\min\\{ n \\in \\N | n \\geqslant x\\}$",
        "id": 90
    }, {
        "type": "proposition",
        "titre": "Relation entre partie entière et partie entière par excès",
        "hypotheses": "Soit $x \\in \\R$.",
        "resultat": "On a alors : <ol> <li>$\\lceil x \\rceil = \\left \\{ \\begin{array}{ll} \\lfloor x \\rceil + 1 \\text{ si } x \\notin \\Z \\\\ \\lfloor x \\rfloor \\quad \\quad \\text{si } x \\in \\Z \\end{array}\\right.$</li>  <li>$\\lfloor -x \\rfloor = -\\lceil x \\rceil$</li> </ol>",
        "id": 91
    }, {
        "type": "propriete",
        "titre": "Propriétés de la partie entière",

        "resultat": "<ol> <li>$\\forall x,y \\in \\R, \\lfloor x \\rfloor + \\lfloor y \\rfloor + 1 \\geq \\lfloor x + y \\rfloor \\geq \\lfloor x \\rfloor + \\lfloor y \\rfloor$</li> <li>$\\forall x,y \\in \\R_+, \\lfloor xy \\rfloor \\geq \\lfloor x \\rfloor \\times \\lfloor y \\rfloor $</li> <li>$\\forall x \\in \\R, \\forall n \\in \\Z, \\lfloor x + n \\rfloor = \\lfloor x \\rfloor + n$</li></ol>",
        "id": 92
    }, {
        "type": "remarque",
        "titre": "Notation des nombres décimaux",

        "resultat": "<ul> <li>Nous notons $\\D$ l'ensemble des nombres décimaux, c'est à dire des réels $x$ tels qu'il existe $n \\in \\N$ tel que $10^{n}x$ est entier</li> <li>Etant donné $n \\in \\N$, nous notons $\\D_n$ l'ensemble des nombres décimaux tels que $10^{n}x \\in \\Z$. Par exemble $\\D_0 = \\Z$ et $\\D_1$ sont les décimaux s'écrivant avec au plus un chiffre après la virgule.</li></ul>",
        "id": 93
    }, {
        "type": "proposition",
        "titre": "Approximation des décimales d'un réel $x$",
        "hypotheses": "Soit $x$ un réel et $n \\in \\N^*$",
        "resultat": "Il existe un unique élément $y$ de $\\D_n$ tel que $y_n \\leq x \\lt y_n + 10^{-n}$. <br /> <ul><li>Le décimal $y_n$ est appelé valeur approchée décimal à la précision $10^{-n}$ par défaut</li> <li>Le décimal $y_n + 10^{-n}$ est appelé valeur approchée décimale à la précision $10^{-n}$ par excès.</li> </ul>",
        "id": 94
    },
    {
        "type": "lemme",
        "titre": "Aproximation des décimales",

        "resultat": "Pour tout $n \\in \\N^*$, il existe $a_n \\in [\\![0, 9]\\!]$ tel que $y_n - y_{n-1} = \\frac{a_n}{10^n}$",
        "id": 95
    },
    {
        "type": "theoreme",
        "titre": "Existence du développement décimal de $x$",
        "hypotheses": "Soit $x \\in \\R$",
        "resultat": "Il existe un entier relatif $y_0$ et pour tout $n \\in \\N^*$, des entiers $a_n \\in [\\![0, 9]\\!]$ tels que <br /> $$x=y_0 + \\sum_{n+1}^{+\\infty} a_n10^{-n} = y_0 + \\lim_{N \\rightarrow +\\infty} \\sum_{n=1}^{N} a_n10^{-n}$$.",
        "id": 96
    }, {
        "type": "theoreme",
        "titre": "Unicité du développement décimal de $x$",
        "hypotheses": "Soit $x \\in \\R$",
        "resultat": "<ol><li>Si $x$ n'est pas décimal, $x$ admet un unique développement décimal</li> <li>Si $x$ est décimal, $x$ admet exactement deux développements décimaux, l'un terminant uniquement par des $9$, l'autre terminant uniquement par des $0$</li> </ol>",
        "id": 97
    }, {
        "type": "definition",
        "titre": "Développement propre",

        "resultat": "On appelle développement décimal propre de $x$ l'unique développement de $x$ si $x$ n'est pas décimal, ou l'unique développement de $x$ terminant par des $0$ si $x$ est décimal. Ainsi, tout réel admet un unique développement décimal propre.",
        "id": 98
    }, {
        "type": "definition",
        "titre": "Ensemble convexe",
        "hypotheses": "Soit $E$ un sous-ensemble de $\\R^n$.",
        "resultat": "On dit que $E$ est convexe si et seulement si pour tout couple de points $A$ et $B$ de $E$, le segment $[AB]$ est entièrement inclus dans $E$.",
        "id": 99
    }, {
        "type": "definition",
        "titre": "Intervalle",

        "resultat": "Un intervalle $I$ est un sous-ensemble convexe $I$ de $\\R$, c'est-à-dire tel que : <br /> $\\forall (a,b) \\in I^2, \\forall x \\in \\R, a \\leqslant x \\leqslant b \\implies x \\in I$",
        "id": 100
    }, {
        "type": "theoreme",
        "titre": "Inventaire des intervalles réels",

        "resultat": "Tout intervalle $I$ de $\\R$ est d'une des formes suivantes, pour certaines valeurs réelles $a$ et $b$ : <ul> <li>$[a, b] = \\{x \\in \\R, a \\leqslant x \\leqslant b \\}, a \\leqslant b$</li> <li>$]a, b[ = \\{x \\in \\R, a \\lt x \\lt b \\}, a \\lt b$</li>  <li>$[a, b[ = \\{x \\in \\R, a \\leqslant x \\lt b \\}, a \\lt b$</li> <li>$]a, b] = \\{x \\in \\R, a \\lt x \\leqslant b \\}, a \\lt b$</li> <li>$[a, +\\infty[ = \\{x \\in \\R, x \\geqslant a \\}$</li> <li>$]a, +\\infty[ = \\{x \\in \\R, x \\gt a \\}$</li> <li>$]-\\infty, b] = \\{x \\in \\R, x \\leqslant b \\}$</li> <li>$]-\\infty, b[ = \\{x \\in \\R, x \\lt b \\}$</li> <li>$]-\\infty, +\\infty = \\R$</li> <li>$\\emptyset$</li> </ul>",
        "id": 101
    }, {
        "type": "definition",
        "titre": "Intervalles ouverts, fermés, semi-ouverts",

        "resultat": "<ul> <li>On dit qu'un intervalle est ouvert s'il est de la forme $]a, b[, ]a, +\\infty[, ]-\\infty, b[, \\R$ ou $\\emptyset$</li> <li>On dit qu'un intervalle est fermé s'il est de la forme $[a, b], [a, +\\infty[, ]-\\infty, b]$ ou $\\emptyset$</li> <li>On dit qu'un intervalle est semi-ouvert s'il est de la forme $[a, b[$ ou $]a, b]$</li> </ul>",
        "id": 102
    }, {
        "type": "definition",
        "titre": "Boule dans $\\R^n$",
        "hypotheses": "Soit $x \\in \\R^n$ et $r \\in \\R_+$.",
        "resultat": "<ol> <li>La boule ouverte de centre $x$ et de rayon $r$ est : $B(x, r) = \\{y \\in \\R^n | d(y,x) \\lt r\\}$</li> <li>La boule fermée de centre $x$ et de rayon $r$ est : $\\ol{B}(x, r) = \\{ y \\in \\R^n | d(y,x) \\leqslant r \\}$</li> </ol>",
        "id": 103
    }, {
        "type": "remarque",
        "titre": "Lien entre majoration de valeur absolue et appartenance à une boule",

        "resultat": "Il est important de retenir qu'une majoration de certaines valeurs absolues se traduit par l'appartenance à une boule : <ul> <li>une majoration du type $|x - a| \\leqslant r$ traduit l'appartenance de $x$ à la boule fermée $\\ol{B}(a, r)$ de centre $a$ et de rayon $r$, donc à l'intervalle $[a-r,a+r]$</li> <li>une majoration du type $|x - a| \\lt r$ traduit l'appartenance de $x$ à la boule ouverte $B(a, r)$ de centre $a$ et de rayon $r$, donc à l'intervalle $]a-r,a+r[$</li> </ul>",
        "id": 104
    }, {
        "type": "definition",
        "titre": "Voisinage",
        "hypotheses": "Soit $x \\in \\R^n$.",
        "resultat": "Un <b>voisinage</b> $V$ de $x$ est un sous-ensemble $V$ de $\\R^n$ tel qu'il existe une boule ouverte centrée en $x$ entièrement contenue dans $V$ : $\\exists \\varepsilon \\gt 0, B(x,\\varepsilon) \\subset V$, i.e. $\\exists \\varepsilon \\gt 0, \\forall y \\in E, d(y,x) \\lt \\varepsilon \\implies y \\in V$",
        "id": 105
    }, {
        "type": "definition",
        "titre": "Sous-ensemble ouvert",

        "resultat": "<ul> <li>Un <b>ouvert</b> de $U$ de $\\R^n$ est un sous-ensemble $U$ de $\\R^n$ qui est voisinage de tous ses points</li> <li>De manière équivalente, $U \\subset \\R^n$ est ouvesrt si et seulement si : <br /> $\\forall x \\in U, \\exists \\varepsilon \\gt 0, B(x, \\varepsilon) \\subset U$ </li> </ul>",
        "id": 106
    }, {
        "type": "definition",
        "titre": "Sous-ensemble fermé",

        "resultat": "Un sous-ensemble $F$ de $\\R^n$ est <b>fermé</b> si son complémentaire $C_E F$ est <b>ouvert</b>",
        "id": 107
    }, {
        "type": "proposition",
        "titre": "Union/intersections d'ouverts et de fermés",

        "resultat": "<ol> <li>Toute union quelconque d'ouverts est un ouvert</li> <li>Toute intersection d'un nombre fini d'ouverts est un ouvert</li> <li>Toute intersection quelconque de fermés est un fermé</li> <li>Toute union d'un nombre fini de fermés est un fermé</li> </ol>",
        "id": 108
    }, {
        "type": "definition",
        "titre": "Droite achevée réelle",

        "resultat": "La droite achevée réelle, notée $\\ol{\\R}$, est l'ensemble $\\R \\cup \\{-\\infty, + \\infty\\}$.",
        "id": 109
    }, {
        "type": "definition",
        "titre": "Relation d'ordre sur $\\ol{\\R}$",

        "resultat": "On peut prolonger l'ordre de $\\R$ en un ordre de $\\ol{\\R}$ en posant : <br /> $\\forall x \\in \\ol{\\R}, -\\infty \\leqslant x \\leqslant +\\infty$.",
        "id": 110
    }, {
        "type": "definition",
        "titre": "Règles calculatoires dans $\\ol{\\R}$",

        "resultat": "On peut prolonger partiellement les opérations de $\\R$ sur $\\ol{\\R}$, en posant : <ul> <li>$-(+\\infty) = - \\infty$</li> <li>$\\forall x \\in \\ol{\\R}\\text{\\ }\\{-\\infty\\}, x + (+\\infty) = +\\infty$</li> <li>$\\forall x \\in \\ol{\\R}\\text{\\ }\\{+\\infty\\}, x + (-\\infty) = -\\infty$</li> <li>$\\frac{1}{+\\infty} = \\frac{1}{-\\infty} = 0$</li> <li>$\\forall x \\in \\ol{\\R}_+^*, x \\times (+\\infty) = +\\infty, x \\times (-\\infty) = -\\infty$</li> <li>$\\forall x \\in \\ol{\\R}_-^*, x \\times (+\\infty) = -\\infty, x \\times (-\\infty) = +\\infty$</li> </ul>",
        "id": 111
    }, {
        "type": "definition",
        "titre": "Formes indéterminées dans $\\ol{\\R}$",

        "resultat": "Les opérations suivantes ne sont pas définies, et définissent les formes indéterminées de la somme et du produit dans $\\ol{\\R}$ : <ul> <li>$-\\infty + (+\\infty)$</li> <li>$0 \\times (+\\infty)$</li> <li>$0 \\times (-\\infty)$</li> </ul>",
        "id": 112
    }, {
        "type": "proposition",
        "titre": "Bornes supérieures dans $\\ol{\\R}$",

        "resultat": "Tous sous-ensemble $E$ de $\\ol{\\R}$ admet une borne supérieure dans $\\ol{\\R}$",
        "id": 113
    }, {
        "type": "proposition",
        "titre": "Bornes inférieures dans $\\ol{\\R}$",

        "resultat": "Tous sous-ensemble $E$ de $\\ol{\\R}$ admet une borne inférieure dans $\\ol{\\R}$",
        "id": 114
    }
];

const quiz_nb_complexes = [{
    "type": "definition",
    "titre": "Ensemble $\\C$ des nombres complexes",

    "resultat": "L'ensemble des nombres complexes $\\C$ est l'ensemble $\\R^2$, muni des opérations suivantes : <ul><li>$(a, b) + (a',b') = (a+a', b+b')$</li> <li>$(a, b) \\times (a', b') = (aa' - bb', ab' + a'b)$</li></ul>",
    "id": 115
}, {
    "type": "remarque",
    "titre": "Injection de $\\R$ dans $\\C$",

    "resultat": "L'application $\\lambda \\rightarrow (\\lambda, 0)$ étant injective, on identifie un réel $\\lambda$ au complexe $(\\lambda, 0)$. Via cette définition, on peut considérer que $\\R \\in \\C$, et on vérifie facilement que la somme et le produit défini sur $\\C$ prolongent les lois de $\\R$.",
    "id": 116
}, {
    "type": "definition",
    "titre": "definition de la forme algébrique",

    "resultat": "<ul><li>On note $1 = (1,0)$ et $i = (0, 1)$</li><li>On a alors, pour tout $z = (a,b) \\in \\C$, <br/> $z = a\\times 1 + b\\times i =  a+ib$<br/>C'est la forme algébrique du nombre complexe $z$.</li></ul>",
    "id": 117
}, {
    "type": "definition",
    "titre": "Parties réelle/imaginaire",

    "resultat": "<ul><li>Soit $z=a+ib$, avec $a,b \\in \\R$. <br/> * Le réel $a$ est appelé <b>partie réelle de $z$</b>, et est noté $\\Re(z)$<br/> * Le réel $b$ est appelé <b>partie imaginaire de $z$</b>, et est noté $\\Im(z)$</li> <li>Un nombre $z \\in \\C$ tel que $\\Re(z) = 0$ est appelé <b>nombre imaginaire pur</b></li> <li>Un nombre $z \\in \\C$ vérifie $\\Im(z) = 0$ si et seulement si $z \\in \\R$</li> </ul>",
    "id": 118
}, {
    "type": "proposition",
    "titre": "Propriétés liées au produit (nb complexes)",

    "resultat": "<ol><li>$i^2=-1$</li> <li>Le produit $(a+ib)(a'+ib')$ est simplement obtenu par utilisation des règles de distributivité et par la relation $i^2=-1$</li> <li>Si $z\\neq0$, alors $z$ est inversible, et, si $z=a+ib$ avec $(a,b) \\in \\R^2$, on a l'expression de l'inverse : <br/> $z^{-1} = \\frac{a-ib}{a^2+b^2}$</li></ol>",
    "id": 119
}, {
    "type": "theoreme",
    "titre": "Structure de $\\C$",

    "resultat": "L'ensemble $\\C$ muni des opérations ci-dessus est un corps.",
    "id": 120
}, {
    "type": "definition",
    "titre": "Affixe d'un point du plan",
    "hypotheses": "Soit $A = (a,b)$ un point de $\\R^2$.",
    "resultat": "L'affixe du point $A$ est le nombre complexe $z_A = a+ib$.",
    "id": 121
}, {
    "type": "theoreme",
    "titre": "Théorème d'Alembert-Gauss",

    "resultat": "Tout polynôme non constant à coefficients complexes admet au moins une racine dans $\\C$.",
    "id": 122
}, {
    "type": "definition",
    "titre": "Conjugué d'un nombre complexe",
    "hypotheses": "Soit $z = a+ib$ (avec $(a,b) \\in \\R^2$) un nombre complexe.",
    "resultat": "Le conjugué de $z$ est le nombre complexe <br/> $\\ol{z\\ } a - ib$",
    "id": 123
}, {
    "type": "propriete",
    "titre": "Propriétés de la conjugaison dans $\\C$",
    "hypotheses": "Soit $z$ et $z'$ deux nombres complexes.",
    "resultat": "<ol><li>$\\ol{\\ol{z\\ }} = z$ (autrement dit, la conjugaison est une involution)</li> <li>$z = \\ol{z\\ } \\iff z \\in \\R$</li> <li>$z = -\\ol{z\\ } \\iff z$ imaginaire pur</li> <li>$\\Re(z) = \\frac{z + \\ol{z\\ }}{2}$ et $\\Im(z) = \\frac{z - \\ol{z\\ }}{2}$</li> <li>$\\ol{z + z'} = \\ol{z\\ } + \\ol{z'}$, $\\ol{zz'} = \\ol{z\\ }\\times\\ol{z'}$, $\\ol{z^{-1}} = \\ol{z\\ }^{-1}$, $\\ol{(\\frac{z}{z'})} = \\frac{\\ol{z\\ }}{\\ol{z'}}$</li></ol>",
    "id": 124
}, {
    "type": "definition",
    "titre": "Module d'un nombre complexe",
    "hypotheses": "Soit $(a,b) \\in \\R^2$, et $z=a+ib$.",
    "resultat": "Le module de $z$ est le réel positif défini par <br/> $|z| = \\sqrt{a^2 + b^2}$",
    "id": 125
}, {
    "type": "propriete",
    "titre": "Propriétés du module",
    "hypotheses": "Soit $z$ et $z'$ deux nombres complexes.",
    "resultat": "<ol><li>$z = 0 \\iff |z| = 0$</li> <li>$|\\Re(z)| \\leqslant |z| \\ $   et   $\\ |\\Im(z)| \\leqslant |z|$</li> <li>$|z|^2 = z\\ol{z\\ }$</li> <li>$|zz'| = |z|\\times|z'| \\ $ et si $z' \\neq 0$, $|\\frac{z}{z'}| = \\frac{|z|}{|z'|}$</li> <li>$|z| = |\\ol{z\\ }|$</li> <li>$|z + z'| \\leqslant |z| + |z'|$</li></ol>",
    "id": 126
}, {
    "type": "methode",
    "titre": "Expression algébrique du quotient",
    "hypotheses": "Soit $z_1$ et $z_2$ deux nombres complexes donnés sous forme algébrique avec $z_2 \\neq 0$.",
    "resultat": "Pour trouver la forme algébrique du quotient $\\frac{z_1}{z_2}$, multipliez le dénominateur par $\\ol{z_2}$. De la sorte, le dénominateur est maintenant un réel.",
    "id": 127
}, {
    "type": "definition",
    "titre": "Exponentielle complexe",
    "hypotheses": "Soit $z$ un nombre complexe.",
    "resultat": "On définit alors $e^z = e^{\\Re(z)}\\times e^{i\\Im(z)}$",
    "id": 237
}, {
    "type": "proposition",
    "titre": "$Re(e^z)$",

    "resultat": "$\\Re(e^z) = e^{\\Re(z)}\\cos(\\Im(z))$",
    "id": 238
}, {
    "type": "proposition",
    "titre": "$\\Im(z)$",

    "resultat": "$\\Im(e^z) = e^{\\Re(z)}\\sin(\\Im(z))$",
    "id": 239
}, {
    "type": "proposition",
    "titre": "$|e^z|$",

    "resultat": "$|e^z| = e^{\\Re(z)}$",
    "id": 240
}, {
    "type": "proposition",
    "titre": "$\\arg(e^z)$",

    "resultat": "$\\arg(e^z) = \\Im(z) [2\\pi]$",
    "id": 241
}, {
    "type": "theoreme",
    "titre": "Propriété d'addition (exponentielle complexe)",
    "hypotheses": "Soit $(z, z') \\in \\C$",
    "resultat": "$e^{z+z'} = e^ze^{z'}$",
    "id": 242
}, {
    "type": "proposition",
    "titre": "Cas d'égalité (exponentielle complexe)",
    "hypotheses": "Soit $(z,z') \\in \\C^2$",
    "resultat": "On a $e^z = e^{z'}$ si et seulement si $\\Re(z) = \\Re(z')$ et $\\Im(z) = \\Im(z')\\mod[2\\pi]$, autrement dit, si $z-z' \\in 2i\\pi\\Z$.",
    "id": 243
}, {
    "type": "proposition",
    "titre": "Recherche de l'image réciproque",
    "hypotheses": "Soit $a \\in \\C^2$",
    "resultat": "<ul><li>si $a = 0$, l'équation $e^z=a$ n'a pas de solutions</li> <li>si $a \\neq 0$, l'équation $e^z = a$ a une inftyité de solutions, décrites par : <br/> $\\Re(z) = \\ln(|a|)$  et  $\\Im(z) \\equiv \\arg(a)[2\\pi]$</li></ul>",
    "id": 244
}, {
    "type": "definition",
    "titre": "Racines n-ièmes, groupe $\\bb{U}_n$",

    "resultat": "<ul><li>Soit $n \\in \\N^*$ et $z\\in\\Z$. Une racine n-ième de $z$ est une racine (complexe) du polynôme $X^n - z$, donc un nombre complexe $\\omega$ tel que $\\omega^n=z$</li> <li>Une racine n-ième de l'unité est une racine n-ième de 1</li> <li>L'ensemble des racines n-ième de l'unité est noté $\\bb{U}_n$.</li></ul>",
    "id": 245
}, {
    "type": "proposition",
    "titre": "Explicitation des racines de l'unité",

    "resultat": "Le groupe $\\bb{U}_n$ des racines n-ièmes de l'unité est constitué de $n$ éléments deux à deux distincts et donnés par : <br/> $$\\bb{U}_n = \\{ \\omega_k = e^{i\\frac{2\\pi k}{n}}, k \\in [\\![0, n-1]\\!] \\}$$",
    "id": 246
}, {
    "type": "proposition",
    "titre": "Racines n-ième de $z$",
    "hypotheses": "Soit $z = re^{i\\theta}$ un nombre complexe",
    "resultat": "<ol><li>Une racine n-ième particulière de $z$ est $z_0 = \\sqrt[n]{r}\\times e^{i\\frac{\\theta}{n}}$</li> <li>$z$ possède exactement $n$ racines n-ièmes, données par : <br/> $\\xi_k = z_0\\omega, \\omega \\in \\bb{U}_n$, <br/>où $\\omega_0, \\ldots, \\omega_{n-1}$ sont les racines n-ièmes de l'unité</li> <li>Ainsi, pour $z = re^{i\\theta}$, on obtient la description explicite des racines n-ièmes : <br/> $$\\xi_k = \\sqrt[n]{r}\\times e^{i\\frac{\\theta + 2k\\pi}{n}}, k \\in [\\![0, n-1]\\!]$$ </li></ol> <br/> <img class=\"imgc\" src=\"res/n_roots.png\" />",
    "id": 247
}, {
    "type": "proposition",
    "titre": "$$\\sum_{i=0}^{n-1}\\omega^i$$",
    "hypotheses": "Soit $\\omega \\in \\bb{U}_n \\backslash \\{1\\}.$",
    "resultat": "$$\\sum_{i=0}^{n-1}\\omega^i = 0$$",
    "id": 248
}, {
    "type": "corollaire",
    "titre": "Somme des racines n-ièmes de l'unité",
    "hypotheses": "Soit $n \\in \\N \\backslash \\{1\\}.$",
    "resultat": "$$\\sum_{\\omega \\in \\bb{U}_n} \\omega = 0$$",
    "id": 249
}, {
    "type": "corollaire",
    "titre": "Somme des racines n-ième de $z$",
    "hypotheses": "Soit $n \\geqslant 2$, et $\\{\\xi_0, \\ldots, \\xi_{n-1}\\}$ l'ensemble des racines n-ièmes de $z$",
    "resultat": "$$\\sum_{k=0}^{n-1} \\xi_k = 0$$",
    "id": 250
}, {
    "type": "definition",
    "titre": "Le complexe $j$",

    "resultat": "On note $j$ la racine cubique de l'unité $j = e^{i\\frac{2\\pi}{3}} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$.",
    "id": 251
}, {
    "type": "proposition",
    "titre": "Propriétés de j",

    "resultat": "<ol><li>$j^3 = 1$, donc $j^n = j^r$, où $r$ est le reste de la division de $n$ par $3$</li> <li>$\\ol{j\\ } = j^2$</li> <li>$j^2 + j + 1 = 0$</li></ol>",
    "id": 252
}, {
    "type": "proposition",
    "titre": "Racines 6-ièmes de 1",

    "resultat": "Les racines 6-ièmes de 1 sont, par ordre croissant d'arguments positifs : <br/> $1, -j^2, j, -1, j^2, -j$",
    "id": 253
}, {
    "type": "methode",
    "titre": "Recherche de racines carrées sous forme algébrique",
    "hypotheses": "Soit $z=a+ib$ un nombre complexe sous forme algébrique $(a, b \\in \\R)$.",
    "resultat": "Pour trouver les racines carrées sous forme algébrique : <br/> <ol> <li>Considérer une racine $z'=c+id$</li> <li>Identifier les parties imaginaires et réelles dans l'égalité $(z')^2 = z$ : en retenir essentiellement la valeur de $c^2 - d^2$ et le signe de $cd$</li> <li>Donner l'égalité des modules de $(z')^4$ et de $z^2$. Cela donne la valeur de $c^2+d^2$</li> <li>Résoudre le système en $c^2$ et $d^2$ donné par les équations ci-dessus.</li> <li>Des quatres solutions pour le couple $(c,d)$ garder les deux seules qui donnent le bon signe de $cd$</li> </ol>",
    "id": 254
}, {
    "type": "definition",
    "titre": "Affixes",

    "resultat": "<ol><li>L'affixe d'un point $(a,b)\\in\\R^2$ est le complexe $z_A = a+ib$</li> <li>L'affixe d'un vecteur $\\vec{u} =\\!\\binom{a}{b}$ de $\\R^2$ est le complexe $z_{\\vec{u}} = a+ib$</li></ol>",
    "id": 255
}, {
    "type": "proposition",
    "titre": "Affixe d'un vecteur défini par un bipoint",
    "hypotheses": "Soient $A$ et $B$ deux points d'affixe $z_A$ et $z_B$.",
    "resultat": "$z_{\\vec{AB}} = z_B - z_A$",
    "id": 256
}, {
    "type": "proposition",
    "titre": "Norme d'un vecteur",
    "hypotheses": "Soit $\\vec{u}$ un vecteur de $\\R^2$ d'affixe $z_{\\vec{u}}$",
    "resultat": "$||\\vec{u}|| = |z_{\\vec{u}}|$",
    "id": 257
}, {
    "type": "proposition",
    "titre": "Interprétation géométrique de $\\frac{b-a}{c-a}$",
    "hypotheses": "Soient $a$, $b$ et $c$ trois complexes, et $A$, $B$ et $C$ les points de $\\R^2$ d'affixe $a$, $b$ et $c$.",
    "resultat": "$$\\arg{\\frac{b-a}{c-a}} = (\\vec{AC}, \\vec{AB})$$",
    "id": 258
}, {
    "type": "proposition",
    "titre": "Caractérisation de l'alignement et de l'orthogonalité",
    "hypotheses": "Soient $A$, $B$ et $C$ trois points distincts, d'affixes $a$, $b$ et $c$.",
    "resultat": "<ol><li>$A$, $B$ et $C$ sont alignés si et seulement si $\\frac{b-a}{c-a} \\in \\R$</li> <li>$(AB) et (AC)$ sont perpendiculaires si et seulement si $\\frac{b-a}{c-a} \\in i\\R$</li></ol>",
    "id": 259
}, {
    "type": "proposition",
    "titre": "Interprétation complexe des transformations du plan",
    "hypotheses": "Soientt $\\vec{u}$ un vecteur du plan d'affixe $z_u$, $A$ un point du pla, d'affixe $z_A$, $\\theta$ et $\\lambda$ des réels, et $D$ une droite passant par le point $A$ et de vecteur directeur $\\vec{u}$",
    "resultat": "<ol><li>La translation de vecteur $\\vec{u}$ correspond dans $\\C$ à la fonction $z \\rightarrow z + z_u$</li> <li>La rotation de centre $A$ et d'angle $\\theta$ (dans le sens trigonométrique, ou direct) correspond dans $\\C$ à la fonction $z \\rightarrow z_A + e^{i\\theta}(z-z_A)$</li> <li>L'homothétie de centre $A$ et de rapport $\\lambda$ correspond dans $\\C$ à la fonction $z \\rightarrow z_A + \\lambda(z-z_A)$</li> <li>La symétrie orthogonale d'axe $D$ (ou reflexion d'axe $D$) est donnée par la fonction $z\\rightarrow z_u^2 (\\ol{z\\ } - \\ol{z_A}) + z_A$</li></ol>",
    "id": 260
}, {
    "type": "texte",
    "titre": "rotation d'angle $\\frac{\\pi}{2}$(Cas particulier)",

    "resultat": "La rotation d'angle $\\frac{\\pi}{2}$ se traduit par une multiplication par $i$ (s'en souvenir dans des contextes d'orthogonalité !)",
    "id": 261
}, {
    "type": "texte",
    "titre": "rotation d'angle $\\frac{\\pi}{3}$",

    "resultat": "La rotation d'angle $\\frac{\\pi}{3}$ se traduit par la multiplication par $j$.",
    "id": 262
}, {
    "type": "texte",
    "titre": "rotation d'angle $\\frac{\\pi}{6}$",

    "resultat": "La rotation d'angle $\\frac{\\pi}{6}$ se traduit par la multiplication par $-\\ol{j\\ } = -j^2$.",
    "id": 263
}, {
    "type": "theoreme",
    "titre": "Interprétation des transformations affines de $\\C$",
    "hypotheses": "Soit $\\varphi : z \\rightarrow ax+b, a \\neq 0$ ",
    "resultat": "<ul><li>Si $a=1$, $\\varphi$ représente une translation</li> <li>Si $a = \\lambda e^{i\\theta} \\neq 1$, il existe un point $C$ tel que $\\varphi$ représente la composée d'une rotation d'angle $\\theta$ de centre $C$ et d'une homothétie de rapport $\\lambda$ de même centre $C$.</li></ul>",
    "id": 264
}, {
    "type": "definition",
    "titre": "Isométries et similitudes",
    "hypotheses": "Soit $F: \\R^2 \\longrightarrow R^2$ une application.",
    "resultat": "<ol> <li>On dit que $F$ est une isométrie affine si $F$ conserve les longueurs, donc si pour tout $(A, B) \\in (\\R^2)^2$, $||F(A)F(B)|| = ||AB||$. Cela se traduit par une application $\\varphi: \\C \\longrightarrow \\C$ vérifiant $|\\varphi(z_2) - \\varphi(z_1)| = |z_2 - z_1|$, pour tous $z_1$ et $z_2$</li> <li>On dit que $F$ est une isométrie vectorielle si $F$ est une isométrie affine telle que $F(O) = O$, où $O = (0,0)$</li> <li>On dit que $F$ est une similitude affine s'il existe $\\lambda \\in \\R_+^*$ tel que pour tout $(A, B) \\in (\\R^2)^2$, $||f(A)f(B)|| = \\lambda||AB||$, ce qui se traduit par $|\\varphi(z_2) - \\varphi(z_1)| = \\lambda|z_2 - z_1|$</li> <li>On dit que $F$ est une similitude vectorielle si $F$ est une similitude affine telle que $F(O) = O$</li> </ol>",
    "id": 265
}, {
    "type": "theoreme",
    "titre": "Les $z\\rightarrow az + b$ ou $z\\rightarrow a\\ol{z\\ }+b$",

    "resultat": "Les applications $z\\rightarrow az + b$ ou $z\\rightarrow a\\ol{z\\ }+b$ correspondent à des similitudes, qui sont des isométries si de plus $|a| = 1$",
    "id": 266
}, {
    "type": "proposition",
    "titre": "Caractérisation des droites",

    "resultat": "La droite passant par $A$ d'affixe $a$ et $B$ d'affixe $b$ est l'ensemble constitué des points $M$ d'affixe $z$ tels que l'une des propriétés équivalentes suivantes soit vérifié : <br/> <ol><li>il existe $t \\in \\R$ tel que $z = (1-t)a + tb$</li> <li>$z=a$, ou $z\\neq a$ et $\\arg(z-a) \\equiv \\arg(b-a) [\\pi]$</li> <li>$\\frac{z-a}{b-a} \\in \\R$</li></ol>",
    "id": 267
}, {
    "type": "proposition",
    "titre": "Caractérisation des cercles",

    "resultat": "Un sous ensemble $C$ de $\\C$ est un cercle éventuellement vide si et seulement si il existe un complexe $\\alpha$ et un réel $\\beta$ tels que $C$ soit l'ensemble des points d'affixe $z$ vérifiant : <br/> $z \\times \\ol{z\\ } + \\alpha \\times z + \\ol{\\alpha}\\times \\ol{z\\ } + \\beta = 0$<br/>L'ensemble $C$ est dans ce cas non vide si et seulement si $\\beta \\leqslant \\alpha\\ol{\\alpha}$ et dans ce cas, son centre est le point d'affixe $-\\ol{\\alpha}$ et son rayon est $r = \\sqrt{\\alpha\\ol{\\alpha} - \\beta}$",
    "id": 268
}];

const quiz_trigo = [{
    "type": "definition",
    "titre": "Cercle trigonométrique",

    "resultat": "Le cercle trigonométrique (ou cercle unité) est le sous ensemble de $\\C$, noté $\\bb{U}$ (comme \"unité\"), constitué des nombres complexes de module $1$ : <br/> $\\bb{U} = \\{z \\in \\C, |z| = 1\\}$. <br/> Le cercle trigonométrique correspond dans l'interprétation géométrique des complexes au cercle de centre $(0, 0)$ et de rayon $1$, de $\\R^2$. <br/> <img style=\"background-color:white!important;\" class=\"imgc\" src=\"res/cercle_trigo.svg\" />",
    "id": 128
}, {
    "type": "definition",
    "titre": "Fonctions trigonométriques",
    "hypotheses": "Soit $x \\in \\R$.",
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
    "hypotheses": "Soit $x \\in \\R$.",
    "resultat": "La contangente est définie, pour tout $x$ tel que $\\sin(x) \\neq 0$, par : <br/> $\\text{cotan}(x) = \\frac{\\cos(x)}{\\sin(x)}.$",
    "id": 131
}, {
    "type": "proposition",
    "titre": "Domaines de définition des fonctions trigonométriques",

    "resultat": "<ol><li>Les fonctions sin et cos sont définies sur $\\R$</li> <li>La fonction tan est définie sur $\\R\\backslash \\{\\frac{\\pi}{2} + n\\pi, n \\in \\Z\\}$</li> <li>La fonction cotan est définie sur $\\R\\backslash \\{n\\pi, n \\in \\Z\\}$.</li></ol>",
    "id": 132
}, {
    "type": "proposition",
    "titre": "Périodicité de sin et cos",

    "resultat": "sin et cos sont $2\\pi$-périodiques",
    "id": 133
}, {
    "type": "proposition",
    "titre": "Parité de sin et cos",

    "resultat": "sin est impaire et cos est paire",
    "id": 134
}, {
    "type": "proposition",
    "titre": "$\\cos(\\pi+x)$",

    "resultat": "$\\cos(\\pi+x) = -\\cos(x)$",
    "id": 135
}, {
    "type": "proposition",
    "titre": "$\\sin(\\pi+x)$",

    "resultat": "$\\sin(\\pi+x) = -\\sin(x)$",
    "id": 136
}, {
    "type": "proposition",
    "titre": "$\\cos(\\pi-x)$",

    "resultat": "$\\cos(\\pi-x) = -\\cos(x)$",
    "id": 137
}, {
    "type": "proposition",
    "titre": "$\\sin(\\pi-x)$",

    "resultat": "$\\sin(\\pi-x) = \\sin(x)$",
    "id": 138
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{2}-x)$",

    "resultat": "$\\cos(\\frac{\\pi}{2}-x) = \\sin(x)$",
    "id": 139
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{2}-x)$",

    "resultat": "$\\sin(\\frac{\\pi}{2}-x) = \\cos(x)$",
    "id": 140
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{2}+x)$",

    "resultat": "$\\cos(\\frac{\\pi}{2}+x) = -\\sin(x)$",
    "id": 141
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{2}+x)$",

    "resultat": "$\\sin(\\frac{\\pi}{2}+x) = \\cos(x)$",
    "id": 142
}, {
    "type": "proposition",
    "titre": "Périodicité de tan et cotan",

    "resultat": "tan et cotan sont $\\pi$-périodiques",
    "id": 143
}, {
    "type": "proposition",
    "titre": "Parité de tan et cotan",

    "resultat": "tan et cotan sont impaires",
    "id": 144
}, {
    "type": "proposition",
    "titre": "$\\sin(0)$",

    "resultat": "$\\sin(0) = 0$",
    "id": 145
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{6})$",

    "resultat": "$\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$",
    "id": 146
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{4})$",

    "resultat": "$\\sin(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$",
    "id": 147
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{3})$",

    "resultat": "$\\sin(\\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$",
    "id": 148
}, {
    "type": "proposition",
    "titre": "$\\sin(\\frac{\\pi}{2})$",

    "resultat": "$\\sin(\\frac{\\pi}{2}) = 1$",
    "id": 149
}, {
    "type": "proposition",
    "titre": "$\\cos(0)$",

    "resultat": "$\\cos(0) = 1$",
    "id": 150
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{6})$",

    "resultat": "$\\cos(\\frac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}$",
    "id": 151
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{4})$",

    "resultat": "$\\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$",
    "id": 152
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{3})$",

    "resultat": "$\\cos(\\frac{\\pi}{3}) = \\frac{1}{2}$",
    "id": 153
}, {
    "type": "proposition",
    "titre": "$\\cos(\\frac{\\pi}{2})$",

    "resultat": "$\\cos(\\frac{\\pi}{2}) = 0$",
    "id": 154
}, {
    "type": "proposition",
    "titre": "$\\tan(0)$",

    "resultat": "$\\tan(0) = 0$",
    "id": 155
}, {
    "type": "proposition",
    "titre": "$\\tan(\\frac{\\pi}{6})$",

    "resultat": "$\\tan(\\frac{\\pi}{6}) = \\frac{1}{\\sqrt{3}}$",
    "id": 156
}, {
    "type": "proposition",
    "titre": "$\\tan(\\frac{\\pi}{4})$",

    "resultat": "$\\tan(\\frac{\\pi}{4}) = 1$",
    "id": 157
}, {
    "type": "proposition",
    "titre": "$\\tan(\\frac{\\pi}{3})$",

    "resultat": "$\\tan(\\frac{\\pi}{3}) = \\sqrt{3}$",
    "id": 158
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(\\frac{\\pi}{6})$",

    "resultat": "$\\text{cotan}(\\frac{\\pi}{6}) = \\sqrt{3}$",
    "id": 159
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(\\frac{\\pi}{4})$",

    "resultat": "$\\text{cotan}(\\frac{\\pi}{4}) = 1$",
    "id": 160
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(\\frac{\\pi}{3})$",

    "resultat": "$\\text{cotan}(\\frac{\\pi}{3}) = \\frac{1}{\\sqrt{3}}$",
    "id": 161
}, {
    "type": "proposition",
    "titre": "$\\text{cotan}(\\frac{\\pi}{2})$",

    "resultat": "$\\text{cotan}(\\frac{\\pi}{2}) = 0$",
    "id": 162
}, {
    "type": "proposition",
    "titre": "Identité remarquable ou théorème de Pythagore",

    "resultat": "Pour tout $x \\in \\R$, $\\sin^2(x) + \\cos^2(x) = 1$",
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
    "resultat": "$\\tan(2a) = \\frac{2\\tan(a)}{1-\\tan^2(a)}$",
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
    "hypotheses": "Soit $a \\in \\R$",
    "resultat": "$\\cos^2(a) = \\frac{1 + \\cos^2(2a)}{2}$",
    "id": 175
}, {
    "type": "proposition",
    "titre": "$\\sin^2(a)$",
    "hypotheses": "Soit $a \\in \\R$",
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
}, {
    "type": "definition",
    "titre": "Exponentielle complexe",

    "resultat": "On définit l'exponentielle complexe sur les nombres imaginaires purs par : <br/> $\\forall \\theta \\in \\R, e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$",
    "id": 225
}, {
    "type": "proposition",
    "titre": "Surjectivité de $e^{i\\theta}$",

    "resultat": "La fonction $\\theta \\rightarrow e^{i\\theta}$ est surjective de $\\R$ sur $\\bb{U}$. Plus précisément, c'est une bijection de tout intervalle $]\\alpha, \\alpha + 2\\pi]$ sur $\\bb{U}$, ainsi que de tout intervalle $[\\alpha, \\alpha+2\\pi[$ sur $\\bb{U}$",
    "id": 226
}, {
    "type": "corollaire",
    "titre": "Propriété de la fonction définie par $(r, 0) \\rightarrow re^{i\\theta}$",

    "resultat": "La fonction de $\\R_+^* \\times ]-\\pi, \\pi]$, sur $\\C^*$ définie par $(r, 0) \\rightarrow re^{i\\theta}$",
    "id": 227
}, {
    "type": "definition",
    "titre": "Forme trigonométrique de l'exponentielle complexe",

    "resultat": "<ul> <li>Tout nombre complexe non nul $z$ s'écrit sous la forme $z = re^{i\\theta}$ appelé forme trigonométrique</li> <li>$r$ est unique, égal au module de $z$.</li> <li>$\\theta$ est unique modulo $2\\pi$, appelé argument de $z$.</li> <li>L'unique argument $\\theta$ de l'intervalle $]-\\pi, \\pi]$ est appelé argument principal de $z$, et est noté $\\arg(z)$</li></ul>",
    "id": 228
}, {
    "type": "proposition",
    "titre": "Formules d'Euler",
    "hypotheses": "Soit $\\theta \\in \\R$",
    "resultat": "$\\cos(\\theta) = \\frac{e^{i\\theta}+e^{-i\\theta}}{2}$ et $\\sin(\\theta) = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$",
    "id": 229
}, {
    "type": "theoreme",
    "titre": "Formules trigonométriques d'addition",

    "resultat": "Pour tout $(\\theta, \\theta') \\in \\R^2$, $e^{i(\\theta+\\theta')} = e^{i\\theta}e^{i\\theta'}$",
    "id": 230
}, {
    "type": "corollaire",
    "titre": "Formule de De Moivre",

    "resultat": "Pour tout $\\theta \\in \\R$ et $n \\in \\N$ : <br/> $e^{in\\theta} = (e^{i\\theta})^n$, soit : $\\cos(n\\theta) + i\\sin(n\\theta) = (\\cos(\\theta) + i\\sin(\\theta))^n$",
    "id": 231
}, {
    "type": "methode",
    "titre": "Principe de symétrisation des arguments",

    "resultat": "Cette méthode permet d'exprimer une somme ou une différence de deux exponentielles à l'aide des fonctions trigonométriques. C'est notamment intéressant pour obtenir la partie réelle et la partie imaginaire sous forme factorisée.<br/> Soit $a$ et $b$ deux réels. Alors : <ul><li>$$e^{ia} + e^{ib} = e^{i\\frac{a+b}{2}}(e^{i\\frac{a-b}{2}} + e^{-i\\frac{a-b}{2}}) = 2\\cos(\\frac{a-b}{2})e^{i\\frac{a+b}{2}}$$</li> <li>$$e^{ia} - e^{ib} = e^{i\\frac{a+b}{2}}(e^{i\\frac{a-b}{2}} - e^{-i\\frac{a-b}{2}}) = 2i\\sin(\\frac{a-b}{2})e^{i\\frac{a+b}{2}}$$</li></ul>",
    "id": 232
}, {
    "type": "methode",
    "titre": "Linéarisation",

    "resultat": "Le but est d'exprimer $\\cos^n(\\theta)$ ou $\\sin^n(\\theta)$ en fonction de $\\cos(k\\theta)$ et $\\sin(k\\theta)$, $k \\in \\N$. Principe du calcul : <ol><li>Exprimer $\\cos(\\theta)$ ou $\\sin(\\theta)$ à l'aide des formules d'Euler.</li> <li>Développer à l'aide de la formule du binôme de Newton</li> <li>Regrouper dans le développement les exponentielles conjuguées et les réexprimer à l'aide des fonctions sin et cos en utilisant la formule d'Euler dans l'autre sens.</li></ol>",
    "id": 233
}, {
    "type": "methode",
    "titre": "\"délinéarisation\", ou les polynômes de Tchébychev",

    "resultat": "Cela consiste à écrire $\\cos(n\\theta)$ ou $\\sin(n\\theta)$ en fonction des puissances de $\\cos(x)$ et/ou $\\sin(x)$. Le principe du calcul : <ol><li>On utilise la formule de De Moivre pour exprimer $\\cos(n\\theta)$ ou $\\sin(n\\theta)$ comme une partie réelle ou imaginaire de $\\cos(\\theta)+i\\sin(\\theta))^n$</li> <li>On développe cette expression à l'aide de la formule du binôme de Newton</li> <li>On utilise l'identité remarquable $\\sin^2(x)+\\cos^2(x) = 1$ pour exprimer la partie réelle (ou imaginaire) sous forme d'un polynôme en $\\cos(x)$(pour $\\cos(n\\theta)$) ou le produit de $\\cos(x)$ par un polynôme en $\\sin(x)$(pour $\\sin(n\\theta)$)</li></ol>",
    "id": 234
}, {
    "type": "methode",
    "titre": "Sommes de sin et cos",

    "resultat": "Le principe général est d'écrire une somme de sin (ou de cos) sous la forme de la partie imaginaire (ou réelle) d'une somme exponentielles. On peut alors souvent exploiter le caractère géométrique du terme $e^{in\\theta}$, par utilisation des propriétés des sommes géométriques, ou de la formule du binôme, etc...",
    "id": 235
}, {
    "type": "texte",
    "titre": "Exemple du noyau de Dirichlet",
    "hypotheses": "Soit $a$ et $b$ deux réels, avec $b\\not\\equiv0[2\\pi]$.",
    "resultat": "$$\\text{Soit } C = \\cos(a) + \\cos(a+b) + \\cos(a+2b) + \\ldots + \\cos(a+nb) = \\sum_{k=0}^n\\cos(a+kb)$$<br/>$$\\text{Alors : } C = \\cos(a + \\frac{bn}{2}) \\times \\frac{\\sin(\\frac{n+\\! 1}{2}\\times b)}{\\sin(\\frac{b}{2})}$$",
    "id": 236
}];

const quiz_combi = [{
    "type": "definition",
    "titre": "Définition de la cardinalité selon Frege",

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

    "resultat": "Tout sous ensemble $F$ de $[\\![1, n]\\!]$ peut être mis en bijection avec un ensemble $[\\![1, m]\\!]$",
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
    "resultat": "Il existe un unique entier $n$ tel qu'il existe une bijection $f: [\\![1,n]\\!] \\rightarrow E$. L'entier $n$ est appelé cardinal de $E$, et noté $|E|$, ou Card($E$).",
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

    "resultat": "Si $a \\subset B$, alors $|\\text{C}_BA|$ = |B| - |A|",
    "id": 195
}, {
    "type": "corollaire",
    "titre": "Cardinal d'un sous-ensemble",

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
    "resultat": "<ol><li>$|A \\times B| = |A| \\times |B|$</li> <li>Plus généralement, $|A_1 \\times ... \\times A_n| = \\prod_{i=1}^n|A_i|$</li></ol>",
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

    "resultat": "Une p-liste d'éléments de $F$ (ou p-uplet) est un élément ($x_1$, ..., $x_p$) de $F^p$.",
    "id": 205
}, {
    "type": "proposition",
    "titre": "Nombre de p-liste",

    "resultat": "Le nombre de p-listes d'éléments de $F$ est $|F|^p$",
    "id": 206
}, {
    "type": "proposition",
    "titre": "Cardinal de l'ensemble des parties",

    "resultat": "$|\\mathcal{P}(E)| = 2^{|E|}$",
    "id": 207
}, {
    "type": "lemme",
    "titre": "Lemme du berger",
    "hypotheses": "Soit $f: E \\longrightarrow F$ une application surjective. <br/> On suppose qu'il existe un entier $k \\in \\N^*$ tel que pour tout $y \\in F$, $|f^{-1}(y)| = k$ (tous les éléments de $F$ ont le même nombre $k$ d'antécédents).",
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

    "resultat": "Le coefficient binomial $\\binom{n}{k}$ est le nombre de parties à $k$ éléments de $[\\![1,n]\\!]$",
    "id": 212
}, {
    "type": "proposition",
    "titre": "Sens général du coefficient binomial",

    "resultat": "Le coefficient binomial $\\binom{n}{k}$ est plus généralement le nombre de sous-ensemble de cardinal $k$ de n'importe quel ensemble $E$ de cardinal $n$.",
    "id": 213
}, {
    "type": "proposition",
    "titre": "Expression factorielle du coefficient binomial",

    "resultat": "Pour $k \\in [\\![0, n]\\!]$, $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$",
    "id": 214
}, {
    "type": "proposition",
    "titre": "Propriétés du coefficient binomial",
    "hypotheses": "Soit $(n,k) \\in \\Z^2$.",
    "resultat": "<ol> <li>$\\binom{n}{k} = \\binom{n}{n-k}$ (symétrie)</li> <li>$k\\binom{n}{k} = n\\binom{n-1}{k-1}$ (formule du comité-président)</li> <li>si $(n,k) \\neq (-1, -1)$, $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$</li> </ol>",
    "id": 215
}, {
    "type": "theoreme",
    "titre": "Formule du binôme",

    "resultat": "Pour $n \\in \\N$, $$(a+b)^n = \\sum_{k=0}^n\\binom{n}{k}a^kb^{n-k}$$",
    "id": 216
}, {
    "type": "methode",
    "titre": "Principe fondamental du dénombrement",

    "resultat": "Pour montrer que deux ensembles ont le même cardinal, il suffit de construire une bijection entre eux. Ainsi, pour déterminer le cardinal d'un ensemble, on le met souvent en bijection avec un ensemble \"de référence\" dont on connaît le cardinal.",
    "id": 217
}, {
    "type": "methode",
    "titre": "Démonstration combinatoire d'une formule",

    "resultat": "<ol><li>Trouver un modèle adapté de la formule, autrement dit un ensemble d'objets dont le dénombrement fournira un des membres de l'égalité. Pour cela, il est préférable de s'aider du membre le plus simple de l'égalité</li> <li>Dénombrer cet ensemble de deux façons différentes. Souvent, on procède d'une part à un dénombrement direct, et d'autre part à un dénombrement après avoir effectué le tri (de façon formelle, cela revient à définir une partition de l'ensemble). Le résultat d'un dénombrement par tri se traduit par une somme.</li> <li>Evidemment, cette méhode n'est adaptée qu'à des formules portant sur des nombres entiers, si possible positifs. Il est parfois possible de se ramener à cette situation par un prétraitement de la formule à démontrer.</li></ol>",
    "id": 218
}, {
    "type": "proposition",
    "titre": "Formule de Pascal (coefficients binomiaux)",

    "resultat": "$$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$$",
    "id": 219
}, {
    "type": "proposition",
    "titre": "$$\\sum_{k=0}^n \\binom{n}{k}$$",

    "resultat": "$$\\sum_{k=0}^n \\binom{n}{k} = 2^n$$",
    "id": 220
}, {
    "type": "proposition",
    "titre": "Formule de Vandermonde (coefficients binomiaux)",

    "resultat": "$$\\sum_{k=0}^n\\binom{N}{k}\\binom{M}{n-k} = \\binom{N+M}{n}$$",
    "id": 221
}, {
    "type": "proposition",
    "titre": "Formule de sommation sur une colonne",

    "resultat": "$$\\sum_{k=0}^p\\binom{n+k}{n} = \\binom{n+p+1}{n+1}$$",
    "id": 222
}, {
    "type": "proposition",
    "titre": "$$\\sum_{k=0}^n = \\binom{k}{N}\\binom{n-k}{M}$$",

    "resultat": "$$\\sum_{k=0}^n = \\binom{k}{N}\\binom{n-k}{M} = \\binom{n+1}{M+N+1}$$",
    "id": 223
}, {
    "type": "methode",
    "titre": "simplifier un $(-1)^n$ associé à un coefficient binomial",

    "resultat": "Remarquez qu'un signe $(-1)^n$ associé à un coefficient binomial correspond souvent à une comparaison de parités de cardinaux. On peut passer d'un cardinal pair à un cardinal impair, et vice-versa, en \"allumant ou éteignant\" un élément fixé à l'avance suivant qu'il est déjà ou non dans notre ensemble (plus précisement, il s'agit de l'opération $X \\rightarrow X \\Delta \\{x\\}$.)",
    "id": 224
}];

const quiz_limites = [{
        "type": "remarque",
        "titre": "Adhérence",
        "resultat": "Si $X$ est un sous(ensemble quelconque de $\\R$, on peut considérer la limite en un point $a$ de l'adhérence $\\ol{X}$ de $X$, défini comme étant le plus petit fermé contenant $X$, ou de façon équivalente, l'ensemble des points $x$ pouvant être approché d'aussi près qu'on veut par des points de $X$ (i.e. tout voisinage de $x$ rencontre $X$)",
        "id": 269
    }, {
        "type": "definition",
        "titre": "Limite réelle lorsque $x$ tend vers $a$",
        "hypotheses": "Soit $a \\in \\ol{X} \\cap \\R$",
        "resultat": "Soit $b \\in \\R$. On dit que $f(x)$ tend vers $b$ lorsque $x$ tend vers $a$ si :    $\\forall \\varepsilon \\gt 0, \\exists \\eta \\gt 0, \\forall x \\in X, |x − a| \\leqslant \\eta \\implies |f(x)−b| \\leqslant \\varepsilon$",
        "id": 270
    }, {
        "type": "definition",
        "titre": "Limite $+\\infty$ lorsque $x$ tend vers $a$",
        "hypotheses": "Soit $a \\in \\ol{X} \\cap \\R$",
        "resultat": "On dit que $f(x)$ tend vers $+\\infty$ lorsque $x$ tend vers $a$ si :    $\\forall A \\in \\R, \\exists \\eta \\gt 0, \\forall x \\in X, |x - a| \\leqslant \\eta \\implies f(x) \\geqslant A$",
        "id": 271
    }, {
        "type": "definition",
        "titre": "Limite $-\\infty$ lorsque $x$ tend vers $a$",
        "hypotheses": "Soit $a \\in \\ol{X} \\cap \\R$",
        "resultat": "On dit que $f(x)$ tend vers $-\\infty$ lorsque $x$ tend vers $a$ si :    $\\forall A \\in \\R, \\exists \\eta \\gt 0, \\forall x \\in X, |x - a| \\leqslant \\eta \\implies f(x) \\leqslant A$",
        "id": 272
    }, {
        "type": "proposition",
        "titre": "Limite en un point du domaine",
        "hypotheses": "Soit $a \\in X$",
        "resultat": "Si $f(x)$ admet une limite en $a$, alors cette limite est nécessairement égale à $f(a)$.",
        "id": 273
    }, {
        "type": "definition",
        "titre": "Limites dans des espaces métriques",
        "hypotheses": "Soit $(E, d)$ et $(F, d')$ deux espaces métriques, et $X \\subset E$. Soit $f : X \\longrightarrow F$. <br/> Soit $a \\in \\ol{X}$, et $b \\in F$.",
        "resultat": "Comme dans le cas de $\\R$, on peut considérer l'adhérence $\\ol{X}$ de $X$ dans $E$. On dit que $f$ admet une limite $b$ en $a$ si : <br/>$\\forall \\varepsilon \\gt 0, \\exists \\eta \\gt 0, \\forall x \\in X, d(x, a) \\lt \\eta \\implies d'(f(x), b) \\lt \\varepsilon$",
        "id": 274
    },
    //  {
    //     "type": "definition",
    //     "titre": "Limite caractérisée par deux espaces métriques",
    //     "hypotheses": "Soit $(E,d)$ et $(F, d')$ deux espaces métriques, et $X \\subset E$. Soit $f: X \\longrightarrow F$. Comme dans le cas de $\\R$, on peut considérer l'adhérence $\\ol{x}$ de $X$ dans $E$. Soit $a \\in \\ol{X}$ et $b \\in F$.",
    //     "resultat": "On dit que $f$ admet une limite $b$ en $a$ si : <br/> $\\forall \\varepsilon \\gt 0$, $\\exists \\eta \\gt 0$, $\\forall x \\in X$, $d(x,a) \\lt \\eta$ $\\implies$ $d'(f(x), b) \\lt \\varepsilon$.",
    //     "id": 275
    // },
    {
        "type": "definition",
        "titre": "limite $b$ quand $x$ tend vers $+\\infty$",
        "hypotheses": "On suppose que $+\\infty$ est adhérent à $X$ (i.e. $X$ est non majoré).<br/>Soit $b \\in \\R$.",
        "resultat": "On dit que $f(x)$ tend vers $b$ lorsque $x$ tend vers $+\\infty$ si : <br/> $\\forall \\epsilon \\gt 0$, $\\exists B \\in \\R$, $\\forall x \\in X$, $x \\geqslant B$ $\\implies$ $|f(x)-b| \\leqslant \\epsilon$",
        "id": 276
    }, {
        "type": "definition",
        "titre": "limite $+\\infty$ quand $x$ tend vers $+\\infty$",
        "hypotheses": "On suppose que $+\\infty$ est adhérent à $X$ (i.e. $X$ est non majoré).",
        "resultat": "On dit que $f(x)$ tend vers $+\\infty$ lorsque $x$ tend vers $+\\infty$ si :<br/>$\\forall A \\in \\R$, $\\exists B \\in \\R$, $\\forall x \\in X$, $x \\geqslant B$ $\\implies$ $f(x) \\geqslant A$",
        "id": 277
    }, {
        "type": "definition",
        "titre": "limite $-\\infty$ quand $x$ tend vers $+\\infty$",
        "hypotheses": "On suppose que $+\\infty$ est adhérent à $X$ (i.e. $X$ est non majoré).",
        "resultat": "On dit que $f(x)$ tend vers $-\\infty$ lorsque $x$ tend vers $+\\infty$ si :<br/>$\\forall A \\in \\R$, $\\exists B \\in \\R$, $\\forall x \\in X$, $x \\geqslant B$ $\\implies$ $f(x) \\leqslant A$",
        "id": 278
    },
    {
        "type": "definition",
        "titre": "limite $b$ quand $x$ tend vers $-\\infty$",
        "hypotheses": "On suppose que $-\\infty$ est adhérent à $X$ (i.e. $X$ est non minoré).<br/>Soit $b \\in \\R$.",
        "resultat": "On dit que $f(x)$ tend vers $b$ lorsque $x$ tend vers $-\\infty$ si : <br/> $\\forall \\epsilon \\gt 0$, $\\exists B \\in \\R$, $\\forall x \\in X$, $x \\leqslant B$ $\\implies$ $|f(x)-b| \\leqslant \\epsilon$",
        "id": 279
    }, {
        "type": "definition",
        "titre": "limite $+\\infty$ quand $x$ tend vers $+\\infty$",
        "hypotheses": "On suppose que $-\\infty$ est adhérent à $X$ (i.e. $X$ est non minoré).",
        "resultat": "On dit que $f(x)$ tend vers $+\\infty$ lorsque $x$ tend vers $-\\infty$ si :<br/>$\\forall A \\in \\R$, $\\exists B \\in \\R$, $\\forall x \\in X$, $x \\leqslant B$ $\\implies$ $f(x) \\geqslant A$",
        "id": 280
    }, {
        "type": "definition",
        "titre": "limite $-\\infty$ quand $x$ tend vers $+\\infty$",
        "hypotheses": "On suppose que $-\\infty$ est adhérent à $X$ (i.e. $X$ est non minoré).",
        "resultat": "On dit que $f(x)$ tend vers $-\\infty$ lorsque $x$ tend vers $-\\infty$ si :<br/>$\\forall A \\in \\R$, $\\exists B \\in \\R$, $\\forall x \\in X$, $x \\leqslant B$ $\\implies$ $f(x) \\leqslant A$",
        "id": 281
    }, {
        "type": "definition",
        "titre": "Voisinage de +\\infty",
        "resultat": "On dit que $V \\subset \\R$ est un voisinage de $+\\infty$ s'il existe $a \\in \\R$ tel que $]a, +\\infty[ \\subset V$",
        "id": 282
    }, {
        "type": "remarque",
        "titre": "Notation : Ensemble des voisinages de $b$",
        "resultat": "Pour $b \\in \\ol{\\R}$, on note $\\cV(b)$ l'ensemble des voisinages de $b$/",
        "id": 283
    }, {
        "type": "proposition",
        "titre": "Définition topologique des voisinages",
        "hypotheses": "Soit $V$ un sous-ensemble de $\\R$ et $b\\in \\R$.",
        "resultat": "Les propositions suivantes sont équivalentes : <ol><li>$V$ est un voisinage de $b$</li><li>Il existe $U$ un ouvert de $\\R$ tel que $b \\in U \\subset V$</li></ol>",
        "id": 284
    }, {
        "type": "theoreme",
        "titre": "Caractérisation des limites par voisinages",
        "hypotheses": "Soit $a \\in \\ol{X}$ (fini ou infini) et $b \\in \\ol{R}$",
        "resultat": "Les propositions suivantes sont équivalents : <ol> <li style=\"margin-bottom: 10px;\"><i><b>(métrique/métrique)</b></i> <br/>  $f$ admet une limite $b$ lorsque $x$ tend vers $a$</li> <li style=\"margin-bottom: 10px;\"><i><b>(métrique/topologique)</b></i><br/> $(i)$ Si $a$ est fini : $\\forall \\varepsilon \\gt 0$, $\\exists U \\in \\cV(a)$, $\\forall x \\in X$, $|x-a| \\lt 0$ $\\implies$ $f(x) \\in V$<br/>$(ii)$ Si $a = +\\infty$ : $\\forall V \\in \\cV(b)$, $\\exists A > 0$, $\\forall x \\in X$, $x \\gt A$ $\\implies$ $f(x) \\in V$ </li> <li style=\"margin-bottom: 10px;\"><i><b>(topologique/métrique)</b></i> <br/> $(i)$ Si $b$ est fini : $\\forall \\varepsilon \\gt 0$, $\\exists U \\in \\cV(a)$, $\\forall x \\in X$, $x \\in U$ $\\implies$ $|f(x)-b| \\gt \\varepsilon$ <br/> $(ii)$ si $b = +\\infty$ : $\\forall A \\gt 0$, $\\exists U \\in \\cV(a)$, $\\forall x \\in X$, $x \\in U$ $\\implies$ $f(x) \\gt A$</li> <li><i><b>(topologique/topologique)</b></i> <br/> $\\forall V \\in \\cV(b)$, $\\exists U \\in \\cV(a)$, $f(U \\cap X) \\subset V$</li> </ol>",
        "id": 284
    }, {
        "type": "proposition",
        "titre": "",
        "hypotheses": "Soit $f$ une fonction admettant une limite finie en un point $a$ de $\\ol{X}$",
        "resultat": "Alors, $f$ est bornée au voisinage de $a$.",
        "id": 285
    }, {
        "type": "definition",
        "titre": "Coïncidence de deux fonctions",
        "hypotheses": "Soit $f$ et $g$ deux fonctions définies sur $X$ et $Y$ et $a$ tel que $a \\in \\ol{X}$ et $a \\in \\ol{Y}$",
        "resultat": "On dit que $f$ et $g$ coincident au voisinage de $a$ si et seulement s'il existe un voisinage $V$ de $a$ dans $\\R$ tel que $\\X \\cap Y = Y \\cap V$ et que <br/> $\\forall x \\in X \\cap V$, $f(x) = g(x)$",
        "id": 286
    }, {
        "type": "proposition",
        "titre": "Comparaison des limites de deux fonctions coïncidant au voisinage de $a$",
        "hypotheses": "Soit $f$ et $g$ deux fonction coïncidant au voisinage d'un point $a$.",
        "resultat": "Alors, si $f$ admet une limite (finie ou infinie) en $a$, alors $g$ aussi et $\\lim\\limits_{x \\to a} f(x) = \\lim\\limits_{x \\to a} g(x)$",
        "id": 287
    }, {
        "type": "lemme",
        "titre": "Lemme de séparation",
        "hypotheses": "Soit $(x, y) \\in \\ol{R}^2$ tels que $x\\neq y$.",
        "resultat": "Alors il existe des voisinages $U$ de $x$ et $V$ de $y$ tels que $U \\cap V = \\emptyset$. <br/> Si, de plus, $x \\lt y$, on peut choisir $U$ et $V$ tels que $U \\lt V$ (dans le sens où pour tout $u \\in U$ et tout $v \\in V$, $u \\lt v$)",
        "id": 288
    }, {
        "type": "theoreme",
        "titre": "Unicité de la limite, cas réel",
        "hypotheses": "Soit $a \\in \\ol{X}$ et $f$ une fonction réelle.",
        "resultat": "Sous réserve d'existence, la limite de $f(x)$ lorsque $x$ tend vers $a$ est unique.",
        "id": 289
    }, {
        "type": "remarque",
        "titre": "Notation : Limite en $a$",
        "resultat": "En cas d'existence de la limite en $a$, on note $\\lim\\limits_{x \\to a} f(x)$ LA limite de $f(x)$ lorsque $x$ tend vers $a$.",
        "id": 290
    }, {
        "type": "remarque",
        "titre": "Notation : limite en $a$, avec restrictions",
        "hypotheses": "Soit $f$ définie sur $X$. Soit $Y$ un sous-ensemble tel que $a \\in \\ol{X \\cap Y}$.",
        "resultat": "Si la limite (finie ou infinie) en $a$ de la restriction $f_{|X\\cap Y}$ existe, on utilise la notation suivante : <br/> $\\lim\\limits_{x \\to a} f_{|X\\cap Y}(x)$ = $\\lim\\limits_{\\begin{array}{ll} x \\to a \\\\ x \\in Y \\end{array}} f(x)$<br/>Dans cette notation, il est sous entendu que $x$ doit bien sûr aussi être élément du domaine de définition $X$ de $f$.",
        "id": 291
    }, {
        "type": "definition",
        "titre": "Limite à gauche",
        "resultat": "La limite à gauche correspond au cas où $Y = ]-\\infty, a[$. On utilise l'une des notations suivantes : <br/> $\\lim\\limits_{\\begin{array}{ll} x \\to a \\\\ x \\in ]-\\infty, a[ \\end{array}} f(x)$ = $\\lim\\limits_{\\begin{array}{ll} x \\to a \\\\ x \\lt a \\end{array}} f(x)$ = $\\lim\\limits_{x \\to a^-} f(x)$ = $f(a - 0)$",
        "id": 292
    }, {
        "type": "definition",
        "titre": "Limite à droite",
        "resultat": "La limite à droite correspond au cas où $Y = ]a, +\\infty[$. On utilise l'une des notations suivantes : <br/> $\\lim\\limits_{\\begin{array}{ll} x \\to a \\\\ x \\in ]a, +\\infty[ \\end{array}} f(x)$ = $\\lim\\limits_{\\begin{array}{ll} x \\to a \\\\ x \\gt a \\end{array}} f(x)$ = $\\lim\\limits_{x \\to a^+} f(x)$ = $f(a + 0)$",
        "id": 293
    }, {
        "type": "theoreme",
        "titre": "Caractérisation de la limite par limites à gauche et à droite",
        "hypotheses": "Soit $a \\in \\ol{X}$.",
        "resultat": "La fonction $f$ admet une limite $l$ en $a$ si et seulement si, parmis les quantités $f(a_0)$, $f(a+0)$ et $f(a)$, celles qui sont envisageables existent et sont égales à $l$.",
        "id": 294
    }, {
        "type": "theoreme",
        "titre": "Régularité des fonctions monotones",
        "resultat": "Une fonction monotone admet des limites à gauche et à droite en tout point pour lequel c'est envisageable (y compris les infinis, s'ils sont adhérents au domaine).",
        "id": 295
    }, {
        "type": "proposition",
        "titre": "Composition des limites",
        "hypotheses": "Soit $f$ et $g$ deux fonctions et $a$, $b$ et $c$ des éléments de $\\ol{R}$.",
        "resultat": "Si $\\lim\\limits_{x \\to a} f(x) = b$ et $\\lim\\limits_{x \\to b} g(x) = c$, alors $g \\circ f$ admet une limite en $a$, et <br/> $\\lim\\limits_{x \\to a} g \\circ f(x) = c$.",
        "id": 296
    }, {
        "type": "definition",
        "titre": "Limite d'une fonctgion à valeurs dans $\\C$",
        "resultat": "Si $a$ est fini, $f$ admet une limite $l \\in \\C$ en $a$ si : <br/> $\\forall \\varepsilon \\gt 0$, $\\exists \\eta \\gt 0$, $\\forall x \\in X$, $|x-a| \\leqslant \\eta$ $\\implies$ $|f(x)-l| \\leqslant \\varepsilon$",
        "id": 297
    }, {
        "type": "theoreme",
        "titre": "Caractérisation de la limite d'une fonction à valeurs complexes",
        "hypotheses": "Soit $f = f_r + if_i$, où $f_r$ et $f_i$ sont à valeurs réelles (donc correspondent à la partie réelle et à la partie imaginaire de $f$).",
        "resultat": "Alors $f$ admet une limite $l$ en $a$ si et seulement si $f_r$ et $f_i$ admettent des limites en $a$ vérifiant : <br/> $\\lim\\limits_{x \\to a} f_r(x) = \\Re(l)$ et $\\lim\\limits_{x \\to a} f_i(x) = \\Im(l)$",
        "id": 298
    }, {
        "type": "corollaire",
        "titre": "Unicité de la limite, cas complexe",
        "hypotheses": "Soit $f$ une fonction de la variable réelle $a$ à valeurs dans $\\C$",
        "resultat": "La limite de $f$ en $a$, si elle existe, est unique.",
        "id": 299
    }
];

const quiz_continuite = [{
    "type": "definition",
    "titre": "Continuité",
    "hypotheses": "Soit $f$ définie sur $X$ et $a \\in X$.",
    "resultat": "On dit que $f$ est continue en $a$ si $f$ admet une limite en $a$.",
    "id": 300
}, {
    "type": "proposition",
    "titre": "Propositions équivalentes à la continuité",
    "hypotheses": "Soit $a \\in X$.",
    "resultat": "Les propriétés suivantes sont équivalents : <ol> <li>$f$ est continue en $a$</li> <li>$\\forall \\varepsilon \\gt 0$, $\\exists \\eta \\gt 0$, $\\forall x \\in X$, $|x-a| \\lt \\eta$ $\\implies$ $|f(x)-f(a)| \\lt \\varepsilon$</li> <li>Pour tout voisinage $V$ de $f(a)$, il existe un voisinage $U$ de $a$ tel que $f(U\\cap X) \\subset V$</li> </ol>",
    "id": 301
}, {
    "type": "proposition",
    "titre": "Restriction de l'ensemble source",
    "resultat": "Si $f$ et $g$ coïncident sur un voisinage de $a$, $f$ est continue en $a$ si et seulement si $g$ est continue en $a$.",
    "id": 302
}, {
    "type": "corollaire",
    "titre": "Continuité de fonctions égales sur un ouvert",
    "hypotheses": "Soit $f$ et $g$ définies sur $X \\subset \\R$, et $U$ un ouvert tel que $U \\cap X \\neq \\emptyset$.",
    "resultat": "Alors si $f_{|U \\cap X}$ = $g_{|U \\cap X}$ et si $g$ est continue sur $U \\cap X$, alors $f$ aussi.",
    "id": 303
}, {
    "type": "theoreme",
    "titre": "Prolongement par continuité",
    "hypotheses": "Soient $a \\in \\R$, $b \\in \\ol{R}$ tel que $b \\gt a$, et $I = ]a, b]$. On suppose que $f$ est continue sur $I$ et admet une limite finie $l$ en $a$.",
    "resultat": "Alors il existe une unique application continue $g: [a, b] \\longrightarrow \\R$, telle que $g_{|I} =f$. Cette application vérifie $g(a) = l$, et est appelée prolongement par continuité de $f$ sur $[a, b]$.",
    "id": 304
}, {
    "type": "definition",
    "titre": "Continuité d'une fonction de 2 variables",
    "hypotheses": "Soit $f$ une fonction définie sur un sous-ensemble $D$ de $\\R^2$, et $(x_0, y_0) \\in D$.",
    "resultat": "On dit que $f$ est continue en $X_O = (x_0, y_0)$ si l'une des propriétés équivalentes suivantes est vérifiée : <ol> <li>$\\forall \\varepsilon \\gt 0$, $\\exists \\eta$,$\\forall X \\in D$, $||X - X_0|| \\leqslant \\eta$ $\\implies$ $||f(X) - f(X_0)|| \\leqslant \\varepsilon$</li> <li>$\\forall V \\in \\cV(f(X_0))$, $\\exists U \\in \\cV(X_0)$,$f(U \\cap D) \\subset V$</li> </ol>",
    "id": 305
}, {
    "type": "proposition",
    "titre": "Continuité d'une composée",
    "hypotheses": "Soit $X$ et $Y$ deux sous-ensembles de $\\R$, $D$ un sous-ensemble de $\\R^2$. On se donne $f: D \\longrightarrow Y$, $\\varphi_1$, $\\varphi_2$ : $X \\longrightarrow D$ et $g: Y \\longrightarrow \\R$",
    "resultat": "1. Si $f$ est continue en $(x_0, y_0)$ et $g$ continue en $f(x_0, y_0)$, alors $(x, y) \\rightarrow g(f(x,y))$ est continue en $(x_0, y_0)$<br/>2. Si $\\varphi_1$ et $\\varphi_2$ sont continues en $t_0$, et $f$ est continue en $(\\varphi_1(t_0), \\varphi_2(t_0))$, alors $t \\rightarrow f(\\varphi_1(t), \\varphi_2(t))$ est continue en $t_0$",
    "id": 306
}];

const quiz_derivation = [{
    "type": "definition",
    "titre": "Dérivabilité, dérivée",
    "hypotheses": "Soit $f$ une fonction définie sur un intervalle ouvert $I$, et $x_0 \\in I$.",
    "resultat": "On dit que $f$ est dérivable en $x_0$ si le taux d'accroissement $x \\rightarrow \\frac{f(x) - f(x_0)}{x - x_0}$ définie sur $I\\backslash\\{x_0\\}$ admet une limite finie en $x_0$.<br/>Dans ce cas, on définit la dérivée de $f$ en $x_0$ (ou le nombre dérivé de $f$ en $x_0$) par : $$f'(x_0) = \\lim\\limits_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$$<br/>Si $f$ admet des nombres dérivés en tout $x \\in J \\subset I$, on dit que $f$ est dérivable sur $J$, et l'application $x \\rightarrow f'(x)$ qui à $x$ de $J$ associe le nombre dérivé de $f$ en $x$ est appelé fonction dérivée de $f$ sur $J$.",
    "id": 307
}, {
    "type": "remarque",
    "titre": "Remarques sur la dérivation",
    "resultat": "1. La dérivation est une notion <b>locale</b> et <b>non ponctuelle</b> ($f$ doit être défini sur un voisinage de $x_0$).<br/>2. La dérivation est une notion <b>locale</b> et <b>non globale</b> (ne dépend que de la description de $f$ sur un voisinage de $x_0$, quel qu'il soit, et non de sa description globale).",
    "id": 308
}, {
    "type": "proposition",
    "titre": "Caractérisation de la dérivabilité par DL",
    "resultat": "$f$ est dérivable de dérivé $p$ en $x_0$ si et seulement s'il existe une application $\\varepsilon$ définie sur une voisinage $V$ de $x_0$, de limite nulle lorsque $x$ tend vers $x_0$, et telle que : <br/> $\\forall x \\in V \\cap I$, $f(x)$ = $f(x_0)$ + $(x-x_0)p$ + $(x-x_0)\\varepsilon (x)$",
    "id": 309
}, {
    "type": "definition",
    "titre": "Tangente",
    "hypotheses": "Soit $f$ une fonction dérivable sur un intervalle ouvert $I$ et $x_0 \\in I$.",
    "resultat": "Alors la tangente à la courbe de $f$ en $x_0$ est la droite d'équation $y$=$f'(x_0)(x-x_0)$ + $f(x_0)$",
    "id": 310
}, {
    "type": "texte",
    "titre": "notion intuitive de la tangente",
    "resultat": "La tangente est la droite approchant \"au mieux\" la courbe de $f$ au voisinage de $x_0$",
    "id": 311
}, {
    "type": "theoreme",
    "titre": "Continuité des fonctions dérivables",
    "resultat": "Si $f$ est dérivable en $x_0$, alors $f$ est continue en $x_0$ <br/> <b>La réciproque est fausse !!!</b>",
    "id": 312
}, {
    "type": "definition",
    "titre": "Dérivées à droite",
    "hypotheses": "Soit $x_0 \\in I$.",
    "resultat": "On dit que $f$ est dérivable à droite en $x_0$ si l'expression $\\frac{f(x)-f(x_0)}{x - x_0}$ admet une limite à droite lorsque $x$ tend vers $x_0$. On note alors : <br/> $f'_d(x_0)$ = $\\lim\\limits_{x \\to x_0^+} {f(x)-f(x_0)}{x-x_0}$ = $\\lim\\limits_{h \\to 0^+} \\frac{f(x_0 + h) - f(x_0)}{h}$",
    "id": 313
}, {
    "type": "definition",
    "titre": "Dérivées à gauche",
    "hypotheses": "Soit $x_0 \\in I$.",
    "resultat": "On dit que $f$ est dérivable à gauche en $x_0$ si l'expression $\\frac{f(x)-f(x_0)}{x - x_0}$ admet une limite à gauche lorsque $x$ tend vers $x_0$. On note alors : <br/> $f'_d(x_0)$ = $\\lim\\limits_{x \\to x_0^-} {f(x)-f(x_0)}{x-x_0}$ = $\\lim\\limits_{h \\to 0^-} \\frac{f(x_0 + h) - f(x_0)}{h}$",
    "id": 314
}, {
    "type": "proposition",
    "titre": "Caractérisation de la dérivabilité par $f'_g$ et $f'_d$",
    "hypotheses": "Soit $x_0 \\in I$, non égal à une des bornes de $I$.",
    "resultat": "Alors $f$ est dérivable en $x_0$ si et seulement si $f$ est dérivable à gauche et à droite en $x_0$, et $f'_g(x_0)$ = $f'_d(x_0)$.<br/>Dans ce cas, $f'(x_0) = f'_d(x_0) = f'_g(x_0)$",
    "id": 315
}, {
    "type": "definition",
    "titre": "Dérivées d'ordre supérieur",
    "hypotheses": "Soit $I$ un intervalle de $\\R$.",
    "resultat": "On dit que $f$ est n-fois dérivable si on peut dériver $f$ sur $I$, n fois de suite.<br/>Cela définit alors une fonction $f^{(n)}$, appelée dérivée n-ième de la fonction $f$.",
    "id": 316
}, {
    "type": "definition",
    "titre": "Fonctions de classe $\\cC^n$",
    "resultat": "Une fonction $f$ est dite de classe $\\cC^n$ sur un intervalle $I$ si elle est n fois dérivable sur $I$ et que $f^{(n)}$ est continue",
    "id": 317
}, {
    "type": "texte",
    "titre": "Notations : $\\cC^n(I)$, $cD^n(I)$",
    "hypotheses": "Soit $I$ un intervalle et $n \\in \\N$.",
    "resultat": "On note $cD^n(I)$ l'ensemble des fonctions définies sur $I$ et n fois dérivables sur $I$.<br/>On note $\\cC^n(I)$ l'ensemble des fonctions n fois dérivables sur $I$ et de dérivée n-ième continue.",
    "id": 318
}, {
    "type": "proposition",
    "titre": "Chaîne d'inclusion avec les $C^n(I)$ et $D^n(I)$",
    "resultat": "On a une chaîne d'inclusion : <br/> $\\dots$ $\\subset$ $\\cC^n(I)$ $\\subset$ $cD^n(I)$ $\\subset$ $\\cC^{n-1}(I)$ $\\subset$ $cD^{n-1}(I)$ $\\subset$ $\\dots$ $\\subset$ $\\cC^1(I)$ $\\subset$ $cD^1(I)$ $\\subset$ $\\cC^0(I)$ $\\subset$ $cD^0(I)$",
    "id": 319
}, {
    "type": "definition",
    "titre": "Fonctions de classe $\\cC^{\\infty}$",
    "resultat": "On dit que $f$ est de classe $\\cC^{\\infty}$ sur $I$ si $f$ est de classe $\\cC^n$ pour tout $n\\in\\N$, donc si $f$ est infiniment dérivable.<br/>$\\cC^{\\infty}(I)$ l'ensemble des fonctions de classe $\\cC^{\\infty}$ sur $I$.",
    "id": 320
}, {
    "type": "theoreme",
    "titre": "Théorème des accroissements finis, TAF",
    "hypotheses": "Soit $a \\lt b$ et $f$ une application continue sur le segment $[a,b]$, dérivable sur $]a,b[$.",
    "resultat": "Alors il esiste un point $c \\in ]a,b[$ tel, que <br/>$\\frac{f(b)-f(a)}{b-a} = f'(c)$",
    "id": 321
}, {
    "type": "corollaire",
    "titre": "Inégalité des accroissements finis, IAF",
    "hypotheses": "Soit $f$ une fonction continue sur le segment $[a,b]$, dérivable sur $]a,b[$. On suppose que pour tout $x \\in ]a,b[$, $m$ $\\leqslant$ $f'(x)$ $\\leqslant$ $M$",
    "resultat": "Alors $m$ $\\leqslant$ $\\frac{f(b)-f(a)}{b - a}$ $\\leqslant$ $M$ <br/> <br/> Ecrite sous cette forme, l'IAD est valide aussi si $b \\lt a$<br/>En particulier, on peut prendre $m$ = $\\inf\\limits_{x\\in ]a,b[} f'(x)$ et $M$ = $\\sup\\limits_{x \\in ]a,b[}f'(x)$, s'ils existent dans $\\R$<br/>Si $|f'| \\leqslant M$ sur $]a,b[$, alors <br/> $|f(b)-f(a)|$ $\\leqslant$ $M|a-b|$",
    "id": 322
}, {
    "type": "definition",
    "titre": "Fonction lipschitzienne, fonction contractante",
    "hypotheses": "Soit $f$ une fonction définie sur un intervalle $I$, à valeurs dans $\\R$.",
    "resultat": "On dit que $f$ est $L$-lipsichtzienne sur $I$ si pour tout $(x,y) \\in I^2$, <br/>$|f(x)-f(y)|$ $\\leqslant$ $L|x-y|$<br/>Le réel $L$ est appelé facteur de Lipschitz de $f$. Si de plus, $L \\lt 1$, on dit que $f$ est contractante.",
    "id": 323
}, {
    "type": "proposition",
    "titre": "Continuité des fonctiosn lipschitziennes",
    "hypotheses": "Soit $f$ une fonction d'un intervalle $I$ dans $\\R$, lipschitzienne sur $I$.",
    "resultat": "Alors $f$ est continue sur $I$",
    "id": 324
}, {
    "type": "proposition",
    "titre": "Caractère lipschitzien des fonctions à dérivées bornée",
    "hypotheses": "Soit $f$ une application dérivable sur un intervalle $I$, et à dérivée bornée sur $I$.",
    "resultat": "Alors $f$ est lipschitzienne",
    "id": 325
}, {
    "type": "theoreme",
    "titre": "Prolongement par continuité",
    "hypotheses": "Soit $f$ une fonction continue sur $]a,b]$, et admettant une limite $l$ en $a$.",
    "resultat": "Il existe une unique fonction $g$ continue sur $[a,b]$ et coïncidant avec $f$ sur $]a,b]$.<br/>Elle vérifie $g(a)=l$.<br/>La fonction $g$ est appelée prolongement par continuité de $f$ sur $[a,b]$",
    "id": 326
}, {
    "type": "theoreme",
    "titre": "Théorème de la limite de la dérivée",
    "hypotheses": "Soit $I$ un intervalle de $\\R$, et $a \\in I$. Soit $f$ une fonction $I$ dans $\\R$, continue sur $I$, dérivable sur $I\\backslash\\{a\\}$",
    "resultat": "<ul> <li>Si^$f'$ admet une limite $l \\in \\R$ lorsque $x\\to a$ ($x \\neq a)$, alors $f$ est dérivable en $a$ et $f'(a) = l$. La fonction $f'$ est alors continue en $a$.</li> <li>Si $f'(x) \\to +\\infty$ lorsque $x \\to a$, alors le taux d'accroissement $\\frac{f(x)-f(a)}{x-a}$ tend aussi vers $+\\infty$ (et la courbe admet donc une tangente verticale en $a$)</li> </ul>",
    "id": 327
}, {
    "type": "theoreme",
    "titre": "Théorème de la classe $\\cC^n$ par prolongement",
    "hypotheses": "Soit $I$ un intervalle et $x_0 \\in I$. Soit $f$ une fonction définie en $\\cC^n$ sur $I\\backslash\\{x_0\\}$.",
    "resultat": "Si pour tout $k \\in [\\![0, n]\\!]$, $f^{(k)}$ admet une limite finie en $x_0$, alors $f$ peut être prolongée sur $I$ en une fonction $\\widetilde{f}$ de classe $\\cC^n$ sur $I$. De plus, on aura alors : <br/> $\\forall k \\in [\\![0, n]\\!]$, $\\widetilde{f}^{(k)}(x_0)$ = $\\lim\\limits_{x\\to x_0} f^{(k)}(x)$",
    "id": 328
}, {
    "type": "proposition",
    "titre": "$(\\lambda f)'(x)$",
    "hypotheses": "", //TODO
    "resultat": "$(\\lambda f)'(x)$ = $\\lambda f'(x)$",
    "id": 329
}, {
    "type": "proposition",
    "titre": "$(f+g)'(x)$",
    "hypotheses": "", //TODO
    "resultat": "$(f+g)'(x)$ = $(f'+g')(x)$",
    "id": 329
}, {
    "type": "proposition",
    "titre": "$(fg)'(x)$",
    "hypotheses": "", //TODO
    "resultat": "$(fg)'(x)$ = $f'(x)g(x) + f(x)g'(x)$",
    "id": 330
}, {
    "type": "proposition",
    "titre": "$(\\frac{1}{g})'(x)$",
    "hypotheses": "", //TODO
    "resultat": "$(\\frac{1}{g}'(x)$ = $\\frac{-g'(x)}{g^2(x)}$",
    "id": 331
}, {
    "type": "proposition",
    "titre": "$(\\frac{f}{g})'(x)$",
    "hypotheses": "", //TODO
    "resultat": "$(\\frac{f}{g})'(x)$ = $\\frac{f'(x)g(x) - f(x)g'(x)}{g^2(x)}$",
    "id": 332
}, {
    "type": "corollaire",
    "titre": "Dérivée d'un produit de n-termes",
    "hypotheses": "Soit $f_1$, $\\dots$, $f_n$ : $I \\to \\R$ et $x_0 \\in I$.",
    "resultat": "Si $f_1$, $\\dots$, $f_n$ sont dérivables en $x_0$, alors leur produit aussi, et : <br/> $$(f_1\\dots f_n)'(x_0) = \\sum_{k=1}^{n} f'_k(x_0) \\prod_{i \\in [\\![1, n]\\!]\\backslash k}f_i(x_0)$$<br/><br/>Si les $f_i(x_0)$ sont tous nuls, ceci se réexprime sous la forme $$(f_1\\dots f_n)'(x_0) = (\\prod_{i\\in [\\![1,n]\\!]}f_i)\\sum_{i=1}^{n}\\frac{f'_i(x_0)}{f_i(x_0)}$$<br/><br/>S'il existe $i_0$ tel que $f_{i_0} = 0$, alors la plupart des termes s'annulent : $$(f_1\\dots f_n)'(x_0) = f'_{i_0}(x_0)\\prod_{i \\neq i_0}f_i(x_0)$$",
    "id": 333
}, {
    "type": "proposition",
    "titre": "Dérivées successives des puissances",
    "hypotheses": "Soit $f : x \\to x^n$, et $k \\in \\N$",
    "resultat": "<ul> <li>Si $k \\leqslant n$, pour tout $x \\in \\R$, $f^{(k)}(x)$ = $\\frac{n!}{(n-k)!}x^{n-k}$</li> <li>Si $k \\gt n$, pour tout $x\\in \\R$, $f^{(k)}(x) = 0$</li> </ul>",
    "id": 334
}, {
    "type": "proposition",
    "titre": "dérivées successives des puissances",
    "hypotheses": "Soit $I$ et $J$ deux intervalles ouverts de $\\R$, et $f$:$I \\to J$. Soit $x \\in I$.",
    "resultat": "Si $f$ est dérivable en $x$ et $g$ dérivable en $y=f(x)$, alors $g \\circ f$ est dérivable en $x$, et :<br/>$(g\\circ f)'(x)$ = $f'(x)g'(y)$ = $f'(x).g' \\circ f (x)$<br/>Ainsi $(g\\circ f)' = f'.(g'\\circ f)$",
    "id": 335
}, {
    "type": "proposition",
    "titre": "Dérivée logarithmique",
    "hypotheses": "Soit $f$ une fonction dérivable d'un intervalle $I$ dans $\\R_+^*$.",
    "resultat": "Alors $\\ln \\circ f$ est dérivable, de dérivée : <br/>$(\\ln \\circ f)' = \\frac{f'}{f}$<br/>L'expression $\\frac{f'}{f}$ s'appelle dérivée logarithmique de $f$.",
    "id": 336
}, {
    "type": "proposition",
    "titre": "Dérivation d'une composition itérée",
    "hypotheses": "Soit $f_1$,$\\dots$,$f_n$ des fonctions dérivables respectivement en $x_1$, en $x_2 = f_1(x_1)$, $\\dots$, en $x_n$ = $f_{n-1}(x_{n-1})$. ",
    "resultat": "Alors $f_n \\circ \\dots\\circ f_1$ est dérivable en $x_1$ et : <br/>$(f_n \\circ \\dots f_1)'(x_1)$ <br/> $=f'_n(x_n)\\dots f'_1(x_1)$<br/>$=[f'_n \\circ \\dots f_1(x_1)] \\times [f'_{n-1} \\circ \\dots f_1(x_1)] \\times \\dots \\times f'_1(x_1)$",
    "id": 337
}, {
    "type": "lemme",
    "titre": "Continuité des réciproques",
    "hypotheses": "Soit $I$ et $J$ deux intervalles et $f$ une application bijective continue de $I$ dans $J$.",
    "resultat": "Alors $f^{-1} : J \\to I$ est continue sur $J$",
    "id": 338
}, {
    "type": "theoreme",
    "titre": "Dérivation des fonctions réciproques",
    "hypotheses": "Soit $I$ et $J$ deux intervalles, et soit $f$ une application bijective continue de $I$ dans $J$. Soit $t_0 \\in I$, et $x_0 = f(t_0)$",
    "resultat": "Alors si $f$ est dérivable en $t_0$, et si $f'(t_0) \\neq 0$, alors $f^{-1}$ est dérivable en $x_0$, et : <br/> $(f^{-1})'(x_0)$ = $\\frac{1}{f'(t_0)}$ = $\\frac{1}{$f' \\circ f^{-1}(x_0)}$",
    "id": 339
}, {
    "type": "proposition",
    "titre": "Limites remarquables pour exp, ln, les puissanes",
    "resultat": "On a (pour $\\alpha \\in \\R$)<br/>$$\\lim\\limits_{x \\to 0}\\frac{\\ln(1+x)}{x}=1$$<br/> $$\\lim\\limits_{x \\to 0}\\frac{e^x - 1}{x} = 1$$ <br/> $$\\lim\\limits_{x \\to 0}\\frac{(1+x)^{\\alpha} - 1}{x} = \\alpha$$",
    "id": 340
}, {
    "type": "proposition",
    "titre": "$(\\lambda f)^{(n)}$",
    "hypotheses": "", //TODO
    "resultat": "$(\\lambda f)^{(n)}(x_0)$ = $\\lambda f^{(n)}(x_0)$",
    "id": 341
}, {
    "type": "proposition",
    "titre": "$(f+g)^{(n)}$",
    "hypotheses": "$(f+g)^{(n)}(x_0)$ = $(f^{(n)} + g^{(n)})(x_0)$",
    "resultat": "", //TODO
    "id": 342
}, {
    "type": "proposition",
    "titre": "Formule de Leibniz",
    "resultat": "Si $f$ et $g$ sont $n$ fois dérivables en $x_0$, alors $fg$ aussi et : <br/>$$(fg)^{(n)}(x_0) = \\sum_{k=0}^{n}\\binom{n}{k}f^{n}(x_0)g^{(n-k)}(x_0)$$",
    "id": 343
}, {
    "type": "proposition",
    "titre": "$(\\frac{f}{g})^{(n)}$",
    "resultat": "Si $f$ et $g$ sont $n$ fois dérivables en $x_0$ et si $g$ ne s'annule pas en $x_0$, alors $\\frac{f}{g}$ est $n$ fois dérivable en $x_0$ (pas de formule simple).",
    "id": 344
}, {
    "type": "proposition",
    "titre": "Composition de fonction $n$ fois dérivables",
    "hypotheses": "Soit $I$ et $J$ deux intervalles, et $f$ une fonction de $I$ dans $J$, $g$ une fonction de $J$ dans $\\R$. Soit $x_0 \\in I$",
    "resultat": "Si $f$ est $n$ fois dérivable en $x_0$ et $g$ est $n$ fois dérivable en $f(x_0)$, alors $g \\circ f$ est $n$ fois dérivable en $x_0$.<br/>Si de plus $f^{(n)}$ et $g^{(n)}$ sont continues en $x_0$, alors $g \\circ f$ également.",
    "id": 345
}, {
    "type": "proposition",
    "titre": "Formule de Faà di Bruno",
    "hypotheses": "",
    "resultat": "Il existe explicite pour la dérivée d'ordre $n$ d'une composition (formule de Faà di Bruno) : $$(g \\circ f)^{(n)} = \\sum_{\\begin{array}{ll} (m_1,\\dots,m_n)\\in \\ \\N^n \\\\ 1m_1+2m_2+\\dots+nm_n = n \\end{array}} \\frac{n!}{m_1!m_2!\\dots m_n!} \\prod_{k=1}^{n}\\left(\\frac{f^{(n)}}{k!}\\right)^{mk} \\times g^{(m_1+\\dots+m_n)}\\circ f$$",
    "id": 346
}, {
    "type": "theoreme",
    "titre": "Dérivée de $x \\to f(ax + b)$",
    "hypotheses": "Soit $a$ et $b$ deux réels, $x_0 \\in \\R$ et $f$ une application $n$ fois dérivable en $ax_0+b$.",
    "resultat": "Alors la fonction $g:x\\to f(ax+b)$ est $n$ fois dérivable en $x_0$ et <br/> $g^{(n)}(x_0)$ = $a^nf^{(n)}(ax+b)$",
    "id": 347
}, {
    "type": "corollaire",
    "titre": "Règle de stabilité dans $cD^n(I)$",
    "hypotheses": "Soit $n \\in \\N^*$",
    "resultat": "1. L'ensemble $cD^n(I)$ est stable par combinaison linéaires, produits et quotients par une fonction ne s'annulant pas<br/>2. Soit $f \\in cD^n(I)$ à valeurs dans un intervalle $J$, et $g \\in cD^n(I)$<br/>3. Soit $f \\in cD^n(I)$, bijective de $I$ dans $J$, et telle que $f'$ ne s'annule pas sur $I$. Alors $f^{-1} \\in cD^n(J)$",
    "id": 348
}, {
    "type": "corollaire",
    "titre": "Règle de stabilité dans $\\cC^n(I)$",
    "hypotheses": "Soit $n \\in \\N^*$",
    "resultat": "1. L'ensemble $\\cC^n(I)$ est stable par combinaison linéaires, produits et quotients par une fonction ne s'annulant pas<br/>2. Soit $f \\in \\cC^n(I)$ à valeurs dans un intervalle $J$, et $g \\in \\cC^n(I)$<br/>3. Soit $f \\in \\cC^n(I)$, bijective de $I$ dans $J$, et telle que, si $n\\neq0$, $f'$ ne s'annule pas sur $I$. Alors $f^{-1} \\in \\cC^n(J)$",
    "id": 348
}, {
    "type": "definition",
    "titre": "Dérivation d'une fonction de $\\R$ dans $\\C$",
    "hypotheses": "Soit $I = ]a,b[$ un intervalle ouvert de $\\R$ ($a, b \\in \\ol{\\R}$) et $x_0 \\in I$. Soit $f : I \\to \\C$ une fonction à valeurs complexes.",
    "resultat": "On dit que $f$ est dérivable en $x_0$ si l'expression $\\frac{f(x_0+h) - f(x_0)}{h}$ admet une limite dans $\\C$ lorsque le réel $h$ tend vers $0$, c'est-à-dire s'il existe $l \\in \\C$ tel que $$\\lim\\limits_{h \\to 0}\\left|\\frac{f(x_0 + h) - f(x_0)}{h}-l\\right| = 0$$<br/>Dans ce cas, on définit la dérivée de $f$ en $x_0$ par : $$f'(x_0)=\\lim\\limits_{x \\to 0}\\frac{f(x_0+h) - f(x_0)}{h}$$",
    "id": 349
}, {
    "type": "proposition",
    "titre": "Dérivation des parties réelles et imaginaires",
    "hypotheses": "Soit $f:I \\to \\C$, définissons les fonctions $f_r$ et $f_i$ de $I$ dans $\\C$ par : <br/> $\\forall x \\in I$, $f_r(x) = \\Re(f(x))$, $f_i(x)=\\Im(f(x))$",
    "resultat": "Alors $f$ est dérivable en $x_0$, si et seulement si $f_r$ et $f_i$ le sont, et dans ce cas, <br/>$f'(x_0)$ = $f'_r(x_0)$ + $f'_i(x_0)$",
    "id": 350
}, {
    "type": "proposition",
    "titre": "Principales règles de dérivation des fonctions complexes",
    "hypotheses": "Soit $f,g : I \\to \\C$ deux fonctions complexes définies sur un intervalle ouvert $I$ de $\\R$ et dérivables en $x_0 \\in I$. Alors :",
    "resultat": "$(i)$ $f+g$ est dérivable en $x_0$ et $(f+g)'(x_0)$ = $f'(x_0)$ + $g'(x_0)$<br/>$(ii)$ Pour tout $\\alpha \\in \\C$, $\\alpha f$ est dérivable en $x_0$ et $(\\alpha f)'(x_0)$ = $\\alpha f'(x_0)$<br/>$(iii)$ $fg$ est dérivable en $x_0$ et $(fg)'(x_0)$ = $f'(x_0)g(x_0)$ + $f(x_0)g'(x_0)$<br/>$(iv)$ si $g(x_0) \\neq 0$, $\\frac{f}{g}$ est dérivable en $x_0$ et $\\left(\\frac{f}{g}\\right)'(x_0)$ = $\\frac{f'(x_0)g(x_0)-f(x_0)g'(x_0)}{g^2(x_0)}$",
    "id": 351
}, {
    "type": "proposition",
    "titre": "Dérivée de $t \\to e^{\\varphi(t)}$",
    "hypotheses": "Soit $\\varphi:I\\to\\C$ une fonction à valeurs complexes définie sur un intervalle $I$ ouvert de $\\R$ et soit $x_0\\in I$. Soit $\\psi: x\\to e^{\\varphi(t)}$",
    "resultat": "Si $\\varphi$ est dérivable en $x_0$, alors $\\psi$ aussi, et <br/>$\\psi'(x_0)$ = $\\varphi'(x_0)e^{\\varphi(x_0)}$",
    "id": 352
}, {
    "type": "definition",
    "titre": "Application partielle",
    "resultat": "Les deux applications partielles de $f$ en $(x_0, y_0)$ sont les deux applicatiosn $f_1$ et $f_2$ définies sur $I_1$ et $I_2$ respectivement par : <br/> $f_1(x) = f(x,y_0)$ et $f_2(y) = f(x_0, y)$",
    "id": 353
}, {
    "type": "definition",
    "titre": "Dérivée partielle",
    "resultat": "On dit que $f$ admet une dérivée partielle par rapport à $x$ en $X_0$ si $f_1$ est dérivable en $x_0$, et on note alors <br/>$\\frac{\\partial f}{\\partial x}(X_0)$ = $f'_1(x_0)$",
    "id": 354
}, {
    "type": "remarque",
    "titre": "Continuité et dérivées partielles",
    "resultat": "L'existence des deux dérivées partielles en un point $X_0$ n'assure pas la continuité en $x_0$",
    "id": 355
}, {
    "type": "definition",
    "titre": "Fonction de classe $\\cC^1$ sur un ouvert de $\\R^2$",
    "hypotheses": "Soit $U$ un ouvert de $\\R^2$, et $f:U \\to \\R$.",
    "resultat": "On dit que $f$ est de classe $\\cC^1$ si $f$ admet des dérivées partielles $\\frac{\\partial f}{\\partial x}$ et $\\frac{\\partial f}{\\partial y}$ en tout point de $U$, et que les applications <br/> $X \\mto \\frac{\\partial f}{\\partial x}(X)$ et $X \\mto \\frac{\\partial f}{\\partial y}(X)$ soient continues sur $U$",
    "id": 356
}, {
    "type": "definition",
    "titre": "Gradient",
    "hypotheses": "Soit $f$ une fonction de classe $\\cC^1$ sur un ouvert $U$ de $\\R^2$",
    "resultat": "Le gradient de $f$ est défini sur $U$ par :<br/>$\\forall X \\in U$, $\\nabla f(X) = \\left(\\begin{array}{ll} \\frac{\\partial f}{\\partial x}(X) \\\\ \\frac{\\partial f}{\\partial y}(X) \\end{array}\\right)$",
    "id": 357
}, {
    "type": "theoreme",
    "titre": "Règle de la chaîne",
    "hypotheses": "Soit $f$ une fonction de classe $\\cC^1$ sur un ouvert de $U$ et $x,y : I \\ra U$ deux applications de classe $\\cC^1$ sur un intervalle ouvert $I$ de $\\R$.",
    "resultat": "Alors la fonction $t\\mto f(x(t),y(t))$ est de classe $\\cC^1$ sur $I$ et <br/> $\\frac{d}{dt}(f(x(t),y(t))$ = $x'(t) . \\frac{\\partial f}{\\partial x}(x(t),y(t))$ + $y'(t) . \\frac{\\partial f}{\\partial y}(x(t), y(t))$",
    "id": 358
},{
    "type": "remarque",
    "titre": "Dérivée le long d'un chemin",
    "resultat": "La fonction $\\gamma$ peut être vue un chemin dans $\\R^2$, paramétré par $t$, parcouru à une certaine vitesse donnée par l'évolution de $x(t)$ et $y(t)$ au fil du temps.<br/>C'est ce qu'on appelle un arc paramétré.<br/>Ainsi la règle de la chaîne peut être interprétée comme une dérivée le long d'un arc.",
    "id": 359
},{
    "type": "corollaire",
    "titre": "Dérivée partielle de composée",
    "hypotheses": "Soit $f$ une fonction de classe $\\cC^1$ sur un ouvert $U$ de $\\R^2$, $\\varphi$ et $\\psi$ deux fonctions de classe $\\cC^1$ sur un ouvert $V$ de $\\R^2$ tel que $\\varphi(V) \\subset U$ et $\\psi(V) \\subset U$.",
    "resultat": "Alors la fonction $(u,v) \\mto f(\\varphi(u,v), \\psi(u,v))$ est de classe $\\cC^1$ sur $V$, et : <br/> $\\left\\{ \\begin{array}{ll} \\frac{\\partial}{\\partial u}f(\\varphi(u,b), \\psi(u,v)) = \\frac{\\partial f}{\\partial x}(\\varphi(u,v), \\psi(u,v))\\frac{\\partial \\varphi}{\\partial u}(u,v) + \\frac{\\partial f}{\\partial y}(\\varphi(u,v), \\psi(u,v))\\frac{\\partial \\psi}{\\partial u}(u,v) \\\\ \\frac{\\partial}{\\partial v}f(\\varphi(u,b), \\psi(u,v)) = \\frac{\\partial f}{\\partial x}(\\varphi(u,v), \\psi(u,v))\\frac{\\partial \\varphi}{\\partial v}(u,v) + \\frac{\\partial f}{\\partial y}(\\varphi(u,v), \\psi(u,v))\\frac{\\partial \\psi}{\\partial v}(u,v) \\end{array} \\right.$ ",
    "id": 360
},{
    "type": "definition",
    "titre": "Ligne de niveau",
    "resultat": "La ligne de niveau de $f$ de hauteur $a$ est l'ensemble des points $(x,y) \\in \\R^2$ tels que $f(x,y) = a$<br/>Autrement dit, il s'agit de $f^{-1}(\\{a\\})$",
    "id": 361
},{
    "type": "remarque",
    "titre": "Le gradient est orthogonal aux courbes de niveau",
    "resultat": "Si $\\gamma$ est un arc parcourant une ligne de niveau de $f$ (i.e. $f \\circ \\gamma$ est contante), alors <br/> $\\langle \\nabla f(\\gamma(t)), \\gamma'(t))\\rangle = 0$<br/>Ainsi, $\\nabla f(\\gamma(t))$ est orthogonal à $\\gamma'(t)$, lui-même tangent à l'arc $\\gamma$.<br/>En d'autre terme, le gradient est orthogonal aux lignes de niveau.",
    "id": 362
},{
    "type": "definition",
    "titre": "Dérivée selon un vecteur $u$",
    "hypotheses": "Soit $u = (a,b)$ un vecteur de $\\R^2$ et $f$ une application de classe $\\cC^1$ sur un ouvert de $U$.",
    "resultat": "La dérivée directionnelle de $f$ en $X = (x,y) \\in U$ selon le vecteur $u$ est la dérivée en $0$ de la fonction $t \\mto f(X+tu)$, notée $D_uf(X)$",
    "id": 363
},{
    "type": "proposition",
    "titre": "Expression de la dérivée directionnelle avec $\\nabla$",
    "hypotheses": "si $f$ est de classe $\\cC^1$ au voisinage de $X$,",
    "resultat": "$\\D_uf(X)$ = $\\langle \\nabla f(X), u\\rangle$ = $a\\frac{\\partial f}{\\partial x}(X)$ + $b\\frac{\\partial f}{\\partial y}(X)$",
    "id": 364
},{
    "type": "texte",
    "titre": "Dérivées partielles d'ordre supérieur",
    "resultat": "Chaque dérivée partielle de $f$ est elle même une fonction de 2 variables. Si elles admettent elles-mêmes des dérivées partielles, on les notes : $$\\left\\{ \\begin{array}{ll} \\frac{\\partial^2 f}{\\partial x^2}(x,y) = \\frac{\\partial}{\\partial x}(\\frac{\\partial f}{\\partial x}(x,y)) \\\\ \\frac{\\partial^2 f}{\\partial y\\partial x}(x,y) = \\frac{\\partial}{\\partial y}(\\frac{\\partial f}{\\partial x}(x,y)) \\\\ \\frac{\\partial^2 f}{\\partial x \\partial y}(x,y) = \\frac{\\partial}{\\partial x}(\\frac{\\partial f}{\\partial y}(x,y) )\\\\ \\frac{\\partial^2 f}{\\partial y^2}(x,y) = \\frac{\\partial}{\\partial y}(\\frac{\\partial f}{\\partial y}(x,y))\\end{array}\\right.$$",
    "id": 365
}];

const quiz_convexite = [{
    "type": "definition",
    "titre": "Convexité",
    "hypotheses": "Soit $I$ un intervalle, et $f: I \\to \\R$",
    "resultat": "On dit que $f$ est <b>convexe</b> sur $I$ si : <br/> $\\forall (x,y) \\in I^2$,$ \\forall \\lambda \\in [0,1]$,$f(\\lambda x+(1-\\lambda)y)$ $\\leqslant$ $\\lambda f(x)$ + $(1-\\lambda)f(y)$",
    "id": 366
},{
    "type": "definition",
    "titre": "Concavité",
    "hypotheses": "Soit $I$ un intervalle, et $f: I \\to \\R$",
    "resultat": "On dit que $f$ est <b>concave</b> sur $I$ si : <br/> $\\forall (x,y) \\in I^2$, $\\forall \\lambda \\in [0,1]$, $f(\\lambda x + (1-\\lambda)y)$ $\\geqslant$ $\\lambda(f(x))$ + $(1-\\lambda)f(y)$",
    "id": 367
},{
    "type": "remarque",
    "titre": "Interprétation géométrique de la convexité",
    "resultat": "$f$ est convexe si la courbe reste sous les cordes (i.e. sous les segments reliant deux points de la courbe)",
    "id": 368
},{
    "type": "theoreme",
    "titre": "Inégalité de Jensen",
    "hypotheses": "Soit $f$ une fonction convexe sur un intervalle $I$, et soit ($\\lambda_1$,$\\dots$, $\\lambda_n$) $\\in \\R_+^*$ tels que $$\\sum_{k=1}^{n}\\lambda_k = 1$$",
    "resultat": "Alors pour tout ($x_1$, $\\dots$, $x_n$) $\\in I^n$, le réel $\\sum_{k=1}^{+\\infty}\\lambda_k x_k$ est dans $I$, et <br/>$$f\\left(\\sum_{k=1}^{n}\\lambda_k x_j\\right) \\leqslant \\sum_{k=1}^{n} \\lambda_k f(x_k)$$",
    "id": 369
},{
    "type": "lemme",
    "titre": "Lemme des pentes",
    "hypotheses": "Soit $f$ une fonction convexe sur un intervalle $I$, et $x \\lt y \\lt z$ trois points de $I$.",
    "resultat": "Alors <br/>$\\frac{f(y)-f(x)}{y-x}$ $\\leqslant$ $\\frac{f(z)-f(x)}{z-x}$ $\\leqslant$ $\\frac{f(z)-f(y)}{y-z}$",
    "id": 370
},{
    "type": "definition",
    "titre": "Fonction taux d'accroissement",
    "hypotheses": "Soit $f$ une fonction définie sur un intervalle $I$.",
    "resultat": "On note $F_u$ la fonction taux d'accroissement, définie comme usuellement sur $I$ par : <br/> $\\forall t \\in I$, $F_u(t) = \\frac{f(t)-f(u)}{t-u}$",
    "id": 371
},{
    "type": "theoreme",
    "titre": "Convexité lié au taux d'accroissement",
    "hypotheses": "Soit $I$ un intervalle de $\\R$, et $f: I \\to \\R$ une fonction. Soit $F_u(t) la fonction taux d'accroissement de $f$.",
    "resultat": "La fonction est convexe sur $I$ si et seulement si pour tout $u \\in I$, l'application $F_u$ est croissante sur $I \\backslash \\{u\\}$",
    "id": 372
},{
    "type": "proposition",
    "titre": "Positionnement de la courbe par rapport à la sécante",
    "hypotheses": "Soit $f$ une fonction convexe sur un intervalle $I$, et $x\\lt y$ deux points de $I$.",
    "resultat": "La sécante aux points $x$ et $y$ est au-dessus de la courbe (au sens large) sur $[x,y]$ et en-dessous sur $I \\backslash [x,y]$",
    "id": 373
},{
    "type": "theoreme",
    "titre": "Dérivabilité des fonctions convexes",
    "hypotheses": "Soit $I$ un intervalle ouvert, et $f: I \\to \\R$ une fonction convexe.",
    "resultat": "Alors $f$ est dérivable à droite et à gauche en tout point de $I$, et : <br/> 1. $\\forall x \\in I$, $f'_g(x)$ $\\leqslant$ $f'_d(x)$<br/>2. $\\forall (x,y) \\in I^2$, $x\\lt y$ $\\implies$ $f'_d(x)$ $\\leqslant$ $f'_g(x)$<br/>3. $f'_g$ et $f'_d$ sont croissantes sur $I$",
    "id": 374
},{
    "type": "corollaire",
    "titre": "Continuité d'une fonction convexe",
    "hypotheses": "Soit $I$ un intervalle ouvert, et $f$ convexe sur $I$",
    "resultat": "Alors $f$ est continue sur $I$",
    "id": 375
},{
    "type": "remarque",
    "titre": "Continuité d'une fonction convexe sur un non-ouvert",
    "resultat": "Le théorème de la dérivabilité des fonctions convexes et son corollaire sont faux si on ne suppose pas que $I$ est ouvert.",
    "id": 376
},{
    "type": "proposition",
    "titre": "Dérivabilité / Tangente et courbes",
    "hypotheses": "Soit $I$ un intervalle ouvert et $x_0 \\in I$. Soit $f: I \\to \\R$ une fonction convexe sur $I$.",
    "resultat": "Puisque $f$ est dérivable à gauche et à droite, sa courbe admet une tangente à gauche et une tangente à droite en $x_0$.<br/> Alors la courbe de $f$ est au-dessus de sa tangente à gauche, et au-dessus de sa tangente à droite",
    "id": 377
},{
    "type": "theoreme",
    "titre": "Caractérisation des fonctions convexes dérivables",
    "hypotheses": "Soit $I$ un intervalle ouvert, et $f: I \\to \\R$ une fonction dérivable sur $I$.",
    "resultat": "Les propriétés suivantes sont équivalentes : <br/>$(i)$ $f$ est convexe<br/>$(ii)$ $f'$ est croissante<br/>$(iii)$ la courbe de $f$ se trouve au-dessus de toutes ses tangentes",
    "id": 378
},{
    "type": "corollaire",
    "titre": "Caractérisation des fonctions convexes deux fois dérivables",
    "hypotheses": "Soit $I$ un intervalle ouvert, et $f:I \\to \\R$ une fonction deux fois dérivable sur $I$",
    "resultat": "Alors $f$ est convexe si et seulement si pour tout $x \\in I$, $f''(x) \\geqslant 0$",
    "id": 379
},{
    "type": "proposition",
    "titre": "Graphe d'une fonction réciproque",
    "hypotheses": "Soit $I, J \\in \\R$, et $f : I \\to $ une bijection",
    "resultat": "Alors le graphe de $f^{-1}$ est l'image du graphge de $f$ par la symétrie d'axe $D$, où $D$ est la droite d'équation $y=x$",
    "id": 380
},{
    "type": "definition",
    "titre": "Fonction paire",
    "hypotheses": "Soit $f$ une fonction de domaine de définition $D_f \\in \\R$, à valeurs dans $\\R$.",
    "resultat": "On dit que $f$ est <b>paire</b> si $D_f$ est symétrique par rapport à $0$ (donc $D_f$ = $-D_f$ = $\\{-x, x\\in D_f\\}$, et <br/>$\\forall x \\in D_f$, $f(-x)$ = $f(x)$",
    "id": 381
},{
    "type": "definition",
    "titre": "Fonction impaire",
    "hypotheses": "Soit $f$ une fonction de domaine de définition $D_f \\in \\R$, à valeurs dans $\\R$.",
    "resultat": "On dit que $f$ est <b>impaire</b> si $D_f$ est symétrique par rapport à $0$, et <br/>$\\forall x \\in D_f$, $f(-x)$ = $-f(x)$",
    "id": 382
},{
    "type": "definition",
    "titre": "Fonction périodique",
    "hypotheses": "Soit $f$ une fonction du domaine de définition $D_f \\in \\R$, à valeurs dans $\\R$",
    "resultat": "On dit que $f$ est périodique de période $T$ si $D_f + T = D_f$ et <br/> $\\forall x \\in D_f$, $f(x+T)$ = $f(x)$",
    "id": 383
},{
    "type": "definition",
    "titre": "période minimale",
    "hypotheses": "Soit $f$ une fonction périodique et soit $\\cal{T}^+$ l'ensemble des périodes strictements positives de $f$.",
    "resultat": "Si $\\cal{T}^+$ admet un minimum $T$, alors $T$ est appelée <b>période minimale</b> de $f$, ou <b>plus petite période</b> de $f$.",
    "id": 384
},{
    "type": "remarque",
    "titre": "Avertissement : Croissance sur deux intervalles",
    "resultat": "Si $f$ est croissante (ou décroissante) sur deux intervalles $I$ et $J$, elle n'est pas nécessairement croissante (ou décroissante) sur l'intervalle $I \\cup J$.",
    "id": 385
},{
    "type": "proposition",
    "titre": "Monotonie et composition",
    "hypotheses": "Soit $f$ et $g$ deux fonctions définies sur les sous-ensembles $E$ et $F$ de $\\R$, et telles que $f(E) \\subset F$.",
    "resultat": "Alors : <ul><li>Si $f$ et $g$ sont toutes les deux croissantes (ou décroissantes), alors $g \\circ g$ est croissante</li> <li>Si $f$ est croissante et $g$ décroissante (ou l'inverse), alors $g \\circ f$ est décroissante</li> </ul><br/>De plus, si la monotonie de $f$ et $g$ est stricte, celle de $g\\circ f$ l'est également",
    "id": 386
},{
    "type": "remarque",
    "titre": "Utilisation de la proposition sur la Monotonie de la composition",
    "resultat": "Cette règle des monotonies composées est très utile en pratique, et permet souvent d'obtenir les variations de certaines fonctions de façon beaucoup plus élégante, efficace et rapide que par étude de fonction.<br/>C'est la premier réflexe à avoir lorsqu'on vous demande les variations d'une fonction composée",
    "id": 387
},{
    "type": "proposition",
    "titre": "Monotonie et injectivité",
    "resultat": "Une fonction strictement monotone sur un sous ensemble de $\\R$ est injective sur ce sous-ensemble",
    "id": 388
},{
    "type": "thoreme",
    "titre": "Caractérisation des fonctions croissantes dérivables",
    "hypotheses": "Soit $f: X \\to \\R$, et $I$ un intervalle tel que $f$ est dérivable sur $I$.",
    "resultat": "Alors : <br/> 1. $f$ est croissante sur $I$ $iff$ $\\forall x \\in I$, $f'(x) \\geqslant 0$<br/>2. $f$ est constante sur $I$ $\\iff$ $f' = 0$ sur $I$<br/>3. $f$ est strictement croissante sur $I$ si et seulement si $f' \\geqslant 0$ sur $I$, et que pour tout $(a,b) \\in I^2$ tel que $a \\lt b$, $f'$ n'est pas nulle sur $]a,b[$<br/>4. Enoncés similaires pour la décroissance",
    "id": 389
},{
    "type": "methode",
    "titre": "Etide des variations d'une fonction",
    "resultat": "Pour étudier les variations d'une fonction, on étudiera le signe de $f'$. On pourra dresser un tableau de variation, consignant le signe de $f'$ suivant les valeurs de $x$, et le sens de variation de $f$ qu'on en déduit",
    "id": 390
},{
    "type": "definition",
    "titre": "Maximum, maximum local",
    "hypotheses": "Soit $f$ définit sur $X$",
    "resultat": "<ul> <li>On dit que $f$ admet en $x$ un maximum si pour tout $y \\in X$, $f(y) \\leqslant f(x)$</li> <li>Ce maximum est strict s'il n'est atteint en aucun autre $y$ (donc $f(y)\\lt f(x)$ pour tout $y \\neq x$)</li> <li>$f$ admet en $x$ un maximum local s'il existe un voisinage $V$ de $x$ tel que pour tout $y \\in V$, $f(y) \\leqslant f(x)$ (donc si $f_{|V}$ admet un maximum en $x$)</li></ul>",
    "id": 391
},{
    "type": "theoreme",
    "titre": "Condition nécessaire pour un extremum",
    "hypotheses": "Soit $f$ dérivable sur un intervalle ouvert $I$",
    "resultat": "Si $f$ admet un extremum local (minimum ou maximum), alors $f'(x) = 0$",
    "id": 392
},{
    "type": "definition",
    "titre": "Point critique",
    "hypotheses": "Soit ^une fonction dérivable sur un ouvert $I$, et $x \\in I$.",
    "resultat": "On dit que $x$ est un point critique de $f$ si $f'(x) = 0$",
    "id": 393
},{
    "type": "definition",
    "titre": "asymptotes",
    "resultat": "<ul> <li>asymptote verticale en $a$ : droite d'équation $x=a$ en $a$ telle que $\\lim\\limits_{x \\to a^+} = \\pm \\infty$</li> <li>Asymptote en $+ \\infty$ : la droite $D$ d'équation $y=ax+b$ est dite asymptote à la courbe $\\cC$ de $f$ en $+\\infty$ si <br/>$\\lim\\limits_{x \\to +\\infty}f(x)-(ax+b) = 0$</li> On définit évidemment une notion similaire en $-\\infty$</ul>",
    "id": 394
},{
    "type": "methode",
    "titre": "Déterminer une droite asymptote (non verticale)",
    "resultat": "On verra plus tard comment obtenir les asymptotes à l'aide de développements asymptotiques<br/>De façon plus élémentaire, si $a$ existe, c'est nécessairement la limite de $\\frac{f(x)}{x}$ lorsque $x$ tends vers $+\\infty$, le cas échéant, il ne reste qu'à vérifier que $f(x)-ax$ tend vers une limite finie $b$.",
    "id": 395
},{
    "type": "definition",
    "titre": "Point d'inflexion",
    "resultat": "Un point d'inflexion de la courbe de $f$ est un point en lequel $f$ change de convexité",
    "id": 396
}
]

/*

    NEXT ID : 397

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
    "Trigonométrie": quiz_trigo,
    "Combinatoire": quiz_combi,
    "Limites": quiz_limites,
    "Continuité": quiz_continuite,
    "Dérivation": quiz_derivation,
    "Convexité": quiz_convexite
}; 