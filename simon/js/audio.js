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
const song = document.getElementById("myAudio");
let playback = document.getElementById("playbackRate");

let volumeSlider = document.getElementById("volume");
let playbackRateSlider = document.getElementById("playbackRate");


function updateVolume(value) {
    volume = parseFloat(value);
  }

  function updatePlaybackRate(value) {
    playbackRate = parseFloat(value);
  }
volumeSlider.addEventListener("input", function () {
  updateVolume(this.value);
});

playbackRateSlider.addEventListener("input", function () {
  updatePlaybackRate(this.value);
});

let volume = 0.5; // Initial value
let playbackRate = 1; // Initial value
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
        return null;
    }
  }



  function playAndAnimate(element, song) {
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

      function playNext(index) {
        if (index < playPattern.length) {
          const titleSong = playPattern[index];

          switch (titleSong) {
            case "redSong":
              playAndAnimate(rouge, redSong);
              break;
            case "yellowSong":
              playAndAnimate(jaune, yellowSong);
              break;
            case "blueSong":
              playAndAnimate(bleu, blueSong);
              break;
            case "greenSong":
              playAndAnimate(vert, greenSong);
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

  function playSound() {
    sound.play();
  }

  function playOpen() {
    theOpen.volume = volume;
    theOpen.playbackRate = playbackRate;
    theOpen.pause();
  }

  links.forEach(function (link) {
    link.addEventListener("click", playSound);
  });

  buttons.forEach(function (button) {
    button.addEventListener("click", playSound);
  });

  if (open) {
    open.addEventListener("click", function () {
      playOpen();
    });
  }
});
