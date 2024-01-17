const rasterCanvas = document.getElementById('rasterCanvas');
const ctx = rasterCanvas.getContext('2d');
let drawing = false;
let resizing = false;
let startX;
let startY;

rasterCanvas.addEventListener('mousedown', handleMouseDown);
rasterCanvas.addEventListener('mousemove', handleMouseMove);
rasterCanvas.addEventListener('mouseup', handleMouseUp);

function handleMouseDown(e) {
  if (e.offsetX > rasterCanvas.width - 10 && e.offsetY > rasterCanvas.height - 10) {
    resizing = true;
    startX = e.clientX;
    startY = e.clientY;
  } else {
    drawing = true;
    draw(e);
  }
}

function handleMouseMove(e) {
  if (resizing) {
    const newWidth = rasterCanvas.width + (e.clientX - startX);
    const newHeight = rasterCanvas.height + (e.clientY - startY);

    rasterCanvas.width = Math.max(newWidth, 10);
    rasterCanvas.height = Math.max(newHeight, 10);

    drawCanvas();
  } else if (drawing) {
    draw(e);
  }
}

function handleMouseUp() {
  drawing = false;
  resizing = false;
  ctx.beginPath();
}

function draw(e) {
  const rect = rasterCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function drawCanvas() {
  ctx.clearRect(0, 0, rasterCanvas.width, rasterCanvas.height);
  // Dessine ici tous les éléments que tu veux voir sur le canvas (dessins existants, etc.).
}

function enregistrerDessin() {
    // Demandez à l'utilisateur de saisir un nom pour le dessin
    var nomDessin = prompt("Entrez un nom pour votre dessin :");
  
    if (!nomDessin) {
      // Si l'utilisateur annule la saisie ou entre un nom vide, ne rien faire
      alert('Nom du dessin non spécifié. Le dessin n\'a pas été enregistré.');
      return;
    }
  
    var dataURL = rasterCanvas.toDataURL('image/png');
    
    // Générez une clé unique basée sur le timestamp actuel et le nom du dessin
    var timestamp = new Date().getTime();
    var key = 'imageDataURL_' + nomDessin + '_' + timestamp;
  
    // Stockez le DataURL dans le stockage local avec la clé générée
    localStorage.setItem(key, dataURL);
  
    alert('Dessin "' + nomDessin + '" enregistré avec succès!');
    location.reload();
}
  