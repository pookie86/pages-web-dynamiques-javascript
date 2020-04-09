var bouton = document.querySelector("button");       // DETECTION DU BOUTON

function ajouterDessert() {

    var dessert = prompt("Ecrivez votre dessert préféré :");       // CREATION DE LA BOITE DE DIALOGUE

    var listeDessert = document.getElementsByTagName("ul");       // DETECTION DU UL

    for (var i = 0; i < listeDessert.length; i++) {

        var li = document.createElement("li");                   // CREATION DES LI
            li.className = "dessert";                               // AJOUT D'UNE CLASSE DANS LE LI
            li.innerHTML = dessert;                                // AJOUT DU DESSERT DANS LE LI

        document.getElementById("desserts").appendChild(li); // AJOUT DES LI DANS UL
    }
}

    bouton.addEventListener("click", ajouterDessert);           // GESTION DE L'EVENEMENT


/*
Exercice : modifier une liste
*/

// document.querySelector("button").addEventListener("click", function () {
//     var nomDessert = prompt("Entrez le nom du nouveau dessert :");

//     var  dessertElt = document.createElement("li");
//          dessertElt.textContent = nomDessert;
//          dessertElt.addEventListener("click", function (e) {

//     var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
//                                                             e.target.textContent = nouveauNom;
//     });

// document.getElementById("desserts").appendChild(dessertElt);

// });