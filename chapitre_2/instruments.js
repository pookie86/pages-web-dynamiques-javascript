
console.log("--------Fonction qui affiche le nombre de liens, le premier et dernier liens ----------");

//Fonction qui affiche :
// -le nombre toyal de lien dans la page web
// -la cible du premier et du dernier lien
function infosLiens() {

     var nombreInstru = document.querySelectorAll("a").length;
        //le nombre total de liens dans la page web ;
        console.log(nombreInstru);

        //la cible du premier et du dernier lien.

        var premierLi = document.querySelector("ul").firstElementChild;
        console.log(premierLi); // premier li

        var premierA = premierLi.firstElementChild;
        console.log(premierA); // premier lien du premier li

        var premierHref = premierA.href;
        console.log(premierHref); // premier href


        var dernierLi = document.querySelector("ul").lastElementChild;
        console.log(dernierLi); // dernier li

        var dernierA = dernierLi.firstElementChild;
        console.log(dernierA ); // premier lien du dernier li

        var dernierHref = dernierA.href;
        console.log(dernierHref); // dernier href


        console.log("\n------ La même solution tout attaché-------");

        console.log(" \n-> document.querySelector('ul').firstElementChild.firstElementChild.href  => " + document.querySelector("ul").firstElementChild.firstElementChild.href);
        console.log( "\n -> document.querySelector('ul').firstElementChild.lastElementChild.href  => " + document.querySelector("ul").lastElementChild.lastElementChild.href);

        console.log("\n------ Dernière solution pour accéder au premier et dernier liens ------- \n------- Il faut connaitre la position du dernier lien -------");

        console.log(" \n-> document.querySelectorAll('a')[0].href  => " + document.querySelectorAll("a")[0].href);
        console.log(" \n-> document.querySelectorAll('a')[4].href  => " + document.querySelectorAll("a")[4].href);

}
infosLiens();

console.log("--------Fonction qui affiche si un élément possède la classe = bois ----------");

//Fonction qui vérifie qu'un élément possède une seule classe (bois):
function possedeInstru() {

var instru = document.getElementsByTagName("li"); //recupère tous les li


for (let index = 0; index < instru.length; index++) {
    var classInstru =  instru[index];
        console.log(instru[index]); //affiche les li
        console.log(instru[index].id); //affiche les id
        console.log(classInstru.className); // affiche nom des class

if (classInstru.className = classInstru.classList.contains("bois")) {
    console.log(true + " => Instrument à bois");

} else {
    console.log(false + " => Cet instrument n'est pas à bois");
        }
    }
}
possedeInstru();

console.log("--------Fonction qui affiche si un élément possède une classe qui correspond à son instrument----------");

function possede(instru, classe) {

    var instrument = document.getElementById(instru);

        if (instrument !== null) {

            console.log( "exo : " + instrument.id + " " + classe + " =");
            console.log(instrument.classList.contains(classe));

        } else {
            console.log(false + " => Cet instrument :" + " " + instru + " n'a pas de classe" );
        }
}


// // Affiche si un élément possède une classe
// function possede(instru, classe) {
//     var instrument = document.getElementById(instru);
//     if (instrument !== null) {
//         console.log(instrument.classList.contains(classe));
//     } else {
//         console.log("Aucun élément ne possède l'identifiant " + instru);
//     }
// }


possede("saxophone", "bois"); //Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
