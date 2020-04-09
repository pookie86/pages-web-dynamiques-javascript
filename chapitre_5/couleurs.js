
// COULEUR DE L'ARRIERE PLAN
var arrierePlan = document.querySelector("body");
arrierePlan.style.backgroundColor = "grey";

// FONCTION DE CHANGEMENT DE COULEUR DES PARAGRAPHES
document.addEventListener("keypress", function (e){             // GESTION DE L'EVENEMENT KEYPRESS + FONCTION

    var paragraphe = document.getElementsByTagName("div");      // DETECTION DES DIV
    var toucheAppuye =  String.fromCharCode(e.charCode);        // DETECTION DES TOUCHES (CLE/VALEUR)

    console.log("Vous avez appuyé sur la touche " + toucheAppuye); // VERIFICATION DES TOUCHES APPUYEES

    for (let index = 0; index < paragraphe.length; index++) {       // BOUCLE SUR LES DIV


        var element = paragraphe[index];                        // DECOMPOSITION DES DIV
        console.log(element);                                   // VERIFICATION DES DIV
        element.className = "color";                            // CREATION D'UNE CLASSE
        element.style.fontFamily = "Bookman Old Style";         // CHANGEMENT DE LA FONT
        element.style.textAlign = "justify";                    // CHANGEMENT DE L'ALIGNEMENT


        switch (toucheAppuye) {                                 // CLE = TOUCHE APPUYEE
            case 'r': element.style.backgroundColor = "red";    // VALEUR = LETTRE
                break;                                          // CHANGEMENT DE LA COULEUR DES DIV

            case 'j': element.style.backgroundColor = "yellow";
                break;

            case 'v': element.style.backgroundColor = "green";
                break;

            case 'b': element.style.backgroundColor = "white";

            default:
                break;
        }
    }
});