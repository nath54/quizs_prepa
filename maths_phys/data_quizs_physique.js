const quiz_propagation_signal = [{
    "type": "texte_physique",
    "titre": "Les deux grands concepts de la physique classique que l'on peut associer à presques tous les phénomènes que l'on peut observer",
    "resultat": "Ondes et particules",
    "id": 0
}, {
    "type": "texte_physique",
    "titre": "Il y a une grande différence entre les concepts d'ondes et de particules",
    "resultat": " - Le mot <b>particule</b> suggère une infime concentration de matière capable de transmettre de l'énergie et de la quantité de mouvement. <br/> - Le mot <b>onde</b> suggère exactement l'opposé, c'est à dire une transmission d'énergie qui utilise un espace relativement grand.",
    "id": 1
}, {
    "type": "definition",
    "titre": "Signal physique",
    "resultat": "On appelle <b>\"signal physique\"<b> une grandeur physique $s(t)$ dépendant du temps (et/ou de l'espace), porteuse d'une information dans un milieu, dont la valeur des différentes caractéristiques est susceptible d'être mesurée.",
    "id": 2
}, {
    "type": "definition",
    "titre": "onde et signal physique",
    "resultat": "Une onde est une perturbation qui voyage ou se propage sans déplacement macroscopique de matière et transporte avec de l'énergie. <br /> Toute grandeur physique, nulle à l'état de repos, et apparaissant avec la perturbation s'appelle signal physique $s$ transporté par l'onde.",
    "id": 3
}, {
    "type": "texte_physique",
    "titre": "Différents exemples de signaux",
    "resultat": "Il y a plusieur grandes catégories du signaux (ou ondes) mettant en évidence la grandeur physique qu'ils mettent en jeu. <br /> Il y a par exemple : <br /> <ul><li>Les signaux mécaniques</li><li>Les signaux acoustiques</li><li>Les signaux électriques</li><li>Les signaux électromagnétiques</li><li>Les ondes de matières</li></ul>",
    "id": 4
}, {
    "type": "propriete",
    "titre": "existence d'une onde mécanique",
    "resultat": "Toutes les ondes mécaniques ne peuvent exister qu'en présence d'un milieu matériel ayant des propriétés plus ou moins élastiques (ou \"rigides\") comme l'eau, l'air, les roches, le béton.",
    "id": 5
}, {
    "type": "definition",
    "titre": "signal acoustique",
    "resultat": "Le signal acoustique correspond à une variation de la pression accompagnée d'un déplacement localisé de matière",
    "id": 6
}, {
    "type": "definition",
    "titre": "signal éléctrique",
    "resultat": "Un signal éléctrique correspond à la variation d'une grandeur physique comme la tension, le courant électrique ou le potentiel électrique dans un milieu conducteur.",
    "id": 7
}, {
    "type": "definition",
    "titre": "onde électromagnétique",
    "resultat": "Une onde électromagnétique correspond à une perturbation qui se propage qui est dans ce cas particulier une grandeur vectorielle appelée \"champs électrique $\\vec{E}$ ou champs magnétique $\\vec{B}$\". <br /> Les ondes électromagnétiques n'ont pas besoin de milieu matériel pour se propager. <b>Elles peuvent donc se propager dans le vide</b>.",
    "id": 8
}, {
    "type": "definition",
    "titre": "onde transversale",
    "resultat": "Une onde est dite transversale si les éléments du milieu affectés par la perturbation oscillent perpendiculairement à la direction de la propagation de l'onde.",
    "id": 9
}, {
    "type": "propriete",
    "titre": "existence des ondes transversales",
    "resultat": "Les ondes transversales mécaniques n'existent qu'à l'intérieur des solides. Aucune onde mécanique transversale ne peut se propager à l'intérieur d'un fluide (liquide ou gaz).",
    "id": 10
}, {
    "type": "definition",
    "titre": "onde longitudinale",
    "resultat": "Une onde est dite longitudinale si les éléments du milieu, affectés par la pertubation, oscillent ou se déplacent dans la direction de propagation de l'onde.<br /> Les ondes sonores sont des ondes longitudinales.",
    "id": 11
}, {
    "type": "propriete",
    "titre": "pression d'origine des substances",
    "resultat": "Toutes les substances, qu'elles soient gazeuses, liquides ou solides, ont tendance à revenir à leur pression d'origine lorsqu'on les perturbe; on peut y générer des ondes sonores.",
    "id": 12
}, {
    "type": "texte_physique",
    "titre": "Signal périodique",
    "resultat": "Un signal périodique est caractérisé par un motif qui se répète. <br /> La durée de ce motif s'appelle <b>la période</b>. <br /> Soit $T$ la période d'un signal $s(t)$, on a alors $s(t+T)$ = $s(t)$.",
    "id": 13
}, {
    "type": "definition",
    "titre": "amplitude crête à crête d'un signal périodique",
    "resultat": "L'amplitude crête à crête $S_{pp}$ d'un signal périodique est mesurée entre les valeurs maximale et minimale relevées sur une période.",
    "id": 14
}, {
    "type": "definition",
    "titre": "valeur moyenne d'un signal périodique",
    "resultat": "Le signal passe autant de temps à des valeurs supérieures à $S_{moy}$ qu'à des valeurs inférieures. <br /> On la calcule ainsi : $S_{moy} = \\left\\langle s(t) \\right\\rangle = \\frac{1}{T} \\int_{0}^{T}s(t)dt$",
    "id": 15
}, {
    "type": "definition",
    "titre": "amplitude d'un signal",
    "resultat": "L'amplitude $S_{max} = A$ est mesurée e,tre les valeurs extrémales et la valeur moyenne d'un signal périodique.",
    "id": 16
}, {
    "type": "definition",
    "titre": "valeur efficace d'un signal périodique",
    "resultat": "La valeur efficace d'un signal périodique vaut : $S_{eff} = \\sqrt{\\left\\langle s^{2}(t)\\right\\rangle} = \\sqrt{ \\frac{1}{T} \\int_{0}^{T} s^{2}(t)dt }$.",
    "id": 17
}, {
    "type": "definition",
    "titre": "analyse spectrale",
    "resultat": "L'opération qui consiste à déterminer les signaux sinusoïdaux, composant un signal donné, est appelée <b>\"analyse spectrale\"</b>",
    "id": 18
}, {
    "type": "texte_physique",
    "titre": "Analyse de Fourier",
    "resultat": "On peut traiter un signal $s(t)$ commme une somme de fonctions sinusoïdales de la forme $A_k \\cos(2 \\pi f_k + \\varphi_k)$. <br /> On a donc : $s(t) = \\sum_k A_k \\cos(2 \\pi f_k + \\varphi_k)$",
    "id": 19
}, {
    "type": "definition",
    "titre": "Composante spectrale",
    "resultat": "Chaque signal sinusoïdal $s_k(t) = A_k \\cos(\\omega_k t + \\varphi_k)$ s'appelle une <b>\"Composante spectrale\"</b> de Fourier",
    "id": 20
}, {
    "type": "definition",
    "titre": "spectre de Fourier",
    "resultat": "Le spectre du signal (appelé en général \"spectre de Fourier\") est l'ensemble des fréquences contenues dans la décomposition du signal $s(t)$.",
    "id": 21
}, {
    "type": "texte_physique",
    "titre": "Représentation graphique du spectre",
    "resultat": "La représentation graphique des amplitudes $A_k$ en ordonnéee en fonction des $f_k$ en abscisse constitue le spectre en amplitude. <br /> Ce spectre d'amplitude peut être discontinu(=discret) ou continu; cela dépend de la nature du signal à décomposer.",
    "id": 22
}, {
    "type": "definition",
    "titre": "décomposition en série de Fourier",
    "resultat": "Tout signal périodique de fréquence $f$ mais de forme quelconque peut s'écrire comme la superposition de signaux sinusoïdaux dont les fréquences $f_k$ sont des multiples entiers de $f$ à savoir $0, f, 2f, 3f, ..., kf, ...$ <br /> $s(t) = A_0 + \\sum_{k=1}^{\\infty} A_k \\cos(k\\omega t + \\varphi_k)$ <br /> ou $s(t) = A_0 + \\sum_{k=1}^{\\infty}(a_k \\cos(k\\omega t) + b_k \\sin(k \\omega t))$",
    "id": 23
}];


/*

    ,{
        "type": "texte_physique",
        "titre": "",
        "resultat": "",
        "id": 0
    }


*/


// TOUS LES QUIZS SONT DANS LA VARIABLE QUIZS

const Quizs = {
    "Propagation_signaux - incomplet": quiz_propagation_signal
};