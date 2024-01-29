var fb=document.querySelector(".fb");
var x=document.querySelector(".x");
var insta=document.querySelector(".insta");
var icons=document.querySelectorAll("icon");
var elements=document.querySelectorAll("row");
let clicked=false;

// Itère sur chaque élément de la liste "icons" en utilisant la méthode forEach
icons.forEach((icon) => {
    // Récupère le style calculé (y compris les styles définis par des feuilles de style) de chaque carré
    
    const styleIcon = getComputedStyle(icon);

    icon.addEventListener("click", function() {
    /* Lorsqu'un icon est cliqué, efface le style de la classe "icon"
    et ajoute le style de la classe "iconcliqued" si icon "pas cliqué"*/
        icons.forEach((i) => {
            if(!clicked) {
            
                i.classList.remove("icon");
                i.classList.add("iconclicked");
                clicked = true;
            }
        
    /*si "icon cliqué" il efface le style de la classe iconclicked pour
        remettre celui de la classe icon*/
                else {
                    i.classList.remove("iconclicked");
                    i.classList.add("icon");  
                    clicked = false;  
                }
        });
    })
});

