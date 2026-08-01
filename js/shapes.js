export function drawPentagon(ctx, width, height) {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 90;

  ctx.clearRect(0, 0, width, height);

  ctx.beginPath();

  for (let i = 0; i < 5; i++) {
    const angle = ((Math.PI * 2) / 5) * i - Math.PI / 2;

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.closePath();

  ctx.lineWidth = 6;
  ctx.strokeStyle = "#222";

  ctx.stroke();
}