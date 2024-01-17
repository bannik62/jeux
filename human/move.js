let bd = document.querySelector(".bd");
let curseurd = document.getElementById("monCurseurd");
let valeurCurseurd = document.getElementById("valeurCurseurd");
let angled;

let bg = document.querySelector(".bg");
let curseurg = document.getElementById("monCurseurg");
let valeurCurseurg = document.getElementById("valeurCurseurg");
let angleg;

curseurg.addEventListener("input", function () {
  valeurCurseurg.textContent = curseurg.value;
  angleg = curseurg.value; // Initialise angled avec la valeur du curseur
  bg.style.transform = "rotate( " + angleg + "deg )";
  console.log(bg, angleg, valeurCurseurg.value);
});

curseurd.addEventListener("change", function () {
  valeurCurseurd.textContent = curseurd.value;
  angled = curseurd.value; // Initialise angleg avec la valeur du curseur
  bd.style.transform = "rotate( -" + angled + "deg)";
  console.log(bd, angled, valeurCurseurd);
});

// valeurCurseurd.addEventListener('input', () => {

function boomg() {
//   valeurCurseurg = document.getElementById("valeurCurseurg");
//    = curseurg.value;
  angleg = valeurCurseurg.textContent; // curseurg.value; Initialise angleg avec la valeur du curseur
  bg.style.transform = "rotate( " + angleg + "deg)";
  console.log(bg, angleg, valeurCurseurg);
}
function boomd() {
  valeurCurseurg = document.getElementById("valeurCurseurd");
//    = curseurg.value;
  angled = valeurCurseurg.textContent; // curseurg.value; Initialise angleg avec la valeur du curseur
  bd.style.transform = "rotate( " + angled + "deg)";
  console.log(bd, angled, valeurCurseurd);
}

function dance(){
    console.log("hello")
}