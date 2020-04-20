
// Répeter une action à intervalles réguliers

//Diminution du compteur jusqu'à 0

    var topDepart = document.getElementById("compteur");

    function diminutionCompteur() {

        var compteur = Number(topDepart.textContent);               // Conversion en nombre du texte du compteur

        if (compteur > 1) {

           topDepart.textContent = compteur - 1;

        } else {

            clearInterval(compteArebourd);                          // Annule l'execution répété

        var titre = document.getElementById("titre");               // Modification du titre de la page
            titre.textContent = "Compte à rebourd terminé";
    }
}
    var compteArebourd = setInterval(diminutionCompteur, 1000);     // Appelle la fonction diminutionCompteur toutes les secondes

