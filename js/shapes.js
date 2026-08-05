export const SHAPES = [

  // ---------- Level 1 ----------
  {
    id: 1,
    level: 1,
    difficulty: "easy",
    name: "Triangle",
    geometry: [
      { x: 0, y: -1 },
      { x: -1, y: 1 },
      { x: 1, y: 1 }
    ]
  },

  {
    id: 2,
    level: 1,
    difficulty: "easy",
    name: "Square",
    geometry: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
      { x: -1, y: 1 }
    ]
  },

  {
    id: 3,
    level: 1,
    difficulty: "easy",
    name: "Rectangle",
    geometry: [
      { x: -1.5, y: -1 },
      { x: 1.5, y: -1 },
      { x: 1.5, y: 1 },
      { x: -1.5, y: 1 }
    ]
  },

  {
    id: 4,
    level: 1,
    difficulty: "easy",
    name: "Diamond",
    geometry: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 }
    ]
  },


  // ---------- Level 2 ----------
  {
    id: 5,
    level: 2,
    difficulty: "easy",
    name: "Pentagon",
    geometry: [
      { x: 0, y: -1 },
      { x: 1, y: -0.3 },
      { x: 0.6, y: 1 },
      { x: -0.6, y: 1 },
      { x: -1, y: -0.3 }
    ]
  },


  {
    id: 6,
    level: 2,
    difficulty: "easy",
    name: "Hexagon",
    geometry: [
      { x: -0.5, y: -1 },
      { x: 0.5, y: -1 },
      { x: 1, y: 0 },
      { x: 0.5, y: 1 },
      { x: -0.5, y: 1 },
      { x: -1, y: 0 }
    ]
  },


  {
    id: 7,
    level: 2,
    difficulty: "easy",
    name: "Heptagon",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.8, y: -0.5 },
      { x: 1, y: 0.5 },
      { x: 0.4, y: 1 },
      { x: -0.5, y: 1 },
      { x: -1, y: 0.2 },
      { x: -0.8, y: -0.5 }
    ]
  },


  {
    id: 8,
    level: 2,
    difficulty: "easy",
    name: "Octagon",
    geometry: [
      { x: -0.5, y: -1 },
      { x: 0.5, y: -1 },
      { x: 1, y: -0.5 },
      { x: 1, y: 0.5 },
      { x: 0.5, y: 1 },
      { x: -0.5, y: 1 },
      { x: -1, y: 0.5 },
      { x: -1, y: -0.5 }
    ]
  },


  // ---------- Level 3 ----------
  {
    id: 9,
    level: 3,
    difficulty: "easy",
    name: "Arrow",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.4, y: -0.3 },
      { x: 1, y: -0.3 },
      { x: 0.5, y: 0.3 },
      { x: 0.8, y: 1 },
      { x: 0, y: 0.6 },
      { x: -0.8, y: 1 },
      { x: -0.5, y: 0.3 },
      { x: -1, y: -0.3 },
      { x: -0.4, y: -0.3 }
    ]
  },


  {
    id: 10,
    level: 3,
    difficulty: "easy",
    name: "Star",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.3, y: -0.3 },
      { x: 1, y: -0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.8, y: 1 },
      { x: 0, y: 0.6 },
      { x: -0.8, y: 1 },
      { x: -0.5, y: 0.2 }
    ]
  },


  {
    id: 11,
    level: 3,
    difficulty: "medium",
    name: "Heart",
    geometry: [
      { x: -1, y: -0.5 },
      { x: -0.5, y: -1 },
      { x: 0, y: -0.5 },
      { x: 0.5, y: -1 },
      { x: 1, y: -0.5 },
      { x: 0.8, y: 0.4 },
      { x: 0, y: 1 },
      { x: -0.8, y: 0.4 }
    ]
  },


  {
    id: 12,
    level: 3,
    difficulty: "medium",
    name: "Kite",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.8, y: 0 },
      { x: 0.5, y: 1 },
      { x: -0.5, y: 1 },
      { x: -0.8, y: 0 }
    ]
  },


  // ---------- Level 4 ----------
  {
    id: 13,
    level: 4,
    difficulty: "medium",
    name: "House",
    geometry: [
      { x: 0, y: -1 },
      { x: 1, y: -0.2 },
      { x: 1, y: 1 },
      { x: -1, y: 1 },
      { x: -1, y: -0.2 }
    ]
  },


  {
    id: 14,
    level: 4,
    difficulty: "medium",
    name: "Tree",
    geometry: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0.5, y: 0 },
      { x: 0.8, y: 0.5 },
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 1 },
      { x: -0.5, y: 1 },
      { x: -0.3, y: 0.5 },
      { x: -0.8, y: 0.5 },
      { x: -0.5, y: 0 },
      { x: -1, y: 0 }
    ]
  },


  {
    id: 15,
    level: 4,
    difficulty: "medium",
    name: "Rocket",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.6, y: 0 },
      { x: 0.8, y: 1 },
      { x: 0, y: 0.6 },
      { x: -0.8, y: 1 },
      { x: -0.6, y: 0 }
    ]
  },


  {
    id: 16,
    level: 4,
    difficulty: "medium",
    name: "Leaf",
    geometry: [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0.5, y: 1 },
      { x: -0.5, y: 1 },
      { x: -1, y: 0 }
    ]
  },
  // ---------- Level 5 ----------
  {
    id: 15,
    level: 5,
    difficulty: "medium",
    name: "Custom Shape",
    geometry: [
      { x: 0.6, y: -0.6 },
      { x: 1, y: -0.6 },
      { x: 1, y: -0.2 },
      { x: -0.2, y: 1 },
      { x: -0.6, y: 0.6 },
      { x: -0.6, y: 0 }
    ]
  },
  {
    id: 16,
    level: 5,
    difficulty: "medium",
    name: "Tablet Arrow",
    geometry: [
      { x: 0, y: -0.67 },
      { x: -1, y: 0.33 },
      { x: 0, y: 0 },
      { x: 1, y: 0.33 }
    ]
  }

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

export function getShapePoints(shape) {

  const size = 120; // preview shape bigger

  const centerX = 200;
  const centerY = 200;


  return shape.geometry.map(point => ({
    x: centerX + point.x * size,
    y: centerY + point.y * size
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