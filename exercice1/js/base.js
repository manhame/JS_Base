// Récupère l'élément HTML avec l'identifiant "carre" et le stocke dans la constante 'carre'
const carre = document.getElementById("carre");

// Obtient les styles calculés pour l'élément 'carre' et les stocke dans la constante 'style'
const style = window.getComputedStyle(carre);

// Ajoute un écouteur d'événements de clic à l'élément 'carre'
carre.addEventListener("click", function() {
    // Affiche une boîte de dialogue avec les propriétés de style de l'élément 'carre'
    alert(
        "Background color :" + style.backgroundColor + "\n" +
        "Color : " + style.color  + "\n" +
        "Height: " + style.height + "\n" +
        "Width: " + style.width
    );
});


// Fonction qui affiche les propriétés de style d'un élément
// const afficherProprietesStyle = (element) => {
//   const style = window.getComputedStyle(element);
//   alert(`Background color: ${style.backgroundColor}\nColor: ${style.color}\nHeight: ${style.height}\nWidth: ${style.width}`);
// };

// // Récupère l'élément HTML avec l'identifiant "carre" et le stocke dans la constante 'carre'
// const carre = document.getElementById("carre");

// // Ajoute un écouteur d'événements de clic à l'élément 'carre'
// carre.addEventListener("click", () => afficherProprietesStyle(carre));
