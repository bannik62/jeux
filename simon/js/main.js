// Déclaration des variables globales
let body = document.querySelector("body");
let disckCentral = document.querySelector(".centerSimon");
let toggleButton;
let btPlay;
let display = document.querySelector("#display");
let blinkInterval;
let tableTouchColor;
tableTouchColor = [
  document.querySelector(".green"),
  document.querySelector(".red"),
  document.querySelector(".blue"),
  document.querySelector(".yellow"),
];
let onGame 
document.addEventListener("DOMContentLoaded", function () {
  console.log("hello world! ");
  toggleButton = document.getElementById("toggleButton");
  display = document.getElementById("display");
   btPlay = document.querySelector("#play");


  toggleButton.addEventListener("click", function () {
    if (toggleButton.innerText === "off") {
      toggleButton.classList.remove("btn-danger");
      toggleButton.classList.add("btn-success");
      toggleButton.innerText = "on";

      if ((toggleButton.innerText = "on")) {
        btPlay.style.display =
          btPlay.style.display === "none" ? "block" : "none";
      }
      start();

    } else if (toggleButton.innerText === "on") {
      toggleButton.classList.remove("btn-success");
      toggleButton.classList.add("btn-danger");
      toggleButton.innerText = "off";

      if ((toggleButton.innerText = "off")) {
        btPlay.style.display =
          btPlay.style.display === "none" ? "block" : "none";
       

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
  onGame = true
  let blinkCount = 0;
  let logoDiv = document.querySelector(".simon");
  body.classList.add("degradeBody");
  disckCentral.classList.add("centerShadow");
  localStorage.setItem('onGame', onGame);


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

function stop() {
  console.log("stop ");
  onGame = false;
  localStorage.removeItem('onGame', onGame);

  for (let i = 0; i < tableTouchColor.length; i++) {
    setTimeout(() => {
      tableTouchColor[i].classList.add("svg");
    }, i * 1000); // Le délai augmente à chaque itération
  }
  body.classList.remove("degradeBody");
  disckCentral.classList.remove("centerShadow");
}
