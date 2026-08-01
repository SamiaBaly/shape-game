import { drawPentagon } from "./shapes.js";

export function initializeCanvas() {
  const shapeCanvas = document.getElementById("shapeCanvas");
  const gameCanvas = document.getElementById("gameCanvas");

  shapeCanvas.width = 300;
  shapeCanvas.height = 300;

  gameCanvas.width = 1080;
  gameCanvas.height = 1480;

  const shapeCtx = shapeCanvas.getContext("2d");

  drawPentagon(shapeCtx, shapeCanvas.width, shapeCanvas.height);

  console.log("Canvas initialized");
}