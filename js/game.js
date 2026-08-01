import { getRandomShape } from "./shapes.js";

export const game = {

  score: 0,
  onShapeComplete: null,

  currentShape: getRandomShape(),

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

    return false;
  },


  compareShape() {

    if (
      this.selectedDots.length === this.currentShape.sides &&
      this.lines.length === this.currentShape.sides
    ) {

      return true;

    }


    return false;

  },
  getArea(points) {

    let area = 0;


    for (let i = 0; i < points.length; i++) {

      const next =
        (i + 1) % points.length;


      area +=
        points[i].x * points[next].y -
        points[next].x * points[i].y;

    }


    return Math.abs(area / 2);

  },


  completeShape() {

    this.score += 10;

    console.log("Score:", this.score);


    this.selectedDots = [];
    this.lines = [];
    this.isClosed = false;


    this.dots.forEach(dot => {
      dot.selected = false;
    });


    this.currentShape = getRandomShape();


    console.log(
      "Next Shape:",
      this.currentShape
    );


    if (this.onShapeComplete) {
      this.onShapeComplete();
    }

  }

};