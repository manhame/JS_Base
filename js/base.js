const dialog=document.querySelector("dialog");
const showButton=document.querySelector("dialog + button");

// Le bouton "Alert" ouvre le dialogue
showButton.addEventListener("click", () => {
    dialog.showModal();
  });