let btPlay = document.querySelector("#play");
let storedOnGame = localStorage.getItem("onGame");
let toggleButton = document.getElementById("toggleButton");
let tableTouchColor = [
  document.querySelector(".green"),
  document.querySelector(".red"),
  document.querySelector(".blue"),
  document.querySelector(".yellow"),
];

btPlay.addEventListener("click", () => {
    if (storedOnGame === "true") {
      console.log("La valeur est true");
      console.log("Original " + getClassListLastValues(tableTouchColor));
  
      // Appelle la fonction pour mélanger le tableau
      let shuffledArray = shuffleArray(tableTouchColor);

      console.log("Copie mélangée " + getClassListLastValues(shuffledArray));
      let playTracks = getClassListLastValues(shuffledArray)
      localStorage.setItem("songPlay",playTracks);
      // Obtient la dernière valeur de la classe dans la liste
      let lastClass = shuffledArray[shuffledArray.length - 1].classList[0];
    } else {
      // La valeur stockée est false ou null (si elle n'a jamais été définie)
      console.log("La valeur est false ou non définie");
      // Fais ce que tu as besoin de faire lorsque la valeur est false ou non définie
    }
  });
  
  // Fonction pour obtenir les dernières valeurs de la classe dans la liste
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


tableTouchColor.forEach(element => {
    console.log("pour nono"+ element);
    
});