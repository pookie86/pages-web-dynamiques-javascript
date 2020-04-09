
// LE CONTENU HTML = POUR AJOUTER DES BALISES HTML PURES

document.getElementById("langages").innerHTML += '<li id="c">C</li>'; // Modification du contenu HTML de la liste : ajout d'un langage

// document.getElementById("langages").innerHTML = ""; // Suppression du contenu HTML de la liste

// LE CONTENU TEXTUEL = POUR AJOUTER DU TEXTE

document.querySelector("h1").textContent += " de programmation"; // Modification du contenu textuel du premier titre

// LES ATTRIBUTS = POUR AJOUTER UN ATTRUBUT CLASSE HREF ID

document.querySelector("h1").setAttribute("id", "title"); // Définition de l'attribut "id" du premier titre

document.querySelector("h1").id = "titre"; //modification du nom du premier id

// LES CLASSES = POUR MODIFIER LE NOM D'UNE CLASSE

var titreElement = document.querySelector("h1"); // Accès au premier titre h1
titreElement.classList.remove("debut"); // Suppression de la classe "début"
titreElement.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElement);

// LES NOEUDS = AJOUTER DES BALISES DYNAMIQUEMENT

var python = document.createElement("li"); // Création d'un élément "li"
python.id = "python"; // Ajout d'un id "python"
python.textContent = "Python"; // Ajout du contenu texte "Python"
document.getElementById("langages").appendChild(python); // Ajout du dernier enfant li "python" au parent ul "langages"

// AJOUT D'UN NOEUD TEXTE : createTextNode

var ruby = document.createElement("li");
ruby.id = "ruby";
ruby.appendChild(document.createTextNode("Ruby")); // Ajout du contenu texte "ruby"
document.getElementById("langages").appendChild(ruby); // Ajout du dernier enfant li "ruby" au parent ul "langages"

// POSITION D'UN NOEUD

// insertAdjacentHTML : methode appelée pour positioner le noeud.

// insertBefore : à l'intérieur de l'élément existant avant un autre élement (newchild, refchild)

// afterbegin: à l'intérieur de l'élément existant, avant son premier enfant.
// beforeend: à l'intérieur de l'élément existant, après son dernier enfant.

// beforebegin: avant l'élément existant lui-même.
// afterend: après l'élément existant lui-même.

var node = document.createElement("li");
node.id = "node";
node.textContent = "Node";
document.getElementById("langages").insertBefore(node, document.getElementById("php")); // Ajout du nouvel élément "node" avant l'identifiant identifié par "php"

document.getElementById("langages").insertAdjacentHTML("beforeend", '<li id="javascript">JavaScript</li>'); // Positionne à l'intérieur de l'élément existant après son dernier enfant

document.getElementById("langages").insertAdjacentHTML("beforebegin", '<li id="frontback">Front et Back : </li>'); // Positionne avant l'élément existant


// SUPPRIMER OU REMPLACER UN NOEUD

var react = document.createElement("li");
    react.id = "react";
    react.textContent = "React";
document.getElementById("langages").replaceChild(react, document.getElementById("csharp")) // Remplacement de l'élément identifié par "perl" par le nouvel élément

document.getElementById("langages").removeChild(document.getElementById("cpp")); // Suppression de l'élément "C++" identifié par "cpp"






