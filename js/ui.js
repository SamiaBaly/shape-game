import { game } from "./game.js";


// Home
const homeBtn = document.getElementById("home-btn");

if (homeBtn) {

  homeBtn.addEventListener("click", () => {

    window.location.href = "./index.html";

  });

}


// Undo
const undoBtn = document.getElementById("undo-btn");

if (undoBtn) {

  undoBtn.addEventListener("click", () => {

    game.resetSelection();

  });

}


// New Game
const newGameBtn = document.getElementById("newgame-btn");

if (newGameBtn) {

  newGameBtn.addEventListener("click", () => {

    location.reload();

  });

}


// Share
const shareBtn = document.getElementById("share-btn");

if (shareBtn) {

  shareBtn.addEventListener("click", async () => {


    const shareData = {

      title: "Shape Game",

      text: "Try this Shape Game!",

      url: window.location.href

    };


    try {

      if (navigator.share) {

        await navigator.share(shareData);

      }
      else {

        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Link copied!");

      }


    } catch (error) {

      console.log(error);

    }


  });

}


// Info
const infoBtn = document.getElementById("info-btn");
const infoPopup = document.getElementById("info-popup");
const closeInfo = document.getElementById("close-info");


if (infoBtn) {

  infoBtn.addEventListener("click", () => {

    infoPopup.classList.remove("hidden");

  });

}


if (closeInfo) {

  closeInfo.addEventListener("click", () => {

    infoPopup.classList.add("hidden");

  });

}