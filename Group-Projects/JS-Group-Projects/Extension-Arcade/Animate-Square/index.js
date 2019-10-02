const canvas = document.getElementById('canvas');
const canvas2 = document.getElementById('canvas2');

const ctx = canvas.getContext('2d');
const ctx2 = canvas2.getContext('2d');

// Move Rectangle across canvas ===============================================

let position = 0;

setInterval(() => {
  ctx.clearRect(0, 0, 500, 500);
  ctx.fillRect(position, 0, 20, 20);

  position++;
  if (position > 500) position = 0;
}, 10);

// Animating/expanding the size of a square ===================================

let size = 0;

setInterval(() => {
  ctx2.clearRect(500, 500, 500, 500);
  ctx2.fillRect(0, 0, size, size);

  size++;
  if (size > 500) size = 0;
}, 30);
