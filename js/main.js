import { initializeCanvas } from "./canvas.js";
import { game } from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeCanvas(game);
});