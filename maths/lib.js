function compile_txt(txt) {
    var ntxt = txt;
    const replacements = {
        "#et": "$\\land$",
        "#ou": "$\\lor$",
        "#implique": "$\\implies$",
        "#equivaut": "$\\equiv$",
        "#equivalent": "$\\iff$",
        "#non": "$\\neg$",
        "#appartient": "$\\in$",
        "#inclus": "$\\include$",
        "@R": "$\\mathcal{R}$",
        "#P": "$\\mathcal{P}$",
        "#N": "$\\mathbb{N}$",
        "#Z": "$\\mathbb{Z}$",
        "#Q": "$\\mathbb{Q}$",
        "#R": "$\\mathbb{R}$",
        "#C": "$\\mathbb{C}$",
        "#x": "$\\times$",
        "#pi": "$\\pi$",
        "#x_barre": "$\overline{x}$",
        "#pour_tout": "$\\forall$",
        "#fleche_droite": "$\\rightarrow$",
        "#rond": "$\\circ$",
        "\n": "<br/>",
        "#[[": "$[[$",
        "#]]": "$]]$",
    };
    //
    for (k of Object.keys(replacements)) {
        while (ntxt.includes(k)) { ntxt = ntxt.replace(k, replacements[k]); }
    }
    return ntxt;
}