
var form = document.querySelector("form");
var resulat = document.getElementById("resultat");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        var article = new FormData(form);

        // var data = {

        //     titre: e.target.elements.titre.value,
        //     contenu: e.target.elements.contenu.value,
        // };


        ajaxPost("http://localhost/chapitre_10/post_form.php", article, function (reponse) {  //data

            var datas = document.createElement("p");
                datas.innerHTML = "Vos réponses ont bien été enregistrées : ";

            resulat.appendChild(datas);

            console.log(article);
            console.log(datas);
            console.log(form);
            console.log(reponse);

        });
    });


