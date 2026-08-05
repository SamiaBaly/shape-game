export class Dot {

  constructor(x, y, radius = 25) {

    this.x = x;
    this.y = y;
    this.radius = radius;

    this.selected = false;
    this.highlight = false;

  }


  draw(ctx) {

    ctx.beginPath();

    ctx.arc(
      this.x,
      this.y,
      this.radius,
      0,
      Math.PI * 2
    );


    if (this.selected) {

      ctx.fillStyle = "#22C55E";

      ctx.shadowColor = "#22C55E";
      ctx.shadowBlur = 20;


    }
    else if (this.highlight) {

      ctx.fillStyle = "#FFD54A";

      ctx.shadowColor = "#FFD54A";
      ctx.shadowBlur = 25;


    }
    else {

      ctx.fillStyle = "#FFFFFF";

    }


    ctx.fill();

    ctx.shadowBlur = 0;

    ctx.closePath();

  }



  isClicked(mouseX, mouseY) {

    const dx = this.x - mouseX;
    const dy = this.y - mouseY;

    const distance = Math.sqrt(
      dx * dx + dy * dy
    );

    return distance <= this.radius + 15;

  }

}



export function generateDotGrid(width, height, level = 1) {


  const dots = [];


  let rows;
  let cols;


  if (level <= 3) {

    rows = 7;
    cols = 7;

  }
  else if (level <= 6) {

    rows = 7;
    cols = 7;

  }
  else if (level <= 10) {

    rows = 8;
    cols = 8;

  }
  else {

    rows = 9;
    cols = 9;

  }



  const screenWidth = window.innerWidth;


  let radius;
  let boardWidth;
  let boardHeight;
  let startY;



  if (screenWidth <= 768) {

    radius = 8;

    boardWidth = width * 0.72;

    boardHeight = height * 0.50;

    startY = 90;


  }
  else if (screenWidth <= 1200) {

    radius = 8;

    boardWidth = width * 0.68;

    boardHeight = height * 0.68;

    startY = 120;


  }
  else {

    radius = 10;

    boardWidth = width * 0.80;

    boardHeight = height * 0.60;

    startY = 100;

  }



  const startX = (width - boardWidth) / 2;


  const gapX = boardWidth / (cols - 1);

  const gapY = boardHeight / (rows - 1);



  for (let row = 0; row < rows; row++) {


    for (let col = 0; col < cols; col++) {


      dots.push(

        new Dot(

          startX + col * gapX,

          startY + row * gapY,

          radius

        )

      );


    }

  }



  return dots;

}