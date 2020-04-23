// Création d'une requête HTTP GET avec AJAX

function ajaxGet(url, callback) {

    var req = new XMLHttpRequest();
        req.open("GET", url, false);
        req.addEventListener("load", function () {

    if (req.status >= 200 && req.status < 400 ) {

            callback(req.responseText + "REQUETE REUSSIE");
    } else {

            console.error(req.status + "" + req.statusText + "" + url);
    }
});

        req.addEventListener("error", function () {

            console.error(" Erreur reseau :" + url);
        });
        req.send(null);
}

