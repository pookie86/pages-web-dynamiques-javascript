// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];


var contenu = document.getElementById("contenu");
var i = 1;                                          // NUMERO DES QUESTIONS
var j = 1;                                          // NUMERO DES REPONSES

questions.forEach(element => {

    contenu.innerHTML += '<p><strong>Question n° ' + i + ' : </strong>' + element.enonce +'</p>'; // AFFICHAGE DES QUESTIONS

    i++;
});


questions.forEach(function (question) {

    var button = document.createElement("button");
        button.className = 'button';
        button.textContent = "Afficher la réponse n° " + j; // AFFICHAGE DU BOUTON
        contenu.appendChild(button);

        button.addEventListener("click", function () {

            var li = document.createElement("li");
                li. className = "reponse";
                li.textContent = question.reponse;         // AFFICHAGE DES REPONSES AU CLIC

            var ul = document.createElement("ul");
                ul.appendChild(li);
                contenu.appendChild(ul);
        });

        j++;

    });
