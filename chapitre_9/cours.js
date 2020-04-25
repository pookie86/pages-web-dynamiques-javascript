


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
        logo.style.marginLeft = "33%";

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

                var nom = document.createElement("h1");
                    nom.textContent = profil.name;

                // var lien = document.createElement("a");
                //     lien.textContent = profil.html_url;
                //     lien.href = profil.html_url;

                var repo = document.createElement("h2");
                    repo.textContent = profil.public_repos + " Repositories" ;

                var bio = document.createElement("h3");
                    bio.textContent = profil.bio;

                var lieu = document.createElement("h3");
                    lieu.textContent = profil.location;

                    var button = document.createElement("button");
                        // button.textContent = "Voir";
                    var a = document.createElement("a");
                        a.textContent = "Voir";
                        a.href = profil.html_url;
                        button.appendChild(a);



                var info = image.outerHTML + nom.outerHTML + repo.outerHTML + bio.outerHTML + lieu.outerHTML + button.outerHTML;

                    card.innerHTML += "<div class='card'>" + info +"</div>";
            });
        });











