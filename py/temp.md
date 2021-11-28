
<style>

.box {
    border-radius: 4px;
    padding: 15px;
    margin: 25px;
    overflow-x: auto;
}

.definition {
    border: 1px solid rgb(34, 211, 18);
}

.proposition {
    border: 1px solid rgb(185, 175, 32);
}

.propriete {
    border: 1px solid rgb(199, 94, 8);
}

.theoreme {
    border: 10px double red;
}

.axiome {
    border: 10px double rgb(1, 71, 201)
}

.methode {
    border: 2px dashed rgb(14, 27, 209);
}

.lemme {
    border: 2px dashed rgb(155, 3, 117);
}

.corollaire {
    border: 2px dashed rgb(223, 48, 59);
}

.remarque {
    border: 2px solid rgb(18, 153, 206);
}

.texte {
    border: 2px dashed rgb(248, 248, 248);
}

</style>




# Combinatoire

<div class="box definition"><h1>Définition de la cardinalité selon Frege</h1><i></i><p>On dit que deux ensembles $E$ et $F$ ont le même cardinal s'il existe une bijection de $E$ à $F$. On note $\text{Card}(E) = \text{Card}(F)$</p></div>
<div class="box definition"><h1>Ensemble fini</h1><i>Soit $E$ un ensemble.</i><p>On dit que $E$ est fini si et seulement s'il existe un entier $n$ et une surjection $f: [\![1,n]\!] \rightarrow E$, où de façon équivalente s'il existe une injection $g : E \rightarrow [\![1,n]\!]$.</p></div>
<div class="box proposition"><h1>Sous-ensemble d'un ensemble fini</h1><i>Soit $F$ un sous ensemble de $E$.</i><p>Si $E$ est fini, alors $F$ aussi.</p></div>
<div class="box lemme"><h1>Bijections de $[\![1, n]\!]$ et $[\![1, m]\!]$</h1><i></i><p>Tout sous ensemble $F$ de $[\![1, n]\!]$ peut être mis en bijection avec un ensemble $[\![1, m]\!]$</p></div>
<div class="box lemme"><h1>Egalité provenant de la bijection $[\![1, n]\!] \rightarrow [\![1, m]\!]$</h1><i>Soit $n$ et $m$ deux entiers.</i><p>S'il existe une bijection de $[\![1, n]\!]$ sur $[\![1, m]\!]$, alors $n = m$.</p></div>
<div class="box proposition"><h1>Cardinal d'un ensemble fini</h1><i>Soit $E$ un ensemble fini.</i><p>Il existe un unique entier $n$ tel qu'il existe une bijection $f: [\![1,n]\!] \rightarrow E$. L'entier $n$ est appelé cardinal de $E$, et noté $|E|$, ou Card($E$).</p></div>
<div class="box proposition"><h1>Cardinal d'une union disjointe</h1><i>Soit $A$, $B$, $A_1$, ..., $A_n$ des ensembles finis.</i><p><ol><li>Si $A \cap B = \emptyset\ $, alors $|A \sqcup B| = |A| + |B|$</li> <li>Plus généralement, si pour tout $(i, j) \in [\![1, n]\!]^2$ tel que $i \neq j$, $A_i \cap A_j = \emptyset\ $, alors $|A_1 \sqcup ... \sqcup A_n| = |A_1| + ... + |A_n|$</li></ol></p></div>
<div class="box proposition"><h1>Cardinal d'un complémentaire</h1><i></i><p>Si $a \subset B$, alors $|\text{C}_BA|$ = |B| - |A|</p></div>
<div class="box corollaire"><h1>Cardinal d'un sous-ensemble</h1><i></i><p>Si $A \subset B$, alors $|A| \leqslant |B|$, avec égalité si et seulement si $A=B$.</p></div>
<div class="box proposition"><h1>Cardinal d'une union quelconque</h1><i>Soient $A$ et $B$ des ensembles finis.</i><p>On a : $|A \cup B| = |A| + |B| - |A \cap B|$</p></div>
<div class="box theoreme"><h1>Formule du crible de Poincaré</h1><i>Soient $A_1, ..., A_n$ des ensembles finis.</i><p>On a : $$|A_1 \cup ... \cup A_n| = \sum_{k=1}^{n}( (-1)^{k-1} \sum_{1 \leqslant i_{1} \leqslant ... \leqslant i_{k} \leqslant n} |A_{i_1} \cap \ldots\! \cap A_{i_k}|)$$ <br/> $$ = \sum_{I \subset [\![1,n]\!], I \neq \emptyset\ }((-1)^{|I|-1}|\bigcap_{i \in I}(A_i)|)$$</p></div>
<div class="box proposition"><h1>Cardinal d'un produit cartésien</h1><i>Soient $A$, $B$, $A1,...,A_n$ des ensembles finis.</i><p><ol><li>$|A \times B| = |A| \times |B|$</li> <li>Plus généralement, $|A_1 \times ... \times A_n| = \Pi_{i=1}^n|A_i|$</li></ol></p></div>
<div class="box proposition"><h1>Cardinal et injectivité</h1><i>Soient $E$ et $F$ deux ensembles finis, et soit $f: E \longrightarrow F$ une application</i><p>Si $f$ est injective, $\text{Card}(E) \leqslant \text{Card}(F)$</p></div>
<div class="box proposition"><h1>Cardinal et surjectivité</h1><i>Soient $E$ et $F$ deux ensembles finis, et soit $f: E \longrightarrow F$ une application</i><p>Si $f$ est surjective, $\text{Card}(E) \geqslant \text{Card}(F)$</p></div>
<div class="box proposition"><h1>Cardinal et bijectivité</h1><i>Soient $E$ et $F$ deux ensembles finis, et soit $f: E \longrightarrow F$ une application</i><p>Si $f$ est bijective, $\text{Card}(E) = \text{Card}(F)$</p></div>
<div class="box proposition"><h1>Caractérisation des bijections</h1><i>Soient $A$ et $B$ deux ensembles finsi de même cardinal, et $f: A \longrightarrow B$.</i><p>Les trois propriétés sont équivalentes : <ol><li>$f$ est bijective</li> <li>$f$ est injective</li> <li>$f$ est surjective</li> </ol></p></div>
<div class="box proposition"><h1>Cardinal de l'ensemble des applications</h1><i>Soient $E$ et $F$ deux ensembles finis.<br/>On rappelle qu'on note $F^E$ l'ensemble des applications de $E$ vers $F$.</i><p>$|F^E| = |E^F|$</p></div>
<div class="box definition"><h1>p-listes</h1><i></i><p>Une p-liste d'éléments de $F$ (ou p-uplet) est un élément ($x_1$, ..., $x_p$) de $F^p$.</p></div>
<div class="box proposition"><h1>Nombre de p-liste</h1><i></i><p>Le nombre de p-listes d'éléments de $F$ est $|F|^p$</p></div>
<div class="box proposition"><h1>Cardinal de l'ensemble des parties</h1><i></i><p>$|\mathcal{P}(E)| = 2^{|E|}$</p></div>
<div class="box lemme"><h1>Lemme du berger</h1><i>Soit $f: E \longrightarrow F$ une application surjective. <br/> On suppose qu'il existe un entier $k \in \N^* $ tel que pour tout $y \in F$, $|f^{-1}(y)| = k$ (tous les éléments de $F$ ont le même nombre $k$ d'antécédents).</i><p>$|E| = k \times |F|$</p></div>
<div class="box theoreme"><h1>Dénombrement des injections</h1><i>Soit $A$ et $B$ deux ensembles de cardinaux respectifs $p$ et $n$.</i><p>Alors si $p \leqslant n$, le nombre d'injections de $A$ vers $B$ est $A_n^p  = \frac{n!}{(n-p)!}$. <br/> Si $p \gt n$, il n'existe pas d'injection de $A$ vers $B$.</p></div>
<div class="box proposition"><h1>Dénombrement des p-arrangements</h1><i>Soit $F$ de cardinal $n$ et $p \leqslant n$.</i><p>Le nombre de p-listes d'éléments distincts de $F$ (ou p-arrangements de $F$) est $A_n^p = \frac{n!}{(n-p)!}$</p></div>
<div class="box corollaire"><h1>Nombre de permutations d'un ensemble</h1><i>$\mathfrak{S}E$ représente l'ensemble des permutations de $E$</i><p><ol> <li>Soit $E$ un ensemble fini. Alors $|\mathfrak{S} E| = |E|!$</li> <li>En particulier $|\mathfrak{S}_n| = n!$</li></ol></p></div>
<div class="box definition"><h1>Coefficient binomial</h1><i></i><p>Le coefficient binomial $\binom{n}{k}$ est le nombre de parties à $k$ éléments de $[\![1,n]\!]$</p></div>
<div class="box proposition"><h1>Sens général du coefficient binomial</h1><i></i><p>Le coefficient binomial $\binom{n}{k}$ est plus généralement le nombre de sous-ensemble de cardinal $k$ de n'importe quel ensemble $E$ de cardinal $n$.</p></div>
<div class="box proposition"><h1>Expression factorielle du coefficient binomial</h1><i></i><p>Pour $k \in [\![0, n]\!]$, $\binom{n}{k} = \frac{n!}{k!(n-k)!}$</p></div>
<div class="box proposition"><h1>Propriétés du coefficient binomial</h1><i>Soit $(n,k) \in \Z^2$.</i><p><ol> <li>$\binom{n}{k} = \binom{n}{n-k}$ (symétrie)</li> <li>$k\binom{n}{k} = n\binom{n-1}{k-1}$ (formule du comité-président)</li> <li>si $(n,k) \neq (-1, -1)$, $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$</li> </ol></p></div>
<div class="box theoreme"><h1>Formule du binôme</h1><i></i><p>Pour $n \in \N$, $$(a+b)^n = \sum_{k=0}^n\binom{n}{k}a^kb^{n-k}$$</p></div>
<div class="box methode"><h1>Principe fondamental du dénombrement</h1><i></i><p>Pour montrer que deux ensembles ont le même cardinal, il suffit de construire une bijection entre eux. Ainsi, pour déterminer le cardinal d'un ensemble, on le met souvent en bijection avec un ensemble "de référence" dont on connaît le cardinal.</p></div>
<div class="box methode"><h1>Démonstration combinatoire d'une formule</h1><i></i><p><ol><li>Trouver un modèle adapté de la formule, autrement dit un ensemble d'objets dont le dénombrement fournira un des membres de l'égalité. Pour cela, il est préférable de s'aider du membre le plus simple de l'égalité</li> <li>Dénombrer cet ensemble de deux façons différentes. Souvent, on procède d'une part à un dénombrement direct, et d'autre part à un dénombrement après avoir effectué le tri (de façon formelle, cela revient à définir une partition de l'ensemble). Le résultat d'un dénombrement par tri se traduit par une somme.</li> <li>Evidemment, cette méhode n'est adaptée qu'à des formules portant sur des nombres entiers, si possible positifs. Il est parfois possible de se ramener à cette situation par un prétraitement de la formule à démontrer.</li></ol></p></div>
<div class="box proposition"><h1>Formule de Pascal (coefficients binomiaux)</h1><i></i><p>$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$</p></div>
<div class="box proposition"><h1>$$\sum_{k=0}^n \binom{n}{k}$$</h1><i></i><p>$$\sum_{k=0}^n \binom{n}{k} = 2^n$$</p></div>
<div class="box proposition"><h1>Formule de Vandermonde (coefficients binomiaux)</h1><i></i><p>$$\sum_{k=0}^n\binom{N}{k}\binom{M}{n-k} = \binom{N+M}{n}$$</p></div>
<div class="box proposition"><h1>Formule de sommation sur une colonne</h1><i></i><p>$$\sum_{k=0}^p\binom{n+k}{n} = \binom{n+p+1}{n+1}$$</p></div>
<div class="box proposition"><h1>$$\sum_{k=0}^n = \binom{k}{N}\binom{n-k}{M}$$</h1><i></i><p>$$\sum_{k=0}^n = \binom{k}{N}\binom{n-k}{M} = \binom{n+1}{M+N+1}$$</p></div>
<div class="box methode"><h1>simplifier un $(-1)^n$ associé à un coefficient binomial</h1><i></i><p>Remarquez qu'un signe $(-1)^n$ associé à un coefficient binomial correspond souvent à une comparaison de parités de cardinaux. On peut passer d'un cardinal pair à un cardinal impair, et vice-versa, en "allumant ou éteignant" un élément fixé à l'avance suivant qu'il est déjà ou non dans notre ensemble (plus précisement, il s'agit de l'opération $X \rightarrow X \Delta \{x\}$.)</p></div>
---------------


# Limites - incomplet

<div class="box remarque"><h1>Adhérence</h1><i></i><p>Si $X$ est un sous(ensemble quelconque de $\R$, on peut considérer la limite en un point $a$ de l'adhérence $\ol{X}$ de $X$, défini comme étant le plus petit fermé contenant $X$, ou de façon équivalente, l'ensemble des points $x$ pouvant être approché d'aussi près qu'on veut par des points de $X$ (i.e. tout voisinage de $x$ rencontre $X$)</p></div>
<div class="box definition"><h1>Limite réelle lorsque $x$ tend vers $a$</h1><i>Soit $a \in \ol{X} \cap \R$</i><p>Soit $b \in \R$. On dit que $f(x)$ tend vers $b$ lorsque $x$ tend vers $a$ si :    $\forall \varepsilon \gt 0, \exists \eta \gt 0, \forall x \in X, |x − a| \leqslant \eta \implies |f(x)−b| \leqslant \varepsilon$</p></div>
<div class="box definition"><h1>Limite $+\infty$ lorsque $x$ tend vers $a$</h1><i>Soit $a \in \ol{X} \cap \R$</i><p>On dit que $f(x)$ tend vers $+\infty$ lorsque $x$ tend vers $a$ si :    $\forall A \in \R, \exists \eta \gt 0, \forall x \in X, |x - a| \leqslant \eta \implies f(x) \geqslant A$</p></div>
<div class="box definition"><h1>Limite $-\infty$ lorsque $x$ tend vers $a$</h1><i>Soit $a \in \ol{X} \cap \R$</i><p>On dit que $f(x)$ tend vers $-\infty$ lorsque $x$ tend vers $a$ si :    $\forall A \in \R, \exists \eta \gt 0, \forall x \in X, |x - a| \leqslant \eta \implies f(x) \leqslant A$</p></div>
<div class="box proposition"><h1>Limite en un point du domaine</h1><i>Soit $a \in X$</i><p>Si $f(x)$ admet une limite en $a$, alors cette limite est nécessairement égale à $f(a)$.</p></div>
<div class="box definition"><h1>Limites dans des espaces métriques</h1><i>Soit $(E, d)$ et $(F, d')$ deux espaces métriques, et $X \subset E$. Soit $f : X \longrightarrow F$. <br/> Soit $a \in \ol{X}$, et $b \in F$.</i><p>Comme dans le cas de $\R$, on peut considérer l'adhérence $\ol{X}$ de $X$ dans $E$. On dit que $f$ admet une limite $b$ en $a$ si : <br/>$\forall \varepsilon \gt 0, \exists \eta \gt 0, \forall x \in X, d(x, a) \lt \eta \implies d'(f(x), b) \lt \varepsilon$</p></div>
