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