// Création d'une requête HTTP GET avec AJAX

function ajaxPost(url, data, callback, isJson) {

    var req = new XMLHttpRequest();
        req.open("POST", url, false);
        req.addEventListener("load", function () {

    if (req.status >= 200 && req.status < 400 ) {

            callback(req.responseText);
    } else {

            console.error(req.status + "" + req.statusText + "" + url);
    }
});

        req.addEventListener("error", function () {

            console.error(" Erreur reseau :" + url);
        });

    if (isJson) {

        req.setRequestHeader("Content-Type", "application/json");

        data = JSON.stringify(data);
    }
        req.send(data);
}

