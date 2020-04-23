

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
})