const quiz_logique = [{
        "type": "definition",
        "titre": "$\\mathbb{R}$",
        "resultat": "$a \\in \\mathbb{N}$"
    }, {
        "type": "definition",
        "titre": "Formule propositionnelle",
        "resultat": "Une formule propositionnelle est une liant des propositions élémentaires représentées par des lettres (ou variables propositionnelles), à l'aide d'un certain nombre de symboles représentant des opérations logiques."
    },
    {
        "type": "definition",
        "titre": "Formules équivalentes",
        "resultat": "Deux formules A et B sont dites équivalentes si elles prennent la même valeur de vérité l'une et l'autre, quelle que soit la distribution de vérités données sur l'ensemble des variables propositionnelles intervenant dans ces formules. Autrement dit, elles sont vraies et fausses sous les mêmes conditions sur les variables propositionnelles."
    },
    {
        "type": "definition",
        "titre": "Tautologie",
        "resultat": "Ce sont des formules toujours vraies (pour toute distribution de vérité)."
    },
    {
        "type": "proposition",
        "titre": "Associativité du #ou",
        "hypotheses": "A, B et C désignent des variables propositionnelles",
        "resultat": "(A #ou B) #ou C #equivaut A #ou (b #ou C)"
    },
    {
        "type": "proposition",
        "titre": "Associativité du #et",
        "hypotheses": "A, B et C désignent des variables propositionnelles",
        "resultat": "(A #et B) #et C #equivaut A #et (B #et C)"
    },
    {
        "type": "proposition",
        "titre": "Distributivité du #ou",
        "hypotheses": "A, B et C désignent des variables propositionnelles",
        "resultat": "A #et(B #ou C) #equivaut(A #et B) #ou(A #et C)"
    },
    {
        "type": "proposition",
        "titre": "Distributé du #et",
        "hypotheses": "A, B et C désignent des variables propositionnelles",
        "resultat": " A #ou(B #et C) #equivaut(A #ou B) #et(A #ou C)"
    },
    {
        "type": "proposition",
        "titre": "Equivalence de l'impliquation",
        "hypotheses": "A, B et C désignent des variables propositionnelles",
        "resultat": "(A #implique B) #equivaut (B #ou #non A)"
    },
    {
        "type": "proposition",
        "titre": "Contraposée",
        "hypotheses": "A, B et C désignent des variables propositionnelles",
        "resultat": "(A #implique B) #equivaut (#non B #implique #non A)"
    }
];



// TOUS LES QUIZS SONT DANS LA VARIABLE QUIZS

const Quizs = {
    "logique": quiz_logique,
};