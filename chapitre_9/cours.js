

var news = document.getElementById("articles");

ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {

    var articles = JSON.parse(reponse);

        articles.forEach(article => {

            var titre = document.createElement("h2");
                titre.textContent = article.titre;

            var contenu = document.createElement("p");
                contenu.textContent =article.contenu;

        news.appenChild(titre);
        news.appenChild(contenu);
        });

});


var premMinElt = document.getElementById("premMin");

ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {

    var premierMinistre = JSON.parse(reponse);

    var descriptionElt = document.createElement("p");
        descriptionElt.textContent = premierMinistre.description;

    var logoElt = document.createElement("img");
        logoElt.src = premierMinistre.logo;

    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});