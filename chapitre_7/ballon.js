

// Animation du ballon

var ballon = document.getElementById("ballon");
var cadre = document.getElementById("cadre");
var vitesse = 50;
var largeurCadre = parseFloat(getComputedStyle(ballon).width);
var startAnimation = null;

console.log(getComputedStyle(ballon).left);
console.log(getComputedStyle(ballon).right);
console.log(getComputedStyle(ballon).width);

function deplacerBallon() {

    var debutBallon = parseFloat(getComputedStyle(ballon).left);
    var finBallon = parseFloat(getComputedStyle(cadre).width);

    if (debutBallon + largeurCadre <= finBallon) {

        ballon.style.left = (debutBallon + vitesse) + "px";
    }

    else {
     
        ballon.style.left = (finBallon - debutBallon) + "px";
    }

    console.log(getComputedStyle(ballon).left);
}

    var start = document.getElementById("demarrer");
    var stop = document.getElementById("arreter");

    start.addEventListener("click", function () {

        demarrer.disabled = true;
        arreter.disabled = false;
        startAnimation = setInterval(deplacerBallon, 100);

    });

    stop.addEventListener("click", function () {

        demarrer.disabled = false;
        arreter.disabled = true;
        clearInterval(startAnimation);
    });
