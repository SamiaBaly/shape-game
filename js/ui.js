import { game } from "./game.js";

const settingsBtn =
  document.getElementById("settings-btn");

const settingsMenu =
  document.getElementById("settings-menu");


const homeBtn =
  document.getElementById("home-btn");

const clueBtn =
  document.getElementById("clue-btn");

const retryBtn =
  document.getElementById("retry-btn");

const shareBtn =
  document.getElementById("share-btn");



// Settings open close
settingsBtn.addEventListener(
  "click",
  () => {

    settingsMenu.classList.toggle(
      "hidden"
    );

  }
);



// Home
homeBtn.addEventListener(
  "click",
  () => {

    location.reload();

  }
);



// Clue
clueBtn.addEventListener(
  "click",
  () => {

    alert(
      `Make a ${game.currentShape.id}`
    );

  }
);



// Retry
retryBtn.addEventListener(
  "click",
  () => {


    game.selectedDots = [];

    game.lines = [];

    game.isClosed = false;


    game.dots.forEach(dot => {

      dot.selected = false;

    });


    location.reload();


  }
);



// Share
shareBtn.addEventListener(
  "click",
  async () => {


    const shareData = {

      title: "Shape Game",

      text: "Try this Shape Game!",

      url: window.location.href

    };



    try {


      if (navigator.share) {

        await navigator.share(
          shareData
        );

      }
      else {

        await navigator.clipboard.writeText(
          window.location.href
        );


        alert(
          "Link copied!"
        );

      }


    }
    catch (error) {

      console.log(error);

    }


  }
);