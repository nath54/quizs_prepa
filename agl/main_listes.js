window.themes = [];
window.vocs = {};

window.disabled = {};

const CL_DISABLED = "rgb(50, 40, 40)";
const CL_ENABLED = "#121212";

var view = false;

function init() {
    // ON RECUPERE LE THEME
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("themes")) {
        window.themes = urlParams.get("themes").split(",");
    } else {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        window.location.href = "index.html";
    }
    // ON INITIALIZE
    for (theme of window.themes) {
        if (Object.keys(Quizs).includes(theme)) {
            window.vocs[theme] = [];
            window.vocs[theme] = Quizs[theme];
        }
    }
    if (Object.keys(window.vocs).length == 0) {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        window.location.href = "index.html";
        return;
    }
    // ON VA RECUPERER LES COOKIES
    // Si ce n'est plus la même version, on supprime les disabled précédents
    var va = getCookie("version_agl");
    if (va == "" || va != VERSION_DATA_AGL) {
        window.disabled = [];
        save_cookie(window.disabled, "anglais");
        setCookie("version_agl", VERSION_DATA_AGL);
    } else {
        window.disabled = load_cookie();
    }
    //
    affMots();
    //
}

function affMots() {
    var main_container = document.getElementById("container");
    for (theme of Object.keys(window.vocs)) {
        //
        var titre = document.createElement("h2");
        titre.innerHTML = theme + " : ";
        titre.style.marginTop = "25px";
        main_container.appendChild(titre);
        main_container.appendChild(document.createElement("hr"));
        main_container.style.marginRight = "auto";
        //
        var tab = document.createElement("table");
        //
        for (mot of window.vocs[theme]) {
            //
            var motIn = window.disabled.includes(mot[2]);
            //
            var ligne = document.createElement("tr");
            //
            var select = document.createElement("td");
            select.classList.add("view_select");
            select.style.display = "none";
            var cb = document.createElement("input");
            cb.id = "cb_" + mot[2];
            cb.type = "checkbox";
            cb.checked = !motIn;
            cb.classList.add("form-check-input");
            cb.classList.add("check_box_bt");
            cb.setAttribute("onclick", "cb_pressed(this);");
            select.appendChild(cb);
            ligne.appendChild(select);
            //
            //
            var fr = document.createElement("td");
            fr.classList.add("tabcol1");
            var agl = document.createElement("td");
            agl.classList.add("tabcol2");
            //
            if (typeof mot[1] == "string") { fr.innerHTML = mot[1]; } else { fr.innerHTML = mot[1].join(" <i style:'color: white'>ou</i> "); }
            if (typeof mot[0] == "string") { agl.innerHTML = mot[0]; } else { agl.innerHTML = mot[0].join(" <i style:'color: white'>ou</i> "); }
            ligne.appendChild(fr);
            ligne.appendChild(agl);
            tab.appendChild(ligne);
            ligne.style.minWidth = "80%";
            ligne.style.maxWidth = "92%";
            //
            if (motIn) {
                for (node of[select, fr, agl]) {
                    node.style.backgroundColor = CL_DISABLED;
                }
            } else {
                for (node of[select, fr, agl]) {
                    ligne.style.backgroundColor = CL_ENABLED;
                }
            }
        }
        main_container.appendChild(tab);
    }
}

function toggle_view() {
    if (view) {
        view = false;
        for (n of document.getElementsByClassName("view_select")) {
            n.style.display = "none";
        }
        document.getElementById("bt_view").classList.replace("btn-primary", "btn-outline-primary");
        document.getElementById("bt_inverse").style.display = "none";
        document.getElementById("bt_reset").style.display = "none";
    } else {
        view = true;
        for (n of document.getElementsByClassName("view_select")) {
            n.style.display = "table-cell";
        }
        document.getElementById("bt_view").classList.replace("btn-outline-primary", "btn-primary");
        document.getElementById("bt_inverse").style.display = "initial";
        document.getElementById("bt_reset").style.display = "initial";
    }
}

function cb_pressed(cb) {
    var td = cb.parentNode;
    var tr = td.parentNode;
    var id_mot = parseInt(cb.id.split("_")[1]);
    for (c of tr.children) {
        if (cb.checked) {
            c.style.backgroundColor = CL_ENABLED;
            window.disabled = arrayRemove(window.disabled, id_mot);
        } else {
            c.style.backgroundColor = CL_DISABLED;
            if (!window.disabled.includes(id_mot)) {
                window.disabled.push(id_mot);
            }
        }
    }
    save_cookie(window.disabled);
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