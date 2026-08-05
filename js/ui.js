import { game } from "./game.js";
import { playWrong } from "./audio.js";
import { toggleSound, soundEnabled } from "./audio.js";



const settingsBtn = document.getElementById("settings-btn");
const settingsMenu = document.getElementById("settings-menu");

const homeBtn = document.getElementById("home-btn");
const clueBtn = document.getElementById("clue-btn");
const retryBtn = document.getElementById("retry-btn");
const shareBtn = document.getElementById("share-btn");


// Settings open / close
settingsBtn.addEventListener("click", () => {

  settingsMenu.classList.toggle("hidden");

});


// Home
homeBtn.addEventListener("click", () => {

  window.location.href = "./index.html";

});


// Clue
clueBtn.addEventListener("click", () => {

  const clueMessage =
    document.getElementById("clue-message");


  const sides = game.currentShape.sides;

  clueMessage.innerText =
    `💡 Match ${sides} dots to complete the ${game.currentShape.id}`;


  const shapeCanvas =
    document.getElementById("shapeCanvas");


  clueMessage.classList.remove("hidden");

  shapeCanvas.classList.add("clue-highlight");


  setTimeout(() => {

    clueMessage.classList.add("hidden");

    shapeCanvas.classList.remove("clue-highlight");

  }, 2000);


  settingsMenu.classList.add("hidden");

});


// Retry
retryBtn.addEventListener("click", () => {


  game.resetSelection();


  game.dots.forEach(dot => {

    dot.selected = false;

  });


  settingsMenu.classList.add("hidden");


});


// Share
shareBtn.addEventListener("click", async () => {


  const shareData = {

    title: "Shape Game",

    text: "Try this Shape Game!",

    url: window.location.href

  };


  try {


    if (navigator.share) {

      await navigator.share(shareData);


    } else {


      await navigator.clipboard.writeText(
        window.location.href
      );


      alert("Link copied!");

    }


  } catch (error) {

    console.log(error);

  }


  settingsMenu.classList.add("hidden");


});
const soundBtn = document.getElementById("sound-btn");


soundBtn.addEventListener("click", () => {

  toggleSound();


  soundBtn.innerHTML =
    soundEnabled ? "🔊" : "🔇";

});