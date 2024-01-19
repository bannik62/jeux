// Sélectionne tous les liens et boutons que tu veux
let links   = document.querySelectorAll("a");
let buttons = document.querySelectorAll("button");
let open    = document.querySelector(".open");
let sound   = new Audio("../sound/boutonStart.mp3");
let theOpen = new Audio("../sound/sonar.mp3");
let vert    = new Audio("../sound/beep/greentSong.wav")
let redSong    = new Audio("../sound/beep/redSong.wav")
let blueSong    = new Audio("../sound/beep/blueSong.wav")
let yellowSong    = new Audio("../sound/beep/yellowSong.wav")
let playPattern = localStorage.getItem("sonPlay")

if (playPattern) {
    
    console.log(playPattern)
}

// Fonction pour jouer le son
function playSound() {
  sound.play();
}
function playOpen(volume,playbackRate) {
  theOpen.volume = volume;
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