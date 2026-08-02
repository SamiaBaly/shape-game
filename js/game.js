import { getRandomShape } from "./shapes.js";


function updateUI(game) {

  const score =
    document.getElementById("score");

  const level =
    document.getElementById("level");


  if (score) {
    score.innerText = game.score;
  }

  if (level) {
    level.innerText = game.level;
  }

}
function showLevelMessage(level, score) {

  const message = document.createElement("div");

  message.className = "level-message";


  message.innerHTML = `
    🎉 Level ${level} Complete! <br>
    ⭐ Score: ${score}
  `;


  document.body.appendChild(message);


  setTimeout(() => {

    message.remove();

  }, 1500);

}
function showLevelPopup(level, score) {

  const popup = document.getElementById("level-popup");
  const title = document.getElementById("popup-title");
  const scoreText = document.getElementById("popup-score");

  title.innerText = `🎉 Level ${level} Complete!`;
  scoreText.innerText = `Score: ${score}`;

  popup.classList.remove("hidden");

}



export const game = {

  score: 0,
  level: 1,
  waitingForNextLevel: false,
  completedShapes: 0,
  levelCompletedShapes: 0,

  onShapeComplete: null,

  currentShape: getRandomShape(1),

  dots: [],
  selectedDots: [],
  lines: [],
  currentMouse: null,
  targetPoints: [],

  isClosed: false,
  
  showClue() {

    // আগে সব highlight বন্ধ
    this.dots.forEach(dot => {
      dot.highlight = false;
    });


    // target point অনুযায়ী nearest dot খোঁজা
    this.targetPoints.forEach(point => {

      let nearestDot = null;
      let minDistance = Infinity;


      this.dots.forEach(dot => {

        const dx = dot.x - point.x;
        const dy = dot.y - point.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );


        if (distance < minDistance) {

          minDistance = distance;
          nearestDot = dot;

        }

      });


      if (nearestDot) {

        nearestDot.highlight = true;

      }

    });


    setTimeout(() => {

      this.dots.forEach(dot => {
        dot.highlight = false;
      });


    }, 2000);

  },

  checkShapeComplete() {


    if (!this.isClosed) {
      return false;
    }


    if (
      this.selectedDots.length !== this.currentShape.sides ||
      this.lines.length !== this.currentShape.sides
    ) {

      return false;

    }



    if (this.compareShape()) {

      console.log("Shape Matched!");

      this.completeShape();

      return true;

    }


    console.log("Wrong Shape!");

    this.resetSelection();

    return false;

  },



  compareShape() {


    const sides = this.selectedDots.length;


    if (sides !== this.currentShape.sides) {
      return false;
    }


    return true;

  },



  resetSelection() {


    this.lines = [];


    this.selectedDots.forEach(dot => {

      dot.selected = false;

    });


    this.selectedDots = [];

    this.isClosed = false;

  },

  completeShape() {

    this.score += 10;

    // Current level progress
    this.levelCompletedShapes++;

    console.log(
      "Score:",
      this.score,
      "Level:",
      this.level,
      "Progress:",
      this.levelCompletedShapes
    );

    updateUI(this);

    // Current level complete (4 shapes)
    if (this.levelCompletedShapes >= 4) {

      this.waitingForNextLevel = true;

      this.resetSelection();

      this.currentMouse = null;

      this.dots.forEach(dot => {
        dot.selected = false;
      });

      updateUI(this);

      showLevelPopup(this.level, this.score);

      return;
    }

    setTimeout(() => {

      this.resetSelection();

      this.dots.forEach(dot => {
        dot.selected = false;
      });

      this.currentShape = getRandomShape(this.level);

      if (this.onShapeComplete) {
        this.onShapeComplete();
      }

    }, 700);

  }
  


};
const nextLevelBtn = document.getElementById("next-level-btn");

nextLevelBtn.addEventListener("click", () => {

  game.level++;

  game.levelCompletedShapes = 0;

  game.waitingForNextLevel = false;

  document
    .getElementById("level-popup")
    .classList
    .add("hidden");

  updateUI(game);

  game.currentShape = getRandomShape(game.level);

  if (game.onShapeComplete) {
    game.onShapeComplete();
  }

});