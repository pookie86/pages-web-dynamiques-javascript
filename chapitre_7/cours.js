
// Répeter une action à intervalles réguliers

//Diminution du compte à rebourd jusqu'à 0

    var topDepart = document.getElementById("compteur");

    function diminutionCompteur() {

        var compteur = Number(topDepart.textContent);               // Conversion en nombre du texte du compteur

        if (compteur > 1) {

           topDepart.textContent = compteur - 1;

        } else {

        clearInterval(compteArebourd);                              // Annule l'execution répété

        var titre = document.getElementById("titre");               // Modification du titre de la page
            titre.textContent = "Compte à rebourd terminé";

        setInterval(deplacerBloc, 1000);                            // Active la function à la fin du compte à rebourd

        setTimeout(function () {
            titre.textContent = "Vous êtes sur la même page";        // Modification du titre au bout de 2 secondes
        }, 2000);
    }
}
    var compteArebourd = setInterval(diminutionCompteur, 1000);     // Appelle la fonction diminutionCompteur toutes les secondes

// Animation du bloc

    var bloc = document.getElementById("bloc");
    var vitesse = 7;                                                // Valeur de déplacement en pixel

    console.log(getComputedStyle(bloc).left);                       // Vérification de la position gauche du bloc

    function deplacerBloc() {

    var positionBloc = parseFloat(getComputedStyle(bloc).left);     // Conversion en nombre de la position gauche du bloc

    bloc.style.left = (positionBloc + vitesse) + "px";              // Déplacement du bloc sur sa gauche

    requestAnimationFrame(deplacerBloc);                            // Demande au navigateur d'appeler deplacerBloc dès que possible

    console.log(getComputedStyle(bloc).left);                       // Vérification de la position gauche du bloc
    }















