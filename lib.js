function setCookie(cname, cvalue, exdays = 999) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function load_cookie(matiere = "anglais") {
    var txt = getCookie(matiere + "_disabled");
    if (txt == "") {
        return [];
    }
    //
    try {
        var data_disabled = JSON.parse(txt);
        if (data_disabled != null) {
            return data_disabled;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
}

function save_cookie(data_disabled, matiere = "anglais") {
    var txt = JSON.stringify(data_disabled);
    setCookie(matiere + "_disabled", txt, 730);
}


function arrayRemove(arr, value) {

    return arr.filter(function(ele) {
        return ele != value;
    });
}