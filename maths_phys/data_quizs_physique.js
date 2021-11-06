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
    "titre": "Onde et signal physique",
    "resultat": "Une onde est une perturbation qui voyage ou se propage sans déplacement macroscopique de matière et transporte avec de l'énergie. <br /> Toute grandeur physique, nulle à l'état de repos, et apparaissant avec la perturbation s'appelle signal physique $s$ transporté par l'onde.",
    "id": 3
}, {
    "type": "texte_physique",
    "titre": "Différents exemples de signaux",
    "resultat": "Il y a plusieur grandes catégories du signaux (ou ondes) mettant en évidence la grandeur physique qu'ils mettent en jeu. <br /> Il y a par exemple : <br /> <ul><li>Les signaux mécaniques</li><li>Les signaux acoustiques</li><li>Les signaux électriques</li><li>Les signaux électromagnétiques</li><li>Les ondes de matières</li></ul>",
    "id": 4
}, {
    "type": "propriete",
    "titre": "Existence d'une onde mécanique",
    "resultat": "Toutes les ondes mécaniques ne peuvent exister qu'en présence d'un milieu matériel ayant des propriétés plus ou moins élastiques (ou \"rigides\") comme l'eau, l'air, les roches, le béton.",
    "id": 5
}, {
    "type": "definition",
    "titre": "Signal acoustique",
    "resultat": "Le signal acoustique correspond à une variation de la pression accompagnée d'un déplacement localisé de matière",
    "id": 6
}, {
    "type": "definition",
    "titre": "Signal électrique",
    "resultat": "Un signal électrique correspond à la variation d'une grandeur physique comme la tension, le courant électrique ou le potentiel électrique dans un milieu conducteur.",
    "id": 7
}, {
    "type": "definition",
    "titre": "Onde électromagnétique",
    "resultat": "Une onde électromagnétique correspond à une perturbation qui se propage qui est dans ce cas particulier une grandeur vectorielle appelée \"champs électrique $\\vec{E}$ ou champs magnétique $\\vec{B}$\". <br /> Les ondes électromagnétiques n'ont pas besoin de milieu matériel pour se propager. <b>Elles peuvent donc se propager dans le vide</b>.",
    "id": 8
}, {
    "type": "definition",
    "titre": "Onde transversale",
    "resultat": "Une onde est dite transversale si les éléments du milieu affectés par la perturbation oscillent perpendiculairement à la direction de la propagation de l'onde.",
    "id": 9
}, {
    "type": "propriete",
    "titre": "Existence des ondes transversales",
    "resultat": "Les ondes transversales mécaniques n'existent qu'à l'intérieur des solides. Aucune onde mécanique transversale ne peut se propager à l'intérieur d'un fluide (liquide ou gaz).",
    "id": 10
}, {
    "type": "definition",
    "titre": "Onde longitudinale",
    "resultat": "Une onde est dite longitudinale si les éléments du milieu, affectés par la pertubation, oscillent ou se déplacent dans la direction de propagation de l'onde.<br /> Les ondes sonores sont des ondes longitudinales.",
    "id": 11
}, {
    "type": "propriete",
    "titre": "Pression d'origine des substances",
    "resultat": "Toutes les substances, qu'elles soient gazeuses, liquides ou solides, ont tendance à revenir à leur pression d'origine lorsqu'on les perturbe; on peut y générer des ondes sonores.",
    "id": 12
}, {
    "type": "texte_physique",
    "titre": "Signal périodique",
    "resultat": "Un signal périodique est caractérisé par un motif qui se répète. <br /> La durée de ce motif s'appelle <b>la période</b>. <br /> Soit $T$ la période d'un signal $s(t)$, on a alors $s(t+T)$ = $s(t)$.",
    "id": 13
}, {
    "type": "definition",
    "titre": "Amplitude crête à crête d'un signal périodique",
    "resultat": "L'amplitude crête à crête $S_{pp}$ d'un signal périodique est mesurée entre les valeurs maximale et minimale relevées sur une période.",
    "id": 14
}, {
    "type": "definition",
    "titre": "Valeur moyenne d'un signal périodique",
    "resultat": "Le signal passe autant de temps à des valeurs supérieures à $S_{moy}$ qu'à des valeurs inférieures. <br /> On la calcule ainsi : $S_{moy} = \\left\\langle s(t) \\right\\rangle = \\frac{1}{T} \\int_{0}^{T}s(t)dt$",
    "id": 15
}, {
    "type": "definition",
    "titre": "Amplitude d'un signal",
    "resultat": "L'amplitude $S_{max} = A$ est mesurée e,tre les valeurs extrémales et la valeur moyenne d'un signal périodique.",
    "id": 16
}, {
    "type": "definition",
    "titre": "Valeur efficace d'un signal périodique",
    "resultat": "La valeur efficace d'un signal périodique vaut : $S_{eff} = \\sqrt{\\left\\langle s^{2}(t)\\right\\rangle} = \\sqrt{ \\frac{1}{T} \\int_{0}^{T} s^{2}(t)dt }$.",
    "id": 17
}, {
    "type": "definition",
    "titre": "Analyse spectrale",
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
    "titre": "Spectre de Fourier",
    "resultat": "Le spectre du signal (appelé en général \"spectre de Fourier\") est l'ensemble des fréquences contenues dans la décomposition du signal $s(t)$.",
    "id": 21
}, {
    "type": "texte_physique",
    "titre": "Représentation graphique du spectre",
    "resultat": "La représentation graphique des amplitudes $A_k$ en ordonnéee en fonction des $f_k$ en abscisse constitue le spectre en amplitude. <br /> Ce spectre d'amplitude peut être discontinu(=discret) ou continu; cela dépend de la nature du signal à décomposer.",
    "id": 22
}, {
    "type": "definition",
    "titre": "Décomposition en série de Fourier",
    "resultat": "Tout signal périodique de fréquence $f$ mais de forme quelconque peut s'écrire comme la superposition de signaux sinusoïdaux dont les fréquences $f_k$ sont des multiples entiers de $f$ à savoir $0, f, 2f, 3f, ..., kf, ...$ <br /> $s(t) = A_0 + \\sum_{k=1}^{\\infty} A_k \\cos(k\\omega t + \\varphi_k)$ <br /> ou $s(t) = A_0 + \\sum_{k=1}^{\\infty}(a_k \\cos(k\\omega t) + b_k \\sin(k \\omega t))$",
    "id": 23
}, {
    "type": "texte_physique",
    "titre": "Continuité du spectre d'un signal périodique",
    "resultat": "Le spectre d'un signal périodique est discontinu; seules certaines fréquences bien définies existent. <br/> Le spectre d'un signal sinusoïdal ne comporte qu'une seule fréquence",
    "id": 24
}, {
    "type": "texte_physique",
    "titre": "Spectre d'un signal non périodique",
    "resultat": "Le spectre, dans le cas d'un signal non périodique, devient continu.",
    "id": 25
}, {
    "type": "definition",
    "titre": "Synthèse de Fourier",
    "resultat": "L'opération qui consiste à reconstituer un signal $s(t)$ dont on connait le spectre (fréquences, amplitudes ou phases) s'appelle la <b>\"synthèse de Fourier\"</b>.",
    "id": 26
}, {
    "type": "definition",
    "titre": "Domaines auditifs",
    "resultat": "Le daumaine audible, intervalle de fréquences $f_{son}$ percçues par l'oreille humaine, s'étend de $20$Hz à $20$kHz. C'est l'intervalle de fréquences perçues par un individu moyen. <br /> Les ondes de fréquence supérieure à $20$kHz sont qualifiées d'ultrason. <br /> Les ondes de fréquence inférieure à $20$Hz sont des infrasons.",
    "id": 27
}, {
    "type": "texte_physique",
    "titre": "Célérité du son",
    "resultat": "La célérité du son dans l'air est $340$m/s et dans l'eau environ $1500$m/s.",
    "id": 28
}, {
    "type": "definition",
    "titre": "Hauteur et timbre",
    "resultat": "La <b>hauteur</b> d'un son musical dépend de sa fréquence fondamentale : une fréquence élevée correspond à un son aigu, une fréquence basse à son grave. <br /> Le nombre et l'importance relative des harmonique dans le son d'un instrument sont en partie responsable du <b>\"timbre\"</b> de cet instrument.",
    "id": 29
}, {
    "type": "definition",
    "titre": "Onde progressive",
    "resultat": "Une <b>\"onde progressive\"</b> est la propagation d'une perturbation produisant sur son passage une variation des propriétés physiques locales du milieu. La perturbation du milieu qu'elle provoque s'éloigne de plus en plus de la source de l'onde au fur et à mesure que le temps s'écoule. <br /> Ce terme est esclusivement employé pour une onde sans atténuation ni déformation. <br /> L'onde peut à priori se propager dans toutes les directions possibles à partir de la source.",
    "id": 30
}, {
    "type": "texte_physique",
    "titre": "Grandeur physique associée au signal d'une onde progressive.",
    "hypotheses": "Soit $s$ un signal de célérité $c$, émis au point $O$ et perçu au point $M$, avec $OM=d$. $\\tau = \\frac{d}{c}$",
    "resultat": "Si $s(O, t) = f(t)$ alors $s(M, t) = s(O, t-\\tau) = f(t-\\frac{d}{c})$. <br /> On écrit $s(M, t)$ pour exprimer la double dépendance spatiale et temporelle. <br/> On dit que le signal $s(M, t)$ est une onde progressivbe se propageant à la vitesse $c$.",
    "id": 31
}, {
    "type": "propriete",
    "titre": "Définition d'une grandeur physique qui se propage",
    "resultat": "La grandeur physique qui se propage est définie à tout instant $t$ et pour toute valeur de la position $M$ (même en l'absence de détecteur en $M$). <br /> Cela peut-être une grandeur scalaire ou une grandeur vectorielle.",
    "id": 32
}, {
    "type": "propriete",
    "titre": "Forme d'un signal",
    "resultat": "Un signal peut avoir plusieurs formes <b>en fonction du temps</b> : <ul> <li> <b><u>Impulsion d'onde</u></b> : onde de très courte durée </li>  <li> <b><u>Train d'ondes</u></b> : oscillation (porteuse d'une fréquence) d'amplitude variable : Un train d'onde, quelque soit sa forme, a un début et une fin.</li> <li><b><u>Onde entretenue</u></b> : motif se répétant éternellement (on peut supposer qu'il s'agit d'un train d'onde infiniment long)</li> </ul>",
    "id": 33
}, {
    "type": "definition",
    "titre": "Célérité",
    "resultat": "On appelle célérité d'une onde progressive la vitesse de propagation du signal, notée <b>c</b>.",
    "id": 34
}, {
    "type": "texte_physique",
    "titre": "Célérité et milieu de propagation",
    "resultat": "La célérité d'une onde mécanique progressive dépend des caractéstiques physiques du milieu de propagation; en particulier elle dépend de : <ul> <li>sa <b>rigidité</b> (capacité à s'opposer à la déformation) : <b>c augmente avec la rigidité du milieu</b></li> <li>son <b>inertie</b> (capacité à s'opposer au changement de mouvement) caractérisé par sa masse linéique, surfacique ou volumique : <b>c diminue avec l'inertie du milieu</b>  </li> </ul>",
    "id": 35
}, {
    "type": "texte_physique",
    "titre": "Exemples des célérités d'ondes classiques",
    "resultat": "<ul><li>Vibration transverse : $c = \\sqrt{\\frac{F}{\\mu}}$, $F$ tension de la corde (ou $T$), $\\mu$ masse linéique (g/m)</li> <li>Rides sur l'eau ($h$ << $\\lambda$) : $c = \\sqrt{gh}$, $g$ pesanteur (9.9 m/s)</li> <li>Son audible, Vibration longitudinale : $c = \\sqrt{\\frac{\\gamma p}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}}$, $M$ masse molaire du gaz, $T$ température en Kelvin, $\\gamma$ coefficient sans dimension dépendant de la nature des molécules (1.4 en général), $p$ pression du gaz</li> <li>Lumière, Ondes radio : $c = \\frac{1}{\\sqrt{\\varepsilon_0 \\mu_0}}$, $\\varepsilon_0 = 8,85.10^{-12}$ <b> SI</b> permittivité du vide, $\\mu_0 = 4\\pi.10^{-7}$ <b> SI</b> perméabilité magnétique du vide</li> </ul>",
    "id": 36
}, {
    "type": "definition",
    "titre": "Onde progressive à une dimension",
    "resultat": "Une onde progressive est dite à une dimension, si sa propagation se fait dans une seule direction : pour une onde mécanique, c'est assez fréquent.",
    "id": 37
}, {
    "type": "texte_physique",
    "titre": "Notation d'un signal qui se propage",
    "resultat": "Un signal qui se propage se note $s(x,t)$, fonction de deux variables : la coordonnée $x$ selon l'axe $Ox$ et le temps $t \\implies s(x,t)$ est la valeur du signal à l'abscisse $x$, à l'instant $t$.",
    "id": 38
}, {
    "type": "texte_physique",
    "titre": "Onde progressive se déplacant dans le sens des $x$ croissant",
    "resultat": "Dans une onde mécanique progressive se propageant à la célérité <b>c</b>, tout point $M$ du milieu matériel subit la même perturbation que celle de la source avec un décalage temporel. <br /> Le siganl émetteur en $O$ est une fonction du temps $s(O, t) = f(t)$ <br/> Si le signal se déplace dans le sens des $x$ croissant <br /> $s(M,t) = s(x,t) = s_M(t) = f(t - \\frac{x}{c}$",
    "id": 39
}, {
    "type": "texte_physique",
    "titre": "Onde progressive se déplacant dans le sens des $x$ décroissant",
    "resultat": "Une onde progressive se propageant dans le sens des $x$ décroissants sans atténuation ni déformation est de la forme mathématique : $s(M, t) = s_M(t) = f(t+\\frac{x}{c})$",
    "id": 40
}, {
    "type": "texte_physique",
    "titre": "Onde progressive se propageant sur l'axe $Ox$ sans atténuation ni déformation",
    "resultat": "Une onde progressive de célérité $c$ se propageant sur l'axe $Ox$ sans atténuation ni déformation est de la forme mathématique suivante : <br /> $s(M,t) = s_t(x) = F(x \\pm ct)$ si $s(M, 0) = F(x)$",
    "id": 41
}, {
    "type": "methode",
    "titre": "Obtention de l'expression de l'onde progressive $s(x,t)$",
    "resultat": "On obtient l'expression de l'onde progressive $s(x,t)$ en fonction de la position et du temps <br /> $\\rightarrow$ soit en remplacant $x$ par $x \\pm ct$ dans la fonction $F(x) = s(x, 0)$ <br/> $\\rightarrow$ soit en remplacant $t$ par $t \\pm \\frac{x}{c}$ dans la fonction $f(t)=s(0,t)$ <br/> Le signe dépend du sens de propagation : $-$ vers les $x$ croissants et $+$ vers les $x$ décroissants. ",
    "id": 42
}, {
    "type": "texte_physique",
    "titre": "Double périodicité d'une onde progressive périodique",
    "resultat": "Une onde progressive progressive de célérité $c$ possède <b>une double périodicité</b>, c'est-à-dire une période temporelle notée $T$ et une période spatiale (ou longueur d'onde) notée $\\lambda$. <br /> Les deux périodes sont reliées par : <br/> $\\lambda = cT$",
    "id": 43
}, {
    "type": "definition",
    "titre": "Onde progressive harmonique",
    "resultat": "On dit qu'une onde progressive est harmonique (ou sinusoïdale) lorsque le signal émis par la source en $O$ est une fonction sinusoïdale du temps correspondant à un oscillateur harmonique. <br /> Elle possède aussi la double périodicité temporelle et spatiale.",
    "id": 44
}, {
    "type": "texte_physique",
    "titre": "Autre forme mathématique de l'onde",
    "resultat": "$s_M(x,t) = A\\cos(2\\pi \\frac{t}{T} - 2\\pi \\frac{x}{\\lambda} + \\varphi s) = A\\cos(2\\pi(\\frac{t}{T} - \\frac{x}{\\lambda}) + \\varphi s) = A\\cos(\\omega t - kx + \\varphi s)$",
    "id": 45
}, {
    "type": "texte_physique",
    "titre": "lien entre la période temporelle et la source",
    "resultat": "La période temporelle est imposée par la source, elle ne dépend pas du milieu de propagation.",
    "id": 46
}, {
    "type": "texte_physique",
    "titre": "Intérêt des ondes harmoniques (=sinusoïdales)",
    "resultat": "L'onde harmonique est le maillon élémentaire de toute théorie des ondes.",
    "id": 47
}, {
    "type": "definition",
    "titre": "Onde plane",
    "resultat": "La grandeur physique associée à l'onde (fonction d'onde) garde la même valeur dans un plan perpendiculaire à la direction propagation $\\rightarrow$ utilisée lors d'une propagation unidirectionnelle.",
    "id": 48
}, {
    "type": "definition",
    "titre": "Onde sphérique",
    "resultat": "La grandeur physique associée à l'onde (fonction d'onde) garde la même valeur sur une sphère centrée sur la source.",
    "id": 49
}, {
    "type": "definition",
    "titre": "Equation d'onde de d'Alembert",
    "resultat": "$\\frac{d^2s}{dx^2} = \\frac{1}{c^2}\\frac{d^2s}{dt^2}$",
    "id": 50
}, {
    "type": "definition",
    "titre": "Intensité de l'onde",
    "resultat": "On peut définir l'énergie que transporte une onde par unité de temps et par unité de section (surface traversée par l'onde qui se déplace), section perpendiculaire à la direction de propagation: c'est ce que l'on appelle l'intensité de l'onde (en watt par mètre carré). <br/> $I(M)=K\\langle s^2(M,t) \\rangle$",
    "id": 51
}, {
    "type": "definition",
    "titre": "Front d'onde",
    "resultat": "Un front d'onde est une surface virtuelle formée par l'ensemble des points possedant la même phase au cours du temps.",
    "id": 52
}, {
    "type": "definition",
    "titre": "Onde plane",
    "resultat": "Une onde est dite plane si ses fronts d'ondes sont des plans.",
    "id": 53
}];


const quiz_superposition_signaux_interference_ondes = [{
    "type": "definition",
    "titre": "Réponse d'un milieu linéaire à une superposition de signaux",
    "resultat": "La réponse d'un milieu linéaire à une superposition de signaux est la somme des réponses à chacun des signaux.",
    "id": 54
}, {
    "type": "definition",
    "titre": "Signaux sinusoïdaux synchrones",
    "resultat": "Deux signaux sinusoïdaux sont synchrones s'ils ont la même fréquence (ou de manière équivalente la même pulsation ou la même période).",
    "id": 55
}, {
    "type": "definition",
    "titre": "Superposition de signaux",
    "resultat": "Superposer des signaux veut dire sommer l'ensemble des signaux et pas seulement les amplitudes.",
    "id": 56
}, {
    "type": "texte_physique",
    "titre": "Signal résultant de la superposition de deux signaux sinusoïdaux synchrones de même fréquence $f$",
    "resultat": "Le signal résultant de la superposition de deux signaux sinusoïdaux synchrones de même fréquence $f$ présentant un déphasage indépendant du temps, est une fonction sinusoïdale de <b>même fréquence $f$</b>. Il s'écrit <br/> $s(t) = A\\cos(\\omega t + \\varphi(M))$ <br/> Selon le type d'onde, les capteurs sont sensibles, soit à l'amplitude de l'onde, soit plus fréquemment à l'intensité de l'onde, qui elle, est proportionnellle au carré de l'amplitude. <br/> Les propriétés de l'amplitude permettent de décrire l'état ondulatoire observé en un point.",
    "id": 57
}, {
    "type": "texte_physique",
    "titre": "Représentation de Fresnel",
    "resultat": "On peut utiliser la représentation graphique de Fresnel pour retrouver l'amplitude de l'onde résultante de la superposition des signaux de même fréquence. <br/> $\\vec{S} = \\vec{S_1} + \\vec{S_2}$ <br /> <img src=\"res/representation_fresnel.png\" />",
    "id": 58
}, {
    "type": "texte_physique",
    "titre": "Superposition de deux signaus sinusoïdaux de même fréquence et d'amplitudes $A_1$ et $A_2$",
    "resultat": "Le signal résultant de la superposition de deux signaux sinusoïdaux de même fréquence, d'amplitudes $A_1$ et $A_2$ et de phases $\\varphi_1(M)$ et $\\varphi_2(M)$ est un signal sinusoïdal de même fréquence et d'amplitude : <br /> $A = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos(\\Delta \\varphi)}$",
    "id": 59
}, {
    "type": "texte_physique",
    "titre": "Phénomène d'interférence",
    "resultat": "Il y a interférence quand des ondes de même fréquences et présentant un déphasage $\\Delta \\varphi$ indépendant du temps se superposent. <br/> Le terme $2A_1A_2\\cos(\\Delta\\varphi)$ dans l'amplitude résultant de cette superposition est appelé <b>\"terme d'interférences\"</b>. <br.> $\\rightarrow$ On appelle aussi interférences les phénomènes par lequel la superposition de plusieurs ondes produit localement une amplitude qui est en général différente de la somme des amplitudes individuelles ou encore une intensité d'onde telle que <br/> $A^2 \\neq A_1^2 + A_2^2$<br/>Les intensités des ondes ne s'ajoutent pas.",
    "id": 60
}, {
    "type": "texte_physique",
    "titre": "Etude du terme d'interférence",
    "resultat": "<div class=\"little scrolldiv\"><table> <tr><td>Interférences</td> <td>Constructives<br/>$A_1\\neq A_2$</td> <td>Destructives<br/>$A_1\\neq A_2$</td> <td>Constructives<br/>$A_1=A_2=A_0$</td> <td>Destructives<br/>$A_1=A_2=A_0$</td> </tr> <tr><td>Signaux/Ondes</td> <td>En phase</td> <td>En opposition de phase</td> <td>En phase</td> <td>En opposition de phase</td> </tr> <tr><td>Déphasage <br/>$\\Delta\\varphi=\\varphi_2-\\varphi_1$</td> <td>$\\Delta\\varphi = 2n\\pi$</td> <td>$\\Delta\\varphi$<br/>$=2n\\pi+\\pi/2$<br/>$=(2n+1)\\pi$</td> <td>$\\Delta\\varphi = 2n\\pi$</td> <td>$\\Delta\\varphi$<br/>$=2n\\pi+\\pi/2$<br/>$=(2n+1)\\pi$</td> </tr>  <tr><td>Terme d'interférences<br/>$2A_1A_2\\cos(\\Delta\\varphi)$</td> <td>$2A_1A_2$</td> <td>$-2A_1A_2$</td> <td>$2A_0^2$</td> <td>$-2A_0^2$</td> </tr> <tr><td>Amplitude du signal<br/>$A=\\sqrt{A_1^2+A_2^2+A_1A_2\\cos(\\Delta\\varphi)}$</td> <td>$A=A_1+A_2$</td> <td>$A=|A_1-A_2|$</td> <td>$A=2A_0$</td> <td>$A=0$</td> </tr></table></div>",
    "id": 61
}, {
    "type": "definition",
    "titre": "Différence de marche",
    "resultat": "On appelle différence de marche au point $M$, la quantité $\\delta(M) = S_1M-S_2M$ égale à la différence entre les chemins parcourus par les deux signaux depuis les sources",
    "id": 62
}, {
    "type": "texte_physique",
    "titre": "Lien entre la différence de marche et la différence de phase",
    "resultat": "<b>La différence de marche $\\delta$ est liée à la différence de phase</b> entre les ondes arrivant au point $M$<br/>$\\Delta\\varphi = k\\delta = \\frac{2\\pi}{\\lambda}\\delta = \\frac{2\\pi}{\\lambda}(r_1-r_2)$",
    "id": 63
}, {
    "type": "texte_physique",
    "titre": "Interférences constructives",
    "resultat": "L'amplitude résultante est maximale $A=2A_0$ ou $A_1+A_2$<br/>$\\Delta\\varphi = 2n\\pi, n\\in$#Z<br/><div style=\"border:1px solid; padding-bottom:5px; padding-top:5px;\"><b>Conditions d'interférences constructives : $\\Delta\\varphi = 2n\\pi$ ou $\\delta = n\\lambda, n\\in$#Z</div><br/><ul><li>n est entier relatif</li><li>Les deux signaux arrivant en $M$ sont en phase</li><li>La norme de $\\vec{S}$ est la somme des normes des deux vecteurs de Fresnel associé</li></ul></b>",
    "id": 64
}, {
    "type": "texte_physique",
    "titre": "Interférences destructives",
    "resultat": "L'amplitude résultante est minimale ou nulle $A=0$ ou $|A_1-A_2|$<br/>$\\Delta\\varphi = 2n\\pi+\\pi = (2n+1)\\pi, n\\in$#Z<br/><div style=\"border:1px solid; padding-bottom:5px; padding-top:5px;\"><b>Conditions d'interférences destructives : $\\Delta\\varphi = (2n+1)\\pi$ ou $\\delta = (n+\\frac{1}{2})\\lambda, n\\in$#Z</div><br/><ul><li>Les deux signaux arrivant en $M$ sont en opposition phase</li><li><b>Attention : </b> les deux ondes on l'air de se détruire mutuellement mais ce n'est vrai que pour quelques points bien particuliers où les ondes se retrouvent en opposition de phase; en aucun cas les ondes se détruisent effectivement</li><li>L'intensité devient inférieure à la somme des intensités dans le cas d'interférences destructives</li></ul></b>",
    "id": 65
}, {
    "type": "definition",
    "titre": "Phénomène de diffraction :",
    "resultat": "Lorsqu'elle passe à proximité d'un obstacle, une onde mécanique progressive sinusoïdale voit sa direction de propagation modifiée : elle tend à être déviée par l'obstacle : c'est le phénomène de diffraction.",
    "id": 66
}, {
    "type": "definition",
    "titre": "Condition d'observation du phénomène de diffraction",
    "resultat": "Le phénomène de diffraction est observé lorsqu'une onde sinusoïdale de longueur d'onde $\\lambda$ rencontre une fenêtre étroite de largeur $a$ ou un obstacle fin de largeur $a$, à conditions que <b>$a$ soit du même ordre de grandeur que $\\lambda$</b>.",
    "id": 67
}, {
    "type": "definition",
    "titre": "Relation de la diffraction",
    "resultat": "Lorsqu'une onde progressive sinusoïdale de longueur d'onde $\\lambda$ rencontre un obstacle de largeur $a$, l'ordre de grandeur de l'angle du faisceau $\\theta$ vérifie la relation<br/>$\\sin(\\theta)=\\frac{\\lambda}{a}$",
    "id": 68
}, {
    "type": "texte_physique",
    "titre": "Limites de la diffraction",
    "resultat": "On considère une onde plane (fronts d'onde plans) sinusoïdale de longueur d'onde $\\lambda$ qui arrive sur une fenêtre étroite de taille caractéristique $a$. Loin après l'obstace, <br/> $\\rightarrow$ si $a \\gg \\lambda$, la direction de l'onde n'est quasiment pas affectée par la présence de l'obstacle, l'onde est seulement diaphragnmée<br/>$\\rightarrow$ si $a \\gt \\lambda$, l'onde se propage <u>dans toutes les directions</u> mais elle possède des directions privilégies comprises dans un cône de demi-angle au sommet $\\theta_{max}$. $\\theta_{max}$ augmente quand $a$ diminue.",
    "id": 69
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
    "Propagation signaux": quiz_propagation_signal,
    "Superposition de signaux/interférences de deux ondes": quiz_superposition_signaux_interference_ondes
};