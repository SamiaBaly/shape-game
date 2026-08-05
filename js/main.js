import { initializeCanvas } from "./canvas.js";
import { game } from "./game.js";
import { toggleSound } from "./audio.js";
import "./ui.js";

document.addEventListener("DOMContentLoaded", () => {

  initializeCanvas(game);

  // Sound
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

  // ======================
  // Info Popup
  // ======================

  const infoBtn = document.getElementById("info-btn");
  const infoPopup = document.getElementById("info-popup");
  const closeInfo = document.getElementById("close-info");

  infoBtn.addEventListener("click", () => {
    infoPopup.classList.remove("hidden");
  });

  closeInfo.addEventListener("click", () => {
    infoPopup.classList.add("hidden");
  });

});