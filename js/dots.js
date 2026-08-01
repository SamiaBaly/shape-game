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

    ctx.fillStyle = this.selected ? "#2196F3" : "#000";
    ctx.fill();

    ctx.closePath();
  }
}