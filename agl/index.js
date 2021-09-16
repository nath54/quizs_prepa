function init() {
    for (theme of Object.keys(Quizs)) {
        var bt = document.createElement("a");
        bt.innerHTML = theme;
        bt.classList.add("btn");
        bt.classList.add("btn-outline-primary");
        bt.href = "quiz.html?theme=" + theme;
        document.getElementById("liste_themes").appendChild(bt);
    }
}