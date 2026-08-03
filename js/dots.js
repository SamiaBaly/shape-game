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
    if (this.highlight) {

      ctx.shadowColor = "#38BDF8";
      ctx.shadowBlur = 30;

    }

    if (this.selected) {
      ctx.fillStyle = "#ff4757";
    } else {
      ctx.fillStyle = "#ffffff";
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

    // Click area একটু বড়
    return distance <= this.radius + 15;
  }
}

export function generateDotGrid(width, height) {

  const dots = [];

  const rows = 7;
  const cols = 7;

  const radius = 8;

  const boardWidth = width * 0.78;
  const boardHeight = height * 0.72;

  const startX = (width - boardWidth) / 2;
  const startY = 70;

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