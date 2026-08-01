export const SHAPES = [
  {
    id: "triangle",
    sides: 3,
    level: 1,
  },
  {
    id: "square",
    sides: 4,
    level: 1,
  },
  {
    id: "pentagon",
    sides: 5,
    level: 1,
  },
  {
    id: "hexagon",
    sides: 6,
    level: 2,
  },
  {
    id: "heptagon",
    sides: 7,
    level: 2,
  },
  {
    id: "octagon",
    sides: 8,
    level: 3,
  },
  {
    id: "nonagon",
    sides: 9,
    level: 3,
  },
  {
    id: "decagon",
    sides: 10,
    level: 3,
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



export function getRandomShape(level = 1) {

  const availableShapes =
    SHAPES.filter(
      shape => shape.level === level
    );


  const randomIndex =
    Math.floor(
      Math.random() * availableShapes.length
    );


  const shape =
    availableShapes[randomIndex];


  return {

    ...shape,

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