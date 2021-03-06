const quiz_propagation_signal = [{
    "type": "texte",
    "titre": "Les deux grands concepts de la physique classique que l'on peut associer à presques tous les phénomènes que l'on peut observer",
    "resultat": "Ondes et particules",
    "id": 0
}, {
    "type": "texte",
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
    "type": "texte",
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
    "type": "texte",
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
    "type": "texte",
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
    "type": "texte",
    "titre": "Représentation graphique du spectre",
    "resultat": "La représentation graphique des amplitudes $A_k$ en ordonnéee en fonction des $f_k$ en abscisse constitue le spectre en amplitude. <br /> Ce spectre d'amplitude peut être discontinu(=discret) ou continu; cela dépend de la nature du signal à décomposer.",
    "id": 22
}, {
    "type": "definition",
    "titre": "Décomposition en série de Fourier",
    "resultat": "Tout signal périodique de fréquence $f$ mais de forme quelconque peut s'écrire comme la superposition de signaux sinusoïdaux dont les fréquences $f_k$ sont des multiples entiers de $f$ à savoir $0, f, 2f, 3f, ..., kf, ...$ <br /> $s(t) = A_0 + \\sum_{k=1}^{\\infty} A_k \\cos(k\\omega t + \\varphi_k)$ <br /> ou $s(t) = A_0 + \\sum_{k=1}^{\\infty}(a_k \\cos(k\\omega t) + b_k \\sin(k \\omega t))$",
    "id": 23
}, {
    "type": "texte",
    "titre": "Continuité du spectre d'un signal périodique",
    "resultat": "Le spectre d'un signal périodique est discontinu; seules certaines fréquences bien définies existent. <br/> Le spectre d'un signal sinusoïdal ne comporte qu'une seule fréquence",
    "id": 24
}, {
    "type": "texte",
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
    "type": "texte",
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
    "type": "texte",
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
    "type": "texte",
    "titre": "Célérité et milieu de propagation",
    "resultat": "La célérité d'une onde mécanique progressive dépend des caractéstiques physiques du milieu de propagation; en particulier elle dépend de : <ul> <li>sa <b>rigidité</b> (capacité à s'opposer à la déformation) : <b>c augmente avec la rigidité du milieu</b></li> <li>son <b>inertie</b> (capacité à s'opposer au changement de mouvement) caractérisé par sa masse linéique, surfacique ou volumique : <b>c diminue avec l'inertie du milieu</b>  </li> </ul>",
    "id": 35
}, {
    "type": "texte",
    "titre": "Exemples des célérités d'ondes classiques",
    "resultat": "<ul><li>Vibration transverse : $c = \\sqrt{\\frac{F}{\\mu}}$, $F$ tension de la corde (ou $T$), $\\mu$ masse linéique (g/m)</li> <li>Rides sur l'eau ($h$ << $\\lambda$) : $c = \\sqrt{gh}$, $g$ pesanteur (9.9 m/s)</li> <li>Son audible, Vibration longitudinale : $c = \\sqrt{\\frac{\\gamma p}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}}$, $M$ masse molaire du gaz, $T$ température en Kelvin, $\\gamma$ coefficient sans dimension dépendant de la nature des molécules (1.4 en général), $p$ pression du gaz</li> <li>Lumière, Ondes radio : $c = \\frac{1}{\\sqrt{\\varepsilon_0 \\mu_0}}$, $\\varepsilon_0 = 8,85.10^{-12}$ <b> SI</b> permittivité du vide, $\\mu_0 = 4\\pi.10^{-7}$ <b> SI</b> perméabilité magnétique du vide</li> </ul>",
    "id": 36
}, {
    "type": "definition",
    "titre": "Onde progressive à une dimension",
    "resultat": "Une onde progressive est dite à une dimension, si sa propagation se fait dans une seule direction : pour une onde mécanique, c'est assez fréquent.",
    "id": 37
}, {
    "type": "texte",
    "titre": "Notation d'un signal qui se propage",
    "resultat": "Un signal qui se propage se note $s(x,t)$, fonction de deux variables : la coordonnée $x$ selon l'axe $Ox$ et le temps $t \\implies s(x,t)$ est la valeur du signal à l'abscisse $x$, à l'instant $t$.",
    "id": 38
}, {
    "type": "texte",
    "titre": "Onde progressive se déplacant dans le sens des $x$ croissant",
    "resultat": "Dans une onde mécanique progressive se propageant à la célérité <b>c</b>, tout point $M$ du milieu matériel subit la même perturbation que celle de la source avec un décalage temporel. <br /> Le siganl émetteur en $O$ est une fonction du temps $s(O, t) = f(t)$ <br/> Si le signal se déplace dans le sens des $x$ croissant <br /> $s(M,t) = s(x,t) = s_M(t) = f(t - \\frac{x}{c}$",
    "id": 39
}, {
    "type": "texte",
    "titre": "Onde progressive se déplacant dans le sens des $x$ décroissant",
    "resultat": "Une onde progressive se propageant dans le sens des $x$ décroissants sans atténuation ni déformation est de la forme mathématique : $s(M, t) = s_M(t) = f(t+\\frac{x}{c})$",
    "id": 40
}, {
    "type": "texte",
    "titre": "Onde progressive se propageant sur l'axe $Ox$ sans atténuation ni déformation",
    "resultat": "Une onde progressive de célérité $c$ se propageant sur l'axe $Ox$ sans atténuation ni déformation est de la forme mathématique suivante : <br /> $s(M,t) = s_t(x) = F(x \\pm ct)$ si $s(M, 0) = F(x)$",
    "id": 41
}, {
    "type": "methode",
    "titre": "Obtention de l'expression de l'onde progressive $s(x,t)$",
    "resultat": "On obtient l'expression de l'onde progressive $s(x,t)$ en fonction de la position et du temps <br /> $\\rightarrow$ soit en remplacant $x$ par $x \\pm ct$ dans la fonction $F(x) = s(x, 0)$ <br/> $\\rightarrow$ soit en remplacant $t$ par $t \\pm \\frac{x}{c}$ dans la fonction $f(t)=s(0,t)$ <br/> Le signe dépend du sens de propagation : $-$ vers les $x$ croissants et $+$ vers les $x$ décroissants. ",
    "id": 42
}, {
    "type": "texte",
    "titre": "Double périodicité d'une onde progressive périodique",
    "resultat": "Une onde progressive progressive de célérité $c$ possède <b>une double périodicité</b>, c'est-à-dire une période temporelle notée $T$ et une période spatiale (ou longueur d'onde) notée $\\lambda$. <br /> Les deux périodes sont reliées par : <br/> $\\lambda = cT$",
    "id": 43
}, {
    "type": "definition",
    "titre": "Onde progressive harmonique",
    "resultat": "On dit qu'une onde progressive est harmonique (ou sinusoïdale) lorsque le signal émis par la source en $O$ est une fonction sinusoïdale du temps correspondant à un oscillateur harmonique. <br /> Elle possède aussi la double périodicité temporelle et spatiale.",
    "id": 44
}, {
    "type": "texte",
    "titre": "Autre forme mathématique de l'onde",
    "resultat": "$s_M(x,t) = A\\cos(2\\pi \\frac{t}{T} - 2\\pi \\frac{x}{\\lambda} + \\varphi s) = A\\cos(2\\pi(\\frac{t}{T} - \\frac{x}{\\lambda}) + \\varphi s) = A\\cos(\\omega t - kx + \\varphi s)$",
    "id": 45
}, {
    "type": "texte",
    "titre": "Tableau récapitulatif sur les grandeurs caractérisant la double périodicité de l'angle",
    "resultat": "<table> <tr><td></td><td>Période</td><td>Fréquence</td><td>Pulsation</td></tr> <tr><td>temps</td><td>$T$</td><td>$f=\\frac{1}{T}$</td><td>$\\omega=\\frac{2\\pi}{T} = 2\\pi f$</td></tr> <tr><td>Espace</td> <td>$\\lambda = cT = \\frac{c}{f}$</td> <td>$\\sigma = \\frac{1}{\\lambda} = \\frac{f}{c}$</td> <td>$k=\\frac{2\\pi}{\\lambda} = 2\\pi\\sigma$</td> </tr>  </table>",
    "id": 70
}, {
    "type": "texte",
    "titre": "lien entre la période temporelle et la source",
    "resultat": "La période temporelle est imposée par la source, elle ne dépend pas du milieu de propagation.",
    "id": 46
}, {
    "type": "texte",
    "titre": "Intérêt des ondes harmoniques (=sinusoïdales)",
    "resultat": "L'onde harmonique est le maillon élémentaire de toute théorie des ondes.",
    "id": 47
}, {
    "type": "texte",
    "titre": "Phase d'un signal sinusoïdal",
    "resultat": "$\\varphi(x) = -\\frac{2\\pi x}{\\lambda} + \\varphi_s = -kx + \\varphi_s$<br/>$\\varphi_s$ est la phase initiale.",
    "id": 71
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
    "type": "texte",
    "titre": "Signal résultant de la superposition de deux signaux sinusoïdaux synchrones de même fréquence $f$",
    "resultat": "Le signal résultant de la superposition de deux signaux sinusoïdaux synchrones de même fréquence $f$ présentant un déphasage indépendant du temps, est une fonction sinusoïdale de <b>même fréquence $f$</b>. Il s'écrit <br/> $s(t) = A\\cos(\\omega t + \\varphi(M))$ <br/> Selon le type d'onde, les capteurs sont sensibles, soit à l'amplitude de l'onde, soit plus fréquemment à l'intensité de l'onde, qui elle, est proportionnellle au carré de l'amplitude. <br/> Les propriétés de l'amplitude permettent de décrire l'état ondulatoire observé en un point.",
    "id": 57
}, {
    "type": "texte",
    "titre": "Représentation de Fresnel",
    "resultat": "On peut utiliser la représentation graphique de Fresnel pour retrouver l'amplitude de l'onde résultante de la superposition des signaux de même fréquence. <br/> $\\vec{S} = \\vec{S_1} + \\vec{S_2}$ <br /> <img src=\"res/representation_fresnel.png\" />",
    "id": 58
}, {
    "type": "texte",
    "titre": "Superposition de deux signaus sinusoïdaux de même fréquence et d'amplitudes $A_1$ et $A_2$",
    "resultat": "Le signal résultant de la superposition de deux signaux sinusoïdaux de même fréquence, d'amplitudes $A_1$ et $A_2$ et de phases $\\varphi_1(M)$ et $\\varphi_2(M)$ est un signal sinusoïdal de même fréquence et d'amplitude : <br /> $A = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos(\\Delta \\varphi)}$",
    "id": 59
}, {
    "type": "texte",
    "titre": "Phénomène d'interférence",
    "resultat": "Il y a interférence quand des ondes de même fréquences et présentant un déphasage $\\Delta \\varphi$ indépendant du temps se superposent. <br/> Le terme $2A_1A_2\\cos(\\Delta\\varphi)$ dans l'amplitude résultant de cette superposition est appelé <b>\"terme d'interférences\"</b>. <br.> $\\rightarrow$ On appelle aussi interférences les phénomènes par lequel la superposition de plusieurs ondes produit localement une amplitude qui est en général différente de la somme des amplitudes individuelles ou encore une intensité d'onde telle que <br/> $A^2 \\neq A_1^2 + A_2^2$<br/>Les intensités des ondes ne s'ajoutent pas.",
    "id": 60
}, {
    "type": "texte",
    "titre": "Etude du terme d'interférence",
    "resultat": "<div class=\"little scrolldiv\"><table> <tr><td>Interférences</td> <td>Constructives<br/>$A_1\\neq A_2$</td> <td>Destructives<br/>$A_1\\neq A_2$</td> <td>Constructives<br/>$A_1=A_2=A_0$</td> <td>Destructives<br/>$A_1=A_2=A_0$</td> </tr> <tr><td>Signaux/Ondes</td> <td>En phase</td> <td>En opposition de phase</td> <td>En phase</td> <td>En opposition de phase</td> </tr> <tr><td>Déphasage <br/>$\\Delta\\varphi=\\varphi_2-\\varphi_1$</td> <td>$\\Delta\\varphi = 2n\\pi$</td> <td>$\\Delta\\varphi$<br/>$=2n\\pi+\\pi/2$<br/>$=(2n+1)\\pi$</td> <td>$\\Delta\\varphi = 2n\\pi$</td> <td>$\\Delta\\varphi$<br/>$=2n\\pi+\\pi/2$<br/>$=(2n+1)\\pi$</td> </tr>  <tr><td>Terme d'interférences<br/>$2A_1A_2\\cos(\\Delta\\varphi)$</td> <td>$2A_1A_2$</td> <td>$-2A_1A_2$</td> <td>$2A_0^2$</td> <td>$-2A_0^2$</td> </tr> <tr><td>Amplitude du signal<br/>$A=\\sqrt{A_1^2+A_2^2+A_1A_2\\cos(\\Delta\\varphi)}$</td> <td>$A=A_1+A_2$</td> <td>$A=|A_1-A_2|$</td> <td>$A=2A_0$</td> <td>$A=0$</td> </tr></table></div>",
    "id": 61
}, {
    "type": "definition",
    "titre": "Différence de marche",
    "resultat": "On appelle différence de marche au point $M$, la quantité $\\delta(M) = S_1M-S_2M$ égale à la différence entre les chemins parcourus par les deux signaux depuis les sources",
    "id": 62
}, {
    "type": "texte",
    "titre": "Lien entre la différence de marche et la différence de phase",
    "resultat": "<b>La différence de marche $\\delta$ est liée à la différence de phase</b> entre les ondes arrivant au point $M$<br/>$\\Delta\\varphi = k\\delta = \\frac{2\\pi}{\\lambda}\\delta = \\frac{2\\pi}{\\lambda}(r_1-r_2)$",
    "id": 63
}, {
    "type": "texte",
    "titre": "Interférences constructives",
    "resultat": "L'amplitude résultante est maximale $A=2A_0$ ou $A_1+A_2$<br/>$\\Delta\\varphi = 2n\\pi, n\\in\\bb{Z}$<br/><div style=\"border:1px solid; padding-bottom:5px; padding-top:5px;\"><b>Conditions d'interférences constructives : $\\Delta\\varphi = 2n\\pi$ ou $\\delta = n\\lambda, n\\in \\bb{Z}$</div><br/><ul><li>n est entier relatif</li><li>Les deux signaux arrivant en $M$ sont en phase</li><li>La norme de $\\vec{S}$ est la somme des normes des deux vecteurs de Fresnel associé</li></ul></b>",
    "id": 64
}, {
    "type": "texte",
    "titre": "Interférences destructives",
    "resultat": "L'amplitude résultante est minimale ou nulle $A=0$ ou $|A_1-A_2|$<br/>$\\Delta\\varphi = 2n\\pi+\\pi = (2n+1)\\pi, n\\in \\bb{Z}$<br/><div style=\"border:1px solid; padding-bottom:5px; padding-top:5px;\"><b>Conditions d'interférences destructives : $\\Delta\\varphi = (2n+1)\\pi$ ou $\\delta = (n+\\frac{1}{2})\\lambda, n\\in \\bb{Z}$</div><br/><ul><li>Les deux signaux arrivant en $M$ sont en opposition phase</li><li><b>Attention : </b> les deux ondes on l'air de se détruire mutuellement mais ce n'est vrai que pour quelques points bien particuliers où les ondes se retrouvent en opposition de phase; en aucun cas les ondes se détruisent effectivement</li><li>L'intensité devient inférieure à la somme des intensités dans le cas d'interférences destructives</li></ul></b>",
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
    "type": "texte",
    "titre": "Limites de la diffraction",
    "resultat": "On considère une onde plane (fronts d'onde plans) sinusoïdale de longueur d'onde $\\lambda$ qui arrive sur une fenêtre étroite de taille caractéristique $a$. Loin après l'obstace, <br/> $\\rightarrow$ si $a \\gg \\lambda$, la direction de l'onde n'est quasiment pas affectée par la présence de l'obstacle, l'onde est seulement diaphragnmée<br/>$\\rightarrow$ si $a \\gt \\lambda$, l'onde se propage <u>dans toutes les directions</u> mais elle possède des directions privilégies comprises dans un cône de demi-angle au sommet $\\theta_{max}$. $\\theta_{max}$ augmente quand $a$ diminue.",
    "id": 69
}];

const quiz_cinematique_point = [{
    "type": "texte",
    "titre": "naissance de la mécanique",
    "resultat": "Fondée sous forme moderne au $XVI^{\\text{ème}}$ et $XVII^{\\text{ème}}$ siècles par l'italien Galilée et l'anglais Newton,  la mécanique est la branche de la physique qui étudie et quantifie le mouvement, dans l'espace et au cours du temps, des objets matériels et propose des descriptions des causes de ces mouvements.",
    "id": 72
}, {
    "type": "texte",
    "titre": "Grandes idées de la mécanique",
    "resultat": "Les grandes idées de la mécanique classique se séparent souvent en trois thèmes : <ul><li><b>La cinématique : </b>description du mouvement indépendamment des causes : <i>le point tout au début</i></li> <li><b>La dynamique : </b>on relie les causes physiques aux effets pour comprendre le \"pourquoi\" d'un mouvement; on introduit alors le concept de <i>\"force\"</i></li> <li><b>Les énergies</b></li></ul>",
    "id": 73
}, {
    "type": "definition",
    "titre": "Cinématique",
    "resultat": "La cinématique est le domaine de la mécanique consacré à la description des mouvements du corps, sans faire référence aux causes qui les produisent.<br/>$\\rightarrow$La description du mouvement des points matériels et celle des solides dans différents systèmes de coordonnées, sont indispensables aux fondations de la mécanique.<br/>$\\rightarrow$En pratique, on peut considérer le mouvement d'un point, connu lorsqu'on est en mesure de le situer à chaque instant: le repérage d'un point dans l'espace et dans le temps fait appel à deux notions fondamentales et indépendantes : le référentiel et le système de coordonnées.<br/>$\\rightarrow$Le choix d'un référentiel conditionne la description de la nature du mouvement !",
    "id": 74
}, {
    "type": "texte",
    "titre": "Relativité du mouvement",
    "resultat": "Le mouvement est toujours relatif à celui qui l'observe, c'est à dire ce que l'on appelle un référentiel d'étude",
    "id": 75
}, {
    "type": "texte",
    "titre": "Conditions pour décrire le mouvement d'un point",
    "resultat": "Pour décrire le mouvement d'un point (ou même de n'importe quel système comme un solide), il est absolument nécessaire de choisir un \"observateur\" et un \"observé\".",
    "id": 76
}, {
    "type": "definition",
    "titre": "L'observé",
    "resultat": "L'observé est le système étudié",
    "id": 77
}, {
    "type": "definition",
    "titre": "L'observateur",
    "resultat": "L'oservateur est celui qui perçoit le mouvement.",
    "id": 78
}, {
    "type": "texte",
    "titre": "Définir le référentiel d'étude",
    "resultat": "Définir l'observateur pour décrire un mouvement va se transformer en \"définir le référentiel d'étude\".",
    "id": 79
}, {
    "type": "definition",
    "titre": "notion de \"Solide\"",
    "resultat": "Un solide est un système matériel (appelé S) dont les distances entre deux points quelconques de (S) restent invariable au cours du temps.<br/>Quelque soit N, P du solide (S), la distance $NP = ||\\vec{NP}||$ = constante.",
    "id": 80
}, {
    "type": "definition",
    "titre": "Repère spatial lié à l'observateur",
    "resultat": "L'ensemble des systèmes d'axes de coordonnées liés à ce solide (S) constitue un repère spatial lié à l'observateur ou aussi au solide associé (S).",
    "id": 81
}, {
    "type": "definition",
    "titre": "Référentiel",
    "resultat": "Un référentiel est donc l'ensemble constitué d'un repère spatial et d'une chronologie (=échelle de temps): $\\cal{R}(O, \\vec{u_x}, \\vec{u_y}, \\vec{u_z})$.<br/><br/>$\\rightarrow$ L'unité de mesure de temps dans le SI est la seconde<br/>$\\rightarrow$ Aucun problème de cinématique ou de mécanique ne peut être traité sans préciser au préalable le référentiel choisi.",
    "id": 82
}, {
    "type": "texte",
    "titre": "Référentiels et points",
    "resultat": "Un référentiel n'est jamais lié à un point puisqu'un point n'est pas un solide de référence !",
    "id": 83
}, {
    "type": "definition",
    "titre": "Point matériel",
    "resultat": "Un point est un objet de petite taille que l'on peut décrire par trois informations indépendantes: les coordonnées du point $M$.",
    "id": 84
}, {
    "type": "propriete",
    "titre": "Vecteur fonction vectorielle du temps",
    "resultat": "Si le vecteur $\\vec{OM}$ est une fonction vectorielle du temps, alors les composantes sont des fonctions scalaires de $t$.<br/>La norme du vecteur position est une longueur $OM$.",
    "id": 85
}, {
    "type": "texte",
    "titre": "Rappels sur les vecteurs",
    "resultat": "Un vecteur quelconque $\\vec{A}$ est une quantité physique qui est spécifié par : <ul><li>Sa direction</li><li>Son sens</li><li>Sa norme $||\\vec{A}||$</li><li>Eventuellement son point d'application</li></ul><br/><br/>Un scalaire au contraire est une quantité physique qui n'est spécifiée que par sa grandeur.",
    "id": 86
}, {
    "type": "definition",
    "titre": "Base",
    "resultat": "Une base permet d'exprimer les composantes d'un vecteur (par exemple $A_x$,$A_y$,$A_z$) mais la définition d'un vecteur $\\vec{A}$ ne déped pas de la base choisie : cette base s'appelle \"base de projection\".",
    "id": 87
}, {
    "type": "definition",
    "titre": "projection de $\\vec{A}$ sur un vecteur unitaire $\\vec{u_x}$",
    "resultat": "On appelle \"projection de $\\vec{A}$\" sur un vecteur unitaire $\\vec{u_x}$ le produit scalaire suivant : $A_x = \\vec{A}\\times\\vec{u_x} = ||\\vec{A}||\\cos(\\theta)$",
    "id": 88
}, {
    "type": "texte",
    "titre": "Repérage en coordonnées cartésiennes",
    "resultat": "Les coordonnées du point mobile $M$ sont $\\{x, y, z\\}$.<br/>On utilise des bases orthonormées directes: les veteurs de base sont donc : <ul><li>Normés</li><li>Deux à deux orthogonause</li><li>Forment une base directe</li></ul><br/>Un point $M$ est repéré par son vecteur position $\\vec{OM}$; et ce vecteur est caractérisé par ses composantes cartésiennes $\\vec{OM} = x\\vec{u_x}+y\\vec{u_y}+z\\vec{u_z}$.<br/>La distance $OM$ est la norme du vecteur $\\vec{OM}$ soit $OM = \\sqrt{x^2+y^2+z^2}$",
    "id": 89
}, {
    "type": "texte",
    "titre": "Repérage en coordonnées cylindriques",
    "resultat": "Les coordonnées du point $M$ sont : $\\{r, \\theta, z\\}$ (deux longeurs et un angle).<br/><ul><li>Les vecteurs de base \"cylindriques\" suivent le mouvement du point $M$ donc ce sont des vecteurs de base \"mobiles\".</li> <li>La distance $OH$ peut s'appeler $r$ ou bien dans certains cas $\\rho$: attention, cela représente la distance du point $M$ à l'axe $O_z$</li> <li>On peut écrire le vecteur position: $\\vec{OM} = \\vec{OH} + \\vec{HM} = r\\vec{u_r} + z \\vec{u_z}$</li></ul>",
    "id": 90
}, {
    "type": "texte",
    "titre": "Coordonnées polaires",
    "resultat": "La réduction des coordonnées cylindriques dans un plan s'appelle les coordonnées polaires.<br/><ul><li>Selon les exercices dans le plan $xOy$, la distance $OM$ s'appelle $r$ ou $\\rho$ (pour ne pas confondre avec le $r$ des coordonnées sphériques)</li> <li>Le vecteur unitaire $\\vec{u_r}$ (ou $\\vec{u_{\\rho}}$) s'appelle le  vecteur unitaire radial, et le vecteur $\\vec{u_{\\theta}}$ s'appelle vecteur unitaire ortho-radial</li> <li>Bien sur, il y a un lien entre les coordonnées cartésiennes et les coordonnées polaires : $\\left \\{ \\begin{array}{ll} x = r\\cos(\\theta) \\\\ y=r\\sin(\\theta)\\end{array} \\right.$, $r = \\sqrt{x^2+y^2}$, $\\tan(\\alpha) = \\frac{x}{y}$</li></ul>",
    "id": 91
}, {
    "type": "texte",
    "titre": "Utilisation du système de repérage cylindrique",
    "resultat": "Ce système de coordonnées cylindriques s'utilise lorsqu'il existe une direction privilégiée (en général l'axe $z$) : mouvements circulaires ou mouvement hélicoïdal, le mouvement se fait dans le plan orthogonal à cette direction privilégiée.",
    "id": 92
}, {
    "type": "texte",
    "titre": "Repérage en coordonnées sphériques",
    "resultat": "Les coordonnées du point $M$ sont : $\\{r, \\theta, \\varphi\\}$.<br/>- Les vecteurs de base suivent aussi le mouvement du point $M$ donc ce sont des vecteurs de base \"mobiles\".<br/>$r$ est ici la distance de $M$ à l'origine $O$. $\\vec{OM} = r\\vec{u_r}$.<br/>- Le vecteur $\\vec{u_r}$ est appelé vecteur unitaire radial; son expression a l'air simple mais seulement en apparence !!, car ce vecteur dépend des deux variables angulaires $\\theta$ et $\\varphi$.<br/>- Il y a un lien entre les coordonnées cartésienne et les coordonnées sphériques : $$\\left \\{ \\begin{array}{ll} x=r\\sin(\\theta)\\cos(\\varphi) \\\\ y = r\\sin(\\theta)\\sin(\\varphi) \\\\ z = r\\cos(\\theta) \\end{array} \\right.$$",
    "id": 93
}, {
    "type": "texte",
    "titre": "Cercle osculateur",
    "resultat": "Lorsque la trajectoire que suit le point $M$ est connue, il est possible de repérer le point sur la courbe représentant cette trajectoire. On choisit sur la courbe orientée un point origine $\\Omega$ et on définit \"l'abscisse curviligne $s$\" comme la mesure algébrique, sur la courbe, de la distance $\\Omega M$.<br/>Le cercle de centre $C$ et de rayon $\\rho$ qui tangente localement en $M$ la trajectoire du point mobile est appelée cercle osculateur. Le rayon $\\rho$ de ce cercle correspond alors au rayon de courbure de la trajectoire au point considérer et $C$ est le centre de courbure.",
    "id": 94
}, {
    "type": "texte",
    "titre": "Base de Frenet",
    "resultat": "En chaque point $M$ de la courbe on définit la base de Frenet $\\{\\vec{u_T}, \\vec{u_N}\\}$ avec : <br/> $\\rightarrow \\vec{u_T}$ Vecteur unitaire tangent à la courbe en $M$ et orienté dans le sens positif choisi.<br/> $\\rightarrow \\vec{u_N}$ Vecteur perpendiculaire à $\\vec{u_T}$ et orienté vers le centre de courbure (de $M$ vers $C$).<br/>Cette base est \"mobile\" dans le repère.",
    "id": 95
}, {
    "type": "texte",
    "titre": "Base de Frenet dans le cas d'un mouvement circulaire",
    "resultat": "Dans le cas d'un mouvement circulaire, le vecteur tangent corrspond au vecteur ortho-radial et le vecteur normal est l'opposé du vecteur radial; le centre de courbure du cercle est constant et le rayon de courbure est tout simplement le rayon du cercle $R$.",
    "id": 96
}, {
    "type": "definition",
    "titre": "Trajectoire d'un point",
    "resultat": "La trajectoire de $M$ dans un référentiel $\\cal{R}$ est l'ensemble des positions successivement occupées par le point $M$ au cours du temps. Cette trajectoire dépend du choix du référentiel $\\cal{R}$, c'est à dire l'observateur.",
    "id": 97
}, {
    "type": "texte",
    "titre": "Equation paramétriques du mouvement",
    "resultat": "On peut donner directement les composantes fonctoins scalaires de $t$ : ce qu'on appelle : les \"equations paramétriques du mouvement\".<br/> Exemple : s$x(t)$, $y(t)$, $z(t)$ ou encore $r(t)$ ou $\\theta(t)$ dans le plan $xOy$.",
    "id": 98
}, {
    "type": "texte",
    "titre": "Equation de la trajectoire",
    "resultat": "On peut \"éliminer la variable de temps\" et donner alors l'équation de la trajectoire : <br/><ul> <li>En coordonnées cartésiennes: $y = f(x)$ ou plus simplement $y(x)$</li> <li>En coordonnées polaires : $r = f(\\theta)$ ou plus simplement $r(\\theta)$.</li> </ul>",
    "id": 99
}, {
    "type": "texte",
    "titre": "Dérivée scalaire",
    "hypotheses": "Soit une fonction scalaire $f(t)$. Soit en $t_0$ la valeur $f(t_0)$. Soit en $t$, un instant voisin tel que $t = t_0 + \\Delta t$.",
    "resultat": "$f(t) = f(t_0 + \\Delta t) = f(t_0) + \\Delta$.<br/>$$\\lim\\limits_{\\Delta t \\to 0}\\frac{f(t_0 + \\Delta t) - f(t_0)}{\\Delta t} = \\frac{df}{dt})_{t_0}$$. <br/> $f(t) = f(t_0)+df$ ou encore $df = f(t_0+dt) - f(t_0)$.",
    "id": 100
}, {
    "type": "propriete",
    "titre": "Quelques propriétés sur la dérivation scalaire",
    "resultat": "-$d(f+g) = df + dg$<br/>-$d(\\lambda f) = \\lambda \\times df$<br/>-$d(fg) = f\\times d(g)+g\\times d(f)$<br/>-$d(ln(f)) = \\frac{df}{f}$",
    "id": 101
}, {
    "type": "texte",
    "titre": "Derivée vectorielle",
    "hypotheses": "Soit $\\vec{A}(t)$ une fonction vectorielle dans la base cartésienne : $\\vec{A}(t) = A_x(t)\\times\\vec{u_x} + A_y(t)\\vec{u_y} + A_z(t)\\vec{u_z}$. Soit $\\vec{A}(t_0)$ la valeur de cette fonction à l'instant $t_0$ : son extrémité est représentée par le point $M_0$. Soit un instant $t = t_0 + \\Delta t$. Son extrémitée est représentée par le point $M$.",
    "resultat": "$\\Delta\\vec{A} = \\vec{A}(t) - \\vec{A}(t_0)$<br/>On rapproche $M$ de $M_0$, $$\\lim\\limits_{\\Delta t \\to 0}\\frac{\\vec{A}(t_0 + \\Delta t)-\\vec{A}(t_0)}{\\Delta t} = \\frac{d\\vec{A}}{dt})_{t_0}$$<br/>$d\\vec{A} \\approx \\vec{M_0M}$ assimilé à la tangente à la courbe décrite par l'extrémité du vecteur $\\vec{A}$ au point $M_0$.",
    "id": 102
}, {
    "type": "texte",
    "titre": "Composantes du vecteur $\\frac{d\\vec{A}}{dt})_{t_0}$",
    "resultat": "Le vecteur $\\frac{d\\vec{a}}{dt})_{t_0}$ a pour composantes (cartésiennes par ex) les trois dérivées $(\\frac{dA_x}{dt}, \\frac{dA_y}{dt}, \\frac{dA_z}{dt})$",
    "id": 103
}, {
    "type": "texte",
    "titre": "Dérivée d'un vecteur constant",
    "resultat": "La dérivée d'un vecteur constant est le vecteur nul.",
    "id": 104
}, {
    "type": "propriete",
    "titre": "Quelques propriétés de la dérivation vectorielle",
    "resultat": "$\\bullet\\ \\frac{d}{dt}(\\vec{A}+\\vec{B}) = \\frac{d\\vec{A}}{dt}+\\frac{d\\vec{B}}{dt}$<br/>$\\bullet\\ \\frac{d}{dt}(\\lambda\\vec{A}) = \\lambda\\frac{d\\vec{A}}{dt}$<br/>$\\bullet\\ \\frac{d}{dt}(\\vec{A}\\times\\vec{B}) = \\frac{d\\vec{A}}{dt}\\times \\vec{B} + \\vec{A} + \\frac{d\\vec{B}}{dt}$<br/>$\\bullet\\ \\frac{d}{dt}(\\vec{A}\\land\\vec{B}) = \\frac{d\\vec{A}}{dt}\\land\\vec{B} + \\vec{A}\\frac{d\\vec{B}}{dt}$",
    "id": 105
}, {
    "type": "definition",
    "titre": "Vecteur vitesse d'un point $M$",
    "hypotheses": "Soit un référentiel d'étude $\\cal{R}$.",
    "resultat": "Le point matériel évolue en fonction du temps et sa position est repérée par le vecteur position $\\vec{OM}(t)$<br/>$\\vec{v}(M)_{\\cal{R}} = \\frac{d\\vec{OM}(t)}{dt})_{\\cal{R}}$<br/>$\\bullet$ La direction et le sens du vecteur vitesse $\\vec{v}$ sont ceux du déplacement.<br/>$\\bullet$ Le vecteur $\\vec{v}$ est tangent à la trajectoire du mobile dans le sens du mouvement<br/>$\\bullet$ La norme du vecteur vitesse est exprimée en mètres par secondes (m/s)",
    "id": 106
}, {
    "type": "propriete",
    "titre": "Uniformité d'un mouvement",
    "resultat": "Un mouvement, dont la norme du vecteur vitesse $||\\vec{v}||| = v$ est une constante, est dit uniforme.",
    "id": 107
}, {
    "type": "definition",
    "titre": "Vecteur de déplacement élémentaire",
    "resultat": "On appelle vecteur de \"déplacement élémentaire\" la variation du vecteur position $\\vec{OM}(t)$ pendant un intervalle de temps infinitésimal : <br/>$\\vec{OM}(t+dt) - \\vec{OM}(t) = d\\vec{OM} = d\\vec{l}$",
    "id": 108
}, {
    "type": "texte",
    "titre": "Vecteur vitesse",
    "resultat": "La vitesse est le déplacement par unité de temps soit $\\frac{d\\vec{OM}}{dt}$.<br/>Vecteur vitesse en coordonnées cartésiennes : <br/> $\\vec{v}(M) = \\frac{dx}{dt}\\vec{u_x} + \\frac{dy}{dt}\\vec{u_y} + \\frac{dz}{dt}\\vec{u_z}$<br/>Sa norme exprimée dans ce système de coordonnées<br/>$||\\vec{v}|| = \\sqrt{(\\frac{dx}{dt})^2 + (\\frac{dy}{dt})^2 + (\\frac{dz}{dt})^2}$",
    "id": 109
}, {
    "type": "texte",
    "titre": "Vecteur vitesse en coordonnées cylindriques",
    "resultat": "$\\vec{v}(M) = \\frac{dr}{dt}\\vec{u_r} + r\\frac{d\\theta}{dt}\\vec{u_{\\theta}} + \\frac{dz}{dt}\\vec{u_z}$",
    "id": 110
}, {
    "type": "texte",
    "titre": "Vecteur vitesse en coordonnées polaires",
    "resultat": "La restriction aux deux premieres coordonnées des cylindriques donne le vecteur vitesse en coordonnées polaires dans le plan $xOy$:<br/>$\\vec{v}(M) = \\frac{dr}{dt}\\vec{u_r} + r\\frac{d\\theta}{dt}\\vec{u_{\\theta}}$.<br/>On en déduit sa norme dans le plan : <br/>$||\\vec{v}|| = \\sqrt{(\\frac{dr}{dt})^2 + (r\\frac{d\\theta}{dt})^2}$",
    "id": 111
}, {
    "type": "texte",
    "titre": "Vecteur vitesse du mouvement circulaire",
    "resultat": "Mouvement plan avec la distance $r = cste = R$ (rayon du cercle). La trajectoire circulaire est de rayon $R$ => La vitesse est uniquement portée par $\\vec{u_0}$. <br/> $(\\vec{v})_{circ} = R \\cdot d(\\theta) \\cdot \\vec{u_0}$",
    "id": 112
}, {
    "type": "texte",
    "titre": "Vecteur vitesse en coordonnées sphériques",
    "resultat": "$\\vec{v}(M) = d(r) \\cdot \\vec{u_r} + r \\cdot d(\\theta) \\times \\vec{u_0} + r \\cdot \\sin(\\theta) \\cdot d(\\varphi) \\cdot \\vec{u_{\\varphi}}$",
    "id": 113
}, {
    "type": "definition",
    "titre": "Accélération d'un point matériel $\\vec{a}(M)$",
    "hypotheses": "Dans un référentiel défini $\\cal{R}$ : ",
    "resultat": "$$\\vec{a}(M)_{\\cal{R}} = \\frac{d\\vec{v}(M)}{dt} = \\frac{d^2\\vec{OM}}{dt^2})_{\\cal{R}}$$",
    "id": 114
}, {
    "type": "definition",
    "titre": "Mouvement rectiligne",
    "resultat": "Le mouvement rectiligne selon l'axe cartésien $(O, x)$ est défini par : <br/> $\\ \\ \\vec{OM} = x(t)\\vec{u_x}\\ $, $\\ \\ \\vec{v} = d(x)\\vec{u_x}\\ $, $\\ \\ \\vec{a} = d^2(x)\\vec{u_x}$",
    "id": 115
}, {
    "type": "definition",
    "titre": "Mouvement rectiligne uniforme",
    "resultat": "Le mouvement rectiligne uniforme à la vitesse constante $v_0 \\vec{u_x}$ est définit par : <br/> $\\ \\ \\vec{a} = \\vec{0}\\ $, $\\ \\ \\vec{v} = v_0 \\vec{u_x}\\ $, $\\ \\ x(t) = v_0 t + x_0$",
    "id": 116
}, {
    "type": "definition",
    "titre": "Mouvement rectiligne uniformément varié",
    "hypotheses": "Soit $\\vec{v_0}$ la vitesse initiale portée par l'axe $x(v_O\\vec{u_x})$ et $x_0$ est l'abscisse initiale du mobile à la date $t=0$.",
    "resultat": "Le mouvement rectiligne uniformément varié d'accélération constante $a\\vec{u_x}$ est définit par : <br/> $\\vec{a} = a\\vec{u_x}, \\ $, $\\ \\ \\vec{v} = (at + v_0)\\vec{u_x}\\ $, et $\\ \\ x(t) = \\frac{1}{2}at^2 + v_0t + x_0$",
    "id": 117
}, {
    "type": "definition",
    "titre": "Mouvement rectiligne sinusoïdal",
    "resultat": "$\\vec{a}(M) = -\\omega^2\\vec{OM}$ <br/> La caractéristique principale des mouvements harmoniques est donc que l'accélération et la position sont reliées par une équation différentielle linéaire du deuxième ordre (célèbre équation d'oscillateur harmonique)<br/>$d^2(x) + \\omega_0^2 x = 0$.",
    "id": 118
}, {
    "type": "definition",
    "titre": "Amplitude d'une oscillation harmonique ",
    "resultat": "L'amplitude d'une oscillation harmonique est l'écart maximal à la valeur médiane (qui est en général la position d'équilibre, et qui est de plus la \"valeur moyenne\" du signal du fait de la symétrie des alternances)",
    "id": 119
}, {
    "type": "definition",
    "titre": "Fréquence d'un mouvement oscillatoire mécanique",
    "resultat": "Tout mouvement oscillatoire mécanique ici (même non sinusoïdal) possède une propriété importante, sa fréquence, qui est le nombre d'oscillations effectuées chaque secondes. Le symbole est $f$ et l'unité est le herz. <br/> 1 hertz = 1Hz = 1 oscillation par seconde = $1s^{-1}$ <br/> La période du signal vaut : $T = \\frac{1}{f}$: (dimension : temps et unité : seconde): temps requis pour effectuer une oscillation complète (ou cycle).",
    "id": 120
}, {
    "type": "definition",
    "titre": "Mouvement circulaire",
    "resultat": "Le point $M$ suit un mouvement circulaire s'il se déplace sur un cercle de rayon $R$; sa vitesse angulaire est $\\omega = d(\\theta)$ et dans le repère cylindrique réduit au plan du cercle, le vecteur position s'écrit $\\vec{OM} = R\\vec{u_r}$.",
    "id": 121
}, {
    "type": "texte",
    "titre": "Mouvement circulaire uniforme",
    "resultat": "$d(\\theta) = \\omega = \\frac{2\\pi}{T}$<br/> où $T$ est la période de révolution. On en déduit alors l'équation paramétrique du mouvement : $\\theta = \\omega t + \\theta_0$ où $\\theta_0$ est l'angle de repérage à $t=0$. <br/> Dans la base polaire, on a : <br/>$$\\vec{OM} = \\left | \\begin{array}{ll} R \\\\ 0 \\end{array} \\right.$$ $$\\vec{v} = \\left | \\begin{array}{ll} 0 \\\\ R\\omega \\end{array} \\right.$$ $$\\vec{a} = \\left | \\begin{array}{ll} -R\\omega^2 = -\\frac{v^2}{R} \\\\ 0 \\end{array} \\right.$$",
    "id": 122
}, {
    "type": "propriete",
    "titre": "Propriété du mouvement circulaire uniforme",
    "resultat": "Dans un mouvement circulaire uniforme : <br/> $||\\vec{v}|| = v = R\\omega$ et $||\\vec{a}|| = R\\omega^2 = \\frac{v^2}{R}$",
    "id": 123
}, {
    "type": "texte",
    "titre": "Mouvement uniforme",
    "resultat": "Mouvement uniforme $\\iff$ $v = ||\\vec{v}|| = $ constante",
    "id": 124
}, {
    "type": "texte",
    "titre": "Mouvement accéléré",
    "resultat": "Mouvement accéléré $\\iff$ $v$ est croissante $\\iff$ $\\frac{dv}{dt} \\gt 0$",
    "id": 125
}, {
    "type": "texte",
    "titre": "Mouvement décéléré",
    "resultat": "Mouvement décéléré $\\iff$ $v$ est décroissante $\\iff$ $\\frac{dv}{dt} \\lt 0$",
    "id": 126
}, {
    "type": "texte",
    "titre": "Vecteur accélération dans l'étude des mouvements circulaires",
    "resultat": "Dans l'étude des mouvements circulaires, le vecteur accélération peut s'écrire : $\\vec{a} = -\\frac{v^2}{R} \\vec{u_r} + \\frac{dv}{dt} \\vec{u_{\\theta}}$",
    "id": 127
}];

const quiz_dynamique_point = [{
    "type": "definition",
    "titre": "Système mécanique",
    "resultat": "Un système mécanique est un esemble de points matériels.",
    "id": 128
}, {
    "type": "definition",
    "titre": "Point matériel",
    "resultat": "Un point matériel est un sytème de petite taille (ou encore on dit aussi \"un objet physique\") pouvant être assimilé à un point mathématique. Sa position peut être décrite à l'aide de trois coordonnées seulement.",
    "id": 129
}, {
    "type": "texte",
    "titre": "Masse d'un système",
    "resultat": "Quelque soit le système mécanique, on peut lui attribuer une masse $m$ (en kg) qui caractérise les propriétés d'inertie du corps (c'est-à-dire la difficulté à le mettre en mouvement ou à modifier son mouvement).<br/> <b>La masse est une grandeur intrinsèque</b> indépendante de tout référentiel et indépendante de l'état du mouvement du système (donc indépendante de la vitesse par exemple !).",
    "id": 130
}, {
    "type": "definition",
    "titre": "Centre d'inertie",
    "hypotheses": "Soit un système (S) formé de deux points matériels $M_1$ et $M_2$ de masse respective $m_1$ et $m_2$ en mouvement dans un référentiel $\\cal{R}$ et de masse totale du système $m = m_1 + m_2$",
    "resultat": "Le centre d'inertie du système est le point $G$ défini par la relation $$m_1 \\vec{GM_1} + m_2 \\vec{GM_2} = \\vec{O}$$",
    "id": 131
}, {
    "type": "definition",
    "titre": "Barycentre",
    "hypotheses": "Soit un système (S) formé de deux points matériels $M_1$ et $M_2$ de masse respective $m_1$ et $m_2$ en mouvement dans un référentiel $\\cal{R}$ et de masse totale du système $m = m_1 + m_2$",
    "resultat": "On peut définir le barycentre $G$ par sa position tel que : $$\\vec{OG} = \\frac{m_1\\vec{OM_1}+m_2\\vec{OM_2}}{m_1 + m_2}$$",
    "id": 132
}, {
    "type": "definition",
    "titre": "Quantité de mouvement",
    "resultat": "La quantité de mouvement d'un point matériel $M$ de masse $m$ et de vecteur vitesse $\\vec{v}$ dans un référentiel d'étude $\\cal{R}$ est le vecteur : <br/> $\\vec{p}(P) = m\\vec{v}(M)$<br/>La directoin et le sens ceux du vecteur vitesse, et sa norme est exprimée en $kg \\times m \\times s^{-1}$",
    "id": 133
}, {
    "type": "propriete",
    "titre": "Propriété du centre d'inertie $G$",
    "resultat": "La quantité de mouvement <b>totale</b> d'un système, de masse $m_{tot}=m$ et de centre d'inertie $G$, (dont la vitesse dans $\\cal{R}$ vaut $\\vec{v_G}$) vaut : <br/> $\\vec{p} = m\\vec{v_g}$",
    "id": 134
}, {
    "type": "definition",
    "titre": "Actions mécaniques",
    "resultat": "On appelle les actions exercées par un système extérieur \"actions mécaniques\" ($\\iff$ efforts mécaniques). Ce sont les causes du mouvement : plus précisément, ces actions permettent de modifier le vecteur vitesse $\\vec{v}(M)$ du système donc de modifier son mouvement (ou le déformer).<br/>Une action exercée sur un point matériel ou un système en général est modélisé par une représentation mathématique vectorielle appelée <b>\"vecteur force $\\vec{f}$\"</b>",
    "id": 135
}, {
    "type": "texte",
    "titre": "Point matériel/Système <b>isolé</b>",
    "resultat": "Un point matériel ou un système est dit <b>isolé</b> s'il n'est soumis à aucune force.",
    "id": 136
}, {
    "type": "texte",
    "titre": "Répartition des forces d'un système",
    "resultat": "Les forces subies par tout matériel d'un système (S) se répartissent en : <ul><li><b>Les forces intérieures</b> subies de la part d'un autre point du système (S)</li><li><b>Les forces extérieures</b> subies de la part d'un point matériel n'appartenant pas au système (S)</li></ul>",
    "id": 137
}, {
    "type": "definition",
    "titre": "$3^{ème}$ loi de Newtom : Principe d'action réaction",
    "hypotheses": "Soient deux points matériels $M_1$ et $M_2$ en intéraction mécanique. Soit $\\vec{f_{M_1 \\to M_2}} = \\vec{f_{21}}$ la foce subie par $M_2$ de la part de $M_1$ et $\\vec{f_{M_2 \\to M_2}} = \\vec{f_{12}}$ alors : ",
    "resultat": "$\\vec{f_{21}} = -\\vec{f_{12}}$<br/>La force exercée âr $M_1$ sur $m_2$ et celle exercée par $M_2$ sur $M_1$ sont opposées.<br/>Ces forces sont colinéaires à la froite $M_1M_2$",
    "id": 138
}, {
    "type": "definition",
    "titre": "$1^{ère}$ loi de Newton : Principe d'inertie",
    "resultat": "On postule qu'il existe une classe de référentiels privilégiés, appelés \"référentiels galiléens $\\cal{R}$\" pour lesquels tout point (ou système) isolé (ou pseudo-isolé) est en mouvement rectiligne uniforme ou au repos. $\\implies$ $\\vec{v} = \\vec{\\text{constante}}$.",
    "id": 139
}, {
    "type": "definition",
    "titre": "Autre définition d'un référentiel Galiléen",
    "resultat": "Un référentiel est galiléen si et seulement si la quantité de mouvement d'un système (S) isolé est constante dans ce référentiel, c'est à dire si son centre d'inertie $G$ y est animé d'un mouvement rectiligne uniforme (ou au repos)<br/>$\\vec{p} = \\vec{\\text{constante}}$",
    "id": 140
}, {
    "type": "propriete",
    "titre": "Existence de référentiels galiléens",
    "resultat": "Il existe une infinité de référentiels galiléens, tous en translation rectiligne uniforme, les uns en rapport aux autres.",
    "id": 141
}, {
    "type": "definition",
    "titre": "$2^{ème}$ loi de Newton : Loi de quantité de mouvement (ou PFD)",
    "resultat": "Cette loi est tout simplement le \"principe fondamental de la dynamique\" appelé PFD : c'est un principe d'évolution du point matériel $M$.<br/> Ce PFD peut aussi s'appeler \"loi de la quantité de mouvement\" s'il s'écrit plus spécialement avec le vecteur quantité de mouvement, dans une formulation plus général pour les systèmes.",
    "id": 142
}, {
    "type": "propriete",
    "titre": "PFD dans un référentiel galiléen",
    "resultat": "Dans un référentiel galiléen $\\cal{R_g}$<br/>$\\rightarrow$ Pour un point matériel $M$ : $$\\sum\\vec{f_i} = \\vec{F} = \\frac{d\\vec{p}(M)}{dt}$$, ou $\\vec{F} = m\\vec{a}(M)$<br/>$\\rightarrow$ Pour un système (S) de point matériels (dont le solide) : $$\\sum\\vec{f_{i, ext}} = \\vec{F} = \\frac{d\\vec{p}}{dt}$$, ou $\\vec{F} = m\\vec{a}(G)$ si $m$ = constante.",
    "id": 143
}, {
    "type": "definition",
    "titre": "Point en équilibre",
    "resultat": "Un point $M$ est dit en équilibre s'il est au repos dans le référentiel $\\cal{R}$ choisi $\\implies$ la résultante des vecteurs forces doit être réduite au vecteur nul + vitesse initiale nulle. Soit $\\vec{F} = \\vec{O}$ <b>et</b> $\\vec{v_0} = \\vec{O}$",
    "id": 144
}, {
    "type": "definition",
    "titre": "Force de gravitation - Loi de Newton",
    "resultat": "$\\vec{f} = -G\\frac{m_0m}{r^2}\\vec{u_r}$",
    "id": 145
}, {
    "type": "definition",
    "titre": "Poids d'un corps",
    "resultat": "C'est l'effet de l'interaction gravitationnelle de la Terre pour un point sur la Terre ou à son voisinage. <br/> $\\vec{P} = m\\vec{g}$",
    "id": 146
}, {
    "type": "texte",
    "titre": "Champs de pesanteur de la Terre",
    "resultat": "Le champs de pesanteur ne dépend que de la position de $M$ mais en général on le considerera comme uniforme; sa direction définit la verticale au lieu de $M$ et sa norme vaut $g = 9,8ms^{-2}$",
    "id": 147
}, {
    "type": "texte",
    "titre": "Loi de Coulomb",
    "resultat": "$\\vec{f} = \\frac{1}{4\\pi \\epsilon_0}\\frac{q_0q}{r^2}\\vec{u_r}$",
    "id": 148
}, {
    "type": "definition",
    "titre": "Forces Newtonniennes : ",
    "resultat": "Les forces newtoniennes sont des forces colinéaires à $\\vec{OM}$ inversement proportionnelles à $r^2$<br/> $\\vec{f} = -\\frac{K}{r^2}\\vec{u_r}$, avec $K \\gt 0$ attraction et $K \\lt 0$ répulsion.",
    "id": 149
}, {
    "type": "definition",
    "titre": "Force de Lorentz électromagnétique",
    "resultat": "$\\vec{f} = q(\\vec{E} + \\vec{v} \\land \\vec{B})$ = $qE + q\\vec{v} \\land \\vec{B}$ = $\\vec{f_E} + \\vec{f_B}$",
    "id": 150
}, {
    "type": "definition",
    "titre": "Loi de Hooke pour un ressort",
    "resultat": "$\\vec{f}$ ou $\\vec{T}$ = $-l(l-l_0)\\vec{u}$",
    "id": 151
}, {
    "type": "texte",
    "titre": "Mouvement d'un solide et support",
    "resultat": "Un solide en mouvement sur un support, n'est pas soumis aux mêmes contraintes que lorsqu'il est soumis en mouvement <b>sans</b> le support.s",
    "id": 152
}, {
    "type": "texte",
    "titre": "Modélisation des interactions de contact (ou de liaison)",
    "resultat": "Le solide d'étude $(S_1)$, appelé <b>mobile</b> interagit avec un autre solide $(S_2)$, appelé <b>support</b> qui exerce une action mécanique de contact appelé <b>réaction de support</b><br/>On suppose qu'il existe un plan tangent $\\cal{P}$ en tout point de contact entre deux solides $(S_1)$ et $(S_2)$. On note $\\vec{n} = \\vec{n_{2 \\to 1}} = \\vec{n_{\\text{support}\\to\\text{objet}}}$ la normale au plan $\\cal{P}$ de contact.<br/><b>La réaction du support est notée en général $\\vec{R} = \\vec{R_{2\\to 1}}$ et se décompose alors de la façon suivante : $\\vec{R}$ = $\\vec{R_{2 \\to 1}}$ = $\\vec{R_t} + \\vec{R_N}$</b><br/>$R_t \\in \\cal{P}$, réaction tangentielle traduit le <b>frottement solide</b> dû au contact avec le support.<br/>$\\vec{R_N} \\perp \\cal{P}$, réaction normale (orthogonale au support) empêche le solide de traverser le support, elle est dirigée suivant $\\vec{n} = \\vec{n_{2 \\to 1}}$. <br/> <br/> On admet aussi que les action  de $S_1$ sur $S_2$ sont reliées à celles de $S_2$ sur $S_1$ par $\\vec{R_{1\\to 2}} = -\\vec{R_{2 \\to 1}}$ : ceci est un conséquence de l'absence de déformation des deux solides lors du contact. <br/> $\\rightarrow$ Si le contact est <b>sans frottements</b> : $\\vec{R_t} = \\vec{O}$ et $\\vec{R} = \\vec{R_N}$ la réaction est seulement normale au support.<br/>$\\rightarrow$ Lorsque l'objet est contraint de rester en contact avec le support, on parle de liaison bilatérale.<br/>$\\rightarrow$ Lorsque l'objet est simplement posé sur une surface, il peut s'en détacher: la liaison est dite unilatérale. Dès que $\\vec{R_N} = \\vec{0}$, l'objet n'est plus lié au support et son mouvement est modifé.",
    "id": 153
}, {
    "type": "texte",
    "titre": "Loi de Coulomb - équilibre stable",
    "resultat": "<img class=\"imgc\" src= \"res/coulomb_41.jpg\" />",
    "id": 154
}, {
    "type": "texte",
    "titre": "Loi de Coulomb - pas d'équilibre",
    "resultat": "<img class=\"imgc\" src= \"res/coulomb_43.jpg\" />",
    "id": 155
}, {
    "type": "texte",
    "titre": "Modèle linéaire de frottement visqueux",
    "resultat": "$\\vec{f} = -a\\vec{v}\\ \\ $ ou $\\ \\ -\\lambda\\vec{v}\\ \\ $ ou $\\ \\ -h\\vec{v}$<br/>où $a, \\lambda, h$ sont des constantes. Ce modèle linéaire s'utilise pour des \"vitesses faibles\" et les fluides relativement visqueux. Il est intéressant car il conduit à des équationsd différentielles linéaires. Il est utilisé pour un ressort par exemple freiné dans un fluide visqueux.",
    "id": 156
}, {
    "type": "texte",
    "titre": "Modèle quadratique de frottement visqueux",
    "resultat": "Pour des vitesses élevées, dans l'air par exemple, ou pour un fluide peu visqueux, on peut introduire une force de frottement quadratique qu'on appelle \"force de trainée\" exercée sur un corps en mouvement<br/>$\\vec{f}$ = $-\\frac{1}{2}C\\rho S ||\\vec{v}||^2 \\vec{u}$ = $-\\frac{1}{2}C \\rho S ||\\vec{v}|| \\vec{v}$<br/>Avec $\\vec{u} = \\frac{\\vec{v}}{||\\vec{v}||}$ et $||\\vec{v}|| = v$<br/>$C$ est le coefficient de trainée (ou de pénétration dans l'air) sans dimension qui dépend de la forme géométrique de l'objet.<br/>$\\rho$ la masse volumique de l'aif en $k\\times g\\times m \\times s^{-3}$<br/>$S$ est la surface caractéristique du solide en $m^2$ et $\\vec{v}$ son vecteur vitesse<br/>On note souvent $k=\\frac{1}{2}C\\rho S$ le coefficient de frottement de traînée (en $k \\times g \\times m^{-1}$, soit donc <br/> $\\vec{f}$ = $-\\lambda v^2 \\frac{\\vec{v}}{||\\vec{v}||}$ = $-\\lambda ||\\vec{v}|| \\vec{v}$",
    "id": 157
}, {
    "type": "definition",
    "titre": "Poussée d'achimède",
    "resultat": "La résultante des forces de pression sur un corps totalement immergé dans un fluide au repos s'appelle la \"poussée d'Archimède\" $\\vec{\\Pi}$; elle est égale et opposée au vecteur poids du fluide déplacé par le solide : <br/> $\\vec{\\Pi} = -M\\vec{g} = -\\rho V \\vec{g}$",
    "id": 158
}, {
    "type": "definition",
    "titre": "Force centrale",
    "resultat": "Une force $\\vec{f}(M)$ est dite centrale quand son support passe constament par un point fixe $O$ dans $\\cal{R}$, quelque soit le mouvement du point matériel.<br/>Cela se traduit mathématiquement par la relation : <br/>$\\vec{OM} \\land \\vec{f}(M) = \\vec{0}$",
    "id": 159
}, {
    "type": "methode",
    "titre": "Méthode de \"résolution dynamique\"",
    "resultat": "<ol> <li>Définir le système étudié</li> <li>Définir un référentiel $\\mathcal{R}$ d'étude</li> <li>Faire un bilan des actions</li> <li>Ecrire la loi de la quantité de mouvement ou PFD dans le référentiel d'étude</li> <li>Projeter cette relation vectorielle sur une \"base de projection\" imposée ou adabptée au problème</li> <li>Si le mouvement est supposé plan et que l'on connait à priori la trajectoire, la projection du PFD se fait souvent dans deux directions privilégiées (direction tangente, direction orthogonale)</li> <li>La projection du PFD sur la direction tangente à la trajectoire permet en général de trouver l'équation différentielle du mouvement dans le référentiel d'étude</li> <li>Les conditions initiales</li> </ol>",
    "id": 160
}, {
    "type": "texte",
    "titre": "La chute libre - Résultats importants",
    "resultat": "Les équations initiales sont très importantes pour les équations du mouvement. <br/> $\\frac{d\\vec{p}}{dt} = m\\vec{g} \\implies \\vec{a} = \\vec{g}$ <br/> $d^2(z) = -g \\implies d(z) = -gt \\implies z = - \\frac{1}{2} gt^2 + h$",
    "id": 161
}, {
    "type": "definition",
    "titre": "Frottement visqueux linéaire",
    "resultat": "La vitesse du mobile tend vers la vitesse limite quand le temps tend vers l'infini et évolue en deux phases : <br/>$\\rightarrow$ Une phase transitoire qui dure quelques $\\tau$ : on peut définir un temps caractéristique de mise à l'équilibre dans la résolution $\\tau = \\frac{v_t}{g} = \\frac{m}{\\lambda}$ <br/> cela permet au mobile d'accélérer jusqu'à la vitesse limite.<br/>$\\rightarrow$ Une phase de régime permanent lors de laquelle la vitesse est constante est égale à $v_t = \\frac{mg}{\\lambda}$.",
    "id": 162
}, {
    "type": "texte",
    "titre": "Equation différentielle pour la chute libre avec frottements",
    "resultat": "$m\\frac{dv}{dt} + \\lambda v^2 = +mg$",
    "id": 163
}, {
    "type": "definition",
    "titre": "Frottement visqueux quadratique",
    "resultat": "La vitesse du mobile tend vers la vitesse limite quand le temps tend vers l'infini et évolue en deux phases : <br/>$\\rightarrow$ Une phase transitoire qui dure quelques $\\tau$ : on peut définir un temps caractéristique de mise à l'équilibre dans la résolution $\\tau = \\frac{v_t}{g} = \\sqrt{\\frac{m}{\\lambda g}}$; cela permet au mobile d'accélerer jusqu'à la vitesse limite.<br/>$\\rightarrow$ Une phase de régime permanent lors de laquelle la vitesse est constante et égale à $$v_t = \\sqrt{\\frac{mg}{\\lambda}}$$",
    "id": 164
}, {
    "type": "texte",
    "titre": "Le pendule simple",
    "resultat": "Un pendule simple est constitué d'un solide de petite taille (assimilé à un point matériel) de masse $m$ accroché à une potence par l'intermédiaire d'un fil de longueur $l$.",
    "id": 165
}, {
    "type": "texte",
    "titre": "Système du pendule simple",
    "resultat": "<ul> <li><b>Système : </b> solide de masse $m$ assimilé à un point matériel $M$</li> <li><b>Choix du référentiel : </b>le référentiel terrestre supposé galiléen</li> <li><b>Bilan des forces : </b> sans frottements : Le poids $\\vec{P} = m\\vec{g}$ et la tension du fil $\\vec{T} = -T\\vec{u_r}$ </li> <li><b>Loi de la quantité de mouvement : </b> $\\frac{d\\vec{p}}{dt}$ = $m \\frac{d\\vec{v}}{dt}$ = $\\vec{P}$ = $\\vec{T}$</li></ul>",
    "id": 166
}, {
    "type": "texte",
    "titre": "Cas particulier du pendule simple avec oscillation de faible amplitude",
    "resultat": "$$d^2(\\theta) + \\omega_0^2 \\theta = 0$$ $$\\omega_0 = \\sqrt{\\frac{g}{l}}$$<br/> Il y a isochronisme des oscillations.",
    "id": 167
}, {
    "type": "texte",
    "titre": "Equation différentielle d'un ressort simple",
    "resultat": "$d^2(x) + \\omega_0^2 x = 0$, avec $\\omega_0^2 = \\frac{k}{m}$",
    "id": 168
}];

const quiz_energetique_mvmt = [
    {
        "type": "texte",
        "titre": "Approche énergétique",
        "resultat": "L'approche énergétique est une autre formulation des lois de la mécanique qui permet d'accéder plus facilement et plus rapidement à des résultats intéressants, particulièrement pour les problèmes qui nous concernent dans le programme, à savoir les problèmes à 1 degrés de liberté (1 seule variable).",
        "id": 169
    },{
        "type": "texte",
        "titre": "Les différentes formes d'énergies",
        "resultat": "$\\bullet$ <b>Energie cinétique $E_c$</b> : Traduit le mouvement du point (ou de G) sans information sur la direction<br/>$\\bullet$ <b>Energie potentielle $E_p$</b> : Traduit une sorte \"d'énergie disponible\" qu'un point ou qu'un système peut emmagasiner<<br/>$\\bullet$ <b>Energie mécanique $E_m$</b> = $E_c$ + $E_p$",
        "id": 170
    },{
        "type": "definition",
        "titre": "Puissance d'une force",
        "resultat": "On appelle <b>puissance d'une force $\\vec{f}$ la grandeur scalaire et instantannée : <br/> $P = \\vec{f} . \\vec{v}$<br/>avec $P$ en Watt, $f$ en Newton et $v$ en m/s",
        "id": 171
    },{
        "type": "texte",
        "titre": "Propriétés de la puissance d'une force",
        "resultat": "$\\bullet$ <b>Une force dont $P \\gt 0$ est dite motrice</b> : la composante tangentielle de cette force est de même sens que $\\vec{v}$ et son effet est d'augmenter la vitesse du point<br/>$\\bullet$ <b>Une force dont $P \\lt 0$ est dire résistante</b> : la composante tangentielle de cette force est dans le sens contraire à $\\vec{v}$ et son effet est de diminuer la vitesse (comme le frottement)<br/>$\\bullet$ <b> Une force dont $P=0$ </b> est sans effet sur la vitesse $\\vec{v}$ car son action se limite à modifier la directiond du mouvement",
        "id": 172
    },{
        "type": "definition",
        "titre": "Travail d'une force",
        "resultat": "Le travail d'une force $\\vec{f}$ agissant sur un point matériel $M$ qui se déplace le long d'un chemin élémentaire $\\vec{dl}$ est <b/> $\\delta W$ = $Pdt$ = $\\vec{f} . \\vec{v} dt$ = $\\vec{f} . \\vec{dl}$ = $\\vec{f} . \\vec{dOM}$",
        "id": 173
    },{
        "type": "texte",
        "titre": "Travail global d'une force $\\vec{f}$",
        "resultat": "$W_{M_1 \\to M_2}$ = $\\int_{M_1}^{M_2} \\vec{f} . \\vec{dl}$ = $\\int_{t_1}^{t_2}\\vec{f}.\\vec{v}dt$ = $\\int_{t_1}^{t_2} P dt$",
        "id": 174
    },{
        "type": "texte",
        "titre": "Travail du poids",
        "resultat": "Le poids est une force constante dans le référentiel terrestre, donc son travail s'écrit : <br/>$W$ = $m\\vec{g} . \\vec{M_1 M_2}$",
        "id": 175
    }
    // ,{
    //     "type": "texte",
    //     "titre": "Travail de la force élastique d'un ressort",
    //     "resultat": "Il s'écrit dans ce cas ",
    //     "id": 176
    // }
    ,{
        "type": "texte",
        "titre": "Forces conservatrices",
        "resultat": "Il existe un cas particulier de forces, non constantes, pour lesquelles, le travail $W$ est indépendant du chemin suivi entre deux points<br/>Ces forces ont alors des propriétés exceptionnelles (dont celle de conserver l'énergie totale).<br/>Ces forces, dont le travail est indépendant du chemin suivi, seront alors appelées \"forces conservatrices\"",
        "id": 177
    },{
        "type": "theoreme",
        "titre": "Théorème de la puissance cinétique",
        "resultat": "Dans un référentiel galiléen, la variation d'énergie cinétique par unité de temps d'un point matériel de masse $m$, est égale à la somme des puissances de <b>toutes</b> les forces appliquées au point $M$.",
        "id": 178
    },{
        "type": "texte",
        "titre": "Energie cinétique",
        "resultat": "$\\bullet$ Point matériel : $E_c = \\frac{1}{2}mv^2$<br/>$\\bullet$ Système quelconque de masse $m$ et de centre d'inertie $G$ : $E_c = \\frac{1}{2}mv_G^2$<br/>L'énergie cinétique n'existe qu'en présence de mouvement, elle n'est donc pas une forme d'énergie stockable",
        "id": 179
    },{
        "type": "theoreme",
        "titre": "Théorème de l'énergie cinétique (TEC) - referentiel Galiléen",
        "resultat": "Dans un référentiel galiléen, la variation de d'énergie cinétrique d'un point matériel entre deux instants $t_1$ et $t_2$ est égale à la somme de <b>TOUS</b> les travaux des forces exercées sur le point matériel $M$<br/>$E_{c_2} - E_{c_1}$ = $W_{tot}$ = $\\sum W_{M_1 \\to M_2} (\\vec{f})$",
        "id": 180
    },{
        "type": "texte",
        "titre": "Les deux formes du théorème de l'énergie cinétique",
        "resultat": "$\\bullet$ La forme instantannée du TEC est le théorème de la puissance cinétique : $\\frac{dE_c}{dt} = P_{tot}$<br/>$\\bullet$ La version intégrale est le TEC classique : $\\Delta E_c = W_{tot}$",
        "id": 181
    },{
        "type": "definition",
        "titre": "Champ de scalaire",
        "resultat": "On appelle champ de scalaire une fonction $\\vec{r} \\to f(\\vec{r})$ = $f(x,y,z)$ ) valeurs réelles><br/><i>Ex: champ de pression ... fonction énergie potentielle du point</i>",
        "id": 182
    },{
        "type": "definition",
        "titre": "Champ de vecteur",
        "resultat": "On appelle champ de vecteur une fonction vectorielle $\\vec{r} \\to \\vec{A}(\\vec{r})$ = $\\vec{A}(M)$ dont la valeur est définie par ses composantes $\\left\\{\\begin{array}{ll} A_x(x,y,z) \\\\ A_y(x,y,z) \\\\ A_z(x,y,z) \\end{array} \\right.$; ce champ de vecteur peut aussi dépendre en plus de $t$",
        "id": 183
    },{
        "type": "propriete",
        "titre": "Champ indépendant d'un point $M$",
        "resultat": "Un champ indépendant de la position du point $M$ est dit uniforme",
        "id": 184
    },{
        "type": "definition",
        "titre": "Force conservatrice",
        "resultat": "Lorsqu'une force $\\vec{f}$ appliquée à un point matériel $M$ ne dépend que de la position de ce point $M$, on dit que ce point est dans \"un champ de forces\" indépendant de $t$.<br/><b>On dit qu'une force est conservatrice si son travail entre deux points quelconques ne dépend pas du chemin suivi<b>, mais seulement de la position initiale et de la position finale du point $M$ (ou $G$).",
        "id": 185
    },{
        "type": "definition",
        "titre": "Energie potentielle",
        "resultat": "Si le travail d'une force conservatrice $\\vec{f}(M)$ ne dépend que de la position initiale et de la position finale, alors on peut définir une fonction salaire $E_p$ du point $M$ (appelée énergie potentielle de la force) telle que : <br/> $\\ra$ de façon infinitésimale<br/>$\\delta W_{\\vec{f}}$ = $\\vec{f(M)} \\cdot \\vec{dl}$ = $-dE_p$<br/>$\\ra$ ou entre deux points $M_1$ et $M_2$ <br/> $W_{\\vec{f}}$ = $\\int_{M_1}^{M_2} \\vec{f(M)} \\cdot \\vec{dl}$ = $-\\Delta E_p$ = $E_{pM_1} - E_{pM_2}$<br/>On dit alors que cette force conservatrice dérive de la fonction énergie potentielle $E_p$ ou tout simplement que cette force \"<b>dérive d'un potentielle</b>\"",
        "id": 186
    },{
        "type": "methode",
        "titre": "Méthode de calcul de $E_p$",
        "resultat": "$E_p$ se calcule concrètement par la propriété $dE_p$ = $-\\vec{f(M)} \\cdot \\vec{dOM}$ = $-f.\\vec{dl}$<br/>$E_p(\\vec{f}_{conservatrice})$ = $-\\int \\vec{f(M)}\\cdot\\vec{dOM}$ + constante<br/> $\\ra$ On exprime $\\vec{f}$ et $\\vec{dOM}$ dans <b>la même base de projection</b>; on effectue le produit scalaire.<br/>Pour les problèmes unidimensionnels, ce produit scalaire s'exprimera à l'aide d'une seule variable<br/>$\\ra$ On obtient alors la dérivée de $E_p$ par rapport à cette variable de position<br/>On calcule alors la primitive en fonction de la variable adéquate, à une constante près.",
        "id": 187
    },{
        "type": "texte",
        "titre": "Force conservatrice dans un cas tourné autour d'une variable de longueur $x$.",
        "resultat": "$f_{\\text{conservative}}(x)$ = $-\\frac{dE_p}{dx}$ ou bien $E_p$ = $-\\int f(x)dx$ + constante",
        "id": 188
    },{
        "type": "texte",
        "titre": "Recherche de la force conservative dans un cas tourné autour d'une variable d'angle",
        "resultat": "Les forces (ou les composantes des forces) qui comptent pour la recherche de l'énergie potentielle sont celles qui sont projetées sur la direction tangente à la trajectoire <i>(qui est le plus souvent dans les exemples classiques une portion de cercle avec ou sans support, comme l'exemple du pendule de longueur $l$ ou d'un rail circulaire de rayon $R$)</i><br/>Si le problème est à un degré de liberté et en coordonnées polaires, la variable sera en général $\\theta(t)$ et ($r$ = constante = $R$)<br/>Le vecteur de déplacement se simplifie alors $\\vec{dOM}$ = $\\vec{dl}$ = $Rd\\theta\\vec{u_{\\theta}}$, donc $dE_p$ = $-f_{\\theta}(\\theta)Rd\\theta$<br/><br/>$f_{\\theta}(\\theta)$ = $-\\frac{1}{R}\\frac{dE_p}{d\\theta}$ ou $E_p(\\theta)$ = $-\\int f_{\\theta}(\\theta)Rd\\theta$ + constante",
        "id": 189
    },{
        "type": "texte",
        "titre": "Force concervatrice représentant une force centrale ne dépendant que de $r$",
        "resultat": "$f_{\\text{conservatrice}}(r)$ = $-\\frac{dE_p}{dr}$ ou $E_p(r)$ = $-\\int f(r)dr$ + constante",
        "id": 190
    },{
        "type": "definition",
        "titre": "Energie potentielle de pesanteur",
        "resultat": "Si l'axe $z$ est orienté vers le haut :<br/>$E_{pp}$ = $+mgz$ + constante<br/>Mais si l'axe $z$ est orienté vers le bas, on a :<br/>$E_{pp}$ = $-mgz$ + constante",
        "id": 191
    },{
        "type": "definition",
        "titre": "Energie potentielle de gravitation",
        "resultat": "$E_{pG}$ = $-G\\frac{m_0m}{r}$ + constante, souvent égal à $-G\\frac{m_0m}{r}$<br/>La constante est en général nulle car la référence de l'énergie potentielle est en $r\\to \\infty$ sans interaction",
        "id": 192
    },{
        "type": "texte",
        "titre": "Energie potentielle électrostatique",
        "hypotheses": "On considère un point matériel $M$ de charge $q$ soumis à la force coulombienne exercée par une charge $q_0$ placée en $O$.",
        "resultat": "$E_pe$ = $\\frac{1}{4\\pi\\varepsilon_0}\\frac{q_0q}{r}$ + constante",
        "id": 193
    },{
        "type": "definition",
        "titre": "Energie potentielle électrostatique d'une charge placée dans un champs $\\vec{E}$ constant",
        "resultat": "$E_p$ = $-qE_y$ + constante<br/>Si la référence est prise par exemple en $y=0$, alors l'énergie potentielle s'écrit : $E_p$ = $-qE.y$",
        "id": 194
    },{
        "type": "definition",
        "titre": "Energie potentielle élastique associée à la tension du ressort $\\vec{T}$",
        "resultat": "$E_{\\text{pelas}}$ = $\\frac{1}{2}k(l-l_0)^2$ + constante",
        "id": 195
    },{
        "type": "definition",
        "titre": "Energie mécanique",
        "resultat": "L'énergie mécanique $E_m$ (en Joules) est la somme de l'énergie cinétique et des énergies potentielles des forces conservatrives<br/>$E_m$ = $E_c$ + $E_{ptot}$ = $E_c$ + $\\sum E_p(\\vec{f_i})$",
        "id": 196
    },{
        "type": "propriete",
        "titre": "Conservation de l'énergie mécanique",
        "resultat": "Dans le cas d'un mouvement \"conservatif\" (soumis uniquement à des forces conservatives), l'énergie mécanique $E_m$ d'un point matériel (ou d'un système plus complexe) est une grandeur qui se conserve au cours du mouvement (donc de $t$) dans un référentiel galiléen.<br/>$E_m$ n'est fonction que de la position du point matériel (ou du centre $G$ du système) et de ses dérivées premières par rapport au temps : <b>on dit que l'énergie $E_m$ est alors une intégrale première du mouvement<b>",
        "id": 197
    },{
        "type": "theoreme",
        "titre": "Théorème de l'énergie mécanique TEM",
        "resultat": "Dans un référentiel galiléen, la variation d'énergie mécanique d'un système au cours du mouvement est égale au travail des forces qui ne dérivent pas d'un potentiel autrement dit des forces non conservatives (la plupart du temps qui sont dissipatives)<br/>$\\Delta E_m$ = $\\Delta E_c$ + $\\Delta E_p$ = $W_{nc}$",
        "id": 198
    },{
        "type": "texte",
        "titre": "Equation différentielle à partir de $E_m$",
        "resultat": "En dérivant la relation énergétique à une variable <b>par rapport au temps</b>, on retrouve l'équation différentielle du mouvement vérifié par $X$",
        "id": 199
    },{
        "type": "definition",
        "titre": "Intégrale première du mouvement",
        "resultat": "Une intégrale première du mouvement est d'une façon plus générale une grandeur conservative qui ne dépend que des variables qui caractérisent la position, et de ses dérivées premières.<br/>On distingue deux sortes d'intégrales première : <br/>$\\ra$ <b>L'intégrale première de l'énergie</b><br/>$\\ra$<b>L'intégrale première du mouvement cinétique</b><br/>Elles permettent de retrouver les informations principales sur le mouvement du point.",
        "id": 200
    },{
        "type": "texte",
        "titre": "Le puit de potentiel",
        "resultat": "<img class=\"imgc\" style=\"background-color:white;\" src=\"res/puit_potentiel.svg\"/><br/>Le point matériel est astreint à rester dans un intervalle de positions définis par des limites<br/>Ces positions sont $X_1$ et $X_2$<br/>Le mouvement est complètement borné<br/>On dit que $M$ est dans un \"état lié\"<br/>Aux points d'intersections, $\\bdot{X}$ s'annule.<br/>En un point quelconque : <br/>$\\bdot{X}^2$ = $\\frac{2(E_m - E_p(x))}{m}$<br/>Le minimum de $E_p$ correspond au max de l'énergie cinétique.",
        "id": 201
    },{
        "type": "texte",
        "titre": "La barrière de potentiel",
        "resultat": "<img class=\"imgc\" style=\"background-color:white;\" src=\"res/barriere_potentiel.svg\"/><br/>Le point est limité par une seule valeur de $X_1$, il n'est borné que d'un seul côté.<br/>On dit que le point est dans un état libre ou \"état de diffusion\"<br/>Le point matériel peut venir de l'infini mais ne peut dépasser la valeur de $X_1$<br/>Au point d'intersection, $\\bdot{X}$ s'annule.",
        "id": 202
    },{
        "type": "texte",
        "titre": "Energies mécaniques dans la chute libre",
        "resultat": "$E_c$ = $\\frac{1}{2}m\\bdot{z}^2$<br/>$E_p$ = $mgz$<br/>Donc $E_m$ = $\\frac{1}{2}m\\bdot{z}^2$ + $mgz$",
        "id": 203
    },{
        "type": "texte",
        "titre": "Energies mécaniques dans un pendule rigide",
        "resultat": "$E_c$ = $\\frac{1}{2}m(l\\bdot{\\theta})^2$<br/>$E_p$ = $mgl(1-\\cos(\\theta))$<br/>Donc $E_m$ = $\\frac{1}{2}m(l\\bdot{\\theta})^2$ + $mgl(1 - \\cos(\\theta))$",
        "id": 204
    }
    ,{
        "type": "texte",
        "titre": "Condition d'équilibre",
        "resultat": "$\\ra$ Un point ou un système est à l'équilibre (dans $R$ galiléen) s'il est immobile dans ce référentiel.<br/>Pour un point matériel, cela se traduit par une vitesse et une accélération nulle dont la résultante de toutes les forces est nulle<br/>$\\vec{F}$ = $\\sum\\vec{f_l}$ = $\\vec{0}$<br/>$\\ra$ Cela se traduit énergétiquement par : <br/>Un point est en équilibre repéré par la valeur $X$ = $X_{eq}$ si $E_p(X_{eq})$ est un extremum<br/>$\\frac{dE_p(X)}{dX})_{X = X_{eq}}$ = $0$",
        "id": 205
    }
    ,{
        "type": "definition",
        "titre": "Equilibre stable/instable",
        "resultat": "Un équilibre est dit stable si, lorsqu'on écarte très légèrement le point matériel ou le mobile de sa position d'équilibre, il y revient<br/>Inversement, si l'écart du point le conduit à s'éloigner de la position d'équilibre, alors cette position est dite instable",
        "id": 206
    }
    // ,{
    //     "type": "texte",
    //     "titre": "Dérivée et équilibres",
    //     "resultat": "Si $\\frac{dF}{dX})_{X_{eq}}$ $\\lt 0$ : l'équilibre est stable.<br/><br/>Si $\\frac{dF}{dX})_{X_{eq}}$ $\\gt 0$ : l'équilibre est instable",
    //     "id": 207
    // }
    ,{
        "type": "texte",
        "titre": "Relation entre la force et l'énergie potentielle",
        "resultat": "$F(X)$ = $\\frac{dE_p}{dX}$ et $\\frac{dF}{dX}$ = $\\frac{d^2E_p}{dX^2}$",
        "id": 208
    }
    ,{
        "type": "texte",
        "titre": "Condition de stabilité pour un problème à un degré de liberté",
        "resultat": "$\\ra$ Pour que la position d'équilibre $X_{eq}$ soit <b>stable</b>, l'énergie potentielle doit être minimale. En cette position si on connait la courbe ou encore l'expression de l'énergie potentielle alors : <br/> $\\frac{d^2E_p}{dX^2} \\gt 0$ pour $X = X_{eq}$<br/>Une position d'équilibre stable correspond pour la courbe représentative de $E_p(X)$ à un minimum local de la courbe : on dit qu'elle présente autour de ce point une cubette de potentiel (ou un puit)<br/><br/>$\\ra$ Dans le cas contraire, une position d'équilibre <b>instable</b> correspond à un sommet de la courbe de l'énergie potentielle et la relation s'écrit : <br/>$\\frac{d^2E_p}{dX^2} \\lt 0$ pour $X=X_{eq}$",
        "id": 209
    }
    ,{
        "type": "definition",
        "titre": "Profil d'une énergie potentielle",
        "resultat": "Un profil d'énergie potentielle est la courbe correspondant à l'énergie potentielle en fonction du degré de liberté<br/>Les points de tangente horizontale (extremum) sont des positions d'équilibre et les minima du graphe de $E_p(X)$ sont les positions d'équilibre stable.",
        "id": 210
    }
    ,{
        "type": "texte",
        "titre": "Approximation harmonique de l'énergie potentielle",
        "resultat": "En appelant par exemple l'écart à l'équilibre $X - X_{eq} = \\varepsilon$, quantité très petite par nature même d'une pertubation, alors : <br/>$E_p(X)$ $\\approxeq$ $E_p(X_{eq}) + \\frac{1}{2}K\\varepsilon^2$<br/>On reconnait l'énergie potentielle d'un oscillatoeur harmonique ! (à une constante près).<br/>On appelle cette approximation <b>\"l'approximation harmonique\"</b> de l'énergie potentielle au voisinage de l'équilibre stable.($\\iff$ approximation parabolique de la courbe autour de la position $X_{eq}$)",
        "id": 211
    }
    ,{
        "type": "definition",
        "titre": "Portrait de phase",
        "resultat": "Le portrait de phase est un ensemble de trajectoires de phases associés à des différentes conditions initiales",
        "id": 212
    }
    ,{
        "type": "texte",
        "titre": "Approximation harmonique de l'énergie potentielle pour un pendule rigide avec de petits angles",
        "resultat": "$E_p(\\theta)$ $\\approxeq$ $E_{p, harm}(\\theta)$ $\\approxeq$ $mgl\\frac{\\theta^2}{2}$, approximation harmonique de l'énergie potentielle au voisinage du point le plus bas pour le pendule.",
        "id": 213
    }
];

const quiz_complement_osci_mec = [{
    "type": "definition",
    "titre": "Puit de potentiel",
    "resultat": "Un puit de potentiel désigne le voisinage d'un minimum local d'énergie potentielle",
    "id": 214
},{
    "type": "definition",
    "titre": "Puit de potentiel harmonique",
    "resultat": "De façon générale, un oscillateur harmonique à un degré de liberté $X$ est un système physique vérifiant l'équation différentielle $\\bddot{X} + \\omega_0X = 0$, $\\omega_0$ étant la pulsation propre de l'oscillateur (en radian par seconde) et $X$ étant un paramètre décrivant l'oscillateur.<br/>$\\ra$ Il évolue dans un puits de potentiel harmonique de la forme $E_p(X)$ = $\\frac{1}{2}kX^2$",
    "id": 215
},{
    "type": "texte",
    "titre": "Approximation (locale) harmonique d'un puits de potentiel",
    "resultat": "On peut assimiler un puits de potentiel quelconque au voisinage de sa position d'équilibre stable à un potentiel harmonique de constante de rappel élastiqeu $K=\\frac{d^2E_p}}{dx^2})_{x_{eq}}$.<br/>C'est une cuvette parabolique et la fonction approximée peut donc se mettre sous la forme harmonique $E_p(\\varepsilon)$ = $+\\frac{1}{2}K\\varepsilon^2$ autour de la position stable",
    "id": 216
},{
    "type": "texte",
    "titre": "Linéarisation de l'équation du mouvement",
    "resultat": "<b>Pour uns système unidimensionnel, l'application de l'approximation harmonique à $E_p$ autour d'une position d'équilibre stable équivaut à la linéarisation de l'équation du mouvement</b><br/><br/>$\\ra$ Le mouvement dans le potentiel approximé harmonique est celui d'un oscillateur harmonique amorti ou non<br/>$\\ra$ Les mouvements de faibles amplitudes au voisinage d'une position d'équilibre stable peuvent donc être assimilés à des mouvements d'oscillations harmoniques centrées sur la position d'équilibre $x_{eq}$ et de pulsation $\\omega_0 = \\sqrt{\\frac{K}{m}}$ où la constante de rappel $K$ est donné par la relation : <br/> $K = \\frac{d^2E_p}{dx^2})x_e$",
    "id": 217
},{
    "type": "texte",
    "titre": "Elements de cours à retenir pour un oscillateur amorti",
    "resultat": "$\\ra$ Absence de périodicité $\\iff$ trajectoires de phase ouverte<br/>$\\ra$ Irréversibilité de l'évolution (due aux frottements) $\\iff$ trajectoires de phase non symétriques par rapport à $Ox$<br/>$\\ra$ Evolution de l'oscillateur vers l'état d'équilibre stable $\\iff$ point \"attracteur\" en O quelles que soient les conditions initiales",
    "id": 218
},{
    "type": "texte",
    "titre": "Oscillateur mécanique",
    "resultat": "Elongation $x$ ou $z$<br/>Masse $m$<br/>Constante $k$<br/>Vitesse $v$<br/>Frottement $h$<br/><br/><ul><li><b>Oscillateur harmonique</b>$m \\bddot{x} + kx = 0$<br/>$\\bddot{x} + \\omega_0^2 x = 0$<br/>Avec $\\omega_0^2$=$\\frac{k}{m}$<br/>$T = 2\\pi\\sqrt{\\frac{m}{k}}$<br/>Isochronisme des oscillations<br/></li> <li><b>Oscillation libres amorties</b><br/>$m\\bddot{x}$ + $h\\bdot{x}$ + $kx$ = $0$<br/>$\\bddot{x}$ + $\\frac{\\omega_0}{Q}\\bdot{x}$ + $\\omega_0^2x$ = $0$<br/>Avec $Q = \\frac{m\\omega_0}{h}$<br/> Régime critique : $Q=\\frac{1}{2}$</li> <li><b>Oscillations forcées sinusoïdales</b><br/>$m\\bddot{x}$ + $\\lambda\\bdot{x}$ + $kx$ = $F(t)$ = $F \\cos(\\omega t)$<br/>Méthode complexe : ($-m\\omega^2+j\\lambda\\omega$ + $k$)$X_m$ = $F$<br/>Élongation : $x_m$ = $\\frac{F_{/m}}{1 + \\frac{jx}{Q} - x^2}$</li> </ul>",
    "id": 219
},{
    "type": "texte",
    "titre": "Oscillateur électrique",
    "resultat": "Charge $q$ (En pratique $u_c = q/C$<br/>Inductance $L$<br/>$1/C$<br/>Intensité $i$<br/>Résistance $R$<br/><br/><ul><li><b>Oscillateur harmonique</b><br/>$L\\bddot{q}$ + $\\frac{q}{C}$ = $0$<br/>En pratique $L\\bddot{u_c}$ + $\\frac{u_c}{C}$ = $0$<br/>$\\bddot{u_c}$ + $\\omega_0^2u_c$ = $0$<br/>Avec $\\omega_0^2$ = $\\frac{1}{LC}$<br/>$T = 2\\pi\\sqrt{LC}$<br/>Isochronisme des oscillations</li> <li><b>Oscillations libres amorties</b>$L\\bddot{q}$ + $R\\bdot{q}$ + $\\frac{q}{C}$ = $0$<br/>$\\bddot{q}$ + $\\frac{\\omega_0}{Q}\\bdot{q}$ + $\\omega_0^2q$ = $0$<br/>Avec $Q = \\frac{L\\omega_0}{R}$<br/>Régime critique : $Q = \\frac{1}{2}$</li> <li>$L\\bddot{q}$ + $R\\bdot{q}$ + $\\frac{q}{C}$ = $e(t)$ = $E\\cos{\\omega t}$<br/>Méthode complexe <br/> $(-LC\\omega^2$ + $jRC\\omega$ + $1$)$Q_m$ = $CE$<br/>Tension aux bornes de $C$ : <br/>$Q_m$ = $\\frac{CE}{1+\\frac{jx}{Q}-x^2}$<br/>Avec $x = \\omega/\\omega_0$<br/><i>La plupart du temps en électricité, c'est la variable $u_c$ qui est utilisée en pratique et donc attention à la correction dans les analogies</i></li></ul>",
    "id": 220
}];

/*

    ,{
        "type": "texte",
        "titre": "",
        "resultat": "",
        "id": 0
    }

    NEXT ID : 221

*/


// TOUS LES QUIZS SONT DANS LA VARIABLE QUIZS

const Quizs = {
    "Propagation signaux": quiz_propagation_signal,
    "Superposition de signaux/interférences de deux ondes": quiz_superposition_signaux_interference_ondes,
    "Cinématique du point": quiz_cinematique_point,
    "Loi de la quantité de mouvement": quiz_dynamique_point,
    "Approche energetique du mouvement": quiz_energetique_mvmt,
    "Complements oscillateurs mécaniques": quiz_complement_osci_mec
};