let sound = new Audio("../sound/boutonStart.mp3");
let theOpen = new Audio("../sound/sonar.mp3");
let greenSong = new Audio("../sound/beep/greenSong.wav");
let redSong = new Audio("../sound/beep/redSong.wav");
let blueSong = new Audio("../sound/beep/blueSong.wav");
let yellowSong = new Audio("../sound/beep/yellowSong.wav");

let scriptPlayer = document.createElement("script");
scriptPlayer.type = "module";
scriptPlayer.src = "./js/playerGame.js";

let playPattern = [];
let onGame = localStorage.getItem("onGame");
let waitPlayer;

let links = document.querySelectorAll("a");
let buttons = document.querySelectorAll("button");
let music = document.querySelector(".son");
let open = document.querySelector(".open");

let vert = document.querySelector(".vert");
let rouge = document.querySelector(".red");
let bleu = document.querySelector(".bleu");
let jaune = document.querySelector(".jaune");

let volume = 0.6;
let playbackRate = 1;
let speed = 500;

document.addEventListener("DOMContentLoaded", function () {

    function getRandomColor() {
        const colors = ["greenSong", "blueSong", "redSong", "yellowSong"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      }
  function getAudioByColor(color) {
    switch (color) {
      case "greenSong":
        return greenSong;
      case "blueSong":
        return blueSong;
      case "redSong":
        return redSong;
      case "yellowSong":
        return yellowSong;
      default:
        // Gérer le cas par défaut si nécessaire
        return null;
    }
  }

  function playAndAnimate(element, song, volume, playbackRate, append) {
    element.classList.add("scaleAnimation");
    song.volume = volume;
    song.playbackRate = playbackRate;
    song.play();

    setTimeout(() => {
      element.classList.remove("scaleAnimation");
      song.pause();
      song.currentTime = 0;
    }, speed);
    waitPlayer = "true";
    localStorage.setItem("waitPlayer", waitPlayer);
    document.body.appendChild(scriptPlayer);
  }

  music.addEventListener("click", () => {
    if (onGame === "true") {
      let playPattern = localStorage.getItem("songPlay").split(",");
      //   console.log(playPattern);

      function playNext(index) {
        if (index < playPattern.length) {
          const titleSong = playPattern[index];

          //   console.log(`${titleSong} playPattern `);

          switch (titleSong) {
            case "redSong":
              playAndAnimate(rouge, redSong, volume, playbackRate);
              break;
            case "yellowSong":
              playAndAnimate(jaune, yellowSong, volume, playbackRate);
              break;
            case "blueSong":
              playAndAnimate(bleu, blueSong, volume, playbackRate);
              break;
            case "greenSong":
              playAndAnimate(vert, greenSong, volume, playbackRate);
              break;
            case "svg":
                getAudioByColor(getRandomColor());
              break;
            case "playerTouch":           
                getAudioByColor(getRandomColor());           
              break;
          }

          setTimeout(() => {
            playNext(index + 1);
          }, speed);
        }
      }

      playNext(0);
    } else {
      console.log("nogood");
    }
  });

  //   function redsong(volume, playbackRate) {
  //     redSong.volume = volume;
  //     redSong.playbackRate = playbackRate;
  //     redSong.pause();
  //   }
  //   function yellowsong(volume, playbackRate) {
  //     yellowSong.volume = volume;
  //     yellowSong.playbackRate = playbackRate;
  //     yellowSong.pause();
  //   }
  //   function bluesong(volume, playbackRate) {
  //     blueSong.volume = volume;
  //     blueSong.playbackRate = playbackRate;
  //     blueSong.pause();
  //   }
  //   function greensong(volume, playbackRate) {
  //     greenSong.volume = volume;
  //     greenSong.playbackRate = playbackRate;
  //     greenSong.pause();
  //   }

  // ------------------------------------------------
  function playSound() {
    sound.play();
  }
  function playOpen(volume, playbackRate) {
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
      playOpen(0.5, 1);
    });
  }
});

// function mapClassNameToSound(className) {
//
//   }
