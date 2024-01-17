class Bob {
  constructor() {
    this.colorPull = ''; // Couleur par défaut
    this.colorPant = ''; // Couleur par défaut
  }
}

const boutonsPull = document.querySelectorAll('.btpu');
const boutonsPantalon = document.querySelectorAll('.btpa');
const bustes = document.querySelectorAll('.buste');
const legs  = document.querySelectorAll('.cp-pantalon')
let boby
let bg = document.querySelector('.bg')
let bd = document.querySelector('.bd')
let positionMin = 0
let positionMax = 0
const bobInstance = new Bob();


boutonsPull.forEach(bouton => {
  bouton.addEventListener('click', () => {
    // Mettez à jour la couleur du pull en fonction du bouton cliqué
    bobInstance.colorPull = bouton.innerText.toLowerCase();
    boby = bobInstance.colorPull;

    // Remplacez la classe existante par la nouvelle classe sur chaque élément de la NodeList
    bustes.forEach(buste => {
      buste.classList.replace(buste.classList[1], boby);
    });
  });
});

boutonsPantalon.forEach(bouton => {
  bouton.addEventListener('click', () => {
    // Mettez à jour la couleur du pull en fonction du bouton cliqué
    bobInstance.colorPant= bouton.innerText.toLowerCase();
    boby = bobInstance.colorPant;

    // Remplacez la classe existante par la nouvelle classe sur chaque élément de la NodeList
    legs.forEach(leg => {
      leg.classList.replace(leg.classList[1], boby);
    });
  });
});

