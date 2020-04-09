var arrierePlan = document.querySelector("body");
arrierePlan.style.backgroundColor = "black";

var div = document.getElementsByTagName("div");
var titre = document.getElementsByTagName("h1");


for (let index = 0; index < div.length; index++) {

    var element = div[index];
    console.log(element);
        element.className = "color";
        element.style.backgroundColor = "#f2f2f2";
        element.style.fontFamily = "Bookman Old Style";
        element.style.textAlign = "justify";

}

for (let index = 0; index < titre.length; index++) {

    var title = titre[index];
    console.log(title);
        title.className = "titre";
        title.style.color = "grey";
        title.style.fontFamily = "Bookman Old Style";
        title.style.textAlign = "center";

}

/*
Exercice : modifier les couleurs
*/

// var couleurTexte = prompt("Entrez la couleur du texte :");
// var couleurFond = prompt("Entrez la couleur du fond :");

// var divsElts = document.getElementsByTagName("div");
// for (var i = 0; i < divsElts.length; i++) {
//     divsElts[i].style.color = couleurTexte;
//     divsElts[i].style.backgroundColor = couleurFond;
// }


