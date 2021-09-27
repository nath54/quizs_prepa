window.themes = [];
window.vocs = {

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
            window.vocs[theme] = [];
            window.vocs[theme] = Quizs[theme];
        }
    }
    if (Object.keys(window.vocs).length == 0) {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        window.location.href = "index.html";
        return;
    }
    //
    affMots();
}


function affMots() {
    var main_container = document.getElementById("container");
    for (theme of Object.keys(window.vocs)) {
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
            var ligne = document.createElement("tr");
            //
            var fr = document.createElement("td");
            fr.classList.add("tabcol1");
            var agl = document.createElement("td");
            agl.classList.add("tabcol2");
            //
            if (typeof mot[1] == "string") { fr.innerHTML = mot[1]; } else { fr.innerHTML = mot[1].join(" <i>ou</i> "); }
            if (typeof mot[0] == "string") { agl.innerHTML = mot[0]; } else { agl.innerHTML = mot[0].join(" <i>ou</i> "); }
            ligne.appendChild(fr);
            ligne.appendChild(agl);
            tab.appendChild(ligne);
            ligne.style.minWidth = "90%";
        }
        main_container.appendChild(tab);
    }
}