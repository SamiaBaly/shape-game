let dotId = 0;

export class Dot {

  constructor(x, y, radius = 25) {

    this.id = dotId++;

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.selected = false;
    this.highlight = false;
    this.clue = null;
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

    if (this.highlight) {

      ctx.shadowColor = "#38BDF8";
      ctx.shadowBlur = 30;

    }

    if (this.selected) {

      ctx.fillStyle = "#22C55E"; // Green

      ctx.shadowColor = "#22C55E";
      ctx.shadowBlur = 20;

    } else if (this.highlight) {

      ctx.fillStyle = "#FFD54A";

      ctx.shadowColor = "#FFD54A";
      ctx.shadowBlur = 25;

    } else {

      ctx.fillStyle = "#FFFFFF";

    }

    ctx.fill();

    ctx.shadowBlur = 0;

    ctx.closePath();
    ctx.fillStyle = "#000";

    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (this.clue !== null) {

      const pulse =
        1 + Math.sin(Date.now() * 0.01) * 0.2;

      ctx.save();

      // Glow
      ctx.shadowColor = "#FFD700";
      ctx.shadowBlur = 25;

      // Animated outer circle
      ctx.beginPath();
      ctx.fillStyle = "#FFA500";
      ctx.arc(
        this.x,
        this.y,
        this.radius * 2.8 * pulse,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // White inner circle
      ctx.beginPath();
      ctx.fillStyle = "#FFFFFF";
      ctx.arc(
        this.x,
        this.y,
        this.radius * 2.2,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Number
      ctx.fillStyle = "#000";
      ctx.font = `bold ${40 * pulse}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(
        this.clue,
        this.x,
        this.y
      );

      ctx.restore();

    }
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

  dotId = 0;

  const dots = [];

  let rows;
  let cols;

  // level অনুযায়ী grid increase
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

  let radius, boardWidth, boardHeight, startY;

  if (screenWidth <= 768) {
    // Mobile
    radius = 8;
    boardWidth = width * 0.72;
    boardHeight = height * 0.55;
    startY = 90;

  } else if (screenWidth <= 1200) {
    // Tablet / Medium
    radius = 8;

    boardWidth = width * 0.68;
    boardHeight = height * 0.42;

    startY = 30;
  } else {
    // Large Desktop
    radius = 8;
    boardWidth = width * 0.72;
    boardHeight = height * 0.45;
    startY = 45;
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