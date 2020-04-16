//Accès à la valeur saisie
var pseudo = document.getElementById("pseudo");
    pseudo.value = "Mon pseudo";


// GESTION DU FOCUS

    pseudo.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo"; // Affichage d'un message d'aide pour la saisie du pseudo

});

    pseudo.addEventListener("blur", function () {
    document.getElementById("aidePseudo").textContent = ""; // Suppression du message
    });

    pseudo.focus(); // Focus sur la zone de saisie du pseudo


// ELEMENT D'OPTIONS

// Checkbox:
    document.getElementById("confirmation").addEventListener("change", function (e) { //Affichage de la demande d'envoie de courrier de confirmation
            console.log("Demande de confirmation : " + e.target.checked);
    });

// Bouton radio :
    var abonnements = document.getElementsByName("abonnement");

    for (let i = 0; i < abonnements.length; i++) {

    var abonnement = abonnements[i];
        abonnement.addEventListener("change", function (e) {

            console.log("Abonnement choisi : " + e.target.value); //Affichage du type d'abonnement choisi
    });
}

// Liste déroulante
    var acronymeNationalite = document.getElementById("nationalite");
        acronymeNationalite.addEventListener("change", function (e) {

            var nationalite =  acronymeNationalite.options[acronymeNationalite.selectedIndex].text; // RECUPERE LE TEXTE SÉLECTIONNÉ DANS LE SELECT

                console.log("Acronyme de la nationalité choisi : " + e.target.value); // RECUPERE LA VALEUR DU SELECT
                console.log("Nationalité : " + nationalite); // Affichage de la nationalité
    });

// La propriété element du form

    var form = document.querySelector("form");

    console.log("Nombre de champs du formulaire : " + form.elements.length); //Affichage du nombre de champs

    for (let index = 0; index < form.length; index++) {

            console.log("Valeur de l'input : " + form.elements[index].name); // Affiche la correspondance des inputs
            console.log( "\nType d'input : " + form.elements[index].type + "\n"); // Affiche les types d'inputs
        }

//Affiche les données saisies ou choisies

var recap = document.getElementById("recap");
    recap.innerHTML = "<br>Récapitulatif de votre inscription :";

form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var mail = form.elements.courriel.value;

    console.log("Vous avez choisi le pseudo : " + pseudo + " , le mot de passe : " + mdp + " et votre mail : " + mail);
    recap.innerText += "\n\n- Vous avez choisi le pseudo : " + pseudo + " , le mot de passe : " + mdp + " et votre mail : " + mail + "\n";


    if (form.elements.confirmation.checked) {
        console.log( "Vous avez demander un mail de confirmation d'inscription");
        recap.innerText += "- Vous avez demander un mail de confirmation d'inscription \n";


    } else {
        console.log("Vous n'avez pas demander de mail de confirmation d'inscription");
        recap.innerText += "- Vous n'avez pas demander de mail de confirmation d'inscription \n";

    }

    switch (form.elements.abonnement.value) {

        case "abonewspromo":
              console.log("Vous êtes abonné à la newsletter et aux promos");
              recap.innerText += "- Vous êtes abonné à la newsletter et aux promos \n";
              break;

        case "abonews":
              console.log("Vous êtes abonné à la newsletter");
              recap.innerText += "- Vous êtes abonné à la newsletter \n";
              break;

        case "aborien":
              console.log("Vous n'êtes pas abonné à la newsletter et/ou aux promos");
              recap.innerText += "- Vous n'êtes pas abonné à la newsletter et/ou aux promos \n";
              break;

        default:
              console.log("Erreur : abonnement non reconnu");
              recap.innerText += "Erreur : abonnement non reconnu";
              break;
    }

    switch (form.elements.abonnement.value) {

        case "FR":
              console.log("Vous êtes français(e)");
              recap.innerText += "- Vous êtes français(e) \n";
              break;

        case "BE":
              console.log("Vous êtes belge");
              recap.innerText += "- Vous êtes belge \n";
              break;

        case "SUI":
              console.log("Vous êtes suisse");
              recap.innerText += "- Vous êtes suisse \n";
              break;

        default:
              console.log("Erreur : nationalité non reconnu");
              recap.innerText += "- Veuillez indiqué votre nationalité \n";
            break;
    }

    e.preventDefault();

});

// VALIDATION DE SAISIE

// Vérification de la longueur du mot de passe pendant la saisi
    document.getElementById("mdp").addEventListener("input", function (e) {

        var mdp = e.target.value; // Valeur saisie dans le champ mdp
        var longueurMdp = "Faible";
        var couleurMsg = "red"; // Longueur faible => couleur rouge

        if (mdp.length >= 8) {

            longueurMdp = "Suffisant";
            couleurMsg = "green"; // Longueur suffisante => couleur verte

        } else if (mdp.length >= 4) {

            longueurMdp = "Moyen";
            couleurMsg = "orange"; // Longueur moyenne => couleur orange
        }

        var aideMdpElt = document.getElementById("aideMdp");
            aideMdpElt.textContent = longueurMdp; // Texte de l'aide
            aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
    });

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {

     // Correspond à une chaîne de la forme xxx@yyy.zzz
     var regex = /.+@.+\..+/;

     if (!regex.test(e.target.value)) {
        //(e.target.value.indexOf("@") === -1)  Methode qui exprime la même chose

        document.getElementById("aideCourriel").textContent = "Adresse invalide";
    }
});












