let waitPlayer = localStorage.getItem("waitPlayer");
console.log(typeof waitPlayer);
console.log(waitPlayer);
let vert = document.querySelector(".vert");
let rouge = document.querySelector(".red");
let bleu = document.querySelector(".bleu");
let jaune = document.querySelector(".jaune");
let caseInputs = document.querySelectorAll(".playerTouch");



    if (waitPlayer == "true") {
      console.log("hello player");
    caseInputs.forEach(caseInput => {
      console.log("caseInput " + caseInput);
      caseInput.addEventListener("click",)
    });
  } else {
    console.log("pas bien");
  }

