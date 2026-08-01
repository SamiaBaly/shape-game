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
  {
    id: "heptagon",
    sides: 7,
  },
  {
    id: "octagon",
    sides: 8,
  },
  {
    id: "nonagon",
    sides: 9,
  },
  {
    id: "decagon",
    sides: 10,
  },
];


export function generatePoints(
  sides,
  width,
  height
) {

  const centerX = width / 2;
  const centerY = height / 2;

  const radius = Math.min(width, height) / 3;

  const points = [];


  for (let i = 0; i < sides; i++) {

    const angle =
      (Math.PI * 2 * i) / sides - Math.PI / 2;


    points.push({

      x: centerX + radius * Math.cos(angle),

      y: centerY + radius * Math.sin(angle)

    });

  }


  return points;
}



export function getRandomShape() {

  const randomIndex =
    Math.floor(Math.random() * SHAPES.length);


  const shape = SHAPES[randomIndex];


  return {

    ...shape,

    // gameCanvas coordinate
    points: generatePoints(
      shape.sides,
      1080,
      1480
    )

  };

}



export function drawShape(
  ctx,
  width,
  height,
  sides
) {


  const points = generatePoints(
    sides,
    width,
    height
  );


  ctx.clearRect(
    0,
    0,
    width,
    height
  );


  ctx.beginPath();


  points.forEach((point, index) => {

    if (index === 0) {

      ctx.moveTo(
        point.x,
        point.y
      );

    } else {

      ctx.lineTo(
        point.x,
        point.y
      );

    }

  });


  ctx.closePath();


  ctx.lineWidth = 4;
  ctx.strokeStyle = "#222";

  ctx.stroke();

}