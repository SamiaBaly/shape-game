import { getRandomShape } from "./shapes.js";
import { playCorrect, playWrong } from "./audio.js";

function showWrongPopup() {
  playWrong();

  document
    .getElementById("wrong-popup")
    .classList.remove("hidden");

}
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
  selectedPattern: [],
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

    const total = this.currentShape.pattern.length;

    if (
      this.selectedPattern.length !== total ||
      this.lines.length !== total
    ) {
      return false;
    }

    if (this.compareShape()) {

      console.log("Shape Matched!");

      // Green lines
      this.lines.forEach(line => {
        line.correct = true;
      });

      // Redraw so green appears
      if (this.onShapeComplete) {
        // শুধু redraw এর জন্য
      }

      // একটু delay দিয়ে popup/next
      setTimeout(() => {
        this.completeShape();
      }, 500);

      return true;
    }

    console.log("Wrong Shape!");

    // Red lines
    this.lines.forEach(line => {
      line.correct = false;
    });

    // 800ms পরে reset
    // popup দেখাও
    setTimeout(() => {
      showWrongPopup();
    }, 400);

    return false;
  },



  compareShape() {
    console.log("Target:", this.currentShape.pattern);
    console.log("Player:", this.selectedPattern);

    const target = this.currentShape.pattern;
    const player = this.selectedPattern;

    if (target.length !== player.length) {
      return false;
    }

    return target.every((dotId, index) => dotId === player[index]);

  },



  resetSelection() {

    this.lines = [];

    this.selectedDots.forEach(dot => {

      dot.selected = false;

    });

    this.selectedDots = [];
    this.selectedPattern = [];

    this.isClosed = false;

  },

  completeShape() {
    playCorrect();

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
    this.resetSelection();

    this.currentShape = getRandomShape(this.level);

    if (this.onShapeComplete) {
      this.onShapeComplete();
    }

  }
  


};
const nextLevelBtn = document.getElementById("next-level-btn");
nextLevelBtn.addEventListener("click", () => {
  console.log("Retry Clicked");

  document
    .getElementById("level-popup")
    .classList.add("hidden");

  game.level++;
  game.levelCompletedShapes = 0;
  game.waitingForNextLevel = false;

  game.resetSelection();

  game.currentShape = getRandomShape(game.level);

  updateUI(game);

  if (game.onShapeComplete) {
    game.onShapeComplete();
  }

});

const retryBtn = document.getElementById("level-retry-btn");
retryBtn.addEventListener("click", () => {

  console.log("Retry Clicked");

  document
    .getElementById("level-popup")
    .classList.add("hidden");

  game.waitingForNextLevel = false;
  game.levelCompletedShapes = 0;

  game.resetSelection();

  game.currentMouse = null;

  game.currentShape = getRandomShape(game.level);

  // শুধু redraw করো
  if (game.onShapeComplete) {
    setTimeout(() => {
      game.onShapeComplete();
    }, 50);
  }

});
document
  .getElementById("wrong-retry-btn")
  .addEventListener("click", () => {

    document
      .getElementById("wrong-popup")
      .classList.add("hidden");

    game.resetSelection();

    if (game.onShapeComplete) {
      game.onShapeComplete();
    }

  });
