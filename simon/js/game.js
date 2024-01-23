let btPlay = document.querySelector("#play");
let btPlaySong = document.querySelector(".son")
let storedOnGame = localStorage.getItem("onGame");
let toggleButton = document.getElementById("toggleButton");
let isSequenceRecorded = true;
let tableTouchColor = [
  document.querySelector(".green"),
  document.querySelector(".red"),
  document.querySelector(".blue"),
  document.querySelector(".yellow"),
];

btPlay.addEventListener("click", () => {
    if (storedOnGame === "true") {
        btPlaySong.style.display ="block"
        display.innerText = isSequenceRecorded ? "Séquence enregistrée, vous pouvez à présent la jouer song" : "Nouvelle séquence ?";

      console.log("Original " + getClassListLastValues(tableTouchColor));

      let shuffledArray = shuffleArray(tableTouchColor);

      console.log("envois tableau mélangée " + getClassListLastValues(shuffledArray));
    
      let playTracks = getClassListLastValues(shuffledArray)
      localStorage.setItem("songPlay",playTracks);
    //   let lastClass = shuffledArray[shuffledArray.length - 1].classList[0];

    } else {
      console.log("La valeur est false ou non définie");
    }
  });
  
  function getClassListLastValues(shuffleArray) {
    return shuffleArray.map(element => getLastClassValue(element));
  }
  
  // Fonction pour obtenir la dernière valeur de la classe d'un élément
  function getLastClassValue(element) {
    return element.classList[element.classList.length -1];
  }
  
  

function shuffleArray(array) {
  let shuffledArray = array.slice(); // Crée une copie du tableau d'origine

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Génère un indice aléatoire entre 0 et i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Échange les éléments à l'indice i et randomIndex
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }
  return shuffledArray;
}


