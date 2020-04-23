
var avion = {

    marque: "Airbus",
    couleur: "A320"
};
    console.log(avion);                     //Object { marque: "Airbus", couleur: "A320" }

var texteAvion = JSON.stringify(avion);    // Transforme l'objet JavaScript en chaîne de caractères JSON
    console.log(texteAvion);               // {"marque":"Airbus","couleur":"A320"}
    console.log(JSON.parse(texteAvion));   // Transforme la chaîne de caractères JSON en objet JavaScript : Object { marque: "Airbus", couleur: "A320" }

// Peut gérer les tableaux d'objets JSON

var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
    console.log(avions);

var texteAvions = JSON.stringify(avions);
    console.log(texteAvions);               // [{"marque":"Airbus","couleur":"A320"},{"marque":"Airbus","couleur":"A380"}]
    console.log(JSON.parse(texteAvions));   // 0: Object { marque: "Airbus", couleur: "A320" }
                                            //1: Object { marque: "Airbus", couleur: "A380" }


ajaxGet("http://localhost/chapitre_8/langages.txt", function (reponse) {

    console.log("envoi reussi");

    var langages = reponse.split(";");
    var liste = document.getElementById("langages");

        langages.forEach(function (langage) {

        var langageElt = document.createElement("li");
            langageElt.textContent = langage;

        liste.appendChild(langageElt);
    });
});


ajaxGet("http://localhost/chapitre_8/films.json", function (reponse) {

    var films = JSON.parse(reponse);

        films.forEach(function (film) {

        console.log(film.titre);
    });
});


ajaxGet("http://localhost/chapitre_8/tableaux.json", function (reponse) {

    var tableaux = JSON.parse(reponse);
    var tableauxElt = document.getElementById("tableaux");

        tableaux.forEach(function (tableau) {

        var ligneElt = document.createElement("tr");
            ligneElt.innerHTML = "<td>" + tableau.nom +
                                 "</td>" + "<td>" + tableau.annee +
                                 "</td>" + "<td>" + tableau.peintre + "</td>";

            tableauxElt.appendChild(ligneElt);
    });
});
