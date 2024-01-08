// script.js
import { Player, Action } from "./classGame.js";

let infoPlayer = [];
let idPlayer = 0;
let maxPlayers = 3;
let currentPlayerIndex = 0;
let bouton = document.getElementById("addPlayer");
let namePlayerInput = document.getElementById("name");
let rollButton = document.getElementById("rollButton");
let infodisplay = document.getElementById("result");
let gameCase = document.querySelectorAll(".case");
let pion = document.querySelectorAll(".pion");

console.log(idPlayer, currentPlayerIndex);

bouton.addEventListener("click", () => {
  if (idPlayer < maxPlayers) {
    rollButton.style.display = "block";
    idPlayer++;
    Action.createPion(idPlayer);

    console.log(idPlayer, currentPlayerIndex);

    let newPlayer = new Player(idPlayer, namePlayerInput.value);
    infoPlayer.push(newPlayer);

    console.log(
      `Nouveau joueur : ${newPlayer.name} (ID: ${newPlayer.id}, Score: ${newPlayer.score})`
    );
    infoPlayer.forEach((element) => {
      console.log("Liste des joueurs :" + element[0]);
    });

    infodisplay.innerHTML = "";
    infoPlayer.forEach((player) => {
      console.log("player " + player);
      infodisplay.innerHTML += `Hello ${player.name}<br>`;
      let id = newPlayer.id;

    });

    if (idPlayer < maxPlayers) {
      // rollButton.disabled = false;
    }
  } else {
    infodisplay.innerHTML += `Le maximum de joueurs est atteint <br>`;
  }
});

rollButton.addEventListener("click", () => {
  if (infoPlayer.length > 0) {
    // Lancer le dé et obtenir le résultat
    const result = Action.rollDice();

    // Incrémenter currentPlayerIndex et réinitialiser si nécessaire
    currentPlayerIndex++;
infoPlayer.forEach(element =>{
  console.log("playerinfo: " + element.id)
})
    Action.move(currentPlayerIndex, infoPlayer, result);
  }
});
  console.log(idPlayer, currentPlayerIndex);
