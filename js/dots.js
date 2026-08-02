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

export function generateDotGrid(width, height, level = 1) {

  const dots = [];

  // Infinite level difficulty
  let rows = 5 + Math.floor(level / 2);
  let cols = 5 + Math.floor(level / 3);

  // Maximum limit
  rows = Math.min(rows, 15);
  cols = Math.min(cols, 10);

  const radius = Math.max(14, 25 - Math.floor(level / 2));

  // Padding
  const marginX = radius + 30;
  const marginY = radius + 70;

  const availableWidth = width - marginX * 2;
  const availableHeight = height - marginY * 2;

  const gapX =
    cols > 1
      ? availableWidth / (cols - 1)
      : 0;

  const gapY =
    rows > 1
      ? availableHeight / (rows - 1)
      : 0;
  const pattern = Math.floor(Math.random() * 3);

  for (let row = 0; row < rows; row++) {

    for (let col = 0; col < cols; col++) {

      let x = marginX + col * gapX;
      let y = marginY + row * gapY;

      // Zigzag / Honeycomb Layout
      if (row % 2 === 1) {
        x += gapX / 2;
      }

      dots.push(
        new Dot(
          x,
          y,
          radius
        )
      );

    }

  }

  return dots;

}