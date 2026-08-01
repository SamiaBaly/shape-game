import { getRandomShape } from "./shapes.js";

export const game = {

  score: 0,

  currentShape: {
    sides: 3
  },

  dots: [],
  selectedDots: [],
  lines: [],

  isClosed: false,


  checkShapeComplete() {

    if (!this.isClosed) {
      return false;
    }


    if (
      this.selectedDots.length === this.currentShape.sides &&
      this.lines.length === this.currentShape.sides
    ) {

      console.log("Shape Completed!");

      this.completeShape();

      return true;
    }


    return false;
  },


  completeShape() {

    this.score += 10;

    console.log("Score:", this.score);



    // reset selected data
    this.selectedDots = [];
    this.lines = [];
    this.isClosed = false;



    // reset dots selection
    this.dots.forEach(dot => {
      dot.selected = false;
    });



    // Generate next shape
    this.currentShape = getRandomShape();


    console.log(
      "Next Shape:",
      this.currentShape.sides
    );

  }

};