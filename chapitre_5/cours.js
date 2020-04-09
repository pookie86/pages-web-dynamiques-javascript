// Créer un gestionnaire d'évènement

function clic() {
    console.log("Clic !");
}

var bouton = document.getElementById("bouton");

bouton.addEventListener("click", clic); // Le 2ème clic est la fonction

// Autre manière d'écrire le gestionnaire d'évènement

bouton.addEventListener("clic", function () {
    console.log("clic !");

});

// Supprimer un gestionnaire d'évènement

bouton.removeEventListener("clic", clic);

// Principaux évènements :

// Event => revoie à l'évènement

//KEYPRESS (clavier) => appui, relachement
//CLICK (souris) => appui, relachement, survol
//LOAD (fenêtre) => chargement, fermeture, redimensionnement, défilement(scrolling)
//FORM (formulaire) => changement de cible(focus), envoi de formulaire

// Chaque évènement a ses propriétés et méthodes

// Type => renvoie au type d'évènement
// Target => renvoie à l'élement du DOM ciblé

// Ajout d'un gestionnaire qui affiche le type et la cible de l'évènement

document.getElementById("bouton").addEventListener("click", function (e) { // Objet Event fourni à la fonction sous forme d'un paramètre e
    console.log("Evènement : " + e.type + " et texte de la cible : " + e.target.textContent);
});

// Appui sur une touche du clavier

// 1 : KEYPRESS = clavier


// La propriété charCode fournit le caractère associé à la touche frappée
// La valeur Unicode numérique est traduite par la méthode String.fromCharCode en chaine de caractères

document.addEventListener("keypress", function (e){
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

// 2 : KEYDOWN & KEYUP = clavier

// La propriété keyCode fournit le code de la touche appuyée

function infoClavier(e) {
    console.log("Evènement clavier : " + e.type + " touche : " + e.keyCode);
}

// Gestion de l'appui et du relâchement d'une touche du clavier

document.addEventListener("keydown", infoClavier);
document.addEventListener("keyup", infoClavier);

// Clic sur un bouton de la souris

// 3 : Click = souris

//clientX ou clientY fournissent les coordonnées horizontales et verticales du clic

// fonction getBoutonSouris pour déduire le nom du bouton de la souris cliqué, à partir de son code fourni par la propriétébuttonde l'objet Event.
// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0: // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1: // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2: // 2 est le code du bouton droit
        bouton = "droit";
        break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);


// 4 : LOAD = fenêtre

// Fin du chargement de la page web

// Il est possible de détecter la fin du chargement de la page en ajoutant un gestionnaire pour l'événement load sur l'objet window

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
    console.log("Page entièrement chargée");
});

// Fermeture de la page web

// On peut parfois vouloir détecter la fermeture d'une page web, qui se produit lorsque l'utilisateur ferme l'onglet qui l'affiche ou navigue vers une autre page dans cet onglet. Un cas d'utilisation fréquent consiste à afficher une demande de confirmation.

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});

// La propagation des événements

// Les événements déclenchés sur un noeud enfant vont se déclencher ensuite sur son noeud parent, puis sur le parent de celui-ci, et ce jusqu'à la racine du DOM (la variable document)


// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation de l'événement

});

// Modifier le comportement par défaut en cas d'événement

//Il est possible d'annuler le comportement par défaut en appelant la méthode preventDefault sur l'objetEvent.

// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});