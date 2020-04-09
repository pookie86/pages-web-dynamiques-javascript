// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
// Vous devez utiliser le tableau [mots]
// Employer la balise HTML <p> pour créer ce dictionnaire
// Chaque mot du dictionnaire doit être mis en valeur :
// utilisez pour cela la balise HTML <strong>.

// var terme = mots[i].terme;
    // var definition = mots[i].definition;
    // console.log(terme + " : \n" + definition);
   var contenu = document.getElementById("contenu");

    mots.forEach(element => {

        contenu.innerHTML += '<dl><dt><strong>'+ element.terme +'</strong></dt>' + '<dd>'+ element.definition + '</dd></dl>';

        }
    );

