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



export const game = {

  score: 0,
  level: 1,
  completedShapes: 0,

  onShapeComplete: null,

  currentShape: getRandomShape(1),

  dots: [],
  selectedDots: [],
  lines: [],

  isClosed: false,


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

    this.completedShapes++;



    // 4টা shape complete হলে level up
    if (
      this.completedShapes >= 4 &&
      this.level === 1
    ) {

      this.level = 2;

    }



    // 8টা complete হলে level 3
    if (
      this.completedShapes >= 8 &&
      this.level === 2
    ) {

      this.level = 3;

    }



    console.log(
      "Score:",
      this.score,
      "Level:",
      this.level,
      "Completed:",
      this.completedShapes
    );



    updateUI(this);



    setTimeout(() => {


      this.resetSelection();



      this.dots.forEach(dot => {

        dot.selected = false;

      });



      // নতুন shape
      this.currentShape =
        getRandomShape(this.level);



      console.log(
        "New Shape:",
        this.currentShape.id,
        "Level:",
        this.level
      );



      if (this.onShapeComplete) {

        this.onShapeComplete();

      }



    }, 700);


  }


};