const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false; // keep track of when to draw on canvas
let lastX = 0; // keep track of last colored X coordinate
let lastY = 0; // keep track of last colored Y coordinate
let hue = 0; // color of canvas stroke
let widthDirection = true;

function draw(e) {
  if(!isDrawing) return; // stop the fn from running when canvas is not clicked
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // use hsl to change value using JS
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  
  hue++;
  if(hue >= 360) hue = 0;

  if(ctx.lineWidth >= 150 || ctx.lineWidth <= 0) widthDirection = !widthDirection;
  if(widthDirection) ctx.lineWidth++;
  else ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
