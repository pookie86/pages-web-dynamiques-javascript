// Creation d'un objet formData

var identite = new FormData();
    identite.append ("login", "Stephanie");
    identite.append("password", "azerty");

var film = {

    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};

// Gestion de la soumission du formulaire

    var form = document.querySelector("form");

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            var data = new FormData(form);

            ajaxPost("http://localhost/chapitre_10/post_form.php", data, function (reponse) {

                console.log(reponse);
                console.log(data);

            });
        });


            ajaxPost ("http://localhost/chapitre_10/post_form.php", film, function (reponse){

                console.log('Le film' + JSON.stringify(film) + 'a été envoyé au serveur');
                var films = JSON.stringify(film);
                console.log(films);
                console.log(film.titre);
                console.log(reponse);
                },
            true
            );