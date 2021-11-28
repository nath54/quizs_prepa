import json
import sys
import pandoc

styles = """
<html>
    <head>
        <title>Cours</title>
    </head>
<style>

.box {
    border-radius: 4px;
    padding: 15px;
    margin: 25px;
    overflow-x: auto;
}

.definition {
    border: 1px solid rgb(34, 211, 18);
}

.proposition {
    border: 1px solid rgb(185, 175, 32);
}

.propriete {
    border: 1px solid rgb(199, 94, 8);
}

.theoreme {
    border: 10px double red;
}

.axiome {
    border: 10px double rgb(1, 71, 201)
}

.methode {
    border: 2px dashed rgb(14, 27, 209);
}

.lemme {
    border: 2px dashed rgb(155, 3, 117);
}

.corollaire {
    border: 2px dashed rgb(223, 48, 59);
}

.remarque {
    border: 2px solid rgb(18, 153, 206);
}

.texte {
    border: 2px dashed rgb(248, 248, 248);
}

</style>
<body>
"""

latex_start = """
\\documentclass[11pt]{article}

\\usepackage{sectsty}
\\usepackage{graphicx}

% Margins
\\topmargin=-0.45in
\\evensidemargin=0in
\\oddsidemargin=0in
\\textwidth=6.5in
\\textheight=9.0in
\\headsep=0.25in

\\title{ Title}
\\author{ Author }
\\date{\\today}

\\newcommand{\\bb}[1]{\\mathbb{#1}}
\\newcommand{\\cal}[1]{\\mathcal{#1}}
\\newcommand{\\frak}[1]{\\mathfrak{#1}}
\\newcommand{\\ol}[1]{\\overline{#1}}
\\newcommand{\\N}{\\bb{N}}
\\newcommand{\\Z}{\\bb{Z}}
\\newcommand{\\D}{\\bb{D}}
\\newcommand{\\Q}{\\bb{Q}}
\\newcommand{\\C}{\\bb{C}}
\\newcommand{\\R}{\\bb{R}}
\\newcommand{\\cR}{\\cal{R}}
\\newcommand{\\B}{\\bb{B}}
\\newcommand{\\gt}{>}
\\newcommand{\\lt}{<}

\\begin{document}

"""

latex_end = """

\\end{document}
"""



def convert_to_html(data): # Type of data: Dictionary
    first = True
    txt = styles+"\n\n"
    for theme in data.keys():
        if first: first = False
        else: txt += "<hr />\n"
        # Titre
        txt += "\n\n<h1>"+theme+"</h1>\n\n"
        #
        for cour in data[theme]: # data[theme] is a list of dictionaries
            txt += f"<div class=\"box {cour['type']}\">"
            if "titre" in cour.keys():
                txt += f"<h1>{cour['titre']}</h1>"
            if "hypotheses" in cour.keys():
                txt += f"<i>{cour['hypotheses']}</i>"
            if "resultat" in cour.keys():
                txt += f"<p>{cour['resultat']}</p>"
            txt += "</div>\n"
    txt += "</body></html>"
    return txt


def convert_to_latex(data): # Type of data: Dictionary
    first = True
    txt = latex_start+"\n\n"
    txt += "\\title{ Exported data from nath54/quizs prepa}\n"
    txt += "\\author{ nath54}\n"
    txt += "\\date{\\today}\n"
    for theme in data.keys():
        if first: first = False
        else: txt += ""
        # Titre
        txt += "\n\n \\subtitle{"+theme+"}\n\n"
        #
        for cour in data[theme]: # data[theme] is a list of dictionaries
            #txt += "\\begin{}"
            if "titre" in cour.keys():
                txt += f"\\textb{{ {cour['titre']} }}\n"
            if "hypotheses" in cour.keys():
                txt += f"\\textit{{ {cour['hypotheses']} }}\n"
            if "resultat" in cour.keys():
                txt += f"{cour['resultat']}\n"
            #txt += "\\end{}\n"
    txt += "\n\\end{document}"
    return txt

if __name__ == "__main__":
    fichier = ""
    dest = "export.pdf"
    MODE = "html"
    # Get user input
    if len(sys.argv) >= 2:
        fichier = sys.argv[1]
    if len(sys.argv) >= 3:
        dest = sys.argv[2]
    # Error message
    if fichier == "":
        print("Syntax : convert_json_to_md.py __input-file(json)__ __output-file(md)__")
        exit()
    # Get data
    f = open(fichier, "r", encoding="utf-8")
    data = f.read()
    f.close()
    data_json = json.loads(data)
    if MODE == "html":
        # Converting to md
        txt_html = convert_to_html(data_json)
        f=open("temp.html", "w", encoding="utf-8")
        f.write(txt_html)
        f.close()
        # Converting to pdf
        # import pypandoc
        # output = pypandoc.convert_text(txt_md, "pdf", format='md', outputfile=dest)
        # assert output == "", "error during conversion of md to pdf"
        import os
        os.system("pandoc temp.html --pdf-engine=xelatex -o "+dest)
    elif MODE == "latex":
        # Converting to latex
        txt_tex = convert_to_latex(data_json)
        f=open("temp.tex", "w", encoding="utf-8")
        f.write(txt_tex)
        f.close()
        # Converting to pdf
        # import pypandoc
        # output = pypandoc.convert_text(txt_tex, "pdf", format='latex', outputfile=dest, extra_args=(" --pdf-engine=xelatex",))
        # assert output == "", "error during conversion of latex to pdf"
        import os
        os.system("pandoc temp.tex --pdf-engine=xelatex -o "+dest)

    
    
    

