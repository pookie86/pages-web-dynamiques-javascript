// L'objectif de cet exercice est d'afficher les personnages appartenant à une maison sélectionnée par l'utilisateur.

// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];


// Renvoie un tableau contenant quelques personnages d'une maison

function getPersonnages(targetValue) {

    switch (targetValue) {

        case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];

        case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];

        case "BA":
        return ["Robert", "Stannis", "Renly"];

        case "TA":
        return ["Aerys", "Daenerys", "Viserys"];

        default:
        return [];
    }
}

var select = document.getElementById("maison");         // Recupération de l'élement Select ayant l'id maison

    maisons.forEach( maison => {                        // Fonction d'itération sur les propriétés de l'objet maison (tableau d'objet littéral)

        var select = document.getElementById("maison"); // Recupération de l'élement Select ayant l'id maison

        var option = document.createElement("option");  // Création des options
            option.value = maison.code;                 // Ajout des values "maison.code" des options
            option.innerHTML = maison.nom;              // Ajout du text "maison.nom des options"

            console.log(option.value);                  // Vérification des valeurs de chaque options

            select.appendChild(option);                 // Ajout des options dans le select

        });

    select.addEventListener("change", function (e) {    // Gestion de l'évenement change sur le select

        var persos = getPersonnages(e.target.value);    // Execution de la fonction ayant pour référence la valeur cible selectionnée

        var ul = document.getElementById("persos");     // Récupération de l'élement ul ayant l'id persos

        var li = document.createElement("li");          // Création des li
            li.innerHTML = persos;                      // Ajout du contenu du tableau retourné ayant pour référence la valeur de la cible selectionnée

            ul.appendChild(li);                             // Ajout des li dans les ul

        console.log(li.innerHTML);                      // Vérification du contenu des li

    });


// var persos = getPersonnages(e.target.value);
// var persos = e.target.value;
