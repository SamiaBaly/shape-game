import { drawPentagon } from "./shapes.js";
import { Dot } from "./dots.js";

export function initializeCanvas() {
  const shapeCanvas = document.getElementById("shapeCanvas");
  const gameCanvas = document.getElementById("gameCanvas");

  shapeCanvas.width = 300;
  shapeCanvas.height = 300;

  gameCanvas.width = 1080;
  gameCanvas.height = 1480;

  const shapeCtx = shapeCanvas.getContext("2d");
  const gameCtx = gameCanvas.getContext("2d");

  drawPentagon(shapeCtx, shapeCanvas.width, shapeCanvas.height);

  drawDotGrid(gameCtx);
}

function drawDotGrid(ctx) {
  const dots = [];

  const rows = 5;
  const cols = 5;

  const spacing = 180;

  const startX = 180;
  const startY = 250;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = startX + col * spacing;
      const y = startY + row * spacing;

      const dot = new Dot(x, y);

      dot.draw(ctx);

      dots.push(dot);
    }
  }

  return dots;
}