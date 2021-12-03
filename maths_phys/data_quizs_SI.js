const quiz_analyse_systemes_complexes = [{
    "type": "definition",
    "titre": "Système",
    "resultat": "Un <b>système</b> est décrit comme un ensemble d'éléments en <b>interaction</b> entre eux et avec l'environement, intégrés pour rendre à son environnement les <b>services</b> correspondants à sa finalité. Des propriétés nouvelles résultent de ces interactions, un système est donc bien plus qu'un ensemble de composants : les <b>flux d'information</b>, <b>d'énergie</b> ou <b>de matière</b> échangés entre les composants sont essentiels dans le comportement global.",
    "id": 0
}, {
    "type": "texte",
    "titre": "L'analyse d'un système nécessite la prise en compte de trois entités :",
    "resultat": "les élements composant le système, les interactions entre ces élements et les services rendus par le système.",
    "id": 1
}, {
    "type": "definition",
    "titre": "Système complexe",
    "resultat": "<b>Un système est dit complexe</b> lorsque les inter-relations liant les composants sont multiples, indépendantes et bouclées : <br/> $\\rightarrow$ Le <b>comportement global</b> n'est pas directement prévisible à partir des comportements élémentaires des composants.<br/> $\\rightarrow$ Un système complexe est souvent <b>pluri-disciplinaire</b> ou <b>pluhri-technique</b> et son analyse nécessite la coopération dde spécialistes de plusieurs disciplines.",
    "id": 2
}, {
    "type": "definition",
    "titre": "Contexte d'un système complexe",
    "resultat": "Le contexte du système représente l'environnement dans lequel s'insère le système d'un point de vue très général.",
    "id": 3
}, {
    "type": "definition",
    "titre": "Frontière d'un système complexe",
    "resultat": "La frontière d'un système est une limite (réelle ou fictive), séparant l'ensemble des composants considérés comme appartenant au système du reste de l'univers pour étudier le fonctionnement du système. Il est donc indispensable de savoir identifier quels sont les éléments influents du milieu extérieur.",
    "id": 4
}, {
    "type": "definition",
    "titre": "Milieu extérieur d'un système complexe",
    "resultat": "Tout ce qui se trouve à l'extérieur de la frontière d'étude est appelé milieu extérieur. Cependant, il est en général inutile et contreproductif de modéliser l'ensemble de l'univers pour étudier le fonctionnement du système. Il est donc indispensable de savoir identifier quels sont les éléments influents du milieu extérieur.",
    "id": 5
}, {
    "type": "definition",
    "titre": "Flux échangés",
    "resultat": "Les éléments influents du milieu extérieur sont ceux qui interagissent avec le système à travers la frontière d'étude. Ces interactions se font par l'intermédiaire de flux échangés entre le système et le milieu extérieur. Il peut s'agir <b>de flux de matière, d'énergie ou d'information</b>.",
    "id": 6
}, {
    "type": "definition",
    "titre": "Cahier des Charges Fonctionnel (CDCF)",
    "resultat": "Document ayant une structure normalisée et modelisant les attentes du client (formalisation si besoin et de l'ensemble des requêtes) sans spécifier la solution technique.",
    "id": 7
}, {
    "type": "texte",
    "titre": "Décomposition d'un système automatisé",
    "resultat": "Un système automatisé peut dans la plupart des cas être décomposé en deux parties : la partie commande et la partie opérative.",
    "id": 8
}, {
    "type": "definition",
    "titre": "Partie commande",
    "resultat": "La partie commande échange et traite les informations avec l'extérieur, avec l'opérateur et avec la partie opérative.",
    "id": 9
}, {
    "type": "definition",
    "titre": "Partie opérative",
    "resultat": "La partie opérative exécute les ordres de la partie commande et agit sur la matière d'oeuvre pour lui ajouter la valeur ajouté.",
    "id": 10
}, {
    "type": "texte",
    "titre": "Classement des composants d'un système automatique",
    "resultat": "Il est possible de classer les composants d'un système automatique en deux sous-ensembles : <ul> <li>Le premier est un ensemble de composants agissant sur les flux de données, que l'on nomme <b>chaîne d'information</b> </li> <li>Le second est un ensemble de composants agissants sur les flux de matière et d'énergie, que l'on nomme <b>chaîne d'énergie</b>.</li> </ul>",
    "id": 11
}, {
    "type": "definition",
    "titre": "Chaîne d'énergie",
    "resultat": "Il s'agit de la partie du système automatisé qui regroupe l'ensemble des procédés nécessaires à la réalisation d'une action. Elle se décompose de façon générique en quatre fonctions (<b>Alimenter/Stocker</b>, <b>Moduler</b>, <b>Convertir</b> et <b>Transmettre</b>). Le dernier bloc de la chaîne d'énergie a pour fonction d'<b>agir</b> sur la matière d'oeuvre (grâce à un composant nommé <b>effecteur</b>) pour réaliser la fonction de service attendue.",
    "id": 12
}, {
    "type": "definition",
    "titre": "Alimenter/Stocker (Chaîne d'énergie)",
    "resultat": "Mettre en forme l'énergie externe pour la transformer en énergie compatible à la réalisation d'une action (énergie hydraulique, électrique ou pneumatique).<br/><b>Unité d'alimentation</b> : Prise réseau électrique, Raccord réseau hydraulique, pneumatique, etc.<br/><b>Elément de stockage d'énergie : </b>Batterie, pile, accumulateur, etc.",
    "id": 13
}, {
    "type": "definition",
    "titre": "Moduler (Chaîne d'énergie)",
    "resultat": "Recevoir les ordres de la chaîne d'information et libérer l'énergie nécessaire aux actionneurs pour déclencher la réalisation de l'action.<br/><b>Préactionneur :</b>Relais et relais <b>statiques</b>, contacteurs, variateurs, distributeurs, etc.",
    "id": 14
}, {
    "type": "definition",
    "titre": "Convertir (Chaîne d'énergie)",
    "resultat": "Convertir l'énergie disponible (électrique, pneumatique, hydraulique) en un autre type d'énergie utile (souvent de l'énergie mécanique).<br/><b>Actionneurs :</b>Moteurs électriques, thermiques, hydrauliques, pneumatiques; Vérins, etc.",
    "id": 15
}, {
    "type": "definition",
    "titre": "Transmettre (Chaîne d'énergie)",
    "resultat": "Adapter l'énergie (souvent une énergei mécanique) pour la rendre utilisable par l'effecteur. <br/> <b>Transmetteur : </b>Réducteurs ou multiplicateurs, poulies-courroies, engrenages, embrayage, frein, limiteur de couple, dispositif vis-écrou ou bielle-manivelle, etc.",
    "id": 16
}, {
    "type": "definition",
    "titre": "Agir (Chaîne d'énergie)",
    "resultat": "Agir sur la matière d'oeuvre pour réaliser la fonction de service attendue. <br/><b>Effecteur :</b> Bras de robot, pince, convoyeur, roue, outils (foret, fraise), etc.",
    "id": 17
}, {
    "type": "definition",
    "titre": "Chaîne d'information",
    "resultat": "Il s'agit de la partie du système automatisé qui capte l'information et qui la traite. La chaîne d'information est décomposée de plusieurs fonctions (ex : <b>Acquérir</b>, <b>Traiter</b>, <b>Communiquer</b>). Cette décomposition n'est pas exhaustive et dépend du système étudié.",
    "id": 18
}, {
    "type": "definition",
    "titre": "Acquérir (Chaine d'information)",
    "resultat": "Prélever des informations sur l'état du système (grandeurs physiques issues de la chaîne d'énergie) et recevoir les informations fournies par les systèmes environnants et les interfaces homme/machine. <br/> <b>Capteurs : </b> de position (potentionmères, codeurs), de vitesse (génératrice tachymétrique), de déformation (jauge de déformation), de force (dynanomètre, cellule piézoélectrique), d'accélération, etc.",
    "id": 19
}, {
    "type": "definition",
    "titre": "Traiter (Chaine d'information)",
    "resultat": "Comparer les consignes et les signaux fournis par les capteurs afin de générer une commande à destination de la chaîne d'énergie. Deux types de technologies peuvent être utilisés : câblée ou programmée.<br/><b>Unité de commande : </b> Automates programmables industriels (API), ordinateurs, microcontrôleurs, microprocesseurs, etc.",
    "id": 20
}, {
    "type": "definition",
    "titre": "Communiquer (Chaine d'information)",
    "resultat": "Assurer l'interface entre la partie commande et son environnement, générer les ordres à destination de la chaîne d'énergie et les informations à destination de l'interface H/M et des autres systèmes.<br/><b>Interface de communication : </b> Commandes TOR, Cartes entrées/sorties, réseau éthernet, etc.",
    "id": 21
}, {
    "type": "texte",
    "titre": "Signal analogique",
    "resultat": "Un signal analogique est décrit par une fonction continue du temps, et la grandeur représentée ne peut prendre qu'un certain nombre fini de valeurs.",
    "id": 22
}, {
    "type": "texte",
    "titre": "Signal numérique",
    "resultat": "Un signal numérique est décrit par une fonction discrete (non continue) du temps, et la grandeur représentée ne peut prendre qu'un certain nombre fini de grandeur.",
    "id": 23
}, {
    "type": "texte",
    "titre": "Langage SysML",
    "resultat": "Le langage SysML (Systems Modeling Language) est un moyen de regrouper dans un modèle numérique commun à tous les corps de métiers, <b>les spécifications, les exigences et les paramètres de l'ensemble du système technique</b>.<br/>Ces diagrammes s'articulent autour de trois catégories : <ul><li><b>Modélisation comportementale</b> (Diagramme de cas d'utilisation, Diagramme d'états, Diagramme de séquence)</li><li><b>Modélisation fonctionnelle</b> (Diagramme des exigences)</li><li><b>Modélisation structurelle</b> (Diagramme de définition de blocs, Diagramme de blocs internes)</li></ul>",
    "id": 24
}, {
    "type": "definition",
    "titre": "Diagramme des cas d'utilisations (uc)",
    "resultat": "Il montre les interactions entre le système dans la phase étudié (souvent la phase d'utilisation) et les acteurs de son environnement.<br/>$\\rightarrow$ Le schéma montre les cas d'utilisation (ovales) reliés par des associations (lignes) à leurs acteurs. Chaque association signifie simplement \"participe à\".<br/>$\\rightarrow$ Les acteurs peuvent être une personne physique ou un autre système.",
    "id": 25
}, {
    "type": "definition",
    "titre": "Diagramme des exigences (req)",
    "resultat": "Ce diagramme permet de représenter les <b>exigences</b> du système. Une exigence exprime une <b>fonction</b> (exigence fonctionnelle = verbe à l'infinitif + complément) que devra réaliser le système ou une <b>contrainte de performance</b> technique (exigence de performance), d'usage, d'interface, économique ou environnementale<br/>$\\rightarrow$ Les acteurs peuvent être une personne physique ou un autre système.",
    "id": 26
}, {
    "type": "definition",
    "titre": "Diagramme de définition de blocs (bdd)",
    "resultat": "Ce diagramme montre les différents <b>composants</b> (appelés blocs) d'un système et sa <b>structure</b><br/> $\\circ$ Il définit, classe et hiérarchise ces blocs.<br/>$\\rightarrow$ Les blocs peuvent être des blocs matériels (\"hardware\") ou des blocs logiciels (\"software\").",
    "id": 27
}, {
    "type": "definition",
    "titre": "Diagramme de blocs internes (ibd)",
    "resultat": "Ce diagramme montre les échanges (de type matière, énergie, information ou contrôle) entre les différents composants d'un même bloc (donc d'un même niveau). <br/>$\\rightarrow$ L'ibd se construit à partir d'un bdd.",
    "id": 28
}];

const quiz_modelisation_geometrique_systemes_solides = [{
    "type": "definition",
    "titre": "Vecteur",
    "hypotheses": "Soient deux points $A$ et $B$.",
    "resultat": "Un vecteur $\\vec{AB}$ est défini par : <ul><li>Son support (droite $(AB)$)</li> <li>Son sens (de $A$ vers $B$)</li> <li>Sa norme (distance $AB$)</li> </ul>",
    "id": 29
}, {
    "type": "definition",
    "titre": "Base orthonormée",
    "resultat": "L'association de trois vecteurs non liés forme  une base $\\B$. On utilisera en SI unique des bases orthonormée directes $(\\vec{x}, \\vec{y}, \\vec{z})$ telles que : <ul><li>Les trois vecteurs sont <b>orthogonaux deux à deux</b></li> <li>Les trois vecteurs sont de <b>norme unitaire</b></li> <li>L'orientation des trois vecteurs est <b>directe</b>.</li> </ul> <br/> <img class=\"imgc\" src=\"res/base_ortho.png\" />",
    "id": 30
}, {
    "type": "texte",
    "titre": "Composante d'un vecteur",
    "resultat": "Tout vecteur $\\vec{V}$ est une combinaison linéaire des vecteurs de base : <br/> $\\vec{V} = V_x\\times\\vec{x} + V_y\\times\\vec{y} + V_z\\times\\vec{z}$<br/>$V_x$,$V_y$ et $V_z$ sont les composantes de $\\vec{V}$ dans la base $(\\vec{x}, \\vec{y}, \\vec{z})$.",
    "id": 31
}, {
    "type": "texte",
    "titre": "Représentation plane d'une base orthonormée",
    "resultat": "Deux des vecteurs sont représentés dans le plans. Le troisième vecteur est orthogonal au plan, il n'apparait pas dans une représentation plane, mais il est essentiel de faire apparaître son sens. <br/> Les vecteurs hors plan sont représentés avec $\\bigodot$ s'ils sont orientés vers nous, sinon, ils sont représentés par $\\bigotimes$.",
    "id": 32
}, {
    "type": "texte",
    "titre": "Orienter un angle par rapport à un vecteur",
    "resultat": "On peut définir, pour tout couple de vecteur $(\\vec{u}, \\vec{b})$, un angle $\\theta = (\\vec{u},\\vec{v})$ orienté par un vecteur $\\vec{z}$ normal au plan $(\\vec{u}, \\vec{v})$. L'angle $\\theta$ est compté comme positif ou négatif en fonction du sens de l'axe $\\vec{z}$",
    "id": 33
}, {
    "type": "texte",
    "titre": "Produit scalaire",
    "resultat": "Le produit scalaire est défini à partir de l'angle $\\theta = (\\vec{u}, \\vec{v})$ par la relation : <br/> <div style=\"border: 1px solid; padding-top:5px; padding-bottom: 5px;\">$\\vec{u} \\circ \\vec{v} = ||\\vec{u}|| \\circ ||\\vec{v}|| \\circ \\cos(\\vec{u},\\vec{v})$</div><br/>Avec $||\\vec{u}||=\\sqrt{u_x^2+u_y^2+u_z^2}$",
    "id": 34
}, {
    "type": "texte",
    "titre": "Produit scalaire (Formule avec les composantes)",
    "resultat": "Le produit scalaire peut éventuellement être calculé grâce aux composantes des vecteurs bases. Soit $\\vec{u} = \\left(\\begin{array}{ll} u_x\\\\ u_y\\\\ u_z \\end{array}\\right)_$@B et $\\vec{v} = \\left(\\begin{array}{ll} v_x\\\\ v_y\\\\ v_z \\end{array}\\right)_$@B, alors : <br/> <div style=\"border: 1px solid; padding-top:5px; padding-bottom: 5px; margin-top:5px;\">$\\vec{u}\\circ\\vec{v} = u_xv_x+u_yv_y+u_zv_z$</div>",
    "id": 35
}, {
    "type": "methode",
    "titre": "Produit scalaire (vecteurs orthogonaux ou colinéaires)",
    "resultat": "<ul><li>Si $\\vec{u}$ et $\\vec{v}$ sont colinéaires et de même sens, on a $\\vec{u}\\circ\\vec{v} = ||\\vec{u}||\\circ||\\vec{v}||$</li><li>Si $\\vec{u}$ et $\\vec{v}$ sont colinéaires et de sens contraire, on a $\\vec{u}\\circ\\vec{v} = -||\\vec{u}||\\circ||\\vec{v}||$</li><li>Si $\\vec{u}$ et $\\vec{v}$ sont orthogonaux, on a $\\vec{u}\\circ\\vec{v} = 0$</li></ul>",
    "id": 36
}, {
    "type": "texte",
    "titre": "Changement de base",
    "resultat": "Soient deux base$\\B_1$ et$\\B_2$ mobiles l'une par rapport à l'autre et $\\vec{V}$ un vecteur.<br/>Les composantes du vecteur $\\vec{V}$ dans la base$\\B_1$ sont notées $u_1$, $v_1$ et $w_1$. C'est à dire $\\vec{V} = \\left(\\begin{array}{ll} u_1\\\\ v_1\\\\ w_1 \\end{array}\\right)_{\\B_1}$<br/>Changer $\\vec{V}$ de base consiste à déterminer les composantes de $\\vec{V}$ dans$\\B_2$ telles que $\\vec{V} = \\left(\\begin{array}{ll} u_2 \\\\ v_2 \\\\ w_2 \\end{array}\\right)_{\\B_2}$<br/>Le mouvement de$\\B_2$ par rapport à$\\B_1$ est caractérisé par trois rotations élémentaires. En SI, on décompose toujours les rotations en rotations élémentaires autour d'un vecteur de la base et on projette dans ces bases successives.",
    "id": 37
}, {
    "type": "texte",
    "titre": "Changement de base autour de l'axe $\\vec{z}$",
    "resultat": "<img src=\"res/chang_base.png\"/><br/>En utilisant la figure du changement de base, on obtient :<br/>$\\vec{x_2} = \\cos(\\theta)\\vec{x_1} + \\sin(\\theta)\\vec{y_1}$ <br/> $\\vec{y_2} = -\\sin(\\theta)\\vec{x_1} + \\cos(\\theta)\\vec{y_1}$<br/>$\\vec{x_1} = \\cos(\\theta)\\vec{x_2} - \\sin(\\theta)\\vec{y_2}$ <br/> $\\vec{y_1} = \\sin(\\theta)\\vec{x_2} + \\cos(\\theta)\\vec{y_2}$<br/><hr/>Ainsi, si $\\vec{V}=u_1\\vec{x_1}+v_1\\vec{y_1}+w_1\\vec{z_1}$,<br/>Alors $\\vec{V} = u_1\\times(\\cos(\\theta)\\vec{x_2}-\\sin(\\theta)\\vec{y_2} + v_1\\times(\\sin(\\theta)\\vec{x_2}+\\cos(\\theta)\\vec{y_2}) + w_1\\vec{z_1}$<br/> Donc $u_2 = u_1\\cos(\\theta) + v_1\\sin(\\theta)$ ; $v_2 = -u_1\\sin(\\theta) + v_1\\cos(\\theta)$ et $w_2 = w_1$",
    "id": 38
}, {
    "type": "definition",
    "titre": "Mécanisme",
    "resultat": "Ensemble de pièces assemblées entre elles par des liaisons dans le but de réaliser une fonction déterminée.",
    "id": 39
}, {
    "type": "definition",
    "titre": "Solide indéformable $S$",
    "resultat": "Solide tel que la distance entre deux points $A$ et $B$ appartenant à ce système reste constante au cours du temps : <br/> $\\forall A \\in S$ et $\\forall B \\in S$, $AB = cste$",
    "id": 40
}, {
    "type": "texte",
    "titre": "Repère d'observation",
    "resultat": "Un repère est défini par une origine $O$, et par une base orthonormée directe de trois vecteurs $(\\vec{x}, \\vec{y}, \\vec{z})$. L'ensemble {<i>orgine</i> + <i>base</i>} forme un repère spatial d'observation.",
    "id": 41
}, {
    "type": "definition",
    "titre": "Référentiel",
    "resultat": "Ensemble formé par le repère <b>spatial</b> et le repère <b>temporel</b>.",
    "id": 42
}, {
    "type": "definition",
    "titre": "Repère cartésien",
    "resultat": "Le <b>repère cartésien</b> est défini par un point et une base orthonormée directe.",
    "id": 43
}, {
    "type": "texte",
    "titre": "Degrés de liberté d'un solide dans l'espace",
    "resultat": "La position d'un solide $S_k$ par rapport à un solide $S_i$ dépend de six paramètres indépendants. Il est usuel en mécanique de considérer : <ul><li>Les trois coordonnées du point origine du repère$\\cal{R}_k$ dans le repère$\\cal{R}_i$ : $(T_x, T_y, T_z)$</li><li>Les trois angles définissant l'orientation de la base $(\\vec{x_k}, \\vec{y_k}, \\vec{z_k})$ du repère$\\cal{R}_k$ par rapport à celle du repère$\\cal{R}_i$ : $(R_x, R_y, R_z)$</li></ul>",
    "id": 44
}, {
    "type": "definition",
    "titre": "Degré de liberté (ddl)",
    "resultat": "Possibilité de mouvement. Il existe donc au maximum six degrés de liberté (trois translations et trois rotations). <br/> ddl = 6 : il s'agit d'une liaison libre <br/> ddl = 0 : il s'agit d'un encastrement.",
    "id": 45
}, {
    "type": "texte",
    "titre": "Liaison parfaite",
    "resultat": "Une liaison est dite parfaite si : <ul><li>La géométrie du contact est parfaite (conditions vérifiées par les solides parfaits)</li> <li>Le contact entre les solides est sans adhérance (frottements négligés)</li> <li>Le contact est maintenu (jeux nuls)</li></ul>",
    "id": 46
}, {
    "type": "texte",
    "titre": "Positionnement des repères en fonction des mouvements autorisés",
    "resultat": "L'étude des mouvements autorisés entre les différents solides permet de proposer un paramétrage optimal du modèle cinématique en positionnant les repères de la façon suivante : <ul><li>Lorsque les deux solides sont en translation l'un par rapport à l'autre, les deux repères associés à ces solides sont positionnés de façon à avoir un axe commun qui coïncide avec l'axe de rotation</li> <li>Lorsque les deux solides sont en translation l'un par rapport à l'autre, les deux repères associés à ces solides sont positionnés de façon à avoir leurs trois axes parallèles, et l'un de ces axes coïncide avec la direction de la translation.</li></ul>",
    "id": 47
}, {
    "type": "definition",
    "titre": "Classe d'équivalence cinématique",
    "resultat": "C'est l'ensemble des solides d'un mécanisme sans mouvements relatifs. Elles sont liées par des liaisons encastrement.",
    "id": 48
}, {
    "type": "definition",
    "titre": "Graphe de liaison",
    "resultat": "C'est la représentation schématique du mécanisme par la synthétisation des liaisons entre classes d'équivalences. <br/> <ul><li>Les classes d'équivalence sont représentées par des cercles contenant le nom de la classe</li> <li>Les liaisons sont représentées par des arcs de courbes rejoignant les cercles. Le nom et les caractéristiques géométriques de la liaison sont indiqués près de l'arc.</li></ul>",
    "id": 49
}, {
    "type": "texte",
    "titre": "Structures formées par les graphes de liaisons",
    "resultat": "On distingue trois types de structures : <ul><li><b>Chaîne ouverte</b> : Association en série de solides et de liaisons</li> <li><b>Chaîne fermée</b> : Une ou plusieurs boucles apparaissent dans le graphe de liaison</li> <li><b>Chaîne complexe</b> : Association de chaînes ouvertes et fermées sur un même graphe.</li></ul>",
    "id": 50
}, {
    "type": "definition",
    "titre": "Schéma cinématique",
    "resultat": "C'est un outil de représentation géométrique d'un mécanisme. <br/> Dans ce schéma : <ul><li>Les classes d'équivalences sont représentées par un segment</li> <li>Les liaisons sont représentées par un symbole normalisé (plan ou spatial). L'orientation et la position doivent être respectées.</li></ul>",
    "id": 51
}, {
    "type": "texte",
    "titre": "Schéma cinématique minimal",
    "resultat": "Certaines liaisons peuvent être regroupées en une seule liaison normalisée, on parle alors de <b>liaison équivalente</b>. Le schéma cinématique associé aux liaisons équivalentes est alors nommé <b>schéma cinématique minimal</b>. De même, le graphe des liaisons associé est dit <b>minimal</b>.",
    "id": 52
}, {
    "type": "texte",
    "titre": "Vecteur position",
    "resultat": "La position du point $M$, appartenant au solide $S_k$ en mouvement par rapport à un repère de référence $\\cal{R}_i$, est variable avec le temps.<br/>Soit $O_i$ un point fixe de repère$\\cal{R}_i$, le vecteur $\\vec{O_iM_i}$ variable avec le temps est appelé vecteur position du point $M_i$ relativement à$\\cal{R}_i$.",
    "id": 53
}, {
    "type": "definition",
    "titre": "Trajectoire",
    "resultat": "La trajectoire d'un point $M$ du solide $S_k$ en mouvement par rapport à un repère de référence $\\cal{R}_i$ est l'ensemble des points $M_i(t)$ coïncidant à chaque instant avec le point $M$ au cours du déplacement du solide $S_k$.",
    "id": 54
}, {
    "type": "texte",
    "titre": "Loi entrée-sortie géométrique",
    "resultat": "C'est la relation entre un paramètre de position de la pièce supposée à la sortie d'un mécanisme, avec un paramètre de position de la pièce d'entrée.<br/> <ul><li><b>Paramètre d'entrée</b> : en général, paramètre associé au mouvement \"utile\" du mécanisme, c'est-à-dire celui pour la réalisation duquel il a été conçu.</li> <li><b>Paramètre de sortie</b> : en général piloté par l'utilisateur.</li></ul><br/>Cette relation ne fait intervenir aucun autre paramètre de liaison variable au cours du temps et dépend seulement des caractéristiques géométriques du mécanisme.",
    "id": 55
}, {
    "type": "texte",
    "titre": "Fermeture angulaire",
    "resultat": "Il s'agit d'écrire la relation de bouclage sur les angles mesurés dans un même plan. <br/> $(\\vec{x_0}, \\vec{x_0}) = (\\vec{x_0}, \\vec{x_1}) + (\\vec{x_1}, \\vec{x_2}) + ... + (\\vec{x_n}, \\vec{x_0}) = 0$",
    "id": 56
}, {
    "type": "texte",
    "titre": "Fermeture linéaire",
    "resultat": "Il s'agit d'écrire la fermeture vectorielle sur les vecteurs en positions en parcourant la chaîne de solides constituants la boucle. <br/> $\\vec{AB}+\\vec{BC}+\\vec{CD}+\\vec{DE}+\\vec{EA} = \\vec{0}$",
    "id": 57
}, {
    "type": "methode",
    "titre": "Faire disparaître les termmes non pertinents",
    "resultat": "On pensera à utiliser certaines relations mathématiques intéressantes afin de faire disparaître les termes non pertinents pour l'étude : <ul><li>$\\cos^2(\\theta) + \\sin^2(\\theta) = 1$</li><li>$\\sin(\\arccos(\\theta)) = \\cos(\\arcsin(\\theta)) = \\sqrt{1-\\theta^2}$</li></ul>",
    "id": 58
}];

const quiz_notions_prel_model_cin_sys = [{
    "type": "definition",
    "titre": "Produit vectoriel",
    "resultat": "Le produit vectoriel est défini par la relation $\\vec{u} \\land \\vec{v} = ||\\vec{u}||\\circ||\\vec{v}||\\circ\\sin(\\theta)\\circ\\vec{n}$ <br/> <ul><li>où $\\theta = (\\vec{u}, \\vec{v})$</li><li>$\\vec{n}$ est le vecteur unitaire normal à $\\vec{u}$ et $\\vec{v}$ tel que $(\\vec{u}, \\vec{v}, \\vec{n})$ soit une base directe lorsque $\\theta$ est positif.</li></ul>",
    "id": 59
}, {
    "type": "propriete",
    "titre": "Propriétés du produit vectoriel",
    "resultat": "Le produit vectoriel est antisymétrique et distributif<br/>$\\vec{u} \\land \\vec{v}= -\\vec{v} \\land \\vec{u}$<br/>$\\vec{u} \\land (\\alpha .\\vec{v} + \\beta . \\vec{w})$ = $\\alpha .\\vec{u} \\land \\vec{v}$ $+$ $\\beta . \\vec{u} \\land \\vec{v}$",
    "id": 60
}, {
    "type": "texte",
    "titre": "Relations des produits vectoriels",
    "resultat": "$\\vec{x} \\land \\vec{y} = \\vec{z}$ $\\ \\ \\ \\ $ $\\vec{y} \\land \\vec{x} = -\\vec{z}$ <br/> $\\vec{y} \\land \\vec{z} = \\vec{x}$ $\\ \\ \\ \\ $ $\\vec{z}\\land\\vec{y} = -\\vec{x}$ <br/> $\\vec{z}\\land \\vec{x} = \\vec{y}$ $\\ \\ \\ \\ $ $\\vec{x}\\land\\vec{z} = -\\vec{y}$",
    "id": 61
}, {
    "type": "definition",
    "titre": "Dérivation d'un vecteur par rapport au temps",
    "resultat": "La dérivation d'un vecteur en fonction du temps nécessite de préciser la base de dérivation, c'est-à-dire de préciser la base dont les 3 vecteurs seront supposés fixes au cours du temps.<br/><br/>Si $\\vec{u}(t)$ est un vecteur fonction du temps, sa dérivée par rapport à la base $\\B_0$ s'écrit $$\\left. \\frac{d\\vec{u}(t)}{dt} \\right |_{\\B_0}$$",
    "id": 62
}, {
    "type": "texte",
    "titre": "Dérivation d'un vecteur / Composantes",
    "resultat": "En exprimant les composantes de $\\vec{u}(t)$ dans $\\B_0$, la dérivée de $\\vec{u}(t)$ dans $\\B_0$ est obtenue en dérivant chacune des composantes par rapport au temps.<br/> Si $\\vec{u}(t)$ $ = $ $x_0(t).\\vec{x_0} + y_0(t).\\vec{y_0} + z_0(t).\\vec{z_0}$, alors $$\\left. \\frac{d\\vec{u}(t)}{dt} \\right |_{\\B_0}$$ $=$ $\\dot{x_0}(t).\\vec{x_0}$ + $\\dot{y_0}(t).\\vec{y_0}$ + $\\dot{z_0}(t).\\vec{z_0}$",
    "id": 63
}, {
    "type": "propriete",
    "titre": "Formule de Bour",
    "hypotheses": "Soit deux bases $\\B_1$ et $\\B_2$. Pour tout $\\vec{u}(t)$ de l'espace :",
    "resultat": "$\\left. \\frac{d\\vec{u}(t)}{dt} \\right |_{\\B_1}$ = $\\left. \\frac{d\\vec{u}(t)}{dt} \\right |_{\\B_2}$ = $\\vec{\\Omega} (\\B_1 / \\B_2) \\land \\vec{u}(t)$",
    "id": 64
}, {
    "type": "propriete",
    "titre": "Somme de dérivation de vecteurs",
    "resultat": "$\\left. \\frac{d(\\vec{V_1}(t)+\\vec{V_2}(t))}{dt} \\right |_{\\B}$ = $\\left. \\frac{d\\vec{V_1}(t)}{dt} \\right |_{\\B}$ + $\\left. \\frac{d\\vec{V_2}(t)}{dt} \\right |_{\\B}$",
    "id": 65
}, {
    "type": "propriete",
    "titre": "Produit par une fonction scalaire de vecteurs dérivés",
    "resultat": "$\\left. \\frac{d(f(t).\\vec{V}(t))}{dt} \\right |_{\\B}$ = $f(t). \\left. \\frac{d\\vec{V}}{dt} \\right |_{\\B}$ + $\\frac{df(t)}{dt}.\\vec{V}(t)$",
    "id": 66
}, {
    "type": "propriete",
    "titre": "Dérivée du produit scalaire",
    "resultat": "$\\left. \\frac{d(\\vec{V_1}(t).\\vec{V_2}(t))}{dt} \\right |_{\\B}$ = $\\left. \\frac{d\\vec{V_1}(t)}{dt} \\right |_{\\B}.\\vec{V_2}(t)$ + $\\vec{V_1}(t).\\left. \\frac{d\\vec{V_2}}{dt} \\right |_{\\B}$",
    "id": 67
}, {
    "type": "propriete",
    "titre": "Dérivée d'un produit vectoriel",
    "resultat": "$\\left. \\frac{d(\\vec{V_1}(t) \\land \\vec{V_2}(t))}{dt} \\right |_{\\B}$ = $\\left. \\frac{d\\vec{V_1}(t)}{dt} \\right |_{\\B} \\land \\vec{V_2}$ + $\\vec{V_1}(t) \\land \\left. \\frac{d\\vec{V_2}(t)}{dt} \\right |_{\\B}$",
    "id": 68
}, {
    "type": "definition",
    "titre": "Torseur",
    "resultat": "On appele torseur $\\{\\cal{T} \\}$ l'ensemble d'un champ de vecteurs antysymétriques $\\vec{M}$ et d'un vecteur $\\vec{R}$ associé.<br/>$\\vec{R}$ est appelée la résultante et $\\vec{M_A}$ le moment d'un point $A$.<br/>Pour définir complètement un torseur, il suffit de préciser sa résultante et son moment en un point quelconque $A$ de l'espace. Ces deux vecteurs sont appelées les <b>éléments de réduction</b> du torseur au point $A$.",
    "id": 69
}, {
    "type": "texte",
    "titre": "Notation d'un torseur",
    "resultat": "$\\{\\cal{T}\\}$ = $\\left \\{ \\begin{array}{tt} \\vec{R} \\\\ \\vec{M_A} \\end{array} \\right\\}_A$ = $\\left \\{ \\begin{array}{ll} R_x.\\vec{x} + R_y.\\vec{y} + R_z.\\vec{z} \\\\ M_{Ax}.\\vec{x} + M_{Ay}.\\vec{y} + M_{Az}.\\vec{z} \\end{array} \\right \\}_A$ = $\\left \\{ \\begin{array}{ll} R_x \\ M_{Ax} \\\\ R_y \\ M_{Ay} \\\\ R_z \\ M_{Az} \\end{array} \\right \\}_{A, (\\vec{x}, \\vec{y}, \\vec{z})}$",
    "id": 70
}, {
    "type": "propriete",
    "titre": "Formule de Varignon",
    "resultat": "Un champs de vecteur $\\vec{M}$ est antisymétrique si, et seulement si, pour deux points $A$ et $B$ quelconques de l'espace : <br/> $\\vec{M_B} = \\vec{M_A} + \\vec{BA} \\land \\vec{R}$.<br/>Cette propriété permet de calculer les coordonnées d'un torseur en différents points.",
    "id": 71
}, {
    "type": "propriete",
    "titre": "Somme de deux torseurs",
    "hypotheses": "Soient deux torseurs $ \\{ \\cal{T}_1 \\} $ et $ \\{ \\cal{T}_2 \\} $ tels que $\\{ \\cal{T}_1 \\}$ = $\\left \\{ \\begin{array}{ll} \\vec{R_1} \\\\ \\vec{M_{A,1}} \\end{array} \\right \\}_A $ et $\\{ \\cal{T}_2 \\}$ = $\\left \\{ \\begin{array}{ll} \\vec{R_2} \\\\ \\vec{M_{A,2}} \\end{array} \\right \\}_A $",
    "resultat": "$\\{\\cal{T}_1\\}$ + $\\{\\cal{T}_2\\}$ = $\\left\\{ \\begin{array}{ll} \\vec{R_1} + \\vec{R_2} \\\\ \\vec{M_{A,1}} + \\vec{M_{A,2}}\\end{array}\\right\\}_A$<br/><b>Attention ! Sommer deux torseurs dont les éléments de réduction sont exprimés en des points différents n'a aucun sens !</b>",
    "id": 72
}, {
    "type": "propriete",
    "titre": "Multiplication d'un torseur par un scalaire",
    "hypotheses": "Soit $\\{\\cal{T}\\}$ un torseur et $\\alpha$ un réel.",
    "resultat": "$\\alpha . \\{\\cal{T}\\}$ = $\\left\\{ \\begin{array}{ll} \\alpha . \\vec{R_1} \\\\ \\alpha.\\vec{M_{A,1}} \\end{array} \\right\\}_A$",
    "id": 73
}, {
    "type": "propriete",
    "titre": "Comoment de deux torseurs",
    "resultat": "$\\{\\cal{T_1}\\} \\bigotimes \\{\\cal{T_2}\\}$ = $\\vec{R_1}.\\vec{M_{A,2}} + \\vec{R_2}.\\vec{M_{A,1}}$<br/><b>Les moments doivent impérativement être exprimés au même point.</b> Mais le résultat ne dépend pas du point $A$ choisi/",
    "id": 74
}, {
    "type": "definition",
    "titre": "Axe central d'un torseur",
    "resultat": "On appelle axe central d'un torseur $\\{\\cal{T}\\}$ l'ensemble des points $I$ pour lesquels le champ $\\vec{M}$ est colinéaire à $\\vec{R}$. Soit $\\vec{M_I} = \\alpha . \\vec{R}$, avec $\\alpha \\in \\R$.<br/>On remarque que l'axe centrale est toujours une droite parallèle à $\\vec{R}$",
    "id": 75
}, {
    "type": "definition",
    "titre": "Torseur glisseur",
    "resultat": "Un glisseur est un tourseur dont l'automoment $\\cal{A} = \\vec{R_1}.\\vec{M_{A,1}}$ est nul avec $\\vec{R} \\neq \\vec{0}$.<br/>Le moment est donc toujours perpendiculaire à la résultante et il est nul sur l'axe central pour ce type de torseur.<br/>En pratique, il suffit de trouver un point $A$ tel que $\\{\\cal{T}\\}$=$\\left\\{ \\begin{array}{ll} \\vec{R} \\\\ \\vec{0} \\end{array} \\right\\}_A$",
    "id": 76
}, {
    "type": "definition",
    "titre": "Torseur couple",
    "resultat": "Un couple est un torseur dont la résultante est nulle : $\\vec{R} = \\vec{0}$.<br/>Le moment est donc constant en tout point de l'espace et il n'y a pas d'axe central pour ce torseur.<br/>Ainsi $\\{\\cal{T}\\}$=$\\left\\{ \\begin{array}{ll} \\vec{0} \\\\ \\vec{M} = \\vec{\\cal{C}} \\end{array} \\right\\}_{\\forall M \\in \\R^3}$",
    "id": 77
}];

const quiz_modelisation_cinematique_solides = [{
        "type": "definition",
        "titre": "Vecteur taux de rotation",
        "resultat": "Le vecteur taux de rotation $\\vec{\\Omega}_{R_k/r_i}$ caractérise la vitesse de changement d'orientation du repère $R_k$ associé au solide $S_k$ par rapport au repère $R_i$. L'expression de ce vecteur $\\vec{\\Omega}_{R_k/R_i}$ dépend uniquement de la variation de l'orientation du repère $R_k$ par rapport au repère $R_i$",
        "id": 78
    }, {
        "type": "definition",
        "titre": "Vitesse d'un point $M$",
        "resultat": "La vitesse d'un point $M$ par rapport au référentiel $R_k (O_k, \\vec{x_k}, \\vec{y_k}, \\vec{z_k})$ est égale à la dérivée du vecteur position $\\vec{O_kM(t)}$ en utilisant la base $B_k$ comme base de dérivation : <br/>$$\\vec{V}(M / R_k) = \\left. \\frac{d\\vec{O_kM(t)}}{dt} \\right |_{B_k}$$<br/>avec $O_k$ fixe dans le repère $B_k$.",
        "id": 79
    }, {
        "type": "propriete",
        "titre": "Composition des vecteurs vitesse",
        "resultat": "$\\vec{V}(M/R_i)$ = $\\vec{V}(M/R_k)$ + $\\vec{V}(O_k/R_i)$ + $\\vec{Mo_k} \\land \\Omega(R_k/R_i)$<br/><ul><li>$\\vec{V}(M/R_i)$ est la vitesse du point $M$ pour un observateur lié au repère $R_i$</li><li>$\\vec{V}(M/R_k)$ est la vitesse du point $M$ pour un observateur lié au repère $R_k$</li><li>$\\Omega(R_k/R_i)$ est le vecteur vitesse de rotation du repère $R_k$ par rapport au repère $R_i$</li><li>Le terme $\\vec{V}(O_k/O_i)$ + $\\vec{MO_k} \\land \\vec{\\Omega}(R_k/R_i)$ est appelé <b>vitesse d'entraînement</b> du poinjt $M$ dans le mouvement du repère $R_k$ par rapport au repère $R_i$, noté $\\vec{V}(M \\in R_k/R_i)$. Il s'agit de la vitesse qu'aurait le point $M$ s'il était physiquement attaché au repère $R_k$ et que l'on observait son mouvement par rapport au repère $R_i$.</li></ul>",
        "id": 80
    }, {
        "type": "propriete",
        "titre": "Antisymétrie du vecteur vitesse d'entraînement",
        "resultat": "<ul><li>$\\vec{V}(M \\in R_k/R_i)$ = $-\\vec{V}(M \\in R_i/R_k)$</li> <li>$\\vec{V}(M \\in R_k/R_i)$ = $\\vec{V}(M/R_i)$ - $\\vec{V}(M/R_k)$</li></ul>",
        "id": 81
    }, {
        "type": "definition",
        "titre": "Accélération d'un point $M$",
        "resultat": "L'accélération d'un point $M$ par rapport à un référentiel $R_k(O_k, \\vec{x_k}, \\vec{y_k}, \\vec{z_k})$ est égale à la dérivée du vecteur vitesse $\\vec{V}(M/R_k)$ en utilisant la base $B_k$ comme base de dérivation : <br/>$$\\vec{\\Gamma}(M/R_k) = \\left. \\frac{d\\vec{V}(M/R_k)}{dt} \\right|_{B_k}$$",
        "id": 82
    }, {
        "type": "propriete",
        "titre": "Champ de vecteurs vitesse",
        "resultat": "Le champ des vecteurs-vitesse du solide $S_k$ parn rapport au repère $R_i$ s'écrit donc : <br/>$\\vec{V}(A \\in S_k/rR_i)$ = $\\vec{V}(O_k \\in S_k / R_i)$ + $\\vec{AO}$ $\\land$ $\\vec{\\Omega}(R_k / R_i)$",
        "id": 83
    }, {
        "type": "definition",
        "titre": "Résultante du torseur cinématique",
        "resultat": "$\\vec{\\Omega}(R_k/R_i)$<br/><b>Indépendante du point A</b> choisi pour exprimer le torseur cinématique.<br/>Vecteur vitesse de rotation du repère $R_k$ par rapport au repère $R_i$. <br/> <i>Unité : rad.s^{-1}</i>",
        "id": 84
    }, {
        "type": "definition",
        "titre": "Moment au point $A$ du torseur cinématique",
        "resultat": "$\\vec{V}(A \\in R_k / R_i)$<br/><b>Dépendant du point A</b> choisi pour exprimer le torseur cinématique.<br/>Vecteur vitesse du point $A$ appartenant au solide $S_k$ par rapport au repère $R_i$.<br/><i>Unité : m.s^{-1}</i>",
        "id": 85
    }, {
        "type": "definition",
        "titre": "Torseur cinématique",
        "resultat": "Le torseur cinématique caractéristique du mouvement du solide $S_k$ par rapport au solide $S_i$, s'écrit au point $A$ : $$\\{\\cal{V}(S_k/R_i)\\} = \\left\\{ \\begin{array}{ll} \\vec{\\Omega}(R_k/R_i) \\\\ \\vec{V}(A \\in R_k / R_i) \\end{array} \\right\\}_A$$<br/><ul><li>$\\vec{\\Omega}(R_k / R_i)$ est appelé <b>résultante</b> du torseur cinématique de $S_k$ par rapport à $R_i$</li><li>$\\vec{V}(A \\in R_k / R_i)$ est appelé <b>moment en $A$</b> du torseur cinématique de $S_k$ par rapport à $R_i$</li></ul>",
        "id": 86
    }, {
        "type": "propriete",
        "titre": "Formule de BABAR",
        "resultat": "Le champs de vecteurs vitesse est équiprojectif et défini en tout point de l'espace. La formule de changement de point permet de trouver la relation entre les vitesses en deux points $A$ et $B$ dans le mouvemnet du solide $S_k$ par rapport à $R_i$ : <br/> $\\vec{V}(B \\in S_k / R_i)$ = $\\vec{V}(A \\in S_k / R_i)$ + $\\vec{BA}$ $\\land$ $\\vec{\\Omega}(R_k/R_i)$",
        "id": 87
    }, {
        "type": "definition",
        "titre": "Torseur cinématique",
        "resultat": "Connaissant l'expression du torseur cinématique au point $A$, il est possible d'en déduire son expression en tout point $B$ (relation de changement de point): $$\\{\\cal{V}(k/i)\\}$$ $$=\\left\\{\\begin{array}{ll} \\vec{\\Omega}(k/i) \\\\ \\vec{V}(B \\in k/i) \\end{array}\\right\\}_B$$ $$=\\left\\{\\begin{array}{ll} \\vec{\\Omega}(k/i) \\\\ \\vec{V}(A \\in k/i) + \\vec{BA} \\land \\vec{\\Omega}(k/i) \\end{array}\\right\\}_B$$ <br/> Il n'est pas nécessaire que le point $B$ soit physiquement un point du solide $S_k$. Il faut et il suffit qu'il soit considéré comme fixe dans le repère $R_k$ lié au solide $S_k$.",
        "id": 88
    }, {
        "type": "definition",
        "titre": "Mouvement de translation",
        "resultat": "Un solide $S_k$ est animé d'un mouvement de translation par rapport au repère $R_i$, si deux vecteurs non parallèles $\\vec{AB}$ et $\\vec{AC}$ appartenant à $S_k$ restent constants au cours du mouvement.",
        "id": 89
    }, {
        "type": "definition",
        "titre": "Torseur cinématique d'un mouvement de translation",
        "resultat": "Un solide $S_k$ est animé d'un mouvement de translation par rapport au repère $R_i$, alors le torseur cinématique caractérisant le mouvement de $S_k$ par rapport à $R_i$ s'écrit sous la forme suivante : <br/> $\\{\\cal{V}(k/i)\\}$ = $\\left\\{\\begin{array}{ll} \\vec{0} \\\\ \\vec{V}(A \\in k/i) \\neq \\vec{0} \\end{array}\\right\\}_A$<br/>Ce torseur est un torseur couple.",
        "id": 90
    }, {
        "type": "definition",
        "titre": "Mouvement de rotation",
        "resultat": "Un solide $S_k$ est animé d'un mouvement de rotation par rapport à un repère $R_i$ autour de la droite $(AB)$ si tous les points situés à l'intersection du solide $S_k$ et de la droite $AB$ restent fixes au cours du mouvment. La droite $(AB)$ est appelé axe de rotation.",
        "id": 91
    }, {
        "type": "propriete",
        "titre": "Torseur cinématique d'un mouvement de rotation",
        "resultat": "Le torseur cinématique caractérisant le mouvement de $S_k$ par rapport à $R_i$ a alors la forme suivante : <br/> $\\{\\cal{V}(S_k/R_i)\\}$ = $\\left\\{\\begin{array}{ll} \\vec{\\Omega}(k/i) \\\\ \\vec{0} \\end{array}\\right\\}_{*}$<br/> * : $\\forall M \\in $ axe de rotation.",
        "id": 92
    }, {
        "type": "propriete",
        "titre": "La vitesse pour un mouvement de rotation",
        "resultat": "<b>Propriété 1 : </b> La norme du vecteur vitesse d'un point $M_j$ appartenant à un solide $S_k$ en rotation par rapport à un repère $R_i$, est proportionnelle à la distance du point $M_j$ à l'axe de rotation ($\\Delta$) et à la vitesse de rotation $\\omega$ du solide $S_k$ dans le repère $R_i$.<br/>$||\\vec{V}(M_j \\in k/i)||$ = $V_{m_j}$ = $R_i . \\omega$ = $R_i . d \\theta$ <br/><b>Propriété 2 : </b>Tous les points situés à une même distance de l'axe de rotation ($\\Delta$) ont des vecteurs vitesse de même norme. <br/><b>Propriété 3 : </b>Tous les points situés sur une même génératrice parallèle à l'axe de rotation ont des vecteurs vitesse de même direction, même sens et même norme.",
        "id": 93
    }, {
        "type": "propriete",
        "titre": "Composition des vecteurs vitesse de rotation",
        "resultat": "$\\vec{\\Omega}(R_n / R_0)$ = $\\vec{\\Omega}(R_n / R_{n-1})$ + $\\dots$ + $\\vec{\\Omega}(R_1 / R_0)$",
        "id": 94
    }, {
        "type": "propriete",
        "titre": "Composition des vecteurs vitesse en $A$",
        "resultat": "$\\vec{V}(A \\in R_n / R_0)$ = $\\vec{V}(A \\in R_n/R_{n-1}$ + $\\dots$ + $\\vec{V}(A \\in R_1/R_0)$",
        "id": 95
    }, {
        "type": "propriete",
        "titre": "Composition des torseurs cinématiques",
        "resultat": "$\\{\\cal{V}(R_n/R_0\\}$ = $\\{\\cal{V}(R_n / R_{n-1}\\}$ + $\\dots$ + $\\{\\cal{V}(R_1/R_0)\\}$",
        "id": 96
    }, {
        "type": "propriete",
        "titre": "Détermination de l'accélération d'un point $M$",
        "resultat": "Pour déterminer l'accélération du point $A$ appartenant au solide $S_k$ par rapport au repère $R_i$, il faut dériver le vecteur vitesse dans la base $B_i$ : <br/>$\\vec{\\Gamma}(A \\in S_k / R_i)$ = $\\left. \\frac{d\\vec{V}(A \\in S_k / R_i)}{dt} \\right |_{B_i}$",
        "id": 97
    }, {
        "type": "definition",
        "titre": "Liaison équivalente",
        "resultat": "Une liaison entre les deux solides $S_1$ et $S_2$ est cinématiquement équivalente à l'ensemble des liaisons situées entre ces deux solides si elle autorise les mêmes mouvements relatifs entre eux.",
        "id": 98
    }, {
        "type": "methode",
        "titre": "Liaisons en parallèle - Cinématique",
        "resultat": "$\\{\\cal{V}_{2/1}^{L_{eq}}\\}$ = $\\{\\cal{V}_{2/1}^{L_1}\\}$ = ... = $\\{\\cal{V}_{2/1}^{L_n}\\}$",
        "id": 99
    }, {
        "type": "methode",
        "titre": "Liaisons en série - Cinématique",
        "resultat": "$\\{\\cal{V}_{0/n}\\}$ = $\\{\\cal{V}_{0/1}\\}$ + $\\dots$ + $\\{\\cal{V}_{n-1/n}\\}$",
        "id": 100
    }, {
        "type": "definition",
        "titre": "Nombre cyclomatique",
        "resultat": "Dans le cas d'un mécanisme en chaîne fermée, on appelle cycle un chemin fermé du graphe ne passant pas deux fois par le même sommet. Parmi les cycles qui peuvent être mis en évidence dans un graphe, un certain nombre sont indépendants.<br/>Le nombre $\\gamma$ de cycles indépendants, appelés nombre cyclomatique, peut être calculé par la relation $\\gamma = n_L - n_p +1$ avec $n_p$ le nombre de solides (bâti compris) constituant le mécanisme et $n_L$ le nombre de liaisons reliant les solides.",
        "id": 101
    }, {
        "type": "definition",
        "titre": "Loi E/S chaîne fermée",
        "resultat": "Une relation de fermeture cinématique est une somme de torseur égale au torseur nul, écrite par composition des mouvements dans une chaîne cinématique fermée.",
        "id": 102
    }, {
        "type": "definition",
        "titre": "Vitesse de glissement",
        "resultat": "On appelle vitesse deglissement du solide $S_k$ par rapport au solide $S_i$, dans le repère $R_0$, au point $I$ le vecteur : <br/>$\\vec{G}_{/\\cal{R}_0}(I)$ = $\\vec{V}(I \\in S_k // \\cal{R}_0)$ - $\\vec{V}(I \\in S_i / \\cal{R}_0)$",
        "id": 103
    }, {
        "type": "propriete",
        "titre": "Vitesse de glissement : notation",
        "resultat": "La vitesse de glissement notée $\\vec{V}(I \\in S_k / S_i)$ est indépendante du repère de référence.",
        "id": 104
    }, {
        "type": "propriete",
        "titre": "Vitesse de glissement : direction",
        "resultat": "La vitesse du glissement du solide $S_k$ par rapport au solide $S_i$, au point $I$, est contenue dans le plan tangent commun $\\pi$.",
        "id": 105
    }, {
        "type": "definition",
        "titre": "Notation, vecteur taux de rotation",
        "resultat": "Le vecteur taux de rotation (ou vitesse angulaire) peut s'écrire sous la forme d'une somme de deux vecteurs, l'un perpendiculaire au plan tangent, l'autre dans le plan tangent : <br/> $\\vec{\\Omega}(S_k / S_i)$ = $\\vec{\\Omega_t}(S_k / S_i)$ + $\\vec{\\Omega_n}(S_k / Si)$<br/> <ul><li>$\\vec{\\Omega_n}(S_k / S_i)$ = $(\\vec{\\Omega}(S_k/S_i).\\vec{n})$  $\\vec{n}$ est appelé <b>vecteur pibotement</b> du solide $S_k$ par rapport au solide $S_i$.</li> <li>$\\vec{\\Omega_t}(S_k / S_i)$ = $(\\vec{n} \\land \\vec{\\Omega}(S_k / S_i))$ $\\land$ $\\vec{n}$ est appelé <b>vecteur roulement</b> du solide $S_k$ par rapport au solide $S_i$</li></ul>",
        "id": 106
    }
    // , {
    //     "type": "remarque",
    //     "titre": "Roulement sans glissement",
    //     "resultat": "Un cas particulier fréquemment rencontré est le cas du roulement sans glissement (contact d'une roue sur le sol, engrènement, etc.). La condition cinématique de roulement sans glissement du solide $S_k$ par rapport au solide $S_i$ en contact au point $I$, s'écrit : <br/>$\\vec{V}(I \\in S_k / S_i)$",
    //     "id": 107
    // }
];

/*
    ,{
        "type": "texte",
        "titre": "",
        "resultat": "",
        "id": 0
    }

    NEXT ID : 78

*/


// TOUS LES QUIZS SONT DANS LA VARIABLE QUIZS

const Quizs = {
    "Analyse des systèmes complexes": quiz_analyse_systemes_complexes,
    "Modélisation géométrique des systèmes solides": quiz_modelisation_geometrique_systemes_solides,
    "Notions préliminaires au modèle cinématique": quiz_notions_prel_model_cin_sys,
    "Modélisation cinématique des systèmes solides": quiz_modelisation_cinematique_solides
};