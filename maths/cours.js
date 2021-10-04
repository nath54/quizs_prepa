window.themes = [];
window.cours = {

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
            window.cours[theme] = [];
            window.cours[theme] = Quizs[theme];
        }
    }
    if (Object.keys(window.cours).length == 0) {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        window.location.href = "index.html";
        return;
    }
    //
    affMots();
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
            var box = document.createElement("div");
            box.classList.add("box");
            box.classList.add(elt.type);
            //
            if (elt.type == "definition") {
                var titre = document.createElement("h3");
                titre.innerHTML = "Définition : " + compile_txt(elt.titre);
                box.appendChild(titre);
                var p = document.createElement("p");
                p.innerHTML = compile_txt(elt["resultat"]);
                box.appendChild(p);
            } else if (elt.type == "proposition") {
                var titre = document.createElement("h3");
                titre.innerHTML = "Proposition : " + compile_txt(elt.titre);
                box.appendChild(titre);

                var ph = document.createElement("p");
                ph.innerHTML = compile_txt(elt["hypotheses"]);
                box.appendChild(ph);

                var pr = document.createElement("p");
                pr.innerHTML = compile_txt(elt["resultat"]);
                box.appendChild(pr);
                //
            } else if (elt.type == "propriete") {
                var titre = document.createElement("h3");
                titre.innerHTML = "Propriété : " + compile_txt(elt.titre);
                box.appendChild(titre);
            } else if (elt.type == "methode") {
                var titre = document.createElement("h3");
                titre.innerHTML = "Méthode : " + compile_txt(elt.titre);
                box.appendChild(titre);
            } else if (elt.type == "theoreme") {
                var titre = document.createElement("h3");
                titre.innerHTML = "Théorème : " + compile_txt(elt.titre);
                box.appendChild(titre);


                var ph = document.createElement("p");
                ph.innerHTML = compile_txt(elt["hypotheses"]);
                box.appendChild(ph);

                var pr = document.createElement("p");
                pr.innerHTML = compile_txt(elt["resultat"]);
                box.appendChild(pr);
            } else if (elt.type == "lemme") {
                var titre = document.createElement("h3");
                titre.innerHTML = "Lemme : " + compile_txt(elt.titre);
                box.appendChild(titre);


                var ph = document.createElement("p");
                ph.innerHTML = compile_txt(elt["hypotheses"]);
                box.appendChild(ph);

                var pr = document.createElement("p");
                pr.innerHTML = compile_txt(elt["resultat"]);
                box.appendChild(pr);
            }
            //
            chapitre.appendChild(box);
        }
        main_container.appendChild(chapitre);
    }
    MathJax.typesetPromise();
}