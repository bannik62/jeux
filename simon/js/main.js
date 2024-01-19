// Déclaration des variables globales
let body = document.querySelector("body")
let toggleButton;
let display;
let blinkInterval;
let tableTouchColor;
tableTouchColor = [
    document.querySelector(".green"),
    document.querySelector(".red"),
    document.querySelector(".blue"),
    document.querySelector(".yellow")
  ];

document.addEventListener("DOMContentLoaded", function () {
  console.log("hello world! ");
  
  // Initialisation des variables lors du chargement du DOM
  toggleButton = document.getElementById("toggleButton");
  display = document.getElementById("display");
  
  // Ajoute un écouteur d'événements au clic sur le bouton
  toggleButton.addEventListener("click", function () {
    // Vérifie la classe actuelle du bouton
    if (toggleButton.innerText === "off") {
      // Si le bouton est en mode "off"
      toggleButton.classList.remove("btn-danger");
      toggleButton.classList.add("btn-success");
      toggleButton.innerText = "on";

      // Affiche un message dans le display
      start();
    } else if (toggleButton.innerText === "on") {
      // Si le bouton est en mode "on"
      toggleButton.classList.remove("btn-success");
      toggleButton.classList.add("btn-danger");
      toggleButton.innerText = "off";

      if (toggleButton.innerText === "off") {
     
     
      }

      // Efface le contenu du display
      let logoDiv = document.querySelector(".simon");
      logoDiv.style.display = "none";
      stop();
    }
  });
});

// Initialisation de tableTouchColor en dehors de la fonction DOMContentLoaded


function start() {
  console.log("start activated");
  let blinkCount = 0;
  let logoDiv = document.querySelector(".simon");
  body.classList.add("degradeBody")


  function blink() {
    let toggleButton = document.getElementById("toggleButton");

    logoDiv.style.display = logoDiv.style.display === "none" ? "block" : "none";
    blinkCount++;

    for (let i = 0; i < tableTouchColor.length; i++) {
      setTimeout(() => {
        tableTouchColor[i].classList.toggle("svg");
      }, i * 1000); // Le délai augmente à chaque itération
    }

    // Arrête le clignotement après 5 fois
    if (blinkCount === 5) {
      // À la fin, rend la div toujours visible
      logoDiv.style.display = "block";



      clearInterval(blinkInterval);
    }
  }

  blinkInterval = setInterval(blink, 500);
}

function stop(){
    console.log("stop "+ tableTouchColor);
    for (let i = 0; i < tableTouchColor.length; i++) {
        setTimeout(() => {
          tableTouchColor[i].classList.add("svg");
        }, i * 1000); // Le délai augmente à chaque itération
      }
      body.classList.remove("degradeBody")

}