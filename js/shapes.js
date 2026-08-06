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
      { x: 0.4, y: 0.2 },
      { x: 0.7, y: 1 },
      { x: 0, y: 0.5 }, 
      { x: -0.7, y: 1 },
      { x: -0.4, y: 0.2 },
      { x: -1, y: -0.3 }, 
      { x: -0.3, y: -0.3 }  
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
    id: 17,
    level: 5,
    difficulty: "medium",
    name: "Cross",
    geometry: [
      { x: -0.3, y: -1 },
      { x: 0.3, y: -1 },
      { x: 0.3, y: -0.3 },
      { x: 1, y: -0.3 },
      { x: 1, y: 0.3 },
      { x: 0.3, y: 0.3 },
      { x: 0.3, y: 1 },
      { x: -0.3, y: 1 },
      { x: -0.3, y: 0.3 },
      { x: -1, y: 0.3 },
      { x: -1, y: -0.3 },
      { x: -0.3, y: -0.3 }
    ]
  },

  {
    id: 18,
    level: 5,
    difficulty: "hard",
    name: "Shield",
    geometry: [
      { x: 0, y: -1 },
      { x: 1, y: -0.6 },
      { x: 1, y: 0.2 },
      { x: 0, y: 1 },
      { x: -1, y: 0.2 },
      { x: -1, y: -0.6 }
    ]
  },

  {
    id: 19,
    level: 5,
    difficulty: "hard",
    name: "Lightning",
    geometry: [
      { x: 0.2, y: -1 },
      { x: -0.6, y: -0.1 },
      { x: 0.2, y: -0.1 },
      { x: -0.2, y: 1 },
      { x: 0.8, y: -0.2 },
      { x: 0, y: -0.2 }
    ]
  },

  {
    id: 20,
    level: 5,
    difficulty: "hard",
    name: "Crown",
    geometry: [
      { x: -1, y: -0.8 },
      { x: -0.6, y: 0.2 },
      { x: 0, y: -0.4 },
      { x: 0.6, y: 0.2 },
      { x: 1, y: -0.8 },
      { x: 0.8, y: 1 },
      { x: -0.8, y: 1 }
    ]
  },


  // ---------- Level 6 ----------
  {
    id: 21,
    level: 6,
    difficulty: "hard",
    name: "Anchor",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.2, y: -0.6 },
      { x: 0.2, y: 0 },
      { x: 1, y: 0.3 },
      { x: 0.6, y: 1 },
      { x: 0, y: 0.6 },
      { x: -0.6, y: 1 },
      { x: -1, y: 0.3 },
      { x: -0.2, y: 0 },
      { x: -0.2, y: -0.6 }
    ]
  },

  {
    id: 22,
    level: 6,
    difficulty: "hard",
    name: "Moon",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.6, y: -0.5 },
      { x: 0.8, y: 0.2 },
      { x: 0.4, y: 0.9 },
      { x: -0.2, y: 1 },
      { x: 0.2, y: 0.4 },
      { x: -0.2, y: -0.2 }
    ]
  },

  {
    id: 23,
    level: 6,
    difficulty: "hard",
    name: "Fish",
    geometry: [
      { x: -1, y: 0 },
      { x: -0.5, y: -0.6 },
      { x: 0.5, y: -0.4 },
      { x: 1, y: -1 },
      { x: 0.8, y: 0 },
      { x: 1, y: 1 },
      { x: 0.5, y: 0.4 },
      { x: -0.5, y: 0.6 }
    ]
  },

  {
    id: 24,
    level: 6,
    difficulty: "hard",
    name: "Puzzle Piece",
    geometry: [
      { x: -0.5, y: -0.5 },
      { x: 0, y: -1 },
      { x: 0.5, y: -0.5 },
      { x: 1, y: -0.5 },
      { x: 1, y: 0.5 },
      { x: 0.5, y: 0.5 },
      { x: 0.5, y: 1 },
      { x: -0.5, y: 1 },
      { x: -0.5, y: 0.5 },
      { x: -1, y: 0.5 },
      { x: -1, y: -0.5 }
    ]
  },
  // ---------- Level 8 (Hard) ----------
  {
    id: 29,
    level: 8,
    difficulty: "hard",
    name: "Crown",
    geometry: [
      { x: -1, y: 0.8 },
      { x: 1, y: 0.8 },
      { x: 0.8, y: -0.2 },
      { x: 0.4, y: 0.3 },
      { x: 0, y: -0.8 },
      { x: -0.4, y: 0.3 },
      { x: -0.8, y: -0.2 }
    ]
  },

  {
    id: 30,
    level: 8,
    difficulty: "hard",
    name: "Lightning",
    geometry: [
      { x: 0.2, y: -1 },
      { x: -0.6, y: -0.1 },
      { x: 0.2, y: -0.1 },
      { x: -0.2, y: 1 },
      { x: 0.8, y: -0.3 },
      { x: 0.1, y: -0.3 }
    ]
  },

  {
    id: 31,
    level: 8,
    difficulty: "hard",
    name: "Shield",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.8, y: -0.6 },
      { x: 0.8, y: 0.2 },
      { x: 0, y: 1 },
      { x: -0.8, y: 0.2 },
      { x: -0.8, y: -0.6 }
    ]
  },

  {
    id: 32,
    level: 8,
    difficulty: "hard",
    name: "Hourglass",
    geometry: [
      { x: -0.8, y: -1 },
      { x: 0.8, y: -1 },
      { x: 0, y: 0 },
      { x: 0.8, y: 1 },
      { x: -0.8, y: 1 },
      { x: 0, y: 0 }
    ]
  },
  // ---------- Level 9 (Hard) ----------
  {
    id: 33,
    level: 9,
    difficulty: "hard",
    name: "Ghost",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.8, y: -0.4 },
      { x: 0.8, y: 1 },
      { x: 0.4, y: 0.6 },
      { x: 0, y: 1 },
      { x: -0.4, y: 0.6 },
      { x: -0.8, y: 1 },
      { x: -0.8, y: -0.4 }
    ]
  },

  {
    id: 34,
    level: 9,
    difficulty: "hard",
    name: "Skull",
    geometry: [
      { x: -0.6, y: -1 },
      { x: 0.6, y: -1 },
      { x: 0.8, y: -0.2 },
      { x: 0.4, y: 0.4 },
      { x: 0.4, y: 1 },
      { x: -0.4, y: 1 },
      { x: -0.4, y: 0.4 },
      { x: -0.8, y: -0.2 }
    ]
  },

  {
    id: 35,
    level: 9,
    difficulty: "hard",
    name: "Plane",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.2, y: -0.4 },
      { x: 1, y: 0.2 },
      { x: 0.2, y: 0.4 },
      { x: 0.2, y: 0.8 },
      { x: 0.6, y: 1 },
      { x: -0.6, y: 1 },
      { x: -0.2, y: 0.8 },
      { x: -0.2, y: 0.4 },
      { x: -1, y: 0.2 },
      { x: -0.2, y: -0.4 }
    ]
  },

  {
    id: 36,
    level: 9,
    difficulty: "hard",
    name: "Gamepad",
    geometry: [
      { x: -0.6, y: -0.6 },
      { x: 0.6, y: -0.6 },
      { x: 1, y: -0.2 },
      { x: 0.8, y: 0.6 },
      { x: 0.4, y: 0.2 },
      { x: -0.4, y: 0.2 },
      { x: -0.8, y: 0.6 },
      { x: -1, y: -0.2 }
    ]
  },
  // ---------- Level 10 (Hard) ----------
  {
    id: 37,
    level: 10,
    difficulty: "hard",
    name: "Diamond Ring",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.5, y: -0.5 },
      { x: 0, y: 0 },
      { x: -0.5, y: -0.5 },
      { x: -0.6, y: 0.4 },
      { x: 0, y: 1 },
      { x: 0.6, y: 0.4 }
    ]
  },

  {
    id: 38,
    level: 10,
    difficulty: "hard",
    name: "Key",
    geometry: [
      { x: -0.8, y: -0.8 },
      { x: -0.2, y: -0.8 },
      { x: -0.2, y: -0.2 },
      { x: 1, y: -0.2 },
      { x: 1, y: 0.2 },
      { x: 0.6, y: 0.2 },
      { x: 0.6, y: 0.6 },
      { x: 0.2, y: 0.6 },
      { x: 0.2, y: 0.2 },
      { x: -0.2, y: 0.2 },
      { x: -0.2, y: -0.2 },
      { x: -0.8, y: -0.2 }
    ]
  },

  {
    id: 39,
    level: 10,
    difficulty: "hard",
    name: "Sword",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.2, y: -0.8 },
      { x: 0.2, y: 0.6 },
      { x: 0.8, y: 0.6 },
      { x: 0.8, y: 0.8 },
      { x: -0.8, y: 0.8 },
      { x: -0.8, y: 0.6 },
      { x: -0.2, y: 0.6 },
      { x: -0.2, y: -0.8 }
    ]
  },

  {
    id: 40,
    level: 10,
    difficulty: "hard",
    name: "Mushroom",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.8, y: -0.2 },
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 1 },
      { x: -0.3, y: 1 },
      { x: -0.3, y: 0.2 },
      { x: -0.8, y: -0.2 }
    ]
  },
  // ---------- Level 11 (Hard) ----------
  {
    id: 41,
    level: 11,
    difficulty: "hard",
    name: "Trophy",
    geometry: [
      { x: -0.6, y: -1 },
      { x: 0.6, y: -1 },
      { x: 0.6, y: -0.2 },
      { x: 1, y: -0.2 },
      { x: 1, y: 0.2 },
      { x: 0.2, y: 0.2 },
      { x: 0.2, y: 0.6 },
      { x: 0.4, y: 1 },
      { x: -0.4, y: 1 },
      { x: -0.2, y: 0.6 },
      { x: -0.2, y: 0.2 },
      { x: -1, y: 0.2 },
      { x: -1, y: -0.2 },
      { x: -0.6, y: -0.2 }
    ]
  },

  {
    id: 42,
    level: 11,
    difficulty: "hard",
    name: "Crown Gem",
    geometry: [
      { x: -0.8, y: -0.4 },
      { x: -0.4, y: -1 },
      { x: 0.4, y: -1 },
      { x: 0.8, y: -0.4 },
      { x: 1, y: 0.4 },
      { x: 0, y: 1 },
      { x: -1, y: 0.4 }
    ]
  },

  {
    id: 43,
    level: 11,
    difficulty: "hard",
    name: "Castle",
    geometry: [
      { x: -1, y: 1 },
      { x: -1, y: -0.6 },
      { x: -0.6, y: -0.6 },
      { x: -0.6, y: -1 },
      { x: -0.2, y: -1 },
      { x: -0.2, y: -0.6 },
      { x: 0.2, y: -0.6 },
      { x: 0.2, y: -1 },
      { x: 0.6, y: -1 },
      { x: 0.6, y: -0.6 },
      { x: 1, y: -0.6 },
      { x: 1, y: 1 }
    ]
  },

  {
    id: 44,
    level: 11,
    difficulty: "hard",
    name: "Saturn",
    geometry: [
      { x: 0, y: -0.6 },
      { x: 0.6, y: -0.6 },
      { x: 1, y: -0.2 },
      { x: 0.6, y: 0.2 },
      { x: 0, y: 0.6 },
      { x: -0.6, y: 0.2 },
      { x: -1, y: -0.2 },
      { x: -0.6, y: -0.6 }
    ]
  },
  // ---------- Level 12 (Hard) ----------
  {
    id: 45,
    level: 12,
    difficulty: "hard",
    name: "Hourglass Star",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.5, y: -0.5 },
      { x: 1, y: -1 },
      { x: 0.5, y: 0 },
      { x: 1, y: 1 },
      { x: 0.5, y: 0.5 },
      { x: 0, y: 1 },
      { x: -0.5, y: 0.5 },
      { x: -1, y: 1 },
      { x: -0.5, y: 0 },
      { x: -1, y: -1 },
      { x: -0.5, y: -0.5 }
    ]
  },

  {
    id: 46,
    level: 12,
    difficulty: "hard",
    name: "Crystal",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.7, y: -0.4 },
      { x: 0.4, y: 1 },
      { x: -0.4, y: 1 },
      { x: -0.7, y: -0.4 }
    ]
  },

  {
    id: 47,
    level: 12,
    difficulty: "hard",
    name: "Comet",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.6, y: -0.4 },
      { x: 1, y: 1 },
      { x: 0, y: 0.4 },
      { x: -1, y: 1 },
      { x: -0.6, y: -0.4 }
    ]
  },

  {
    id: 48,
    level: 12,
    difficulty: "hard",
    name: "Hexagram",
    geometry: [
      { x: 0, y: -1 },
      { x: 0.8, y: 0.5 },
      { x: -0.8, y: 0.5 },
      { x: 0, y: 1 },
      { x: -0.8, y: -0.5 },
      { x: 0.8, y: -0.5 }
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