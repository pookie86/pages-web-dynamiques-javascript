// var contenu = document.getElementById("contenu");
// contenu.style.marginTop = "57.6px";
// contenu.style.width = "98.5833px";
// contenu.style.backgroundColor = "grey";

var info = getComputedStyle(document.getElementById("contenu"));
console.log(info.marginTop);
console.log(info.marginRight);

var sectionInfo = document.createElement("ul");
sectionInfo.textContent = "Informations sur l'élement";
var infos = document.getElementById("infos");
infos.appendChild(sectionInfo);

    sectionInfo.innerHTML += '<br><br><li> Longueur :'+ info.marginTop +'</li>' + '<li> Hauteur :'+ info.marginRight + '</li>';


/*
Correction : informations sur un élément
*/

var style = getComputedStyle(document.getElementById("contenu"));
var liste = document.createElement("ul");

var longueur = document.createElement("li");
longueur.textContent = "Longueur : " + style.width;

var hauteur = document.createElement("li");
hauteur.textContent = "Hauteur : " + style.height;

liste.appendChild(hauteur);
liste.appendChild(longueur);

document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(liste);