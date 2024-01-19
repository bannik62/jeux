const vectorCanvas = document.getElementById('rasterCanvas');
const ctx = vectorCanvas.getContext('2d');
let drawing = false;
let path = new Path2D();
console.log(path)

vectorCanvas.addEventListener('mousedown', handleMouseDown);
vectorCanvas.addEventListener('mousemove', handleMouseMove);
vectorCanvas.addEventListener('mouseup', handleMouseUp);

function handleMouseDown(e) {
  drawing = true;
  startDrawing(e);
}

function handleMouseMove(e) {
  if (drawing) {
    draw(e);
  }
}

function handleMouseUp() {
  if (drawing) {
    drawing = false;
    endDrawing();
  }
}

function startDrawing(e) {
  const rect = vectorCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  path.moveTo(x, y);
  draw();
}

function draw(e) {
  ctx.clearRect(0, 0, vectorCanvas.width, vectorCanvas.height);

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';

  ctx.stroke(path);

  if (e) {
    const rect = vectorCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    path.lineTo(x, y);
    console.log(path);
  }
}   

function endDrawing() {
  drawCanvas();
}

function drawCanvas() {
  // Dessinez ici tous les éléments que vous voulez voir sur le canvas (dessins existants, etc.).
}

function enregistrerDessin() {
  // Demandez à l'utilisateur de saisir un nom pour le dessin
  var nomDessin = prompt("Entrez un nom pour votre dessin :");

  if (!nomDessin) {
    // Si l'utilisateur annule la saisie ou entre un nom vide, ne rien faire
    alert('Nom du dessin non spécifié. Le dessin n\'a pas été enregistré.');
    return;
  }

  var dataURL = vectorCanvas.toDataURL('image/png');

  // Générez une clé unique basée sur le timestamp actuel et le nom du dessin
  var timestamp = new Date().getTime();
  var key = 'imageDataURL_' + nomDessin + '_' + timestamp;
  localStorage.setItem(key, dataURL);
  location.reload();
}

function clearLocalStorage() {
    localStorage.clear();
    location.reload()
  }