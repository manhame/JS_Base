
const icons = document.querySelectorAll(".icon");
const texts = document.querySelectorAll(".text");
const row = document.querySelector(".row");//ne récupère que l'élément "row"
let indexIconActive = null; // l'index de l'icône active (par défaut null <=> aucun/neutre/gris)

console.log("CHECKPOINT 1 - icons = ", icons);

// Itère sur chaque élément de la liste "icons" (classe "icon") en utilisant la méthode forEach
icons.forEach((icon, indexIcon) => {

    console.log("CHECKPOINT 2 - icon = ", icon);
        
    icon.addEventListener("click", function() {

        console.log("CHECKPOINT 3 - getComputedStyle(icon).backgroundColor = ", getComputedStyle(icon).backgroundColor);

        /* Lorsqu'un icon est cliqué, efface le style de la classe "icon"
        et ajoute le style de la classe "iconCliqued" et inversément + valide le clic*/
        // si l'utilisateur clique sur une icône non active (=> on veut une couleur)
        // if(indexIconActive == null || indexIcon != indexIconActive) {
        if(indexIcon !== indexIconActive) {
            row.style.backgroundColor = getComputedStyle(icon).backgroundColor;
            texts[indexIcon].classList.add("text-displayed");
            icon.classList.add("iconClicked");
            indexIconActive = indexIcon;
        }
        
        /*si "icon déjà cliqué" il efface le style de la classe iconclicked pour
        remettre celui de la classe icon + valide le double clic*/
        // sinon il a cliqué sur l'icône active (=> on veut griser)
        else {
            icon.classList.remove("iconClicked");
            texts[indexIcon].classList.remove("text-displayed");
            row.style.backgroundColor = "grey";  
            indexIconActive = null;
        }
    })
});
