function compile_txt(txt) {
    var ntxt = txt;
    const replacements = {
        "@R": "$\\mathcal{R}$",
        "@B": "$\\mathcal{B}$",
        "#P": "$\\mathcal{P}$",
        "#N": "$\\mathbb{N}$",
        "#Z": "$\\mathbb{Z}$",
        "#Q": "$\\mathbb{Q}$",
        "#R": "$\\mathbb{R}$",
        "#C": "$\\mathbb{C}$",
        "#D": "$\\mathbb{D}$",
        "#U": "$\\mathbb{U}$",
        "#x": "$\\times$",
        "#pi": "$\\pi$",
        "#x_barre": "$\\overline{x}$",
        "#y_barre": "$\\overline{y}$",
        "#z_barre": "$\\overline{z}$",
        "#A_barre": "$\\overline{A}$",
        "#B_barre": "$\\overline{B}$",
        "#C_barre": "$\\overline{C}$",
        "#$x": "\\times",
        "#barre": "\\overline",
        "\n": "<br/>",
        "#[[": "$[[$",
        "#]]": "$]]$",
        "#<=": "$\\leqslant$",
        "#>=": "$\\geqslant$",
        "#.": "\\dots",
        // "$$": " ",
        // "$ $": " ",
        // "$  $": " "
    };
    for (k of Object.keys(replacements)) {
        while (ntxt.includes(k)) { ntxt = ntxt.replace(k, replacements[k]); }
    }
    return ntxt;
}