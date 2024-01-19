// Sélectionne tous les liens et boutons que tu veux
let links = document.querySelectorAll("a");
let buttons = document.querySelectorAll("button");
let open = document.querySelector(".open");
let sound = new Audio("../sound/boutonStart.mp3");
let theOpen = new Audio("../sound/on.wav");

// Fonction pour jouer le son
function playSound() {
  sound.play();
}
function playOpen(volume,playbackRate) {
  theOpen.volume = volume; // Volume (0.0 à 1.0)
  theOpen.playbackRate = playbackRate;
  theOpen.pause();
}


// Ajoute un gestionnaire d'événements à chaque lien
links.forEach(function (link) {
  link.addEventListener("click", playSound);
});

// Ajoute un gestionnaire d'événements à chaque bouton
buttons.forEach(function (button) {
  button.addEventListener("click", playSound);
});

if (open) {
    open.addEventListener("click", function () {
      playOpen(0.5,1);
    });
  }