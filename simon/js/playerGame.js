let waitPlayer = localStorage.getItem("waitPlayer");
let test = localStorage.getItem("songPlay");

console.log(typeof waitPlayer);
console.log(waitPlayer);

let vert = document.querySelector(".vert");
let rouge = document.querySelector(".rouge");
let bleu = document.querySelector(".bleu");
let jaune = document.querySelector(".jaune");
let caseInputs = document.querySelectorAll(".playerTouch");

let clickCounter = 0; // Initialisez le compteur de clics à 0
let clickedDivName = []; // Tableau pour stocker les noms des divs cliquées

if (waitPlayer === "true") {
  console.log("hello player");
  caseInputs.forEach(caseInput => {
    console.log("caseInput " + caseInput);
    caseInput.addEventListener("click", () => {
      // Utiliser un switch pour déterminer la couleur de la div cliquée
      let currentDivName = "";

      if (caseInput.classList.contains("vert")) {
        currentDivName = "greenSong";
      } else if (caseInput.classList.contains("rouge")) {
        currentDivName = "redSong";
      } else if (caseInput.classList.contains("bleu")) {
        currentDivName = "blueSong";
      } else if (caseInput.classList.contains("jaune")) {
        currentDivName = "yellowSong";
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
        let testArray = test.split(',');

        // Utiliser la méthode every pour vérifier si les deux tableaux sont identiques
        if (testArray.length === 4 && testArray.every((value, index) => value === clickedDivName[index])) {
          display.innerText = "C'est correct !";
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
