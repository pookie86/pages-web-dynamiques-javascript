// TODO : écrire la fonction compterElements

function compterElements(elements) {

    console.log(document.querySelectorAll(elements).length);
    return document.querySelectorAll(elements);
}


console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2