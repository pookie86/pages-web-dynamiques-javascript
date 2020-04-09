// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

var liste = document.createElement("p");
    liste.id = "journaux";
    liste.textContent = "Voici la liste des journaux : ";

    document.getElementById("contenu").appendChild(liste);

function afficheJournaux () {

    for (let index = 0; index < journaux.length; index++) {

        var a = document.createElement('a');
            a.classList = "journal";
            a.setAttribute("href", journaux[index]);
            a.innerHTML = '<li style="list-style: none"; >'+ journaux[index] + '</li>';
        console.log(a);

        document.getElementById("journaux").appendChild(a);
    }
}

afficheJournaux();
