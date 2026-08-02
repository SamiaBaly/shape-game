export const SHAPES = [
  {
    id: "triangle",
    sides: 3,
    level: 1
  },
  {
    id: "square",
    sides: 4,
    level: 2
  },
  {
    id: "pentagon",
    sides: 5,
    level: 3
  },
  {
    id: "hexagon",
    sides: 6,
    level: 4
  },
  {
    id: "heptagon",
    sides: 7,
    level: 5
  },
  {
    id: "octagon",
    sides: 8,
    level: 6
  },
  {
    id: "nonagon",
    sides: 9,
    level: 7
  },
  {
    id: "decagon",
    sides: 10,
    level: 8
  }
];


let lastShapeId = null;



export function generatePoints(
  sides,
  width,
  height
) {


  const centerX = width / 2;
  const centerY = height / 2;


  const radius =
    Math.min(width, height) / 3;


  const points = [];



  for (let i = 0; i < sides; i++) {


    const angle =
      (Math.PI * 2 * i) / sides -
      Math.PI / 2;



    points.push({

      x:
        centerX +
        radius * Math.cos(angle),


      y:
        centerY +
        radius * Math.sin(angle)

    });


  }


  return points;

}




export function getRandomShape(level) {

  let availableShapes;

  if (level <= 8) {
    // প্রতি level এ 4টি consecutive shape
    availableShapes = SHAPES.slice(level - 1, level + 3);

    // যদি 4টির কম থাকে, শুরু থেকে পূরণ করবে
    while (availableShapes.length < 4) {
      availableShapes.unshift(
        SHAPES[availableShapes.length % SHAPES.length]
      );
    }
  } else {
    // Level 9+ এ সব shape random
    availableShapes = SHAPES;
  }

  return availableShapes[
    Math.floor(Math.random() * availableShapes.length)
  ];
}




export function drawShape(
  ctx,
  width,
  height,
  points
) {


  ctx.clearRect(
    0,
    0,
    width,
    height
  );



  ctx.beginPath();



  points.forEach(
    (point, index) => {


      if (index === 0) {

        ctx.moveTo(
          point.x,
          point.y
        );

      }
      else {

        ctx.lineTo(
          point.x,
          point.y
        );

      }


    }
  );



  ctx.closePath();



  ctx.lineWidth = 8;

  ctx.strokeStyle = "#ffffff";

  ctx.stroke();


}