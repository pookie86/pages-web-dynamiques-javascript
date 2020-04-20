var topDepart = document.getElementById("compteur");
var button = document.getElementById("demarrer");

function chrono() {

    var chrono = Number(topDepart.textContent);
    // console.log(chrono);

    if (chrono != 10) {

        topDepart.textContent = chrono + 1;

    } else {

        clearInterval(chrono);

        var titre = document.getElementById("titre");
            titre.textContent = "Chronomètre désactivé";
    }
}

button.addEventListener("click", function () {

    setInterval(chrono, 1000);

});




