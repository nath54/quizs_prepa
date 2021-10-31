window.questions = [];
window.questions_restantes = [];
window.questions_justes = [];
window.questions_fausses = [];

window.click_x = 0;
window.click_y = 0;
window.is_clicked = false;

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
            window.questions = window.questions.concat(Quizs[theme]);
        }
    }
    if (window.questions.length == 0) {
        // ON VA RENVOYER SUR LA PAGE D'INDEX
        window.location.href = "index.html";
        return;
    }
    //

}



function card_mouse_down(event) {
    console.log("event : ", event);
    window.click_x = event.clientX;
    window.click_y = event.clientY;
    window.is_clicked = true;
    card.style.rotate = "0rad";
}


document.body.addEventListener('mousemove', e => { rotate(e); });
document.body.addEventListener('drag', e => { rotate(e); });

function rotate(e) {
    if (window.is_clicked) {
        var card = document.getElementById("card");
        var x = e.clientX;
        var y = e.clientY;
        var dx = x - window.click_x;
        var dy = 100;
        //
        if (dy > 0) {
            var agl = Math.atan(dx / dy);
            if (agl < -0.4) { agl = -0.4; }
            if (agl > 0.4) { agl = 0.4; }
            // console.log("agl : ", agl);
            card.style.rotate = "" + agl + "rad";
        }
    }
}

document.body.addEventListener('mouseup', e => {
    window.click_x = 0;
    window.click_y = 0;
    window.is_clicked = false;
    card.style.rotate = "0rad";
});


document.body.addEventListener('mouseleave', e => {
    window.click_x = 0;
    window.click_y = 0;
    window.is_clicked = false;
    card.style.rotate = "0rad";
});