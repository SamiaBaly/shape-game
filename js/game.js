import { getRandomShape } from "./shapes.js";

export const game = {

  score: 0,
  level: 1,
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

    // remove lines
    this.lines = [];

    // remove selected dots
    this.selectedDots.forEach(dot => {
      dot.selected = false;
    });

    this.selectedDots = [];

    this.isClosed = false;


    return false;
  },


  compareShape() {

    const sides = this.selectedDots.length;

    if (sides !== this.currentShape.sides) {
      return false;
    }


    const points = [...this.selectedDots];


    const centerX =
      points.reduce((sum, p) => sum + p.x, 0) / sides;

    const centerY =
      points.reduce((sum, p) => sum + p.y, 0) / sides;


    points.sort((a, b) => {

      return (
        Math.atan2(a.y - centerY, a.x - centerX) -
        Math.atan2(b.y - centerY, b.x - centerX)
      );

    });


    const lengths = [];


    for (let i = 0; i < sides; i++) {

      const next = (i + 1) % sides;

      const dx = points[i].x - points[next].x;
      const dy = points[i].y - points[next].y;

      lengths.push(
        Math.sqrt(dx * dx + dy * dy)
      );

    }


    const avg =
      lengths.reduce((a, b) => a + b, 0) / sides;


    return lengths.every(length =>
      Math.abs(length - avg) < avg * 0.5
    );

  },
  findNearestDots() {

    return this.currentShape.points.map(point => {

      let nearest = null;
      let minDistance = Infinity;


      this.dots.forEach(dot => {

        const distance =
          Math.sqrt(
            (dot.x - point.x) ** 2 +
            (dot.y - point.y) ** 2
          );


        if (distance < minDistance) {

          minDistance = distance;
          nearest = dot;

        }

      });


      return nearest;

    });

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
    if (this.score >= 50) {
      this.level = 2;
    }

    if (this.score >= 100) {
      this.level = 3;
    }

    console.log("Score:", this.score);


    setTimeout(() => {

      this.selectedDots = [];
      this.lines = [];
      this.isClosed = false;


      this.dots.forEach(dot => {
        dot.selected = false;
      });


      this.currentShape = getRandomShape(this.level);
      console.log(
        "New Shape:",
        this.currentShape.id,
        "Sides:",
        this.currentShape.sides,
        "Level:",
        this.level
      );


      if (this.onShapeComplete) {
        this.onShapeComplete();
      }

    }, 700);


  }

};