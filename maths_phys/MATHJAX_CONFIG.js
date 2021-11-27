MathJax = {
    tex: {
        inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
        ],
        displayMath: [
            ['$$', '$$'],
            ['\[', '\]']
        ],
        macros: {
            bb: ["\\mathbb{#1}", 1],
            cal: ["\\mathcal{#1}", 1],
            frak: ["\\mathfrak{#1}", 1],
            ol: ["\\overline{#1}", 1],
            N: "\\bb{N}",
            Z: "\\bb{Z}",
            D: "\\bb{D}",
            Q: "\\bb{Q}",
            C: "\\bb{C}",
            R: "\\bb{R}",
            cR: "\\cal{R}",
            B: "\\cal{B}",
            dpdot: ["  \\dot{ \\raisebox{2pt}{#1} }", 1],
            dpddot: ["\\ddot{ \\raisebox{0pt}[\\dimexpr\\height+#1][\\depth]{#2} }", 2]
        }
    }
};