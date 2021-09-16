/*

LE QUIZ SE COMPORTE EN PLUSIEURS ETAPES :

 1) On prépare la question et on l'affiche à l'écran

 2) On récupère la réponse de l'utilisateur et on vérifie si elle est bonne ou pas
    On affiche ensuite le résultat, la bonne réponse

/!\ Il faudra faire un graphe d'évolution du niveau de bonnes réponses /!\

*/

window.theme = "science";
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
    if (window.pourcentages.length <= 1) {
        return 0;
    }
    if (document.getElementById("canvas").style.display == "none") {
        document.getElementById("canvas").style.display = "block";
    }
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 150);

    var x0 = 20;
    var y0 = 130;
    var x1 = 480;
    var y1 = 30;

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

    var tc = 10;
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
        ctx.lineWidth = 3;
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
        "!": "",
        ",": "",
        "?": "",
        ";": "",
        ".": "",
        ":": "",
        "/": "",
        "§": "",
        "%": "",
        "*": "",
        "-": "",
        "_": "",
        "'": "",
        '"': "",
        "(": "",
        ")": "",
        "&": "",
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
        "=": "",
        "+": "",
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
    if (window.sens == 0) {
        window.question = window.questions[idq][1];
        window.reponse = window.questions[idq][0];
        window.sens_question = 0;
    } else if (window.sens == 1) {
        window.question = window.questions[idq][0];
        window.reponse = window.questions[idq][1];
        window.sens_question = 1;
    } else {
        if (randChoice([1, 2]) == 1) {
            window.question = window.questions[idq][1];
            window.reponse = window.questions[idq][0];
            window.sens_question = 0;
        } else {
            window.question = window.questions[idq][0];
            window.reponse = window.questions[idq][1];
            window.sens_question = 1;
        }
    }
    // ON VA AFFICHER LA QUESTION
    if (window.question_sens == 0) {
        document.getElementById("question").innerHTML = "Traduire en anglais :";
    } else {
        document.getElementById("question").innerHTML = "Traduire en français :";
    }
    document.getElementById("mot_a_traduire").innerHTML = window.question;
    document.getElementById("block_input").style.display = "block";
    document.getElementById("block_result").style.display = "none";
    document.getElementById("input_reponse").value = "";
}

function traiteReponse() {
    window.etape = 2;
    // ON VA RECUPERER LA REPONSE DE L'UTILISATEUR
    var reponse_utilisateur = document.getElementById("input_reponse").value;
    var est_bonne_reponse = 0;
    // ON VA LA COMPARER AVEC LA BONNE REPONSE
    if (traiteText(reponse_utilisateur) == traiteText(window.reponse)) {
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
    ajouteDernieresReponses(est_bonne_reponse);
    //
    document.getElementById("bonne_reponse").innerHTML = window.reponse;
    document.getElementById("block_input").style.display = "none";
    document.getElementById("block_result").style.display = "block";
    window.nb_questions++;
    // ON VA S'OCCUPER DES POURCENTAGES ET DU GRAPHE
    window.pourcentages.push(getPercentage(window.dernieres_reponses) * 100.0);
    affGraphe();
    //
    document.getElementById("score").innerHTML = "score : " + window.score + " / " + window.nb_questions;
}


function init() {
    // ON RECUPERE LE THEME
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("theme")) {
        window.theme = urlParams.get("theme");
        if (!keys(Quizs).includes(window.theme) && window.theme != "all") {
            // ON VA FAIRE UN THEME AU HASARD
            window.theme = randChoice(keys(Quizs));
        }
    } else {
        // ON VA FAIRE UN THEME AU HASARD
        window.theme = randChoice(keys(Quizs));
    }
    // ON INITIALIZE

    if (window.theme == "all") {
        for (themes of Object.keys(Quizs)) {
            window.questions = window.questions.concat(Quizs[themes]);
        }
    } else {
        window.questions = Quizs[window.theme];
    }
    // ON COMMENCE LE QUIZ
    prepareQuestion();
    //
}



// EVENTS

document.body.addEventListener("keydown", (e) => {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter') {
        if (window.etape == 1) {
            traiteReponse();
        } else {
            prepareQuestion();
        }
        return false;
    }
});

function set_sens(sens) {
    window.sens = sens;
    //
    for (x = 0; x <= 2; x++) {
        if (x == sens) {
            document.getElementById("bt_sens_" + x).setAttribute("class", "btn btn-primary");
        } else {
            document.getElementById("bt_sens_" + x).setAttribute("class", "btn btn-outline-primary");
        }
    }
}