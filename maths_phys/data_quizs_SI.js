const quiz_analyse_systemes_complexes = [{
    "type": "definition",
    "titre": "Système",
    "resultat": "Un <b>système</b> est décrit comme un ensemble d'éléments en <b>interaction</b> entre eux et avec l'environement, intégrés pour rendre à son environnement les <b>services</b> correspondants à sa finalité. Des propriétés nouvelles résultent de ces interactions, un système est donc bien plus qu'un ensemble de composants : les <b>flux d'information</b>, <b>d'énergie</b> ou <b>de matière</b> échangés entre les composants sont essentiels dans le comportement global.",
    "id": 0
}, {
    "type": "texte_physique",
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
    "type": "texte_physique",
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
    "type": "texte_physique",
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
    "type": "texte_physique",
    "titre": "Signal analogique",
    "resultat": "Un signal analogique est décrit par une fonction continue du temps, et la grandeur représentée ne peut prendre qu'un certain nombre fini de valeurs.",
    "id": 22
}, {
    "type": "texte_physique",
    "titre": "Signal numérique",
    "resultat": "Un signal numérique est décrit par une fonction discrete (non continue) du temps, et la grandeur représentée ne peut prendre qu'un certain nombre fini de grandeur.",
    "id": 23
}, {
    "type": "texte_physique",
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
    "resultat": "L'association de trois vecteurs non liés forme  une base @B. On utilisera en SI unique des bases orthonormée directes $(\\vec{x}, \\vec{y}, \\vec{z})$ telles que : <ul><li>Les trois vecteurs sont <b>orthogonaux deux à deux</b></li> <li>Les trois vecteurs sont de <b>norme unitaire</b></li> <li>L'orientation des trois vecteurs est <b>directe</b>.</li> </ul> <br/> <img class=\"imgc\" src=\"res/base_ortho.png\" />",
    "id": 30
}];

/*

    ,{
        "type": "texte_physique",
        "titre": "",
        "resultat": "",
        "id": 0
    }

    NEXT ID : 28

*/


// TOUS LES QUIZS SONT DANS LA VARIABLE QUIZS

const Quizs = {
    "Analyse des systèmes complexes": quiz_analyse_systemes_complexes,
    "Modélisation géométrique des systèmes solides": quiz_modelisation_geometrique_systemes_solides,
};