


var contenu = document.getElementById("articles");

ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {

    var articles = JSON.parse(reponse);

        articles.forEach(function (article) {

            var titre = document.createElement("h2");
                titre.textContent = article.titre;

            var texte = document.createElement("p");
                texte.textContent = article.contenu;

    contenu.appendChild(titre);
    contenu.appendChild(texte);

    });
});


var premierMinistre = document.getElementById("premMin");

ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {

    var premierMin = JSON.parse(reponse);

    var description = document.createElement("p");
        description.textContent = premierMin.description;

    var logo = document.createElement("img");
        logo.src = premierMin.logo;

    premierMinistre.appendChild(description);
    premierMinistre.appendChild(logo);
});


// choper le form event Submit
    var form = document.querySelector("form");

        form.addEventListener("submit", function (e) {
            // supprimer e par defaut
            e.preventDefault();

            // choper le nom profil dans la valeur de l'element du form
            var pseudo = form.elements.profil.value; //name

            ajaxGet("https://api.github.com/users/" + pseudo, function (reponse) {

                // parse la reponse
                var profil = JSON.parse(reponse);

                // creer et choper img, name, company, blog, href
                var card = document.getElementById("card");

                var image = document.createElement("img");
                    image.src = profil.avatar_url;
                    image.id = "avatar";

                var nom = document.createElement("p");
                    nom.textContent = profil.name;

                var lien = document.createElement("a");
                    lien.textContent = profil.html_url;
                    lien.href = profil.html_url;

                var repo = document.createElement("p");
                    repo.textContent = profil.public_repos;

                var bio = document.createElement("p");
                    bio.textContent = profil.bio;

                var lieu = document.createElement("p");
                    lieu.textContent = profil.location;

                var info = image.outerHTML + nom.outerHTML + lien.outerHTML + repo.outerHTML + bio.outerHTML + lieu.outerHTML;

                    card.innerHTML += "<div class='card'>" + info +"</div>";
            });
        });











