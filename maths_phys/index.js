window.matiere = "maths";
window.themes_select = {

};

function init_2() {
    //
    for (theme of Object.keys(Quizs)) {
        var bt = document.createElement("a");
        bt.innerHTML = theme;
        bt.classList.add("btn");
        bt.classList.add("btn-outline-info");
        bt.classList.add("m-1");
        bt.setAttribute("onclick", "toggle_theme('" + theme + "');");
        bt.id = "button_" + theme;
        document.getElementById("liste_themes").appendChild(bt);
        window.themes_select[theme] = false;
    }
}

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
        window.location.href = "../index.html";
    }
    //
    script.type = "text/javascript";
    script.setAttribute("onload", "init_2();");
    document.body.appendChild(script);
}

function toggle_theme(theme) {
    if (window.themes_select[theme]) {
        window.themes_select[theme] = false;
        document.getElementById("button_" + theme).setAttribute("class", "btn btn-outline-info m-1");
    } else {
        window.themes_select[theme] = true;
        document.getElementById("button_" + theme).setAttribute("class", "btn btn-info m-1");
    }
}

function select_all() {
    var tout_selectionne = true;
    for (theme of Object.keys(window.themes_select)) {
        if (!window.themes_select[theme]) {
            tout_selectionne = false;
            break;
        }
    }
    //
    if (tout_selectionne) {
        for (theme of Object.keys(window.themes_select)) {
            toggle_theme(theme);
        }
    } else {
        for (theme of Object.keys(window.themes_select)) {
            if (!window.themes_select[theme]) {
                toggle_theme(theme);
            }
        }
    }
}

function launch_quiz() {
    var url = "quiz.html?matiere=" + window.matiere + "&themes=";
    var nb_themes = 0;
    //
    for (theme of Object.keys(window.themes_select)) {
        if (window.themes_select[theme]) {
            if (nb_themes > 0) {
                url += ",";
            }
            url += theme;
            nb_themes++;
        }
    }
    //
    if (nb_themes == 0) {
        alert("Il faut avoir au moins selectionné un theme !");
        return;
    }
    //
    window.location.href = url;
}


function launch_cours() {
    var url = "cours.html?matiere=" + window.matiere + "&themes=";
    var nb_themes = 0;
    //
    for (theme of Object.keys(window.themes_select)) {
        if (window.themes_select[theme]) {
            if (nb_themes > 0) {
                url += ",";
            }
            url += theme;
            nb_themes++;
        }
    }
    //
    if (nb_themes == 0) {
        alert("Il faut avoir au moins selectionné un theme !");
        return;
    }
    //
    window.location.href = url;
}


function launch_cards() {
    var url = "cards.html?matiere=" + window.matiere + "&themes=";
    var nb_themes = 0;
    //
    for (theme of Object.keys(window.themes_select)) {
        if (window.themes_select[theme]) {
            if (nb_themes > 0) {
                url += ",";
            }
            url += theme;
            nb_themes++;
        }
    }
    //
    if (nb_themes == 0) {
        alert("Il faut avoir au moins selectionné un theme !");
        return;
    }
    //
    window.location.href = url;
}

function launch_questions() {
    var url = "questions.html?matiere=" + window.matiere + "&themes=";
    var nb_themes = 0;
    //
    for (theme of Object.keys(window.themes_select)) {
        if (window.themes_select[theme]) {
            if (nb_themes > 0) {
                url += ",";
            }
            url += theme;
            nb_themes++;
        }
    }
    //
    if (nb_themes == 0) {
        alert("Il faut avoir au moins selectionné un theme !");
        return;
    }
    //
    window.location.href = url;
}