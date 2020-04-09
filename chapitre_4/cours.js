// PROPRIETE STYLE

var p = document.querySelector("p"); //selectionne que le premier enfant
    p.style.color = "red";
    p.style.margin = "50px";
    p.style.fontFamily = "Arial";
    p.style.backgroundColor = "black";

// ACCEDER AU STYLE D'UN ELEMENT (HTML)

var paragraphes = document.getElementsByTagName("p");
console.log(paragraphes[1].style.color);
console.log(paragraphes[0].style.margin);
console.log(paragraphes[0].style.fontFamily);
console.log(paragraphes[0].style.backgroundColor);

// ACCEDER A TOUTES LES PROPRIETES CSS D'UN ELEMENT (CSS)

var style = getComputedStyle(document.getElementById("para"));
console.log(style.fontStyle);
console.log(style.color);
console.log(style.fontFamily);






