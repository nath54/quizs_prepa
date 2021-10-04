function compile_txt(txt) {
    var ntxt = txt;
    const replacements = {
        "#et": "$\\land$",
        "#ou": "$\\lor$",
        "#implique": "$\\implies$",
        "#equivaut": "$\\equiv$",
        "#non": "$\\neg$"
    };
    //
    for (k of Object.keys(replacements)) {
        while (ntxt.includes(k)) { ntxt = ntxt.replace(k, replacements[k]); }
    }
    return ntxt;
}