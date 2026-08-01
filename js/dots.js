export class Dot {
  constructor(x, y, radius = 8) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.selected = false;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    ctx.fillStyle = this.selected ? "#ff4757" : "#111";
    ctx.fill();

    ctx.closePath();
  }

  isClicked(mouseX, mouseY) {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance <= this.radius + 8;
  }
}

export function generateDotGrid(width, height, level = 1) {

  const dots = [];


  const rows = 8 + level * 2;
  const cols = 6 + level * 2;


  const marginX = width * 0.12;
  const marginY = height * 0.12;


  const gapX =
    (width - marginX * 2) / (cols - 1);


  const gapY =
    (height - marginY * 2) / (rows - 1);


  for (let row = 0; row < rows; row++) {

    for (let col = 0; col < cols; col++) {

      dots.push(
        new Dot(
          marginX + col * gapX,
          marginY + row * gapY
        )
      );

    }

  }


  return dots;

}