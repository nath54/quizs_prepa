/*

LE QUIZ SE COMPORTE EN PLUSIEURS ETAPES :

 1) On prépare la question et on l'affiche à l'écran

 2) On récupère la réponse de l'utilisateur et on vérifie si elle est bonne ou pas
    On affiche ensuite le résultat, la bonne réponse

/!\ Il faudra faire un graphe d'évolution du niveau de bonnes réponses /!\

*/

window.themes = [];
window.questions = [];
window.question_id = null;
window.question = null;
window.reponse = null;
window.sens_question = null;
window.score = 0;
window.nb_questions = 0
window.dernieres_reponses = [];
window.questions_ratees = [];
window.questions_reussies = [];
window.sens = 0; // 0 = fr -> agl,  1 = agl -> fr,  2 = les deux
window.etape = 0;
window.pourcentages = [];

const types_simples = ["definition"];

const cantx = 300;
const canty = 150;

function randInt(a, b) {
    return parseInt(a + Math.random() * (b - a));
}

function randChoice(lst) {
    return lst[parseInt(Math.random() * lst.length)];
}

function max(lst) {
    var max = lst[0];
    for (el of lst) {
        if (el > max) {
            max = el;
        }
    }
    return max;
}

function keys(dic) {
    return Object.keys(dic);
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function ajouteDernieresReponses(juste) { // juste = 0 ou 1
    window.dernieres_reponses.push(juste);
    while (window.dernieres_reponses.length > 10) {
        window.dernieres_reponses.shift();
    }
}

function affGraphe() {
    if (document.getElementById("canvas").style.display == "none") {
        document.getElementById("canvas").style.display = "block";
    }
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cantx, canty);

    var x0 = 10;
    var y0 = canty - 10;
    var x1 = cantx - 10;
    var y1 = 20;

    //quadrillage

    ctx.lineWidth = 2
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0, y1);
    ctx.stroke();
    ctx.closePath();
    ctx.lineWidth = 2
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(x1, y0);
    ctx.lineTo(x0, y0);
    ctx.stroke();
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'grey';
    ctx.beginPath();
    ctx.moveTo(x0, y0 - 50);
    ctx.lineTo(x1, y0 - 50);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(x0, y1);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.closePath();


    if (window.pourcentages.length <= 1) {
        return 0;
    }

    var tc = 3;
    if (window.pourcentages[0] > 70) { ctx.fillStyle = "green"; } else if (window.pourcentages[0] > 50) { ctx.fillStyle = "orange"; } else { ctx.fillStyle = "red"; }
    ctx.fillRect(x0 - tc / 2, y0 - window.pourcentages[0] - tc / 2, tc, tc);
    //pourcentages
    for (x = 1; x < window.pourcentages.length; x++) {
        if (window.pourcentages[x] > window.pourcentages[x - 1]) {
            ctx.strokeStyle = 'green';
            ctx.fillStyle = "green";
        } else if (window.pourcentages[x] < window.pourcentages[x - 1]) {
            ctx.strokeStyle = 'red';
            ctx.fillStyle = "red";
        } else {
            if (window.pourcentages[x] > 70) {
                ctx.strokeStyle = "green";
                ctx.fillStyle = "green";
            } else if (window.pourcentages[x] > 50) {
                ctx.strokeStyle = "orange";
                ctx.fillStyle = "orange";
            } else {
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
            }
        }
        ctx.fillRect(x0 + (x1 - x0) / (window.pourcentages.length - 1) * x - tc / 2, y0 - window.pourcentages[x] - tc / 2, tc, tc);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x0 + (x1 - x0) / (window.pourcentages.length - 1) * (x - 1), y0 - window.pourcentages[x - 1]);
        ctx.lineTo(x0 + (x1 - x0) / (window.pourcentages.length - 1) * x, y0 - window.pourcentages[x]);
        ctx.stroke();
        ctx.closePath();
    }
}

function getPercentage(lst) {
    var somme = 0;
    for (el of lst) {
        somme += el;
    }
    return somme / lst.length;
}

function traiteText(txt) {
    ntxt = txt
    ntxt = txt.toLowerCase();
    replacements = {
        "é": "e",
        "è": "e",
        "ê": "e",
        "ë": "e",
        "â": "a",
        "ä": "a",
        "à": "a",
        "á": "a",
        "ç": "c",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "î": "i",
        "ï": "i",
        "í": "i",
        "ö": "o",
        "ô": "o",
        "ó": "o",
        "ñ": "n",
        " ": "",
        "\t": "",
        "\r": "",
        "\n": "",
        ",": "",
        "?": "",
        ";": "",
        ".": "",
        ":": "",
        "§": "",
        "_": "",
        "&": "",
        "$": "",
        "#": "",
        "{": "",
        "[": "",
        "|": "",
        "`": "",
        "\\": "",
        "^": "",
        "@": "",
        "]": "",
        "}": "",
        "°": "",
        "€": "",
        "£": "",
        "µ": "",
        "’": ""
    }
    for (k of Object.keys(replacements)) {
        while (ntxt.includes(k)) { ntxt = ntxt.replace(k, replacements[k]); }
    }

    return ntxt
}

function prepareQuestion() {
    window.etape = 1;
    // ON TIRE UNE QUESTION AU HASARD
    var idq = randInt(0, window.questions.length);
    // SI LA QUESTION A DEJA ETE REUSSIE
    if (window.questions_reussies.includes(idq)) {
        // ON VA AVOIR 50 % DE CHANCE DE LA RELANCER EN QUESTION RATEE
        if (window.questions_ratees.length > 0 && randInt(1, 2) == 1) {
            idq = randChoice(window.questions_ratees);
        }
    }
    //
    window.question_id = idq;
    //
    window.question = window.questions[idq];
    // ON VA AFFICHER LA QUESTION
    if (window.question.type == "definition") {
        document.getElementById("question").innerHTML = "Donner la définition de : ";
    } else if (window.question.type == "proposition") {
        document.getElementById("question").innerHTML = "Donner la proposition suivante :";
    } else if (window.question.type == "propriete") {
        document.getElementById("question").innerHTML = "Donner la propriété suivante :";
    } else if (window.question.type == "methode") {
        document.getElementById("question").innerHTML = "Donner la méthode suivante :";
    } else if (window.question.type == "theoreme") {
        document.getElementById("question").innerHTML = "Donner le théorème suivante :";
    }
    //
    document.getElementById("mot_a_traduire").innerHTML = compile_txt(window.question.titre);

    document.getElementById("block_input").style.display = "block";
    document.getElementById("block_result").style.display = "none";
    document.getElementById("input_reponse").value = "";
    document.getElementById("input_reponse_hypotheses").value = "";
    document.getElementById("input_reponse_resultat").value = "";


    if (types_simples.includes(window.question.type)) {
        document.getElementById("input_simple").style.display = "block";
        document.getElementById("input_double").style.display = "none";
        document.getElementById("input_double").classList.remove("d-flex");
    } else {
        document.getElementById("input_double").classList.add("d-flex");
        document.getElementById("input_double").style.display = "block";
        document.getElementById("input_simple").style.display = "none";
    }

    // On update le latex sur la page
    MathJax.typesetPromise();
}

function test_reponse(reponse_utilisateur, reponse) {

    return est_bonne_reponse;
}

function traiteReponse() {
    window.etape = 2;
    var est_bonne_reponse = 0;
    if (types_simples.includes(window.question.type)) {
        // ON VA RECUPERER LA REPONWSE DE L'UTILISATEUR
        var reponse_utilisateur = document.getElementById("input_reponse").value;

        // ON VA LA COMPARER AVEC LA BONNE REPONSE
        if (traiteText(reponse_utilisateur) == traiteText(window.question.resultat)) {
            est_bonne_reponse = 1;
            window.score++;
            document.getElementById("bonne_rep").style.display = "block";
            document.getElementById("mauvaise_rep").style.display = "none";
            //
            if (window.questions_ratees.includes(window.question_id)) {
                window.questions_ratees = removeItemOnce(window.questions_ratees, window.question_id);
            }
            if (!window.questions_reussies.includes(window.question_id)) {
                window.questions_reussies.push(window.question_id);
            }
        } else {
            document.getElementById("bonne_rep").style.display = "none";
            document.getElementById("mauvaise_rep").style.display = "block";
            //
            if (window.questions_reussies.includes(window.question_id)) {
                window.questions_reussies = removeItemOnce(window.questions_reussies, window.question_id);
            }
            if (!window.questions_ratees.includes(window.question_id)) {
                window.questions_ratees.push(window.question_id);
            }
        }
        document.getElementById("bonne_reponse_simple").style.display = "block";
        document.getElementById("bonne_reponse_double").style.display = "none";
        document.getElementById("bonne_reponse").innerHTML = compile_txt(window.question.resultat);
    } else if (["theoreme", "proposition"].includes(window.question.type)) {

        // ON VA RECUPERER LA REPONWSE DE L'UTILISATEUR
        var hypotheses_utilisateur = document.getElementById("input_reponse_hypotheses").value;
        var resultat_utilisateur = document.getElementById("input_reponse_resultat").value;

        // ON VA LA COMPARER AVEC LA BONNE REPONSE
        if (traiteText(hypotheses_utilisateur) == traiteText(window.question.hypotheses) &&
            traiteText(resultat_utilisateur) == traiteText(window.question.resultat)) {
            est_bonne_reponse = 1;
            window.score++;
            document.getElementById("bonne_rep").style.display = "block";
            document.getElementById("mauvaise_rep").style.display = "none";
            //
            if (window.questions_ratees.includes(window.question_id)) {
                window.questions_ratees = removeItemOnce(window.questions_ratees, window.question_id);
            }
            if (!window.questions_reussies.includes(window.question_id)) {
                window.questions_reussies.push(window.question_id);
            }
        } else {
            document.getElementById("bonne_rep").style.display = "none";
            document.getElementById("mauvaise_rep").style.display = "block";
            //
            if (window.questions_reussies.includes(window.question_id)) {
                window.questions_reussies = removeItemOnce(window.questions_reussies, window.question_id);
            }
            if (!window.questions_ratees.includes(window.question_id)) {
                window.questions_ratees.push(window.question_id);
            }
        }
        document.getElementById("bonne_reponse_simple").style.display = "none";
        document.getElementById("bonne_reponse_double").style.display = "block";

        document.getElementById("bonne_reponse_hypotheses").innerHTML = compile_txt(window.question.hypotheses);
        document.getElementById("bonne_reponse_resultat").innerHTML = compile_txt(window.question.resultat);
    }
    ajouteDernieresReponses(est_bonne_reponse);
    //
    document.getElementById("block_input").style.display = "none";
    document.getElementById("block_result").style.display = "block";
    window.nb_questions++;
    // ON VA S'OCCUPER DES POURCENTAGES ET DU GRAPHE
    window.pourcentages.push(getPercentage(window.dernieres_reponses) * 100.0);
    affGraphe();
    //
    document.getElementById("score").innerHTML = "score : " + window.score + " / " + window.nb_questions;
    // On update le latex sur la page
    MathJax.typesetPromise();
}


function init() {
    // ON RECUPERE LE THEME
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("themes")) {
        window.themes = urlParams.get("themes").split(",");
    } else {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        window.location.href = "index.html"
    }
    // ON INITIALIZE
    for (theme of window.themes) {
        if (Object.keys(Quizs).includes(theme)) {
            window.questions = window.questions.concat(Quizs[theme]);
        }
    }
    if (window.questions.length == 0) {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        window.location.href = "index.html";
        return;
    }
    // ON COMMENCE LE QUIZ
    prepareQuestion();
    //
    affGraphe();
}

function etapeSuivante() {
    if (window.etape == 1) {
        traiteReponse();
    } else {
        prepareQuestion();
    }
}

// EVENTS

document.body.addEventListener("keydown", (e) => {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter') {
        etapeSuivante();
        return false;
    }
});