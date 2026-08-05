import { initializeCanvas } from "./canvas.js";
import { game } from "./game.js";
import { playBG } from "./audio.js";
import "./ui.js";


document.addEventListener("DOMContentLoaded", () => {

  initializeCanvas(game);


  // প্রথম user interaction এর পরে BG music চালু হবে
  document.addEventListener(
    "click",
    () => {

      playBG();

    },
    { once: true }
  );


});