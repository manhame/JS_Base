/* Sélectionne tous les éléments HTML avec la classe "carre" 
et les stocke dans la variable "carres"; déclare une variable
de type booléen pour l'état du clic*/

var carres = document.querySelectorAll(".carre");
let clicked = false;

// Itère sur chaque élément de la liste "carres" en utilisant la méthode forEach
carres.forEach((carre) => {
    // Récupère le style calculé (y compris les styles définis par des feuilles de style) de chaque carré
    const styleCarre = getComputedStyle(carre);

    carre.addEventListener("click", function() {
    /* Lorsqu'un carré est cliqué, efface le style de la classe "carre"
    et ajoute le style de la classe "carreclique" si carré "pas cliqué"*/
        if(!clicked) {
            carre.classList.remove("carre");
            carre.classList.add("carreclique");
            clicked = true;
        }/*si "carré cliqué" il efface le style de la classe carreclique pour
        remettre celui de la classe carre*/
            else {
                carre.classList.remove("carreclique");
                carre.classList.add("carre");  
                clicked = false;  
            }
    });
})
/* Sélectionne tous les éléments HTML avec la classe "carreclique" et les stocke dans la variable "carres"
var carres = document.querySelectorAll(".carreclique");

// Itère sur chaque élément cliqué de la liste "carres" en utilisant la méthode forEach
carres.forEach((carreclique) => {
    // Récupère le nouveau style calculé (y compris les styles définis par des feuilles de style) de chaque carré
    const styleCarreClique = getComputedStyle(carreclique);

    carreclique.addEventListener("click", function() {
    // Lorsqu'un carré est recliqué, efface le style de la classe "carreclic"
    // et ajoute le style initial de la classe "carre"
        carreclique.classList.remove("carreclique");
        carreclique.classList.add("carre");
    });
    
})    
*/
