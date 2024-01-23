let waitPlayer = localStorage.getItem("waitPlayer");
let test = localStorage.getItem("songPlay");

console.log(typeof waitPlayer);
console.log(waitPlayer);

let vert = document.querySelector(".vert");
let rouge = document.querySelector(".rouge");
let bleu = document.querySelector(".bleu");
let jaune = document.querySelector(".jaune");

let greenSong = new Audio("../sound/beep/greenSong.wav");
let redSong = new Audio("../sound/beep/redSong.wav");
let blueSong = new Audio("../sound/beep/blueSong.wav");
let yellowSong = new Audio("../sound/beep/yellowSong.wav");
let caseInputs = document.querySelectorAll(".playerTouch");

let clickCounter = 0; // Initialisez le compteur de clics à 0
let clickedDivName = []; // Tableau pour stocker les noms des divs cliquées

if (waitPlayer === "true") {
  function playAndAnimate(song, volume, playbackRate) {
    song.volume = volume;
    song.playbackRate = playbackRate;
    song.play();

    setTimeout(() => {
      song.pause();
      song.currentTime = 0;
    }, speed);
  }
  console.log("hello player");
  caseInputs.forEach((caseInput) => {
    console.log("caseInput " + caseInput);
    caseInput.addEventListener("click", () => {
      // Utiliser un switch pour déterminer la couleur de la div cliquée
      let currentDivName = "";

      if (caseInput.classList.contains("vert")) {
        currentDivName = "greenSong";
        playAndAnimate(greenSong, volume, playbackRate);
      } else if (caseInput.classList.contains("rouge")) {
        currentDivName = "redSong";
        playAndAnimate(redSong, volume, playbackRate);
      } else if (caseInput.classList.contains("bleu")) {
        currentDivName = "blueSong";
        playAndAnimate(blueSong, volume, playbackRate);
      } else if (caseInput.classList.contains("jaune")) {
        currentDivName = "yellowSong";
        playAndAnimate(yellowSong, volume, playbackRate);
      }

      clickedDivName.push(currentDivName);
      clickCounter++;

      console.log("clickCounter: " + clickCounter);
      console.log("clickedDivName: " + clickedDivName);
      console.log("test: " + test);

      display.innerText = `Clic numéro ${clickCounter}`;

      if (clickCounter === 4 && clickedDivName.length === 4) {
        display.innerText = "Test de vos quatre essais";

        // Convertir la chaîne test en tableau en utilisant split(',')
        let testArray = test.split(",");

        // Utiliser la méthode every pour vérifier si les deux tableaux sont identiques
        if (
          testArray.length === 4 &&
          testArray.every((value, index) => value === clickedDivName[index])
        ) {
          display.innerText = "C'est correct !";
          clickCounter = 0;
          let play = document.querySelector("#play");
          let son = document.querySelector(".son");
          setTimeout(() => {
            play.click();
            son.click();
          },500);
        } else {
          display.innerText = "Ce n'est pas correct.";
        }

        // Réinitialiser le compteur et le tableau pour le prochain ensemble de 4 clics
        clickCounter = 0;
        clickedDivName = [];
      }
    });
  });
} else {
  console.log("pas bien");
}
