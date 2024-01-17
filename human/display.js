// Fonction pour récupérer toutes les images du stockage local
function getStoredImages() {
    const storedImages = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('imageDataURL')) {
        const imgDataURL = localStorage.getItem(key);
        storedImages.push(imgDataURL);
      }
    }
    return storedImages;
  }
  
  // Fonction pour initialiser les images dans la div .displayHair
  function initDisplayHair(images) {
    const displayHair = document.querySelector('.displayHair');
    displayHair.classList.add('flex-container');
  
    images.forEach((imgDataURL, index) => {
      const img = new Image();
      img.src = imgDataURL;
  
      // Créez une sous-div pour chaque image avec une classe unique
      const subDiv = document.createElement('div');
      subDiv.classList.add('image-container');
      subDiv.appendChild(img);
     

  
      // Ajoutez la sous-div à la div .displayHair
      displayHair.appendChild(subDiv);
    });
  }
  
  // Fonction pour initialiser les gestionnaires d'événements de déplacement
  function initDraggableImages() {
    const images = document.querySelectorAll('.image-container img');
    let divEnCoursDeDeplacement, offsetX, offsetY;
  
    // Ajoutez les gestionnaires d'événements aux images
    images.forEach((img) => {
        img.addEventListener('mousedown', function(e) {
          // Ajoutez la classe 'absolute' à la div parente (subDiv)  
          this.parentElement.classList.add('absolute');

          divEnCoursDeDeplacement = this.parentElement;
          offsetX = e.clientX - divEnCoursDeDeplacement.getBoundingClientRect().left;
          offsetY = e.clientY - divEnCoursDeDeplacement.getBoundingClientRect().top;
          
        });
      });

     
      
  
    document.addEventListener('mousemove', function(e) {
      if (divEnCoursDeDeplacement) {
        divEnCoursDeDeplacement.style.left = e.clientX - offsetX + 'px';
        divEnCoursDeDeplacement.style.top = e.clientY - offsetY + 'px';
      }
    });
  
    document.addEventListener('mouseup', function() {
        // this.parentElement.classList.remove('absolute');

      divEnCoursDeDeplacement = null;
    });
  }
  
  // Exécutez les fonctions nécessaires après le chargement du DOM
  document.addEventListener('DOMContentLoaded', function() {
    const storedImages = getStoredImages();
    initDisplayHair(storedImages);
    initDraggableImages();
  });
  