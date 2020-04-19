// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];


var paysSaisi = document.getElementById("pays");
var Liste = document.getElementById("suggestions");

    paysSaisi.addEventListener("input", function () {                   // Gère le changement de valeur saisie

        Liste.innerHTML = "";                                           // Initialisation de la liste des suggestions

        listePays.forEach( paysSuggere => {                             // Fonction d'itération sur les élements (pays suggérés) du tableau listePays : Pour chaque pays...

            if (paysSuggere.indexOf(paysSaisi.value) === 0) {           // ...Si la premiere occurence d'un ou des élements de la listePays est strictement identique à la valeur saisi (lettre "A")

// CREATION DE LA LISTE DES SUGGESTIONS EN DESSOUS DE LA ZONE DE SAISI

                var suggestion = document.createElement("div");         // Création de l'élement div
                    suggestion.classList.add("suggestion");             // Ajout de la class suggestion à la div (border, position et hover)
                    suggestion.textContent = paysSuggere;               // Ajout du text des élements "pays" du tableau listePays aux divs ayant pour correspondance les meme occurences que la suite des valeurs saisies

                    suggestion.addEventListener("click", function (e) { // Gère le clic sur une suggestion

                    paysSaisi.value = e.target.textContent;             // Au clic, la valeur saisi devient le pays suggéré
                    Liste.innerHTML = "";                               // Fermeture de la liste des suggestions soit vidage du contenu html des div

                });

                    Liste.appendChild(suggestion);                      // Affichage de la liste des suggestions soit ajout des div dans la div suggestions
            }
        });
    });