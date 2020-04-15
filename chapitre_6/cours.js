//Accès à la valeur saisie
var pseudo = document.getElementById("pseudo");
    pseudo.value = "Mon pseudo";


// GESTION DU FOCUS

// Affichage d'un message d'aide pour la saisie du pseudo
    pseudo.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});

// Suppression du message
    pseudo.addEventListener("blur", function () {
    document.getElementById("aidePseudo").textContent = "";
    });

// Focus sur la zone de saisie du pseudo
    pseudo.focus();


// ELEMENT D'OPTIONS

// Checkbox:

    document.getElementById("confirmation").addEventListener("change", function (e) { //Affichage de la demande d'envoie de courrier de confirmation
        console.log("Demande de confirmation : " + e.target.checked);
    });

// Bouton radio :

//Affichage du type d'abonnement choisi
    var abonnements = document.getElementsByName("abonnement");

    for (let i = 0; i < abonnements.length; i++) {

    var abonnement = abonnements[i];
        abonnement.addEventListener("change", function (e) {

            console.log("Abonnement choisi : " + e.target.value);
    });
}

// Liste déroulante

// Affichage de la nationalité
    var acronymeNationalite = document.getElementById("nationalite");
        acronymeNationalite.addEventListener("change", function (e) {

            var nationalite =  acronymeNationalite.options[acronymeNationalite.selectedIndex].text; // RECUPERE LE TEXTE SÉLECTIONNÉ DANS LE SELECT

                console.log("Acronyme de la nationalité choisi : " + e.target.value); // RECUPERE LA VALEUR DU SELECT
                console.log("Nationalité : " + nationalite);

    });













