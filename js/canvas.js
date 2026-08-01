export function initializeCanvas() {
  const shapeCanvas = document.getElementById("shapeCanvas");
  const gameCanvas = document.getElementById("gameCanvas");

  // Set canvas size
  shapeCanvas.width = 300;
  shapeCanvas.height = 300;

  gameCanvas.width = 1080;
  gameCanvas.height = 1480;

  console.log("Canvas initialized.");
}