// Les deux mots de passe saisis doivent être identiques. OK

// Leur longueur doit être au minimum de 6 caractères. OK

// Ils doivent contenir au moins un chiffre.

var form = document.querySelector("form");
var info = document.getElementById("infoMdp");

document.querySelector("input").addEventListener("input", function (e) {

    var mdp1 = form.elements.mdp1.value;

    if (mdp1.length < 6) {

        couleur = "red";
        info.textContent = "Le mot de passe doit contenir minimum 6 caractères";

    } else if (mdp1.length >= 6) {

        couleur = "green";
        info.textContent = "Le mot de passe atteind 6 caractères";
    }

        info.style.color = couleur;

    e.preventDefault();
});


form.addEventListener("submit", function (e) {

    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;


    if (mdp1 != mdp2) {

     console.log("Le mot de passe n'est pas identique");
     info.textContent = "Le mot de passe n'est pas identique";

    } else {

    console.log("Le mot de passe est identique");
    info.textContent = "Le mot de passe est identique";
}

e.preventDefault();

});

document.querySelector("input").addEventListener("blur", function (e) {

    var regex = /[0-9]/;

    if (!regex.test(e.target.value)) {

        info.textContent = "Le mot de passe doit contenir un chiffre";
        info.style.color = "red";
        console.log(regex);

    } else {

        console.log(e.target.value);
        info.textContent = "Mot de passe valide";
}
});
