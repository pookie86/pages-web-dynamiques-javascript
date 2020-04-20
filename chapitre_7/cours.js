
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

        setTimeout(function () {
            titre.textContent = "Vous êtes sur la même page";        // Modification du titre au bout de 2 secondes
        }, 1000);
    }
}
    var compteArebourd = setInterval(diminutionCompteur, 1000);     // Appelle la fonction diminutionCompteur toutes les secondes

// Animation du bloc

    var bloc = document.getElementById("bloc");
    var cadre = document.getElementById("cadre");
    var vitesse = 7;                                                // Valeur de déplacement en pixel
    var largeurCadre = parseFloat(getComputedStyle(bloc).width);
    var compteArebourd = null;

    console.log(getComputedStyle(bloc).left);                       // Vérification de la position gauche du bloc
    console.log(getComputedStyle(bloc).width);

    function deplacerBloc() {

    var debutBloc = parseFloat(getComputedStyle(bloc).left);     // Conversion en nombre de la position gauche du bloc
    var finBloc = parseFloat(getComputedStyle(cadre).width);     // Conversion en nombre de la position gauche du bloc

    if (debutBloc + largeurCadre <= finBloc ) {

        bloc.style.left = (debutBloc + vitesse) + "px";         // Déplacement du bloc sur sa gauche

        compteArebourd = requestAnimationFrame(deplacerBloc);                    // Demande au navigateur d'appeler deplacerBloc dès que possible

    } else {

        cancelAnimationFrame(compteArebourd);                   // Annulation de l'animation
    }

    console.log(getComputedStyle(bloc).left);                       // Vérification de la position gauche du bloc
    }

    compteArebourd = requestAnimationFrame(deplacerBloc);                    // Demande au navigateur d'appeler deplacerBloc dès que possible














