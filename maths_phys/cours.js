window.themes = [];
window.cours = {

}

var view = false;

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
    // ON INITIALIZE
    for (theme of window.themes) {
        if (Object.keys(Quizs).includes(theme)) {
            window.cours[theme] = [];
            window.cours[theme] = Quizs[theme];
        }
    }
    if (Object.keys(window.cours).length == 0) {
        // ON VA RENVOYER SUR LA PAGE D'INDEXmotIn
        window.location.href = "index.html?matiere=" + window.matiere;
        return;
    }
    //
    affMots();
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
    } else {
        window.location.href = "../index.html";
    }
    //
    script.type = "text/javascript";
    script.setAttribute("onload", "init_2();");
    document.body.appendChild(script);
}

function affMots() {
    var main_container = document.getElementById("container");
    for (theme of Object.keys(window.cours)) {
        var titre = document.createElement("h2");
        titre.innerHTML = theme + " : ";
        titre.style.marginTop = "25px";
        main_container.appendChild(titre);
        main_container.appendChild(document.createElement("hr"));
        main_container.style.marginRight = "auto";
        //
        var chapitre = document.createElement("div");
        //
        for (elt of window.cours[theme]) {
            var is_disabled = window.disabled.includes(elt.id);
            //
            var box = document.createElement("div");
            box.classList.add("box");
            box.classList.add(elt.type);
            //
            var header = document.createElement("div");
            // header.classList.add("row");
            header.style.display = "flex";
            header.style.flexDirection = "row";
            box.appendChild(header);

            var cb = document.createElement("input");
            cb.id = "cb_" + elt.id;
            cb.type = "checkbox";
            cb.checked = !is_disabled;
            cb.classList.add("form-check-input");
            cb.classList.add("check_box_bt");
            cb.style.marginRight = "5px";
            cb.style.marginLeft = "auto";
            cb.style.marginTop = "auto";
            cb.style.marginBottom = "auto";
            cb.style.display = "none";
            cb.setAttribute("onclick", "cb_pressed(this);");

            header.appendChild(cb);
            if (elt.hasOwnProperty("titre")) {
                var complement_titre = "";
                //
                if (elt.type == "definition") { complement_titre = "Définition : "; } else if (elt.type == "proposition") { complement_titre = "Proposition : "; } else if (elt.type == "propriete") { complement_titre = "Propriété : "; } else if (elt.type == "theoreme") { complement_titre = "Théorème : "; } else if (elt.type == "methode") { complement_titre = "Méthode : "; } else if (elt.type == "lemme") { complement_titre = "Lemme : "; } else if (elt.type == "corollaire") { complement_titre = "Corollaire : "; }
                //
                var titre = document.createElement("h3");
                titre.innerHTML = complement_titre + compile_txt(elt.titre);
                titre.style.marginRight = "auto";
                titre.style.marginLeft = "auto";
                titre.classList.add("titres_box");
                header.appendChild(titre);
            }
            //
            var hr = document.createElement("hr");
            hr.style.borderBottom = "1px solid white";
            box.appendChild(hr);
            //
            if (elt.hasOwnProperty("hypotheses")) {
                var ph = document.createElement("p");
                ph.innerHTML = compile_txt(elt["hypotheses"]);
                box.appendChild(ph);
            }
            if (elt.hasOwnProperty("resultat")) {
                var pr = document.createElement("p");
                pr.innerHTML = compile_txt(elt["resultat"]);
                box.appendChild(pr);
            }
            //
            if (is_disabled) {
                box.classList.add("disabled");
            }
            for (node of box.children) {
                if (node.tagName != "DIV") {
                    if (!is_disabled) {
                        node.style.display = "block";
                    } else {
                        node.style.display = "none";
                    }
                }
            }
            //
            chapitre.appendChild(box);
        }
        main_container.appendChild(chapitre);
    }
    MathJax.typesetPromise();
}


function retour_index() {
    window.location.href = "index.html?matiere=" + window.matiere;
}

function cb_pressed(cb) {
    var id_elt = parseInt(cb.id.split("_")[1]);
    var box = cb.parentNode.parentNode;
    //
    if (cb.checked) {
        box.classList.remove("disabled");
        window.disabled = arrayRemove(window.disabled, id_elt);
    } else {

        box.classList.add("disabled");
        if (!window.disabled.includes(id_elt)) {
            window.disabled.push(id_elt);
        }
    }
    for (node of box.children) {
        if (node.tagName != "DIV") {
            if (cb.checked) {
                node.style.display = "block";
            } else {
                node.style.display = "none";
            }
        }
    }
    //
    save_cookie(window.disabled, window.matiere);
}


function toggle_view() {
    if (view) {
        view = false;
        for (n of document.getElementsByClassName("check_box_bt")) {
            n.style.display = "none";
        }
        for (n of document.getElementsByClassName("titres_box")) {
            n.style.marginLeft = "auto";
        }
        document.getElementById("bt_view").classList.replace("btn-primary", "btn-outline-primary");
        document.getElementById("bt_inverse").style.display = "none";
        document.getElementById("bt_reset").style.display = "none";
    } else {
        view = true;
        for (n of document.getElementsByClassName("check_box_bt")) {
            n.style.display = "block";
        }
        for (n of document.getElementsByClassName("titres_box")) {
            n.style.marginLeft = "5px";
        }
        document.getElementById("bt_view").classList.replace("btn-outline-primary", "btn-primary");
        document.getElementById("bt_inverse").style.display = "initial";
        document.getElementById("bt_reset").style.display = "initial";
    }
}

function inverse_all() {
    for (bt of document.getElementsByClassName("check_box_bt")) {
        bt.click();
    }
}

function reset() {
    for (bt of document.getElementsByClassName("check_box_bt")) {
        if (!bt.checked) {
            bt.click();
        }
    }
}