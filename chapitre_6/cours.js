//Accès à la valeur saisie
var pseudo = document.getElementById("pseudo");
    pseudo.value = "Mon pseudo";


// Gestion du focus

// Affichage d'un message contextuel pour la saisie du pseudo
    pseudo.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});

// Suppression du message pour la saisie du pseudo
    pseudo.addEventListener("blur", function () {
    document.getElementById("aidePseudo").textContent = "";
    })




















