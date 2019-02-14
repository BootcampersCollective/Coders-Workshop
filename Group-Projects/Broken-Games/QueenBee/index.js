const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let position = 0;

setInterval(function() {
  ctx./*put 'context' here*/clearRect(0, 0, 500, 500);
  ctx.fillRect(position, 0, 20, 20);

  position++;
  if (position > 500) {
    position = 0;
  }
}, 30);
