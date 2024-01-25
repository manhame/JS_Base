/*n'affiche pas les cosole.log*/
const carre = document.querySelector("#carre");
const compStyles = window.getComputedStyle(carre);
const dialog = document.querySelector("#dialog");
/*
let carre = document.querySelector("#carre");
        let style = getComputedStyle(carre);

console.log("width", style.width);
*/
/* essai pour changer la couleur noire du texte dialogbox car fond noir demandé
const textContent = document.querySelector("#text dialog").style.color='green';
*/

dialog.textContent =
  `127 ....indique : \n  ${compStyles.getPropertyValue("width")},\n`+
  `height : ${compStyles.getPropertyValue("height")},\n`+
  `background-color : ${compStyles.getPropertyValue("background-color")},\n`

 /* document.querySelector("#dialog").innerHTML = text;*/


/* essai pour afficher toutes les propriétés d'un élément
  let text = "";
  for (x in compStyles) {
    compStyles.Prop = compStyles.item(x)
    text += compStyles.Prop + " = " + compStyles.getPropertyValue(compStyles.Prop) + "<br>";
  }
/* méthode "alert"
const dialogBox = "width: 200px height: 200px background-color";
alert(dialogBox);

const modalCarre = document.querySelector("#carre");

modalCarre.dataset.width; 
modalCarre.dataset.height;
modalCarre.dataset.background-color;


/* méthode à partir du support de cours
  const carre = document.querySelector("#carre");
  const btn = document.querySelector('#btn');
 
  carre.addEventListener('click', function() {
    dialogBox.showModal();
  })
 
  btn.addEventListener('click', function() {
    deleteDialogBox(dialogBox);
  })
  function deleteDialogBox(dialogBox){
    dialogBox.remove;
  }
  */