// affiche sur la page le nombre de clics sur le bouton nommé "clic". Le bouton nommé "desactiver" permet d'arrêter le comptage.
var bouton = document.getElementById("clic");
var AfficherChiffre = document.getElementById("compteurClics");
var compteur = 0;

function compteurClics() {
    compteur += 1;
    AfficherChiffre.textContent = compteur;
    console.log("Clic !");
}

bouton.addEventListener("click", compteurClics);

// document.getElementById("desactiver").addEventListener("click", function desactiver(e) {
//     if (e === true) {
//      e.preventDefault();
//  } else {
//     compteur = 0;
//     AfficherChiffre.textContent = compteur;

//      console.log("STOP !");
//  }
//     }
// );

document.getElementById("desactiver").addEventListener("click", function desactiver(e) {
    compteur = 0;
    AfficherChiffre.textContent = compteur;
    console.log("STOP !");

// document.getElementById("clic").removeEventListener("click", clic); Autre solution
    }
);