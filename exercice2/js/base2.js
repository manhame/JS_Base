// Sélectionne tous les éléments HTML avec la classe "carre" et les stocke dans la variable "carres"
const carres = document.querySelectorAll(".carre");

// Sélectionne l'élément HTML avec l'ID "noir" et le stocke dans la variable "carreNoir"
const carreNoir = document.getElementById("noir");

// Itère sur chaque élément de la liste "carres" en utilisant la méthode forEach
carres.forEach((carre) => {
    // Récupère le style calculé (y compris les styles définis par des feuilles de style) de chaque carré
    const styleCarre = getComputedStyle(carre);

    // Ajoute un écouteur d'événements "click" à chaque carré
    carre.addEventListener("click", function() {
        // Lorsqu'un carré est cliqué, met à jour la couleur de fond du carré avec l'ID "noir"
        // en utilisant la couleur de fond calculée du carré cliqué
        carreNoir.style.backgroundColor = styleCarre.backgroundColor;
        carreNoir.innerText = styleCarre.backgroundColor;
    });
});