import { initializeCanvas } from "./canvas.js";
import { game } from "./game.js";
import "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeCanvas(game);
});