window.questions = [];
window.questions_justes = [];
window.questions_fausses = [];
window.question_actu_id = 0;

window.disabled = [];

window.score = 0;
window.nb_question = 0;
window.state = 0;

function init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("matiere")) {
        window.matiere = urlParams.get("matiere");
    } else {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        window.matiere = "maths"; // Par défaut, c'est les maths
    }
    // On va charger les données de quizs de la matière
    var script = document.createElement("script");
    if (matiere == "maths") {
        script.src = "data_quizs_maths.js";
    } else if (matiere == "physique") {
        script.src = "data_quizs_physique.js";
    } else if (matiere == "SI") {
        script.src = "data_quizs_SI.js";
    } else {
        window.location.href = "index.html?matiere=" + window.matiere;
    }
    document.title = "Cartes - " + window.matiere;
    //
    script.type = "text/javascript";
    script.setAttribute("onload", "init_2();");
    document.body.appendChild(script);
}

function init_2() {
    // ON RECUPERE LES COOKIES
    window.disabled = load_cookie(window.matiere);
    // ON RECUPERE LE THEME
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("themes")) {
        window.themes = urlParams.get("themes").split(",");
    } else {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        window.location.href = "index.html?matiere=" + window.matiere;
    }
    console.log("themes : ", window.themes);
    // ON INITIALIZE
    for (theme of window.themes) {
        if (Object.keys(Quizs).includes(theme)) {
            // window.questions = window.questions.concat(Quizs[theme]);
            for (question of Quizs[theme]) {
                if (!window.disabled.includes(question.id)) {
                    question.chapitre = theme;
                    window.questions.push(question);
                }
            }
        }
    }
    if (window.questions.length == 0) {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        alert("pas de quest");
        window.location.href = "index.html?matiere=" + window.matiere;
        return;
    }
    //
    next_question();
}

function next_question() {
    // On regarde s'il reste des questions à tirer
    if (window.questions.length > 0) {
        // On tire au hasard un question
        window.question_actu_id = parseInt(Math.random() * window.questions.length);
        var txt_comp = "";
        switch (window.questions[window.question_actu_id].type) {
            case "definition":
                txt_comp = "Définition : "
                break
            case "proposition":
                txt_comp = "Proposition : "
                break
            case "lemme":
                txt_comp = "Lemme : "
                break
            case "methode":
                txt_comp = "Méthode : "
                break
            case "axiome":
                txt_comp = "Axiome : "
                break
            case "corollaire":
                txt_comp = "Corollaire : "
                break
            case "propriete":
                txt_comp = "Propriété : "
                break
            default:
                break
        }
        document.getElementById("bt_devoile").style.display = "initial";
        document.getElementById("bt_known").style.display = "none";
        document.getElementById("card_chapitre").innerHTML = compile_txt(window.questions[window.question_actu_id].chapitre);
        document.getElementById("card_titre").innerHTML = txt_comp + compile_txt(window.questions[window.question_actu_id].titre);
        document.getElementById("card_hypotheses").innerHTML = "";
        document.getElementById("card_resultat").innerHTML = "";
        MathJax.typesetPromise();
        window.state = 1;
        // On affiche le score
        document.getElementById("score").innerHTML = "Score : " + score + " / " + nb_question;
        document.getElementById("restant").innerHTML = "Question : " + nb_question + " / " + (window.questions.length + nb_question);
        window.nb_question++;
    } // Sinon, on renvoie vers la page de fin
    else {
        window.state = 3;
        document.getElementById("span_score").innerHTML = "" + score + " / " + nb_question;
        document.getElementById("nb_cartes_justes").innerHTML = window.questions_justes.length;
        document.getElementById("nb_cartes_fausses").innerHTML = window.questions_fausses.length;
        document.getElementById("score").innerHTML = "Score : " + score + " / " + nb_question;
        document.getElementById("block_input").style.display = "none";
        document.getElementById("block_fin").style.display = "block";
    }
}

function reveal() {
    if (window.state == 1) {
        console.log(window.questions[window.question_actu_id]);
        if (window.questions[window.question_actu_id]["hypotheses"] != undefined) {
            document.getElementById("card_hypotheses").innerHTML = compile_txt(window.questions[window.question_actu_id]["hypotheses"]);
        }
        document.getElementById("card_resultat").innerHTML = compile_txt(window.questions[window.question_actu_id].resultat);
        MathJax.typesetPromise();
        window.state = 2;
    }
}

function restart_all() {
    window.state = 0;
    window.score = 0;
    window.nb_question = 0;
    window.questions = window.questions_fausses.concat(window.questions_justes);
    window.questions_fausses = [];
    window.questions_justes = [];
    document.getElementById("block_input").style.display = "block";
    document.getElementById("block_fin").style.display = "none";
    next_question();
}

function restart_only_ratees() {
    if (window.questions_fausses.length == 0) {
        alert("Vous n'avez raté aucune question, vous ne pouvez donc pas recommencer avec seulement les questions fausses puisqu'il n'y en a pas !");
    } else {
        window.state = 0;
        window.score = 0;
        window.nb_question = 0;
        window.questions = window.questions_fausses;
        window.questions_fausses = [];
        window.questions_justes = [];
        document.getElementById("block_input").style.display = "block";
        document.getElementById("block_fin").style.display = "none";
        next_question();
    }
}

function devoiler() {
    document.getElementById("bt_devoile").style.display = "none";
    reveal();
    document.getElementById("bt_known").style.display = "block";
}

function card_known() {
    window.questions_justes.push(window.questions[window.question_actu_id]);
    window.questions.splice(window.question_actu_id, 1);
    window.score += 1;
    next_question();
}

function card_not_known() {
    window.questions_fausses.push(window.questions[window.question_actu_id]);
    window.questions.splice(window.question_actu_id, 1);
    next_question();
}

function retour_index() {
    window.location.href = "index.html?matiere=" + window.matiere;
}

function decoche_reussies() {
    for (q of window.questions_justes) {
        if (!window.disabled.includes(q.id)) {
            window.disabled.push(q.id);
        } else {
            console.log("TEST ", q);
        }
    }
    save_cookie(window.disabled, window.matiere);
    //
    alert("Opération effectuée.");
}