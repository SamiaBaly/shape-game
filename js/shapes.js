export const SHAPES = [
  // ---------- Level 1 ----------
  {
    id: 1,
    level: 1,
    difficulty: "easy",
    name: "Triangle",
    pattern: [10,22,26]
  },
  {
    id: 2,
    level: 1,
    difficulty: "easy",
    name: "Square",
    pattern: [8,11,32,29]
  },
  {
    id: 3,
    level: 1,
    difficulty: "easy",
    name: "Rectangle",
    pattern: [8,12,26,22]
  },
  {
    id: 4,
    level: 1,
    difficulty: "easy",
    name: "Diamond",
    pattern: [3,19,31,15]
  },

  // ---------- Level 2 ----------
  {
    id: 5,
    level: 2,
    difficulty: "easy",
    name: "Pentagon",
    pattern: [3,8,23,25,12]
  },
  {
    id: 6,
    level: 2,
    difficulty: "easy",
    name: "Hexagon",
    pattern: [9,21,37,39,27,11]
  },
  {
    id: 7,
    level: 2,
    difficulty: "easy",
    name: "Heptagon",
    pattern: [3,8,21,37,39,27,12]
  },
  {
    id: 8,
    level: 2,
    difficulty: "easy",
    name: "Octagon",
    pattern: [2,8,22,30,32,26,12,4]
  },

  // ---------- Level 3 ----------
  {
    id: 9,
    level: 3,
    difficulty: "easy",
    name: "Arrow",
    pattern: [14,18,10,11,19,26,32,31,25,21]
  },
  {
    id: 10,
    level: 3,
    difficulty: "easy",
    name: "Star",
    pattern: [3,18,27,32,45,30,21,16]
  },
  {
    id: 11,
    level: 3,
    difficulty: "medium",
    name: "Heart",
    pattern: [17,11,12,20,27,45,21,14,8,9]
  },
  {
    id: 12,
    level: 3,
    difficulty: "medium",
    name: "kite",
    pattern: [3,15,31,39,37,19]
  },

  // ---------- Level 4 ----------
  {
    id: 13,
    level: 4,
    difficulty: "medium",
    name: "House",
    pattern: [3,14,15,36,35,42,48,41,40,19,20]
  },
  {
    id: 14,
    level: 4,
    difficulty: "medium",
    name: "Tree",
    pattern: [3,15,16,22,23,29,30,44,46,30,32,33,25,26,18,19]
  },
  {
    id: 15,
    level: 4,
    difficulty: "medium",
    name: "Rocket",
    pattern: [16,3,18,39,47,43,37]
  },
  {
    id: 16,
    level: 4,
    difficulty: "medium",
    name: "Leaf",
    pattern: [16,3,18,24,38,37,23]
  },

];


let lastShapeId = null;

export function getRandomShape(level) {

  const start = (level - 1) * 4;
  const end = start + 4;

  let availableShapes = SHAPES.slice(start, end);

  // যদি level বেশি হয়, সব shape থেকে নেবে
  if (availableShapes.length === 0) {
    availableShapes = SHAPES;
  }

  // একই shape যেন পরপর না আসে
  let shape;

  do {
    shape =
      availableShapes[
      Math.floor(Math.random() * availableShapes.length)
      ];
  } while (
    availableShapes.length > 1 &&
    shape.id === lastShapeId
  );

  lastShapeId = shape.id;

  return shape;
}

export function getShapePoints(shape, dots) {

  const points = shape.pattern.map(dotId => ({
    x: dots[dotId].x,
    y: dots[dotId].y
  }));

  // Bounding box
  const minX = Math.min(...points.map(p => p.x));
  const maxX = Math.max(...points.map(p => p.x));
  const minY = Math.min(...points.map(p => p.y));
  const maxY = Math.max(...points.map(p => p.y));

  const shapeWidth = maxX - minX;
  const shapeHeight = maxY - minY;

  // 300x300 canvas এর জন্য margin
  const scale = Math.min(
    220 / shapeWidth,
    220 / shapeHeight
  );

  return points.map(p => ({
    x: (p.x - minX) * scale + (300 - shapeWidth * scale) / 2,
    y: (p.y - minY) * scale + (300 - shapeHeight * scale) / 2
  }));

}


export function drawShape(
  
  ctx,
  width,
  height,
  points
  
) {
  
  console.log(points);
 

  if (!points || points.length === 0) {
    return;
  }

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
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  ctx.strokeStyle = "#ffffff";

  ctx.stroke();

}