// className.js
class Player {
  constructor(id, name, score = 0) {
    this.id = id;
    this.name = name;
    this.score = score;
  }
}

class Action {
  static rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

 static createPion(id) {
   // Créer un élément div représentant le pion
   const pion = document.createElement("div");
 
   // Ajouter une classe pour le style CSS
   pion.classList.add("pion");
   pion.id = `pion${id}`;
   
   console.log('class' + pion.id)
   pion.innerText =`pion${id}`
   console.log(pion.innerText)
   // Ajouter le pion à la première case
   const caseElement = document.getElementById("case1");
  
     caseElement.appendChild(pion);
   
 }
static move(currentPlayerIndex, infoPlayer, result){
  if (currentPlayerIndex >= infoPlayer.length) {
    currentPlayerIndex = 0;
  }
console.log("current " + currentPlayerIndex + "infoplayer " + infoPlayer +"result "+ result )
  console.log(`Résultat du dé pour: ${infoPlayer[currentPlayerIndex].name}: ${result}`);

  // // Placer le pion sur la case correspondant au résultat du dé
  const pion = document.getElementById(`pion${currentPlayerIndex + 1}`);
  const caseElement = document.getElementById(`case${result}`);

  // // Vérifier si le pion et la case existent avant de déplacer
  if (pion && caseElement) {

    // Déplacer le pion sur la position de la case
  caseElement.appendChild(pion)
  }     
}
}



export { Player, Action};