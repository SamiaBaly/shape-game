import { initializeCanvas } from "./canvas.js";
import { game } from "./game.js";
import { toggleSound } from "./audio.js";
import "./ui.js";

document.addEventListener("DOMContentLoaded", () => {

  initializeCanvas(game);

  const soundBtn = document.getElementById("sound-btn");

  if (soundBtn) {

    soundBtn.innerHTML = "🔊";

    soundBtn.addEventListener("click", (e) => {
      console.trace("toggleSound");
      e.preventDefault();
      e.stopPropagation();

      const status = toggleSound();
      soundBtn.innerHTML = status ? "🔊" : "🔇";
    });

  }

});