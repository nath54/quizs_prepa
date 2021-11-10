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
            ol: ["\\overline{#1}", 1]
        }
    }
};