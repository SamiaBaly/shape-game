import { getRandomShape } from "./shapes.js";

export const game = {
  score: 0,
  level: 1,

  currentShape: getRandomShape(),

  dots: [],
  selectedDots: [],

  isDrawing: false,
};