export const SHAPES = [
  {
    id: "triangle",
    sides: 3,
  },
  {
    id: "square",
    sides: 4,
  },
  {
    id: "pentagon",
    sides: 5,
  },
  {
    id: "hexagon",
    sides: 6,
  },
];

export function getRandomShape() {
  const randomIndex = Math.floor(Math.random() * SHAPES.length);
  return SHAPES[randomIndex];
}

export function drawShape(ctx, width, height, sides) {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 80;

  ctx.clearRect(0, 0, width, height);

  ctx.beginPath();

  for (let i = 0; i < sides; i++) {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.closePath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#222";
  ctx.stroke();
}