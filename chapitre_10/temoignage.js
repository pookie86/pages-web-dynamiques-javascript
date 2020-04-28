
var form = document.querySelector("form");
var resulat = document.getElementById("resultat");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        var data = {

            pseudo: e.target.elements.pseudo.value,
            evaluation: e.target.elements.evaluation.value,
            message: e.target.elements.message.value
        };

        ajaxPost("http://localhost/chapitre_10/post_form.php", data, function (reponse) {

            var datas = document.createElement("p");
                datas.innerHTML = "Votre témoignage a bien été enregistré : ";

            resulat.appendChild(datas);

            console.log(data);
            console.log(JSON.stringify(data));
            console.log(datas);
            console.log(form);
            console.log(reponse);

        });
    });


